import { MaquinariasPage } from '@/ui/industrias/maquinarias/MaquinariasPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cobranza B2B para Maquinaria Pesada y Minería | Sena',
  description:
    'Plataforma de gestión de cuentas por cobrar B2B para empresas de maquinaria pesada y minería. Recupera facturas de alto valor sin dañar contratos de largo plazo.',
  keywords:
    'cobranza para empresas mineras, software cuentas por cobrar maquinaria pesada, gestión de cobranza B2B industrial, recuperación de cartera alto valor, automatización cobranza proveedores minería, Sena',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.somossena.com/industrias/maquinarias' },
  openGraph: {
    title: 'Cobranza B2B para Maquinaria y Minería | Sena',
    description:
      'Facturas grandes, cobranza a la altura. Sena automatiza tu ciclo de cuentas por cobrar B2B en maquinaria pesada y minería.',
    type: 'website',
    siteName: 'Sena',
    locale: 'es_PE',
    url: 'https://www.somossena.com/industrias/maquinarias',
    images: ['https://somossena.com/sena-crm-lite.jpg'],
  },
}

const Maquinarias = () => {
  return <MaquinariasPage />
}

export default Maquinarias
