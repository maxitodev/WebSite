"use client"

import { Code } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function SkillsSection() {
  const [isMounted, setIsMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || !containerRef.current || !sectionsRef.current) return

    const container = containerRef.current
    const sections = sectionsRef.current
    const skillCategories = sections.querySelectorAll('.skill-category')

    // Set up horizontal scroll
    const totalWidth = skillCategories.length * 100
    
    gsap.set(sections, {
      width: `${totalWidth}vw`,
      display: "flex"
    })

    gsap.set(skillCategories, {
      width: "100vw"
    })

    // Simple horizontal scroll animation
    gsap.to(sections, {
      x: () => -(totalWidth - 100) + "vw",
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${totalWidth * 10}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [isMounted])

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: "/icons/react.png", color: "#61DAFB" },
        { name: "Next.js", icon: "/icons/nextjs.png", color: "#000000" },
        { name: "TypeScript", icon: "/icons/typescript.png", color: "#3178C6" },
        { name: "JavaScript", icon: "/icons/javascript.png", color: "#F7DF1E" },
        { name: "Tailwind CSS", icon: "/icons/tailwind.png", color: "#06B6D4" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "/icons/nodejs.png", color: "#339933" },
        { name: "Express", icon: "/icons/express.png", color: "#000000" },
        { name: "Python", icon: "/icons/python.png", color: "#3776AB" },
        { name: "MongoDB", icon: "/icons/mongodb.png", color: "#47A248" },
        { name: "SQL", icon: "/placeholder.svg?height=64&width=64&text=SQL", color: "#336791" },
      ],
    },
    {
      title: "Tools & AI",
      skills: [
        { name: "OpenAI", icon: "/icons/openai.png", color: "#412991" },
        { name: "Vite", icon: "/icons/vite.png", color: "#646CFF" },
      ],
    },
  ]

  return (
    <section id="habilidades" className="relative overflow-hidden">
      <div ref={containerRef} className="min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <Image
            src="/images/photo-2.jpeg"
            alt="Gaming Setup Background"
            fill
            className="object-cover object-center"
            style={{
              filter: "brightness(1) contrast(1.2) saturate(1.1)",
            }}
          />
        </div>

        {/* Horizontal Scroll Container */}
        <div ref={sectionsRef} className="relative z-30 h-screen">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="skill-category flex items-center justify-center h-full px-6"
            >
              <div className="container mx-auto text-center">
                {/* Section Header */}
                <div className="mb-16">
                  <div className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-md border border-green-400/50 rounded-full px-6 py-3 mb-8 shadow-2xl"
                    style={{
                      boxShadow: "0 0 30px rgba(0, 255, 136, 0.4)",
                    }}
                  >
                    <Code className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-white font-medium">Stack Tecnológico</span>
                  </div>

                  <h2 className="text-6xl md:text-8xl font-black mb-6 text-white">
                    {category.title}
                  </h2>

                  <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                    {categoryIndex === 0 && "Tecnologías frontend para crear interfaces modernas"}
                    {categoryIndex === 1 && "Herramientas backend para desarrollar APIs robustas"}
                    {categoryIndex === 2 && "Herramientas y tecnologías de inteligencia artificial"}
                  </p>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
                  {category.skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="group relative"
                    >
                      <div className="relative bg-black/40 backdrop-blur-md border-2 border-white/20 hover:border-white/40 rounded-2xl p-6 transition-all duration-500 min-w-[120px] shadow-2xl hover:shadow-3xl">
                        {/* Glow Effect */}
                        <div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                          style={{ backgroundColor: `${skill.color}30` }}
                        />

                        {/* Icon Container */}
                        <div className="relative z-10 flex flex-col items-center space-y-4">
                          {/* Icon */}
                          <div className="w-16 h-16 relative">
                            {skill.name === "SQL" ? (
                              <div
                                className="w-full h-full rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:drop-shadow-lg transition-all duration-300 shadow-lg"
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
                                width={64}
                                height={64}
                                className="w-full h-full object-contain group-hover:drop-shadow-lg transition-all duration-300"
                                style={{
                                  filter: `drop-shadow(0 0 10px ${skill.color}40)`,
                                }}
                              />
                            )}
                          </div>

                          {/* Name */}
                          <span
                            className="text-white font-medium text-center group-hover:text-white transition-colors duration-300"
                            style={{
                              textShadow: `0 0 10px ${skill.color}20`,
                            }}
                          >
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress Indicator */}
                <div className="flex justify-center mt-16 space-x-2">
                  {skillCategories.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === categoryIndex 
                          ? 'bg-green-400 shadow-lg' 
                          : 'bg-white/30'
                      }`}
                      style={index === categoryIndex ? {
                        boxShadow: "0 0 10px rgba(0, 255, 136, 0.6)"
                      } : {}}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Instruction */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
          <div className="text-white/60 text-sm font-medium">
            Scroll para ver más tecnologías
          </div>
        </div>
      </div>
    </section>
  )
}