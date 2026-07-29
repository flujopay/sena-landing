import type { Metadata } from 'next'
import { BasesPage } from '@/ui/bases-concurso-fintech-2026/BasesPage'

export const metadata: Metadata = {
  title: 'Bases del Concurso · Fintech Chile Forum 2026 · Sena',
  description:
    'Bases y condiciones del sorteo realizado por Sena durante el Fintech Chile Forum 2026. Premio: Amazon Echo Show 5 (3.ª generación).',
  robots: { index: false, follow: false },
}

const Page = () => {
  return <BasesPage />
}

export default Page
