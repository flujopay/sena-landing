'use client'

import Button from '@/ui/shared/Button'

export const Hero = () => {
  const onContactClick = () => {
    window.open('https://meetings.hubspot.com/francisco502', '_blank')
  }

  const onHowItWorksClick = () => {
    const el = document.getElementById('como-funciona')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="flex flex-col mx-auto max-w-[1280px] px-4 md:px-10 py-10 md:py-16">
      {/* Desktop */}
      <div className="hidden md:flex flex-col gap-6 max-w-[780px]">
        <div className="flex flex-col gap-4">
          <h1 className="text-brand-primary-dark font-canaro text-6xl xl:text-7xl font-extrabold leading-tight">
            Tus facturas están emitidas.{' '}
            <span className="text-brand-primary">El dinero todavía no llegó.</span>
          </h1>
          <p className="font-adobe text-slate-600 text-xl max-w-[680px] leading-relaxed">
            Sena automatiza la cobranza B2B para empresas que venden a crédito —
            y convierte cartera en caja.
          </p>
        </div>

        <div className="flex flex-row items-center gap-3">
          <Button text="Habla con nosotros" size="md" className="text-xl" onClick={onContactClick} />
          <Button
            text="Ver cómo funciona"
            variant="primaryDarkOutlined"
            size="md"
            className="text-xl"
            onClick={onHowItWorksClick}
          />
        </div>

        <p className="text-slate-400 text-sm">
          Respaldados por{' '}
          <a className="font-bold text-brand-secondary underline" href="https://recsa.com/" target="_blank">
            Recsa
          </a>
          , con más de 40 años de experiencia en cobranza en Latinoamérica.
        </p>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden flex-col gap-5">
        <h1 className="text-brand-primary-dark font-canaro text-3xl font-extrabold leading-tight">
          Tus facturas están emitidas.{' '}
          <span className="text-brand-primary">El dinero todavía no llegó.</span>
        </h1>
        <p className="font-adobe text-slate-600 text-base leading-relaxed">
          Sena automatiza la cobranza B2B para empresas que venden a crédito —
          y convierte cartera en caja.
        </p>
        <div className="flex flex-row gap-2">
          <Button text="Habla con nosotros" size="sm" className="text-xs" onClick={onContactClick} />
          <Button
            text="Ver cómo funciona"
            variant="primaryDarkOutlined"
            size="sm"
            className="text-xs"
            onClick={onHowItWorksClick}
          />
        </div>
        <p className="text-slate-400 text-xs">
          Respaldados por{' '}
          <a className="font-bold text-brand-secondary underline" href="https://recsa.com/" target="_blank">
            Recsa
          </a>
          , 40+ años de experiencia en cobranza.
        </p>
      </div>
    </div>
  )
}
