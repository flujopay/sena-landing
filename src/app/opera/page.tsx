import type { Metadata } from 'next'
import { OperaPage } from '@/ui/opera/OperaPage'

export const metadata: Metadata = {
  title: 'Opera — Cobranza B2B operada por expertos | Sena',
  description:
    'Tu empresa no tiene equipo de cobranza. El nuestro opera por ti: gestión, seguimiento y resultados. Sin contrato de largo plazo. Primer resultado en 30 días.',
  keywords:
    'servicio cobranza b2b, cobranza delegada chile, externalizar cobranza, equipo cobranza empresas, opera sena cobranza',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.somossena.com/opera' },
  openGraph: {
    title: 'Opera — Cobranza B2B operada por expertos | Sena',
    description: 'Tu empresa no tiene equipo de cobranza. El nuestro opera por ti.',
    url: 'https://www.somossena.com/opera',
    type: 'website',
    images: ['https://somossena.com/sena-crm-lite.jpg'],
    siteName: 'Sena',
    locale: 'es_CL',
  },
}

const Page = () => <OperaPage />

export default Page
