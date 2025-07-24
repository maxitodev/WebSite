"use client"

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"

export function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { scrollY } = useScroll()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const springConfig = { damping: 30, stiffness: 200 }
  const ySpring = useSpring(y, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      if (window.lenis) {
        window.lenis.scrollTo(targetElement, {
          offset: -80,
          duration: 1.5,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        })
      } else {
        const offsetTop = targetElement.offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden" ref={ref}>
      {/* Background con video responsivo */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover md:object-center object-[center_20%]"
          style={{
            filter: "brightness(1) contrast(1.2)",
          }}
        >
          <source src="/yo/1.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
      </div>

      {/* Efecto sutil de mouse follow - solo desktop */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none hidden md:block">
        <motion.div
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0, 212, 255, 0.03) 0%, transparent 70%)",
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Elementos geométricos minimalistas */}
        <motion.div
          className="absolute top-20 right-20 w-2 h-2 bg-cyan-400/60 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div 
        className="container mx-auto px-4 sm:px-6 text-center relative z-20 max-w-4xl" 
        style={{ y: ySpring, opacity }}
      >
        {/* Badge profesional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 md:gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 md:px-6 md:py-3 mb-8 md:mb-12"
        >
          <Code2 className="w-3 h-3 md:w-4 md:h-4 text-cyan-400" />
          <span className="text-xs md:text-sm text-white/90 font-medium tracking-wide">Full Stack Developer</span>
        </motion.div>

        {/* Título principal más limpio */}
        <motion.div
          className="mb-6 md:mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-2 md:mb-4">
            <span className="text-white block">Hola, soy</span>
            <span 
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent block"
            >
              MaxitoDev
            </span>
          </h1>
        </motion.div>

        {/* Subtítulo elegante */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg lg:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4"
        >
          Desarrollo soluciones web modernas y experiencias digitales que conectan 
          <span className="text-cyan-400"> tecnología</span> con 
          <span className="text-pink-400"> creatividad</span>
        </motion.p>

        {/* Botones de acción limpios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-12 md:mb-16"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-3 md:px-8 md:py-3 text-sm md:text-base font-medium rounded-xl border-0 shadow-lg shadow-cyan-500/25 w-full sm:w-auto"
              onClick={() => handleSmoothScroll("proyectos")}
            >
              Ver mi trabajo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              size="lg"
              className="border border-white/20 text-white hover:bg-white/10 px-6 py-3 md:px-8 md:py-3 text-sm md:text-base bg-white/5 backdrop-blur-sm rounded-xl w-full sm:w-auto"
              onClick={() => handleSmoothScroll("contacto")}
            >
              Hablemos
            </Button>
          </motion.div>
        </motion.div>

        {/* Enlaces sociales minimalistas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-4 md:space-x-6 mb-12 md:mb-20"
        >
          {[
            { icon: Github, href: "#", label: "GitHub", color: "hover:text-white" },
            { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
            { icon: Mail, href: "#", label: "Email", color: "hover:text-green-400" },
          ].map((social, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2, scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                href={social.href} 
                className={`text-white/60 ${social.color} transition-all duration-300`} 
                aria-label={social.label}
              >
                <social.icon size={20} className="md:w-6 md:h-6" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Indicador de scroll rediseñado */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-xs text-white/60 font-medium tracking-widest uppercase">Scroll Down</span>
          <motion.button
            className="group relative w-8 h-8 md:w-10 md:h-10 bg-gradient-to-b from-cyan-400/20 to-blue-500/20 backdrop-blur-md border border-cyan-400/30 rounded-full hover:from-cyan-400/30 hover:to-blue-500/30 hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              boxShadow: [
                "0 0 0 0 rgba(6, 182, 212, 0.4)",
                "0 0 0 10px rgba(6, 182, 212, 0)",
                "0 0 0 0 rgba(6, 182, 212, 0.4)"
              ]
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }
            }}
            onClick={() => handleSmoothScroll("sobre-mi-servicios")}
          >
            {/* Flecha hacia abajo */}
            <motion.svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="text-cyan-400 md:w-4 md:h-4"
              animate={{ y: [0, 2, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }}
            >
              <path
                d="M7 13L12 18L17 13M12 6V18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}