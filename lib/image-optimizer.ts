import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

interface OptimizeOptions {
  quality?: number
  width?: number
  height?: number
  format?: 'webp' | 'avif' | 'jpeg' | 'png'
  outputDir?: string
}

export async function optimizeImage(
  inputPath: string, 
  options: OptimizeOptions = {}
) {
  const {
    quality = 80,
    width,
    height,
    format = 'webp',
    outputDir = path.dirname(inputPath)
  } = options

  try {
    const inputBuffer = fs.readFileSync(inputPath)
    const filename = path.basename(inputPath, path.extname(inputPath))
    const outputPath = path.join(outputDir, `${filename}-optimized.${format}`)

    let sharpInstance = sharp(inputBuffer)

    // Redimensionar si se especifican dimensiones
    if (width || height) {
      sharpInstance = sharpInstance.resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true
      })
    }

    // Aplicar formato y calidad
    switch (format) {
      case 'webp':
        sharpInstance = sharpInstance.webp({ quality })
        break
      case 'avif':
        sharpInstance = sharpInstance.avif({ quality })
        break
      case 'jpeg':
        sharpInstance = sharpInstance.jpeg({ quality })
        break
      case 'png':
        sharpInstance = sharpInstance.png({ quality })
        break
    }

    await sharpInstance.toFile(outputPath)
    
    const originalSize = fs.statSync(inputPath).size
    const optimizedSize = fs.statSync(outputPath).size
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1)

    return {
      originalPath: inputPath,
      optimizedPath: outputPath,
      originalSize,
      optimizedSize,
      savings: `${savings}%`
    }
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error)
    throw error
  }
}

export async function batchOptimizeImages(
  inputDir: string,
  options: OptimizeOptions = {}
) {
  const imageExtensions = ['.jpg', '.jpeg', '.png']
  const results = []

  const files = fs.readdirSync(inputDir)
  
  for (const file of files) {
    const filePath = path.join(inputDir, file)
    const ext = path.extname(file).toLowerCase()
    
    if (imageExtensions.includes(ext) && fs.statSync(filePath).isFile()) {
      try {
        const result = await optimizeImage(filePath, options)
        results.push(result)
        console.log(`✅ Optimized: ${file} - Saved ${result.savings}`)
      } catch (error) {
        console.error(`❌ Failed to optimize: ${file}`)
        results.push({
          originalPath: filePath,
          error: error.message
        })
      }
    }
  }

  return results
}

// Generar múltiples tamaños para imágenes responsive
export async function generateResponsiveSizes(
  inputPath: string,
  sizes: number[] = [400, 800, 1200, 1600],
  formats: ('webp' | 'avif' | 'jpeg')[] = ['webp', 'avif']
) {
  const results = []
  const filename = path.basename(inputPath, path.extname(inputPath))
  const outputDir = path.dirname(inputPath)

  for (const size of sizes) {
    for (const format of formats) {
      try {
        const outputPath = path.join(outputDir, `${filename}-${size}w.${format}`)
        
        await sharp(inputPath)
          .resize(size, null, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .toFormat(format, { quality: 80 })
          .toFile(outputPath)

        results.push({
          width: size,
          format,
          path: outputPath
        })
      } catch (error) {
        console.error(`Error generating ${size}w ${format}:`, error)
      }
    }
  }

  return results
}
