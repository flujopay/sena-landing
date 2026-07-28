export const BeautyBenefits = () => {
  const benefits = [
    {
      title: 'Preserva relaciones de alto valor',
      description:
        'Tus distribuidores y salones son socios de largo plazo. Sena cobra con criterio, manteniendo el vínculo comercial intacto.',
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
      title: 'Tono alineado a tu marca',
      description:
        'Mensajes de cobranza profesionales y elegantes. Nada de textos genéricos que dañen tu posicionamiento premium.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      title: 'Visibilidad total de tu cartera',
      description:
        'Dashboard en tiempo real: quién debe, cuánto, desde cuándo. Segmenta por tipo de cliente, región o antigüedad de mora.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 20V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 20V4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M6 20V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Conciliación automática',
      description:
        'Cuando pagan, el sistema lo registra. Sin reconciliaciones manuales entre bancos, ERP y Excel.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 11L12 14L22 4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 12V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: 'Escala con tu crecimiento',
      description:
        'Desde 50 hasta miles de facturas mensuales. La plataforma crece contigo sin aumentar tu carga operativa.',
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
      title: 'Respaldo de expertos',
      description:
        'Nuestro equipo humano de Sena entra en los casos complejos que requieren criterio humano.',
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
            Diseñado para la dinámica
            <br />
            <span className="text-brand-primary">de la industria de belleza</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-[#F9F9F9] rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-brand-secondary-dark flex items-center justify-center text-white mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-brand-primary-dark font-extrabold text-base mb-2">{benefit.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
