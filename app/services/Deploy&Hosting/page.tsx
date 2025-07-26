"use client";
import ServiceLayout from "@/components/service/ServiceLayout";
import type { Plan } from "@/components/service/ServicePlans";
import { useRouter } from "next/navigation";

const images = [
  "/services/deploy.webp",
];

const title = "Cloud Deploy & Hosting";
const description =
  "Despliega tu aplicación en las mejores plataformas cloud del mercado con configuración optimizada.";
const techs = ["AWS", "Google Cloud", "Vercel", "CI/CD", "SSL", "Auto-scaling"];
const delivery = "2-5 días";
const priceFrom = "$80 USD";

const about = (
  <>
    <div className="space-y-4 text-neutral-200 leading-relaxed">
      <p className="text-xl font-medium text-white">Despliega tu app en la nube, sin complicaciones.</p>
      <p>Configuramos y optimizamos el hosting de tu aplicación en las mejores plataformas cloud, asegurando rendimiento, seguridad y escalabilidad desde el primer día.</p>
      <p>Ideal para proyectos que buscan alta disponibilidad, dominio personalizado y despliegue profesional.</p>
    </div>
    <div className="grid md:grid-cols-2 gap-6 mt-8">
      <div className="space-y-4">
        <h4 className="text-lg font-bold text-primary flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          Lo que aporto:
        </h4>
        <ul className="space-y-2">
          {[
            "Despliegue en AWS, Google Cloud o Vercel",
            "Dominio personalizado y SSL",
            "CI/CD y auto-escalado",
            "Optimización de recursos",
            "Soporte post-despliegue"
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
            "AWS, Google Cloud, Vercel",
            "CI/CD (GitHub Actions, GitLab CI)",
            "SSL y dominios",
            "Auto-scaling y monitoreo",
            "Optimización cloud"
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
        ¡Despliega tu app como un profesional en la nube!
      </p>
    </div>
  </>
);

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$80 USD",
    features: [
      "Despliegue en 1 plataforma cloud",
      "Dominio personalizado",
      "Certificado SSL",
      "1 revisión",
    ],
  },
  {
    name: "Pro",
    price: "$150 USD",
    features: [
      "Despliegue multi-plataforma",
      "CI/CD configurado",
      "Auto-scaling básico",
      "3 revisiones",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$300 USD",
    features: [
      "Optimización avanzada cloud",
      "Monitoreo y alertas",
      "Soporte extendido",
      "Despliegue personalizado",
      "5 revisiones",
    ],
  },
];

export default function DeployHostingServicePage() {
  const router = useRouter();
  return (
    <div className="relative min-h-screen bg-black">
      <div className="fixed md:absolute top-0 left-0 right-0 z-30 p-6">
        <button
          onClick={() => { window.location.href = '/'; }}
          className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white hover:text-black shadow-2xl transition-all duration-300 ease-out hover:scale-105 hover:shadow-primary/20"
        >
          <svg 
            width="20" 
            height="20" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            className="transition-transform duration-300 group-hover:-translate-x-1"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-medium">Regresar</span>
        </button>
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
