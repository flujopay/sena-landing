"use client";

import { useModalStore } from "@/lib/store/modalStore";
import { AssetIcon } from "@/lib/utils/assets/icon";
import { AssetImage } from "@/lib/utils/assets/image";
import Button from "@/ui/shared/Button";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { id: 1, label: "Cómo Funciona", href: "#como-funciona" },
  { id: 2, label: "Casos de Uso", href: "#casos-uso" },
  { id: 3, label: "Precios", href: "#precios" },
  { id: 4, label: "FAQ", href: "#faq" },
  { id: 5, label: "Contacto", href: "#contacto" },
];

export const RecuperaHeader = () => {
  const { showModal, hideModal } = useModalStore();

  const scrollToSection = (id: string) => {
    hideModal();
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      const offset = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const openMobileMenu = () => {
    showModal({
      content: (
        <div className="flex flex-col h-full bg-white">
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <Link href="/" onClick={() => hideModal()}>
              <Image src={AssetImage.logoBlack} alt="Logo" className="w-36" />
            </Link>
            <button
              onClick={() => hideModal()}
              className="p-2"
              aria-label="Cerrar menú"
            >
              <AssetIcon.xMark width={24} height={24} className="text-black" />
            </button>
          </div>

          <div className="flex flex-col px-6 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className="py-4 border-b border-gray-100 text-left cursor-pointer"
              >
                <span className="text-lg font-bold text-black">
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          <div className="px-6 mt-4">
            <Button
              size="md"
              text="Solicita Evaluación"
              variant="primaryFilled"
              className="w-[200px]"
              onClick={() => scrollToSection("#contacto")}
            />
          </div>
        </div>
      ),
      showHeader: false,
      width: "100%",
      height: "100vh",
      modalClassName: "lg:hidden",
      contentClassName: "!rounded-none !max-h-full",
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#f9f9f9]">
      <div className="mx-auto max-w-[1280px] flex items-center gap-2 justify-between p-4">
        <div>
          <Link href="/">
            <Image src={AssetImage.logoBlack} alt="Logo" className="w-36" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between gap-12">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.href)}
              className="text-brand-primary-dark font-semibold cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-2">
          <Button
            size="md"
            text="Solicita Evaluación"
            variant="primaryFilled"
            className="text-md"
            onClick={() => scrollToSection("#contacto")}
          />
        </div>

        {/* Mobile: Button + Menu */}
        <div className="lg:hidden flex items-center gap-2">
          <Button
            size="sm"
            text="Solicita Evaluación"
            variant="secondaryFilled"
            className="text-xs px-3 py-1.5"
            onClick={() => scrollToSection("#contacto")}
          />
          <button
            onClick={openMobileMenu}
            className="p-2 z-50"
            aria-label="Abrir menú"
          >
            <AssetIcon.menu width={28} height={28} />
          </button>
        </div>
      </div>
    </header>
  );
};
