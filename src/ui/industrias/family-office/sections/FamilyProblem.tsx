export const FamilyProblem = () => {
  const painPoints = [
    { number: "01", title: "Cartera dispersa entre sociedades, rubros y administraciones", description: "Un Family Office suele operar con múltiples empresas: inmobiliarias, agrícolas, servicios, inversiones financieras y vehículos societarios. Cada unidad maneja su cobranza de forma distinta, generando falta de visibilidad consolidada y decisiones financieras tardías." },
    { number: "02", title: "Cobranza sin trazabilidad ejecutiva", description: "Cuando la cobranza se basa en correos, llamadas informales o planillas, se pierde historial, responsables y estados reales. Esto dificulta exigir cumplimiento sin afectar relaciones comerciales estratégicas." },
    { number: "03", title: "Falta de control sobre liquidez y compromisos", description: "Sin un seguimiento estructurado de cuentas por cobrar, pagos proyectados y atrasos críticos, la planificación patrimonial se vuelve reactiva: se cubren urgencias en vez de gestionar flujo con anticipación." },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="text-left mb-12">
          <p className="text-brand-primary-dark text-2xl sm:text-4xl font-extrabold leading-tight">
            El patrimonio crece.<br />
            <span className="text-brand-primary">La visibilidad se fragmenta.</span>
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
