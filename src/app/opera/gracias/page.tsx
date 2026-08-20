import type { Metadata } from 'next'
import { OperaGraciasPage } from '@/ui/opera/OperaGraciasPage'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

const Gracias = () => {
  return <OperaGraciasPage />
}

export default Gracias
