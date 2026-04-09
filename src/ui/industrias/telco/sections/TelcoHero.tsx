"use client";

import Button from "@/ui/shared/Button";

export const TelcoHero = () => {
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
              Telecomunicaciones B2B
            </span>
            <h1 className="text-brand-primary-dark font-canaro text-5xl lg:text-7xl font-extrabold leading-tight">
              Contratos complejos.{" "}
              <br />
              <span className="text-brand-primary font-caslon">Cobranza crítica</span>
              <span className="text-brand-secondary">.</span>
            </h1>
          </div>
          <p className="font-adobe text-black text-xl max-w-2xl leading-relaxed">
            En las <strong>empresas de telecomunicaciones</strong>, cada factura depende de SLAs, validaciones técnicas y procesos internos extensos del cliente. Sena ordena y acelera tu ciclo de cuentas por cobrar B2B sin tensionar relaciones estratégicas.
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
                const el = document.getElementById("telco-como-funciona");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            />
          </div>
          <p className="text-slate-500 text-sm mt-2">
            Empresas de telecomunicaciones y proveedores tecnológicos B2B ya confían en Sena.
          </p>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden flex-col gap-4">
          <span className="inline-block bg-brand-secondary/10 text-brand-secondary font-bold text-xs px-3 py-1 rounded-full w-fit">
            Telecomunicaciones B2B
          </span>
          <h1 className="text-brand-primary-dark font-canaro text-3xl font-extrabold leading-tight">
            Contratos complejos.{" "}
            <span className="text-brand-primary font-caslon">Cobranza crítica</span>
            <span className="text-brand-secondary">.</span>
          </h1>
          <p className="font-adobe text-black text-sm leading-relaxed">
            En las <strong>empresas de telecomunicaciones</strong>, cada factura depende de SLAs, validaciones técnicas y procesos internos extensos del cliente. Sena ordena y acelera tu ciclo de cuentas por cobrar B2B sin tensionar relaciones estratégicas.
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
                const el = document.getElementById("telco-como-funciona");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            />
          </div>
          <p className="text-slate-500 text-xs mt-1">
            Empresas de telecomunicaciones y proveedores tecnológicos B2B ya confían en Sena.
          </p>
        </div>
      </div>
    </section>
  );
};
