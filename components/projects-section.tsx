import { motion } from "framer-motion"
import { ExternalLink, Github, Folder, ArrowUpRight, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { useIntersectionObserver, useImagePreloader } from "@/hooks/use-intersection-observer"

export function ProjectsSection() {
  // Precargar imágenes críticas (las primeras 3)
  const criticalImages = [
    '/projects/maxcomgames.png',
    '/projects/perfiluam.png', 
    '/projects/simposio.png'
  ]
  useImagePreloader(criticalImages)

  const projects = [
    {
      title: "MaxcomGames",
      description:
        "Sistema E-Commerce completo para venta de videojuegos con carrito de compras y gestión de inventario",
      image: "/projects/maxcomgames.png",
      tech: ["JavaScript", "Node.js", "Express", "MongoDB"],
      status: "Completado",
      category: "E-Commerce",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      updated: "Hace 1 semana",
    },
    {
      title: "PerfilUAM",
      description: "Sistema de Perfiles para Estudiantes de la Unidad UAM Cuajimalpa con gestión de datos académicos",
      image: "/projects/perfiluam.png",
      tech: ["TypeScript", "React", "Node.js", "MongoDB"],
      status: "Completado",
      category: "Sistema Académico",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      updated: "Hace 3 semanas",
    },
    {
      title: "Simposio",
      description: "Presentación Web interactiva para eventos académicos con diseño moderno y responsive",
      image: "/projects/simposio.png",
      tech: ["TypeScript", "React", "Tailwind CSS"],
      status: "Completado",
      category: "Presentación Web",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      updated: "Hace 3 semanas",
    },
    {
      title: "DonaUAM",
      description: "Sistema de Donativos UAM para gestionar contribuciones y donaciones de la comunidad universitaria",
      image: "/projects/donauam.png",
      tech: ["JavaScript", "Node.js", "Express", "MongoDB"],
      status: "Completado",
      category: "Sistema Social",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
      updated: "Hace 3 semanas",
    },
    {
      title: "GestorEscolar",
      description: "Sistema de gestión escolar completo para administrar estudiantes, calificaciones y horarios",
      image: "/projects/gestorescolar.png",
      tech: ["JavaScript", "React", "Node.js", "MongoDB"],
      status: "Completado",
      category: "Sistema Educativo",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-500/10 to-blue-500/10",
      updated: "Mayo 25",
    },
    {
      title: "SistemaFinanciero",
      description: "Herramienta para cálculos macroeconómicos con análisis de datos financieros y reportes",
      image: "/projects/sistemafinanciero.png",
      tech: ["JavaScript", "React", "Chart.js", "Node.js"],
      status: "Completado",
      category: "Finanzas",
      gradient: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-500/10 to-purple-500/10",
      updated: "Mayo 25",
    },
    {
      title: "CalibreConductor",
      description: "Sistema de calibración y gestión para conductores con análisis de rendimiento y métricas",
      image: "/projects/calibreconductor.png",
      tech: ["JavaScript", "React", "Node.js", "Express"],
      status: "Completado",
      category: "Sistema de Gestión",
      gradient: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-500/10 to-cyan-500/10",
      updated: "Abril 15",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completado":
        return "bg-green-500/20 text-green-400 border-green-400/30"
      case "En Desarrollo":
        return "bg-blue-500/20 text-blue-400 border-blue-400/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-400/30"
    }
  }

  return (
    <section id="proyectos" className="min-h-[120vh] py-20 relative overflow-hidden bg-black">
      {/* Isometric Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800">
          <defs>
            <pattern id="isometricGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 0,20 L 20,0 L 40,20 L 20,40 Z" fill="none" stroke="rgba(139, 92, 246, 0.15)" strokeWidth="1" />
            </pattern>
            <linearGradient id="projectsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#isometricGrid)" />
          <rect width="100%" height="100%" fill="url(#projectsGradient)" />
        </svg>

        {/* 3D Floating Cubes */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-16 h-16 bg-gradient-to-br from-purple-400/30 to-blue-400/30 transform rotate-45 backdrop-blur-sm border border-purple-400/30"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)",
          }}
          animate={{
            y: [0, -40, 0],
            rotateZ: [45, 225, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-cyan-400/30 to-green-400/30 backdrop-blur-sm border border-cyan-400/30"
          style={{
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            boxShadow: "0 0 30px rgba(0, 255, 136, 0.3)",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full backdrop-blur-sm border border-pink-400/30"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: 360,
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: 2,
          }}
          style={{
            boxShadow: "0 0 30px rgba(255, 0, 128, 0.3)",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/6 w-14 h-14 bg-gradient-to-br from-orange-400/30 to-red-400/30 backdrop-blur-sm border border-orange-400/30"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            boxShadow: "0 0 30px rgba(255, 165, 0, 0.3)",
          }}
          animate={{
            y: [0, 60, 0],
            rotateZ: [0, 120, 240, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Data Flow Lines */}
        <motion.div
          className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Floating Project Icons */}
        <motion.div
          className="absolute top-1/5 right-1/3 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-sm border border-blue-400/30 flex items-center justify-center"
          animate={{
            y: [0, -30, 0],
            rotateY: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            boxShadow: "0 0 30px rgba(0, 212, 255, 0.3)",
          }}
        >
          <Folder className="w-12 h-12 text-blue-400" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/5 left-1/5 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-purple-400/30 flex items-center justify-center"
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{
            boxShadow: "0 0 30px rgba(255, 0, 128, 0.3)",
          }}
        >
          <Github className="w-10 h-10 text-purple-400" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-3 mb-8 shadow-lg"
            style={{
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.2)",
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Folder className="w-4 h-4 text-purple-400" />
            </motion.div>
            <span className="text-sm text-white font-medium">Portfolio Showcase</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 text-white">
            {"PROYECTOS".split("").map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block"
                whileHover={{
                  scale: 1.1,
                  color: "#8b5cf6",
                  textShadow: "0 0 20px rgba(139, 92, 246, 0.8)",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Proyectos reales desarrollados con tecnologías modernas y mejores prácticas
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              whileHover={{
                y: -20,
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <Card
                className={`bg-gradient-to-br ${project.bgGradient} backdrop-blur-sm border-2 border-white/10 hover:border-white/20 transition-all duration-500 h-full relative overflow-hidden shadow-xl hover:shadow-2xl`}
              >
                {/* Image Container */}
                <div className="aspect-video bg-gray-900 relative overflow-hidden">
                  <OptimizedImage
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    quality={index < 3 ? 85 : 70}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading={index < 3 ? 'eager' : 'lazy'}
                    priority={index < 2}
                    placeholder="blur"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-white border-white bg-transparent hover:bg-white hover:text-black"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Código
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-white border-white bg-transparent hover:bg-white hover:text-black"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </motion.div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className={`${getStatusColor(project.status)} backdrop-blur-sm shadow-lg`}>
                      {project.status}
                    </Badge>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="outline"
                      className={`bg-gradient-to-r ${project.gradient} text-white border-0 backdrop-blur-sm shadow-lg`}
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 relative z-10">
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 font-light group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Updated Info */}
                  <div className="flex items-center gap-2 mb-4 text-xs text-gray-400">
                    <Calendar className="w-3 h-3" />
                    <span>Actualizado {project.updated}</span>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-white/20 text-gray-300 bg-white/5 hover:bg-white/10 transition-colors duration-300 shadow-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Hover Arrow */}
                  <motion.div
                    className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.2, rotate: 45 }}
                  >
                    <ArrowUpRight className="w-5 h-5 text-gray-300" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-purple-400/30 rounded-full px-8 py-4 shadow-lg"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            style={{
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.2)",
            }}
          >
            <Github className="w-5 h-5 text-purple-400" />
            <span className="text-white font-medium">Ver todos los proyectos en GitHub</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
