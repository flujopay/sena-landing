import { AssetImage } from "@/lib/utils/assets/image";

export const MainPhrase = () => {
  return (
     <section className="max-w-[1280px] mx-auto px-4 pb-12">
          <div className="rounded-2xl overflow-hidden">
            <div className="flex flex-row items-center justify-center">
              {/* Image */}
              <div className="md:shrink-0">
                <img
                  src={AssetImage.contactanos1.src}
                  alt="Mujer con teléfono"
                  className="w-full max-w-[500px] object-contain rotate-y-180"
                />
              </div>
    
              {/* Content */}
              <div className="max-w-full  text-left">
                <h2 className="text-brand-primary-dark text-3xl md:text-6xl font-extrabold leading-tight">
                  Saber cuándo actuar también es cobrar <span className="text-brand-primary font-caslon">bien</span>
                  <span className="text-brand-secondary font-caslon">.</span> 
                </h2>
              </div>
            </div>
          </div>
        </section>
  );
};
