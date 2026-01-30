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
    <div className="min-h-screen flex flex-col ">
      <div className="grow">
        <div className="bg-[#F9F9F9]">
          <div className="max-w-[1280px] mx-auto">
            <Header variant="primary" />
            <Hero />
          </div>
        </div>
        <Clients />
        <Products />
        <KeyFeatures />
        <HowItWorks />
        <PricingPlans />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
};
