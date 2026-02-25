"use client";

import { Footer } from "@/ui/layout/Footer";
import { Header } from "@/ui/layout/Header";
import { AutopistasBenefits } from "./sections/AutopistasBenefits";
import { AutopistasCTA } from "./sections/AutopistasCTA";
import { AutopistasHero } from "./sections/AutopistasHero";
import { AutopistasHowItWorks } from "./sections/AutopistasHowItWorks";
import { AutopistasProblem } from "./sections/AutopistasProblem";
import { AutopistasSocialProof } from "./sections/AutopistasSocialProof";
import { AutopistasSolution } from "./sections/AutopistasSolution";
import { AutopistasWhySena } from "./sections/AutopistasWhySena";

export const AutopistasPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="primary" />
      <div className="grow">
        <AutopistasHero />
        <AutopistasProblem />
        <AutopistasSolution />
        <AutopistasBenefits />
        <AutopistasSocialProof />
        <AutopistasHowItWorks />
        <AutopistasWhySena />
        <AutopistasCTA />
        <Footer />
      </div>
    </div>
  );
};
