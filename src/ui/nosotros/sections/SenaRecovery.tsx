export const SenaRecovery = () => {
  return (
    <section className="relative overflow-hidden h-[500px] bg-linear-to-br from-blue-600 via-blue-500 to-blue-400">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-blue-400/30 blur-sm" />
        <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-blue-400/20 blur-sm" />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-blue-300/20 blur-sm" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 h-full relative">
        <div className="flex flex-col lg:flex-row items-center h-full">
          <div className="lg:w-1/2 z-10 flex items-center h-full">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="text-orange-400 italic">Sena,</span>{" "}
              <span className="text-white">más</span>
              <br />
              <span className="text-white">recuperación,</span>
              <br />
              <span className="text-white italic">menos fricción.</span>
            </h2>
          </div>

          <div className="lg:w-1/2 relative h-full flex items-end justify-center">
            <div className="w-80 h-96 bg-gray-300/50 rounded-t-full flex items-center justify-center border-2 border-dashed border-white/30">
              <span className="text-white/70 text-sm text-center px-4">
                Imagen: 
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
