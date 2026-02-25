"use client";

import { Footer } from "@/ui/layout/Footer";
import { Header } from "@/ui/layout/Header";
import { ServiciosBenefits } from "./sections/ServiciosBenefits";
import { ServiciosCTA } from "./sections/ServiciosCTA";
import { ServiciosHero } from "./sections/ServiciosHero";
import { ServiciosHowItWorks } from "./sections/ServiciosHowItWorks";
import { ServiciosProblem } from "./sections/ServiciosProblem";
import { ServiciosSocialProof } from "./sections/ServiciosSocialProof";
import { ServiciosSolution } from "./sections/ServiciosSolution";
import { ServiciosWhySena } from "./sections/ServiciosWhySena";

export const ServiciosBasicosPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="primary" />
      <div className="grow">
        <ServiciosHero />
        <ServiciosProblem />
        <ServiciosSolution />
        <ServiciosBenefits />
        <ServiciosSocialProof />
        <ServiciosHowItWorks />
        <ServiciosWhySena />
        <ServiciosCTA />
        <Footer />
      </div>
    </div>
  );
};
