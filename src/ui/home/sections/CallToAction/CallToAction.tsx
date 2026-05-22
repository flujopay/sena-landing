'use client'
import Script from 'next/script'

export const CallToAction = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-10 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: copy */}
        <div className="flex flex-col gap-6 lg:pt-8">
          <h2 className="text-brand-primary-dark font-canaro text-3xl md:text-5xl font-extrabold leading-tight">
            ¿Tu empresa creció y la cobranza{' '}
            <span className="text-brand-primary font-caslon">quedó atrás</span>
            <span className="text-brand-secondary font-caslon">?</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            30 minutos. Sin compromiso. Te mostramos exactamente qué está atrapado en tu cartera y cómo Sena lo resuelve.
          </p>
          <p className="text-slate-400 text-sm">
            También puedes escribirnos a{' '}
            <a href="mailto:hola@somossena.com" className="text-brand-primary underline font-medium">
              hola@somossena.com
            </a>
          </p>
        </div>

        {/* Right: HubSpot calendar embed */}
        <div className="w-full min-h-[500px]">
          <div
            className="meetings-iframe-container"
            data-src="https://meetings.hubspot.com/francisco502?embed=true"
          />
          <Script
            src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
            strategy="afterInteractive"
          />
        </div>
      </div>
    </section>
  )
}
