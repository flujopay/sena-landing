"use client";

import { Button } from "@/ui/shared/Button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom right, #1e3a5f, #2563eb, #3b82f6)",
      }}
    >
      <div className="absolute inset-0 bg-[url('/images/flujo-landing/grid-pattern.svg')] opacity-10"></div>

      <div className="max-w-[1280px] mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-white font-semibold text-sm">
              Recupera • Powered by Recsa
            </span>
          </div>

          <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Tu cartera vencida no está{" "}
            <span className="text-brand-accent">perdida</span>
          </h1>

          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Equipo especializado en recuperación + tecnología avanzada + 40 años
            de experiencia. Recuperamos sin romper relaciones.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              text="Solicita Evaluación Gratuita"
              variant="secondaryFilled"
              size="lg"
              onClick={() => scrollToSection("contacto")}
              rightIcon={<ArrowRight className="h-5 w-5" />}
            />
            <Button
              text="Ver Cómo Funciona"
              variant="primaryInvertedFilled"
              size="lg"
              onClick={() => scrollToSection("como-funciona")}
              leftIcon={<Play className="h-5 w-5" />}
            />
          </div>
        </div>
      </div>

      {/* Stats Bar - sobresale del Hero hacia la siguiente sección */}
      <div className="relative z-20 -mb-12 md:-mb-16 pb-4">
        <div className="max-w-[900px] mx-auto px-4 py-4">
          <div className="flex bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex-1 p-4 md:p-8 text-center">
              <div className="text-xl md:text-4xl font-extrabold text-brand-primary mb-1">
                +85%
              </div>
              <div className="text-slate-600 text-[10px] md:text-sm font-medium">
                Tasa de recuperación
              </div>
            </div>
            <div className="flex-1 p-4 md:p-8 text-center border-l border-r border-slate-200">
              <div className="text-xl md:text-4xl font-extrabold text-brand-primary mb-1">
                15 países
              </div>
              <div className="text-slate-600 text-[10px] md:text-sm font-medium">
                Presencia LATAM
              </div>
            </div>
            <div className="flex-1 p-4 md:p-8 text-center">
              <div className="text-xl md:text-4xl font-extrabold text-brand-primary mb-1">
                40+ años
              </div>
              <div className="text-slate-600 text-[10px] md:text-sm font-medium">
                Experiencia Recsa
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
