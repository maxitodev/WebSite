"use client";
import ServiceLayout from "@/components/service/ServiceLayout";
import type { Plan } from "@/components/service/ServicePlans";
import { useRouter } from "next/navigation";

const images = [
  "/services/backend.webp",
];

const title = "Backend & APIs";
const description =
  "APIs robustas y escalables con Node.js, Express y bases de datos modernas. Documentación y autenticación incluidas.";
const techs = [
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "JWT Auth",
];
const delivery = "7-15 días";
const priceFrom = "$200 USD";

const about = (
  <>
    <div className="space-y-4 text-neutral-200 leading-relaxed">
      <p className="text-xl font-medium text-white">¡Potencia tu negocio con APIs y backends robustos!</p>
      <p>Desarrollamos APIs y sistemas backend escalables y seguros, integrando autenticación, documentación profesional y conectividad con múltiples servicios y bases de datos.</p>
      <p>Ideal para empresas y proyectos que requieren automatización, integración de datos o plataformas sólidas y confiables.</p>
    </div>
    <div className="grid md:grid-cols-2 gap-6 mt-8">
      <div className="space-y-4">
        <h4 className="text-lg font-bold text-primary flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          Lo que aporto:
        </h4>
        <ul className="space-y-2">
          {[
            "APIs REST y GraphQL a medida",
            "Integración de bases de datos (MongoDB, SQL)",
            "Autenticación y seguridad",
            "Documentación profesional",
            "Automatización de procesos"
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
            "Node.js, Express",
            "MongoDB, SQL",
            "JWT, OAuth",
            "Swagger, Postman",
            "Integración de servicios externos"
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
        ¡Lleva tu backend al siguiente nivel con soluciones profesionales!
      </p>
    </div>
  </>
);

const plans: Plan[] = [
  {
    name: "Básico",
    price: "$200 USD",
    features: [
      "API REST básica",
      "1 base de datos (MongoDB o SQL)",
      "Autenticación básica",
      "Documentación simple",
      "1 revisión",
    ],
    description: "API REST sencilla con autenticación y documentación básica."
  },
  {
    name: "Avanzado",
    price: "$350 USD",
    features: [
      "API REST completa",
      "Autenticación JWT",
      "Integración de múltiples bases de datos",
      "Documentación Swagger",
      "3 revisiones",
    ],
    highlight: true,
    description: "API robusta, autenticación avanzada y documentación profesional."
  },
  {
    name: "Premium",
    price: "$600 USD",
    features: [
      "API escalable y optimizada",
      "Integración con servicios externos",
      "Pruebas automatizadas",
      "Soporte prioritario",
      "5 revisiones",
    ],
    description: "API a medida, integración avanzada y soporte premium."
  },
];

export default function BackendAPIServicePage() {
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

