"use client"

import { useState } from "react"
import * as React from "react"
import { ChevronLeft, ChevronRight, X, Github, Monitor, University, GraduationCap, Users, Calendar, BookOpen, Settings, UserCheck, Clock, FileCheck, Download, Shield, Database, FileText, Layout } from "lucide-react"
import Image from "next/image"

const projectImages = [
  // Agregar aquí las URLs de las imágenes del Gestor Escolar
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753650725/6a87ae40-4ed3-45ff-91fe-176ebe71b00e.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753650764/52cf565c-442c-45a2-be18-2ee4414e667d.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753650771/3dc6fd98-5ee4-4ae8-902a-bbb00f2b6e96.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753650780/b4192284-227e-463e-8322-2b6e40d84839.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753650826/74b50721-ef50-44a5-8c5a-bbab3104d815.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753650831/95c268cc-00d6-4d85-bed2-ebe5cf25d9a4.png",
  "https://res.cloudinary.com/dkmfovzbz/image/upload/v1753650856/d1abc5d0-3e24-4b6c-93ce-9cc3421d2127.png"
]

export default function GestorEscolarProject() {
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

  const backendTechnologies = [
    { name: "Node.js", color: "bg-yellow-700 text-white" },
    { name: "Express.js", color: "bg-yellow-600 text-white" },
    { name: "MySQL", color: "bg-blue-600 text-white" },
    { name: "JWT", color: "bg-purple-600 text-white" },
    { name: "Bcrypt", color: "bg-red-600 text-white" }
  ]

  const frontendTechnologies = [
    { name: "React", color: "bg-cyan-500 text-white" },
    { name: "React Router", color: "bg-cyan-600 text-white" },
    { name: "Axios", color: "bg-purple-500 text-white" },
    { name: "CSS3", color: "bg-blue-500 text-white" },
    { name: "jsPDF", color: "bg-orange-500 text-white" }
  ]

  const adminFeatures = [
    {
      icon: <University className="w-6 h-6" />,
      title: "Gestión de Carreras",
      description: "Registro y administración de programas académicos"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Gestión de Materias",
      description: "Asignación de materias por carrera con control de cupos"
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Gestión de Salones",
      description: "Configuración de espacios físicos (aulas, laboratorios, auditorios)"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Generación de Grupos",
      description: "Creación automática de grupos académicos por carrera"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Asignación de Horarios",
      description: "Configuración de horarios sin conflictos"
    }
  ]

  const studentFeatures = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Selección de Materias",
      description: "Inscripción en materias disponibles con validación de cupos"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Visualización de Horarios",
      description: "Calendario semanal personalizado"
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Confirmación de Inscripción",
      description: "Sistema de confirmación de materias seleccionadas"
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Exportación de Horarios",
      description: "Descarga de horarios en formato PDF"
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-yellow-900/30 to-amber-800/30" />
        <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-orange-400 mr-3 sm:mr-4" aria-hidden="true" />
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
              Gestor Escolar
            </h1>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-orange-100 mb-6 sm:mb-8 max-w-4xl mx-auto px-2">
            Sistema de gestión escolar con autenticación de usuarios y administración académica completa
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
            <a
              href="https://github.com/maxitodev/GestorEscolar"
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
              alt={`Captura de pantalla ${currentImageIndex + 1} del Gestor Escolar`}
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
            <h2 id="modal-title" className="sr-only">Imagen {currentImageIndex + 1} de {projectImages.length} - Gestor Escolar</h2>
            <Image src={projectImages[currentImageIndex]} alt={`Captura de pantalla completa ${currentImageIndex + 1} del Gestor Escolar`} width={1200} height={800} className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg" quality={90} sizes="(max-width: 480px) 95vw, (max-width: 1200px) 90vw, 1200px" priority={true} />
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
                El Gestor Escolar es una plataforma web integral diseñada para la administración académica de instituciones educativas. Permite gestionar carreras, materias, salones, horarios y facilita la inscripción de estudiantes con un sistema robusto de autenticación por roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Features Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Panel de Administrador
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {adminFeatures.map((feature, index) => (
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

      {/* Student Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-yellow-900/40 to-orange-800/30">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Panel de Estudiante
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {studentFeatures.map((feature, index) => (
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

      {/* Backend Technologies Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Backend
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto px-2 mb-8">
            {backendTechnologies.map((tech, index) => (
              <span key={index} className={`${tech.color} px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm hover:scale-105 focus:scale-105 transition-transform duration-300 cursor-default border-2 border-orange-500/30 hover:border-orange-400/50`} role="listitem">{tech.name}</span>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="bg-orange-950/80 border border-orange-700 shadow-lg rounded-lg p-4 sm:p-6">
              <h3 className="font-semibold text-lg text-orange-300 mb-2 flex items-center gap-2">
                <Database className="w-5 h-5 text-orange-400" />
                Base de Datos
              </h3>
              <p className="text-orange-100">MySQL para almacenamiento robusto y confiable de datos académicos.</p>
            </div>
            <div className="bg-orange-950/80 border border-orange-700 shadow-lg rounded-lg p-4 sm:p-6">
              <h3 className="font-semibold text-lg text-orange-300 mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5 text-orange-400" />
                Seguridad
              </h3>
              <p className="text-orange-100">Autenticación JWT y encriptación Bcrypt para máxima seguridad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Frontend Technologies Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-yellow-900/40 to-orange-800/30">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Frontend
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto px-2 mb-8">
            {frontendTechnologies.map((tech, index) => (
              <span key={index} className={`${tech.color} px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm hover:scale-105 focus:scale-105 transition-transform duration-300 cursor-default border-2 border-orange-500/30 hover:border-orange-400/50`} role="listitem">{tech.name}</span>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="bg-orange-950/80 border border-orange-700 shadow-lg rounded-lg p-4 sm:p-6">
              <h3 className="font-semibold text-lg text-orange-300 mb-2 flex items-center gap-2">
                <Layout className="w-5 h-5 text-orange-400" />
                Diseño Responsivo
              </h3>
              <p className="text-orange-100">CSS3 con diseño adaptable para todos los dispositivos.</p>
            </div>
            <div className="bg-orange-950/80 border border-orange-700 shadow-lg rounded-lg p-4 sm:p-6">
              <h3 className="font-semibold text-lg text-orange-300 mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-orange-400" />
                Exportación PDF
              </h3>
              <p className="text-orange-100">jsPDF para generar y descargar documentos académicos.</p>
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