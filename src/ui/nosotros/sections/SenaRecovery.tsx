import { AssetImage } from "@/lib/utils/assets/image";
import Button from "@/ui/shared/Button";

export const SenaRecovery = () => {
  return (
     <section className="max-w-[1280px] mx-auto px-4 pb-12">
          <div className="rounded-2xl overflow-hidden">
            <div className="flex flex-row items-center justify-center">
              
              {/* Image */}
              <div className="md:shrink-0 ">
                <img
                  src={AssetImage.nosotros2.src}
                  alt="Mujer con teléfono"
                  className="w-full max-w-[450px] h-[400px] object-contain"
                />
              </div>
    
              {/* Content */}
              <div className="max-w-full  text-left">
                <h2 className="text-brand-primary-dark text-3xl md:text-6xl font-extrabold leading-tight">
                  El arte está en la <span className="text-brand-primary font-caslon">forma</span>
                  <span className="text-brand-secondary">,</span> no en la presión.
                </h2>
               <div className="mt-8 flex gap-2 justify-start flex-wrap">
                      <Button variant="primaryFilled" text="Agenda una demo" className="h-8 px-6 text-sm md:h-13 md:px-8 md:text-base" />
                      <Button variant="primaryDarkOutlined" text="Contáctanos" className="h-8 px-6 text-sm md:h-13 md:px-8 md:text-base" />
                </div>
              </div>
    
            </div>
          </div>
        </section>
  );
};
