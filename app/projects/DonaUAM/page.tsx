
"use client"

import { useState } from "react"
import * as React from "react"
import { ChevronLeft, ChevronRight, X, ExternalLink, Github, Shield, Users, Monitor, HeartHandshake, Banknote, BarChart3, University } from "lucide-react"
import Image from "next/image"

const projectImages = [
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753645302/9c9848ed-1661-45a4-b65a-a35b6853dead.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753645312/a9eb2778-3a23-4e5e-8cd2-9789ecb99bd7.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753645324/1546c611-6e10-44fe-8ec8-9f07d2bafbe5.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753645334/90c1bbf4-2094-402c-9716-bda3cf2c7226.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753645346/9eda6ab8-977d-404b-8c89-03292459ba1d.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753645359/a0918fab-7a55-472c-a5bc-bdaf03b91550.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753645359/a0918fab-7a55-472c-a5bc-bdaf03b91550.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753645369/4723e52d-1932-410c-b397-82120b22d9ce.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753645384/aa609beb-9e2e-4259-bf52-7087a200e75a.png"
]

export default function DonaUAMProject() {
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

  const features = [
    {
      icon: <HeartHandshake className="w-6 h-6" />, title: "Donación Fácil y Segura", description: "Formulario intuitivo, métodos de pago seguros y confirmaciones automáticas."
    },
    {
      icon: <Users className="w-6 h-6" />, title: "Panel para Donantes", description: "Consulta historial, seguimiento y transparencia de tus donativos."
    },
    {
      icon: <Shield className="w-6 h-6" />, title: "Gestión Administrativa", description: "Panel de control para campañas, proyectos y reportes detallados."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />, title: "Reportes y Estadísticas", description: "Visualización y exportación de datos segmentados por periodo y destino."
    }
  ]

  const technologies = [
    { name: "OpenAI", color: "bg-sky-700 text-white" },
    { name: "React", color: "bg-purple-600 text-white" },
    { name: "Tailwind CSS", color: "bg-indigo-500 text-white" },
    { name: "JavaScript", color: "bg-yellow-600 text-white" },
    { name: "GSAP", color: "bg-green-700 text-white" },
    { name: "Vite", color: "bg-pink-600 text-white" },
    { name: "Node.js", color: "bg-green-800 text-white" },
    { name: "Express", color: "bg-gray-800 text-white" },
    { name: "MongoDB", color: "bg-green-600 text-white" },
    { name: "Google Cloud", color: "bg-blue-700 text-white" },
    { name: "AWS", color: "bg-orange-500 text-white" }
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-indigo-900/30 to-purple-800/30" />
        <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <University className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 mr-3 sm:mr-4" aria-hidden="true" />
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
              DonaUAM
            </h1>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-purple-200 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
            Sistema de Donativos para la Universidad Autónoma Metropolitana
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
            <a
              href="https://donauam.maxitodev.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver demo de DonaUAM (abre en nueva ventana)"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:ring-4 focus:ring-purple-500/50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px] text-center"
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              Ver Demo
            </a>
            <a
              href="https://github.com/maxitodev/DonaUAM"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver código fuente en GitHub (abre en nueva ventana)"
              className="border border-purple-600 hover:border-purple-400 focus:ring-4 focus:ring-purple-500/50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px] text-center"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              Código Fuente
            </a>
          </div>
        </div>
      </header>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20 container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Galería del Proyecto
        </h2>
        <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
          <div className="relative bg-purple-950 rounded-lg overflow-hidden">
            <Image
              src={projectImages[currentImageIndex]}
              alt={`Captura de pantalla ${currentImageIndex + 1} de DonaUAM`}
              width={1200}
              height={800}
              className="w-full h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              priority={currentImageIndex === 0}
              quality={85}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 95vw, (max-width: 1200px) 90vw, 1000px"
            />
            <button onClick={() => navigateImage('prev')} aria-label="Imagen anterior" className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 focus:bg-opacity-70 focus:ring-2 focus:ring-purple-400/50 rounded-full p-2 sm:p-3 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center">
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            <button onClick={() => navigateImage('next')} aria-label="Imagen siguiente" className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 focus:bg-opacity-70 focus:ring-2 focus:ring-purple-400/50 rounded-full p-2 sm:p-3 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center">
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            <button onClick={() => openImageModal(currentImageIndex)} aria-label="Ver imagen en pantalla completa" className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black bg-opacity-50 hover:bg-opacity-70 focus:bg-opacity-70 focus:ring-2 focus:ring-purple-400/50 rounded-full p-2 sm:p-3 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center">
              <Monitor className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-2 px-2 sm:px-0 scrollbar-hide" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            {projectImages.map((image, index) => (
              <button key={index} onClick={() => setCurrentImageIndex(index)} aria-label={`Ver imagen ${index + 1} de ${projectImages.length}`} className={`flex-shrink-0 w-16 h-12 sm:w-20 sm:h-16 md:w-24 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 focus:ring-2 focus:ring-purple-500/50 min-h-[48px] ${index === currentImageIndex ? 'border-purple-500 ring-2 ring-purple-500/50' : 'border-purple-900 hover:border-purple-400'}`}>
                <Image src={image} alt={`Miniatura ${index + 1}`} width={160} height={120} className="w-full h-full object-cover" quality={60} sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px" />
              </button>
            ))}
          </div>
          <div className="text-center mt-3 sm:mt-4">
            <span className="text-purple-300 text-sm sm:text-base" aria-live="polite">
              Imagen {currentImageIndex + 1} de {projectImages.length}
            </span>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 sm:p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={e => { if (e.target === e.currentTarget) closeImageModal() }}>
          <div className="relative max-w-4xl w-full">
            <button onClick={closeImageModal} aria-label="Cerrar imagen" className="absolute top-2 sm:top-4 right-2 sm:right-4 z-60 bg-black bg-opacity-50 hover:bg-opacity-70 focus:bg-opacity-70 focus:ring-2 focus:ring-purple-400/50 rounded-full p-2 sm:p-3 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center">
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            <h2 id="modal-title" className="sr-only">Imagen {currentImageIndex + 1} de {projectImages.length} - DonaUAM</h2>
            <Image src={projectImages[currentImageIndex]} alt={`Captura de pantalla completa ${currentImageIndex + 1} de DonaUAM`} width={1200} height={800} className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg" quality={90} sizes="(max-width: 480px) 95vw, (max-width: 1200px) 90vw, 1200px" priority={true} />
            <button onClick={() => navigateImage('prev')} aria-label="Imagen anterior" className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 focus:bg-opacity-70 focus:ring-2 focus:ring-purple-400/50 rounded-full p-3 sm:p-4 transition-all duration-300 min-h-[52px] min-w-[52px] flex items-center justify-center">
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </button>
            <button onClick={() => navigateImage('next')} aria-label="Imagen siguiente" className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 focus:bg-opacity-70 focus:ring-2 focus:ring-purple-400/50 rounded-full p-3 sm:p-4 transition-all duration-300 min-h-[52px] min-w-[52px] flex items-center justify-center">
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </button>
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2">
              {projectImages.map((_, index) => (
                <button key={index} onClick={() => setCurrentImageIndex(index)} aria-label={`Ir a imagen ${index + 1}`} className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 min-h-[24px] min-w-[24px] flex items-center justify-center ${index === currentImageIndex ? 'bg-white' : 'bg-purple-500 hover:bg-purple-400'}`}></button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Description Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-purple-950/60">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              ¿Cómo funciona?
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <ul className="list-disc pl-6 text-purple-200 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                <li>Permite a los usuarios donar o solicitar artículos en buen estado que ya no utilicen.</li>
                <li>Los estudiantes pueden ofrecer productos o pedir aquellos que necesiten.</li>
                <li>Coordinan directamente la entrega con otros usuarios de manera segura y eficiente.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-purple-900/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Beneficios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-purple-950/60 border border-purple-800 rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-pink-400 mb-2">Apoyo comunitario</h3>
                <p className="text-purple-200">Entre miembros de la comunidad universitaria</p>
              </div>
              <div className="bg-purple-950/60 border border-purple-800 rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-pink-400 mb-2">Evitar desperdicio</h3>
                <p className="text-purple-200">De recursos y materiales útiles</p>
              </div>
              <div className="bg-purple-950/60 border border-purple-800 rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-pink-400 mb-2">Cultura de ayuda</h3>
                <p className="text-purple-200">Fomenta la solidaridad estudiantil</p>
              </div>
              <div className="bg-purple-950/60 border border-purple-800 rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-pink-400 mb-2">Segunda vida</h3>
                <p className="text-purple-200">A objetos funcionales y útiles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Características Destacadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <article key={index} className="bg-purple-950/60 border border-purple-800 rounded-lg p-4 sm:p-6 hover:border-pink-500/50 focus-within:border-pink-500/50 transition-colors duration-300">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-purple-200 text-sm sm:text-base leading-relaxed">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-12 sm:py-16 lg:py-20 bg-purple-900/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Funcionalidades Detalladas
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-pink-400">Para Donantes</h3>
                <ul className="space-y-3 sm:space-y-4 text-purple-200" role="list">
                  <li className="flex items-start text-sm sm:text-base"><span className="text-pink-400 mr-2 mt-1 flex-shrink-0" aria-hidden="true">•</span><span>Formulario intuitivo para registrar donativos, con opciones de monto, periodicidad y destino.</span></li>
                  <li className="flex items-start text-sm sm:text-base"><span className="text-pink-400 mr-2 mt-1 flex-shrink-0" aria-hidden="true">•</span><span>Métodos de pago seguros y confirmaciones automáticas por correo electrónico.</span></li>
                  <li className="flex items-start text-sm sm:text-base"><span className="text-pink-400 mr-2 mt-1 flex-shrink-0" aria-hidden="true">•</span><span>Panel de seguimiento para consultar el historial de donaciones realizadas.</span></li>
                  <li className="flex items-start text-sm sm:text-base"><span className="text-pink-400 mr-2 mt-1 flex-shrink-0" aria-hidden="true">•</span><span>Información clara sobre el impacto de los donativos y los proyectos apoyados.</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-purple-400">Para Administradores</h3>
                <ul className="space-y-3 sm:space-y-4 text-purple-200" role="list">
                  <li className="flex items-start text-sm sm:text-base"><span className="text-pink-400 mr-2 mt-1 flex-shrink-0" aria-hidden="true">•</span><span>Panel de gestión para visualizar, filtrar y exportar registros de donativos.</span></li>
                  <li className="flex items-start text-sm sm:text-base"><span className="text-pink-400 mr-2 mt-1 flex-shrink-0" aria-hidden="true">•</span><span>Herramientas para la administración de campañas, proyectos y destinatarios de los fondos.</span></li>
                  <li className="flex items-start text-sm sm:text-base"><span className="text-pink-400 mr-2 mt-1 flex-shrink-0" aria-hidden="true">•</span><span>Reportes y estadísticas sobre el flujo de donaciones, segmentados por periodo, tipo de donante y destino.</span></li>
                  <li className="flex items-start text-sm sm:text-base"><span className="text-pink-400 mr-2 mt-1 flex-shrink-0" aria-hidden="true">•</span><span>Control de usuarios, permisos y auditoría de operaciones para garantizar la seguridad y transparencia.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Stack Tecnológico
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto px-2">
            {technologies.map((tech, index) => (
              <span key={index} className={`${tech.color} px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm hover:scale-105 focus:scale-105 transition-transform duration-300 cursor-default border-2 border-purple-500/30 hover:border-purple-400/50`} role="listitem">{tech.name}</span>
            ))}
          </div>
          <p className="text-center text-purple-200 mt-6 sm:mt-8 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Tecnologías modernas utilizadas en el desarrollo de DonaUAM.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-pink-900/20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Visión a Futuro
          </h2>
          <p className="text-base sm:text-lg text-purple-200 max-w-3xl mx-auto leading-relaxed px-2">
            DonaUAM está pensado como una plataforma escalable y adaptable, capaz de integrar nuevos métodos de pago, mayor personalización de campañas y reportes, así como la automatización de procesos administrativos para una gestión aún más eficiente de los recursos donados.
          </p>
        </div>
      </section>

      {/* Back to Portfolio */}
      <footer className="py-8 sm:py-10 lg:py-12 border-t border-purple-900">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <a href="/#proyectos" aria-label="Volver a la sección de proyectos del portafolio" className="inline-flex items-center gap-2 text-purple-400 hover:text-pink-300 focus:text-pink-300 focus:ring-2 focus:ring-purple-400/50 transition-colors duration-300 font-semibold p-2 rounded-lg min-h-[44px]">
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Volver al Portafolio</span>
          </a>
        </div>
      </footer>
    </main>
  )
}
