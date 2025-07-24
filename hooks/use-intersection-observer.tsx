import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = '50px',
  triggerOnce = true
}: UseIntersectionObserverOptions = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const targetRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const target = targetRef.current
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true)
          if (triggerOnce) {
            observer.unobserve(target)
          }
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(target)

    return () => {
      observer.unobserve(target)
    }
  }, [threshold, rootMargin, triggerOnce, hasIntersected])

  return {
    targetRef,
    isIntersecting,
    hasIntersected,
    shouldLoad: triggerOnce ? hasIntersected : isIntersecting
  }
}

// Hook para precargar imágenes críticas
export function useImagePreloader(imagesToPreload: string[]) {
  useEffect(() => {
    const preloadImages = imagesToPreload.map(src => {
      const img = new Image()
      img.src = src
      return img
    })

    return () => {
      preloadImages.forEach(img => {
        img.src = ''
      })
    }
  }, [imagesToPreload])
}
