"use client"

import { useEffect, useRef, useState } from "react"
import { FileText, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PDFViewerProps {
  fileUrl: string
  onLoad?: () => void
  onError?: () => void
}

export default function PDFViewer({ fileUrl, onLoad, onError }: PDFViewerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showFallback, setShowFallback] = useState(false)

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(mobile)
      // Show fallback immediately on mobile due to iframe PDF issues
      if (mobile) {
        setShowFallback(true)
        onLoad?.()
      }
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return // Skip iframe setup on mobile
    
    const iframe = iframeRef.current
    if (!iframe) return

    const handleLoad = () => {
      setIsLoaded(true)
      onLoad?.()
    }

    const handleError = () => {
      setShowFallback(true)
      onError?.()
    }

    const loadTimeout = setTimeout(() => {
      if (!isLoaded) {
        setShowFallback(true)
        onError?.()
      }
    }, 5000)

    iframe.addEventListener('load', handleLoad)
    iframe.addEventListener('error', handleError)

    return () => {
      iframe.removeEventListener('load', handleLoad)
      iframe.removeEventListener('error', handleError)
      clearTimeout(loadTimeout)
    }
  }, [fileUrl, onLoad, onError, isLoaded, isMobile])

  // Mobile fallback UI
  if (isMobile || showFallback) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-sm w-full">
          <FileText className="w-16 h-16 mx-auto mb-6 text-blue-400" />
          <h3 className="text-xl font-semibold text-white mb-4">
            Ver Curriculum Vitae
          </h3>
          <p className="text-white/70 text-sm mb-6 leading-relaxed">
            {isMobile 
              ? "Para una mejor experiencia en móvil, abre el PDF directamente:" 
              : "El visor no está disponible. Abre el PDF directamente:"}
          </p>
          
          <div className="space-y-3">
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Abrir PDF</span>
            </a>
            
            <a
              href={fileUrl}
              download="cv_MaxUrielSanchezDiaz.pdf"
              className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium border border-white/20 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText className="w-4 h-4" />
              <span>Descargar</span>
            </a>
          </div>
          
          {!isMobile && (
            <Button
              onClick={() => setShowFallback(false)}
              variant="ghost"
              className="mt-4 text-white/60 hover:text-white hover:bg-white/5 text-sm"
            >
              Intentar cargar visor nuevamente
            </Button>
          )}
        </div>
      </div>
    )
  }

  // Desktop iframe viewer
  return (
    <iframe
      ref={iframeRef}
      src={`${fileUrl}#toolbar=1&navpanes=1&scrollbar=1`}
      title="Curriculum Vitae - Documento PDF"
      className="w-full h-full bg-black border-none transition-opacity duration-300"
      style={{ 
        width: '100%',
        height: '100%',
        opacity: isLoaded ? 1 : 0.8
      }}
      allowFullScreen
      aria-label="Visor de PDF del Curriculum Vitae"
      role="application"
      loading="lazy"
    />
  )
}
