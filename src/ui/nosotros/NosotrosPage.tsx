import { Footer } from '@/ui/layout/Footer'
import { Header } from '@/ui/layout/Header'
import { Hero } from './sections/Hero'
import { OurInspiration } from './sections/OurInspiration'
import { OurTeamRecsa } from './sections/OurTeamRecsa'
import { SenaRecovery } from './sections/SenaRecovery'

export const NosotrosPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="primary" />
      <div className="grow">
        <div className="bg-[#F9F9F9]">
          <div className="max-w-[1280px] mx-auto">
            <Hero />
          </div>
        </div>
        <OurInspiration />
        <OurTeamRecsa />
        <SenaRecovery />
      </div>
      <Footer />
    </div>
  )
}
