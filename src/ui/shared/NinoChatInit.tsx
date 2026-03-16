"use client";

import Script from "next/script";

const NINO_API_KEY = process.env.NEXT_PUBLIC_NINO_API_KEY || "";

export default function NinoChatInit() {
  return (
    <>
      <Script
        src="https://flujopay.blob.core.windows.net/webchat/landing.js"
        strategy="lazyOnload"
      />
      <Script id="nino-chat-init" strategy="lazyOnload">
        {`
          (function check() {
            if (typeof NinoChat !== 'undefined') {
              NinoChat.init({
                apiKey: '${NINO_API_KEY}',
                model: 'claude-haiku-4-5-20251001',
                agentName: 'Sena',
                theme: 'light',
                offsetBottom: 100,
                offsetSide: 34,
              });
            } else {
              setTimeout(check, 200);
            }
          })();
        `}
      </Script>
    </>
  );
}
