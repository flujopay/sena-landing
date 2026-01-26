import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { Clients } from "./sections/Clients";
import { Hero } from "./sections/Hero";
import { HowItWorks } from "./sections/HowItWorks";
import { KeyFeatures } from "./sections/KeyFeatures/KeyFeatures";
import { Products } from "./sections/Products";

export const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="bg-linear-to-bl from-orange-300 to-orange-500">
          <Header />
          <Hero />
        </div>
        <Clients />
        <Products />
        <KeyFeatures />
        <HowItWorks />
      </div>
      <Footer />
    </div>
  );
};
