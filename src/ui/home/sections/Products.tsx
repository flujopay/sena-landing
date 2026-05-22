'use client'
import { AssetImage } from '@/lib/utils/assets/image'
import Button from '@/ui/shared/Button'
import Image, { StaticImageData } from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

type ProductKey = 'autogestion' | 'recuperacion' | 'opera'

const ProductCard = ({
  label,
  title,
  description,
  cta,
  image,
  productKey,
  onCtaClick,
}: {
  label: string
  title: string
  description: string
  cta: string
  image: StaticImageData
  productKey: ProductKey
  onCtaClick: () => void
}) => (
  <div className="rounded-2xl overflow-hidden">
    <p className="font-bold text-xl text-left py-4">{label}</p>
    <div className="bg-brand-primary p-4 rounded-t-2xl">
      <div className="bg-white rounded-2xl h-40 flex items-center justify-center overflow-visible relative">
        {productKey === 'recuperacion' ? (
          <>
            <div className="w-[85%] h-full rounded-xl overflow-hidden">
              <Image src={AssetImage.home3} alt={title} className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-[80%] rounded-lg overflow-hidden shadow-xl border-2 border-white">
              <Image src={AssetImage.conciliatorNavbar} alt="Dashboard" className="w-full h-full object-cover" />
            </div>
          </>
        ) : (
          <Image src={image} alt={title} className="w-full h-full object-cover" />
        )}
      </div>
    </div>
    <div className="p-4 bg-white">
      <p className="text-black font-extrabold text-sm">{title}</p>
      <p className="text-slate-700 mt-2 text-sm leading-5">{description}</p>
      <Button text={cta} className="mt-4" size="sm" onClick={onCtaClick} />
    </div>
  </div>
)

export const Products = () => {
  const products = useMemo(
    () => [
      {
        key: 'autogestion' as const,
        label: 'Automatiza\ntu cobranza',
        title: 'Para el día a día de tu cobranza',
        description:
          'Organiza facturas, automatiza recordatorios y controla todo tu ciclo de cobranza desde un solo lugar.',
        cta: 'Agenda una demo',
        image: AssetImage.autogestion,
        onCtaClick: () => window.open('https://meetings.hubspot.com/francisco502', '_blank'),
      },
      {
        key: 'recuperacion' as const,
        label: 'Recupera\nlo que te deben',
        title: 'Recupera pagos con apoyo experto',
        description:
          'Combina tecnología y un equipo especializado para gestionar casos complejos y mejorar tu tasa de recuperación.',
        cta: 'Conoce más',
        image: AssetImage.recuperaGirl,
        onCtaClick: () => window.open('https://recupera.somossena.com', '_self'),
      },
      {
        key: 'opera' as const,
        label: 'Delega\ntu cobranza',
        title: 'Tu cobranza en manos expertas',
        description:
          'Agentes de IA y equipo humano gestionan tu cartera de principio a fin. Te enfocas en tu negocio mientras nosotros cobramos.',
        cta: 'Conoce Opera',
        image: AssetImage.autogestion,
        onCtaClick: () => window.open('https://opera.somossena.com', '_self'),
      },
    ],
    []
  )

  const searchParams = useSearchParams()
  const tabParam = searchParams.get('tab')

  const [activeKey, setActiveKey] = useState<ProductKey>(
    tabParam === 'recuperacion' ? 'recuperacion' : tabParam === 'opera' ? 'opera' : 'autogestion'
  )
  const active = products.find((p) => p.key === activeKey) ?? products[0]
  const activeIndex = products.findIndex((p) => p.key === activeKey)
  const segmentHeight = 100 / products.length

  useEffect(() => {
    if (tabParam === 'autogestion' || tabParam === 'recuperacion' || tabParam === 'opera') {
      setActiveKey(tabParam)
    }
  }, [tabParam])

  useEffect(() => {
    const handler = (e: Event) => {
      const tab = (e as CustomEvent).detail
      if (tab === 'autogestion' || tab === 'recuperacion' || tab === 'opera') {
        setActiveKey(tab)
      }
    }
    window.addEventListener('sena:product-tab', handler)
    return () => window.removeEventListener('sena:product-tab', handler)
  }, [])

  return (
    <section id="productos" className="max-w-[1280px] mx-auto pt-28">
      {/* Mobile Layout */}
      <div className="md:hidden bg-[#F7F7F7] px-4 py-10">
        <p className="text-left text-brand-primary-dark text-2xl sm:text-4xl font-extrabold tracking-wide mb-6">
          Nuestros
          <br />
          productos
        </p>
        <div className="flex flex-col gap-6 px-2">
          {products.map((p) => (
            <ProductCard
              key={p.key}
              label={p.label}
              title={p.title}
              description={p.description}
              cta={p.cta}
              image={p.image}
              productKey={p.key}
              onCtaClick={p.onCtaClick}
            />
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block bg-[#F7F7F7] rounded-3xl p-6 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col gap-6">
            <p className="text-left text-brand-primary-dark font-extrabold tracking-wide text-xl sm:text-4xl">
              Nuestros
              <br />
              productos
            </p>

            <div className="flex gap-6">
              <div className="relative w-1">
                <div className="absolute left-0 top-0 h-full w-1 rounded bg-slate-300" />
                <div
                  className="absolute left-0 w-1 rounded bg-brand-secondary transition-all duration-300"
                  style={{
                    height: `${segmentHeight}%`,
                    top: `${activeIndex * segmentHeight}%`,
                  }}
                />
              </div>

              <div className="flex flex-col gap-6">
                {products.map((p) => {
                  const isActive = p.key === activeKey
                  return (
                    <button
                      key={p.key}
                      type="button"
                      onClick={() => setActiveKey(p.key)}
                      className="text-left cursor-pointer"
                    >
                      <p className={isActive
                        ? 'text-black font-bold text-3xl leading-tight whitespace-pre-line'
                        : 'text-slate-400 font-bold text-3xl leading-tight whitespace-pre-line'
                      }>
                        {p.label}
                      </p>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-brand-primary p-6 md:p-8">
              {activeKey === 'recuperacion' ? (
                <div className="bg-white w-[80%] mx-auto rounded-xl h-48 md:h-56 flex items-center justify-center overflow-visible relative">
                  <div className="w-[160px] ml-16 h-full rounded-xl overflow-hidden">
                    <Image src={AssetImage.home3} alt={active.title} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="absolute bottom-4 -right-10 w-22 h-48 rounded-lg overflow-hidden shadow-xl border-2 border-white">
                    <Image src={AssetImage.conciliatorNavbar} alt="Dashboard" className="w-full h-full object-cover" />
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl h-48 md:h-56 flex items-center justify-center overflow-visible relative">
                  <Image src={active.image} alt={active.title} className="w-full h-full object-cover rounded-xl" />
                </div>
              )}
            </div>

            <div className="p-6 md:p-8 bg-slate-100">
              <p className="text-black font-extrabold">{active.title}</p>
              <p className="text-slate-700 mt-2 leading-5">{active.description}</p>
              <Button text={active.cta} className="mt-5" onClick={active.onCtaClick} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
