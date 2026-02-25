import { FamilyOfficePage } from "@/ui/industrias/family-office/FamilyOfficePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cobranza y Control Financiero para Family Offices | Sena",
  description:
    "Plataforma de gestión de cuentas por cobrar y control financiero patrimonial para Family Offices, holdings familiares y administradoras de patrimonio. Consolida la cobranza de múltiples sociedades con trazabilidad y confidencialidad.",
  keywords:
    "cobranza para Family Office, gestión cuentas por cobrar holding, control financiero patrimonial, consolidación cartera empresas familiares, automatización cobranza B2B holdings, seguimiento de flujo de caja inversiones, Sena",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.somossena.com/industrias/family-office",
  },
  openGraph: {
    title: "Cobranza y Control Financiero para Family Offices | Sena",
    description:
      "Patrimonio diversificado. Control absoluto. Sena centraliza la cobranza y el seguimiento financiero para holdings familiares y estructuras de inversión.",
    type: "website",
    siteName: "Sena",
    locale: "es_PE",
    url: "https://www.somossena.com/industrias/family-office",
    images: ["https://somossena.com/sena-crm-lite.jpg"],
  },
};

const FamilyOffice = () => {
  return <FamilyOfficePage />;
};

export default FamilyOffice;
