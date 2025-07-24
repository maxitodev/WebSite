/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'], // AVIF primero (mejor compresión)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 año de cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Dominios externos permitidos (si usas CDN)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      }
    ],
    // Configuración avanzada de loader
    loader: 'default',
  },
  // Habilitación de source maps
  productionBrowserSourceMaps: true,
  
  // Configuración de webpack optimizada
  webpack: (config, { dev, isServer, webpack }) => {
    // Source maps mejorados
    if (!isServer) {
      if (dev) {
        config.devtool = 'eval-source-map'
      } else {
        config.devtool = 'source-map'
        // Asegurar que los source maps se generen en producción
        config.optimization = {
          ...config.optimization,
          minimize: true,
          usedExports: true,
        }
      }
    }

    // Optimizaciones de bundle
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true,
            priority: 5,
          },
        },
      }
    }

    return config
  },

  // Optimizaciones experimentales
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'lucide-react', 
      'framer-motion',
      '@radix-ui/react-accordion',
      '@radix-ui/react-alert-dialog'
    ],
    webVitalsAttribution: ['CLS', 'LCP'],
    // Preload de módulos críticos
    serverComponentsExternalPackages: ['sharp'],
    // CSS optimizations
    cssChunking: 'strict',
  },

  // Compresión
  compress: true,

  // Headers de performance
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/icons/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/projects/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Redirects y rewrites para SEO
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ]
  },
}

export default nextConfig
