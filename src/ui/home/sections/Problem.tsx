export const Problem = () => {
  const symptoms = [
    'El gerente de finanzas pasa horas de su semana persiguiendo pagos por WhatsApp y correos',
    'Tienen un Excel con la cartera, pero nadie sabe realmente cuánto les deben hoy',
    'Le dieron crédito a un cliente que no pagó — y no tenían cómo haberlo sabido antes',
    'Ventas quiere dar crédito a un cliente nuevo. Finanzas dice que no. El CEO tiene que mediar.',
    'Facturaron bien este trimestre, pero el banco pide más garantías porque el flujo de caja no cierra',
  ]

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-[1280px] px-4 md:px-10">
        <div className="max-w-[760px]">
          <p className="text-brand-secondary font-bold text-sm uppercase tracking-widest mb-3">
            ¿Te suena esto?
          </p>
          <h2 className="text-brand-primary-dark font-canaro text-3xl md:text-4xl font-extrabold leading-tight mb-10">
            Si creciste vendiendo a crédito, en algún punto el Excel{' '}
            <span className="text-brand-primary">deja de alcanzar.</span>
          </h2>

          <ul className="flex flex-col gap-5">
            {symptoms.map((symptom, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-red-400 block" />
                </span>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed">{symptom}</p>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-slate-500 text-base md:text-lg leading-relaxed">
            No es un problema de disciplina — es un problema de sistema.{' '}
            <span className="text-brand-primary-dark font-semibold">
              Tu empresa necesita un proceso de cobranza que escale con ella.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
