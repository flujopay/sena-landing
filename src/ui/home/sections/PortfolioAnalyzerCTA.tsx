'use client'

import { useModalStore } from '@/lib/store/modalStore'
import { Button } from '@/ui/shared/Button'
import { PortfolioAnalyzerModal } from '@/ui/shared/PortfolioAnalyzer'

export function PortfolioAnalyzerCTA() {
  const { showModal } = useModalStore()

  function openAnalyzer() {
    showModal({
      content: <PortfolioAnalyzerModal />,
      width: '560px',
      showHeader: false,
      closeOnOutsideClick: true,
    })
  }

  return (
    <section className="bg-surface-blue-soft py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary mb-4">
            Análisis gratuito
          </span>
          <h2 className="font-canaro font-extrabold text-3xl md:text-4xl text-brand-primary-dark leading-tight mb-4">
            ¿Cuánto dinero está perdiendo tu empresa ahora mismo
            <span className="text-brand-secondary font-caslon">.</span>
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mb-8">
            Las facturas vencidas pierden valor cada día que pasan sin gestión activa. En 2 minutos calculamos
            cuánto puedes recuperar — y cuánto perderás si no actúas hoy.
          </p>
          <Button
            text="Analiza tu cartera ahora y deja de perder dinero →"
            variant="secondaryFilled"
            size="lg"
            onClick={openAnalyzer}
          />
          <p className="text-xs text-text-secondary mt-3">Sin compromisos. Sin tarjeta de crédito.</p>
        </div>
      </div>
    </section>
  )
}
