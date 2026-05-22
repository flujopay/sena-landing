import { getCountriesServer } from '@/lib/services/countryService.server'
import { getIpInfoServer } from '@/lib/services/ipConfigService.server'
import { ModalRenderer } from '@/ui/shared/ModalRender'
import { Toast } from '@/ui/shared/Toast'
import NinoChatInit from '@/ui/shared/NinoChatInit'
import Whatsapp from '@/ui/shared/WhatsApp'
import type { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'
import { Suspense } from 'react'
import { adobeCleanFont, canaroFont, caslonFont } from './fonts'
import './globals.css'
import Providers from './providers'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Sena — Cobranza B2B: automatiza el cobro de facturas y mejora tu flujo de caja',
  description:
    'Sena automatiza la cobranza B2B para empresas que venden a crédito. Convierte cartera en caja, reduce incobrables y elimina el Excel. Respaldados por Recsa.',
  keywords:
    'como cobrar facturas impagas, mejorar flujo de caja empresa, software cobranza B2B, automatizar cobranza empresa, sistema cobranza facturas, reducir incobrables empresa, cobranza B2B Chile, CRM cobranza empresarial',
  authors: [{ name: 'Sena' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Sena — Cobranza B2B: automatiza el cobro de facturas y mejora tu flujo de caja',
    description:
      'Sena automatiza la cobranza B2B para empresas que venden a crédito. Convierte cartera en caja, reduce incobrables y elimina el Excel.',
    type: 'website',
    url: 'https://somossena.com',
    images: ['https://somossena.com/sena-crm-lite.jpg'],
    siteName: 'Sena',
    locale: 'es_CL',
  },
  other: {
    'facebook-domain-verification': 'tyjmxihsgkrx666ql4rwmnhsftl6hv',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [ipInfo, countries] = await Promise.all([getIpInfoServer(), getCountriesServer()])
  const country = ipInfo?.country || null

  return (
    <Providers country={country} countries={countries}>
      <html lang="es" dir="ltr">
        <GoogleTagManager gtmId="GTM-5W7F9MSP" />
        <head />
        <body
          className={`${canaroFont.variable} ${adobeCleanFont.variable} ${caslonFont.variable} antialiased font-adobe`}
        >
          {/* Deshabilitar debugger statements */}
          <Script id="disable-debugger" strategy="beforeInteractive">
            {`
              (function() {
                  const originalDebugger = window.debugger;
                  window.debugger = function() {
                      return;
                  };
              })();
            `}
          </Script>
          <Suspense>{children}</Suspense>
          <ModalRenderer />
          <Toast />
          <Whatsapp message="Hola, vi su web y quiero saber más sobre Sena y cómo funciona." animated />
          {/* Nino Chat — Landing widget */}
          <NinoChatInit />
        </body>
      </html>
    </Providers>
  )
}
