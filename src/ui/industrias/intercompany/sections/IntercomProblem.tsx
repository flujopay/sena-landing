export const IntercomProblem = () => {
  const painPoints = [
    {
      number: '01',
      title: 'Pagos fallidos y churn financiero',
      description:
        'En modelos de suscripción, un pago fallido no es solo un atraso: es el inicio de una cancelación. Sin seguimiento activo y recuperación inmediata, cada ciclo de facturación genera pérdidas silenciosas que erosionan el MRR sin que el equipo lo vea a tiempo.',
    },
    {
      number: '02',
      title: 'Cobranza sin visibilidad de ARR/MRR en riesgo',
      description:
        'Cuando la cobranza se maneja con recordatorios manuales, correos genéricos o flujos improvisados, es imposible saber exactamente cuánto del ingreso proyectado está realmente comprometido. Esto genera fricción entre finanzas, CS y ventas.',
    },
    {
      number: '03',
      title: 'Gestión reactiva de cuentas vencidas',
      description:
        'Sin un proceso estructurado por antigüedad, monto y tipo de cliente, los equipos reaccionan a lo urgente en vez de gestionar el riesgo de forma proactiva. Las cuentas se vencen, los clientes se molestan y los ingresos se deterioran.',
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="text-left mb-12">
          <p className="text-brand-primary-dark text-2xl sm:text-4xl font-extrabold leading-tight">
            El ingreso recurrente
            <br />
            <span className="text-brand-primary">no siempre llega a tiempo.</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((p) => (
            <div
              key={p.number}
              className="bg-[#F9F9F9] rounded-2xl p-6 md:p-8 border border-slate-100 hover:shadow-md transition-shadow duration-300"
            >
              <span className="text-brand-secondary font-extrabold text-3xl md:text-4xl">{p.number}</span>
              <h3 className="text-brand-primary-dark font-extrabold text-lg mt-4 mb-3">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
