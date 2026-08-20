import type { Metadata } from 'next'
import { RecuperaPage } from '@/ui/recupera/RecuperaPage'

export const metadata: Metadata = {
  title: 'Recupera tu Cartera Vencida — Pagas Solo si Recuperamos | Sena',
  description:
    'Empresa de cobranza B2B con publicación DICOM en Chile. Sin costo fijo, sin riesgo. Modelo 100% contingente: pagas solo si recuperamos tu dinero.',
  keywords:
    'recuperar cartera vencida, cobranza contingente, publicacion dicom chile, empresa de cobranza b2b, recuperar facturas impagas',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.somossena.com/recupera' },
  openGraph: {
    title: 'Recupera tu Cartera Vencida — Pagas Solo si Recuperamos | Sena',
    description:
      'Cobranza B2B con publicación DICOM en Chile. Sin costo fijo, sin riesgo. Pagas solo si recuperamos.',
    url: 'https://www.somossena.com/recupera',
    type: 'website',
    images: ['https://somossena.com/sena-crm-lite.jpg'],
    siteName: 'Sena',
    locale: 'es_CL',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Sena Recupera',
      description:
        'Servicio de cobranza B2B contingente con publicación DICOM en Chile. Recuperación de cartera vencida sin costo fijo.',
      url: 'https://www.somossena.com/recupera',
      areaServed: 'CL',
      provider: { '@type': 'Organization', name: 'Sena', url: 'https://www.somossena.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cuánto toma ver resultados?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Primeros contactos en 48-72h. Acuerdos típicamente en 2 semanas.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué pasa si no recuperan nada?',
          acceptedAnswer: { '@type': 'Answer', text: 'No pagas nada. Modelo 100% contingente.' },
        },
        {
          '@type': 'Question',
          name: '¿Trabajan solo cartera vencida?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, cartera +60 días vencida. Para cobranza preventiva, usa la plataforma Sena.',
          },
        },
        {
          '@type': 'Question',
          name: '¿En qué países operan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '15 países LATAM: Chile, Perú, Colombia, México, Argentina, Brasil, y más.',
          },
        },
      ],
    },
  ],
}

const Page = () => (
  <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
    <RecuperaPage />
  </>
)

export default Page
