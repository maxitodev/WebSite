"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const navItemsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const activeIndicatorRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  
  const [activeSection, setActiveSection] = useState("inicio")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre Mí", href: "#sobre-mi" },
    { label: "Servicios", href: "#servicios" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ]

  const updateActiveSection = (sectionId: string) => {
    setActiveSection(sectionId)
    
    // Animate active indicator
    const navItem = document.querySelector(`[data-nav-item="${sectionId}"]`)
    if (navItem && activeIndicatorRef.current) {
      const rect = navItem.getBoundingClientRect()
      const navRect = navItemsRef.current?.getBoundingClientRect()
      
      if (navRect) {
        const left = rect.left - navRect.left
        const width = rect.width
        
        gsap.to(activeIndicatorRef.current, {
          x: left,
          width: width,
          duration: 0.6,
          ease: "power3.out"
        })
      }
    }
  }

  // Manual section detection based on scroll position
  const detectActiveSection = () => {
    const sections = ["inicio", "sobre-mi", "servicios", "habilidades", "proyectos", "contacto"]
    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight
    const viewportCenter = scrollPosition + windowHeight / 2

    for (let i = 0; i < sections.length; i++) {
      const sectionId = sections[i]
      const element = document.getElementById(sectionId)
      
      if (element) {
        const rect = element.getBoundingClientRect()
        const elementTop = scrollPosition + rect.top
        const elementBottom = elementTop + rect.height
        
        // Special handling for sticky sections (sobre-mi and servicios)
        if (sectionId === "sobre-mi" || sectionId === "servicios") {
          // Check if the element is visible in the viewport
          const isVisible = rect.top < windowHeight && rect.bottom > 0
          if (isVisible && viewportCenter >= elementTop && viewportCenter <= elementBottom) {
            if (activeSection !== sectionId) {
              updateActiveSection(sectionId)
            }
            return
          }
        } else {
          // Standard detection for other sections
          if (viewportCenter >= elementTop && viewportCenter <= elementBottom) {
            if (activeSection !== sectionId) {
              updateActiveSection(sectionId)
            }
            return
          }
        }
      }
    }
  }

  useEffect(() => {
    const nav = navRef.current
    const logo = logoRef.current
    const navItems = navItemsRef.current
    const cta = ctaRef.current
    const background = backgroundRef.current

    if (!nav || !logo || !navItems || !cta || !background) return

    // Initial animation
    const tl = gsap.timeline()
    
    tl.set([logo, navItems, cta], { y: -100, opacity: 0 })
      .set(background, { scaleY: 0, transformOrigin: "top" })
      .to(background, { scaleY: 1, duration: 0.8, ease: "power3.out" })
      .to([logo, navItems, cta], { 
        y: 0, 
        opacity: 1, 
        duration: 0.6, 
        stagger: 0.1, 
        ease: "back.out(1.7)" 
      }, "-=0.4")

    // Scroll-based animations
    const scrollTrigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "100px top",
      scrub: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const progress = self.progress
        gsap.set(background, {
          backgroundColor: `rgba(0, 0, 0, ${0.8 + progress * 0.15})`,
          backdropFilter: `blur(${8 + progress * 12}px) saturate(${150 + progress * 30}%)`,
          borderBottomColor: `rgba(255, 255, 255, ${0.1 + progress * 0.15})`,
        })
      }
    })

    // Section detection with ScrollSmoother compatibility
    const sections = ["inicio", "sobre-mi", "servicios", "habilidades", "proyectos", "contacto"]
    const sectionTriggers: ScrollTrigger[] = []
    
    // Wait for ScrollSmoother to initialize before creating triggers
    const initSectionTriggers = () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          const trigger = ScrollTrigger.create({
            trigger: element,
            start: "top 60%",
            end: "bottom 40%",
            invalidateOnRefresh: true,
            onEnter: () => {
              updateActiveSection(sectionId)
            },
            onEnterBack: () => {
              updateActiveSection(sectionId)
            },
          })
          sectionTriggers.push(trigger)
        }
      })
    }

    // Refresh ScrollTrigger after ScrollSmoother initialization
    const refreshTimeout = setTimeout(() => {
      initSectionTriggers()
      ScrollTrigger.refresh()
      
      // Additional refresh after a short delay for dynamic content
      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 1000)
    }, 500) // Increased delay for ScrollSmoother initialization

    // Manual scroll listener as backup
    const handleScroll = () => {
      detectActiveSection()
    }

    // Add scroll listener with throttling
    let scrollTimeout: NodeJS.Timeout
    const throttledScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(handleScroll, 100)
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })

    return () => {
      clearTimeout(refreshTimeout)
      if (scrollTimeout) clearTimeout(scrollTimeout)
      window.removeEventListener('scroll', throttledScroll)
      scrollTrigger.kill()
      sectionTriggers.forEach(trigger => trigger.kill())
    }
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    if (href.startsWith("#")) {
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        gsap.to(window, {
          duration: 1.2,
          scrollTo: {
            y: targetElement,
            offsetY: 80
          },
          ease: "power2.inOut"
        })
      }
    }
  }

  const handleNavItemHover = (e: React.MouseEvent<HTMLAnchorElement>, isEntering: boolean) => {
    const item = e.currentTarget
    
    if (isEntering) {
      gsap.to(item, {
        y: -3,
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      })
      
      gsap.to(item.querySelector('.nav-text'), {
        color: "#ffffff",
        textShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
        duration: 0.3
      })
    } else {
      gsap.to(item, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      })
      
      const isActive = item.getAttribute('data-nav-item') === activeSection
      gsap.to(item.querySelector('.nav-text'), {
        color: isActive ? "#ffffff" : "#a1a1aa",
        textShadow: isActive ? "0 0 10px rgba(0, 212, 255, 0.3)" : "none",
        duration: 0.3
      })
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    
    // Mobile menu animation logic here
    // Implementation depends on mobile menu design
  }

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Background */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 border-b border-white/10 shadow-2xl"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(8px) saturate(150%)",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />
        
        {/* Top glow line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div ref={logoRef}>
            <Link href="#inicio" onClick={(e) => handleSmoothScroll(e, "#inicio")}>
              <div className="flex items-center cursor-pointer group">
                <span className="text-2xl font-black tracking-tight text-white relative">
                  Maxito
                  <span className="text-cyan-400">Dev</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Items */}
          <div ref={navItemsRef} className="hidden md:flex items-center space-x-1 relative">
            {/* Active indicator background */}
            <div 
              ref={activeIndicatorRef}
              className="absolute top-1/2 -translate-y-1/2 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-400/30"
              style={{
                width: 0,
                boxShadow: "0 0 20px rgba(0, 212, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
              }}
            />
            
            {navItems.map((item) => {
              const sectionId = item.href.substring(1)
              const isActive = activeSection === sectionId

              return (
                <Link 
                  key={item.label} 
                  href={item.href} 
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  data-nav-item={sectionId}
                  onMouseEnter={(e) => handleNavItemHover(e, true)}
                  onMouseLeave={(e) => handleNavItemHover(e, false)}
                  className="relative px-6 py-2.5 text-sm font-medium transition-all duration-300 cursor-pointer rounded-xl z-10"
                >
                  <span 
                    className={`nav-text transition-all duration-300 ${
                      isActive 
                        ? "text-white font-semibold" 
                        : "text-zinc-400"
                    }`}
                    style={{
                      textShadow: isActive ? "0 0 10px rgba(0, 212, 255, 0.3)" : "none"
                    }}
                  >
                    {item.label}
                  </span>
                </Link>
              )
            })}
          </div>

          {/* Right Side - Status & CTA */}
          <div ref={ctaRef} className="flex items-center space-x-4">
            {/* Status Indicator */}
            <div className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-400/30 rounded-full backdrop-blur-sm">
              <div 
                className="w-2 h-2 bg-emerald-400 rounded-full"
                style={{
                  boxShadow: "0 0 8px rgba(16, 185, 129, 0.8)"
                }}
              />
              <span className="text-xs text-emerald-400 font-medium">Disponible</span>
            </div>

            {/* CTA Button */}
            <Link href="#contacto" onClick={(e) => handleSmoothScroll(e, "#contacto")}>
              <button 
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-400/30 hover:border-cyan-400/50 rounded-xl text-white text-sm font-medium transition-all duration-300 backdrop-blur-sm relative overflow-hidden group"
                style={{
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                }}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1.05,
                    y: -2,
                    duration: 0.3,
                    ease: "power2.out"
                  })
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out"
                  })
                }}
              >
                <span className="relative z-10">Contactar</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/20 group-hover:to-blue-400/20 transition-all duration-300" />
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors duration-200 relative"
              aria-label={isMobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`} />
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10"
        >
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href} 
                onClick={(e) => {
                  handleSmoothScroll(e, item.href)
                  setIsMobileMenuOpen(false)
                }}
                className="block px-4 py-3 text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

