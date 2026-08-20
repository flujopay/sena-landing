import type { Metadata } from 'next'
import { RecuperaGraciasPage } from '@/ui/recupera/RecuperaGraciasPage'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

const Gracias = () => {
  return <RecuperaGraciasPage />
}

export default Gracias
