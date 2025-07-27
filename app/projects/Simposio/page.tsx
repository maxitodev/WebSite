"use client"

import { useState } from "react"
import * as React from "react"
import { ChevronLeft, ChevronRight, X, ExternalLink, Github, Monitor, University, Briefcase, Users, Globe2, Award, Network, BookOpen, MessageCircle, Code2, Star, Presentation, Zap, HandHeart, Recycle } from "lucide-react"
import Image from "next/image"

const projectImages = [
  // Agregar aquí las URLs de las imágenes del Simposio DMAS
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753649900/c6692cd9-7084-4f1e-af8f-ceaa80a38410.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753649909/4776b68c-6d7a-4e81-9003-2d96c77bd86e.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753649920/d217e05c-64ae-4472-af9e-ff441b0298d3.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753649927/ee31dca6-41bc-4954-b0cc-05f2b5a76876.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753649940/f0ea4818-7ddb-4f29-97d7-a1828737e1e1.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753649945/2e3d784d-13fc-4a4d-be80-ca3de23589f7.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753649952/9c2c7dd7-225d-4fbf-a2a7-d5ee75ec3064.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753649961/a01f0b4e-bca2-4288-b653-7543be268c9c.png"
]

export default function SimposioDMASProject() {
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
    { name: "Vite", color: "bg-purple-600 text-white" },
    { name: "React", color: "bg-blue-500 text-white" },
    { name: "TypeScript", color: "bg-blue-600 text-white" },
    { name: "Tailwind CSS", color: "bg-cyan-500 text-white" },
    { name: "GSAP", color: "bg-green-600 text-white" }
  ]

  const featuredProjects = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "PerfilUAM",
      description: "Plataforma para que estudiantes publiquen currículums, competencias y proyectos terminales.",
      benefits: [
        "Difusión del talento estudiantil",
        "Apoyo a la inserción laboral",
        "Promoción del intercambio académico"
      ]
    },
    {
      icon: <HandHeart className="w-6 h-6" />,
      title: "DonaUAM",
      description: "Sistema de donativos que evita el desperdicio y promueve la ayuda mutua en la comunidad.",
      benefits: [
        "Fomento de la solidaridad",
        "Prolongación de vida útil de objetos",
        "Gestión eficiente de donativos"
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-indigo-800/30" />
        <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <Presentation className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 mr-3 sm:mr-4" aria-hidden="true" />
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-600 bg-clip-text text-transparent">
              Simposio DMAS
            </h1>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-purple-100 mb-6 sm:mb-8 max-w-4xl mx-auto px-2">
            Plataforma web para la presentación y difusión de proyectos destacados del Departamento de Matemáticas Aplicadas y Sistemas
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
            <a
              href="https://simposio.maxitodev.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver demo del Simposio DMAS (abre en nueva ventana)"
              className="bg-gradient-to-r from-purple-500 to-blue-400 hover:from-purple-600 hover:to-blue-500 focus:ring-4 focus:ring-purple-400/70 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px] text-center text-black shadow-lg hover:shadow-purple-500/30"
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              Ver Demo
            </a>
            <a
              href="https://github.com/maxitodev/Simposio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver código fuente en GitHub (abre en nueva ventana)"
              className="border-2 border-purple-500 hover:border-blue-400 focus:ring-4 focus:ring-purple-400/70 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px] text-center text-purple-100 hover:bg-purple-500/10 hover:text-blue-400"
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
        <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
          <div className="relative bg-gradient-to-br from-purple-950 to-indigo-900 rounded-lg overflow-hidden shadow-xl border border-purple-800/50">
            <Image
              src={projectImages[currentImageIndex]}
              alt={`Captura de pantalla ${currentImageIndex + 1} del Simposio DMAS`}
              width={1200}
              height={800}
              className="w-full h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              priority={currentImageIndex === 0}
              quality={85}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 95vw, (max-width: 1200px) 90vw, 1000px"
            />
            <button onClick={() => navigateImage('prev')} aria-label="Imagen anterior" className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 focus:bg-black/90 focus:ring-2 focus:ring-purple-400/70 rounded-full p-2 sm:p-3 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center border border-purple-500/50 hover:border-purple-400">
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            <button onClick={() => navigateImage('next')} aria-label="Imagen siguiente" className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 focus:bg-black/90 focus:ring-2 focus:ring-purple-400/70 rounded-full p-2 sm:p-3 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center border border-purple-500/50 hover:border-purple-400">
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            <button onClick={() => openImageModal(currentImageIndex)} aria-label="Ver imagen en pantalla completa" className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/70 hover:bg-black/90 focus:bg-black/90 focus:ring-2 focus:ring-purple-400/70 rounded-full p-2 sm:p-3 transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center border border-purple-500/50 hover:border-purple-400">
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
            <span className="text-purple-200 text-sm sm:text-base" aria-live="polite">
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
            <h2 id="modal-title" className="sr-only">Imagen {currentImageIndex + 1} de {projectImages.length} - Simposio DMAS</h2>
            <Image src={projectImages[currentImageIndex]} alt={`Captura de pantalla completa ${currentImageIndex + 1} del Simposio DMAS`} width={1200} height={800} className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg" quality={90} sizes="(max-width: 480px) 95vw, (max-width: 1200px) 90vw, 1200px" priority={true} />
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

      {/* Objective Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-purple-950/70 to-purple-900/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Objetivo
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-purple-100 text-base sm:text-lg leading-relaxed text-center">
                Brindar un espacio de exposición y divulgación para proyectos estudiantiles innovadores, facilitando el intercambio de ideas y la vinculación entre estudiantes, académicos y actores externos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Proyectos Presentados
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => (
              <article key={index} className="bg-purple-950/80 border border-purple-700 shadow-lg rounded-lg p-6 sm:p-8 hover:border-blue-400/70 focus-within:border-blue-400/70 transition-all duration-300 hover:shadow-purple-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-purple-400">{project.icon}</div>
                  <h3 className="font-bold text-xl text-purple-100">{project.title}</h3>
                </div>
                <p className="text-purple-100 mb-6">{project.description}</p>
                <div>
                  <h4 className="font-semibold text-lg text-blue-300 mb-3">Ventajas principales:</h4>
                  <ul className="list-disc pl-6 text-purple-100 space-y-1">
                    {project.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-indigo-900/40 to-purple-800/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Beneficios del Simposio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-purple-950/80 border border-purple-700 shadow-lg rounded-lg p-4 sm:p-6">
                <h3 className="font-semibold text-lg text-purple-300 mb-2 flex items-center gap-2">
                  <University className="w-5 h-5 text-purple-400" /> 
                  Exposición académica
                </h3>
                <p className="text-purple-100">Visibilidad para proyectos estudiantiles innovadores del DMAS.</p>
              </div>
              <div className="bg-purple-950/80 border border-purple-700 shadow-lg rounded-lg p-4 sm:p-6">
                <h3 className="font-semibold text-lg text-purple-300 mb-2 flex items-center gap-2">
                  <Network className="w-5 h-5 text-purple-400" /> 
                  Intercambio de ideas
                </h3>
                <p className="text-purple-100">Facilita la vinculación entre estudiantes, académicos y externos.</p>
              </div>
              <div className="bg-purple-950/80 border border-purple-700 shadow-lg rounded-lg p-4 sm:p-6">
                <h3 className="font-semibold text-lg text-purple-300 mb-2 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-400" /> 
                  Divulgación científica
                </h3>
                <p className="text-purple-100">Promoción del conocimiento generado en la universidad.</p>
              </div>
              <div className="bg-purple-950/80 border border-purple-700 shadow-lg rounded-lg p-4 sm:p-6">
                <h3 className="font-semibold text-lg text-purple-300 mb-2 flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-400" /> 
                  Reconocimiento estudiantil
                </h3>
                <p className="text-purple-100">Valoración del trabajo y esfuerzo de los estudiantes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Tecnologías Utilizadas
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto px-2">
            {technologies.map((tech, index) => (
              <span key={index} className={`${tech.color} px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm hover:scale-105 focus:scale-105 transition-transform duration-300 cursor-default border-2 border-purple-500/30 hover:border-purple-400/50`} role="listitem">{tech.name}</span>
            ))}
          </div>
          <p className="text-center text-purple-100 mt-6 sm:mt-8 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Stack tecnológico moderno utilizado en el desarrollo del Simposio DMAS.
          </p>
        </div>
      </section>

      {/* Back to Portfolio */}
      <footer className="py-8 sm:py-10 lg:py-12 border-t border-purple-900">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <a href="/#proyectos" aria-label="Volver a la sección de proyectos del portafolio" className="inline-flex items-center gap-2 text-purple-400 hover:text-blue-300 focus:text-blue-300 focus:ring-2 focus:ring-purple-400/50 transition-colors duration-300 font-semibold p-2 rounded-lg min-h-[44px]">
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Volver al Portafolio</span>
          </a>
        </div>
      </footer>
    </main>
  )
}