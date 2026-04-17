'use client'

import { Footer } from '@/ui/layout/Footer'
import { Header } from '@/ui/layout/Header'
import { InmobiliariasBenefits } from './sections/InmobiliariasBenefits'
import { InmobiliariasCTA } from './sections/InmobiliariasCTA'
import { InmobiliariasHero } from './sections/InmobiliariasHero'
import { InmobiliariasHowItWorks } from './sections/InmobiliariasHowItWorks'
import { InmobiliariasProblem } from './sections/InmobiliariasProblem'
import { InmobiliariasSocialProof } from './sections/InmobiliariasSocialProof'
import { InmobiliariasSolution } from './sections/InmobiliariasSolution'
import { InmobiliariasWhySena } from './sections/InmobiliariasWhySena'

export const InmobiliariasPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="primary" />
      <div className="grow">
        <InmobiliariasHero />
        <InmobiliariasProblem />
        <InmobiliariasSolution />
        <InmobiliariasBenefits />
        <InmobiliariasSocialProof />
        <InmobiliariasHowItWorks />
        <InmobiliariasWhySena />
        <InmobiliariasCTA />
        <Footer />
      </div>
    </div>
  )
}
