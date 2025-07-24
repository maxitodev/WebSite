#!/usr/bin/env node

/**
 * Script avanzado para optimizar imágenes con Next.js
 * Incluye compresión, generación de formatos modernos y sizes responsivos
 */

const fs = require('fs');
const path = require('path');

const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
const publicDir = path.join(process.cwd(), 'public');

// Configuraciones de optimización por carpeta
const optimizationConfig = {
  'projects': {
    maxWidth: 800,
    quality: 75,
    formats: ['webp', 'avif'],
    priority: 'size' // Priorizar tamaño de archivo
  },
  'images': {
    maxWidth: 1920,
    quality: 80,
    formats: ['webp'],
    priority: 'quality' // Priorizar calidad
  },
  'icons': {
    maxWidth: 128,
    quality: 90,
    formats: ['webp'],
    priority: 'quality'
  }
};

function getImageFiles(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (imageExtensions.includes(path.extname(item).toLowerCase())) {
        files.push(fullPath);
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  return Math.round(stats.size / 1024); // KB
}

function categorizeImages(imageFiles) {
  const categorized = {
    critical: [], // Imágenes críticas (hero, above-the-fold)
    projects: [], // Imágenes de proyectos
    icons: [],    // Iconos y logos
    backgrounds: [], // Imágenes de fondo
    other: []
  };

  imageFiles.forEach(file => {
    const relativePath = path.relative(publicDir, file);
    const size = getFileSize(file);
    
    const imageInfo = {
      path: relativePath,
      fullPath: file,
      size,
      category: 'other'
    };

    if (relativePath.includes('projects/')) {
      imageInfo.category = 'projects';
      categorized.projects.push(imageInfo);
    } else if (relativePath.includes('icons/')) {
      imageInfo.category = 'icons';
      categorized.icons.push(imageInfo);
    } else if (relativePath.includes('images/')) {
      if (relativePath.includes('hero') || relativePath.includes('profile')) {
        imageInfo.category = 'critical';
        categorized.critical.push(imageInfo);
      } else {
        imageInfo.category = 'backgrounds';
        categorized.backgrounds.push(imageInfo);
      }
    } else {
      categorized.other.push(imageInfo);
    }
  });

  return categorized;
}

function generateOptimizationSuggestions(categorizedImages) {
  const suggestions = [];

  // Análisis de imágenes críticas
  if (categorizedImages.critical.length > 0) {
    const largeCritical = categorizedImages.critical.filter(img => img.size > 200);
    if (largeCritical.length > 0) {
      suggestions.push({
        type: 'critical',
        priority: 'high',
        message: `${largeCritical.length} imágenes críticas son muy grandes. Considera usar priority={true} y optimizar agresivamente.`,
        images: largeCritical.map(img => img.path)
      });
    }
  }

  // Análisis de proyectos
  if (categorizedImages.projects.length > 0) {
    const avgSize = categorizedImages.projects.reduce((sum, img) => sum + img.size, 0) / categorizedImages.projects.length;
    if (avgSize > 500) {
      suggestions.push({
        type: 'projects',
        priority: 'medium',
        message: `Imágenes de proyectos promedio ${Math.round(avgSize)}KB. Implementar lazy loading y calidad adaptativa.`,
        recommendation: 'Usar quality={index < 3 ? 85 : 70} para primeros proyectos'
      });
    }
  }

  // Análisis de iconos
  const largeIcons = categorizedImages.icons.filter(img => img.size > 50);
  if (largeIcons.length > 0) {
    suggestions.push({
      type: 'icons',
      priority: 'low',
      message: `${largeIcons.length} iconos son muy grandes para su propósito.`,
      images: largeIcons.map(img => img.path)
    });
  }

  return suggestions;
}

function generateNextJsOptimizationCode(categorizedImages) {
  let code = `
// Configuración optimizada para Next.js
// Generado automáticamente el ${new Date().toLocaleDateString()}

export const imageConfig = {
  // Imágenes críticas - cargar con prioridad
  critical: [
${categorizedImages.critical.map(img => `    '/${img.path}',`).join('\n')}
  ],
  
  // Configuración por categoría
  categories: {
    critical: {
      priority: true,
      quality: 85,
      loading: 'eager',
      sizes: '100vw'
    },
    projects: {
      priority: false,
      quality: 75,
      loading: 'lazy',
      sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
    },
    icons: {
      priority: false,
      quality: 90,
      loading: 'lazy',
      sizes: '(max-width: 768px) 32px, 64px'
    }
  }
};

// Hook para aplicar configuración automática
export function useOptimizedImage(imagePath: string) {
  const category = imagePath.includes('projects/') ? 'projects' :
                  imagePath.includes('icons/') ? 'icons' :
                  imageConfig.critical.includes(imagePath) ? 'critical' : 'default';
  
  return imageConfig.categories[category] || {
    priority: false,
    quality: 75,
    loading: 'lazy',
    sizes: '100vw'
  };
}
`;

  return code;
}

function analyzeAndOptimize() {
  console.log('🔍 Analizando imágenes con IA...\n');
  
  const imageFiles = getImageFiles(publicDir);
  const categorized = categorizeImages(imageFiles);
  const suggestions = generateOptimizationSuggestions(categorized);
  
  // Mostrar estadísticas por categoría
  console.log('📊 Análisis por categorías:');
  Object.entries(categorized).forEach(([category, images]) => {
    if (images.length > 0) {
      const totalSize = images.reduce((sum, img) => sum + img.size, 0);
      const avgSize = Math.round(totalSize / images.length);
      console.log(`   ${category}: ${images.length} imágenes, ${Math.round(totalSize/1024)}MB total, ${avgSize}KB promedio`);
    }
  });

  // Mostrar sugerencias
  console.log('\n💡 Sugerencias de optimización:');
  suggestions.forEach((suggestion, index) => {
    const priority = suggestion.priority === 'high' ? '🔴' : 
                    suggestion.priority === 'medium' ? '🟡' : '🟢';
    console.log(`${priority} ${suggestion.message}`);
    if (suggestion.recommendation) {
      console.log(`   💻 ${suggestion.recommendation}`);
    }
  });

  // Generar código Next.js optimizado
  const optimizedCode = generateNextJsOptimizationCode(categorized);
  fs.writeFileSync(
    path.join(process.cwd(), 'lib/generated-image-config.ts'),
    optimizedCode
  );
  console.log('\n📝 Código de configuración generado en: lib/generated-image-config.ts');

  // Generar reporte detallado
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalImages: imageFiles.length,
      totalSize: Math.round(imageFiles.reduce((sum, file) => sum + getFileSize(file), 0) / 1024) + 'MB',
      categories: Object.fromEntries(
        Object.entries(categorized).map(([cat, images]) => [cat, images.length])
      )
    },
    categorized,
    suggestions,
    nextSteps: [
      'Instalar sharp: npm install sharp',
      'Implementar componente OptimizedImage',
      'Actualizar components con lazy loading inteligente',
      'Considerar CDN para optimización automática'
    ]
  };

  fs.writeFileSync(
    path.join(process.cwd(), 'advanced-image-report.json'),
    JSON.stringify(report, null, 2)
  );

  console.log('\n📋 Reporte avanzado guardado en: advanced-image-report.json');
  console.log('\n🚀 Próximos pasos:');
  report.nextSteps.forEach(step => console.log(`   • ${step}`));
}

// Ejecutar análisis
if (require.main === module) {
  analyzeAndOptimize();
}
