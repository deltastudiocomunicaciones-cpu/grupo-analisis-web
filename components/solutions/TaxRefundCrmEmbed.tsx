"use client";

import Script from "next/script";

export default function TaxRefundCrmEmbed() {
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
          src="https://api.sitioss.com/widget/form/ZXTN0zZBswHhSwYDNiAC"
          id="inline-ZXTN0zZBswHhSwYDNiAC"
          title="Formulario de Devolución de Impuestos"
          className="block min-h-[1143px] w-full border-0"
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Formulario de Devolución de Impuestos"
          data-height="1143"
          data-layout-iframe-id="inline-ZXTN0zZBswHhSwYDNiAC"
          data-form-id="ZXTN0zZBswHhSwYDNiAC"
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