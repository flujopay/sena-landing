import Whatsapp from "../shared/WhatsApp";
import { RecuperaFooter } from "./layout/RecuperaFooter";
import { RecuperaHeader } from "./layout/RecuperaHeader";
import { ContactSection } from "./sections/ContactSection";
import { Credibility } from "./sections/Credibility";
import { FAQ } from "./sections/FAQ";
import { FinalCTA } from "./sections/FinalCTA";
import { Hero } from "./sections/Hero";
import { HowItWorks } from "./sections/HowItWorks";
import { PricingModel } from "./sections/PricingModel";
import { Testimonials } from "./sections/Testimonials";
import { UseCases } from "./sections/UseCases";

export const RecuperaPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <RecuperaHeader />
      <div className="grow">
        <Hero />
        <HowItWorks />
        <PricingModel />
        <Credibility />
        <UseCases />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <ContactSection />
      </div>
      <RecuperaFooter />
      <Whatsapp
        message="Hola, quiero información sobre Recupera para gestionar mi cartera vencida."
        animated
      />
    </div>
  );
};
