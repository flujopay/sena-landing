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

      <div className="mt-10 px-6 md:px-12">
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
