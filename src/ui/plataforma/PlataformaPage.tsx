'use client'

import Button from '@/ui/shared/Button'
import { AssetImage } from '@/lib/utils/assets/image'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense, useEffect, useState } from 'react'
import { ArrowRight, CheckCircle, BarChart2, Zap, Eye } from 'lucide-react'
import { PlataformaContactForm } from './sections/PlataformaContactForm'
import { ProductsEcosystem } from '@/ui/shared/ProductsEcosystem'

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const form = document.getElementById('contacto')
    if (!form) return
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      threshold: 0,
    })
    observer.observe(form)
    return () => observer.disconnect()
  }, [])

  const scrollToForm = () => {
    const el = document.getElementById('contacto')
    if (!el) return
    window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 72, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-slate-200 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] md:hidden">
      <button
        onClick={scrollToForm}
        className="w-full flex items-center justify-center gap-2 bg-brand-primary text-white font-bold py-3.5 px-6 rounded-xl text-base active:scale-[0.98] transition-transform"
      >
        Agenda demo gratuito
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  )
}

export const PlataformaPage = () => {
  const scrollToForm = () => {
    const el = document.getElementById('contacto')
    if (!el) return
    window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 72, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9F9]">
      {/* Header minimal — solo logo + teléfono */}
      <header className="w-full bg-white border-b border-slate-100 px-4 py-3">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <Link href="/">
            <Image src={AssetImage.logoBlack} alt="Sena" className="h-7 w-auto" priority />
          </Link>
          <a
            href="tel:+56944489673"
            className="text-sm font-semibold text-brand-primary-dark hover:text-brand-primary transition-colors"
          >
            +56 9 4448 9673
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-[1280px] mx-auto px-4 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary-dark text-xs font-bold px-3 py-1.5 rounded-full mb-6">
              Software de cobranza B2B para empresas en Chile
            </div>

            <h1 className="font-canaro text-brand-primary-dark text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              Automatiza tu cobranza B2B.{' '}
              <span className="text-brand-primary">Visibilidad total de tu cartera.</span>
            </h1>

            <p className="text-slate-600 text-base md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              Gestiona cuentas por cobrar, envía recordatorios automáticos y consolida tu cartera sin
              reemplazar tu tech stack. Primer resultado en 30 días.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
              <Button
                text="Agenda demo gratuito"
                variant="secondaryFilled"
                size="lg"
                onClick={scrollToForm}
                rightIcon={<ArrowRight className="h-5 w-5" />}
                className="w-full sm:w-auto min-h-[48px]"
              />
              <Button
                text="Ver cómo funciona"
                variant="primaryInvertedFilled"
                size="lg"
                onClick={() => {
                  const el = document.getElementById('como-funciona')
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 72, behavior: 'smooth' })
                }}
                className="w-full sm:w-auto min-h-[48px] border border-slate-300"
              />
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-4 bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-brand-primary mb-1">30 días</div>
                <div className="text-slate-500 text-xs md:text-sm font-medium leading-tight">
                  Primer resultado
                </div>
              </div>
              <div className="text-center border-x border-slate-200">
                <div className="text-2xl md:text-3xl font-extrabold text-brand-primary mb-1">+85%</div>
                <div className="text-slate-500 text-xs md:text-sm font-medium leading-tight">
                  Tasa de recupero
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-brand-primary mb-1">0</div>
                <div className="text-slate-500 text-xs md:text-sm font-medium leading-tight">
                  Cambios a tu stack
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain points — agitación */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-[1280px] mx-auto px-4">
            <h2 className="text-brand-primary-dark text-2xl md:text-3xl font-extrabold text-center mb-2">
              ¿Te suena esto?
            </h2>
            <p className="text-slate-500 text-center mb-10">
              El dinero está. Solo que no está disponible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: <BarChart2 className="h-6 w-6 text-brand-primary" />,
                  title: 'Capital atrapado',
                  desc: 'Tienes cartera vencida de más de 60 días y no sabes exactamente cuánto ni de quién.',
                },
                {
                  icon: <Eye className="h-6 w-6 text-brand-primary" />,
                  title: 'Cobranza a ciegas',
                  desc: 'Tu equipo gestiona en Excel o Sheets. Nadie es el dueño del proceso y las cosas se pierden.',
                },
                {
                  icon: <Zap className="h-6 w-6 text-brand-primary" />,
                  title: 'Decisiones sin datos',
                  desc: 'No puedes saber qué clientes van a pagar, cuáles necesitan acción urgente ni tu flujo real.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="h-10 w-10 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-brand-primary-dark text-base mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="como-funciona" className="py-12 md:py-16">
          <div className="max-w-[1280px] mx-auto px-4">
            <h2 className="text-brand-primary-dark text-2xl md:text-3xl font-extrabold text-center mb-10">
              Cómo Sena resuelve cada dolor
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  step: '01',
                  title: 'Visibilidad total',
                  desc: 'Dashboard unificado de toda tu cartera. Sabes quién debe, cuánto y hace cuánto. En tiempo real.',
                },
                {
                  step: '02',
                  title: 'Cobranza automática',
                  desc: 'Recordatorios por WhatsApp, email y llamada. El sistema aprende qué canal funciona con cada cliente.',
                },
                {
                  step: '03',
                  title: 'Conciliación sin fricción',
                  desc: 'Se integra con tu ERP o facturador. Sin reemplazar nada. Funcional en días, no meses.',
                },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                  <div className="text-4xl font-extrabold text-brand-primary/20 mb-3">{item.step}</div>
                  <h3 className="font-bold text-brand-primary-dark text-base mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust signals */}
        <section className="bg-white py-10 border-y border-slate-100">
          <div className="max-w-[1280px] mx-auto px-4">
            <p className="text-center text-sm text-slate-400 font-medium mb-6">
              Respaldados por Recsa — 40 años de experiencia en cobranza en Chile y LATAM
            </p>
            <div className="flex flex-wrap justify-center gap-6 items-center">
              {[
                'Sin contrato de largo plazo',
                'Implementación en días',
                'Soporte en español',
                'Datos 100% en Chile',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-600 text-sm">
                  <CheckCircle className="h-4 w-4 text-brand-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact form — inline above fold */}
        <section id="contacto" className="py-12 md:py-20">
          <div className="max-w-[1280px] mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-brand-primary-dark text-2xl md:text-4xl font-extrabold mb-3">
                  Agenda tu demo de{' '}
                  <span className="text-brand-primary">30 minutos</span>
                </h2>
                <p className="text-slate-500">
                  Sin compromiso. Te mostramos cómo funciona con tu cartera real.
                </p>
              </div>
              <Suspense>
                <PlataformaContactForm />
              </Suspense>
            </div>
          </div>
        </section>
      </main>

      <ProductsEcosystem active="plataforma" />

      {/* Footer minimal */}
      <footer className="bg-white border-t border-slate-100 py-6 px-4">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <Link href="/">
            <Image src={AssetImage.logoBlack} alt="Sena" className="h-5 w-auto opacity-60" loading="lazy" />
          </Link>
          <div className="flex gap-4">
            <Link href="/term" className="hover:text-slate-600 transition-colors">
              Términos
            </Link>
            <Link href="/privacy" className="hover:text-slate-600 transition-colors">
              Privacidad
            </Link>
            <Link href="/" className="hover:text-slate-600 transition-colors">
              somossena.com
            </Link>
          </div>
        </div>
      </footer>

      <StickyMobileCTA />
    </div>
  )
}
