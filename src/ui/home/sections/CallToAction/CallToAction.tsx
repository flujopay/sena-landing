"use client";
import { AssetImage } from "@/lib/utils/assets/image";
import Button from "@/ui/shared/Button";
import { useRouter } from "next/navigation";

export const CallToAction = () => {
  const router = useRouter();
  return (
    <section className="max-w-[1280px] mx-auto">
      <div className="rounded-2xl overflow-hidden">
        <div className="flex flex-row items-center justify-center">
          {/* Image */}
          <div className="md:shrink-0">
            <img
              src={AssetImage.home3.src}
              alt="Mujer con teléfono"
              className="w-full max-w-[420px] md:h-[500px] object-contain"
            />
          </div>

          {/* Content */}
          <div className="max-w-xl px-4 py-8 text-left">
            <h2 className="text-brand-primary-dark text-3xl md:text-6xl font-extrabold leading-tight">
              Cobrar bien hace la{" "}
              <span className="text-brand-primary font-caslon">diferencia</span>
              <span className="text-brand-secondary font-caslon">.</span>
            </h2>

            <div className="mt-8 flex gap-2 justify-start flex-wrap">
              <Button
                variant="primaryFilled"
                text="Agenda una demo"
                className="h-8 px-6 text-sm md:h-13 md:px-8 md:text-base"
              />
              <Button
                variant="primaryDarkOutlined"
                text="Habla con ventas"
                onClick={() => router.push("/contactanos")}
                className="h-8 px-6 text-sm md:h-13 md:px-8 md:text-base"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
