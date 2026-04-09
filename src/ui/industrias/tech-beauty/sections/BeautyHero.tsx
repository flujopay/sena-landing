"use client";

import Button from "@/ui/shared/Button";

export const BeautyHero = () => {
  const onRedirectHubspot = () => {
    window.open("https://meetings.hubspot.com/francisco502", "_blank");
  };

  return (
    <section className="bg-[#F9F9F9]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-16 md:py-24">
        {/* Desktop */}
        <div className="hidden md:flex flex-col gap-6 max-w-3xl">
          <div>
            <span className="inline-block bg-brand-secondary/10 text-brand-secondary font-bold text-sm px-4 py-1.5 rounded-full mb-6">
              Beauty Tech
            </span>
            <h1 className="text-brand-primary-dark font-canaro text-5xl lg:text-7xl font-extrabold leading-tight">
              Cobra sin perder la{" "}
              <br />
              <span className="text-brand-primary font-caslon">elegancia de tu marca</span>
              <span className="text-brand-secondary">.</span>
            </h1>
          </div>
          <p className="font-adobe text-black text-xl max-w-2xl leading-relaxed">
            Tu cartera de clientes —salones, distribuidores, retailers— merece una cobranza tan cuidada como tus productos. Sena automatiza tu ciclo de cuentas por cobrar <strong>sin dañar las relaciones que construiste</strong>.
          </p>
          <div className="flex flex-row items-start gap-3 mt-2">
            <Button
              text="Agenda una demo"
              size="lg"
              className="text-lg"
              onClick={onRedirectHubspot}
            />
            <Button
              text="Ver cómo funciona"
              variant="primaryDarkOutlined"
              size="lg"
              className="text-lg"
              onClick={() => {
                const el = document.getElementById("beauty-como-funciona");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            />
          </div>
          <p className="text-slate-500 text-sm mt-2">
            Únete a empresas de belleza que ya recuperan más, cobrando mejor.
          </p>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden flex-col gap-4">
          <span className="inline-block bg-brand-secondary/10 text-brand-secondary font-bold text-xs px-3 py-1 rounded-full w-fit">
            Beauty Tech
          </span>
          <h1 className="text-brand-primary-dark font-canaro text-3xl font-extrabold leading-tight">
            Cobra sin perder la{" "}
            <span className="text-brand-primary font-caslon">elegancia de tu marca</span>
            <span className="text-brand-secondary">.</span>
          </h1>
          <p className="font-adobe text-black text-sm leading-relaxed">
            Tu cartera de clientes —salones, distribuidores, retailers— merece una cobranza tan cuidada como tus productos. Sena automatiza tu ciclo de cuentas por cobrar <strong>sin dañar las relaciones que construiste</strong>.
          </p>
          <div className="flex flex-row items-start gap-2">
            <Button
              text="Agenda una demo"
              size="sm"
              className="text-xs"
              onClick={onRedirectHubspot}
            />
            <Button
              text="Ver cómo funciona"
              variant="primaryDarkOutlined"
              size="sm"
              className="text-xs"
              onClick={() => {
                const el = document.getElementById("beauty-como-funciona");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            />
          </div>
          <p className="text-slate-500 text-xs mt-1">
            Únete a empresas de belleza que ya recuperan más, cobrando mejor.
          </p>
        </div>
      </div>
    </section>
  );
};
