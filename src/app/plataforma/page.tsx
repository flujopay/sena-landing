import type { Metadata } from 'next'
import { PlataformaPage } from '@/ui/plataforma/PlataformaPage'

export const metadata: Metadata = {
  title: 'Software de Cobranza B2B para Empresas en Chile | Sena Plataforma',
  description:
    'Automatiza tu cobranza B2B con Sena. Visibilidad total de tu cartera, recordatorios automáticos y conciliación sin reemplazar tu tech stack. Agenda demo gratis.',
  keywords:
    'software cobranza b2b, plataforma cobranza chile, automatizar cobranza empresas, cuentas por cobrar b2b, gestion cartera vencida, crm cobranza chile',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.somossena.com/plataforma' },
  openGraph: {
    title: 'Software de Cobranza B2B para Empresas en Chile | Sena',
    description:
      'Automatiza tu cobranza B2B. Visibilidad total, recordatorios automáticos y conciliación sin cambiar tu stack.',
    url: 'https://www.somossena.com/plataforma',
    type: 'website',
    images: ['https://somossena.com/sena-crm-lite.jpg'],
    siteName: 'Sena',
    locale: 'es_CL',
  },
}

const Page = () => <PlataformaPage />

export default Page
