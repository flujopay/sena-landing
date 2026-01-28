"use client";

import { useMemo, useState } from "react";
import { TitleDescripction } from "../../shared/TitleDescripction";

type StepKey = "prepara" | "cobra" | "evalua" | "recupera" | "concilia";

export const HowItWorks = () => {
  const steps = useMemo(
    () => [
      {
        key: "prepara" as const,
        label: "PREPARA",
        number: 1,
        title: "PREPARA",
        description:
          "Ordena facturas, contactos y montos automáticamente. El sistema estructura toda la información para una gestión eficiente.",
      },
      {
        key: "cobra" as const,
        label: "COBRA",
        number: 2,
        title: "COBRA",
        description:
          "CRM multicanal con WhatsApp, email y SMS. Secuencias inteligentes segmentadas por vencimiento, monto y comportamiento.",
      },
      {
        key: "evalua" as const,
        label: "EVALUA",
        number: 3,
        title: "EVALUA",
        description:
          "Métricas de conversión, aperturas y rendimiento por canal. Mejora tu estrategia con datos reales.",
      },
      {
        key: "recupera" as const,
        label: "RECUPERA",
        number: 4,
        title: "RECUPERA",
        description:
          "Cuando hace falta entra el equipo humano de Recsa, quienes cuidando tu marca y relación con el cliente, realizan las gestiones de recupero, lo que llevamos haciendo por más de 40 años.",
      },
      {
        key: "concilia" as const,
        label: "CONCILIA",
        number: 5,
        title: "CONCILIA",
        description:
          "Registro automático de pagos recibidos. Cierre de facturas sin trabajo manual ni errores.",
      },
    ],
    [],
  );

  const [activeKey, setActiveKey] = useState<StepKey>(steps[0].key);
  const activeIndex = steps.findIndex((s) => s.key === activeKey);
  const active = steps[activeIndex] ?? steps[0];

  return (
    <section className="py-12">
      <div className="px-6 md:px-12 text-center">
        <div className="flex justify-center">
          <TitleDescripction
            title="CÓMO FUNCIONA"
            description="Cinco pasos para transformar tu cobranza"
          />
        </div>
      </div>

      <div className="mt-10 px-4 md:px-12 max-w-5xl mx-auto">
        <div className="bg-slate-100 rounded-2xl p-5 md:p-8">
          <div className="bg-blue-600 rounded-xl p-2 md:p-2.5 flex overflow-x-auto gap-2 justify-start md:justify-between">
            {steps.map((s) => {
              const isActive = s.key === activeKey;
              return (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setActiveKey(s.key)}
                  className={
                    isActive
                      ? "shrink-0 px-4 md:px-6 py-2 rounded-lg bg-white text-blue-600 font-extrabold text-xs md:text-sm tracking-wide"
                      : "shrink-0 px-4 md:px-6 py-2 rounded-lg bg-blue-600 text-white font-extrabold text-xs md:text-sm tracking-wide"
                  }
                >
                  {s.label}
                </button>
              );
            })}
          </div>

          <div className="mt-6 md:mt-8 bg-blue-600 rounded-xl shadow-md">
            <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white text-blue-600 font-extrabold flex items-center justify-center">
                    {active.number}
                  </div>
                  <p className="text-3xl md:text-4xl font-extrabold tracking-wide">
                    {active.title}
                  </p>
                </div>
                <p className="mt-6 text-white/95 leading-6 max-w-md">
                  {active.description}
                </p>
              </div>

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
                      ? "w-3 h-3 rounded-full bg-blue-600"
                      : "w-3 h-3 rounded-full bg-blue-200"
                  }
                  aria-label={s.label}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
