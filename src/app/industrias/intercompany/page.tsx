import { InterComPage } from "@/ui/industrias/intercompany/InterComPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cobranza para Empresas SaaS y Modelos de Suscripción | Sena",
  description:
    "Protege tu MRR y recupera pagos fallidos con Sena. Plataforma de cobranza automatizada para empresas SaaS, plataformas digitales y negocios con ingresos recurrentes. Reduce churn financiero y recupera ingresos.",
  keywords:
    "cobranza para empresas SaaS, recuperación de pagos fallidos suscripción, gestión cuentas por cobrar MRR, automatización cobranza B2B recurrente, control financiero plataformas digitales, reducir churn financiero SaaS, cobranza modelo Intercompany, Sena",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.somossena.com/industrias/intercompany",
  },
  openGraph: {
    title: "Cobranza para SaaS y Suscripciones | Sena",
    description:
      "MRR protegido. Cobranza automatizada. Cero ingresos perdidos por falta de pago. Sena transforma la recuperación de pagos en empresas de suscripción.",
    type: "website",
    siteName: "Sena",
    locale: "es_PE",
    url: "https://www.somossena.com/industrias/intercompany",
  },
};

const InterCom = () => {
  return <InterComPage />;
};

export default InterCom;
