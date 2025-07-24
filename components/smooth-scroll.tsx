"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export function SmoothScroll() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    // Listen for the scroll event and log the event data
    lenis.on("scroll", (e: any) => {
      // You can add scroll-based animations here if needed
    })

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup function
    return () => {
      lenis.destroy()
    }
  }, [])

  return null
}
