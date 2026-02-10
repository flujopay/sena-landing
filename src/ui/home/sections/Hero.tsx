"use client";

import { AssetImage } from "@/lib/utils/assets/image";
import Button from "@/ui/shared/Button";
import { useCallback, useEffect, useState } from "react";

const rotatingWords = ["bien", "con criterio", "a tiempo", "con cuidado"];

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

  const onRedirectHubspot = () => {
    window.open("https://meetings.hubspot.com/francisco472", "_blank");
  };

  return (
    <div className="flex flex-col mx-auto max-w-[1280px] px-4 md:px-10 py-10">
      {/* Desktop Layout */}
      <div className="hidden md:flex flex-row items-center">
        <div className="w-[60%] flex flex-col gap-4">
          <h1 className="text-brand-primary-dark font-canaro text-7xl font-extrabold">
            El arte de <br /> cobrar{" "}
            <span className="text-brand-primary font-semibold font-caslon">
              {displayText}
              <span className="animate-pulse">|</span>
              <span className="text-brand-secondary">.</span>
            </span>
          </h1>
          <p className="font-adobe text-black text-xl max-w-[90%]">
            Sena es una plataforma web de{" "}
            <span className="font-bold">gestión de cuentas por cobrar</span> que
            incluye un servicio de cobranza. Sena te ayuda a{" "}
            <span className="font-bold">
              ordenar, automatizar y recuperar pagos
            </span>{" "}
            combinando tecnología, inteligencia artificial y personas expertas.
          </p>
        </div>
        <div className="w-[40%] flex justify-end">
          <img
            src={AssetImage.home4.src}
            alt="home"
            className="w-full max-h-[340px] object-contain"
          />
        </div>
      </div>

      <div className="md:flex hidden flex-row items-start gap-2 mt-4">
        <Button
          text="Agenda una demo"
          size="md"
          className="text-xl"
          onClick={onRedirectHubspot}
        />
        <Button
          text="Ver cómo funciona"
          variant="primaryDarkOutlined"
          size="md"
          className="text-xl"
          onClick={() => {
            const element = document.getElementById("como-funciona");
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
        />
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden flex-col gap-4">
        {/* Título arriba */}
        <div className="flex ">
          <div className="flex flex-col gap-4">
            <h1 className="text-brand-primary-dark font-canaro text-3xl font-extrabold">
              El arte de <br /> cobrar{" "}
              <span className="text-brand-primary font-semibold font-caslon">
                {displayText}
                <span className="animate-pulse">|</span>
                <span className="text-brand-secondary">.</span>
              </span>
            </h1>

            {/* Descripción + Imagen en fila */}
            <div className="flex flex-row gap-2">
              <p className="font-adobe text-black text-md xs:text-xs flex-1">
                Sena es una plataforma web de{" "}
                <span className="font-bold">gestión de cuentas por cobrar</span>{" "}
                que incluye un servicio de cobranza. Sena te ayuda a{" "}
                <span className="font-bold">
                  ordenar, automatizar y recuperar pagos
                </span>{" "}
                combinando tecnología, inteligencia artificial y personas
                expertas.
              </p>
            </div>
          </div>

          <img
            src={AssetImage.home4.src}
            alt="home"
            className="flex-1 my-auto max-h-[200px] object-contain"
          />
        </div>

        {/* Botones abajo */}
        <div className="flex flex-row items-start gap-2">
          <Button
            text="Agenda una demo"
            size="sm"
            className="text-xs"
            onClick={onRedirectHubspot}
          />
          <Button
            text="Ver cómo funciona"
            variant="primaryDarkOutlined"
            size="sm"
            className="text-xs"
            onClick={() => {
              const element = document.getElementById("como-funciona");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          />
        </div>
      </div>

      <div className="py-3 mt-4 md:mt-0">
        <p className="text-slate-500 text-xs md:text-sm text-left md:text-right">
          Respaldados por <a className="font-bold text-brand-secondary underline" href="https://recsa.com/" target="_blank">Recsa</a>, con más de 40 años de experiencia en cobranza y
          presencia en 15 países de Latinoamérica.  
        </p>
      </div>
    </div>
  );
};
