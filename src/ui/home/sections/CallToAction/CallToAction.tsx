import Button from "@/ui/shared/Button";

export const CallToAction = () => {
  return (
    <section className="px-4 md:px-12 py-14 max-w-[1440px] mx-auto">
      <div className="rounded-2xl overflow-hidden bg-[url('/images/home2.png')] h-auto md:h-[700px] bg-cover bg-center bg-no-repeat">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          <div className="px-6 md:px-12 py-8 md:py-10">
            <p className="text-white text-xl md:text-4xl font-extrabold leading-tight">
              Cobrar también es una forma de{" "}
              <span className="text-orange-400 italic">cuidar</span>.
            </p>

            <p className="mt-4 md:mt-6 text-white text-xl md:text-4xl font-extrabold leading-tight">
              Cuidar <span className="text-orange-400 italic">el pago</span>,
              <br />
              cuidar <span className="text-orange-400 italic">la relación</span>
              <br />y cuidar a tus{" "}
              <span className="text-orange-400 italic">clientes</span>.
            </p>

            <div className="mt-8 md:mt-48 flex flex-row gap-3 md:gap-4">
              <Button variant="primaryInvertedFilled" text="Agenda una demo" size="md" className="flex-1 md:flex-none text-sm md:text-base"/>
              <Button variant="secondaryFilled" text="Hablemos" size="md" className="flex-1 md:flex-none text-sm md:text-base"/>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};
