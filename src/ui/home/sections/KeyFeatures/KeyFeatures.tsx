import { AssetIcon } from "@/lib/utils/assets/icon";
import { Carousel } from "@/ui/shared/CardSlider";
import type { ReactNode } from "react";
import { TitleDescripction } from "../../../shared/TitleDescripction";
import { FeatureCard, type FeatureCardProps } from "./FeatureCard";

const Icon = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-10 h-10 rounded-full bg-brand-secondary-dark flex items-center justify-center">
      <div className="text-white">{children}</div>
    </div>
  );
};

export const KeyFeatures = () => {
  const features: FeatureCardProps[] = [
    {
      title: "Plataforma unificada\nde cobranza",
      description:
        <p><span className="text-black font-bold">Centraliza</span> facturas, clientes, gestiones y pagos en un solo lugar, sin planillas ni sistemas paralelos.</p>,
      icon: (
        <Icon>
          <AssetIcon.rings width="32" height="32" color="white"/>
        </Icon>
      ),
    },
    {
      title: "Gestión multicanal\nintegrada",
      description:
        <p><span className="text-black font-bold">Administra</span> WhatsApp, email y SMS <span className="text-black font-bold">desde una sola plataforma</span>, con historial completo de cada interacción.</p>,
      icon: (
        <Icon>
          <AssetIcon.nodes width="24" height="24" color="white"/>
        </Icon>
      ),
    },
    {
      title: "Automatización\ninteligente",
      description:
        <p><span className="text-black font-bold">Automatiza</span> recordatorios y seguimientos con reglas claras, manteniendo siempre un tono humano en la <span className="text-black font-bold">comunicación con tus clientes</span>.</p>,
      icon: (
        <Icon>
          <svg
            width="24"
            height="24"
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
        <p>Visualiza estados de pago, mora y desempeño de tus gestiones con <span className="text-black font-bold">información siempre actualizada.</span></p>,
      icon: (
        <Icon>
          <AssetIcon.monitoring width="24" height="24" color="white"/>
        </Icon>
      ),
    },
    {
      title: "Gestión humana\nespecializada",
      description:
        <p>Cuando la automatización no basta, entra el <span className="text-black font-bold">equipo experto de Recsa</span> para gestionar los casos complejos que requieren criterio humano.</p>,
      icon: (
        <Icon>
          <svg
            width="24"
            height="24"
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
        <p>Una solución pensada para startups, pymes y grandes empresas, que se <span className="text-black font-bold">adapta a tu volumen</span>, complejidad y etapa de negocio.</p>,
      icon: (
        <Icon>
          <AssetIcon.architecture width="24" height="24" color="white"/>
        </Icon>
      ),
    },
  ];

  return (
    <section className="py-12 mx-auto max-w-[1280px]">
      <div className="px-6 md:px-12 text-left">
          <TitleDescripction
            title="Funcionalidades"
            subtitle="claves"
            description="Un sistema completo que combina automatización, control y criterio humano."
          />
      </div>

      <div className="mt-10">
        <div className="py-12">
          {/* Desktop: grid */}
          <div className="hidden md:block px-6 md:px-12">
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

          {/* Mobile: slider */}
          <div className="md:hidden px-2">
            <Carousel
              dots={false}
              infinite={false}
              speed={500}
              slidesToShow={2}
              slidesToScroll={1}
              initialSlide={0}
              responsive={[{ breakpoint: 640, settings: { slidesToShow: 1 } }]}
            >
              {features.map((f) => (
                <FeatureCard
                  key={f.title}
                  title={f.title}
                  description={f.description}
                  icon={f.icon}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
