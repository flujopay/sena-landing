import { Footer } from "@/ui/layout/Footer";
import { Header } from "@/ui/layout/Header";
import { Hero } from "./sections/Hero";
import { OurInspiration } from "./sections/OurInspiration";
import { OurTeam } from "./sections/OurTeam";
import { SenaRecovery } from "./sections/SenaRecovery";

export const NosotrosPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grow">
        <div className="bg-white max-w-[1280px] mx-auto">
          <Header variant="primary"/>
        </div>
        <Hero />
        <OurInspiration />
        <OurTeam />
        <SenaRecovery />
      </div>
      <Footer />
    </div>
  );
};
