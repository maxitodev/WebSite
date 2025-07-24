"use client"

import { motion } from "framer-motion"
import { Download, Award, Users, Code, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function AboutSection() {

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

  return (
    <section id="sobre-mi" className="min-h-[80vh] py-20 relative overflow-hidden bg-black">
      {/* Simplified Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle, #FFFFFF 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-white font-medium">Conoce a MaxitoDev</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white">
            SOBRE MÍ
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="relative">
            <motion.div
              className="relative w-full max-w-md mx-auto"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Image Container */}
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
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Mi nombre es {" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Max
                </span>
              </h3>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Desarrollador Full Stack en formación, apasionado por la tecnología y la inteligencia artificial.
                Actualmente me estoy especializando en tecnologías modernas como React, Next.js, Node.js y OpenAI para
                crear soluciones innovadoras.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-8">
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
                  className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-medium border-0 shadow-lg"
                  style={{
                    boxShadow: "0 0 30px rgba(0, 212, 255, 0.4)",
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    <Download className="mr-2 w-5 h-5" />
                    Descargar CV
                  </span>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group"
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-500 h-full shadow-lg hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <div className="text-white">{stat.icon}</div>
                  </motion.div>

                  <div
                    className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                  >
                    {stat.number}
                  </div>

                  <p className="text-gray-400 text-sm font-light group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
