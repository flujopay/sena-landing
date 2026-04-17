export const TelcoSolution = () => {
  const pillars = [
    {
      title: 'Centraliza',
      description:
        'Todas tus cuentas por cobrar B2B en un solo lugar. Visibilidad por cliente, contrato, servicio, SLA o proyecto, sin depender de Excel ni sistemas aislados.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Automatiza',
      description:
        'Secuencias de cobranza profesionales y configurables según tipo de cliente y contrato. Recordatorios formales, seguimientos técnicos y escalamientos con el tono y timing adecuados.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2L14.2 7.8L20 10L14.2 12.2L12 18L9.8 12.2L4 10L9.8 7.8L12 2Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M19 14L19.8 16.2L22 17L19.8 17.8L19 20L18.2 17.8L16 17L18.2 16.2L19 14Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: 'Recupera',
      description:
        'Para facturas críticas o clientes estratégicos, nuestro equipo de especialistas interviene con experiencia en recuperación B2B corporativa y negociación compleja.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 12.5C9.93 12.5 8.25 10.82 8.25 8.75C8.25 6.68 9.93 5 12 5C14.07 5 15.75 6.68 15.75 8.75C15.75 10.82 14.07 12.5 12 12.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M6.5 19C6.5 15.96 8.96 13.5 12 13.5C15.04 13.5 17.5 15.96 17.5 19"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ]

  return (
    <section className="bg-[#F9F9F9] py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="text-left mb-4">
          <p className="text-brand-primary-dark text-2xl sm:text-4xl font-extrabold leading-tight">
            Sena: El arte de cobrar bien
            <br />
            <span className="text-brand-primary">en telecomunicaciones B2B</span>
          </p>
        </div>
        <p className="text-slate-600 text-base md:text-lg max-w-2xl mb-12 leading-relaxed">
          Una plataforma diseñada para la cobranza B2B compleja en empresas de telecomunicaciones:
          automatización inteligente combinada con intervención experta cuando el caso lo requiere.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-brand-secondary flex items-center justify-center text-white mb-5">
                {pillar.icon}
              </div>
              <h3 className="text-brand-primary-dark font-extrabold text-xl mb-3">{pillar.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
