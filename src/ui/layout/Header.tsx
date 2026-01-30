"use client";

import { AssetIcon } from "@/lib/utils/assets/icon";
import { AssetImage } from "@/lib/utils/assets/image";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "../shared/Button";

type Props = {
  variant: "primary" | "secondary";
};

export const Header = ({ variant }: Props) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logo =
    variant === "primary" ? AssetImage.logoBlack : AssetImage.logoBlack;

  const sectiosnNavbar = [
    { id: 1, name: "Productos", href: "/productos", link: false },
    { id: 2, name: "Precios", href: "/precios", link: false },
    { id: 3, name: "Nosotros", href: "/nosotros", link: true },
    { id: 4, name: "Blog", href: "/blog", link: false },
  ];

  const isActive = (href: string) => pathname === href;

  const getActiveClass = (href: string) => {
    if (!isActive(href)) return "";
    return variant === "primary"
      ? "underline decoration-brand-secondary !text-brand-primary underline-offset-4"
      : "underline decoration-brand-secondary !text-brand-primary underline-offset-4";
  };

  const getMobileActiveClass = (href: string) => {
    if (!isActive(href)) return "";
    return variant === "primary"
      ? "underline decoration-brand-secondary !text-brand-primary underline-offset-4"
      : "underline decoration-brand-secondary !text-brand-primary underline-offset-4";
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div
        className={`mx-auto max-w-[1280px] flex items-center gap-2 justify-between p-4 ${variant === "primary" ? "" : ""}`}
      >
        <div>
          <Link href="/">
            <Image src={logo} alt="Logo" className="w-36" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between gap-12">
          {sectiosnNavbar.map((section) =>
            section.link ? (
              <Link key={section.id} href={section.href}>
                <p
                  className={`${
                    variant === "primary"
                      ? "text-brand-primary-dark"
                      : "text-blue-500"
                  } font-semibold ${getActiveClass(section.href)}`}
                >
                  {section.name}
                </p>
              </Link>
            ) : (
              <p
                key={section.id}
                className="font-semibold text-gray-400 cursor-default"
              >
                {section.name}
              </p>
            ),
          )}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-2">
          <Button
            size="md"
            text="Iniciar sesión"
            variant="ghost"
            className="text-md"
          />
          <Button
            size="md"
            text="Habla con ventas"
            variant={
              variant === "primary" ? "primaryFilled" : "secondaryFilled"
            }
            className="text-md"
          />
        </div>

        {/* Mobile: Button + Menu */}
        <div className="lg:hidden flex items-center gap-2">
          <Button
            size="sm"
            text="Habla con ventas"
            variant="secondaryFilled"
            className="text-xs px-3 py-1.5"
          />
          <button
            onClick={toggleMenu}
            className="p-2 z-50"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? (
              <AssetIcon.xMark
                width={28}
                height={28}
                className="text-[#f6793a]"
              />
            ) : (
              <AssetIcon.menu width={28} height={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 lg:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {sectiosnNavbar.map((section, index) => (
            <Link
              key={section.id}
              href={section.href}
              onClick={() => setIsMenuOpen(false)}
              className={`transform transition-all duration-500 ease-out ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
              }}
            >
              <p
                className={`text-3xl font-bold text-blue-500 hover:text-[#f6793a] transition-colors ${getMobileActiveClass(section.href)}`}
              >
                {section.name}
              </p>
            </Link>
          ))}

          <div
            className={`mt-8 transform transition-all duration-500 ease-out ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{
              transitionDelay: isMenuOpen
                ? `${sectiosnNavbar.length * 100}ms`
                : "0ms",
            }}
          >
            <Button size="md" text="Comenzar ahora" variant="secondaryFilled" />
          </div>
        </div>
      </div>
    </>
  );
};
