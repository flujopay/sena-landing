'use client'

import Button from '@/ui/shared/Button'

export const FamilyHero = () => {
  const onRedirectHubspot = () => {
    window.open('https://meetings.hubspot.com/francisco502', '_blank')
  }

  return (
    <section className="bg-[#F9F9F9]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-16 md:py-24">
        <div className="hidden md:flex flex-col gap-6 max-w-3xl">
          <div>
            <span className="inline-block bg-brand-secondary/10 text-brand-secondary font-bold text-sm px-4 py-1.5 rounded-full mb-6">
              Family Office
            </span>
            <h1 className="text-brand-primary-dark font-canaro text-5xl lg:text-7xl font-extrabold leading-tight">
              Patrimonio diversificado. <br />
              <span className="text-brand-primary font-caslon">Control absoluto</span>
              <span className="text-brand-secondary">.</span>
            </h1>
          </div>
          <p className="font-adobe text-black text-xl max-w-2xl leading-relaxed">
            En un Family Office, el desafío no es solo administrar inversiones: es consolidar flujos de
            múltiples sociedades, controlar cuentas por cobrar dispersas, y asegurar que cada obligación se
            cumpla con precisión. <strong>Sena centraliza la cobranza y el seguimiento financiero</strong>{' '}
            para que el patrimonio familiar mantenga liquidez, orden y visibilidad en tiempo real.
          </p>
          <div className="flex flex-row items-start gap-3 mt-2">
            <Button text="Agenda una demo" size="lg" className="text-lg" onClick={onRedirectHubspot} />
            <Button
              text="Ver cómo funciona"
              variant="primaryDarkOutlined"
              size="lg"
              className="text-lg"
              onClick={() => {
                const el = document.getElementById('family-como-funciona')
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            />
          </div>
          <p className="text-slate-500 text-sm mt-2">
            Holdings y administradores patrimoniales ya confían en Sena.
          </p>
        </div>
        <div className="flex md:hidden flex-col gap-4">
          <span className="inline-block bg-brand-secondary/10 text-brand-secondary font-bold text-xs px-3 py-1 rounded-full w-fit">
            Family Office
          </span>
          <h1 className="text-brand-primary-dark font-canaro text-3xl font-extrabold leading-tight">
            Patrimonio diversificado. <span className="text-brand-primary font-caslon">Control absoluto</span>
            <span className="text-brand-secondary">.</span>
          </h1>
          <p className="font-adobe text-black text-sm leading-relaxed">
            En un Family Office, el desafío no es solo administrar inversiones: es consolidar flujos de
            múltiples sociedades y controlar cuentas por cobrar dispersas.{' '}
            <strong>Sena centraliza la cobranza</strong> para que el patrimonio familiar mantenga liquidez y
            visibilidad en tiempo real.
          </p>
          <div className="flex flex-row items-start gap-2">
            <Button text="Agenda una demo" size="sm" className="text-xs" onClick={onRedirectHubspot} />
            <Button
              text="Ver cómo funciona"
              variant="primaryDarkOutlined"
              size="sm"
              className="text-xs"
              onClick={() => {
                const el = document.getElementById('family-como-funciona')
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            />
          </div>
          <p className="text-slate-500 text-xs mt-1">
            Holdings y administradores patrimoniales ya confían en Sena.
          </p>
        </div>
      </div>
    </section>
  )
}
