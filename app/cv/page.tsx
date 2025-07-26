"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, FileText } from "lucide-react"
import { useState } from "react"

import dynamic from "next/dynamic"
const PDFViewer = dynamic(() => import("../../components/pdf-viewer"), { ssr: false })

export default function CVPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handlePDFLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  const handlePDFError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <main className="min-h-screen bg-black flex flex-col">
      {/* Skip to content link for screen readers */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded-md z-50 font-medium"
      >
        Saltar al contenido principal
      </a>
      
      {/* Header - More compact on mobile */}
      <header className="relative z-10 p-2 sm:p-4 lg:p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            className="flex items-center gap-1 sm:gap-2 text-white hover:bg-white/10 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg transition-all duration-200 text-sm sm:text-base"
            onClick={() => router.back()}
            aria-label="Regresar a la página anterior"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            <span className="font-medium">Regresar</span>
          </Button>
          
          <div className="flex items-center gap-2 sm:hidden">
            <FileText className="w-4 h-4 text-white/70" aria-hidden="true" />
            <span className="text-white/70 text-xs font-medium">CV</span>
          </div>
          
          <div className="hidden sm:flex items-center gap-2">
            <FileText className="w-5 h-5 text-white/70" aria-hidden="true" />
            <span className="text-white/70 text-sm font-medium">Curriculum Vitae</span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div id="main-content" className="flex-1 px-2 sm:px-4 pb-4 sm:pb-6 lg:px-6 lg:pb-8">
        <div className="max-w-5xl mx-auto">
          {/* Title - Hidden on mobile to save space */}
          <div className="text-center mb-4 sm:mb-6 lg:mb-8 hidden sm:block">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight">
              Mi Curriculum Vitae
            </h1>
            <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Desarrollador Full Stack con experiencia en tecnologías modernas
            </p>
          </div>
          
          {/* Mobile title - compact version */}
          <div className="text-center mb-3 sm:hidden">
            <h1 className="text-lg font-bold text-white tracking-tight">
              Curriculum Vitae
            </h1>
          </div>

          {/* PDF Container */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            {/* PDF Viewer */}
            <div className="relative">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                  <div className="text-center text-white">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white mb-4"></div>
                    <p className="text-sm font-medium">Cargando CV...</p>
                  </div>
                </div>
              )}
              
              {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                  <div className="text-center text-white p-6">
                    <FileText className="w-12 h-12 mx-auto mb-4 text-white/50" />
                    <p className="text-lg font-semibold mb-2">Error al cargar el CV</p>
                    <p className="text-sm text-white/70 mb-4">No se pudo mostrar el archivo PDF</p>
                    <Button
                      onClick={() => {
                        setHasError(false)
                        setIsLoading(true)
                      }}
                      className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
                    >
                      Reintentar
                    </Button>
                  </div>
                </div>
              )}
              
              <div className="w-full h-[calc(100vh-140px)] sm:h-[calc(100vh-200px)] min-h-[400px] sm:min-h-[600px] bg-black rounded-xl overflow-hidden">
                <PDFViewer 
                  fileUrl="/cv/cv_MaxUrielSanchezDiaz.pdf" 
                  onLoad={handlePDFLoad}
                  onError={handlePDFError}
                />
              </div>
            </div>

            {/* Action buttons - Hidden on mobile since fallback UI has its own buttons */}
            <div className="hidden sm:block p-4 sm:p-6 bg-black/20 backdrop-blur-sm border-t border-white/10">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
                <a
                  href="/cv/cv_MaxUrielSanchezDiaz.pdf"
                  download="cv_MaxUrielSanchezDiaz.pdf"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:from-blue-600 focus:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transform hover:scale-[1.02] active:scale-[0.98]"
                  aria-label="Descargar CV en formato PDF"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  <span>Descargar PDF</span>
                </a>
                
                <a
                  href="/cv/cv_MaxUrielSanchezDiaz.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 focus:bg-white/20 text-white px-6 py-3 rounded-xl font-medium border border-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 transform hover:scale-[1.02] active:scale-[0.98]"
                  aria-label="Abrir CV en nueva pestaña"
                >
                  <FileText className="w-4 h-4" aria-hidden="true" />
                  <span>Abrir en nueva pestaña</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
