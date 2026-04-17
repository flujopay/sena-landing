import { AutopistasPage } from '@/ui/industrias/autopistas/AutopistasPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cobranza B2B para Autopistas y Concesiones Viales | Sena',
  description:
    'Plataforma de gestión de cuentas por cobrar B2B para concesionarias de autopistas. Conciliación de TAG, gestión de flotas y cobranza inteligente para infraestructura vial.',
  keywords:
    'cobranza autopistas B2B, conciliación TAG empresas, gestión de cobranza concesionarias, cobranza flotas peajes, recuperación cartera infraestructura vial, Sena',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.somossena.com/industrias/autopistas' },
  openGraph: {
    title: 'Cobranza B2B para Autopistas | Sena',
    description:
      'Rutas fluidas. Conciliación exacta. Cobranza inteligente. Sena transforma la cobranza B2B en concesiones de autopistas.',
    type: 'website',
    siteName: 'Sena',
    locale: 'es_PE',
    url: 'https://www.somossena.com/industrias/autopistas',
    images: ['https://somossena.com/sena-crm-lite.jpg'],
  },
}

const Autopistas = () => {
  return <AutopistasPage />
}

export default Autopistas
