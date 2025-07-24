"use client"

import { Code, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { useEffect, useState, useRef, useCallback } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function SkillsSection() {
  const [isMounted, setIsMounted] = useState(false)
  const [currentCategory, setCurrentCategory] = useState(0) // Siempre inicia en 0 (Frontend)
  const [isMobile, setIsMobile] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLDivElement>(null)
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null)

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

  useEffect(() => {
    setIsMounted(true)
    // Reset to Frontend (index 0) when component mounts
    setCurrentCategory(0)
    // Ensure autoplay is enabled from the start
    setIsAutoPlaying(true)
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Autoplay functionality
  const startAutoPlay = useCallback(() => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current)
    }
    
    autoPlayIntervalRef.current = setInterval(() => {
      setCurrentCategory(prev => {
        const nextCategory = prev + 1
        if (nextCategory >= skillCategories.length) {
          return 0 // Restart from beginning
        }
        return nextCategory
      })
    }, 4000) // Change every 4 seconds
  }, [skillCategories.length])

  const stopAutoPlay = useCallback(() => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current)
      autoPlayIntervalRef.current = null
    }
  }, [])

  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlaying(false)
    stopAutoPlay()
  }, [stopAutoPlay])

  const resumeAutoPlay = useCallback(() => {
    setIsAutoPlaying(true)
    startAutoPlay()
  }, [startAutoPlay])

  // Start autoplay when mounted (asegurar que siempre inicie)
  useEffect(() => {
    if (isMounted) {
      // Always start autoplay when component is mounted
      setIsAutoPlaying(true)
      startAutoPlay()
    }
    
    return () => {
      stopAutoPlay()
    }
  }, [isMounted, startAutoPlay, stopAutoPlay])

  const navigateToCategory = useCallback((index: number) => {
    if (index >= 0 && index < skillCategories.length) {
      setCurrentCategory(index)
      // Pause autoplay when user manually navigates
      pauseAutoPlay()
      // Resume autoplay after 6 seconds of inactivity (reduced from 8)
      setTimeout(() => {
        resumeAutoPlay()
      }, 6000)
    }
  }, [skillCategories.length, pauseAutoPlay, resumeAutoPlay])

  const handlePrevious = useCallback((event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault()
      event.stopPropagation()
    }
    const newIndex = currentCategory - 1
    if (newIndex >= 0) {
      setCurrentCategory(newIndex)
      // Pause autoplay when user manually navigates
      pauseAutoPlay()
      // Resume autoplay after 6 seconds of inactivity (reduced from 8)
      setTimeout(() => {
        resumeAutoPlay()
      }, 6000)
    }
  }, [currentCategory, pauseAutoPlay, resumeAutoPlay])

  const handleNext = useCallback((event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault()
      event.stopPropagation()
    }
    const newIndex = currentCategory + 1
    if (newIndex < skillCategories.length) {
      setCurrentCategory(newIndex)
      // Pause autoplay when user manually navigates
      pauseAutoPlay()
      // Resume autoplay after 6 seconds of inactivity (reduced from 8)
      setTimeout(() => {
        resumeAutoPlay()
      }, 6000)
    }
  }, [currentCategory, skillCategories.length, pauseAutoPlay, resumeAutoPlay])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        handlePrevious()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        handleNext()
      } else if (event.key === ' ') {
        // Spacebar to toggle autoplay
        event.preventDefault()
        if (isAutoPlaying) {
          pauseAutoPlay()
        } else {
          resumeAutoPlay()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handlePrevious, handleNext, isAutoPlaying, pauseAutoPlay, resumeAutoPlay])

  // Effect to handle category changes in mobile (con animaciones)
  useEffect(() => {
    if (!isMounted || !isMobile || !sectionsRef.current) return
    
    const sections = sectionsRef.current
    const skillCategoryElements = sections.querySelectorAll('.skill-category')
    
    // Animate out current categories and animate in the new one
    skillCategoryElements.forEach((category, index) => {
      if (index === currentCategory) {
        // Show and animate in the current category
        gsap.set(category, { display: "flex" })
        gsap.fromTo(category, 
          { 
            opacity: 0, 
            y: 30,
            scale: 0.95
          }, 
          { 
            opacity: 1, 
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out"
          }
        )
      } else {
        // Hide other categories with animation
        gsap.to(category, {
          opacity: 0,
          y: -30,
          scale: 0.95,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(category, { display: "none" })
          }
        })
      }
    })
  }, [currentCategory, isMobile, isMounted])

  // Effect to handle category changes in desktop
  useEffect(() => {
    if (!isMounted || isMobile || !sectionsRef.current) return
    
    const sections = sectionsRef.current
    const skillCategoryElements = sections.querySelectorAll('.skill-category')
    const totalWidth = skillCategoryElements.length * 100
    const targetX = -(currentCategory * 100)
    
    gsap.to(sections, {
      x: `${targetX}vw`,
      duration: 0.8,
      ease: "power2.inOut"
    })
  }, [currentCategory, isMobile, isMounted])

  useEffect(() => {
    if (!isMounted || !containerRef.current || !sectionsRef.current) return

    const container = containerRef.current
    const sections = sectionsRef.current
    const skillCategories = sections.querySelectorAll('.skill-category')

    // Clean up previous ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())

    if (isMobile) {
      // For mobile, use simple state-based navigation with initial setup
      gsap.set(sections, { x: 0 })
      gsap.set(skillCategories, { 
        display: "none",
        opacity: 0,
        y: 0,
        scale: 1
      })
      if (skillCategories[currentCategory]) {
        gsap.set(skillCategories[currentCategory], { 
          display: "flex",
          opacity: 1,
          y: 0,
          scale: 1
        })
      }
      return
    }

    // Desktop: Set up horizontal layout
    const totalWidth = skillCategories.length * 100
    
    gsap.set(sections, {
      width: `${totalWidth}vw`,
      display: "flex"
    })

    gsap.set(skillCategories, {
      width: "100vw",
      display: "flex"
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [isMounted, isMobile])

  return (
    <section 
      id="habilidades" 
      className="relative overflow-hidden"
    >
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
            priority={false}
            quality={75}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>

        {/* Navigation Arrows - now positioned with indicators */}
        {/* These will be positioned with the progress indicators */}

        {/* Horizontal Scroll Container */}
        <div ref={sectionsRef} className="relative z-30 h-screen">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`skill-category flex items-center justify-center h-full px-2 xs:px-4 sm:px-6 ${
                isMobile ? (categoryIndex === currentCategory ? 'block' : 'hidden') : ''
              }`}
              style={{ width: isMobile ? '100vw' : undefined }}
            >
              <div className="container mx-auto text-center max-w-6xl">
                {/* Section Header */}
                <div className="mb-6 xs:mb-8 sm:mb-16">
                  <div className="inline-flex items-center gap-1.5 xs:gap-2 bg-black/50 backdrop-blur-md border border-green-400/50 rounded-full px-3 py-1.5 xs:px-4 xs:py-2 sm:px-6 sm:py-3 mb-4 xs:mb-6 sm:mb-8 shadow-2xl"
                    style={{
                      boxShadow: "0 0 30px rgba(0, 255, 136, 0.4)",
                    }}
                  >
                    <Code className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 text-green-400" />
                    <span className="text-xs xs:text-xs sm:text-sm text-white font-medium">Stack Tecnológico</span>
                  </div>

                  <h2 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-3 xs:mb-4 sm:mb-6 text-white leading-tight px-2">
                    {category.title}
                  </h2>

                  <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 max-w-xs xs:max-w-xl md:max-w-2xl mx-auto font-light px-3 xs:px-4">
                    {categoryIndex === 0 && "Tecnologías frontend para crear interfaces modernas"}
                    {categoryIndex === 1 && "Herramientas backend para APIs robustas"}
                    {categoryIndex === 2 && "Herramientas y tecnologías de IA"}
                  </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-center gap-2 xs:gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto px-2 xs:px-4">
                  {category.skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="group relative"
                    >
                      <div className="relative bg-black/40 backdrop-blur-md border-2 border-white/20 hover:border-white/40 rounded-lg xs:rounded-xl sm:rounded-2xl p-2 xs:p-4 sm:p-6 transition-all duration-500 w-full md:min-w-[120px] shadow-2xl hover:shadow-3xl">
                        {/* Glow Effect */}
                        <div
                          className="absolute inset-0 rounded-lg xs:rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                          style={{ backgroundColor: `${skill.color}30` }}
                        />

                        {/* Icon Container */}
                        <div className="relative z-10 flex flex-col items-center space-y-1 xs:space-y-2 sm:space-y-4">
                          {/* Icon */}
                          <div className="w-8 h-8 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 relative">
                            {skill.name === "SQL" ? (
                              <div
                                className="w-full h-full rounded-md xs:rounded-lg flex items-center justify-center text-white font-bold text-xs xs:text-sm sm:text-base md:text-lg group-hover:drop-shadow-lg transition-all duration-300 shadow-lg"
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
                                quality={80}
                                sizes="(max-width: 768px) 32px, (max-width: 1024px) 48px, 64px"
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjMjEyMTIxIi8+Cjwvc3ZnPgo="
                              />
                            )}
                          </div>

                          {/* Name */}
                          <span
                            className="text-white font-medium text-center group-hover:text-white transition-colors duration-300 text-xs xs:text-sm sm:text-base leading-tight"
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

                {/* Progress Indicator with Navigation */}
                <div className="flex justify-center items-center mt-6 xs:mt-8 sm:mt-12 md:mt-16 space-x-3 xs:space-x-4">
                  {/* Previous Arrow */}
                  <button
                    onClick={handlePrevious}
                    disabled={currentCategory === 0}
                    className="bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-not-allowed border border-green-400/50 hover:border-green-400 rounded-full p-1.5 xs:p-2 sm:p-3 transition-all duration-300 backdrop-blur-md"
                    style={{
                      boxShadow: "0 0 15px rgba(0, 255, 136, 0.3)",
                    }}
                    aria-label="Categoría anterior"
                  >
                    <ChevronLeft className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-green-400" />
                  </button>

                  {/* Progress Dots */}
                  <div className="flex space-x-2" role="tablist" aria-label="Categorías de habilidades">
                    {skillCategories.map((cat, index) => (
                      <button
                        key={index}
                        onClick={() => navigateToCategory(index)}
                        className={`min-w-[44px] min-h-[44px] p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 flex items-center justify-center ${
                          index === currentCategory 
                            ? 'bg-green-400/20 hover:bg-green-400/30' 
                            : 'bg-white/10 hover:bg-white/20'
                        }`}
                        style={index === currentCategory ? {
                          boxShadow: "0 0 10px rgba(0, 255, 136, 0.6)"
                        } : {}}
                        aria-label={`Ir a categoría ${cat.title}`}
                        role="tab"
                        aria-selected={index === currentCategory}
                      >
                        <div
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentCategory 
                              ? 'bg-green-400 shadow-lg' 
                              : 'bg-white/50'
                          }`}
                          style={index === currentCategory ? {
                            boxShadow: "0 0 8px rgba(0, 255, 136, 0.6)"
                          } : {}}
                        />
                      </button>
                    ))}
                  </div>

                  {/* Next Arrow */}
                  <button
                    onClick={handleNext}
                    disabled={currentCategory === skillCategories.length - 1}
                    className="bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-not-allowed border border-green-400/50 hover:border-green-400 rounded-full p-1.5 xs:p-2 sm:p-3 transition-all duration-300 backdrop-blur-md"
                    style={{
                      boxShadow: "0 0 15px rgba(0, 255, 136, 0.3)",
                    }}
                    aria-label="Siguiente categoría"
                  >
                    <ChevronRight className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-green-400" />
                  </button>
                </div>

                {/* Autoplay indicator */}
                <div className="flex justify-center mt-3 xs:mt-4">
                  <div className={`w-1 h-1 rounded-full transition-all duration-300 ${
                    isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-white/30'
                  }`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ver más button */}
        <div className="absolute bottom-4 xs:bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-40">
          <button
            className="group bg-black/50 hover:bg-black/70 backdrop-blur-md border border-green-400/50 hover:border-green-400 rounded-full px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-4 transition-all duration-300 shadow-2xl hover:shadow-3xl"
            style={{
              boxShadow: "0 0 20px rgba(0, 255, 136, 0.3)",
            }}
            onClick={() => {
              const nextSection = document.querySelector('#proyectos, #about, #contacto')
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <div className="flex items-center gap-1.5 xs:gap-2">
              <span className="text-white font-medium text-xs xs:text-sm sm:text-base">Ver más</span>
              <ExternalLink className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-green-400 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}