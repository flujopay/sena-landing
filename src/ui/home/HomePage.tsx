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
    <div>
      <div className="bg-linear-to-bl from-orange-300 to-orange-500">
        <Header />
        <Hero />
      </div>
      <Clients />
      <Products />
      <KeyFeatures />
      <HowItWorks />
      <PricingPlans />
      <CallToAction />
    </div>
  );
};
