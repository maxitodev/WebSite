"use client";
import ServiceLayout from "@/components/service/ServiceLayout";
import type { Plan } from "@/components/service/ServicePlans";
import { useRouter } from "next/navigation";

const images = [
  "/services/web.webp",
];

const title = "Aplicaciones Web Modernas";
const description =
  "Desarrollo de aplicaciones web rápidas, seguras y escalables con React, Next.js y tecnologías actuales. Diseño responsive, SEO optimizado y experiencia de usuario moderna.";
const techs = ["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js"];
const delivery = "10-20 días";
const priceFrom = "$300 USD";

const plans: Plan[] = [
  {
    name: "Basic",
    price: "$300 USD",
    features: [
      "Landing page moderna",
      "Responsive Design",
      "SEO básico",
      "1 revisión",
    ],
  },
  {
    name: "Premium",
    price: "$600 USD",
    features: [
      "Hasta 5 páginas",
      "Integración de APIs",
      "SEO avanzado",
      "Animaciones personalizadas",
      "3 revisiones",
    ],
    highlight: true,
  },
  {
    name: "VIP",
    price: "$1200 USD",
    features: [
      "Web app completa",
      "Panel de administración",
      "Despliegue en producción",
      "Soporte prioritario",
      "5 revisiones",
    ],
  },
];

export default function AppWebServicePage() {
  const router = useRouter();
  const handleBack = () => {
    router.push("/#servicios");
  };
  return (
    <div className="relative min-h-screen bg-black">
      {/* Contenedor del botón con padding */}
      <div className="fixed md:absolute top-0 left-0 right-0 z-30 p-6">
        <a
          href="/#servicios"
          className="group flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white hover:text-black shadow-lg transition-all duration-200 ease-out hover:scale-105 hover:shadow-primary/20 text-sm font-medium"
          style={{ maxWidth: 'fit-content' }}
        >
          <svg 
            width="16" 
            height="16" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="2.2" 
            className="transition-transform duration-200 group-hover:-translate-x-0.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span>Regresar</span>
        </a>
      </div>
      
      {/* Contenido principal con espaciado superior */}
      <div className="pt-24 md:pt-20">
        <ServiceLayout
          images={images}
          title={title}
          description={description}
          techs={techs}
          delivery={delivery}
          priceFrom={priceFrom}
          plans={plans}
        />
      </div>
    </div>
  );
}

