import type { ReactNode } from "react";
import { TitleDescripction } from "../../../shared/TitleDescripction";
import { FeatureCard, FeatureCardProps } from "./FeatureCard";

const Icon = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
      <div className="text-orange-500">{children}</div>
    </div>
  );
};

export const KeyFeatures = () => {
  const features: FeatureCardProps[] = [
    {
      title: "Plataforma unificada\nde cobranza",
      description:
        "Centraliza facturas, clientes, gestiones y pagos en un solo lugar, sin planillas ni sistemas paralelos.",
      icon: (
        <Icon>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 7.5C4 6.12 5.12 5 6.5 5H17.5C18.88 5 20 6.12 20 7.5V16.5C20 17.88 18.88 19 17.5 19H6.5C5.12 19 4 17.88 4 16.5V7.5Z"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M7 9H17"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M7 12H14"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </Icon>
      ),
    },
    {
      title: "Gestión multicanal\nintegrada",
      description:
        "Administra WhatsApp, email y SMS desde una sola plataforma, con historial completo de cada interacción.",
      icon: (
        <Icon>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 13C6.12 13 5 11.88 5 10.5C5 9.12 6.12 8 7.5 8C8.88 8 10 9.12 10 10.5C10 11.88 8.88 13 7.5 13Z"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M16.5 13C15.12 13 14 11.88 14 10.5C14 9.12 15.12 8 16.5 8C17.88 8 19 9.12 19 10.5C19 11.88 17.88 13 16.5 13Z"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M7.5 19C5.57 19 4 17.43 4 15.5V15C4 14.45 4.45 14 5 14H10C10.55 14 11 14.45 11 15V15.5C11 17.43 9.43 19 7.5 19Z"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M16.5 19C14.57 19 13 17.43 13 15.5V15C13 14.45 13.45 14 14 14H19C19.55 14 20 14.45 20 15V15.5C20 17.43 18.43 19 16.5 19Z"
              stroke="currentColor"
              strokeWidth="1.8"
            />
          </svg>
        </Icon>
      ),
    },
    {
      title: "Automatización\ninteligente",
      description:
        "Automatiza recordatorios y seguimientos con reglas claras, manteniendo siempre un tono humano en la comunicación con tus clientes.",
      icon: (
        <Icon>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L14.2 7.8L20 10L14.2 12.2L12 18L9.8 12.2L4 10L9.8 7.8L12 2Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M19 14L19.8 16.2L22 17L19.8 17.8L19 20L18.2 17.8L16 17L18.2 16.2L19 14Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        </Icon>
      ),
    },
    {
      title: "Control y reportería\nen tiempo real",
      description:
        "Visualiza estados de pago, mora y desempeño de tus gestiones con información siempre actualizada.",
      icon: (
        <Icon>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 19V12"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M12 19V5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M18 19V9"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </Icon>
      ),
    },
    {
      title: "Gestión humana\nespecializada",
      description:
        "Cuando la automatización no basta, entra el equipo experto de Recsa para gestionar los casos complejos que requieren criterio humano.",
      icon: (
        <Icon>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 12.5C9.93 12.5 8.25 10.82 8.25 8.75C8.25 6.68 9.93 5 12 5C14.07 5 15.75 6.68 15.75 8.75C15.75 10.82 14.07 12.5 12 12.5Z"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M6.5 19C6.5 15.96 8.96 13.5 12 13.5C15.04 13.5 17.5 15.96 17.5 19"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </Icon>
      ),
    },
    {
      title: "Arquitectura\nescalable",
      description:
        "Una solución pensada para startups, pymes y grandes empresas, que se adapta a tu volumen, complejidad y etapa de negocio.",
      icon: (
        <Icon>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 8H17"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M7 12H17"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M7 16H13"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M5 5H19V19H5V5Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        </Icon>
      ),
    },
  ];

  return (
    <section className="py-12">
      <div className="px-6 md:px-12 text-center">
        <div className="flex justify-center">
          <TitleDescripction
            title="FUNCIONALIDADES CLAVES"
            description="Un sistema completo que combina automatización, control y criterio humano."
          />
        </div>
      </div>

      <div className="mt-10 bg-blue-600">
        <div className="px-6 md:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((f) => (
              <FeatureCard
                key={f.title}
                title={f.title}
                description={f.description}
                icon={f.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
