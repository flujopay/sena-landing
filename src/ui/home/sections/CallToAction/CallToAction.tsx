import Button from "@/ui/shared/Button";

export const CallToAction = () => {
  return (
    <section className="px-4 md:px-12 py-14 max-w-[1440px] mx-auto">
      <div className="rounded-2xl overflow-hidden bg-linear-to-r from-indigo-950 via-blue-900 to-indigo-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="px-8 md:px-12 py-10">
            <p className="text-white text-2xl md:text-3xl font-extrabold leading-tight">
              Cobrar también es una forma de{" "}
              <span className="text-orange-400 italic">cuidar</span>.
            </p>

            <p className="mt-6 text-white text-2xl md:text-3xl font-extrabold leading-tight">
              Cuidar <span className="text-orange-400 italic">el pago</span>,
              <br />
              cuidar <span className="text-orange-400 italic">la relación</span>
              <br />y cuidar a tus{" "}
              <span className="text-orange-400 italic">clientes</span>.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="primaryInvertedFilled" text="Agenda una demo" />
              <Button variant="secondaryFilled" text="Hablemos" />
            </div>
          </div>

          <div className="relative min-h-[260px] lg:min-h-[360px]">
            <div className="absolute inset-0 bg-blue-900/20" />
            <div className="absolute inset-0">
              <div className="h-full w-full bg-linear-to-tr from-blue-600/40 via-transparent to-blue-400/30" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[92%] max-w-xl h-[80%] rounded-2xl bg-white/10 border border-white/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
