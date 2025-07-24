
// Configuración optimizada para Next.js
// Generado automáticamente el 24/7/2025

export const imageConfig = {
  // Imágenes críticas - cargar con prioridad
  critical: [

  ],
  
  // Configuración por categoría
  categories: {
    critical: {
      priority: true,
      quality: 85,
      loading: 'eager',
      sizes: '100vw'
    },
    projects: {
      priority: false,
      quality: 75,
      loading: 'lazy',
      sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
    },
    icons: {
      priority: false,
      quality: 90,
      loading: 'lazy',
      sizes: '(max-width: 768px) 32px, 64px'
    }
  }
};

// Hook para aplicar configuración automática
export function useOptimizedImage(imagePath: string) {
  const category = imagePath.includes('projects/') ? 'projects' :
                  imagePath.includes('icons/') ? 'icons' :
                  imageConfig.critical.includes(imagePath) ? 'critical' : 'default';
  
  return imageConfig.categories[category] || {
    priority: false,
    quality: 75,
    loading: 'lazy',
    sizes: '100vw'
  };
}
