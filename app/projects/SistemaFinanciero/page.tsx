"use client"

import { useState } from "react"
import * as React from "react"
import { ChevronLeft, ChevronRight, X, Github, Monitor, BarChart3, TrendingUp, Calculator, DollarSign, PieChart, LineChart, Target, Activity, Zap, Settings, ArrowUpDown, Eye, FileText, Users } from "lucide-react"
import Image from "next/image"

const projectImages = [
  // Agregar aquí las URLs de las imágenes de MacroView
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753651442/d308f4a7-02b9-4fc6-8115-af1a68a562aa.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753651517/167be3bf-f229-414f-9596-de4464470779.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753651526/aa0765b7-323c-4343-8bd3-6d1050a9f5d4.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753651535/4c676fe0-be70-48bb-9267-f662af99b1f5.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753651584/06171d6d-6057-4582-ac8a-3deee7191c7a.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753651609/90ca7f10-0451-4003-9b13-526cb081c72d.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753651618/fd7cf406-cdc9-444d-b5d8-6c2f991645da.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753651630/92e58fa0-d3a1-4037-b3ac-fca396940483.png"
]

export default function MacroViewProject() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openImageModal = (index: number) => {
    setSelectedImage(index)
    setCurrentImageIndex(index)
  }
  const closeImageModal = () => setSelectedImage(null)
  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex(prev => prev === 0 ? projectImages.length - 1 : prev - 1)
    } else {
      setCurrentImageIndex(prev => prev === projectImages.length - 1 ? 0 : prev + 1)
    }
  }
  const handleKeyDown = (event: KeyboardEvent) => {
    if (selectedImage === null) return
    if (event.key === 'Escape') closeImageModal()
    else if (event.key === 'ArrowLeft') navigateImage('prev')
    else if (event.key === 'ArrowRight') navigateImage('next')
  }
  React.useEffect(() => {
    if (selectedImage !== null) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  const technologies = [
    { name: "React 19.0.0", color: "bg-cyan-500 text-white" },
    { name: "Vite", color: "bg-purple-600 text-white" },
    { name: "React Router DOM", color: "bg-cyan-600 text-white" },
    { name: "Chart.js", color: "bg-orange-500 text-white" },
    { name: "React-ChartJS-2", color: "bg-orange-600 text-white" },
    { name: "CSS Moderno", color: "bg-blue-500 text-white" },
    { name: "JavaScript", color: "bg-yellow-500 text-black" }
  ]

  const simulatorFeatures = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Análisis de Variables Macroeconómicas",
      description: "Evalúa cómo las variables como tasa de interés, inflación, crecimiento del PIB, tasa de desempleo y política fiscal afectan las razones financieras"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Estados de Resultados Interactivos",
      description: "Crea y edita estados de resultados completos con cálculos automáticos"
    },
    {
      icon: <ArrowUpDown className="w-6 h-6" />,
      title: "Comparación en Tiempo Real",
      description: "Visualiza el impacto de cambios macroeconómicos con comparaciones lado a lado"
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Cálculo Automático de Ratios",
      description: "Margen EBITDA, Margen Bruto, Margen de Operación, Razón de Cobertura de Intereses"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Indicadores Visuales",
      description: "Resaltado en verde/rojo para mostrar aumentos/disminuciones en los valores"
    }
  ]

  const islmFeatures = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Modelo IS-LM Completo",
      description: "Explora el equilibrio macroeconómico mediante el modelo IS-LM"
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Análisis de Demanda Agregada",
      description: "Herramientas para calcular y visualizar la demanda agregada"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Calculadoras Especializadas",
      description: "Módulos separados para cálculos IS y LM"
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-cyan-900/30 to-indigo-800/30" />
        <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <BarChart3 className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 mr-3 sm:mr-4" aria-hidden="true" />
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-600 bg-clip-text text-transparent">
              MacroView
            </h1>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-4xl mx-auto px-2">
            Tu herramienta para cálculos macroeconómicos y análisis financiero
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
            <a
              href="https://github.com/maxitodev/SistemaFinanciero"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver código fuente en GitHub (abre en nueva ventana)"
              className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 focus:ring-4 focus:ring-blue-400/70 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px] text-center text-black shadow-lg hover:shadow-blue-500/30"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              Código Fuente
            </a>
          </div>
        </div>
      </header>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20 container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Galería del Proyecto
        </h2>
        <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
          <div className="relative bg-gradient-to-br from-blue-950 to-indigo-900 rounded-lg overflow-hidden shadow-xl border border-blue-800/50">
            <Image
              src={projectImages[currentImageIndex]}
              alt={`Captura de pantalla ${currentImageIndex + 1} de MacroView`}
              width={1200}
              height={800}
              className="w-full h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              priority={currentImageIndex === 0}
              quality={85}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 95vw, (max-width: 1200px) 90vw, 1000px"
            />
            <button onClick={() => navigateImage('prev')} aria-label="Imagen anterior" className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 focus:bg-black/90 focus:ring-2 focus:ring-blue-400/70 rounded-full p-2 sm:p-3 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center border border-blue-500/50 hover:border-blue-400">
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            <button onClick={() => navigateImage('next')} aria-label="Imagen siguiente" className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 focus:bg-black/90 focus:ring-2 focus:ring-blue-400/70 rounded-full p-2 sm:p-3 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center border border-blue-500/50 hover:border-blue-400">
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            <button onClick={() => openImageModal(currentImageIndex)} aria-label="Ver imagen en pantalla completa" className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/70 hover:bg-black/90 focus:bg-black/90 focus:ring-2 focus:ring-blue-400/70 rounded-full p-2 sm:p-3 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center border border-blue-500/50 hover:border-blue-400">
              <Monitor className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-2 px-2 sm:px-0 scrollbar-hide" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            {projectImages.map((image, index) => (
              <button key={index} onClick={() => setCurrentImageIndex(index)} aria-label={`Ver imagen ${index + 1} de ${projectImages.length}`} className={`flex-shrink-0 w-16 h-12 sm:w-20 sm:h-16 md:w-24 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 focus:ring-2 focus:ring-blue-500/50 min-h-[48px] ${index === currentImageIndex ? 'border-blue-500 ring-2 ring-blue-500/50' : 'border-blue-900 hover:border-blue-400'}`}>
                <Image src={image} alt={`Miniatura ${index + 1}`} width={160} height={120} className="w-full h-full object-cover" quality={60} sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px" />
              </button>
            ))}
          </div>
          <div className="text-center mt-3 sm:mt-4">
            <span className="text-blue-200 text-sm sm:text-base" aria-live="polite">
              Imagen {currentImageIndex + 1} de {projectImages.length}
            </span>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 sm:p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={e => { if (e.target === e.currentTarget) closeImageModal() }}>
          <div className="relative max-w-4xl w-full">
            <button onClick={closeImageModal} aria-label="Cerrar imagen" className="absolute top-2 sm:top-4 right-2 sm:right-4 z-60 bg-black bg-opacity-50 hover:bg-opacity-70 focus:bg-opacity-70 focus:ring-2 focus:ring-blue-400/50 rounded-full p-2 sm:p-3 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center">
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            <h2 id="modal-title" className="sr-only">Imagen {currentImageIndex + 1} de {projectImages.length} - MacroView</h2>
            <Image src={projectImages[currentImageIndex]} alt={`Captura de pantalla completa ${currentImageIndex + 1} de MacroView`} width={1200} height={800} className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg" quality={90} sizes="(max-width: 480px) 95vw, (max-width: 1200px) 90vw, 1200px" priority={true} />
            <button onClick={() => navigateImage('prev')} aria-label="Imagen anterior" className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 focus:bg-opacity-70 focus:ring-2 focus:ring-blue-400/50 rounded-full p-3 sm:p-4 transition-all duration-300 min-h-[52px] min-w-[52px] flex items-center justify-center">
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </button>
            <button onClick={() => navigateImage('next')} aria-label="Imagen siguiente" className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 focus:bg-opacity-70 focus:ring-2 focus:ring-blue-400/50 rounded-full p-3 sm:p-4 transition-all duration-300 min-h-[52px] min-w-[52px] flex items-center justify-center">
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </button>
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2">
              {projectImages.map((_, index) => (
                <button key={index} onClick={() => setCurrentImageIndex(index)} aria-label={`Ir a imagen ${index + 1}`} className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 min-h-[24px] min-w-[24px] flex items-center justify-center ${index === currentImageIndex ? 'bg-white' : 'bg-blue-500 hover:bg-blue-400'}`}></button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Description Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-blue-950/70 to-blue-900/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Descripción
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed text-center">
                MacroView es una plataforma web diseñada para ayudar a estudiantes y profesionales de economía a calcular y analizar indicadores macroeconómicos clave como el PIB, tasas de interés, modelo IS-LM, inflación, y más.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simulator Features Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Simulador de Impacto Macro-Financiero
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {simulatorFeatures.map((feature, index) => (
              <article key={index} className="bg-blue-950/80 border border-blue-700 shadow-lg rounded-lg p-4 sm:p-6 hover:border-cyan-400/70 focus-within:border-cyan-400/70 transition-all duration-300 hover:shadow-blue-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-blue-400">{feature.icon}</div>
                  <h3 className="font-semibold text-lg text-blue-200">{feature.title}</h3>
                </div>
                <p className="text-blue-100">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IS-LM Calculator Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-cyan-900/40 to-blue-800/30">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Calculadora IS-LM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {islmFeatures.map((feature, index) => (
              <article key={index} className="bg-blue-950/80 border border-blue-700 shadow-lg rounded-lg p-4 sm:p-6 hover:border-cyan-400/70 focus-within:border-cyan-400/70 transition-all duration-300 hover:shadow-blue-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-blue-400">{feature.icon}</div>
                  <h3 className="font-semibold text-lg text-blue-200">{feature.title}</h3>
                </div>
                <p className="text-blue-100">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Tecnologías
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto px-2 mb-8">
            {technologies.map((tech, index) => (
              <span key={index} className={`${tech.color} px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm hover:scale-105 focus:scale-105 transition-transform duration-300 cursor-default border-2 border-blue-500/30 hover:border-blue-400/50`} role="listitem">{tech.name}</span>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-950/80 border border-blue-700 shadow-lg rounded-lg p-4 sm:p-6">
              <h3 className="font-semibold text-lg text-blue-300 mb-2 flex items-center gap-2">
                <LineChart className="w-5 h-5 text-blue-400" />
                Visualización
              </h3>
              <p className="text-blue-100">Chart.js con React-ChartJS-2 para gráficos interactivos y análisis visual.</p>
            </div>
            <div className="bg-blue-950/80 border border-blue-700 shadow-lg rounded-lg p-4 sm:p-6">
              <h3 className="font-semibold text-lg text-blue-300 mb-2 flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-400" />
                Diseño Responsivo
              </h3>
              <p className="text-blue-100">CSS moderno con animaciones y diseño adaptable para todos los dispositivos.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <div className="bg-blue-950/80 border border-blue-700 shadow-lg rounded-lg p-4 sm:p-6 max-w-2xl mx-auto">
              <h3 className="font-semibold text-lg text-blue-300 mb-2 flex items-center justify-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                Composición del Proyecto
              </h3>
              <p className="text-blue-100">JavaScript (72.2%), CSS (27.5%), HTML (0.3%)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Portfolio */}
      <footer className="py-8 sm:py-10 lg:py-12 border-t border-blue-900">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <a href="/#proyectos" aria-label="Volver a la sección de proyectos del portafolio" className="inline-flex items-center gap-2 text-blue-400 hover:text-cyan-300 focus:text-cyan-300 focus:ring-2 focus:ring-blue-400/50 transition-colors duration-300 font-semibold p-2 rounded-lg min-h-[44px]">
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Volver al Portafolio</span>
          </a>
        </div>
      </footer>
    </main>
  )
}