"use client";

import { useModalStore } from "@/lib/store/modalStore";
import { useCurrencyStore } from "@/lib/store/useCurrencyStore";
import { AssetIcon } from "@/lib/utils/assets/icon";
import { AssetImage } from "@/lib/utils/assets/image";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import Button from "../shared/Button";

type Props = {
  variant: "primary" | "secondary";
};

type NavItem =
  | { id: number; name: string; type: "scroll"; href: string }
  | { id: number; name: string; type: "redirect"; href: string }
  | { id: number; name: string; type: "external"; href: string }
  | {
      id: number;
      name: string;
      type: "dropdown";
      key: "productos" | "industrias";
    };

type IndustryItem = {
  id: number;
  name: string;
  href: string;
  description?: string;
};

type ProductItem = {
  id: number;
  name: string;
  description?: string;
  href: `#${string}`; // anchors para scroll
};

export const Header = ({ variant }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const { showModal, hideModal } = useModalStore();
  const { ipCurrency } = useCurrencyStore();

  const logo =
    variant === "primary" ? AssetImage.logoBlack : AssetImage.logoBlack;

  // ✅ Industrias (rutas)
  const industries: IndustryItem[] = useMemo(
    () => [
      { id: 1, name: "Telco", href: "/industrias/telco" },
      { id: 2, name: "Tech Beauty", href: "/industrias/tech-beauty" },
      { id: 3, name: "Maquinarias", href: "/industrias/maquinarias" },
      {
        id: 4,
        name: "Servicios Básicos (utilities)",
        href: "/industrias/servicios-basicos",
      },
      { id: 5, name: "Autopistas", href: "/industrias/autopistas" },
      { id: 6, name: "Family Office", href: "/industrias/family-office" },
      { id: 7, name: "Intercom", href: "/industrias/intercom" },
      { id: 8, name: "Inmobiliarias", href: "/industrias/inmobiliarias" },
    ],
    [],
  );

  const products: ProductItem[] = [
    {
      id: 1,
      name: "Plataforma de autogestión",
      description: "Cobros automáticos, recordatorios y seguimiento.",
      href: "#productos",
    },
    {
      id: 2,
      name: "Servicio de Recupero con equipo humano",
      description: "Gestión humana + estrategia para recuperar cartera.",
      href: "#productos",
    },
  ];

  const sectiosnNavbar: NavItem[] = useMemo(
    () => [
      { id: 101, name: "Productos", type: "dropdown", key: "productos" },
      { id: 102, name: "Industrias", type: "dropdown", key: "industrias" },
      { id: 2, name: "Precios", href: "#precios", type: "scroll" },
      { id: 3, name: "Nosotros", href: "/nosotros", type: "redirect" },
      {
        id: 4,
        name: "Recupera",
        href: "https://recupera.somossena.com",
        type: "external",
      },
      { id: 5, name: "Blog", href: "/blog", type: "redirect" },
    ],
    [],
  );

  const isActive = (href: string) => pathname === href;

  const getActiveClass = (href: string) => {
    if (!isActive(href)) return "";
    return "inline-block border-b-2 border-brand-secondary !text-brand-primary pb-[2px]";
  };

  const handleNavClick = (section: NavItem) => {
    hideModal();

    if (section.type === "scroll") {
      goToAnchor(section.href);
    } else if (section.type === "redirect") {
      router.push(section.href);
    } else if (section.type === "external") {
      window.open(section.href, "_self");
    }
  };

  // ✅ Scroll suave (HOME) o redirección a /#id (otras páginas)
  const goToAnchor = (href: string) => {
    const id = href.replace("#", "");

    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const redirectLogin = () => {
    const url = ipCurrency === "PEN" ? "pe" : "";
    router.push(`https://app.somossena.com/login?l=${url}&origin=main`);
  };

  // =========================
  // ✅ Dropdown states (desktop)
  // =========================
  const [openIndustries, setOpenIndustries] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);

  const closeTimerIndustries = useRef<number | null>(null);
  const closeTimerProducts = useRef<number | null>(null);

  const openInd = () => {
    if (closeTimerIndustries.current)
      window.clearTimeout(closeTimerIndustries.current);
    setOpenIndustries(true);
  };
  const closeInd = (delay = 120) => {
    if (closeTimerIndustries.current)
      window.clearTimeout(closeTimerIndustries.current);
    closeTimerIndustries.current = window.setTimeout(
      () => setOpenIndustries(false),
      delay,
    );
  };

  const openProd = () => {
    if (closeTimerProducts.current)
      window.clearTimeout(closeTimerProducts.current);
    setOpenProducts(true);
  };
  const closeProd = (delay = 120) => {
    if (closeTimerProducts.current)
      window.clearTimeout(closeTimerProducts.current);
    closeTimerProducts.current = window.setTimeout(
      () => setOpenProducts(false),
      delay,
    );
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenIndustries(false);
        setOpenProducts(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const goToIndustry = (href: string) => {
    setOpenIndustries(false);
    router.push(href);
  };

  const goToProduct = (href: ProductItem["href"]) => {
    setOpenProducts(false);
    // opcional: que al elegir cualquiera, primero baje a "Nuestros productos"
    // goToAnchor("#productos");
    goToAnchor(href);
  };

  // =========================
  // ✅ Mobile: acordeones
  // =========================
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const openMobileMenu = () => {
    showModal({
      content: (
        <div className="flex flex-col h-full bg-white">
          {/* Header: Logo + Close */}
          <div className="flex items-center justify-between px-6 py-5">
            <Link href="/" onClick={() => hideModal()}>
              <Image src={logo} alt="Logo" className="w-36" />
            </Link>
            <button
              onClick={() => hideModal()}
              className="p-2"
              aria-label="Cerrar menú"
            >
              <AssetIcon.xMark width={24} height={24} className="text-black" />
            </button>
          </div>

          {/* Items */}
          <div className="flex flex-col">
            {/* Productos (acordeón) */}
            <div className="border-t border-gray-200">
              <button
                onClick={() => setMobileProductsOpen((v) => !v)}
                className="w-full text-left px-6 py-5 flex items-center justify-between"
              >
                <span className="text-base font-bold text-black">
                  Productos
                </span>
              </button>

              {mobileProductsOpen && (
                <div className="px-6 pb-4">
                  <div className="flex flex-col gap-2">
                    {products.map((it) => (
                      <button
                        key={it.id}
                        onClick={() => {
                          hideModal();
                          goToAnchor(it.href);
                        }}
                        className="text-left px-3 py-3 rounded-xl hover:bg-gray-50 transition"
                      >
                        <span className="text-sm font-semibold text-black">
                          {it.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Industrias (acordeón) */}
            <div className="border-t border-gray-200">
              <button
                onClick={() => setMobileIndustriesOpen((v) => !v)}
                className="w-full text-left px-6 py-5 flex items-center justify-between"
              >
                <span className="text-base font-bold text-black">
                  Industrias
                </span>
              </button>

              {mobileIndustriesOpen && (
                <div className="px-6 pb-4">
                  <div className="flex flex-col gap-2">
                    {industries.map((it) => (
                      <button
                        key={it.id}
                        onClick={() => {
                          hideModal();
                          router.push(it.href);
                        }}
                        className="text-left px-3 py-3 rounded-xl hover:bg-gray-50 transition"
                      >
                        <span className="text-sm font-semibold text-black">
                          {it.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Resto normal */}
            {sectiosnNavbar
              .filter((s) => s.type !== "dropdown")
              .map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section)}
                  className="w-full text-left px-6 py-5 border-t border-gray-200 cursor-pointer"
                >
                  <span className={`text-base font-bold text-black`}>
                    {section.name}
                  </span>
                </button>
              ))}

            <div className="border-t border-gray-200" />
          </div>

          {/* CTA */}
          <div className="px-6 mt-12 pb-10">
            <Button
              size="md"
              text="Contáctanos"
              variant="primaryFilled"
              className="w-full max-w-[280px]"
              onClick={() => {
                hideModal();
                router.push("/contactanos");
              }}
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
            <Image src={logo} alt="Logo" className="w-36" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between gap-12 relative">
          {sectiosnNavbar.map((section) => {
            // =========================
            // ✅ Productos (lista vertical como tu imagen)
            // =========================
            if (section.type === "dropdown" && section.key === "productos") {
              return (
                <div
                  key={section.id}
                  className="relative"
                  onMouseEnter={openProd}
                  onMouseLeave={() => closeProd(140)}
                >
                  <button
                    type="button"
                    onFocus={openProd}
                    className={`flex items-center gap-2 font-semibold cursor-pointer ${
                      variant === "primary"
                        ? "text-brand-primary-dark"
                        : "text-blue-500"
                    }`}
                    aria-haspopup="menu"
                    aria-expanded={openProducts}
                  >
                    Productos
                  </button>

                  {/* Dropdown panel (igual feeling que Industrias) */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-[52px] w-[680px] ${
                      openProducts
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none"
                    } transition-all duration-150`}
                    onMouseEnter={openProd}
                    onMouseLeave={() => closeProd(140)}
                  >
                    <div className="rounded-2xl bg-white shadow-[0_18px_60px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden">
                      <div className="grid grid-cols-12">
                        {/* Col izquierda (como Industrias) */}
                        <div className="col-span-4 bg-gray-50 p-7">
                          <h4 className="text-2xl font-extrabold text-black">
                            Productos
                          </h4>
                          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                            Elige el producto y te llevo a su sección.
                          </p>

                          <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black">
                            <span className="inline-block h-2 w-2 rounded-full bg-brand-secondary" />
                            Ver detalles
                          </div>
                        </div>

                        {/* Items */}
                        <div className="col-span-8 p-6">
                          <div className="grid grid-cols-2 gap-2">
                            {products.map((it) => (
                              <button
                                key={it.id}
                                onClick={() => goToProduct(it.href)} // 👈 scroll suave
                                className="group text-left rounded-xl p-4 hover:bg-gray-50 transition"
                                role="menuitem"
                              >
                                <div className="flex items-start gap-3">
                                  <div className="mt-1 h-9 w-9 rounded-xl bg-gray-100 group-hover:bg-white border border-gray-200 flex items-center justify-center">
                                    <span className="h-2 w-2 rounded-full bg-brand-secondary" />
                                  </div>

                                  <div>
                                    <p className="text-sm font-bold text-black">
                                      {it.name}
                                    </p>
                                    {it.description && (
                                      <p className="text-xs text-gray-500 mt-1">
                                        {it.description}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // =========================
            // ✅ Industrias (mega menu)
            // =========================
            if (section.type === "dropdown" && section.key === "industrias") {
              return (
                <div
                  key={section.id}
                  className="relative"
                  onMouseEnter={openInd}
                  onMouseLeave={() => closeInd(140)}
                >
                  <button
                    type="button"
                    onFocus={openInd}
                    className={`flex items-center gap-2 font-semibold cursor-pointer ${
                      variant === "primary"
                        ? "text-brand-primary-dark"
                        : "text-blue-500"
                    }`}
                    aria-haspopup="menu"
                    aria-expanded={openIndustries}
                  >
                    Industrias
                  </button>

                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-[52px] w-[760px] ${
                      openIndustries
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none"
                    } transition-all duration-150`}
                    onMouseEnter={openInd}
                    onMouseLeave={() => closeInd(140)}
                  >
                    <div className="rounded-2xl bg-white shadow-[0_18px_60px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden">
                      <div className="grid grid-cols-12">
                        <div className="col-span-4 bg-gray-50 p-7">
                          <h4 className="text-2xl font-extrabold text-black">
                            Industrias
                          </h4>
                          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                            Landings por sector para mostrar beneficios
                            específicos.
                          </p>
                          <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black">
                            <span className="inline-block h-2 w-2 rounded-full bg-brand-secondary" />
                            Explora la tuya
                          </div>
                        </div>

                        <div className="col-span-8 p-6">
                          <div className="grid grid-cols-2 gap-2">
                            {industries.map((it) => (
                              <button
                                key={it.id}
                                onClick={() => goToIndustry(it.href)}
                                className="group text-left rounded-xl p-4 hover:bg-gray-50 transition"
                                role="menuitem"
                              >
                                <div className="flex items-start gap-3">
                                  <div className="mt-1 h-9 w-9 rounded-xl bg-gray-100 group-hover:bg-white border border-gray-200 flex items-center justify-center">
                                    <span className="h-2 w-2 rounded-full bg-brand-secondary" />
                                  </div>

                                  <div>
                                    <p className="text-sm font-bold text-black">
                                      {it.name}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                      Ver landing
                                    </p>
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // =========================
            // ✅ Resto normal
            // =========================
            if (section.type === "scroll") {
              return (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section)}
                  className={`${
                    variant === "primary"
                      ? "text-brand-primary-dark"
                      : "text-blue-500"
                  } font-semibold cursor-pointer`}
                >
                  {section.name}
                </button>
              );
            }

            return (
              <button
                key={section.id}
                onClick={() => handleNavClick(section)}
                className={`${
                  variant === "primary"
                    ? "text-brand-primary-dark"
                    : "text-blue-500"
                } font-semibold cursor-pointer ${
                  "href" in section ? getActiveClass(section.href) : ""
                }`}
              >
                {section.name}
              </button>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <Button
            size="md"
            text="Iniciar sesión"
            variant="ghost"
            onClick={redirectLogin}
            className="text-md"
          />
          <Button
            size="md"
            text="Contáctanos"
            variant={
              variant === "primary" ? "primaryFilled" : "secondaryFilled"
            }
            className="text-md"
            onClick={() => router.push("/contactanos")}
          />
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex items-center gap-2">
          <Button
            size="sm"
            text="Contáctanos"
            variant="secondaryFilled"
            className="text-xs px-3 py-1.5"
            onClick={() => router.push("/contactanos")}
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
