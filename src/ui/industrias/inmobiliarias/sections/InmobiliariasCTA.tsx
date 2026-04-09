"use client";

import Button from "@/ui/shared/Button";
import { useRouter } from "next/navigation";

export const InmobiliariasCTA = () => {
  const router = useRouter();
  const onRedirectHubspot = () => { window.open("https://meetings.hubspot.com/francisco502", "_blank"); };

  const trustElements = [
    { text: "Sin compromiso", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M21 12V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>) },
    { text: "Integración con ERP, contabilidad o planillas", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>) },
    { text: "Equipo experto en cobranza B2B y contratos de largo plazo", icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" /></svg>) },
  ];

  return (
    <section className="bg-[#F9F9F9] py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 text-center">
        <h2 className="text-brand-primary-dark text-3xl md:text-5xl font-extrabold leading-tight mb-4">
          Haz que tu cartera inmobiliaria<br className="hidden md:block" /> se transforme en{" "}
          <span className="text-brand-primary">liquidez real</span>
        </h2>
        <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Agenda una demo de 30 minutos y descubre cómo Sena mejora la cobranza de cuotas, arriendos y promesas en proyectos inmobiliarios.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <Button text="Agendar demo gratuita" variant="secondaryFilled" size="lg" className="text-lg" onClick={onRedirectHubspot} />
          <Button text="Contáctanos" variant="primaryDarkOutlined" size="lg" className="text-lg" onClick={() => router.push("/contactanos")} />
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
          {trustElements.map((el) => (
            <div key={el.text} className="flex items-center gap-2 text-slate-500">
              <span className="text-brand-secondary">{el.icon}</span>
              <span className="text-sm">{el.text}</span>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-brand-primary-dark font-extrabold text-lg">Sena — <span className="text-brand-secondary font-caslon">El arte de cobrar bien</span></p>
          <p className="text-slate-400 text-sm mt-1">Cobrar también es una forma de cuidar.</p>
        </div>
      </div>
    </section>
  );
};
