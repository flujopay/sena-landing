import type { Metadata } from 'next'
import { PlataformaGraciasPage } from '@/ui/plataforma/PlataformaGraciasPage'

export const metadata: Metadata = {
  title: 'Solicitud recibida | Sena Plataforma',
  robots: { index: false, follow: false },
}

const PlataformaGracias = () => {
  return <PlataformaGraciasPage />
}

export default PlataformaGracias
