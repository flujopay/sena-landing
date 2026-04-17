export const AutopistasProblem = () => {
  const painPoints = [
    {
      number: '01',
      title: 'Brecha entre tránsito y facturación',
      description:
        'El desfase entre el paso por pórtico, la conciliación de TAG y la facturación genera disputas constantes. Los clientes empresa cuestionan cargos por falta de respaldo, retrasando pagos por semanas o meses.',
    },
    {
      number: '02',
      title: 'Gestión compleja de flotas empresariales',
      description:
        'Altas, bajas y traspasos de vehículos no sincronizados provocan rechazos de facturas por patentes que ya no pertenecen a la flota del cliente.',
    },
    {
      number: '03',
      title: 'Información fragmentada por tramos y concesiones',
      description:
        'La dispersión de datos entre distintos tramos, sociedades concesionarias y sistemas dificulta la visibilidad de la cartera y aumenta el riesgo de incobrabilidad.',
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10">
        <div className="text-left mb-12">
          <p className="text-brand-primary-dark text-2xl sm:text-4xl font-extrabold leading-tight">
            Operación a alta velocidad.
            <br />
            <span className="text-brand-primary">Cobranza a paso lento.</span>
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
