"use client";
import ServiceLayout from "@/components/service/ServiceLayout";
import type { Plan } from "@/components/service/ServicePlans";
import { useRouter } from "next/navigation";

const images = [
  "/services/scraping.webp",
];

const title = "Web Scraping Inteligente";
const description =
  "Extracción automatizada de datos de sitios web para análisis, monitoreo o integración.";
const techs = ["Python", "Node.js", "Puppeteer", "BeautifulSoup", "API", "CSV/JSON"];
const delivery = "5-10 días";
const priceFrom = "$120 USD";

const about = (
  <>
    <div className="space-y-4 text-neutral-200 leading-relaxed">
      <p className="text-xl font-medium text-white">Obtén los datos que necesitas, de cualquier sitio web.</p>
      <p>Automatizamos la extracción de información de páginas web para que puedas analizar, monitorear o integrar datos en tus sistemas, sin complicaciones.</p>
      <p>Ideal para empresas, analistas y desarrolladores que requieren datos actualizados y estructurados de la web.</p>
    </div>
    <div className="grid md:grid-cols-2 gap-6 mt-8">
      <div className="space-y-4">
        <h4 className="text-lg font-bold text-primary flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          Lo que aporto:
        </h4>
        <ul className="space-y-2">
          {[
            "Scraping personalizado por proyecto",
            "Entrega en CSV, JSON o API",
            "Detección de cambios y alertas",
            "Automatización periódica",
            "Soporte y ajustes post-entrega"
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
            "Python (BeautifulSoup, Scrapy)",
            "Node.js (Puppeteer, Cheerio)",
            "APIs personalizadas",
            "Automatización cloud",
            "Entrega estructurada (CSV, JSON)"
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
        ¡Convierte la web en tu fuente de datos confiable!
      </p>
    </div>
  </>
);

const plans: Plan[] = [
  {
    name: "Básico",
    price: "$120 USD",
    features: [
      "Scraping de 1 sitio web",
      "Entrega en CSV o JSON",
      "Automatización simple",
      "1 revisión",
    ],
  },
  {
    name: "Avanzado",
    price: "$200 USD",
    features: [
      "Scraping de hasta 3 sitios",
      "Entrega vía API",
      "Detección de cambios",
      "Automatización periódica",
      "3 revisiones",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "$350 USD",
    features: [
      "Scraping avanzado y multi-sitio",
      "Integración personalizada",
      "Alertas y monitoreo",
      "Soporte extendido",
      "5 revisiones",
    ],
  },
];

export default function WebScrapingServicePage() {
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
