import { TechBeautyPage } from "@/ui/industrias/tech-beauty/TechBeautyPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cobranza para Empresas de Belleza y Cosmética | Sena",
  description:
    "Plataforma de gestión de cuentas por cobrar para empresas de belleza y cosmética. Automatiza tu cobranza sin dañar la elegancia de tu marca ni las relaciones con salones y distribuidores.",
  keywords:
    "cobranza para empresas de belleza, software de cuentas por cobrar cosmética, gestión de cobranza distribuidores, automatización cobranza B2B, recuperación de cartera beauty tech, Sena",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.somossena.com/industrias/tech-beauty",
  },
  openGraph: {
    title: "Cobranza para Beauty Tech | Sena",
    description:
      "Cobra sin perder la elegancia de tu marca. Sena automatiza tu ciclo de cuentas por cobrar para salones, distribuidores y retailers de belleza.",
    type: "website",
    siteName: "Sena",
    locale: "es_PE",
    url: "https://www.somossena.com/industrias/tech-beauty",
    images: ["https://somossena.com/sena-crm-lite.jpg"],
  },
};

const TechBeauty = () => {
  return <TechBeautyPage />;
};

export default TechBeauty;
