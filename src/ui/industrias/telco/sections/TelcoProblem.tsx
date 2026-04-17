export const TelcoProblem = () => {
  const painPoints = [
    {
      number: '01',
      title: 'Procesos de pago largos y técnicos',
      description:
        'En la cobranza B2B de telecomunicaciones, el pago no depende solo de finanzas. Validaciones técnicas, SLAs, actas de conformidad y múltiples áreas internas pueden retrasar una factura 60, 90 o más días.',
    },
    {
      number: '02',
      title: 'Pocas facturas, montos estratégicos',
      description:
        'No son miles de tickets pequeños. Son contratos B2B de conectividad, enlaces, data centers o servicios gestionados, donde cada factura impacta directamente el flujo de caja.',
    },
    {
      number: '03',
      title: 'Relaciones comerciales que no puedes dañar',
      description:
        'Tus clientes son grandes empresas, operadores u organismos públicos. Presionar mal una cobranza puede afectar renovaciones, ampliaciones o licitaciones futuras.',
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="text-left mb-12">
          <p className="text-brand-primary-dark text-2xl sm:text-4xl font-extrabold leading-tight">
            Infraestructura crítica.
            <br />
            <span className="text-brand-primary">Cobranza fragmentada.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((point) => (
            <div
              key={point.number}
              className="bg-[#F9F9F9] rounded-2xl p-6 md:p-8 border border-slate-100 hover:shadow-md transition-shadow duration-300"
            >
              <span className="text-brand-secondary font-extrabold text-3xl md:text-4xl">{point.number}</span>
              <h3 className="text-brand-primary-dark font-extrabold text-lg mt-4 mb-3">{point.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
