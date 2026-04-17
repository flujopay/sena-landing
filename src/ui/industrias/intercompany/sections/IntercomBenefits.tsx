export const IntercomBenefits = () => {
  const benefits = [
    {
      title: 'Protección del MRR ante pagos fallidos',
      description:
        'Detecta y actúa automáticamente sobre suscripciones vencidas y pagos rechazados antes de que se conviertan en cancelaciones.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Recuperación automática de cobros rechazados',
      description:
        'Reintentos inteligentes y secuencias de recuperación para pagos fallidos por tarjeta o transferencia, sin intervención manual.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22 12H18L15 21L9 3L6 12H2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: 'Visibilidad de ARR en riesgo',
      description:
        'Dashboard con ingreso recurrente comprometido segmentado por antigüedad, plan o segmento de cliente para decisiones proactivas.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 20V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 20V4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M6 20V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Flujos diferenciados por nivel de cliente',
      description:
        'Estrategias de cobranza distintas para Enterprise, SMB y Freemium. Cada segmento recibe el tono y la urgencia adecuados.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M23 21V19C23 17.1362 21.7252 15.5701 20 15.126"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M16 3.12602C17.7252 3.57006 19 5.13616 19 7C19 8.86384 17.7252 10.4299 16 10.874"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: 'Historial completo para CS y finanzas',
      description:
        'Trazabilidad total de gestiones, intentos de cobro, acuerdos y estados por cliente para alinear equipos de Customer Success y finanzas.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 12H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M9 16H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Ejecución experta para cuentas estratégicas',
      description:
        'Equipo especializado en cobranza B2B para cuentas de alto valor o clientes Enterprise en riesgo que requieren negociación con criterio.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="text-left mb-12">
          <p className="text-brand-primary-dark text-2xl sm:text-4xl font-extrabold leading-tight">
            Diseñado para negocios que viven
            <br />
            <span className="text-brand-primary">del ingreso recurrente</span>
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-[#F9F9F9] rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-brand-secondary-dark flex items-center justify-center text-white mb-4">
                {b.icon}
              </div>
              <h3 className="text-brand-primary-dark font-extrabold text-base mb-2">{b.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
