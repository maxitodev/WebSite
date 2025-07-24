"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()

  const y1 = useTransform(scrollY, [0, 1000], [0, -200])
  const y2 = useTransform(scrollY, [0, 1000], [0, 200])
  const rotate = useTransform(scrollY, [0, 1000], [0, 360])

  const springConfig = { damping: 25, stiffness: 700 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      setMousePosition({ x: clientX, y: clientY })
      mouseX.set(clientX)
      mouseY.set(clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Dynamic Color Orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
          x: useTransform(mouseX, (value) => value * 0.1),
          y: useTransform(mouseY, (value) => value * 0.1),
        }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
          x: useTransform(mouseX, (value) => -value * 0.05),
          y: useTransform(mouseY, (value) => -value * 0.05),
          top: "20%",
          right: "10%",
        }}
      />

      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
          x: useTransform(mouseX, (value) => value * 0.08),
          y: useTransform(mouseY, (value) => value * 0.08),
          bottom: "30%",
          left: "20%",
        }}
      />

      {/* Animated Grid */}
      <motion.div className="absolute inset-0 opacity-5" style={{ y: y1 }}>
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </motion.div>

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 border border-blue-500/30"
        style={{ rotate, y: y2 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-6 h-6 bg-purple-500/20 rounded-full"
        style={{ y: y1 }}
        animate={{
          x: [0, 50, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/3 w-8 h-1 bg-cyan-500/30"
        style={{ rotate: useTransform(scrollY, [0, 1000], [0, 180]) }}
        animate={{
          scaleX: [1, 2, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
