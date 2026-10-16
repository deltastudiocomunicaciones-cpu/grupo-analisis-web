"use client";

import { useState } from "react";

interface CrmEmbedGateProps {
  formId: string;
  formName: string;
  title: string;
  height: number;
  eyebrow?: string;
  heading?: string;
  description?: string;
  buttonLabel?: string;
  accentColor?: string;
}

const SITIOSS_ORIGIN = "https://api.sitioss.com";

function warmSitiossConnection() {
  if (typeof document === "undefined") return;

  const existingDnsPrefetch = document.querySelector(
    'link[rel="dns-prefetch"][href="//api.sitioss.com"]'
  );

  if (!existingDnsPrefetch) {
    const dnsPrefetch = document.createElement("link");
    dnsPrefetch.rel = "dns-prefetch";
    dnsPrefetch.href = "//api.sitioss.com";
    document.head.appendChild(dnsPrefetch);
  }

  const existingPreconnect = document.querySelector(
    `link[rel="preconnect"][href="${SITIOSS_ORIGIN}"]`
  );

  if (!existingPreconnect) {
    const preconnect = document.createElement("link");
    preconnect.rel = "preconnect";
    preconnect.href = SITIOSS_ORIGIN;
    document.head.appendChild(preconnect);
  }
}

export default function CrmEmbedGate({
  formId,
  formName,
  title,
  height,
  eyebrow = "Atención comercial",
  heading = "Conecte su solicitud con nuestro equipo.",
  description = "Al iniciar, su información ingresará directamente a nuestra infraestructura comercial para clasificación, seguimiento y atención.",
  buttonLabel = "Iniciar solicitud",
  accentColor = "#c96a1b",
}: CrmEmbedGateProps) {
  const [active, setActive] = useState(false);

  if (active) {
  return (
    <div className="w-full overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_28px_90px_rgba(7,30,46,0.10)]">
      <div className="flex items-center gap-3 border-b border-[#071e2e]/8 bg-[#071e2e] px-6 py-4">
        <span
          className="h-2 w-2 rounded-full"
          style={{
            backgroundColor: accentColor,
            boxShadow: `0 0 18px ${accentColor}`,
          }}
        />

        <p className="text-[9px] uppercase tracking-[0.24em] text-white/45">
          Conexión segura · Sistema comercial Grupo A&amp;C
        </p>
      </div>

      <iframe
        src={`${SITIOSS_ORIGIN}/widget/form/${formId}`}
        title={title}
        className="block w-full border-0 bg-white"
        style={{
          height: `${height}px`,
          minHeight: `${height}px`,
        }}
        allow="clipboard-write"
      />
    </div>
  );
}

  return (
    <div className="relative flex min-h-[520px] overflow-hidden rounded-[2rem] border border-[#071e2e]/10 bg-[#071e2e] px-7 py-10 text-white shadow-[0_28px_90px_rgba(7,30,46,0.14)] sm:px-10 sm:py-12">
      <div
        className="pointer-events-none absolute right-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full blur-[120px]"
        style={{
          backgroundColor: `${accentColor}24`,
        }}
      />

      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:54px_54px]" />

      <div className="relative z-10 flex max-w-xl flex-col justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: accentColor }}
            />

            <p
              className="text-[9px] uppercase tracking-[0.32em]"
              style={{ color: accentColor }}
            >
              {eyebrow}
            </p>
          </div>

          <h3 className="mt-7 max-w-lg text-3xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-4xl">
            {heading}
          </h3>

          <p className="mt-6 max-w-lg text-sm font-light leading-[1.85] text-white/50">
            {description}
          </p>
        </div>

        <div className="mt-12">
          <button
            type="button"
            onPointerEnter={warmSitiossConnection}
            onFocus={warmSitiossConnection}
            onClick={() => {
              warmSitiossConnection();
              setActive(true);
            }}
            className="inline-flex min-h-14 items-center justify-center rounded-full px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-0.5"
            style={{
              backgroundColor: accentColor,
              boxShadow: `0 18px 50px ${accentColor}2e`,
            }}
          >
            {buttonLabel} →
          </button>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.16em] text-white/30">
            <span>CRM</span>
            <span>Seguimiento</span>
            <span>Clasificación</span>
            <span>Atención comercial</span>
          </div>

          <p className="mt-5 max-w-md text-xs font-light leading-relaxed text-white/30">
            El sistema comercial se conectará cuando decidas iniciar la
            solicitud.
          </p>
        </div>
      </div>
    </div>
  );
}