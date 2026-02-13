"use client";

import Button from "@/ui/shared/Button";

export const IntercomHero = () => {
  const onRedirectHubspot = () => { window.open("https://meetings.hubspot.com/francisco472", "_blank"); };

  return (
    <section className="bg-[#F9F9F9]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-16 md:py-24">
        <div className="hidden md:flex flex-col gap-6 max-w-3xl">
          <div>
            <span className="inline-block bg-brand-secondary/10 text-brand-secondary font-bold text-sm px-4 py-1.5 rounded-full mb-6">Modelo Intercom / SaaS</span>
            <h1 className="text-brand-primary-dark font-canaro text-5xl lg:text-7xl font-extrabold leading-tight">
              MRR protegido.{" "}<br />
              <span className="text-brand-primary font-caslon">Cobranza automatizada</span>
              <span className="text-brand-secondary">.</span>
            </h1>
          </div>
          <p className="font-adobe text-black text-xl max-w-2xl leading-relaxed">
            En negocios de suscripción y licencias recurrentes, cada factura impaga es un cliente en riesgo y un ingreso perdido. <strong>Sena centraliza la cobranza, recupera pagos fallidos y gestiona cuentas vencidas con estrategia</strong> — para que tu equipo enfoque en crecer, no en cobrar.
          </p>
          <div className="flex flex-row items-start gap-3 mt-2">
            <Button text="Agenda una demo" size="lg" className="text-lg" onClick={onRedirectHubspot} />
            <Button text="Ver cómo funciona" variant="primaryDarkOutlined" size="lg" className="text-lg" onClick={() => { const el = document.getElementById("intercom-como-funciona"); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); }} />
          </div>
          <p className="text-slate-500 text-sm mt-2">Plataformas SaaS, empresas de servicios digitales y negocios con contratos recurrentes ya confían en Sena para proteger su MRR.</p>
        </div>
        <div className="flex md:hidden flex-col gap-4">
          <span className="inline-block bg-brand-secondary/10 text-brand-secondary font-bold text-xs px-3 py-1 rounded-full w-fit">Modelo Intercom / SaaS</span>
          <h1 className="text-brand-primary-dark font-canaro text-3xl font-extrabold leading-tight">
            MRR protegido.{" "}
            <span className="text-brand-primary font-caslon">Cobranza automatizada</span>
            <span className="text-brand-secondary">.</span>
          </h1>
          <p className="font-adobe text-black text-sm leading-relaxed">
            En negocios de suscripción y licencias recurrentes, cada factura impaga es un cliente en riesgo. <strong>Sena centraliza la cobranza y recupera pagos fallidos</strong> para que tu equipo enfoque en crecer, no en cobrar.
          </p>
          <div className="flex flex-row items-start gap-2">
            <Button text="Agenda una demo" size="sm" className="text-xs" onClick={onRedirectHubspot} />
            <Button text="Ver cómo funciona" variant="primaryDarkOutlined" size="sm" className="text-xs" onClick={() => { const el = document.getElementById("intercom-como-funciona"); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); }} />
          </div>
          <p className="text-slate-500 text-xs mt-1">Plataformas SaaS y negocios con contratos recurrentes ya confían en Sena.</p>
        </div>
      </div>
    </section>
  );
};
