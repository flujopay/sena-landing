import { Footer } from '@/ui/layout/Footer'
import { Header } from '@/ui/layout/Header'
import { BasesContent } from './sections/BasesContent'

export const BasesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="primary" />
      <BasesContent />
      <Footer />
    </div>
  )
}
