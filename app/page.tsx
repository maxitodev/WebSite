"use client"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutServicesSection } from "@/components/about-services-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />

      {/* Hero - 100vh */}
      <HeroSection />

      {/* About & Services Combined - 100vh with scroll transition */}
      <AboutServicesSection />

      {/* Skills - 80vh */}
      <SkillsSection />

      {/* Projects - 120vh */}
      <ProjectsSection />

      {/* Contact - 80vh */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
