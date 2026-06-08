import type { Metadata } from 'next'
import { OperaGraciasPage } from '@/ui/opera/OperaGraciasPage'

export const metadata: Metadata = {
  title: 'Solicitud recibida | Sena Opera',
  robots: { index: false, follow: false },
}

const OperaGracias = () => {
  return <OperaGraciasPage />
}

export default OperaGracias
