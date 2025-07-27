"use client"

import { useState } from "react"
import * as React from "react"
import { ChevronLeft, ChevronRight, X, ExternalLink, Github, ShoppingCart, Users, Shield, Smartphone, Monitor, Gamepad2 } from "lucide-react"

import Image from "next/image"

const projectImages = [
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753643414/a3fe442b-9fe9-455c-8433-9b94b027100f.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753643480/875218dc-bc7f-4e36-aa20-2a5e7529df4e.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753643464/2c02c354-0ec9-4647-86fe-2e638513574c.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753643491/42ffc795-9ddd-4b62-8918-c872501b3ad8.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753643505/385c9a59-0089-4c9c-8dae-b7ff65cd6b0d.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753643524/520ae019-aeb8-400a-b58f-930495c3b208.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753643552/69ce43cc-ef91-48e5-a3b2-18f77fccdde7.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753643592/6c40ecef-cd20-4439-8fd3-cc2a77816a6e.png"
]

export default function MaxcomGamesProject() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openImageModal = (index: number) => {
    setSelectedImage(index)
    setCurrentImageIndex(index)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex(prev => prev === 0 ? projectImages.length - 1 : prev - 1)
    } else {
      setCurrentImageIndex(prev => prev === projectImages.length - 1 ? 0 : prev + 1)
    }
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (selectedImage === null) return
    
    if (event.key === 'Escape') {
      closeImageModal()
    } else if (event.key === 'ArrowLeft') {
      navigateImage('prev')
    } else if (event.key === 'ArrowRight') {
      navigateImage('next')
    }
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
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "E-Commerce Completo",
      description: "Catálogo interactivo, carrito de compras y checkout seguro"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Gestión de Usuarios",
      description: "Sistema de registro, perfiles y historial de compras"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Panel de Administración",
      description: "Control total de productos, inventario y ventas"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Optimizado para PC",
      description: "Diseñado y probado solo para computadoras de escritorio"
    }
  ]

  const technologies = [
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "HTML5", color: "bg-orange-500" },
    { name: "CSS3", color: "bg-blue-500" },
    { name: "React", color: "bg-cyan-500" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "Express", color: "bg-gray-600" },
    { name: "MongoDB", color: "bg-emerald-600" }
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-green-900/20" />
        <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <Gamepad2 className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 mr-3 sm:mr-4" aria-hidden="true" />
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
              MaxcomGames
            </h1>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
            Sistema E-Commerce para Videojuegos, Consolas y Accesorios
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
            <a
              href="https://www.maxcomgames.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver demo de MaxcomGames (abre en nueva ventana)"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 focus:ring-4 focus:ring-purple-500/50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px] text-center"
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              Ver Demo
            </a>
            <a
              href="https://github.com/maxitodev/MaxcomGames"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver código fuente en GitHub (abre en nueva ventana)"
              className="border border-gray-600 hover:border-gray-400 focus:ring-4 focus:ring-gray-500/50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px] text-center"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              Código Fuente
            </a>
          </div>
        </div>
      </header>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20 container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Galería del Proyecto
        </h2>
        
        {/* Main Image Display */}
        <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
          <div className="relative bg-gray-900 rounded-lg overflow-hidden">
            <Image
              src={projectImages[currentImageIndex]}
              alt={`Captura de pantalla ${currentImageIndex + 1} de MaxcomGames - ${projectImages.length > 1 ? `${currentImageIndex + 1} de ${projectImages.length}` : ''}`}
              width={1200}
              height={800}
              className="w-full h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              priority={currentImageIndex === 0}
              quality={85}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 95vw, (max-width: 1200px) 90vw, 1000px"
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={() => navigateImage('prev')}
              aria-label="Imagen anterior"
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 focus:bg-opacity-70 focus:ring-2 focus:ring-white/50 rounded-full p-2 sm:p-3 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              aria-label="Imagen siguiente"
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 focus:bg-opacity-70 focus:ring-2 focus:ring-white/50 rounded-full p-2 sm:p-3 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            
            {/* Fullscreen Button */}
            <button
              onClick={() => openImageModal(currentImageIndex)}
              aria-label="Ver imagen en pantalla completa"
              className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black bg-opacity-50 hover:bg-opacity-70 focus:bg-opacity-70 focus:ring-2 focus:ring-white/50 rounded-full p-2 sm:p-3 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <Monitor className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>
          </div>
        </div>
        
        {/* Thumbnail Navigation */}
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-2 px-2 sm:px-0 scrollbar-hide" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            {projectImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Ver imagen ${index + 1} de ${projectImages.length}`}
                className={`flex-shrink-0 w-16 h-12 sm:w-20 sm:h-16 md:w-24 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 focus:ring-2 focus:ring-purple-500/50 min-h-[48px] ${
                  index === currentImageIndex 
                    ? 'border-purple-500 ring-2 ring-purple-500/50' 
                    : 'border-gray-600 hover:border-gray-400'
                }`}
              >
                <Image
                  src={image}
                  alt={`Miniatura ${index + 1}`}
                  width={160}
                  height={120}
                  className="w-full h-full object-cover"
                  quality={60}
                  sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                />
              </button>
            ))}
          </div>
          
          {/* Image Counter */}
          <div className="text-center mt-3 sm:mt-4">
            <span className="text-gray-400 text-sm sm:text-base" aria-live="polite">
              Imagen {currentImageIndex + 1} de {projectImages.length}
            </span>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeImageModal()
          }}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeImageModal}
              aria-label="Cerrar imagen"
              className="absolute top-2 sm:top-4 right-2 sm:right-4 z-60 bg-black bg-opacity-50 hover:bg-opacity-70 focus:bg-opacity-70 focus:ring-2 focus:ring-white/50 rounded-full p-2 sm:p-3 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            
            <h2 id="modal-title" className="sr-only">
              Imagen {currentImageIndex + 1} de {projectImages.length} - MaxcomGames
            </h2>
            
            <Image
              src={projectImages[currentImageIndex]}
              alt={`Captura de pantalla completa ${currentImageIndex + 1} de MaxcomGames`}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg"
              quality={90}
              sizes="(max-width: 480px) 95vw, (max-width: 1200px) 90vw, 1200px"
              priority={true}
            />
            
            <button
              onClick={() => navigateImage('prev')}
              aria-label="Imagen anterior"
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 focus:bg-opacity-70 focus:ring-2 focus:ring-white/50 rounded-full p-3 sm:p-4 transition-all duration-300 min-h-[52px] min-w-[52px] flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              aria-label="Imagen siguiente"
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 focus:bg-opacity-70 focus:ring-2 focus:ring-white/50 rounded-full p-3 sm:p-4 transition-all duration-300 min-h-[52px] min-w-[52px] flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </button>
            
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Ir a imagen ${index + 1}`}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 min-h-[24px] min-w-[24px] flex items-center justify-center ${
                    index === currentImageIndex ? 'bg-white' : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                >
                  <span className="sr-only">Imagen {index + 1}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Description Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Acerca del Proyecto
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 px-2">
                MaxcomGames es una plataforma E-Commerce integral diseñada específicamente para el mercado de videojuegos, 
                consolas y productos relacionados. El sistema está pensado para brindar una experiencia de compra moderna, 
                cómoda y segura tanto a los usuarios finales como a los administradores del negocio.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed px-2">
                Este proyecto está diseñado para modernizar el proceso de compra para el usuario gamer y optimizar el 
                manejo interno para el propietario o staff de MaxcomGames, proporcionando herramientas completas de gestión 
                y una experiencia de usuario excepcional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
            Características Principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <article key={index} className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-purple-500/50 focus-within:border-purple-500/50 transition-colors duration-300">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
              Funcionalidades Detalladas
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-blue-400">Para Usuarios y Compradores</h3>
                <ul className="space-y-3 sm:space-y-4 text-gray-300" role="list">
                  <li className="flex items-start text-sm sm:text-base">
                    <span className="text-green-400 mr-2 mt-1 flex-shrink-0" aria-hidden="true">•</span>
                    <span>Catálogo interactivo con filtros por categoría, plataforma y ofertas</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base">
                    <span className="text-green-400 mr-2 mt-1 flex-shrink-0" aria-hidden="true">•</span>
                    <span>Búsqueda avanzada y recomendaciones personalizadas</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base">
                    <span className="text-green-400 mr-2 mt-1 flex-shrink-0" aria-hidden="true">•</span>
                    <span>Carrito de compras y proceso de checkout seguro</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base">
                    <span className="text-green-400 mr-2 mt-1 flex-shrink-0" aria-hidden="true">•</span>
                    <span>Sistema de registro y perfil de usuario completo</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base">
                    <span className="text-green-400 mr-2 mt-1 flex-shrink-0" aria-hidden="true">•</span>
                    <span>Historial de compras y seguimiento de pedidos</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-purple-400">Para Administradores</h3>
                <ul className="space-y-3 sm:space-y-4 text-gray-300" role="list">
                  <li className="flex items-start text-sm sm:text-base">
                    <span className="text-green-400 mr-2 mt-1 flex-shrink-0" aria-hidden="true">•</span>
                    <span>Panel de control para gestión completa de productos</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base">
                    <span className="text-green-400 mr-2 mt-1 flex-shrink-0" aria-hidden="true">•</span>
                    <span>Gestión de usuarios y roles administrativos</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base">
                    <span className="text-green-400 mr-2 mt-1 flex-shrink-0" aria-hidden="true">•</span>
                    <span>Reportes de ventas y estadísticas detalladas</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base">
                    <span className="text-green-400 mr-2 mt-1 flex-shrink-0" aria-hidden="true">•</span>
                    <span>Herramientas para descuentos y promociones</span>
                  </li>
                  <li className="flex items-start text-sm sm:text-base">
                    <span className="text-green-400 mr-2 mt-1 flex-shrink-0" aria-hidden="true">•</span>
                    <span>Control de contenido y actualizaciones de la tienda</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Tecnologías Utilizadas
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-2xl mx-auto px-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={`${tech.color} text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm hover:scale-105 focus:scale-105 transition-transform duration-300 cursor-default`}
                role="listitem"
              >
                {tech.name}
              </span>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-6 sm:mt-8 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Desarrollado con tecnologías web modernas enfocadas en crear una interfaz responsiva, 
            atractiva y con una experiencia de usuario excepcional.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-green-900/20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Visión a Futuro
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            MaxcomGames está pensado para ser escalable y adaptable, permitiendo la incorporación de nuevas 
            funcionalidades como ventas digitales, integración con comunidades gamers, sistemas de recompensas, 
            y mucho más. Un proyecto diseñado para crecer junto con la evolución de la industria del gaming.
          </p>
        </div>
      </section>

      {/* Back to Portfolio */}
      <footer className="py-8 sm:py-10 lg:py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <a 
            href="/#proyectos"
            aria-label="Volver a la sección de proyectos del portafolio"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 focus:text-purple-300 focus:ring-2 focus:ring-purple-400/50 transition-colors duration-300 font-semibold p-2 rounded-lg min-h-[44px]"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Volver al Portafolio</span>
          </a>
        </div>
      </footer>
    </main>
  )
}