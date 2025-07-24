// Configuración de optimización de imágenes
export const imageConfig = {
  // Tamaños responsivos comunes
  sizes: {
    hero: "100vw",
    projectCard: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
    skillIcon: "(max-width: 768px) 32px, (max-width: 1024px) 48px, 64px",
    avatar: "(max-width: 768px) 64px, 128px",
  },
  
  // Configuraciones de calidad por tipo de imagen
  quality: {
    hero: 80,
    background: 75,
    projects: 75,
    icons: 85,
    thumbnails: 70,
  },
  
  // Placeholders blur por defecto
  placeholders: {
    project: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgdmlld0JveD0iMCAwIDQwMCAyMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjI1IiBmaWxsPSIjMTExODI3Ii8+Cjwvc3ZnPgo=",
    icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjMjEyMTIxIi8+Cjwvc3ZnPgo=",
    background: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
  }
}

// Función utilitaria para generar srcset optimizado
export function generateSrcSet(baseSrc: string, widths: number[] = [400, 800, 1200, 1600]) {
  return widths
    .map(width => `${baseSrc}?w=${width}&q=75 ${width}w`)
    .join(', ')
}

// Función para obtener dimensiones optimizadas
export function getOptimizedDimensions(originalWidth: number, originalHeight: number, maxWidth: number = 1920) {
  if (originalWidth <= maxWidth) {
    return { width: originalWidth, height: originalHeight }
  }
  
  const ratio = originalHeight / originalWidth
  return {
    width: maxWidth,
    height: Math.round(maxWidth * ratio)
  }
}
