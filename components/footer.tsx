"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const footerLinks = {
    navegacion: [
      { name: "Inicio", href: "/" },
      { name: "Sobre Mí", href: "/sobre-mi" },
      { name: "Servicios", href: "/servicios" },
      { name: "Proyectos", href: "/proyectos" },
    ],
    servicios: [
      { name: "Chatbot con IA", href: "/servicios#chatbot" },
      { name: "Aplicaciones Web", href: "/servicios#web-apps" },
      { name: "Dashboard Empresarial", href: "/servicios#dashboard" },
      { name: "Backend & APIs", href: "/servicios#backend" },
    ],
    contacto: [
      { name: "Email", href: "mailto:contacto@maxitodev.com", icon: Mail },
      { name: "WhatsApp", href: "https://wa.me/1234567890", icon: Phone },
      { name: "LinkedIn", href: "https://linkedin.com/in/maxitodev", icon: Linkedin },
      { name: "GitHub", href: "https://github.com/maxitodev", icon: Github },
    ],
  }

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/maxitodev", icon: Github, color: "#ffffff" },
    { name: "LinkedIn", href: "https://linkedin.com/in/maxitodev", icon: Linkedin, color: "#0077b5" },
    { name: "Email", href: "mailto:contacto@maxitodev.com", icon: Mail, color: "#ea4335" },
  ]

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                className="text-3xl font-bold text-white mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-white">
                  MaxitoDev
                </span>
              </motion.div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Desarrollador Full Stack especializado en crear soluciones digitales innovadoras con tecnologías
                modernas y IA.
              </p>

              <div className="flex items-center gap-2 text-gray-300 mb-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">México, CDMX</span>
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm">Disponible para proyectos</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-white font-semibold mb-6">Navegación</h3>
              <ul className="space-y-3">
                {footerLinks.navegacion.map((link, index) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-white font-semibold mb-6">Servicios</h3>
              <ul className="space-y-3">
                {footerLinks.servicios.map((link, index) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-6">Contacto</h3>
              <ul className="space-y-3">
                {footerLinks.contacto.map((link, index) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <link.icon className="w-4 h-4 mr-2" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Newsletter 
              <div className="mt-8">
                <h4 className="text-white font-medium mb-3">Newsletter</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Recibe actualizaciones sobre nuevos proyectos y tecnologías.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="flex-1 px-3 py-2 bg-white/5 border border-white/20 rounded-l-lg text-white text-sm focus:outline-none focus:border-blue-400 placeholder-gray-500"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-r-lg text-sm font-medium shadow-lg"
                    style={{
                      boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)",
                    }}
                  >
                    Suscribir
                  </motion.button>
                </div>
              </div>*/}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <div className="text-gray-300 text-sm">
                © {currentYear} MaxitoDev. Todos los derechos reservados.
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.name}
                    whileHover={{
                      y: -5,
                      scale: 1.1,
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={social.href}
                      className="relative group p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300 shadow-lg border border-white/10"
                      aria-label={social.name}
                      style={{
                        boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <motion.div
                        whileHover={{
                          color: social.color,
                          filter: `drop-shadow(0 0 10px ${social.color}40)`,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <social.icon size={18} className="text-gray-400" />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Back to Top */}
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 text-sm bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full shadow-lg border border-white/10"
                style={{
                  boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)",
                }}
              >
                <ArrowUpRight className="w-4 h-4 rotate-[-90deg]" />
                Volver arriba
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
               