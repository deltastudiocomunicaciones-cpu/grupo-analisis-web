"use client";

import RentaCrmEmbed from "@/components/solutions/RentaCrmEmbed";
import type { FormEvent } from "react";
import type { ServiceLandingSection } from "@/data/services";

type Props = {
  section: ServiceLandingSection;
};

const WHATSAPP_NUMBER = "573118687774";

export default function ServiceDiagnosticForm({ section }: Props) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const nombre = String(formData.get("nombre") ?? "").trim();
    const cedula = String(formData.get("cedula") ?? "").trim();
    const contacto = String(formData.get("contacto") ?? "").trim();
    const ingresos = String(formData.get("ingresos") ?? "").trim();
    const patrimonio = String(formData.get("patrimonio") ?? "").trim();

    const message = [
      "Hola Grupo A&C, quiero cotizar mi declaración de renta con TRACO.",
      "",
      `Nombre completo: ${nombre}`,
      `Cédula: ${cedula}`,
      `WhatsApp o correo: ${contacto}`,
      `Rango de ingresos: ${ingresos}`,
      `Rango de patrimonio: ${patrimonio}`,
      "",
      "Autorizo el uso de estos datos para recibir orientación sobre mi declaración de renta.",
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappUrl;
  }

  return (
    <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.48fr]">
     <RentaCrmEmbed />

      {/* PANEL LATERAL */}
      <aside className="flex flex-col justify-between rounded-[2rem] bg-[#061d2e] p-7 text-white md:p-9">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#c96a1b]">
            Cotización personalizada
          </p>

          <h3 className="mt-7 font-serif text-3xl font-semibold leading-[1.05]">
            Tu información será revisada por un especialista.
          </h3>

          <p className="mt-5 text-sm font-light leading-[1.8] text-white/60">
            Los rangos seleccionados nos permiten estimar la complejidad de tu
            declaración y ofrecerte una orientación adecuada para tu caso.
          </p>

          <div className="mt-8 space-y-3 border-t border-white/10 pt-7 text-xs text-white/50">
            <p>✓ Atención digital en Colombia</p>
            <p>✓ Respaldo profesional de Grupo A&amp;C</p>
            <p>✓ Cotización según la complejidad real</p>
          </div>
        </div>

        {section.secondaryCta && (
          <a
            href={section.secondaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:border-[#c96a1b] hover:bg-[#c96a1b]"
          >
            {section.secondaryCta.label}
          </a>
        )}
      </aside>
    </div>
  );
}