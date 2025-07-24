import { useEffect, useRef, useState } from 'react'

interface VideoWithPosterProps {
  src: string
  className?: string
  style?: React.CSSProperties
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  playsInline?: boolean
  preload?: 'none' | 'metadata' | 'auto'
}

export function VideoWithPoster({
  src,
  className,
  style,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = 'metadata'
}: VideoWithPosterProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [posterDataUrl, setPosterDataUrl] = useState<string>('')
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    const canvas = canvasRef.current
    
    if (!video || !canvas) return

    const generatePoster = () => {
      try {
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Configurar canvas con las dimensiones del video
        canvas.width = video.videoWidth || 1920
        canvas.height = video.videoHeight || 1080

        // Dibujar el primer frame del video
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

        // Aplicar filtros similares al video
        ctx.filter = 'brightness(1) contrast(1.2)'
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

        // Convertir a data URL
        const dataUrl = canvas.toDataURL('image/jpeg', 0.8)
        setPosterDataUrl(dataUrl)
        setVideoLoaded(true)
      } catch (error) {
        console.warn('No se pudo generar poster del video:', error)
        setVideoLoaded(true)
      }
    }

    const handleLoadedData = () => {
      // Esperar un frame antes de generar el poster
      setTimeout(generatePoster, 100)
    }

    video.addEventListener('loadeddata', handleLoadedData)
    
    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
    }
  }, [src])

  return (
    <div className="relative w-full h-full">
      {/* Canvas oculto para generar poster */}
      <canvas 
        ref={canvasRef} 
        className="hidden" 
      />
      
      {/* Poster fallback mientras carga el video */}
      {!videoLoaded && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center"
          style={style}
        >
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-gray-600 border-t-gray-400 rounded-full animate-spin mb-4 mx-auto"></div>
            <p className="text-gray-400 text-sm">Cargando video...</p>
          </div>
        </div>
      )}

      {/* Video principal */}
      <video
        ref={videoRef}
        className={className}
        style={style}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        preload={preload}
        poster={posterDataUrl || undefined}
        onLoadStart={() => setVideoLoaded(false)}
        onCanPlay={() => setVideoLoaded(true)}
      >
        <source src={src} type="video/webm" />
        <source src={src.replace('.webm', '.mp4')} type="video/mp4" />
        Tu navegador no soporta el elemento video.
      </video>
    </div>
  )
}
