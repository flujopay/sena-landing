export const Problem = () => {
  const problems = [
    {
      title: 'Capital atrapado en facturas sin cobrar',
      description:
        'La empresa factura pero no recibe el dinero a tiempo. La liquidez se deteriora mes a mes mientras la cartera crece. No es un problema de ventas. Es un problema de cobranza.',
    },
    {
      title: 'Nadie es dueño de la cobranza',
      description:
        'No hay equipo dedicado. El vendedor que debería cobrar está vendiendo. La administración está haciendo otra cosa. La cobranza no tiene dueño, no tiene proceso, no pasa.',
    },
    {
      title: 'Cobranza a ciegas',
      description:
        'No saben cuánto les deben en total. No saben qué facturas llevan 30, 60 o 90 días vencidas. Las decisiones se toman sobre intuición, no sobre datos.',
    },
  ]

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-10">
        <div className="max-w-[720px]">
          <p className="text-brand-secondary font-bold text-sm uppercase tracking-widest mb-4">
            ¿Te suena alguno de estos?
          </p>
          <h2 className="text-brand-primary-dark font-canaro text-3xl md:text-4xl font-extrabold leading-tight">
            El dinero está.{' '}
            <span className="text-brand-primary">Solo que no está disponible.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[960px]">
          {problems.map((problem, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-3 h-3 rounded-full bg-brand-secondary block" />
                <p className="text-brand-primary-dark font-extrabold text-base leading-tight">
                  {problem.title}
                </p>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed pl-6">{problem.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-slate-500 text-base md:text-lg max-w-[600px]">
          No es falta de disciplina.{' '}
          <span className="text-brand-primary-dark font-semibold">
            Es que la cobranza nunca tuvo un sistema que escale con la empresa.
          </span>
        </p>
      </div>
    </section>
  )
}
