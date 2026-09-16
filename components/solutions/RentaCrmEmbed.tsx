"use client";

import Script from "next/script";

export default function RentaCrmEmbed() {
  return (
    <>
      <div
        className="
          w-full
          overflow-hidden
          rounded-[2rem]
          border
          border-[#071e2e]/10
          bg-white
          shadow-[0_28px_90px_rgba(7,30,46,0.08)]
        "
      >
        <iframe
          src="https://api.sitioss.com/widget/form/vvs6RZio1HLk6LRiykSn"
          id="inline-vvs6RZio1HLk6LRiykSn"
          title="Formulario Declaración de Renta PN"
          className="block min-h-[650px] w-full border-0"
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Formulario Declaración de Renta PN"
          data-height="650"
          data-layout-iframe-id="inline-vvs6RZio1HLk6LRiykSn"
          data-form-id="vvs6RZio1HLk6LRiykSn"
          data-cookie-consent="true"
          data-cookie-consent-provider="auto"
          loading="lazy"
        />
      </div>

      <Script
        src="https://api.sitioss.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}