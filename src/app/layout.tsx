import { getCountriesServer } from "@/lib/services/countryService.server";
import { getIpInfoServer } from "@/lib/services/ipConfigService.server";
import { ModalRenderer } from "@/ui/shared/ModalRender";
import { Toast } from "@/ui/shared/Toast";
import NinoChatInit from "@/ui/shared/NinoChatInit";
import Whatsapp from "@/ui/shared/WhatsApp";
import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { Suspense } from "react";
import { adobeCleanFont, canaroFont, caslonFont } from "./fonts";
import "./globals.css";
import Providers from "./providers";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Sena - El arte de cobrar bien",
  description:
    "Optimiza tu gestión de cobranza y pagos de facturas con Sena, el CRM B2B que simplifica procesos, mejora la eficiencia y acelera tus ingresos.",
  keywords:
    "CRM cobranza, pagos B2B, facturación, gestión de pagos, CRM empresas, automatización de cobranza, Sena",
  authors: [{ name: "Sena" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sena - El arte de cobrar bien",
    description:
      "Con Sena, simplifica y acelera la gestión de tus cobros y pagos. Una solución para empresas enfocada en eficiencia y resultados.",
    type: "website",
    url: "https://somossena.com",
    images: ["https://somossena.com/sena-crm-lite.jpg"],
    siteName: "Sena",
    locale: "es_PE",
  },
  other: {
    "facebook-domain-verification": "tyjmxihsgkrx666ql4rwmnhsftl6hv",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [ipInfo, countries] = await Promise.all([
    getIpInfoServer(),
    getCountriesServer(),
  ]);
  const country = ipInfo?.country || null;

  return (
    <Providers country={country} countries={countries}>
      <html lang="es" dir="ltr">
        <GoogleTagManager gtmId="GTM-5W7F9MSP" />
        <head />
        <body
          className={`${canaroFont.variable} ${adobeCleanFont.variable} ${caslonFont.variable} antialiased font-adobe`}
        >
          {/* Deshabilitar debugger statements */}
          <Script id="disable-debugger" strategy="beforeInteractive">
            {`
              (function() {
                  const originalDebugger = window.debugger;
                  window.debugger = function() {
                      return;
                  };
              })();
            `}
          </Script>
          <Suspense>{children}</Suspense>
          <ModalRenderer />
          <Toast />
          <Whatsapp
            message="Hola, vi su web y quiero saber más sobre Sena y cómo funciona."
            animated
          />
          {/* Nino Chat — Landing widget */}
          <NinoChatInit />
        </body>
      </html>
    </Providers>
  );
}
