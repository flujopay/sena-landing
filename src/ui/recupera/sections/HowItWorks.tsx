import {
  CheckCircle,
  FileSearch,
  Lightbulb,
  TrendingUp,
  Users,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Evaluación Gratuita",
    description:
      "Analizamos tu cartera y priorizamos casos según probabilidad de recuperación.",
    timeline: "24-48 horas",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Estrategia Personalizada",
    description:
      "Diseñamos plan de recuperación considerando industria, relación con deudores y objetivos.",
    timeline: "48 horas",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Gestión Humana + IA",
    description:
      "Equipo especializado negocia acuerdos de pago manteniendo profesionalismo.",
    timeline: "Continuo",
    icon: Users,
  },
  {
    number: "04",
    title: "Recuperación + Dashboard",
    description:
      "Pagos directos a tu cuenta. Dashboard en tiempo real con progreso y proyecciones.",
    timeline: "Tiempo real",
    icon: TrendingUp,
  },
];

export const HowItWorks = () => {
  return (
    <div
      id="como-funciona"
      className="bg-[#F9F9F9]  pb-12 md:pb-20"
    >
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="text-center py-12">
          <h2 className="text-brand-primary-dark text-3xl md:text-5xl font-extrabold mb-4">
            De cartera vencida a{" "}
            <span className="text-brand-primary">dinero recuperado</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Proceso probado con cientos de empresas B2B en 15 países de LATAM
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-brand-primary/10 p-3 rounded-xl group-hover:bg-brand-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-brand-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-brand-primary font-bold text-sm mb-1">
                        {step.number}
                      </div>
                      <h3 className="text-brand-primary-dark text-xl font-bold mb-2">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-4">{step.description}</p>

                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-brand-primary" />
                    <span className="text-slate-500">
                      Timeline:{" "}
                      <span className="font-semibold text-brand-primary">
                        {step.timeline}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
