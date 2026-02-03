"use client";
import { AssetIcon } from "@/lib/utils/assets/icon";
import { AssetImage } from "@/lib/utils/assets/image";
import { usePathname, useRouter } from "next/navigation";

export const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (type: string, route: string) => {
    if (type === "scroll") {
      const sectionId = route.replace("#", "");
      if (pathname === "/") {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          window.scrollTo({ top, behavior: "smooth" });
        }
      } else {
        window.location.href = `/#${sectionId}`;
      }
    } else if (type === "redirect") {
      router.push(route);
    }
  };

  return (
    <footer className="bg-[#2270D0] text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-10 md:mb-12">
          <img
            src={AssetImage.logoBlanco.src}
            alt="Sena Logo"
            className="w-64 md:w-100"
          />
        </div>

        {/* Newsletter - Mobile first */}
        <div className="md:hidden mb-8">
          <h3 className="font-bold text-xs mb-4 uppercase tracking-wide">
            SUSCRÍBETE A NUESTRO NEWSLETTER
          </h3>
          <form>
            <div className="relative border-b-2 border-gray-400 transition-colors duration-200">
              <input
                type="email"
                placeholder="Tu email"
                required
                className="w-full px-0 py-3 pr-28 text-sm bg-transparent border-none focus:outline-none placeholder:text-white"
              />
              <button
                type="submit"
                className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 text-sm font-bold text-[#f6793a] hover:text-orange-600 transition-colors duration-200 uppercase tracking-wide"
              >
                Suscríbete
              </button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-6 mb-12 md:mb-16">
          <div className="space-y-3">
            <h3 className="font-bold text-xs md:text-sm mb-3 md:mb-4 uppercase tracking-wide">
              EMPRESA
            </h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li>
                {/* <Link href="/sobre-nosotros" className="hover:text-blue-500 transition-colors duration-200"> */}
                <button
                  onClick={() => handleNavClick("redirect", "/nosotros")}
                  className="hover:text-blue-500 cursor-pointer transition-colors duration-200"
                >
                  Sobre nosotros
                </button>
              </li>
              <li>
                <button
                  disabled
                  // onClick={() => router.push("/sobre-recsa")}
                  // href="/sobre-recsa"
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  Sobre Recsa
                </button>
              </li>
              <li>
                <p
                  // href="/faqs"
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  FAQs
                </p>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-xs md:text-sm mb-3 md:mb-4 uppercase tracking-wide">
              DESCUBRIR
            </h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li>
                <button
                  onClick={() => handleNavClick("scroll", "#productos")}
                  // href="/productos"
                  className="hover:text-blue-500 cursor-pointer transition-colors duration-200"
                >
                  Productos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("scroll", "#como-funciona")}
                  // href="/como-funciona"
                  className="hover:text-blue-500 cursor-pointer transition-colors duration-200"
                >
                  Cómo funciona
                </button>
              </li>
              <li>
                <button
                  disabled
                  onClick={() =>
                    handleNavClick("scroll", "#preguntas-frecuentes")
                  }
                  // href="/preguntas-frecuentes"
                  className="hover:text-blue-500  transition-colors duration-200"
                >
                  Preguntas frecuentes
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-xs md:text-sm mb-3 md:mb-4 uppercase tracking-wide">
              CONTACTO
            </h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li>
                <a
                  href="mailto:contacto@somossena.com"
                  className="hover:text-blue-500 transition-colors duration-200 break-all"
                >
                  contacto@somossena.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+56962499909"
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  +56944489673
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-xs md:text-sm mb-3 md:mb-4 uppercase tracking-wide">
              LEGAL
            </h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li>
                <button
                  onClick={() => handleNavClick("redirect", "/term")}
                  // href="/terminos"
                  className="hover:text-blue-500 cursor-pointer transition-colors duration-200"
                >
                  Términos y condiciones
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("redirect", "/privacy")}
                  // href="/politicas-cookies"
                  className="hover:text-blue-500 cursor-pointer transition-colors duration-200"
                >
                  Políticas de privacidad
                </button>
              </li>
              <li>
                <button
                  disabled
                  // href="/configuracion-cookies"
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  Actualizar configuración de cookies
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter - Desktop */}
          <div className="hidden md:block col-span-2 lg:col-span-1">
            <h3 className="font-bold text-sm mb-6 uppercase tracking-wide">
              SUSCRÍBETE A NUESTRO NEWSLETTER
            </h3>
            <form>
              <div className="relative border-b-2 border-gray-400 transition-colors duration-200">
                <input
                  type="email"
                  placeholder="Tu email"
                  required
                  className="w-full px-0 py-3 pr-32 text-base bg-transparent border-none focus:outline-none placeholder:white"
                />
                <button
                  type="submit"
                  className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 text-base font-bold text-[#f6793a] hover:text-orange-600 transition-colors duration-200 uppercase tracking-wide"
                >
                  Suscríbete
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 md:pt-8 gap-4">
          <p className="text-xs md:text-sm  order-2 md:order-1">
            © NILO SE 2026
          </p>

          <div className="flex gap-5 md:gap-6 order-1 md:order-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f6793a] transition-colors duration-200"
              aria-label="Facebook"
            >
              <AssetIcon.facebook width={22} height={22} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-200"
              aria-label="Instagram"
            >
              <AssetIcon.instagram width={22} height={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <AssetIcon.linkedin width={22} height={22} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-200"
              aria-label="YouTube"
            >
              <AssetIcon.youtube width={22} height={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
