export const ServiciosBenefits = () => {
  const benefits = [
    {
      title: 'Cobranza alineada a contratos regulados',
      description:
        'Gestiones que respetan los marcos regulatorios y contractuales propios de servicios esenciales, sin poner en riesgo la relación con el cliente.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      ),
    },
    {
      title: 'Gestión por contrato y servicio',
      description:
        'Organiza tus cuentas por cobrar por contrato, servicio, período de facturación o SLA para una visibilidad granular.',
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
      title: 'Seguimiento prioritario de facturas de alto impacto',
      description:
        'Alertas y escalamientos automáticos para facturas críticas que afectan directamente tu planificación financiera.',
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
    {
      title: 'Adaptación a validaciones operativas y técnicas',
      description:
        'Configura flujos de cobranza que contemplan mediciones, conformidades técnicas y validaciones propias de utilities.',
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
      title: 'Reportería ejecutiva para finanzas y dirección',
      description:
        'Dashboards con KPIs de cobranza, DSO, aging y recuperación para la toma de decisiones a nivel directivo.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 20V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 20V4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M6 20V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Respaldo experto para casos complejos',
      description:
        'Equipo humano especializado en cobranza B2B corporativa para intervenir en negociaciones de alto valor y complejidad.',
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
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="text-left mb-12">
          <p className="text-brand-primary-dark text-2xl sm:text-4xl font-extrabold leading-tight">
            Diseñado para la realidad
            <br />
            <span className="text-brand-primary">de los servicios esenciales</span>
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
