'use client'

import Button from '@/ui/shared/Button'

export const AutopistasHero = () => {
  const onRedirectHubspot = () => {
    window.open('https://meetings.hubspot.com/francisco502', '_blank')
  }

  return (
    <section className="bg-[#F9F9F9]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-16 md:py-24">
        <div className="hidden md:flex flex-col gap-6 max-w-3xl">
          <div>
            <span className="inline-block bg-brand-secondary/10 text-brand-secondary font-bold text-sm px-4 py-1.5 rounded-full mb-6">
              Autopistas y Concesiones
            </span>
            <h1 className="text-brand-primary-dark font-canaro text-5xl lg:text-7xl font-extrabold leading-tight">
              Rutas fluidas. Conciliación exacta. <br />
              <span className="text-brand-primary font-caslon">Cobranza inteligente</span>
              <span className="text-brand-secondary">.</span>
            </h1>
          </div>
          <p className="font-adobe text-black text-xl max-w-2xl leading-relaxed">
            En la industria de autopistas, la cobranza B2B no es solo emitir una factura: es validar miles de
            tránsitos, gestionar flotas dinámicas y resolver disputas de pórticos. Sena centraliza y acelera
            tu ciclo de cuentas por cobrar para que{' '}
            <strong>cada kilómetro recorrido se transforme en flujo de caja sin fricciones</strong>.
          </p>
          <div className="flex flex-row items-start gap-3 mt-2">
            <Button text="Agenda una demo" size="lg" className="text-lg" onClick={onRedirectHubspot} />
            <Button
              text="Ver cómo funciona"
              variant="primaryDarkOutlined"
              size="lg"
              className="text-lg"
              onClick={() => {
                const el = document.getElementById('auto-como-funciona')
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            />
          </div>
          <p className="text-slate-500 text-sm mt-2">
            Concesionarias viales y operadores de infraestructura ya confían en Sena.
          </p>
        </div>
        <div className="flex md:hidden flex-col gap-4">
          <span className="inline-block bg-brand-secondary/10 text-brand-secondary font-bold text-xs px-3 py-1 rounded-full w-fit">
            Autopistas y Concesiones
          </span>
          <h1 className="text-brand-primary-dark font-canaro text-3xl font-extrabold leading-tight">
            Rutas fluidas. <span className="text-brand-primary font-caslon">Cobranza inteligente</span>
            <span className="text-brand-secondary">.</span>
          </h1>
          <p className="font-adobe text-black text-sm leading-relaxed">
            En la industria de autopistas, la cobranza B2B no es solo emitir una factura: es validar miles de
            tránsitos, gestionar flotas dinámicas y resolver disputas de pórticos. Sena centraliza y acelera
            tu ciclo de cuentas por cobrar.
          </p>
          <div className="flex flex-row items-start gap-2">
            <Button text="Agenda una demo" size="sm" className="text-xs" onClick={onRedirectHubspot} />
            <Button
              text="Ver cómo funciona"
              variant="primaryDarkOutlined"
              size="sm"
              className="text-xs"
              onClick={() => {
                const el = document.getElementById('auto-como-funciona')
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            />
          </div>
          <p className="text-slate-500 text-xs mt-1">
            Concesionarias viales y operadores de infraestructura ya confían en Sena.
          </p>
        </div>
      </div>
    </section>
  )
}
