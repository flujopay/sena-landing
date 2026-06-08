'use client'

import { AssetImage } from '@/lib/utils/assets/image'
import Button from '@/ui/shared/Button'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense, useRef } from 'react'
import { OperaContactForm } from './sections/OperaContactForm'
import { ArrowRight, CheckCircle, Users, Clock, BarChart2 } from 'lucide-react'

export const OperaPage = () => {
  const formRef = useRef<HTMLDivElement>(null)

  const scrollToForm = () => {
    if (formRef.current) {
      window.scrollTo({ top: formRef.current.getBoundingClientRect().top + window.pageYOffset - 72, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9F9]">
      {/* Header */}
      <header className="w-full bg-white border-b border-slate-100 px-4 py-3">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <Link href="/">
            <Image src={AssetImage.logoBlack} alt="Sena" className="h-7 w-auto" priority />
          </Link>
          <a
            href="tel:+56944489673"
            className="hidden md:block text-sm font-semibold text-brand-primary-dark hover:text-brand-primary transition-colors"
          >
            +56 9 4448 9673
          </a>
          <button
            onClick={scrollToForm}
            className="md:hidden flex items-center gap-1.5 bg-brand-primary text-white text-sm font-bold px-4 py-2 rounded-lg active:scale-[0.97] transition-transform"
          >
            Solicitar propuesta
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-[1280px] mx-auto px-4 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary-dark text-xs font-bold px-3 py-1.5 rounded-full mb-6">
              Servicio de cobranza B2B operado por Sena y Recsa
            </div>

            <h1 className="font-canaro text-brand-primary-dark text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              La cobranza de tu empresa,{' '}
              <span className="text-brand-primary">operada por expertos.</span>
            </h1>

            <p className="text-slate-600 text-base md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              No tienes equipo de cobranza. El nuestro opera por ti: gestión, seguimiento y resultados.
              Tú solo ves los números.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
              <Button
                text="Solicitar propuesta gratuita"
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

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-brand-primary mb-1">+85%</div>
                <div className="text-slate-500 text-xs md:text-sm font-medium leading-tight">Tasa de recupero</div>
              </div>
              <div className="text-center border-x border-slate-200">
                <div className="text-2xl md:text-3xl font-extrabold text-brand-primary mb-1">0 hs</div>
                <div className="text-slate-500 text-xs md:text-sm font-medium leading-tight">Tu equipo en cobranza</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-brand-primary mb-1">30 días</div>
                <div className="text-slate-500 text-xs md:text-sm font-medium leading-tight">Primer resultado</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-[1280px] mx-auto px-4">
            <h2 className="text-brand-primary-dark text-2xl md:text-3xl font-extrabold text-center mb-2">
              ¿Te suena esto?
            </h2>
            <p className="text-slate-500 text-center mb-10">El dinero está. Solo que nadie lo está cobrando.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: <Users className="h-6 w-6 text-brand-primary" />,
                  title: 'Sin equipo dedicado',
                  desc: 'La cobranza la hace el mismo que vende, o el mismo dueño. Nadie es el responsable y las facturas se acumulan.',
                },
                {
                  icon: <Clock className="h-6 w-6 text-brand-primary" />,
                  title: 'Cobranza reactiva',
                  desc: 'Esperas que te paguen. No gestionas, no persigues, no tienes un proceso. El tiempo pasa y la cartera crece.',
                },
                {
                  icon: <BarChart2 className="h-6 w-6 text-brand-primary" />,
                  title: 'Sin tiempo para crecer',
                  desc: 'Cada hora persiguiendo una factura es una hora que no estás vendiendo ni creciendo tu negocio.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="h-10 w-10 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <p className="font-bold text-brand-primary-dark text-base mb-2">{item.title}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section id="como-funciona" className="py-12 md:py-16 bg-[#F9F9F9]">
          <div className="max-w-[1280px] mx-auto px-4">
            <h2 className="text-brand-primary-dark text-2xl md:text-3xl font-extrabold text-center mb-2">
              Cómo Opera trabaja por ti
            </h2>
            <p className="text-slate-500 text-center mb-10">Tres pasos. Sin cambiar tu tech stack.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  step: '01',
                  title: 'Conectamos tu cartera',
                  desc: 'En menos de una semana integramos tu facturador o ERP. Toda tu cartera queda visible en un solo lugar.',
                },
                {
                  step: '02',
                  title: 'Operamos la cobranza',
                  desc: 'Secuencias automáticas por WhatsApp y email, más el equipo Recsa para los casos que requieren gestión humana.',
                },
                {
                  step: '03',
                  title: 'Ves los resultados',
                  desc: 'Dashboard en tiempo real y reportes semanales. Tú decides — nosotros operamos.',
                },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <div className="text-brand-primary font-extrabold text-4xl mb-4 opacity-20">{item.step}</div>
                  <p className="font-bold text-brand-primary-dark text-base mb-2">{item.title}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust — Recsa */}
        <section className="bg-white py-10 border-y border-slate-100">
          <div className="max-w-[1280px] mx-auto px-4">
            <div className="flex flex-col items-center gap-5">
              <div className="flex items-center gap-3">
                <Image src={AssetImage.byRecsa} alt="Respaldado por Recsa" className="h-8 w-auto" loading="lazy" />
                <span className="text-slate-500 text-sm">40 años de experiencia en cobranza en Chile y LATAM</span>
              </div>
              <div className="flex flex-wrap justify-center gap-5">
                {[
                  'Sin contrato de largo plazo',
                  'Setup en menos de una semana',
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
          </div>
        </section>

        {/* Form */}
        <section id="contacto" ref={formRef} className="py-12 md:py-20">
          <div className="max-w-[1280px] mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-brand-primary-dark text-2xl md:text-4xl font-extrabold mb-3">
                  Empieza en{' '}
                  <span className="text-brand-primary">30 días.</span>
                </h2>
                <p className="text-slate-500">
                  Sin compromiso. Te mostramos cómo funciona con tu cartera real.
                </p>
              </div>
              <Suspense>
                <OperaContactForm />
              </Suspense>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-6 px-4">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <Link href="/">
            <Image src={AssetImage.logoBlack} alt="Sena" className="h-5 w-auto opacity-60" loading="lazy" />
          </Link>
          <div className="flex gap-4">
            <Link href="/term" className="hover:text-slate-600 transition-colors">Términos</Link>
            <Link href="/privacy" className="hover:text-slate-600 transition-colors">Privacidad</Link>
          </div>
          <span>© {new Date().getFullYear()} Sena. Todos los derechos reservados.</span>
        </div>
      </footer>
    </div>
  )
}
