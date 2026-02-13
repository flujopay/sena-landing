"use client";

import { Footer } from "@/ui/layout/Footer";
import { Header } from "@/ui/layout/Header";
import { BeautyBenefits } from "./sections/BeautyBenefits";
import { BeautyCTA } from "./sections/BeautyCTA";
import { BeautyHero } from "./sections/BeautyHero";
import { BeautyHowItWorks } from "./sections/BeautyHowItWorks";
import { BeautyProblem } from "./sections/BeautyProblem";
import { BeautySocialProof } from "./sections/BeautySocialProof";
import { BeautySolution } from "./sections/BeautySolution";

export const TechBeautyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="primary" />
      <div className="grow">
        <BeautyHero />
        <BeautyProblem />
        <BeautySolution />
        <BeautyBenefits />
        <BeautySocialProof />
        <BeautyHowItWorks />
        <BeautyCTA />
        <Footer />
      </div>
    </div>
  );
};
