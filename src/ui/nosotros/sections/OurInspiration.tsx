import { AssetImage } from "@/lib/utils/assets/image";

export const OurInspiration = () => {
  return (
    <section className="bg-white py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="lg:hidden relative">
          <h2 className="text-lg font-extrabold uppercase tracking-wide text-gray-900 lg:mb-6 text-center">
            NUESTRA INSPIRACIÓN
          </h2>

          <div className="relative text-gray-700 text-sm leading-relaxed text-center space-y-4 lg:space-y-6 py-8">
            <img 
              src={AssetImage.senaLogoOrange.src} 
              alt="Sena Logo" 
              className="absolute -top-20 -left-4 w-[72px] h-[72px] rotate-y-180"
            />

            <p>
              Nos inspira el río Sena de París.
              <br />
              Un río que avanza solo cuando puede
              <br />
              y que necesita cuidado cuando el camino se complica.
            </p>

            <p>
              Así entendemos el cobrar.
              <br />
              A veces fluye y otras veces hay que estar ahí para
              <br />
              ayudarlo a avanzar.
            </p>

            <p>
              Por eso cobrar bien es un arte:
              <br />
              hacerlo con cuidado, criterio y experiencia.
            </p>

            <p>
              Sena. El arte de cobrar{" "}
              <span className="text-[#f6793a] italic">bien.</span>
            </p>

            <img 
              src={AssetImage.senaLogoOrange.src} 
              alt="Sena Logo" 
              className="absolute bottom-6 -right-4 w-[72px] h-[72px]"
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-row gap-16 items-start">
          <div className="w-1/2 space-y-6">
            <h2 className="text-2xl font-extrabold uppercase tracking-wide text-gray-900 mb-12">
              NUESTRA INSPIRACIÓN
            </h2>

            <div className="space-y-4 text-gray-700 text-xl leading-relaxed flex flex-col gap-6">
              <p>
                Nos inspira el río Sena de París.
                <br />
                Un río que avanza solo cuando puede
                <br />
                y que necesita cuidado cuando el camino se complica.
              </p>

              <p>
                Así entendemos el cobrar.
                <br />
                A veces fluye y otras veces hay que estar ahí para
                <br />
                ayudarlo a avanzar.
              </p>

              <p>
                Por eso cobrar bien es un arte:
                <br />
                hacerlo con cuidado, criterio y experiencia.
              </p>

              <p>
                Sena. El arte de cobrar{" "}
                <span className="text-[#f6793a] italic">bien.</span>
              </p>
            </div>
          </div>

          <div className="w-1/2 h-full relative">
            <div className="relative">
              <div className="absolute -top-18 -left-20 z-10">
                <img src={AssetImage.senaLogoOrange.src} alt="Sena Logo" className="w-[180px] h-[180px]"/>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={AssetImage.rioSena.src} alt="Río Sena de París" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
