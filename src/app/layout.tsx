import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";
import { adobeCleanFont, canaroFont, caslonFont } from "./fonts";
import "./globals.css";
import { ModalRenderer } from "@/ui/shared/ModalRender";

export const metadata: Metadata = {
  title: "Sena - El mejor CRM de cobranza y pagos B2B",
  description:
    "Optimiza tu gestión de cobranza y pagos de facturas con Sena, el CRM B2B que simplifica procesos, mejora la eficiencia y acelera tus ingresos.",
  keywords:
    "CRM cobranza, pagos B2B, facturación, gestión de pagos, CRM empresas, automatización de cobranza, Sena",
  authors: [{ name: "Sena" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sena - El mejor CRM de cobranza y pagos B2B",
    description:
      "Con Sena, simplifica y acelera la gestión de tus cobros y pagos. Una solución para empresas enfocada en eficiencia y resultados.",
    type: "website",
    siteName: "Sena",
    locale: "es_PE",
  },
  other: {
    "facebook-domain-verification": "tyjmxihsgkrx666ql4rwmnhsftl6hv",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" dir="ltr">
      <head>
        {/* Google Tag Manager Script (carga diferida) */}
        <Script id="gtm-script" strategy="lazyOnload">
          {`
                    (function(w,d,s,l,i){
                        w[l]=w[l]||[];
                        w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                        var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                        j.async=true;
                        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                        f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-T2QDCJ6C');
                        `}
        </Script>
      </head>
      <body
        className={`${canaroFont.variable} ${adobeCleanFont.variable} ${caslonFont.variable} antialiased font-adobe`}
      >
        {/* Deshabilitar debugger statements */}
        <Script id="disable-debugger" strategy="beforeInteractive">
          {`
                                    (function() {
                                        const originalDebugger = window.debugger;
                                        window.debugger = function() {
                                            // No hacer nada, deshabilitar pausas del debugger
                                            return;
                                        };
                                    })();
                                `}
        </Script>
        {/* Fallback para Google Tag Manager */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T2QDCJ6C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Suspense>{children}</Suspense>
        <ModalRenderer />
      </body>
    </html>
  );
}
