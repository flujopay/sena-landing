
export const OurInspiration = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 md:items-start items-center">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-2xl font-extrabold uppercase tracking-wide text-gray-900">
              NUESTRA INSPIRACIÓN
            </h2>

            <div className="space-y-4 text-gray-700 text-xl leading-relaxed">
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
                <span className="text-orange-500 italic">bien.</span>
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 h-full relative">
            <div className="relative">
              <div className="absolute -top-4 -left-4 z-10">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-orange-400 rounded-lg flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">S</span>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                {/* Placeholder para imagen del río Sena */}
                <div className="w-full h-[350px] bg-gray-200 flex items-center justify-center border-2 border-dashed border-gray-300">
                  <span className="text-gray-500 text-sm text-center px-4">
                    Imagen: Río Sena de París
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
