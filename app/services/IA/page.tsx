"use client";
import ServiceLayout from "@/components/service/ServiceLayout";
import type { Plan } from "@/components/service/ServicePlans";
import { useRouter } from "next/navigation";

const images = [
  "/services/ia.webp",
];

const title = "Integración de IA a tu App";
const description =
  "Agrega chatbots, asistentes y automatización inteligente con IA de última generación.";
const techs = [
  "OpenAI",
  "Google AI",
  "Azure AI",
  "Automatización",
  "Integración Personalizada",
];
const delivery = "7-15 días";
const priceFrom = "$250 USD";

const about = (
  <>
    <div className="space-y-4 text-neutral-200 leading-relaxed">
      <p className="text-xl font-medium text-white">¡Impulsa tu proyecto con inteligencia artificial!</p>
      <p>Integramos IA de última generación en tus aplicaciones: chatbots, asistentes virtuales y automatización inteligente, adaptados a tus necesidades y plataformas.</p>
      <p>Perfecto para empresas y emprendedores que buscan innovar, optimizar procesos y ofrecer experiencias avanzadas a sus usuarios.</p>
    </div>
    <div className="grid md:grid-cols-2 gap-6 mt-8">
      <div className="space-y-4">
        <h4 className="text-lg font-bold text-primary flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          Lo que aporto:
        </h4>
        <ul className="space-y-2">
          {[
            "Integración de modelos IA (OpenAI, Google AI)",
            "Chatbots y asistentes inteligentes",
            "Automatización de tareas",
            "Soluciones personalizadas",
            "Soporte y consultoría IA"
          ].map((service, index) => (
            <li key={index} className="flex items-start gap-3 text-neutral-300">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <span className="text-sm">{service}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-4">
        <h4 className="text-lg font-bold text-cyan-400 flex items-center gap-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
          Tecnologías que domino:
        </h4>
        <ul className="space-y-2">
          {[
            "OpenAI, Google AI, Azure AI",
            "Integración de APIs IA",
            "Automatización personalizada",
            "Plataformas web y móviles",
            "Despliegue y soporte IA"
          ].map((tech, index) => (
            <li key={index} className="flex items-start gap-3 text-neutral-300">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-400/20 flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              </div>
              <span className="text-sm">{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-cyan-400/10 rounded-2xl border border-primary/30">
      <p className="text-lg font-semibold text-center bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
        ¡Haz que tu app sea más inteligente con soluciones IA a medida!
      </p>
    </div>
  </>
);

const plans: Plan[] = [
  {
    name: "Básico",
    price: "$250 USD",
    features: [
      "Integración de modelo IA líder",
      "Chatbot básico",
      "Automatización simple",
      "1 plataforma",
      "1 revisión",
    ],
    description: "Implementación de un chatbot o asistente básico con IA en una plataforma."
  },
  {
    name: "Avanzado",
    price: "$400 USD",
    features: [
      "Integración de múltiples modelos IA",
      "Automatización inteligente",
      "Integración personalizada",
      "Hasta 2 plataformas",
      "3 revisiones",
    ],
    highlight: true,
    description: "Automatización inteligente y chatbots avanzados en varias plataformas."
  },
  {
    name: "Premium",
    price: "$700 USD",
    features: [
      "Solución IA a medida",
      "Integración con APIs externas",
      "Automatización avanzada",
      "Soporte prioritario",
      "5 revisiones",
    ],
    description: "Solución completa de IA personalizada, integración avanzada y soporte."
  },
];

export default function IAServicePage() {
  const router = useRouter();
  return (
    <div className="relative min-h-screen bg-black">
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
      <div className="pt-24 md:pt-20">
        <ServiceLayout
          images={images}
          title={title}
          description={description}
          techs={techs}
          delivery={delivery}
          priceFrom={priceFrom}
          plans={plans}
          about={about}
        />
      </div>
    </div>
  );
}

