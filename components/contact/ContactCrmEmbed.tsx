"use client";

import Script from "next/script";

export default function ContactCrmEmbed() {
  return (
    <div className="space-y-5">
      {/* MARCO CRM */}
      <div
        className="
          overflow-hidden
          rounded-[26px]
          border
          border-white/12
          bg-white
          shadow-[0_24px_80px_rgba(0,0,0,0.30)]
        "
      >
        <iframe
          src="https://api.sitioss.com/widget/form/NcSNz3yP9PW9MlGj2UbO"
          id="inline-NcSNz3yP9PW9MlGj2UbO"
          title="Contacto Web"
          className="block min-h-[989px] w-full border-0"
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Contacto Web"
          data-height="989"
          data-layout-iframe-id="inline-NcSNz3yP9PW9MlGj2UbO"
          data-form-id="NcSNz3yP9PW9MlGj2UbO"
          data-cookie-consent="true"
          data-cookie-consent-provider="auto"
          loading="lazy"
        />
      </div>

      {/* CAPA COMERCIAL SADI */}
      <div
        className="
          overflow-hidden
          rounded-[24px]
          border
          border-white/10
          bg-white/[0.045]
          p-5
          backdrop-blur-xl
          sm:p-6
        "
      >
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#c96a1b]" />

              <p className="text-[9px] uppercase tracking-[0.32em] text-[#c96a1b]">
                Tecnología del ecosistema
              </p>
            </div>

            <h3 className="mt-4 text-xl font-semibold tracking-[-0.035em] text-white">
              Gestionado con SADI CRM.
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-[1.75] text-white/45">
              Tu solicitud ingresa a nuestra infraestructura comercial para
              facilitar su trazabilidad, clasificación y seguimiento por el
              equipo correspondiente.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {["CRM", "Clientes", "Cotizaciones", "Seguimiento"].map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-black/25
                  px-3
                  py-2
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-white/45
                "
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/sadi"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-[#c96a1b]
                px-5
                py-3
                text-xs
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-[#df781f]
              "
            >
              Conocer SADI
            </a>

            <a
              href="https://misadi.co/customer/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-white/12
                px-5
                py-3
                text-xs
                font-medium
                text-white/65
                transition-all
                duration-300
                hover:border-[#c96a1b]/50
                hover:text-white
              "
            >
              Ya soy cliente →
            </a>
          </div>
        </div>
      </div>

      <Script
        src="https://api.sitioss.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}