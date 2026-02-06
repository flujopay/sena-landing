"use client";

import { AssetImage } from "@/lib/utils/assets/image";

const productLinks = [
  { label: "Cómo Funciona", href: "#como-funciona" },
  { label: "Modelo Contingente", href: "#precios" },
  { label: "FAQ", href: "#faq" },
];

const companyLinks = [
  { label: "Sobre Recsa", href: "https://recsa.com", external: true },
  { label: "15 Países LATAM", href: "#credibilidad" },
  { label: "Contacto", href: "#contacto" },
];

export const RecuperaFooter = () => {
  const scrollToSection = (id: string) => {
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

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-[1280px] mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Columna 1: Recupera */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={AssetImage.logoBlack.src}
                alt="Sena"
                className="h-8 w-auto"
              />
              <span className="font-bold text-xl text-brand-primary-dark">
                Recupera
              </span>
            </div>
            <p className="text-slate-600 text-sm mb-4">
              Recuperación de cartera vencida con equipo experto + tecnología +
              40 años Recsa.
            </p>
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 px-3 py-1.5 rounded-full">
              <span className="text-xs font-semibold text-brand-primary">
                Powered by Recsa
              </span>
            </div>
          </div>

          {/* Columna 2: Producto */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-brand-primary-dark">
              Producto
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-600 hover:text-brand-primary text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Empresa */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-brand-primary-dark">
              Empresa
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-brand-primary text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-600 hover:text-brand-primary text-sm transition-colors"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © 2026 Recupera by Sena. Powered by Recsa.
            </p>
            <p className="text-slate-500 text-sm text-center md:text-right">
              Recuperación profesional que preserva relaciones
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
