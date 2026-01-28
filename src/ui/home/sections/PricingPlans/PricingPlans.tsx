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
      cta: "Comenzar Ahora",
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
      cta: "Comenzar Ahora",
    },
    {
      name: "Plan Enterprise",
      subtitle: "Para alto volumen y operaciones críticas",
      price: 799,
      includedClients: "Hasta 100+",
      invoicesPerMonth: "Desde 500",
      features: [
        "Todo lo de Growth, más:",
        "Volumen ilimitado",
        "API completa",
        "Integración con Recsa",
        "Gestión humana especializada",
        "Multi-tenant y white label",
        "SLA garantizado",
        "Account Manager dedicado",
      ],
      variant: "enterprise",
      cta: "Contactar Ventas",
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(0);

  return (
    <section className="py-14">
      <div className="px-6 md:px-12 text-center">
        <div className="flex justify-center">
          <TitleDescripction
            title="PLANES DISEÑADOS PARA TU EMPRESA"
            description="Desde startups hasta empresas establecidas, tenemos el plan perfecto para ti"
          />
        </div>
      </div>

      {/* Mobile: Selector + Card */}
      <div className="md:hidden mt-8 px-4">
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
          {plans.map((plan, index) => (
            <button
              key={plan.variant}
              type="button"
              onClick={() => setSelectedPlan(index)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${
                selectedPlan === index ? "bg-blue-50 border border-blue-200" : "border border-transparent"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedPlan === index ? "border-blue-600" : "border-slate-300"
                }`}
              >
                {selectedPlan === index && (
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                )}
              </div>
              <div className="flex-1 text-left">
                <p className="font-bold text-sm text-black">{plan.name.toUpperCase()}</p>
                <p className="text-xs text-slate-500">{plan.subtitle}</p>
              </div>
              {plan.popular && (
                <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded">
                  MAS POPULAR
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
          <div className="lg:-translate-y-3">
            <PlanCard plan={plans[1]} />
          </div>
          <PlanCard plan={plans[2]} />
        </div>
      </div>
    </section>
  );
};
