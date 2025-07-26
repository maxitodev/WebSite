import ServiceGalleryCarousel from "./ServiceGalleryCarousel";
import ServiceDescription from "./ServiceDescription";
import React from "react";
import type { Plan } from "./ServicePlans";
import ServicePlansTabs from "./ServicePlansTabs";

interface ServiceLayoutProps {
  images: string[];
  title: string;
  description: string;
  techs: string[];
  delivery: string;
  priceFrom: string;
  plans: Plan[];
  about?: React.ReactNode;
}


const ServiceLayout: React.FC<ServiceLayoutProps> = ({ images, title, description, techs, delivery, priceFrom, plans, about }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-950 to-black text-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative flex justify-center">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-12 p-6 md:p-12 lg:p-16">
          {/* Columna izquierda: contenido principal */}
          <div className="w-full lg:max-w-[750px] flex flex-col gap-8">
            {/* Hero Section */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none">
                  <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                    {title}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed max-w-2xl">
                  {description}
                </p>
              </div>
              
              {/* Technology badges */}
              <div className="flex flex-wrap gap-3">
                {techs.map((tech, index) => (
                  <span 
                    key={tech} 
                    className="group relative bg-gradient-to-r from-primary/20 to-cyan-400/20 text-primary px-4 py-2 rounded-2xl text-sm font-semibold border border-primary/30 backdrop-blur-sm hover:border-primary/60 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-cyan-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative">{tech}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Gallery Section */}
            <div className="relative">
              <ServiceGalleryCarousel images={images} />
            </div>

            {/* About Section */}
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-3xl rounded-tr-3xl"></div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                    Acerca de este Servicio
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-cyan-400 rounded-full"></div>
                </div>
                {about ? about : (
                  <>
                    <div className="space-y-4 text-neutral-200 leading-relaxed">
                      <p className="text-xl font-medium text-white">¡Hola, futuro magnate de la tecnología!</p>
                      <p>¿Estás buscando un desarrollador web profesional full-stack para construir tu sitio web impulsado por IA, software comercial o aplicación web personalizada?</p>
                      <p>¡Qué suerte tienes porque acabas de encontrar uno!</p>
                      <p>Me especializo en crear sitios web potentes, inteligentes y fáciles de usar que no sólo se ven increíbles sino que también funcionan de maravilla <span className="italic text-primary">(porque ¿quién necesita un sitio bonito que se bloquea, verdad?)</span>.</p>
                      <p>Ya sea que necesites una plataforma impulsada por IA, software de automatización o un elegante panel de control empresarial, te respaldo.</p>
                    </div>
                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-primary flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          Lo que aporto:
                        </h4>
                        <ul className="space-y-2">
                          {[
                            "Desarrollo de sitios web con IA",
                            "Desarrollo de software empresarial",
                            "Aplicaciones web modernas",
                            "Desarrollo full-stack",
                            "Chatbots y automatización IA"
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
                            "JavaScript (React, Node.js, Next.js)",
                            "Python (Django, Flask, AI/ML)",
                            "Bases de datos (SQL y NoSQL)",
                            "APIs (REST, GraphQL, AI APIs)",
                            "Cloud & DevOps"
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
                        ¿A qué esperas? ¡Empecemos a construir algo increíble juntos!
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Columna derecha: planes */}
          <div className="lg:w-1/3 w-full lg:min-w-[400px]">
            <ServicePlansTabs plans={plans} mainTech={techs[0]} delivery={delivery} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;
