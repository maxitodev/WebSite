"use client"

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { Download, Award, Users, Code, BookOpen, Bot, Globe, BarChart3, Server, Zap, Star, ArrowUpRight, Clock, Eye, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useRef, useEffect, useState, useMemo } from "react"

export function AboutServicesSection() {
  const containerRef = useRef(null)
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const [isClient, setIsClient] = useState(false)

  // Generate consistent particle positions
  const particlePositions = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
    }))
  , [])

  useEffect(() => {
    setIsClient(true)
  }, [])
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Transformaciones suaves para la transición entre secciones con useSpring (más rápidas)
  const aboutOpacityRaw = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6], [1, 1, 0.5, 0])
  const aboutYRaw = useTransform(scrollYProgress, [0, 0.6], [0, -50])
  const aboutScaleRaw = useTransform(scrollYProgress, [0, 0.6], [1, 0.95])
  const aboutBlurRaw = useTransform(scrollYProgress, [0.4, 0.6], [0, 5])

  const aboutOpacity = useSpring(aboutOpacityRaw, { stiffness: 400, damping: 40, mass: 0.5 })
  const aboutY = useSpring(aboutYRaw, { stiffness: 400, damping: 40, mass: 0.5 })
  const aboutScale = useSpring(aboutScaleRaw, { stiffness: 400, damping: 40, mass: 0.5 })
  const aboutBlur = useSpring(aboutBlurRaw, { stiffness: 400, damping: 40, mass: 0.5 })

  const servicesOpacityRaw = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 1], [0, 0.5, 1, 1])
  const servicesYRaw = useTransform(scrollYProgress, [0.2, 0.6], [50, 0])
  const servicesScaleRaw = useTransform(scrollYProgress, [0.2, 0.6], [0.95, 1])

  const servicesOpacity = useSpring(servicesOpacityRaw, { stiffness: 400, damping: 40, mass: 0.5 })
  const servicesY = useSpring(servicesYRaw, { stiffness: 400, damping: 40, mass: 0.5 })
  const servicesScale = useSpring(servicesScaleRaw, { stiffness: 400, damping: 40, mass: 0.5 })

  // Background transition con parallax
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const backgroundRotate = useTransform(scrollYProgress, [0, 1], [0, 2])

  // Progress indicator
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  // Particle opacity transform (must be outside conditional rendering)
  const particleOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0])

  const stats = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      number: "Enfoque",
      label: "Desarrollo Web - Full Stack",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Code className="w-6 h-6" />,
      number: "10+",
      label: "Tecnologías Utilizadas",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Users className="w-6 h-6" />,
      number: "+5",
      label: "Proyectos Completados",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: "Activo",
      label: "Desarrollo Continuo",
      color: "from-orange-500 to-red-500",
    },
  ]

  const services = [
    {
      title: "Chatbot con IA",
      description: "Chatbots inteligentes integrados con OpenAI para atención al cliente",
      icon: <Bot />,
      price: "Desde $100",
      delivery: "5-7 días",
      features: ["OpenAI Integration", "Conversaciones Naturales", "Personalizable", "Multi-plataforma"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderGradient: "from-blue-400/30 to-cyan-400/30",
      shadowColor: "shadow-blue-500/20",
    },
    {
      title: "Aplicaciones Web",
      description: "Aplicaciones web modernas con React, Next.js y tecnologías actuales",
      icon: <Globe />,
      price: "Desde $150",
      delivery: "7-14 días",
      features: ["React/Next.js", "Responsive Design", "SEO Optimizado", "Performance"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      borderGradient: "from-purple-400/30 to-pink-400/30",
      shadowColor: "shadow-purple-500/20",
    },
    {
      title: "Dashboard Empresarial",
      description: "Dashboards interactivos para visualización de datos y métricas",
      icon: <BarChart3 />,
      price: "Desde $200",
      delivery: "10-15 días",
      features: ["Visualización de Datos", "Gráficos Interactivos", "Tiempo Real", "Exportación"],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      borderGradient: "from-green-400/30 to-emerald-400/30",
      shadowColor: "shadow-green-500/20",
    },
    {
      title: "Backend & APIs",
      description: "APIs robustas con Node.js, Express y bases de datos modernas",
      icon: <Server />,
      price: "Desde $120",
      delivery: "7-12 días",
      features: ["Node.js/Express", "MongoDB/SQL", "Autenticación", "Documentación"],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
      borderGradient: "from-orange-400/30 to-red-400/30",
      shadowColor: "shadow-orange-500/20",
    },
  ]

  useEffect(() => {
    
    if (window.lenis) {
      const handleScroll = () => {
        
      }
      window.lenis.on('scroll', handleScroll)
      return () => window.lenis.off('scroll', handleScroll)
    }
  }, [])

  return (
    <section 
      id="sobre-mi-servicios" 
      ref={containerRef}
      className="relative overflow-hidden bg-black min-h-[120vh] pt-6 pb-6 md:pt-10 md:pb-10"
    >
      {/* Background animado */}
      <motion.div 
        className="fixed inset-0 -z-10"
        style={{ 
          y: backgroundY,
          rotate: backgroundRotate 
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* SECCIÓN SOBRE MÍ */}
      <motion.div
        ref={aboutRef}
        className="sticky top-0 min-h-screen flex items-center justify-center"
        style={{
          opacity: aboutOpacity,
          y: aboutY,
          scale: aboutScale,
          filter: useTransform(aboutBlur, (value) => value > 0.1 ? `blur(${value}px)` : 'none'),
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Sobre Mí */}
          <div className="text-center mb-12 md:mb-16">
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 md:px-6 md:py-3 mb-6 md:mb-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Users className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
              <span className="text-xs md:text-sm text-white font-medium">Conoce a MaxitoDev</span>
            </motion.div>

            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              SOBRE MÍ
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Profile Image */}
            <motion.div 
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-2xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-1 rounded-2xl backdrop-blur-sm border border-white/20 shadow-xl">
                  <div className="bg-black/50 rounded-2xl overflow-hidden">
                    <Image
                      src="/images/maximo-profile.jpg"
                      alt="MaxitoDev - Desarrollador Full Stack"
                      width={400}
                      height={500}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div 
              className="space-y-6 md:space-y-8 order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                  Mi nombre es {" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Max
                  </span>
                </h3>

                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6">
                  Desarrollador Full Stack en formación, apasionado por la tecnología y la inteligencia artificial.
                  Actualmente me estoy especializando en tecnologías modernas como React, Next.js, Node.js y OpenAI para
                  crear soluciones innovadoras.
                </p>

                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6 md:mb-8">
                  Mi objetivo es combinar el desarrollo web con inteligencia artificial para crear aplicaciones que
                  resuelvan problemas reales. Estoy comenzando mi camino como freelancer y busco proyectos donde pueda
                  aplicar mis conocimientos y seguir aprendiendo.
                </p>
              </div>

              {/* Download CV Button */}
              <div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-medium border-0 shadow-lg w-full sm:w-auto"
                    style={{
                      boxShadow: "0 0 30px rgba(0,212,255,0.4)",
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <Download className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                      Descargar CV
                    </span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Statistics */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16 lg:mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -10, scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 h-full shadow-lg hover:shadow-xl">
                  <CardContent className="p-4 md:p-6 text-center">
                    <motion.div
                      className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r ${stat.color} mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-200 shadow-lg`}
                    >
                      <div className="text-white text-sm md:text-base">{stat.icon}</div>
                    </motion.div>

                    <div
                      className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 md:mb-2`}
                    >
                      {stat.number}
                    </div>

                    <p className="text-gray-400 text-xs md:text-sm font-light group-hover:text-gray-300 transition-colors duration-200">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating Particles para transición */}
          <div className="absolute inset-0 pointer-events-none">
            {isClient && particlePositions.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  opacity: particleOpacity,
                }}
                animate={{
                  y: [0, -100, -200],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: particle.id * 0.1,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="flex justify-center mt-12 md:mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >

          </motion.div>
        </div>
      </motion.div>

      {/* SECCIÓN SERVICIOS */}
      <motion.div
        ref={servicesRef}
        className="sticky top-0 min-h-screen flex items-center justify-center"
        style={{
          opacity: servicesOpacity,
          y: servicesY,
          scale: servicesScale,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Servicios */}
          <div className="text-center mb-12 md:mb-16">
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 py-2 md:px-6 md:py-3 mb-6 md:mb-8 shadow-lg"
              style={{
                boxShadow: "0 0 20px rgba(255, 215, 0, 0.2)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Zap className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
              </motion.div>
              <span className="text-xs md:text-sm text-white font-medium">Servicios Especializados</span>
            </motion.div>

            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 md:mb-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {"SERVICIOS".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  whileHover={{
                    scale: 1.1,
                    color: "#00D4FF",
                    textShadow: "0 0 20px rgba(0, 212, 255, 0.8)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h2>

            <motion.p 
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Soluciones innovadoras combinando desarrollo web con inteligencia artificial
            </motion.p>
          </div>

          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                whileHover={{
                  y: -20,
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.2 },
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                className="group relative"
              >
                <Card
                  className={`bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm border-2 border-white/10 hover:border-white/20 transition-all duration-300 h-full relative overflow-hidden ${service.shadowColor} shadow-xl hover:shadow-2xl`}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${service.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}
                    style={{ padding: "2px" }}
                  >
                    <div className={`w-full h-full bg-gradient-to-br ${service.bgGradient} rounded-lg`} />
                  </motion.div>

                  <CardContent className="p-4 md:p-6 relative z-10">
                    <motion.div
                      className="text-white mb-3 md:mb-4 flex justify-center items-center relative"
                      whileHover={{
                        rotate: 360,
                        scale: 1.2,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg flex items-center justify-center`}>
                        <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 flex items-center justify-center text-white">
                          {service.icon}
                        </div>
                      </div>
                    </motion.div>

                    <h3 className="text-base md:text-lg font-bold mb-2 text-white text-center">{service.title}</h3>
                    <p className="text-gray-300 mb-3 md:mb-4 font-light text-xs md:text-sm text-center leading-relaxed">{service.description}</p>

                    <div className="flex justify-between items-center mb-3 md:mb-4">
                      <Badge
                        variant="outline"
                        className={`bg-gradient-to-r ${service.gradient} text-white border-0 shadow-md text-xs`}
                      >
                        {service.price}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock className="w-2 h-2 md:w-3 md:h-3" />
                        <span className="text-xs">{service.delivery}</span>
                      </div>
                    </div>

                    <div className="space-y-1 mb-4 md:mb-6">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                          <Star className="w-2 h-2 text-yellow-400 flex-shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="sm"
                        className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white border-0 text-xs shadow-lg`}
                      >
                        <Eye className="w-2 h-2 md:w-3 md:h-3 mr-1" />
                        Ver más
                      </Button>
                    </motion.div>

                    <motion.div
                      className="absolute top-3 right-3 md:top-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      whileHover={{ scale: 1.2, rotate: 45 }}
                    >
                      <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-gray-300" />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
