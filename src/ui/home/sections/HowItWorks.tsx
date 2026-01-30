"use client";

import { useMemo, useState } from "react";
import { TitleDescripction } from "../../shared/TitleDescripction";

type StepKey = "prepara" | "cobra" | "evalua" | "recupera" | "concilia";

export const HowItWorks = () => {
  const steps = useMemo(
    () => [
      {
        key: "prepara" as const,
        label: "1. Prepara",
        number: 1,
        title: "1. Prepara",
        subtitle: "Ordena facturas, contactos y montos automáticamente.",
        description:
          "El sistema estructura toda la información para una gestión eficiente.",
      },
      {
        key: "cobra" as const,
        label: "2. Cobra",
        number: 2,
        title: "2. Cobra",
        subtitle: "CRM multicanal con WhatsApp, email y SMS.",
        description:"Secuencias inteligentes segmentadas por vencimiento, monto y comportamiento.",
      },
      {
        key: "evalua" as const,
        label: "3. Evalua",
        number: 3,
        title: "3. Evalua",
        subtitle: "Métricas de conversión, aperturas y rendimiento por canal.",
        description:
          "Mejora tu estrategia con datos reales.",
      },
      {
        key: "recupera" as const,
        label: "4. Recupera",
        number: 4,
        title: "4. Recupera",
        description:
          "Cuando hace falta entra el equipo humano de Recsa, quienes cuidando tu marca y relación con el cliente, realizan las gestiones de recupero, lo que llevamos haciendo por más de 40 años.",
      },
      {
        key: "concilia" as const,
        label: "5. Concilia",
        number: 5,
        title: "5. Concilia",
        subtitle: "Registro automático de pagos recibidos.",
        description:
          "Cierre de facturas sin trabajo manual ni errores.",
      },
    ],
    [],
  );

  const [activeKey, setActiveKey] = useState<StepKey>(steps[0].key);
  const activeIndex = steps.findIndex((s) => s.key === activeKey);
  const active = steps[activeIndex] ?? steps[0];

  return (
    <section className="bg-[#F9F9F9]">
      <div  className="py-12 max-w-[1280px] mx-auto">
        <div className="px-4 md:px-12 text-left">
              <div className="flex justify-start">
                <TitleDescripction
                  title="Cómo"
                  subtitle="funciona"
                  description="Cinco pasos para transformar tu cobranza"
                />
              </div>
            </div>

        <div className="mt-10 px-4 md:px-12 mx-auto">
          <div className="rounded-2xl pb-5 md:pb-8">
            <div className="rounded-full flex overflow-x-auto gap-2 justify-between bg-white">
              {steps.map((s) => {
                const isActive = s.key === activeKey;
                return (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => setActiveKey(s.key)}
                    className={
                      isActive
                        ? "shrink-0 px-4 md:px-8 py-3 rounded-full bg-brand-primary text-white font-extrabold text-xs md:text-xl tracking-wide"
                        : "shrink-0 px-4 md:px-8 py-3 rounded-full  text-brand-primary-dark font-extrabold text-xs md:text-xl tracking-wide cursor-pointer"
                    }
                  >
                    {s.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 md:mt-8 rounded-xl bg-[#EDEDED]">
              <div className="p-6 md:p-10 grid grid-cols-2 gap-8 items-center">
                <div className="bg-white rounded-xl h-56 md:h-64 flex items-center justify-center justify-self-center w-full max-w-xl">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-slate-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-slate-200/70 flex items-center justify-center">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9 7.5V16.5L16.5 12L9 7.5Z" fill="#64748B" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="bg-brand-primary text-white  rounded-full flex items-center gap-3 w-fit px-8 py-2">
                    <p className="text-sm md:text-xl font-bold tracking-wide">
                      {active.title}
                    </p>
                  </div>
                  <div>
                    <p className="text-brand-primary-dark text-xl md:text-2xl font-extrabold tracking-wide">
                      {active.subtitle}
                    </p>
                  </div>
                  <p className="mt-2 text-black/95 leading-6 max-w-md">
                    {active.description}
                  </p>
                </div>

              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              {steps.map((s, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => setActiveKey(s.key)}
                    className={
                      isActive
                        ? "w-3 h-3 rounded-full bg-brand-secondary-dark"
                        : "w-3 h-3 rounded-full bg-[#FBC2A2]"
                    }
                    aria-label={s.label}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
};
