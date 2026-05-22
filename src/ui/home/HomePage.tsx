'use client'

import { useEffect } from 'react'
import { Footer } from '../layout/Footer'
import { Header } from '../layout/Header'
import { CallToAction } from './sections/CallToAction/CallToAction'
import { Clients } from './sections/Clients'
import { Hero } from './sections/Hero'
import { HowItWorks } from './sections/HowItWorks'
import { KeyFeatures } from './sections/KeyFeatures/KeyFeatures'
import { PricingPlans } from './sections/PricingPlans/PricingPlans'
import { Problem } from './sections/Problem'
import { Products } from './sections/Products'

export const HomePage = () => {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const sectionId = hash.replace('#', '')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="primary" />
      <div className="grow">
        <div className="bg-[#F9F9F9]">
          <div className="max-w-[1280px] mx-auto">
            <Hero />
          </div>
        </div>
        <Clients />
        <Problem />
        <Products />
        <KeyFeatures />
        <HowItWorks />
        <PricingPlans />
        <CallToAction />
        <Footer />
      </div>
    </div>
  )
}
