"use client";
import React from "react";
import type { Plan } from "./ServicePlans";

interface ServicePlansTabsProps {
  plans: Plan[];
  mainTech?: string;
  delivery?: string;
}

const ServicePlansTabs: React.FC<ServicePlansTabsProps> = ({ plans, mainTech, delivery }) => {
  const [selected, setSelected] = React.useState(1); // Start with Premium plan
  const [showPlanContact, setShowPlanContact] = React.useState(false);
  const [showCustomContact, setShowCustomContact] = React.useState(false);

  const handleSelectPlan = (contactMethod: 'email' | 'whatsapp') => {
    const selectedPlan = plans[selected];
    
    if (contactMethod === 'email') {
      const subject = `Interesado en Plan ${selectedPlan.name} - ${selectedPlan.price}`;
      const body = `Hola, estoy interesado en el Plan ${selectedPlan.name} por ${selectedPlan.price}.

Características del plan:
${selectedPlan.features.map(feature => `• ${feature}`).join('\n')}

Me gustaría saber más detalles sobre el proyecto y coordinar el inicio.

Gracias.`;
      
      window.open(`mailto:contacto@maxitodev.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    } else {
      const whatsappMessage = `Hola, estoy interesado en el Plan ${selectedPlan.name} por ${selectedPlan.price}. Me gustaría coordinar el proyecto.`;
      window.open(`https://wa.me/525560606915?text=${encodeURIComponent(whatsappMessage)}`);
    }
  };

  const handleCustomProject = (contactMethod: 'email' | 'whatsapp') => {
    if (contactMethod === 'email') {
      const subject = "Consulta para Proyecto Personalizado";
      const body = `Hola, necesito un proyecto personalizado.

Detalles de mi proyecto:
- Tipo de proyecto: 
- Funcionalidades necesarias: 
- Presupuesto estimado: 
- Fecha de entrega deseada: 

Me gustaría agendar una consulta para discutir los detalles.

Gracias.`;
      
      window.open(`mailto:contacto@maxitodev.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    } else {
      const whatsappMessage = "Hola, necesito cotización para un proyecto personalizado. ¿Podemos agendar una consulta?";
      window.open(`https://wa.me/525560606915?text=${encodeURIComponent(whatsappMessage)}`);
    }
  };

  return (
    <div className="sticky top-8 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 shadow-2xl w-full max-w-md flex flex-col gap-6">
      {/* Header */}
      <div className="text-center mb-2">
        <h3 className="text-2xl font-bold text-white mb-2">Elige tu plan</h3>
        <p className="text-neutral-400 text-sm">Encuentra la opción perfecta para tu proyecto</p>
      </div>

      {/* Tabs */}
      <div className="flex mb-6 gap-2 p-1 bg-black/20 rounded-2xl border border-white/10">
        {plans.map((plan, idx) => (
          <button
            key={plan.name}
            className={`relative flex-1 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 focus:outline-none ${
              selected === idx
                ? "bg-primary text-black shadow-lg shadow-primary/25"
                : "text-neutral-300 hover:text-white hover:bg-white/10"
            }`}
            onClick={() => setSelected(idx)}
          >
            {plan.highlight && (
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-primary to-cyan-400 text-black text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                  Popular
                </span>
              </div>
            )}
            {plan.name}
          </button>
        ))}
      </div>
      {/* Plan Content */}
      <div className="flex flex-col gap-6">
        {/* Technology Badge */}
        {mainTech && (
          <div className="flex justify-center">
            <span className="bg-gradient-to-r from-primary/20 to-cyan-400/20 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/30 backdrop-blur-sm">
              {mainTech}
            </span>
          </div>
        )}

        {/* Price and Plan Name */}
        <div className="text-center">
          <div className="text-5xl font-black text-white mb-2 tracking-tight">
            {plans[selected].price}
          </div>
          <div className="text-lg font-semibold text-neutral-300 mb-4">
            Plan {plans[selected].name}
          </div>
          <div className="text-neutral-400 text-sm leading-relaxed">
            {plans[selected].description || "Desarrollo profesional adaptado a tus necesidades específicas"}
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wide">Incluye:</h4>
          <ul className="space-y-3">
            {plans[selected].features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-neutral-200">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" className="text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Delivery Info */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-black/30 border border-white/10 rounded-xl p-3 text-center">
            <div className="text-primary text-sm font-semibold mb-1">Entrega</div>
            <div className="text-white text-xs">{plans[selected].delivery || delivery || "10-15 días"}</div>
          </div>
          <div className="bg-black/30 border border-white/10 rounded-xl p-3 text-center">
            <div className="text-primary text-sm font-semibold mb-1">Revisiones</div>
            <div className="text-white text-xs">{plans[selected].revisions || "Incluidas"}</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-4">
          {/* Plan Selection */}
          {!showPlanContact ? (
            <button 
              onClick={() => {
                setShowPlanContact(true);
                setShowCustomContact(false);
              }}
              className="group w-full py-4 rounded-2xl bg-gradient-to-r from-primary to-cyan-400 text-black font-bold text-lg hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 transform"
            >
              <span className="flex items-center justify-center gap-2">
                Elegir este plan
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </button>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-white font-semibold text-sm">¿Cómo prefieres contactarme?</div>
                <button 
                  onClick={() => setShowPlanContact(false)}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => handleSelectPlan('email')}
                  className="group flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-primary to-cyan-400 text-black font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
                >
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </button>
                
                <button 
                  onClick={() => handleSelectPlan('whatsapp')}
                  className="group flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.512z"/>
                  </svg>
                  WhatsApp
                </button>
              </div>
            </div>
          )}
          
          {/* Custom Project */}
          {!showCustomContact ? (
            <button 
              onClick={() => {
                setShowCustomContact(true);
                setShowPlanContact(false);
              }}
              className="group w-full py-3 rounded-2xl border-2 border-neutral-600 text-neutral-300 font-medium hover:bg-neutral-800 hover:border-neutral-500 hover:text-white transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2 text-sm">
                ¿Necesitas algo personalizado?
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:rotate-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </button>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-neutral-300 font-medium text-sm">¿Cómo prefieres contactarme?</div>
                <button 
                  onClick={() => setShowCustomContact(false)}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => handleCustomProject('email')}
                  className="group flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-neutral-600 text-neutral-300 font-medium text-sm hover:bg-neutral-800 hover:border-neutral-500 hover:text-white transition-all duration-300"
                >
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </button>
                
                <button 
                  onClick={() => handleCustomProject('whatsapp')}
                  className="group flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-green-500 text-green-400 font-medium text-sm hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.512z"/>
                  </svg>
                  WhatsApp
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicePlansTabs;
