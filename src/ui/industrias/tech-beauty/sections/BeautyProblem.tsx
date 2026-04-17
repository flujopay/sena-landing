export const BeautyProblem = () => {
  const painPoints = [
    {
      number: '01',
      title: 'Cobranza que daña tu imagen',
      description:
        'Perseguir pagos con llamadas insistentes no va con el posicionamiento premium de tu marca. Tus distribuidores y salones merecen un trato diferente.',
    },
    {
      number: '02',
      title: 'Cuentas por cobrar en el limbo',
      description:
        'Entre lanzamientos, promociones y múltiples canales de venta, es fácil perder el control. Facturas en Excel, pagos sin conciliar, mora que crece silenciosamente.',
    },
    {
      number: '03',
      title: 'Tiempo que debería ir a tu negocio',
      description:
        'Tu equipo dedica horas a perseguir pagos en lugar de enfocarse en crecer las ventas, abrir nuevos puntos o lanzar productos.',
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="text-left mb-12">
          <p className="text-brand-primary-dark text-2xl sm:text-4xl font-extrabold leading-tight">
            En beauty, la relación lo es todo.
            <br />
            <span className="text-brand-primary">Pero cobrar no debería romperla.</span>
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
