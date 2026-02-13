"use client";

import { Footer } from "@/ui/layout/Footer";
import { Header } from "@/ui/layout/Header";
import { MaquinariasBenefits } from "./sections/MaquinariasBenefits";
import { MaquinariasCTA } from "./sections/MaquinariasCTA";
import { MaquinariasHero } from "./sections/MaquinariasHero";
import { MaquinariasHowItWorks } from "./sections/MaquinariasHowItWorks";
import { MaquinariasProblem } from "./sections/MaquinariasProblem";
import { MaquinariasSocialProof } from "./sections/MaquinariasSocialProof";
import { MaquinariasSolution } from "./sections/MaquinariasSolution";
import { MaquinariasWhySena } from "./sections/MaquinariasWhySena";

export const MaquinariasPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="primary" />
      <div className="grow">
        <MaquinariasHero />
        <MaquinariasProblem />
        <MaquinariasSolution />
        <MaquinariasBenefits />
        <MaquinariasSocialProof />
        <MaquinariasHowItWorks />
        <MaquinariasWhySena />
        <MaquinariasCTA />
        <Footer />
      </div>
    </div>
  );
};
