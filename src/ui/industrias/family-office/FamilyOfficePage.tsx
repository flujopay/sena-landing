"use client";

import { Footer } from "@/ui/layout/Footer";
import { Header } from "@/ui/layout/Header";
import { FamilyBenefits } from "./sections/FamilyBenefits";
import { FamilyCTA } from "./sections/FamilyCTA";
import { FamilyHero } from "./sections/FamilyHero";
import { FamilyHowItWorks } from "./sections/FamilyHowItWorks";
import { FamilyProblem } from "./sections/FamilyProblem";
import { FamilySocialProof } from "./sections/FamilySocialProof";
import { FamilySolution } from "./sections/FamilySolution";
import { FamilyWhySena } from "./sections/FamilyWhySena";

export const FamilyOfficePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="primary" />
      <div className="grow">
        <FamilyHero />
        <FamilyProblem />
        <FamilySolution />
        <FamilyBenefits />
        <FamilySocialProof />
        <FamilyHowItWorks />
        <FamilyWhySena />
        <FamilyCTA />
        <Footer />
      </div>
    </div>
  );
};
