export const MaquinariasProblem = () => {
  const painPoints = [
    { number: "01", title: "Ciclos de pago eternos", description: "Mineras y constructoras tienen procesos internos complejos. Una factura puede tardar 60, 90 o más días en pagarse. Y mientras tanto, tu flujo de caja sufre." },
    { number: "02", title: "Pocas facturas, mucho en juego", description: "No son miles de transacciones pequeñas. Son pocas operaciones de alto valor donde cada día de mora impacta directamente tu capital de trabajo." },
    { number: "03", title: "Relaciones que no puedes dañar", description: "Tus clientes son contratos de años. Presionar mal puede costarte la renovación. Pero no cobrar tampoco es opción." },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="text-left mb-12">
          <p className="text-brand-primary-dark text-2xl sm:text-4xl font-extrabold leading-tight">
            Contratos millonarios.
            <br />
            <span className="text-brand-primary">Cobranza artesanal.</span>
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
