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
        <div className="bg-blue-500 max-w-[1440px] mx-auto">
          <Header variant="secondary"/>
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
