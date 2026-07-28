export const ServiciosWhySena = () => {
  const differentiators = [
    {
      title: 'Entendemos la cobranza B2B compleja en servicios básicos',
      description:
        'Conocemos los ciclos de pago, las validaciones operativas y la dinámica de contratos regulados del sector utilities.',
    },
    {
      title: 'Experiencia comprobada en industrias críticas y reguladas',
      description:
        'Entendemos los estándares de compliance y la sensibilidad social que exige la cobranza en servicios básicos regulados.',
    },
    {
      title: 'Tecnología escalable combinada con criterio humano experto',
      description:
        'Automatización inteligente para el volumen, intervención humana especializada para los casos que requieren negociación y sensibilidad comercial.',
    },
  ]

  return (
    <section className="bg-[#F9F9F9] py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="text-left mb-12">
          <p className="text-brand-primary-dark text-2xl sm:text-4xl font-extrabold leading-tight">
            No es software genérico.
            <br />
            <span className="text-brand-primary">Es expertise real en cobranza B2B.</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {differentiators.map((item, idx) => (
            <div
              key={item.title}
              className="relative bg-white rounded-2xl p-6 md:p-8 border border-slate-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="absolute top-6 right-6 text-brand-secondary/20 font-extrabold text-6xl leading-none select-none">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <div className="w-1 h-12 bg-brand-secondary rounded-full mb-5" />
              <h3 className="text-brand-primary-dark font-extrabold text-base md:text-lg mb-3 pr-12">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
