export const Problem = () => {
  const symptoms = [
    'El gerente de finanzas pasa horas persiguiendo pagos por WhatsApp y correos',
    'Nadie sabe exactamente cuánto les deben hoy — el Excel no está al día',
    'Le dieron crédito a alguien que no pagó, sin forma de haberlo previsto',
    'Ventas quiere dar crédito nuevo. Finanzas dice que no. El CEO tiene que mediar.',
    'Facturaron bien, pero el banco pide más garantías porque el flujo de caja no cierra',
  ]

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-10">
        <div className="max-w-[720px]">
          <p className="text-brand-secondary font-bold text-sm uppercase tracking-widest mb-4">
            ¿Te suena alguno de estos?
          </p>
          <h2 className="text-brand-primary-dark font-canaro text-3xl md:text-4xl font-extrabold leading-tight">
            Si creciste vendiendo a crédito,{' '}
            <span className="text-brand-primary">en algún punto el Excel deja de alcanzar.</span>
          </h2>
        </div>

        <ul className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-[960px]">
          {symptoms.map((symptom, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-brand-secondary block" />
              <p className="text-slate-600 text-base leading-relaxed">{symptom}</p>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-slate-500 text-base md:text-lg max-w-[600px]">
          No es falta de disciplina —{' '}
          <span className="text-brand-primary-dark font-semibold">
            es que la cobranza nunca tuvo un sistema que escale con la empresa.
          </span>
        </p>
      </div>
    </section>
  )
}
