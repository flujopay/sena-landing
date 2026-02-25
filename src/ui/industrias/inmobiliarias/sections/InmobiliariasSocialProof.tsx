export const InmobiliariasSocialProof = () => {
  const clientTypes = ["Inmobiliarias", "Constructoras con venta directa", "Administradoras de arriendo", "Gestores de proyectos inmobiliarios", "Empresas de renta residencial y comercial", "Holding inmobiliario"];
  const metrics = [
    { value: "30%", label: "Reducción en morosidad promedio mensual" },
    { value: "20 días", label: "Mejora en el ciclo de cobro de cuotas" },
    { value: "100%", label: "Trazabilidad de promesas, pagos y acuerdos por cliente" },
  ];

  return (
    <section className="bg-[#F9F9F9] py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="text-left mb-12">
          <p className="text-brand-primary-dark text-2xl sm:text-4xl font-extrabold leading-tight">
            Inmobiliarias que convierten<br />
            <span className="text-brand-primary">promesas en flujo real</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12">
          {clientTypes.map((t) => (<span key={t} className="bg-white text-brand-primary-dark text-xs md:text-sm font-semibold px-4 py-2 rounded-full border border-brand-primary/10">{t}</span>))}
        </div>
        <div className="bg-white rounded-2xl p-6 md:p-10 mb-12 border border-slate-100">
          <div className="flex items-start gap-4">
            <svg className="shrink-0 text-brand-secondary mt-1" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011C3 9.511 5.457 6.37 9.03 4.95L9.923 6.404C6.588 8.005 5.936 10.17 5.679 11.535C6.196 11.283 6.864 11.198 7.518 11.258C9.2 11.413 10.516 12.837 10.516 14.5C10.516 15.381 10.166 16.225 9.543 16.849C8.919 17.472 8.075 17.821 7.194 17.821C6.2 17.821 5.252 17.397 4.583 17.321ZM14.583 17.321C13.553 16.227 13 15 13 13.011C13 9.511 15.457 6.37 19.03 4.95L19.923 6.404C16.588 8.005 15.936 10.17 15.679 11.535C16.196 11.283 16.864 11.198 17.518 11.258C19.2 11.413 20.516 12.837 20.516 14.5C20.516 15.381 20.166 16.225 19.543 16.849C18.919 17.472 18.075 17.821 17.194 17.821C16.2 17.821 15.252 17.397 14.583 17.321Z" /></svg>
            <div>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed italic">Teníamos múltiples proyectos activos y el seguimiento de cuotas dependía de planillas. Con Sena consolidamos la cartera, automatizamos recordatorios y bajamos la morosidad sin aumentar el equipo administrativo.</p>
              <div className="mt-4">
                <p className="text-brand-primary-dark font-bold text-sm">Gerente de Administración y Finanzas</p>
                <p className="text-slate-500 text-sm">Inmobiliaria</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((m) => (
            <div key={m.label} className="bg-white rounded-2xl p-6 md:p-8 text-center border border-slate-100">
              <p className="text-brand-primary font-extrabold text-4xl md:text-5xl mb-2">{m.value}</p>
              <p className="text-slate-600 text-sm md:text-base leading-snug">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
