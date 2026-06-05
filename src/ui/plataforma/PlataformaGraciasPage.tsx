'use client'

import { AssetImage } from '@/lib/utils/assets/image'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
    dataLayer?: Object[]
  }
}

export const PlataformaGraciasPage = () => {
  const router = useRouter()

  useEffect(() => {
    if (!window.dataLayer) window.dataLayer = []
    window.dataLayer.push({ event: 'conversion_event_signup_2', origin: 'plataforma' })
    if (window.gtag) {
      window.gtag('event', 'completar_formulario', { product: 'plataforma' })
      window.gtag('event', 'conversion', { send_to: 'AW-17962976949/JNP9CMq42ZgcELWNtfVC' })
    }
    if (window.fbq) window.fbq('track', 'Lead', { content_name: 'plataforma' })
  }, [])

  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col">
      <div className="w-full py-6 flex justify-center">
        <button onClick={() => router.push('/')} className="cursor-pointer">
          <Image src={AssetImage.logoBlack} alt="Sena" className="w-36" />
        </button>
      </div>

      <div className="flex-1 flex items-start justify-center px-4 pb-16">
        <div className="w-full max-w-2xl">
          {/* Success card */}
          <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden mb-6">
            <div className="h-1.5 bg-linear-to-r from-brand-primary via-brand-primary to-brand-secondary" />
            <div className="px-8 pt-8 pb-6 md:px-12 text-center">
              <div className="flex justify-center mb-5">
                <div className="w-14 h-14 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <h1 className="font-canaro text-brand-primary-dark text-2xl md:text-3xl font-extrabold leading-tight mb-2">
                ¡Recibimos tu solicitud!
              </h1>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-1">
                Nuestro equipo te contactará pronto.
              </p>
              <p className="text-brand-primary-dark text-sm md:text-base font-bold leading-relaxed mb-6">
                Si prefieres avanzar ahora, agenda tu demo directamente:
              </p>
            </div>
          </div>

          {/* HubSpot inline calendar */}
          <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden mb-6">
            <div className="px-4 pt-6 pb-2 text-center">
              <p className="text-xs text-slate-400 font-medium mb-4">Agenda tu demo de 30 minutos</p>
            </div>
            <div
              className="meetings-iframe-container w-full"
              style={{ minHeight: 620 }}
              data-src="https://meetings.hubspot.com/francisco502?embed=true"
            />
          </div>

          {/* Fallback link */}
          <div className="text-center mb-8">
            <Link
              href="https://meetings.hubspot.com/francisco502"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary text-sm font-semibold hover:underline"
            >
              Abrir calendario en nueva pestaña →
            </Link>
          </div>

          {/* Footer */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-6 text-slate-400 text-xs">
              <span>Sin compromiso</span>
              <span>·</span>
              <span>30 min</span>
              <span>·</span>
              <span>Equipo experto</span>
            </div>
            <button
              onClick={() => router.push('/plataforma')}
              className="text-brand-primary text-sm font-semibold hover:underline cursor-pointer flex items-center gap-1"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Volver a la landing
            </button>
            <p className="text-slate-300 text-xs mt-2">
              Sena — <span className="font-caslon">El arte de cobrar bien</span>
            </p>
          </div>
        </div>
      </div>

      <Script
        src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
        strategy="lazyOnload"
      />
    </div>
  )
}
