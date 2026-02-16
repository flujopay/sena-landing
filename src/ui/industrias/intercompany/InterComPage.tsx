"use client";

import { Footer } from "@/ui/layout/Footer";
import { Header } from "@/ui/layout/Header";
import { IntercomBenefits } from "./sections/IntercomBenefits";
import { IntercomCTA } from "./sections/IntercomCTA";
import { IntercomHero } from "./sections/IntercomHero";
import { IntercomHowItWorks } from "./sections/IntercomHowItWorks";
import { IntercomProblem } from "./sections/IntercomProblem";
import { IntercomSocialProof } from "./sections/IntercomSocialProof";
import { IntercomSolution } from "./sections/IntercomSolution";
import { IntercomWhySena } from "./sections/IntercomWhySena";

export const InterComPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="primary" />
      <div className="grow">
        <IntercomHero />
        <IntercomProblem />
        <IntercomSolution />
        <IntercomBenefits />
        <IntercomSocialProof />
        <IntercomHowItWorks />
        <IntercomWhySena />
        <IntercomCTA />
        <Footer />
      </div>
    </div>
  );
};
