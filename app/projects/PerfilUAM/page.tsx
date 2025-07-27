"use client"

import { useState } from "react"
import * as React from "react"
import { ChevronLeft, ChevronRight, X, ExternalLink, Github, Shield, Users, Monitor, HeartHandshake, BarChart3, University, Briefcase, FileText, Link2, Award, UserCheck, Network, BookOpen, MessageCircle, Code2, Star, Globe2 } from "lucide-react"
import Image from "next/image"

const projectImages = [
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753647799/f4a5e03c-0987-42ea-9c2b-d4cb965a7682.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753647811/e737eab1-af77-46c0-9ba0-8f47026b930a.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753647866/1c641104-5701-4213-ba63-c6143e177df9.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753647819/3d6af78e-a246-4db5-9d81-c266b39e09eb.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753647880/dfd9d53d-2a5a-45ab-99ac-7b92488dd40e.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753647834/79858cd7-0e57-47f6-b08c-f4c9dfceb844.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753647853/5b08ae5a-cf94-4344-a0a8-4e17ae065b15.png",
]

export default function PerfilUAMProject() {
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
    { icon: <Briefcase className="w-6 h-6" />, title: "Inserción laboral", description: "Facilita el acceso a oportunidades de empleo para estudiantes." },
    { icon: <Star className="w-6 h-6" />, title: "Proyección del talento", description: "Visibilidad profesional para estudiantes destacados." },
    { icon: <Network className="w-6 h-6" />, title: "Networking académico", description: "Conexión entre estudiantes y empleadores." },
    { icon: <Award className="w-6 h-6" />, title: "Certificación digital", description: "Validación oficial de competencias académicas." }
  ]

  const technologies = [
    { name: "OpenAI", color: "bg-orange-600 text-white" },
    { name: "TypeScript", color: "bg-orange-500 text-white" },
    { name: "React", color: "bg-orange-400 text-white" },
    { name: "Tailwind CSS", color: "bg-yellow-500 text-black" },
    { name: "GSAP", color: "bg-orange-700 text-white" },
    { name: "Next.js", color: "bg-black text-orange-400 border border-orange-400" },
    { name: "Node.js", color: "bg-orange-800 text-white" },
    { name: "MongoDB", color: "bg-green-600 text-white" },
    { name: "Google Cloud", color: "bg-orange-300 text-black" },
    { name: "AWS", color: "bg-yellow-400 text-black" }
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-yellow-900/30 to-orange-800/30" />
        <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <UserCheck className="w-10 h-10 sm:w-12 sm:h-12 text-orange-400 mr-3 sm:mr-4" aria-hidden="true" />
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-600 bg-clip-text text-transparent">
              PerfilUAM
            </h1>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-orange-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
            Plataforma estratégica para proyectar el talento estudiantil y apoyar la inserción laboral
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
            <a
              href="https://perfiluam.maxitodev.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver demo de PerfilUAM (abre en nueva ventana)"
              className="bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 focus:ring-4 focus:ring-orange-400/70 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px] text-center text-black shadow-lg hover:shadow-orange-500/30"
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              Ver Demo
            </a>
            <a
              href="https://github.com/maxitodev/PerfilUAM"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver código fuente en GitHub (abre en nueva ventana)"
              className="border-2 border-orange-500 hover:border-yellow-400 focus:ring-4 focus:ring-orange-400/70 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px] text-center text-orange-100 hover:bg-orange-500/10 hover:text-yellow-400"
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
          <div className="relative bg-gradient-to-br from-orange-950 to-orange-900 rounded-lg overflow-hidden shadow-xl border border-orange-800/50">
            <Image
              src={projectImages[currentImageIndex]}
              alt={`Captura de pantalla ${currentImageIndex + 1} de PerfilUAM`}
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
            <span className="text-orange-300 text-sm sm:text-base" aria-live="polite">
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
            <h2 id="modal-title" className="sr-only">Imagen {currentImageIndex + 1} de {projectImages.length} - PerfilUAM</h2>
            <Image src={projectImages[currentImageIndex]} alt={`Captura de pantalla completa ${currentImageIndex + 1} de PerfilUAM`} width={1200} height={800} className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg" quality={90} sizes="(max-width: 480px) 95vw, (max-width: 1200px) 90vw, 1200px" priority={true} />
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
              ¿Qué pueden hacer los estudiantes?
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <ul className="list-disc pl-6 text-orange-100 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                <li>Publicar su currículum completo de manera profesional</li>
                <li>Destacar sus competencias y habilidades técnicas</li>
                <li>Compartir datos de contacto para oportunidades laborales</li>
                <li>Mostrar su tesina y proyectos académicos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-orange-900/40 to-orange-800/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Beneficios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-orange-950/80 border border-orange-700 shadow-lg rounded-lg p-4 sm:p-6">
                <h3 className="font-semibold text-lg text-orange-300 mb-2 flex items-center gap-2"><Briefcase className="w-5 h-5 text-orange-400" /> Inserción laboral</h3>
                <p className="text-orange-100">Facilita el acceso a oportunidades de empleo.</p>
              </div>
              <div className="bg-orange-950/80 border border-orange-700 shadow-lg rounded-lg p-4 sm:p-6">
                <h3 className="font-semibold text-lg text-orange-300 mb-2 flex items-center gap-2"><Star className="w-5 h-5 text-orange-400" /> Proyección del talento</h3>
                <p className="text-orange-100">Visibilidad profesional para estudiantes destacados.</p>
              </div>
              <div className="bg-orange-950/80 border border-orange-700 shadow-lg rounded-lg p-4 sm:p-6">
                <h3 className="font-semibold text-lg text-orange-300 mb-2 flex items-center gap-2"><Network className="w-5 h-5 text-orange-400" /> Networking académico</h3>
                <p className="text-orange-100">Conexión entre estudiantes y empleadores.</p>
              </div>
              <div className="bg-orange-950/80 border border-orange-700 shadow-lg rounded-lg p-4 sm:p-6">
                <h3 className="font-semibold text-lg text-orange-300 mb-2 flex items-center gap-2"><Award className="w-5 h-5 text-orange-400" /> Certificación digital</h3>
                <p className="text-orange-100">Validación oficial de competencias académicas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Características Destacadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <article key={index} className="bg-orange-950/80 border border-orange-700 shadow-lg rounded-lg p-4 sm:p-6 hover:border-yellow-400/70 focus-within:border-yellow-400/70 transition-all duration-300 hover:shadow-orange-500/20">
                <div className="flex items-center gap-3 mb-2">{feature.icon}<span className="font-semibold text-lg text-orange-100">{feature.title}</span></div>
                <p className="text-orange-100">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Dirigido a */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-orange-900/40 to-orange-800/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Dirigido a Estudiantes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-orange-950/80 border border-orange-700 shadow-lg rounded-lg p-4 sm:p-6">
                <h3 className="font-semibold text-lg text-orange-300 mb-2 flex items-center gap-2"><Code2 className="w-5 h-5 text-orange-400" /> Ingeniería en Computación</h3>
                <p className="text-orange-100">Estudiantes especializados en desarrollo de software, sistemas y tecnologías computacionales.</p>
              </div>
              <div className="bg-orange-950/80 border border-orange-700 shadow-lg rounded-lg p-4 sm:p-6">
                <h3 className="font-semibold text-lg text-orange-300 mb-2 flex items-center gap-2"><BookOpen className="w-5 h-5 text-orange-400" /> Matemáticas Aplicadas</h3>
                <p className="text-orange-100">Estudiantes enfocados en modelado matemático, análisis de datos y métodos cuantitativos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creación de Perfiles */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Creación de Perfiles
          </h2>
          <div className="prose prose-lg prose-invert max-w-none mx-auto">
            <ul className="list-disc pl-6 text-orange-100 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              <li>Información personal y académica (nombre, carrera, semestre)</li>
              <li>Currículum vitae completo y actualizado</li>
              <li>Competencias técnicas y habilidades especializadas</li>
              <li>Datos de contacto para oportunidades profesionales</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Proyectos Terminales */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-orange-900/40 to-orange-800/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Proyectos Terminales y Tesinas
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <ul className="list-disc pl-6 text-orange-100 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                <li>Publicación de tesinas como referencia para empleadores y colaboradores académicos</li>
                <li>Guía para otros estudiantes en sus proyectos</li>
                <li>Incluye documentos, presentaciones y código fuente</li>
                <li>Enlaces a repositorios de código</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas Principales */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Ventajas Principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="bg-orange-950/80 border border-orange-700 shadow-lg rounded-lg p-4 sm:p-6">
              <h3 className="font-semibold text-lg text-orange-300 mb-2 flex items-center gap-2"><UserCheck className="w-5 h-5 text-orange-400" /> Promoción del perfil profesional</h3>
              <p className="text-orange-100">Visibilidad estratégica para el desarrollo de carrera.</p>
            </div>
            <div className="bg-orange-950/80 border border-orange-700 shadow-lg rounded-lg p-4 sm:p-6">
              <h3 className="font-semibold text-lg text-orange-300 mb-2 flex items-center gap-2"><Globe2 className="w-5 h-5 text-orange-400" /> Acceso abierto a proyectos</h3>
              <p className="text-orange-100">Referencia académica para la comunidad estudiantil.</p>
            </div>
            <div className="bg-orange-950/80 border border-orange-700 shadow-lg rounded-lg p-4 sm:p-6">
              <h3 className="font-semibold text-lg text-orange-300 mb-2 flex items-center gap-2"><Network className="w-5 h-5 text-orange-400" /> Vínculos comunitarios</h3>
              <p className="text-orange-100">Conexión entre universidad y sector externo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interacciones */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-orange-900/40 to-orange-800/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Interacciones
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-orange-950/80 border border-orange-700 shadow-lg rounded-lg p-4 sm:p-6">
                <h3 className="font-semibold text-lg text-orange-300 mb-2 flex items-center gap-2"><MessageCircle className="w-5 h-5 text-orange-400" /> Contacto directo</h3>
                <p className="text-orange-100">Los usuarios pueden comunicarse directamente con estudiantes.</p>
              </div>
              <div className="bg-orange-950/80 border border-orange-700 shadow-lg rounded-lg p-4 sm:p-6">
                <h3 className="font-semibold text-lg text-orange-300 mb-2 flex items-center gap-2"><Network className="w-5 h-5 text-orange-400" /> Networking universitario</h3>
                <p className="text-orange-100">Fomenta la interacción entre comunidad interna y externa.</p>
              </div>
              <div className="bg-orange-950/80 border border-orange-700 shadow-lg rounded-lg p-4 sm:p-6">
                <h3 className="font-semibold text-lg text-orange-300 mb-2 flex items-center gap-2"><BookOpen className="w-5 h-5 text-orange-400" /> Colaboración académica</h3>
                <p className="text-orange-100">Facilita colaboraciones en proyectos de investigación.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Stack Tecnológico
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto px-2">
            {technologies.map((tech, index) => (
              <span key={index} className={`${tech.color} px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm hover:scale-105 focus:scale-105 transition-transform duration-300 cursor-default border-2 border-orange-500/30 hover:border-orange-400/50`} role="listitem">{tech.name}</span>
            ))}
          </div>
          <p className="text-center text-orange-100 mt-6 sm:mt-8 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Tecnologías modernas utilizadas en el desarrollo de PerfilUAM.
          </p>
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
