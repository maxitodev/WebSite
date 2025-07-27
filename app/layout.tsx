import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SmoothScroll } from "@/components/smooth-scroll"
import Script from "next/script"


const inter = Inter({ subsets: ["latin"] })

  export const metadata: Metadata = {
    title: "MaxitoDev - WebDeveloper",
    description: "Portfolio de MaxitoDev - Desarrollador Full Stack especializado en React, Next.js, Node.js y tecnologías modernas",
    generator: 'v0.dev',
    icons: {
      icon: '/icon.webp',
    },
  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <SmoothScroll />
        {children}
        
      </body>
    </html>
  )
}
