export const InmobiliariasProblem = () => {
  const painPoints = [
    { number: "01", title: "Cuotas y promesas difíciles de controlar", description: "Entre promesas de compraventa, pagos en cuotas y condiciones de financiamiento, es fácil perder trazabilidad. Los atrasos se detectan tarde y la cobranza se vuelve reactiva." },
    { number: "02", title: "Cobranza fragmentada entre proyectos y sociedades", description: "Muchas inmobiliarias operan por proyecto, cada uno con su propia sociedad. Esto fragmenta la cartera, dificulta reportes consolidados y hace que el control financiero dependa de planillas." },
    { number: "03", title: "Morosidad creciente y alto costo administrativo", description: "Los equipos terminan persiguiendo pagos por correo y teléfono, sin un flujo claro de gestión. Se pierde tiempo, se tensiona la relación con clientes y la morosidad impacta directamente la continuidad de obras y pagos a proveedores." },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="text-left mb-12">
          <p className="text-brand-primary-dark text-2xl sm:text-4xl font-extrabold leading-tight">
            Ventas firmadas. Pagos atrasados.<br />
            <span className="text-brand-primary">Flujo incierto.</span>
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
