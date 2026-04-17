import { Footer } from '@/ui/layout/Footer'
import { Header } from '@/ui/layout/Header'
import { ContactForm } from './sections/ContactForm'
import { MainPhrase } from './sections/MainPhrase'

export const ContactanosPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="primary" />
      <div className="grow">
        <div className="bg-white">
          <ContactForm />
          <MainPhrase />
        </div>
      </div>
      <Footer />
    </div>
  )
}
