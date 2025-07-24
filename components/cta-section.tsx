import { ArrowRight, Mail, MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"

export function CTASection() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "Respuesta en 24 horas",
      action: "Enviar Email",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Respuesta inmediata",
      action: "Chatear Ahora",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
    },
  ]

  return (
    <section id="contacto" className="min-h-[80vh] py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/75 z-10" />
        <Image
          src="/images/jobsection.jpg"
          alt="Contact Background"
          fill
          className="object-cover object-center"
          style={{
            filter: "brightness(1) contrast(1.3) saturate(1.2)",
          }}
        />
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 z-20 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-400/50 rounded-lg rotate-12"></div>
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-green-400/50 rounded-full"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-purple-400/20 rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 right-32 w-14 h-14 bg-yellow-400/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-cyan-400/30 rounded-lg"></div>
        <div className="absolute top-1/3 right-1/3 w-10 h-10 border-2 border-pink-400/50 rounded-lg rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 relative z-30">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md border border-yellow-400/50 rounded-full px-6 py-3 mb-8 shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white font-medium">¡Hablemos!</span>
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            TRABAJEMOS
          </motion.h2>

          <motion.div 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 text-center text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            JUNTOS
          </motion.div>

          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto font-light mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            ¿Tienes un proyecto en mente? Hagamos realidad tu visión digital con tecnologías modernas y soluciones
            innovadoras
          </motion.p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {contactMethods.map((method, index) => (
            <motion.div 
              key={method.title} 
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-black/50 backdrop-blur-md border-2 border-white/20 hover:border-white/40 transition-all duration-300 h-full shadow-xl hover:shadow-2xl hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <motion.div 
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${method.gradient} mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-white">{method.icon}</div>
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-gray-300 mb-6 font-light">{method.description}</p>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      className={`w-full bg-gradient-to-r ${method.gradient} hover:opacity-90 text-white border-0 shadow-lg transition-all duration-200 hover:scale-105`}
                      onClick={(e) => {
                        e.preventDefault();
                        if (method.title === "Email") {
                          window.open("mailto:tu-email@example.com", "_blank");
                        } else if (method.title === "WhatsApp") {
                          window.open("https://wa.me/tunumero", "_blank");
                        }
                      }}
                    >
                      {method.action}
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              size="lg"
              className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-6 text-xl font-medium border-0 shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              onClick={(e) => {
                e.preventDefault();
                // Usar Lenis para scroll suave al inicio del formulario o sección de contacto
                const element = document.getElementById('contacto');
                if (element && window.lenis) {
                  window.lenis.scrollTo(element, { offset: -100, duration: 1.5 });
                } else {
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              <span className="flex items-center">
                Iniciar Proyecto
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="ml-3 w-6 h-6" />
                </motion.div>
              </span>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:text-black hover:bg-white hover:border-white px-12 py-6 text-xl bg-transparent shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              onClick={(e) => {
                e.preventDefault();
                // Scroll suave a la sección de proyectos usando Lenis
                const element = document.getElementById('proyectos');
                if (element && window.lenis) {
                  window.lenis.scrollTo(element, { offset: -100, duration: 1.5 });
                } else {
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Ver Portfolio Completo
            </Button>
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-400">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              <span>Disponible para proyectos</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Mail className="w-4 h-4" />
              <span>Respuesta en 24h</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-4 h-4" />
              <span>Consulta gratuita</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
