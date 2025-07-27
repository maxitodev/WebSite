"use client"

import { useState } from "react"
import * as React from "react"
import { ChevronLeft, ChevronRight, X, Github, Monitor, Zap, Calculator, Database, CheckCircle, Clock, Shield, Activity, Settings, Eye, FileText, Cpu, HardDrive, Search } from "lucide-react"
import Image from "next/image"

const projectImages = [
  // Agregar aquí las URLs de las imágenes de CalibreConductor
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753652423/bf274078-e8a0-4c4e-88c5-41bace9bbba4.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753652431/8b82e87d-bcc0-49dd-aba8-858bb5a106e9.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753652443/ed526cea-2f3f-415a-b070-461900e08b0c.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753652457/1ceed805-7548-4371-83d0-ae3c8deb15b1.png"
]

export default function CalibreConductorProject() {
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

  const frontendTechnologies = [
    { name: "React.js", color: "bg-cyan-500 text-white" },
    { name: "Axios", color: "bg-purple-500 text-white" },
    { name: "CSS3", color: "bg-blue-500 text-white" }
  ]

  const backendTechnologies = [
    { name: "Node.js", color: "bg-green-700 text-white" }
  ]

  const databaseTechnologies = [
    { name: "MySQL", color: "bg-orange-600 text-white" }
  ]

  const toolsTechnologies = [
    { name: "Dotenv", color: "bg-gray-600 text-white" },
    { name: "MySQL2", color: "bg-orange-700 text-white" },
    { name: "Express", color: "bg-gray-700 text-white" }
  ]

  const mainFeatures = [
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Cálculos Precisos",
      description: "Cálculos exactos para motores y cargas generales según normas técnicas"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Base de Datos Integrada",
      description: "Más de 50 tipos de conductores y 10 motores estándar en la base de datos"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Doble Modo de Cálculo",
      description: "Selección por corriente nominal y verificación por caída de tensión"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Historial Inteligente",
      description: "Registro de cálculos con detalles expandibles para consulta posterior"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Validación en Tiempo Real",
      description: "Verificación automática de parámetros eléctricos durante la entrada de datos"
    }
  ]

  const calculationModes = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Selección por Corriente Nominal",
      description: "Determina el calibre óptimo basado en la corriente nominal del sistema"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Verificación por Caída de Tensión",
      description: "Analiza y valida que la caída de tensión esté dentro de los límites normativos"
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-yellow-900/30 to-orange-800/30" />
        <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-orange-400 mr-3 sm:mr-4" aria-hidden="true" />
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-600 bg-clip-text text-transparent">
              CalibreConductor
            </h1>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-orange-100 mb-6 sm:mb-8 max-w-4xl mx-auto px-2">
            Calculadora de Calibre de Conductor y Caída de Tensión para instalaciones industriales y comerciales
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
            <a
              href="https://github.com/maxitodev/CalibredeConductor"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver código fuente en GitHub (abre en nueva ventana)"
              className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 focus:ring-4 focus:ring-orange-400/70 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px] text-center text-black shadow-lg hover:shadow-orange-500/30"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              Código Fuente
            </a>
          </div>
        </div>
      </header>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20 container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
          Galería del Proyecto
        </h2>
        <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
          <div className="relative bg-gradient-to-br from-orange-950 to-yellow-900 rounded-lg overflow-hidden shadow-xl border border-orange-800/50">
            <Image
              src={projectImages[currentImageIndex]}
              alt={`Captura de pantalla ${currentImageIndex + 1} de CalibreConductor`}
              width={1200}
              height={800}
              className="w-full h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              priority={currentImageIndex === 0}
              quality={85}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 95vw, (max-width: 1200px) 90vw, 1000px"
            />
            <button onClick={() => navigateImage('prev')} aria-label="Imagen anterior" className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 focus:bg-black/90 focus:ring-2 focus:ring-orange-400/70 rounded-full p-2 sm:p-3 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center border border-orange-500/50 hover:border-orange-400">
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            <button onClick={() => navigateImage('next')} aria-label="Imagen siguiente" className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 focus:bg-black/90 focus:ring-2 focus:ring-orange-400/70 rounded-full p-2 sm:p-3 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center border border-orange-500/50 hover:border-orange-400">
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            <button onClick={() => openImageModal(currentImageIndex)} aria-label="Ver imagen en pantalla completa" className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/70 hover:bg-black/90 focus:bg-black/90 focus:ring-2 focus:ring-orange-400/70 rounded-full p-2 sm:p-3 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center border border-orange-500/50 hover:border-orange-400">
              <Monitor className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-2 px-2 sm:px-0 scrollbar-hide" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            {projectImages.map((image, index) => (
              <button key={index} onClick={() => setCurrentImageIndex(index)} aria-label={`Ver imagen ${index + 1} de ${projectImages.length}`} className={`flex-shrink-0 w-16 h-12 sm:w-20 sm:h-16 md:w-24 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 focus:ring-2 focus:ring-orange-500/50 min-h-[48px] ${index === currentImageIndex ? 'border-orange-500 ring-2 ring-orange-500/50' : 'border-orange-900 hover:border-orange-400'}`}>
                <Image src={image} alt={`Miniatura ${index + 1}`} width={160} height={120} className="w-full h-full object-cover" quality={60} sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px" />
              </button>
            ))}
          </div>
          <div className="text-center mt-3 sm:mt-4">
            <span className="text-orange-200 text-sm sm:text-base" aria-live="polite">
              Imagen {currentImageIndex + 1} de {projectImages.length}
            </span>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 sm:p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={e => { if (e.target === e.currentTarget) closeImageModal() }}>
          <div className="relative max-w-4xl w-full">
            <button onClick={closeImageModal} aria-label="Cerrar imagen" className="absolute top-2 sm:top-4 right-2 sm:right-4 z-60 bg-black bg-opacity-50 hover:bg-opacity-70 focus:bg-opacity-70 focus:ring-2 focus:ring-orange-400/50 rounded-full p-2 sm:p-3 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center">
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            <h2 id="modal-title" className="sr-only">Imagen {currentImageIndex + 1} de {projectImages.length} - CalibreConductor</h2>
            <Image src={projectImages[currentImageIndex]} alt={`Captura de pantalla completa ${currentImageIndex + 1} de CalibreConductor`} width={1200} height={800} className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg" quality={90} sizes="(max-width: 480px) 95vw, (max-width: 1200px) 90vw, 1200px" priority={true} />
            <button onClick={() => navigateImage('prev')} aria-label="Imagen anterior" className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 focus:bg-opacity-70 focus:ring-2 focus:ring-orange-400/50 rounded-full p-3 sm:p-4 transition-all duration-300 min-h-[52px] min-w-[52px] flex items-center justify-center">
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </button>
            <button onClick={() => navigateImage('next')} aria-label="Imagen siguiente" className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 focus:bg-opacity-70 focus:ring-2 focus:ring-orange-400/50 rounded-full p-3 sm:p-4 transition-all duration-300 min-h-[52px] min-w-[52px] flex items-center justify-center">
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </button>
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2">
              {projectImages.map((_, index) => (
                <button key={index} onClick={() => setCurrentImageIndex(index)} aria-label={`Ir a imagen ${index + 1}`} className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 min-h-[24px] min-w-[24px] flex items-center justify-center ${index === currentImageIndex ? 'bg-white' : 'bg-orange-500 hover:bg-orange-400'}`}></button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Description Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-orange-950/70 to-orange-900/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Descripción
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-orange-100 text-base sm:text-lg leading-relaxed text-center">
                Herramienta profesional diseñada para ingenieros eléctricos y técnicos especializados. Permite calcular de manera precisa el calibre de conductores eléctricos y analizar la caída de tensión conforme a normas técnicas, optimizando la seguridad y eficiencia de las instalaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Características Principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {mainFeatures.map((feature, index) => (
              <article key={index} className="bg-orange-950/80 border border-orange-700 shadow-lg rounded-lg p-4 sm:p-6 hover:border-yellow-400/70 focus-within:border-yellow-400/70 transition-all duration-300 hover:shadow-orange-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-orange-400">{feature.icon}</div>
                  <h3 className="font-semibold text-lg text-orange-200">{feature.title}</h3>
                </div>
                <p className="text-orange-100">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Calculation Modes Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-yellow-900/40 to-orange-800/30">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Modos de Cálculo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {calculationModes.map((mode, index) => (
              <article key={index} className="bg-orange-950/80 border border-orange-700 shadow-lg rounded-lg p-6 sm:p-8 hover:border-yellow-400/70 focus-within:border-yellow-400/70 transition-all duration-300 hover:shadow-orange-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-orange-400">{mode.icon}</div>
                  <h3 className="font-semibold text-xl text-orange-200">{mode.title}</h3>
                </div>
                <p className="text-orange-100">{mode.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Stack Tecnológico
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            {/* Frontend Card */}
            <div className="bg-orange-950/80 border border-orange-700 shadow-lg rounded-xl p-6 sm:p-8 hover:border-yellow-400/70 transition-all duration-300 hover:shadow-orange-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-orange-200">Frontend</h3>
              </div>
              <div className="space-y-3">
                {frontendTechnologies.map((tech, index) => (
                  <div key={index} className="flex items-center justify-between bg-orange-900/40 px-4 py-3 rounded-lg border border-orange-700/50">
                    <span className="font-medium text-orange-100">{tech.name}</span>
                    <div className={`w-3 h-3 rounded-full ${tech.color.split(' ')[0]}`}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Card */}
            <div className="bg-orange-950/80 border border-orange-700 shadow-lg rounded-xl p-6 sm:p-8 hover:border-yellow-400/70 transition-all duration-300 hover:shadow-orange-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-600 p-3 rounded-lg">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-orange-200">Backend & Base de Datos</h3>
              </div>
              <div className="space-y-3">
                {[...backendTechnologies, ...databaseTechnologies].map((tech, index) => (
                  <div key={index} className="flex items-center justify-between bg-orange-900/40 px-4 py-3 rounded-lg border border-orange-700/50">
                    <span className="font-medium text-orange-100">{tech.name}</span>
                    <div className={`w-3 h-3 rounded-full ${tech.color.split(' ')[0]}`}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Card */}
            <div className="bg-orange-950/80 border border-orange-700 shadow-lg rounded-xl p-6 sm:p-8 hover:border-yellow-400/70 transition-all duration-300 hover:shadow-orange-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gray-600 p-3 rounded-lg">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-orange-200">Herramientas</h3>
              </div>
              <div className="space-y-3">
                {toolsTechnologies.map((tech, index) => (
                  <div key={index} className="flex items-center justify-between bg-orange-900/40 px-4 py-3 rounded-lg border border-orange-700/50">
                    <span className="font-medium text-orange-100">{tech.name}</span>
                    <div className={`w-3 h-3 rounded-full ${tech.color.split(' ')[0]}`}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Card */}
            <div className="bg-orange-950/80 border border-orange-700 shadow-lg rounded-xl p-6 sm:p-8 hover:border-yellow-400/70 transition-all duration-300 hover:shadow-orange-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-orange-200">Características Técnicas</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Eye className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-orange-200 mb-1">Interfaz Intuitiva</h4>
                    <p className="text-orange-100 text-sm">Diseño profesional con validación en tiempo real</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-orange-200 mb-1">Confiabilidad</h4>
                    <p className="text-orange-100 text-sm">Base de datos robusta con +50 conductores</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calculator className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-orange-200 mb-1">Precisión</h4>
                    <p className="text-orange-100 text-sm">Cálculos según normas técnicas eléctricas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Portfolio */}
      <footer className="py-8 sm:py-10 lg:py-12 border-t border-orange-900">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <a href="/#proyectos" aria-label="Volver a la sección de proyectos del portafolio" className="inline-flex items-center gap-2 text-orange-400 hover:text-yellow-300 focus:text-yellow-300 focus:ring-2 focus:ring-orange-400/50 transition-colors duration-300 font-semibold p-2 rounded-lg min-h-[44px]">
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Volver al Portafolio</span>
          </a>
        </div>
      </footer>
    </main>
  )
}