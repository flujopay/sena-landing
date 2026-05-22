import { AssetIcon } from '@/lib/utils/assets/icon'
import { Carousel } from '@/ui/shared/CardSlider'
import type { ReactNode } from 'react'
import { TitleDescripction } from '../../../shared/TitleDescripction'
import { FeatureCard, type FeatureCardProps } from './FeatureCard'

const Icon = ({ children }: { children: ReactNode }) => (
  <div className="w-10 h-10 rounded-full bg-brand-secondary-dark flex items-center justify-center">
    <div className="text-white">{children}</div>
  </div>
)

export const KeyFeatures = () => {
  const features: FeatureCardProps[] = [
    {
      title: '"¿Cuánto nos deben\nhoy?" En 10 segundos.',
      description: (
        <p>
          Dashboard en tiempo real con <span className="text-black font-bold">cartera total, aging y estado por cliente</span>.
          Sin planillas, sin llamadas al contador.
        </p>
      ),
      icon: (
        <Icon>
          <AssetIcon.monitoring width="24" height="24" color="white" />
        </Icon>
      ),
    },
    {
      title: 'La cobranza se hace\nsola, sin perseguir a nadie.',
      description: (
        <p>
          <span className="text-black font-bold">Flujos automáticos por etapa de mora</span> — WhatsApp, email y SMS —
          con el tono y el momento correctos para cada cliente.
        </p>
      ),
      icon: (
        <Icon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L14.2 7.8L20 10L14.2 12.2L12 18L9.8 12.2L4 10L9.8 7.8L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M19 14L19.8 16.2L22 17L19.8 17.8L19 20L18.2 17.8L16 17L18.2 16.2L19 14Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        </Icon>
      ),
    },
    {
      title: 'Sabés si un cliente\npuede pagar antes de darle crédito.',
      description: (
        <p>
          <span className="text-black font-bold">Análisis de riesgo de contraparte</span> integrado.
          Y si querés asegurar la cartera, también podemos.
        </p>
      ),
      icon: (
        <Icon>
          <AssetIcon.rings width="32" height="32" color="white" />
        </Icon>
      ),
    },
    {
      title: 'Ventas y Finanzas\ncon la misma información.',
      description: (
        <p>
          Sin bloqueos sin criterio. Sin reuniones de mediación.{' '}
          <span className="text-black font-bold">Visibilidad compartida</span> y financiamiento al deudor
          para destrabar la relación cuando hace falta.
        </p>
      ),
      icon: (
        <Icon>
          <AssetIcon.nodes width="24" height="24" color="white" />
        </Icon>
      ),
    },
    {
      title: 'La conciliación deja\nde consumir días.',
      description: (
        <p>
          <span className="text-black font-bold">Matching automático</span> entre pagos y facturas.
          Cierre de mes sin trabajo manual ni errores de cuadre.
        </p>
      ),
      icon: (
        <Icon>
          <AssetIcon.architecture width="24" height="24" color="white" />
        </Icon>
      ),
    },
    {
      title: 'Cuando hace falta,\nentra el equipo humano.',
      description: (
        <p>
          El <span className="text-black font-bold">equipo especializado de Recsa</span> gestiona los casos
          complejos — cuidando tu marca y tu relación con el cliente.
        </p>
      ),
      icon: (
        <Icon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12.5C9.93 12.5 8.25 10.82 8.25 8.75C8.25 6.68 9.93 5 12 5C14.07 5 15.75 6.68 15.75 8.75C15.75 10.82 14.07 12.5 12 12.5Z" stroke="currentColor" strokeWidth="1.8" />
            <path d="M6.5 19C6.5 15.96 8.96 13.5 12 13.5C15.04 13.5 17.5 15.96 17.5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </Icon>
      ),
    },
  ]

  return (
    <section className="py-12 mx-auto max-w-[1280px]">
      <div className="px-4 md:px-12 text-left">
        <TitleDescripction
          title="Cómo Sena"
          subtitle="resuelve cada dolor"
          description="Un sistema completo que convierte la cobranza de problema en proceso."
        />
      </div>

      <div className="mt-10">
        <div className="md:py-12">
          <div className="hidden md:block px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((f) => (
                <FeatureCard key={f.title} title={f.title} description={f.description} icon={f.icon} />
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <Carousel dots={false} infinite={false} speed={500} slidesToShow={2} slidesToScroll={1} initialSlide={0}
              responsive={[{ breakpoint: 640, settings: { slidesToShow: 1 } }]}>
              {features.map((f) => (
                <FeatureCard key={f.title} title={f.title} description={f.description} icon={f.icon} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
