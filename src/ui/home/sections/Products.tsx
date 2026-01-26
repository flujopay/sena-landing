"use client";
import Button from "@/ui/shared/Button";
import { useMemo, useState } from "react";

type ProductKey = "autogestion" | "recuperacion";

export const Products = () => {
  const products = useMemo(
    () => [
      {
        key: "autogestion" as const,
        label: "Plataforma de\nautogestión",
        title: "Para el día a día de tu cobranza",
        description:
          "Organiza facturas, automatiza recordatorios y controla todo tu ciclo de cobranza desde un solo lugar.",
        cta: "Empieza ahora",
      },
      {
        key: "recuperacion" as const,
        label: "Servicio de\nrecuperación con\nequipo humano",
        title: "Recupera pagos con apoyo experto",
        description:
          "Combina tecnología y un equipo especializado para gestionar casos complejos y mejorar tu tasa de recuperación.",
        cta: "Conoce más",
      },
    ],
    [],
  );

  const [activeKey, setActiveKey] = useState<ProductKey>(products[0].key);
  const active = products.find((p) => p.key === activeKey) ?? products[0];

  return (
    <section className="px-3 py-10 max-w-[1440px] mx-auto">
      <div className="bg-slate-100 rounded-3xl p-6 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col gap-6">
            <p className="text-black font-extrabold tracking-wide">
              NUESTROS PRODUCTOS
            </p>

            <div className="flex gap-6">
              <div className="relative w-1">
                <div className="absolute left-0 top-0 h-full w-1 rounded bg-slate-300" />
                <div
                  className="absolute left-0 top-0 w-1 rounded bg-blue-600 transition-all"
                  style={{
                    height: activeKey === "autogestion" ? "50%" : "50%",
                    transform:
                      activeKey === "autogestion"
                        ? "translateY(0%)"
                        : "translateY(100%)",
                  }}
                />
              </div>

              <div className="flex flex-col gap-6">
                {products.map((p) => {
                  const isActive = p.key === activeKey;
                  return (
                    <button
                      key={p.key}
                      type="button"
                      onClick={() => setActiveKey(p.key)}
                      className="text-left"
                    >
                      <p
                        className={
                          isActive
                            ? "text-blue-600 font-bold text-3xl leading-tight whitespace-pre-line"
                            : "text-slate-400 font-bold text-3xl leading-tight whitespace-pre-line"
                        }
                      >
                        {p.label}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-blue-600 p-6 md:p-8">
              <div className="bg-white rounded-xl h-48 md:h-56 flex items-center justify-center">
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

            <div className="p-6 md:p-8 bg-slate-100">
              <p className="text-black font-extrabold">{active.title}</p>
              <p className="text-slate-700 mt-2 leading-5">
                {active.description}
              </p>
              <Button text={active.cta} className="mt-5"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
