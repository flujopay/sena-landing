import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { CallToAction } from "./sections/CallToAction/CallToAction";
import { Clients } from "./sections/Clients";
import { Hero } from "./sections/Hero";
import { KeyFeatures } from "./sections/KeyFeatures/KeyFeatures";
import { PricingPlans } from "./sections/PricingPlans/PricingPlans";
import { Products } from "./sections/Products";

export const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <div className="grow">
        <div className="bg-linear-to-bl from-orange-300 to-orange-500">
          <div className="max-w-[1440px] mx-auto">
            <Header variant="primary" />
            <Hero />
          </div>
        </div>
        <Clients />
        <Products />
        <KeyFeatures />
        <PricingPlans />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
};
