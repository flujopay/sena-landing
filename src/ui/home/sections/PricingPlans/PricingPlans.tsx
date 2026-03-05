"use client";

import { useState } from "react";
import { TitleDescripction } from "../../../shared/TitleDescripction";
import { PlanCard, TPlan } from "./PlanCard";

export const PricingPlans = () => {
  const plans: TPlan[] = [
    {
      name: "Plan Starter",
      subtitle: "Para pequeñas empresas y primeros volúmenes",
      price: 39,
      includedClients: "Hasta 10",
      invoicesPerMonth: "Hasta 50",
      features: [
        "CRM básico de cobranza",
        "Automatización de recordatorios",
        "Conciliación manual",
        "Reportes básicos",
        "Soporte por email",
      ],
      variant: "starter",
      cta: "Contrata ahora",
      onCtaClick: () => {
        // window.open("https://meetings.hubspot.com/francisco472", "_blank"); // TODO: Cambiar a la url de abajo cuando sea el momento
        window.open("https://app.flujolink.com/signup?origin=main", "_blank");
      },
    },
    {
      name: "Plan Growth",
      subtitle: "Para empresas en expansión",
      price: 349,
      includedClients: "Hasta 100",
      invoicesPerMonth: "Hasta 500",
      features: [
        "Todo lo de Starter, más:",
        "CRM avanzado multicanal",
        "Segmentación inteligente",
        "Conciliación automática",
        "Portal de cliente",
        "Campañas automatizadas",
        "Reportería avanzada",
        "Soporte prioritario",
      ],
      variant: "growth",
      popular: true,
      cta: "Contrata ahora",
      onCtaClick: () => {
        window.open("https://meetings.hubspot.com/francisco472", "_blank");
      },
    },
    {
      name: "Plan Enterprise",
      subtitle: "Para alto volumen y operaciones críticas",
      price: 799,
      includedClients: "100+",
      invoicesPerMonth: "Desde 500",
      features: [
        "Todo lo de Growth, más:",
        "Volumen ilimitado",
        "API completa",
        // "Integración con Recsa",
        "Gestión humana especializada",
        "Multi-tenant y white label",
        "SLA garantizado",
        "Account Manager dedicado",
      ],
      variant: "enterprise",
      cta: "Habla con ventas",
      onCtaClick: () => {
        window.open("https://meetings.hubspot.com/francisco472", "_blank");
      },
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(0);

  return (
    <section id="precios" className="py-14 max-w-[1280px] mx-auto pt-28">
      <div className="px-4 md:px-12 text-left">
        <div className="flex justify-start">
          <TitleDescripction
            title="Planes diseñados"
            subtitle="para tu empresa"
            description="Desde startups hasta empresas establecidas, tenemos el plan perfecto para ti"
          />
        </div>
      </div>

      {/* Mobile: Selector + Card */}
      <div className="md:hidden mt-8 px-4">
        <div className="bg-white rounded-2xl border-2 border-[#3771d1] shadow-sm overflow-hidden">
          {plans.map((plan, index) => (
            <button
              key={plan.variant}
              type="button"
              onClick={() => {
                setSelectedPlan(index);
                plan.onCtaClick?.();
              }}
              className={`
                w-full flex items-center gap-3 p-4
                transition-colors
                ${index === 1 ? "border-t-2 border-b-2 border-[#3771d1]" : ""}
                ${selectedPlan === index ? "bg-blue-50" : ""}
              `}
            >
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedPlan === index
                    ? "border-[#3771d1] bg-white"
                    : "border-slate-300"
                }`}
              >
                {selectedPlan === index && (
                  <svg
                    className="w-4 h-4 text-[#3771d1]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <div className="flex-1 text-left">
                <p className="font-bold text-sm text-black">
                  {plan.name.toUpperCase()}
                </p>
                <p className="text-xs text-slate-500">{plan.subtitle}</p>
              </div>
              {plan.popular && (
                <span className="text-sm h-9 px-4 inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all bg-brand-secondary text-white">
                  Más popular
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <PlanCard plan={plans[selectedPlan]} />
        </div>
      </div>

      {/* Desktop: Grid */}
      <div className="hidden md:block mt-10 px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end max-w-6xl mx-auto">
          <PlanCard plan={plans[0]} />

          <PlanCard plan={plans[1]} />

          <PlanCard plan={plans[2]} />
        </div>
      </div>
    </section>
  );
};
