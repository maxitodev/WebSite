"use client"

import { motion } from "framer-motion"
import { Bot, Globe, BarChart3, Server, Zap, Star, ArrowUpRight, Clock, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ServicesSection() {

  const services = [
    {
      title: "Chatbot con IA",
      description: "Chatbots inteligentes integrados con OpenAI para atención al cliente",
      icon: <Bot className="w-8 h-8" />,
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
      icon: <Globe className="w-8 h-8" />,
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
      icon: <BarChart3 className="w-8 h-8" />,
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
      icon: <Server className="w-8 h-8" />,
      price: "Desde $120",
      delivery: "7-12 días",
      features: ["Node.js/Express", "MongoDB/SQL", "Autenticación", "Documentación"],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
      borderGradient: "from-orange-400/30 to-red-400/30",
      shadowColor: "shadow-orange-500/20",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section id="servicios" className="min-h-[100vh] py-20 relative overflow-hidden bg-black">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
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
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Floating Tech Icons */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-blue-400/30"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            boxShadow: "0 0 30px rgba(0, 212, 255, 0.3)",
          }}
        >
          <Bot className="w-8 h-8 text-blue-400" />
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-1/4 w-14 h-14 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-400/30"
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{
            boxShadow: "0 0 30px rgba(255, 0, 128, 0.3)",
          }}
        >
          <Globe className="w-7 h-7 text-purple-400" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-green-400/30"
          animate={{
            rotate: [0, -180, 0],
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{
            boxShadow: "0 0 30px rgba(0, 255, 136, 0.3)",
          }}
        >
          <BarChart3 className="w-6 h-6 text-green-400" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-1/6 w-18 h-18 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-orange-400/30"
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
          style={{
            boxShadow: "0 0 30px rgba(255, 165, 0, 0.3)",
          }}
        >
          <Server className="w-8 h-8 text-orange-400" />
        </motion.div>

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-yellow-400/30 rounded-full px-6 py-3 mb-8 shadow-lg"
            style={{
              boxShadow: "0 0 20px rgba(255, 215, 0, 0.2)",
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Zap className="w-4 h-4 text-yellow-400" />
            </motion.div>
            <span className="text-sm text-white font-medium">Servicios Especializados</span>
          </div>

          <h2 className="text-6xl md:text-8xl font-black mb-6 text-white">
            {"SERVICIOS".split("").map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block"
                whileHover={{
                  scale: 1.1,
                  color: "#00D4FF",
                  textShadow: "0 0 20px rgba(0, 212, 255, 0.8)",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Soluciones innovadoras combinando desarrollo web con inteligencia artificial
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              whileHover={{
                y: -20,
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <Card
                className={`bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm border-2 border-white/10 hover:border-white/20 transition-all duration-500 h-full relative overflow-hidden ${service.shadowColor} shadow-xl hover:shadow-2xl`}
              >
                {/* Animated Border */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${service.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}
                  style={{ padding: "2px" }}
                >
                  <div className={`w-full h-full bg-gradient-to-br ${service.bgGradient} rounded-lg`} />
                </motion.div>

                <CardContent className="p-6 relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="text-white mb-4 flex justify-center relative"
                    whileHover={{
                      rotate: 360,
                      scale: 1.2,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg`}>
                      {service.icon}
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-2 text-white text-center">{service.title}</h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 font-light text-sm text-center">{service.description}</p>

                  {/* Price & Delivery */}
                  <div className="flex justify-between items-center mb-4">
                    <Badge
                      variant="outline"
                      className={`bg-gradient-to-r ${service.gradient} text-white border-0 shadow-md`}
                    >
                      {service.price}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />
                      {service.delivery}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-1 mb-6">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                        <Star className="w-2 h-2 text-yellow-400" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="sm"
                      className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white border-0 text-xs shadow-lg`}
                    >
                      <Eye className="w-3 h-3 mr-1" />
                      Ver más
                    </Button>
                  </motion.div>

                  {/* Hover Arrow */}
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.2, rotate: 45 }}
                  >
                    <ArrowUpRight className="w-4 h-4 text-gray-300" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
