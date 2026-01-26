import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { CallToAction } from "./sections/CallToAction/CallToAction";
import { Clients } from "./sections/Clients";
import { Hero } from "./sections/Hero";
import { HowItWorks } from "./sections/HowItWorks";
import { KeyFeatures } from "./sections/KeyFeatures/KeyFeatures";
import { PricingPlans } from "./sections/PricingPlans/PricingPlans";
import { Products } from "./sections/Products";

export const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grow">
        <div className="bg-linear-to-bl from-orange-300 to-orange-500">
          <Header />
          <Hero />
        </div>
        <Clients />
        <Products />
        <KeyFeatures />
        <HowItWorks />
      </div>
      <Clients />
      <Products />
      <KeyFeatures />
      <HowItWorks />
      <PricingPlans />
      <CallToAction />
      <Footer />
    </div>
  );
};
