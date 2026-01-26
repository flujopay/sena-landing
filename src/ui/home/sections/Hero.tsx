import Button from "@/ui/shared/Button";

export const Hero = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 pt-24 px-12">
        <div className="w-2/3 flex flex-col gap-4">
          <h1 className="pl-2 text-7xl font-bold">
            El arte de <br /> cobrar{" "}
            <span className="text-blue-500 font-semibold">bien.</span>
          </h1>
          <p className="text-black text-md leading-5 font-normal">
            Sena es una plataforma web de gestión de cuentas por cobrar que
            incluye entre sus funcionalidades un servicio de cobranza. Sena te
            ayuda a ordenar, automatizar y recuperar pagos combinando
            tecnología, inteligencia artificial y personas expertas.
          </p>
          <div className="flex items-center gap-2 pt-6">
               <Button  text="Agenda una demo"/>
               <Button  text="Ver cómo funciona" variant="primaryInvertedOutlined" />
          </div>
        </div>
        <div className="w-2/3">
          <p>pedir imagne</p>
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
