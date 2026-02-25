export const ServiciosProblem = () => {
  const painPoints = [
    { number: "01", title: "Procesos de pago largos y operativos", description: "En la cobranza B2B de servicios básicos, el pago no depende solo de finanzas. Mediciones, conformidades técnicas, validaciones operativas, contratos regulados y múltiples áreas internas del cliente pueden retrasar una factura 60, 90 o más días." },
    { number: "02", title: "Facturación estratégica y de alto impacto", description: "No son tickets masivos de consumo. Son contratos B2B de suministro, mantenimiento, operación o servicios críticos, donde cada factura impacta directamente el flujo de caja y la planificación financiera." },
    { number: "03", title: "Relaciones comerciales que no puedes poner en riesgo", description: "Tus clientes son grandes empresas, industrias, concesionarios u organismos públicos. Una mala gestión de cobranza puede afectar renovaciones, ampliaciones de contrato o licitaciones futuras." },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="text-left mb-12">
          <p className="text-brand-primary-dark text-2xl sm:text-4xl font-extrabold leading-tight">
            Servicios críticos.<br />
            <span className="text-brand-primary">Cobranza fragmentada.</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((p) => (
            <div key={p.number} className="bg-[#F9F9F9] rounded-2xl p-6 md:p-8 border border-slate-100 hover:shadow-md transition-shadow duration-300">
              <span className="text-brand-secondary font-extrabold text-3xl md:text-4xl">{p.number}</span>
              <h3 className="text-brand-primary-dark font-extrabold text-lg mt-4 mb-3">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
