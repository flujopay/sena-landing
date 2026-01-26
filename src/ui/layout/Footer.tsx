import { AssetIcon } from "@/lib/utils/assets/icon";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#E8E9F0] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-10 md:mb-12">
          <Image
            src="/logo.svg"
            alt="Sena Logo"
            width={200}
            height={80}
            className="h-auto w-40 md:w-52"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-12 md:mb-16">
          <div className="space-y-3">
            <h3 className="font-bold text-xs md:text-sm mb-3 md:mb-4 uppercase tracking-wide">EMPRESA</h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li>
                <Link href="/sobre-nosotros" className="hover:text-orange-500 transition-colors duration-200">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="/sobre-recsa" className="hover:text-orange-500 transition-colors duration-200">
                  Sobre Recsa
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-orange-500 transition-colors duration-200">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-xs md:text-sm mb-3 md:mb-4 uppercase tracking-wide">DESCUBRIR</h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li>
                <Link href="/productos" className="hover:text-orange-500 transition-colors duration-200">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/como-funciona" className="hover:text-orange-500 transition-colors duration-200">
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" className="hover:text-orange-500 transition-colors duration-200">
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-xs md:text-sm mb-3 md:mb-4 uppercase tracking-wide">CONTACTO</h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li>
                <a href="mailto:contacto@seniocobranza.com" className="hover:text-orange-500 transition-colors duration-200 break-all">
                  contacto@seniocobranza.com
                </a>
              </li>
              <li>
                <a href="tel:+56962499909" className="hover:text-orange-500 transition-colors duration-200">
                  +56962499909
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-xs md:text-sm mb-3 md:mb-4 uppercase tracking-wide">LEGAL</h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li>
                <Link href="/terminos" className="hover:text-orange-500 transition-colors duration-200">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href="/politicas-cookies" className="hover:text-orange-500 transition-colors duration-200">
                  Políticas de cookies
                </Link>
              </li>
              <li>
                <Link href="/configuracion-cookies" className="hover:text-orange-500 transition-colors duration-200">
                  Actualizar configuración de cookies
                </Link>
              </li>
            </ul>1
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-bold text-xs md:text-sm mb-4 md:mb-6 uppercase tracking-wide">SUSCRÍBETE A NUESTRO NEWSLETTER</h3>
            <form>
              <div className="relative border-b-2 border-gray-400 transition-colors duration-200">
                <input
                  type="email"
                  placeholder="Tu email"
                  required
                  className="w-full px-0 py-3 pr-32 text-sm md:text-base bg-transparent border-none focus:outline-none placeholder:text-gray-500"
                />
                <button
                  type="submit"
                  className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 text-sm md:text-base font-bold text-orange-500 hover:text-orange-600 transition-colors duration-200 uppercase tracking-wide"
                >
                  Suscríbete
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 md:pt-8 gap-4">
          <p className="text-xs md:text-sm text-gray-600 order-2 md:order-1">© NILO SE 2026</p>
          
          <div className="flex gap-5 md:gap-6 order-1 md:order-2">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-orange-500 transition-colors duration-200"
              aria-label="Facebook"
            >
              <AssetIcon.facebook width={22} height={22}/>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-orange-500 transition-colors duration-200"
              aria-label="Instagram"
            >
              <AssetIcon.instagram width={22} height={22}/>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-orange-500 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <AssetIcon.linkedin width={22} height={22}/>
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-orange-500 transition-colors duration-200"
              aria-label="YouTube"
            >
              <AssetIcon.youtube width={22} height={22}/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

