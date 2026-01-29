"use client";

import { AssetImage } from "@/lib/utils/assets/image";
import Button from "@/ui/shared/Button";
import { useCallback, useEffect, useState } from "react";

const rotatingWords = ["bien.", "con criterio.", "a tiempo.", "con cuidado."];

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typeSpeed = 100;
  const deleteSpeed = 50;
  const pauseTime = 2000;

  const tick = useCallback(() => {
    const currentWord = rotatingWords[currentIndex];

    if (!isDeleting) {
      setDisplayText(currentWord.substring(0, displayText.length + 1));

      if (displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }
    } else {
      setDisplayText(currentWord.substring(0, displayText.length - 1));

      if (displayText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
        return;
      }
    }
  }, [currentIndex, displayText, isDeleting]);

  useEffect(() => {
    const speed = isDeleting ? deleteSpeed : typeSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <div className="flex flex-col">
      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-row items-start gap-8 pt-20 px-12">
        <div className="w-[45%] flex flex-col gap-4">
          <h1 className="font-canaro text-7xl font-extrabold">
            El arte de <br /> cobrar{" "}
            <span className="text-[#3771d1] font-semibold italic">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="font-adobe text-black text-xl  max-w-[90%]">
            Sena es una plataforma web de gestión de cuentas por cobrar que
            incluye entre sus funcionalidades un servicio de cobranza. Sena te
            ayuda a ordenar, automatizar y recuperar pagos combinando
            tecnología, inteligencia artificial y personas expertas.
          </p>
          <div className="flex flex-row items-start gap-2 pt-6">
            <Button text="Agenda una demo" size="lg" />
            <Button
              text="Ver cómo funciona"
              variant="primaryInvertedOutlined"
              size="lg"
            />
          </div>
        </div>

        <div className="w-[55%]">
          <div className="grid grid-cols-10 grid-rows-8 w-full">
            <div className="col-start-2 col-span-8 row-start-1 row-span-7">
              <img
                src={AssetImage.home1.src}
                alt="Personas trabajando"
                className="w-full h-full rounded-2xl shadow-lg object-cover"
              />
            </div>
            <div className="col-start-1 col-span-4 row-start-4 row-span-7 z-10">
              <img
                src={AssetImage.conciliatorNavbar.src}
                alt="Sena navbar"
                className="w-[124px] rounded-lg shadow-xl object-cover border border-[#3771d1]"
              />
            </div>
            <div className="col-start-7 col-span-9 row-start-5 row-span-7 z-20">
              <img
                src={AssetImage.conciliator1.src}
                alt="Conciliator dashboard"
                className="w-[350px] rounded-lg shadow-xl object-cover border border-[#3771d1]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex lg:hidden flex-col items-center gap-6 pt-8 px-6">
        <h1 className="font-canaro text-4xl sm:text-5xl font-extrabold text-center">
          El arte de <br /> cobrar{" "}
          <span className="text-[#3771d1] font-semibold italic">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>

        {/* Imágenes mobile */}
        <div className="relative w-full max-w-[340px] mx-auto">
          {/* Imagen principal - personas */}
          <img
            src={AssetImage.home1.src}
            alt="Personas trabajando"
            className="w-full rounded-2xl shadow-lg object-cover"
          />
          {/* Navbar superpuesto izquierda */}
          <img
            src={AssetImage.conciliatorNavbar.src}
            alt="Sena navbar"
            className="absolute -bottom-8 -left-2 w-[100px] rounded-lg shadow-xl object-cover border border-[#3771d1]"
          />
          {/* Conciliator superpuesto abajo */}
          <img
            src={AssetImage.conciliator1.src}
            alt="Conciliator dashboard"
            className="absolute -bottom-16 right-0 w-[200px] rounded-lg shadow-xl object-cover border border-[#3771d1]"
          />
        </div>

        {/* Espacio para las imágenes superpuestas */}
        <div className="h-16" />

        <p className="text-black text-sm font-normal text-center px-2">
          Sena es una plataforma web de gestión de cuentas por cobrar que
          incluye entre sus funcionalidades un servicio de cobranza. Sena te
          ayuda a ordenar, automatizar y recuperar pagos combinando
          tecnología, inteligencia artificial y personas expertas.
        </p>

        <div className="flex sm:flex-row items-center gap-3 w-full justify-center">
          <Button text="Agenda una demo" size="md" className="w-auto" />
          <Button
            text="Ver cómo funciona"
            variant="primaryInvertedOutlined"
            size="md"
            className="w-auto "
          />
        </div>
      </div>

      <div className="flex justify-center lg:justify-end px-6 lg:px-12 py-3 mt-4 lg:mt-0">
        <p className="text-white text-xs lg:text-sm text-center lg:text-right">
          Respaldados por Recsa, con más de 40 años de experiencia en cobranza y
          presencia en 15 países de Latinoamérica.
        </p>
      </div>
    </div>
  );
};
