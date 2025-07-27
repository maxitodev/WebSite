"use client"

import { ArrowLeft, Code, ExternalLink, Zap, Server, Database, Cloud, Bot } from "lucide-react"
import { useRouter } from 'next/navigation'
import Image from "next/image"

export default function SkillsPage() {
  const router = useRouter()

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      description: "Creo interfaces modernas y responsivas",
      skills: [
        { 
          name: "React", 
          icon: "/icons/react.png", 
          color: "#61DAFB",
          description: "Desarrollo componentes reutilizables y aplicaciones SPA interactivas"
        },
        { 
          name: "Next.js", 
          icon: "/icons/nextjs.png", 
          color: "#000000",
          description: "Aplicaciones full-stack con SSR, SSG y optimización automática"
        },
        { 
          name: "TypeScript", 
          icon: "/icons/typescript.png", 
          color: "#3178C6",
          description: "Código más robusto y mantenible con tipado estático"
        },
        { 
          name: "JavaScript", 
          icon: "/icons/javascript.png", 
          color: "#F7DF1E",
          description: "Lógica dinámica, DOM manipulation y programación asíncrona"
        },
        { 
          name: "Tailwind CSS", 
          icon: "/icons/tailwind.png", 
          color: "#06B6D4",
          description: "Diseños rápidos y consistentes con utility-first CSS"
        },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      description: "Construyo APIs robustas y escalables",
      skills: [
        { 
          name: "Node.js", 
          icon: "/icons/nodejs.png", 
          color: "#339933",
          description: "Servidores de alto rendimiento y aplicaciones en tiempo real"
        },
        { 
          name: "Express", 
          icon: "/icons/express.png", 
          color: "#000000",
          description: "APIs RESTful rápidas con middleware personalizado"
        },
        { 
          name: "Python", 
          icon: "/icons/python.png", 
          color: "#3776AB",
          description: "Scripts de automatización, APIs y procesamiento de datos"
        },
        { 
          name: "MongoDB", 
          icon: "/icons/mongodb.png", 
          color: "#47A248",
          description: "Bases de datos NoSQL flexibles para aplicaciones modernas"
        },
        { 
          name: "SQL", 
          icon: "/placeholder.svg?height=64&width=64&text=SQL", 
          color: "#336791",
          description: "Consultas complejas y diseño de bases de datos relacionales"
        },
      ],
    },
    {
      title: "Tools & AI",
      icon: Bot,
      description: "Integro IA y herramientas modernas",
      skills: [
        { 
          name: "OpenAI", 
          icon: "/icons/openai.png", 
          color: "#412991",
          description: "Chatbots inteligentes y automatización con GPT-4"
        },
        { 
          name: "Vite", 
          icon: "/icons/vite.png", 
          color: "#646CFF",
          description: "Desarrollo ultrarrápido con HMR y builds optimizados"
        },
      ],
    },
  ]

  const competencies = [
    {
      title: "Desarrollo Full-Stack",
      description: "Experiencia completa en frontend y backend",
      icon: Code,
      color: "#61DAFB",
      attributes: [
        "Arquitectura de aplicaciones modernas",
        "Integración seamless frontend-backend",
        "Optimización de rendimiento",
        "Código limpio y mantenible"
      ]
    },
    {
      title: "Gestión de Bases de Datos",
      description: "Diseño y optimización de datos",
      icon: Database,
      color: "#47A248",
      attributes: [
        "Modelado de datos eficiente",
        "Consultas SQL complejas",
        "NoSQL para escalabilidad",
        "Backup y recuperación"
      ]
    },
    {
      title: "DevOps & Deploy",
      description: "Despliegue y administración de aplicaciones",
      icon: Cloud,
      color: "#FF9500",
      attributes: [
        "CI/CD automatizado",
        "Configuración de servidores",
        "Monitoreo y logs",
        "Escalabilidad automática"
      ]
    },
    {
      title: "Integración de APIs",
      description: "Conexión y consumo de servicios externos",
      icon: Server,
      color: "#339933",
      attributes: [
        "APIs RESTful robustas",
        "Autenticación JWT/OAuth",
        "Documentación clara",
        "Rate limiting y seguridad"
      ]
    },
    {
      title: "Automatización & IA",
      description: "Implementación de soluciones inteligentes",
      icon: Bot,
      color: "#412991",
      attributes: [
        "Chatbots conversacionales",
        "Procesamiento de lenguaje natural",
        "Scripts de automatización",
        "Machine Learning básico"
      ]
    },
    {
      title: "UI/UX Development",
      description: "Interfaces intuitivas y responsivas",
      icon: Zap,
      color: "#F7DF1E",
      attributes: [
        "Diseño responsive mobile-first",
        "Animaciones y microinteracciones",
        "Accesibilidad web (a11y)",
        "Optimización de carga"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Header */}
      <header className="relative z-20 p-6">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-3 bg-black/50 hover:bg-black/70 backdrop-blur-md border border-green-400/50 hover:border-green-400 rounded-full px-6 py-3 transition-all duration-300"
          style={{
            boxShadow: "0 0 20px rgba(0, 255, 136, 0.3)",
          }}
        >
          <ArrowLeft className="w-5 h-5 text-green-400 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-white font-medium">Regresar</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-12">
        {/* Title Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-md border border-green-400/50 rounded-full px-6 py-3 mb-8"
            style={{
              boxShadow: "0 0 30px rgba(0, 255, 136, 0.4)",
            }}
          >
            <Code className="w-5 h-5 text-green-400" />
            <span className="text-white font-medium">Stack Tecnológico & Competencias</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight">
            Skills & Competencias
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Desarrollador Full-Stack en formación | React · Node.js · Express · MongoDB · MySQL | JWT · OAuth · Stripe · PayPal · MercadoPago | Linux · GCP · VPS
          </p>
        </div>

        {/* Technologies Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Tecnologías que Domino
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon
              return (
                <div
                  key={category.title}
                  className="bg-black/40 backdrop-blur-md border-2 border-white/20 hover:border-white/40 rounded-2xl p-8 transition-all duration-500 shadow-2xl hover:shadow-3xl"
                >
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="w-8 h-8 text-green-400" />
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm">{category.description}</p>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group relative bg-black/40 backdrop-blur-md border border-white/20 hover:border-white/40 rounded-xl p-4 transition-all duration-300"
                      >
                        <div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                          style={{ backgroundColor: `${skill.color}30` }}
                        />
                        
                        <div className="relative z-10 flex items-center space-x-4">
                          <div className="w-12 h-12 relative flex-shrink-0">
                            {skill.name === "SQL" ? (
                              <div
                                className="w-full h-full rounded-lg flex items-center justify-center text-white font-bold text-xs group-hover:drop-shadow-lg transition-all duration-300"
                                style={{
                                  backgroundColor: skill.color,
                                  filter: `drop-shadow(0 0 10px ${skill.color}40)`,
                                  boxShadow: `0 0 20px ${skill.color}40`,
                                }}
                              >
                                SQL
                              </div>
                            ) : (
                              <Image
                                src={skill.icon || "/placeholder.svg"}
                                alt={skill.name}
                                width={48}
                                height={48}
                                className="w-full h-full object-contain group-hover:drop-shadow-lg transition-all duration-300"
                                style={{
                                  filter: `drop-shadow(0 0 10px ${skill.color}40)`,
                                }}
                              />
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <h4
                              className="text-white font-medium text-sm mb-1 group-hover:text-white transition-colors duration-300"
                              style={{
                                textShadow: `0 0 10px ${skill.color}20`,
                              }}
                            >
                              {skill.name}
                            </h4>
                            <p className="text-gray-400 text-xs leading-relaxed">
                              {skill.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Competencies Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Competencias Profesionales
          </h2>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {competencies.map((competency, index) => {
              const IconComponent = competency.icon
              return (
                <div
                  key={competency.title}
                  className="group bg-black/40 backdrop-blur-md border-2 border-white/20 hover:border-white/40 rounded-2xl p-6 transition-all duration-500 shadow-2xl hover:shadow-3xl"
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    style={{ backgroundColor: `${competency.color}20` }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="p-3 rounded-xl"
                        style={{ backgroundColor: `${competency.color}20` }}
                      >
                        <IconComponent 
                          className="w-6 h-6"
                          style={{ color: competency.color }}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white">{competency.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                      {competency.description}
                    </p>
                    
                    <div className="space-y-3">
                      {competency.attributes.map((attribute, attributeIndex) => (
                        <div key={attributeIndex} className="flex items-start gap-3">
                          <div 
                            className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: competency.color }}
                          />
                          <span className="text-gray-300 text-sm leading-relaxed">
                            {attribute}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}