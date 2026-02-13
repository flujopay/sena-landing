export const IntercomWhySena = () => {
  const differentiators = [
    { title: "Entendemos los modelos de facturación recurrente", description: "Conocemos ciclos de pago, estructuras de contratos SaaS y la dinámica de ingresos por suscripción que requiere precisión operativa." },
    { title: "Reportería orientada a MRR, ARR y churn financiero", description: "Dashboards diseñados para revenue operations, no solo cuentas por cobrar contables. Visibilidad real del ingreso en riesgo." },
    { title: "Flujos de recuperación que cuidan la experiencia", description: "Secuencias inteligentes que reducen cancelaciones manteniendo una comunicación profesional y alineada con tu marca." },
    { title: "Soporte experto para cuentas de alto valor", description: "Tecnología automatizada con intervención humana especializada para contratos Enterprise y clientes estratégicos en riesgo." },
  ];

  return (
    <section className="bg-[#F9F9F9] py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="text-left mb-12">
          <p className="text-brand-primary-dark text-2xl sm:text-4xl font-extrabold leading-tight">
            No es solo cobranza.<br />
            <span className="text-brand-primary">Es protección de ingresos recurrentes.</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentiators.map((item, idx) => (
            <div key={item.title} className="relative bg-white rounded-2xl p-6 md:p-8 border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <div className="absolute top-6 right-6 text-brand-secondary/20 font-extrabold text-6xl leading-none select-none">{String(idx + 1).padStart(2, "0")}</div>
              <div className="w-1 h-12 bg-brand-secondary rounded-full mb-5" />
              <h3 className="text-brand-primary-dark font-extrabold text-base md:text-lg mb-3 pr-12">{item.title}</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
