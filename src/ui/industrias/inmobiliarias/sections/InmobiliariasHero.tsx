"use client";

import Button from "@/ui/shared/Button";

export const InmobiliariasHero = () => {
  const onRedirectHubspot = () => { window.open("https://meetings.hubspot.com/francisco502", "_blank"); };

  return (
    <section className="bg-[#F9F9F9]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-16 md:py-24">
        <div className="hidden md:flex flex-col gap-6 max-w-3xl">
          <div>
            <span className="inline-block bg-brand-secondary/10 text-brand-secondary font-bold text-sm px-4 py-1.5 rounded-full mb-6">Inmobiliarias</span>
            <h1 className="text-brand-primary-dark font-canaro text-5xl lg:text-7xl font-extrabold leading-tight">
              Proyectos avanzan. Cobros al día.{" "}<br />
              <span className="text-brand-primary font-caslon">Flujo inmobiliario bajo control</span>
              <span className="text-brand-secondary">.</span>
            </h1>
          </div>
          <p className="font-adobe text-black text-xl max-w-2xl leading-relaxed">
            En una inmobiliaria, vender es solo el inicio: el verdadero desafío es cobrar en tiempo, controlar cuotas, gestionar promesas, evitar morosidad y mantener visibilidad real del flujo. <strong>Sena centraliza tu cartera, automatiza la cobranza y acelera el ciclo de pago</strong> para que cada unidad vendida o arrendada se transforme en liquidez real.
          </p>
          <div className="flex flex-row items-start gap-3 mt-2">
            <Button text="Agenda una demo" size="lg" className="text-lg" onClick={onRedirectHubspot} />
            <Button text="Ver cómo funciona" variant="primaryDarkOutlined" size="lg" className="text-lg" onClick={() => { const el = document.getElementById("inmob-como-funciona"); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); }} />
          </div>
          <p className="text-slate-500 text-sm mt-2">Inmobiliarias y administradoras de activos ya confían en Sena.</p>
        </div>
        <div className="flex md:hidden flex-col gap-4">
          <span className="inline-block bg-brand-secondary/10 text-brand-secondary font-bold text-xs px-3 py-1 rounded-full w-fit">Inmobiliarias</span>
          <h1 className="text-brand-primary-dark font-canaro text-3xl font-extrabold leading-tight">
            Proyectos avanzan.{" "}
            <span className="text-brand-primary font-caslon">Flujo inmobiliario bajo control</span>
            <span className="text-brand-secondary">.</span>
          </h1>
          <p className="font-adobe text-black text-sm leading-relaxed">
            En una inmobiliaria, vender es solo el inicio. <strong>Sena centraliza tu cartera, automatiza la cobranza y acelera el ciclo de pago</strong> para que cada unidad vendida o arrendada se transforme en liquidez real.
          </p>
          <div className="flex flex-row items-start gap-2">
            <Button text="Agenda una demo" size="sm" className="text-xs" onClick={onRedirectHubspot} />
            <Button text="Ver cómo funciona" variant="primaryDarkOutlined" size="sm" className="text-xs" onClick={() => { const el = document.getElementById("inmob-como-funciona"); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); }} />
          </div>
          <p className="text-slate-500 text-xs mt-1">Inmobiliarias y administradoras de activos ya confían en Sena.</p>
        </div>
      </div>
    </section>
  );
};
