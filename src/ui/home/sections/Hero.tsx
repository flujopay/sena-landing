import Button from "@/ui/shared/Button";

export const Hero = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 pt-24 px-12">
        <div className="w-2/3 flex flex-col gap-4">
          <h1 className="pl-2 text-7xl font-bold">
            El arte de <br /> cobrar{" "}
            <span className="text-blue-500 font-semibold italic">bien.</span>
          </h1>
          <p className="text-black text-md leading-5 font-normal max-w-[70%]">
            Sena es una plataforma web de gestión de cuentas por cobrar que
            incluye entre sus funcionalidades un servicio de cobranza. Sena te
            ayuda a ordenar, automatizar y recuperar pagos combinando
            tecnología, inteligencia artificial y personas expertas.
          </p>
          <div className="flex items-center gap-2 pt-6">
            <Button text="Agenda una demo" />
            <Button
              text="Ver cómo funciona"
              variant="primaryInvertedOutlined"
            />
          </div>
        </div>
        <div className="w-2/3">
          <div className="w-full max-w-xl ml-auto">
            <div className="rounded-2xl border border-white/40 bg-white/15 backdrop-blur-sm shadow-lg overflow-hidden">
              <div className="h-10 bg-white/25 flex items-center gap-2 px-4">
                <div className="w-2.5 h-2.5 rounded-full bg-white/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/60" />
                <div className="ml-3 h-3 w-40 rounded bg-white/30" />
              </div>

              <div className="h-72 bg-linear-to-br from-blue-50/70 to-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-white/60 flex items-center justify-center">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6.5C4 5.12 5.12 4 6.5 4H17.5C18.88 4 20 5.12 20 6.5V17.5C20 18.88 18.88 20 17.5 20H6.5C5.12 20 4 18.88 4 17.5V6.5Z"
                        stroke="#2563EB"
                        strokeWidth="1.8"
                      />
                      <path
                        d="M8 14L10.5 11.5L13 14L15.5 12L18 14.5"
                        stroke="#2563EB"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 9.2C9 8.54 9.54 8 10.2 8C10.86 8 11.4 8.54 11.4 9.2C11.4 9.86 10.86 10.4 10.2 10.4C9.54 10.4 9 9.86 9 9.2Z"
                        fill="#2563EB"
                      />
                    </svg>
                  </div>
                  <p className="mt-4 text-blue-700 font-bold">
                    Imagen / mockup
                  </p>
                  <p className="mt-1 text-blue-900/60 text-sm">...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end p-3">
        <p className="text-white text-sm">
          Respaldados por Recsa, con más de 40 años de experiencia en cobranza y
          presencia en 15 países de Latinoamérica.
        </p>
      </div>
    </div>
  );
};
