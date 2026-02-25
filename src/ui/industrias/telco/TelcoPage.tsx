"use client";

import { Footer } from "@/ui/layout/Footer";
import { Header } from "@/ui/layout/Header";
import { TelcoBenefits } from "./sections/TelcoBenefits";
import { TelcoCTA } from "./sections/TelcoCTA";
import { TelcoHero } from "./sections/TelcoHero";
import { TelcoHowItWorks } from "./sections/TelcoHowItWorks";
import { TelcoProblem } from "./sections/TelcoProblem";
import { TelcoSocialProof } from "./sections/TelcoSocialProof";
import { TelcoSolution } from "./sections/TelcoSolution";
import { TelcoWhySena } from "./sections/TelcoWhySena";

export const TelcoPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="primary" />
      <div className="grow">
        <TelcoHero />
        <TelcoProblem />
        <TelcoSolution />
        <TelcoBenefits />
        <TelcoSocialProof />
        <TelcoHowItWorks />
        <TelcoWhySena />
        <TelcoCTA />
        <Footer />
      </div>
    </div>
  );
};
