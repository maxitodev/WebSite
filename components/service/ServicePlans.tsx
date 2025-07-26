import React from "react";

export interface Plan {
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
  description?: string;
  delivery?: string;
  revisions?: string;
}

interface ServicePlansProps {
  plans: Plan[];
}

const ServicePlans: React.FC<ServicePlansProps> = ({ plans }) => {
  return (
    <div className="flex flex-col gap-6">
      {plans.map((plan, idx) => (
        <div
          key={plan.name}
          className={`bg-neutral-900 border border-neutral-700 rounded-xl p-6 shadow-lg ${plan.highlight ? "ring-2 ring-primary" : ""}`}
        >
          <h3 className="text-xl font-bold mb-2 text-white">{plan.name}</h3>
          <div className="text-3xl font-extrabold text-primary mb-4">{plan.price}</div>
          <ul className="mb-4 text-neutral-300">
            {plan.features.map((f, i) => (
              <li key={i} className="mb-1 flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                {f}
              </li>
            ))}
          </ul>
          <button className="w-full py-2 rounded bg-primary text-black font-semibold hover:bg-primary/80 transition">Seleccionar</button>
        </div>
      ))}
    </div>
  );
};

export default ServicePlans;
