"use client";

import TaxRefundCrmEmbed from "@/components/solutions/TaxRefundCrmEmbed";
import type { FormEvent } from "react";
import type { ServiceLandingSection } from "@/data/services";

type Props = {
  section: ServiceLandingSection;
};

const WHATSAPP_NUMBER = "573118687774";

const suspiciousPattern =
  /(https?:\/\/|www\.|bit\.ly|tinyurl\.com|t\.me\/|wa\.me\/)/i;

export default function TaxRefundDiagnosticForm({ section }: Props) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    // Honeypot
    if (String(formData.get("website") ?? "").trim()) {
      return;
    }

    const nombre = String(formData.get("nombre") ?? "").trim();
    const empresa = String(formData.get("empresa") ?? "").trim();
    const telefono = String(formData.get("telefono") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const actividad = String(formData.get("actividad") ?? "").trim();

    const impuesto = String(formData.get("impuesto") ?? "").trim();
    const saldo =
      String(formData.get("saldo") ?? "").trim() || "No informado";
    const periodo =
      String(formData.get("periodo") ?? "").trim() || "No informado";
    const intento =
      String(formData.get("intento") ?? "").trim() || "No informado";

    const freeText = [nombre, empresa, telefono, email, actividad].join(" ");

    if (suspiciousPattern.test(freeText)) {
      alert(
        "Por seguridad, los campos del formulario no deben contener enlaces."
      );
      return;
    }

    const message = [
      "Hola Grupo A&C, quiero evaluar una posible devolución de impuestos.",
      "",
      `Nombre y apellido: ${nombre}`,
      `Empresa: ${empresa}`,
      `WhatsApp / Teléfono: ${telefono}`,
      `Correo electrónico: ${email}`,
      `Actividad económica: ${actividad}`,
      "",
      `Impuesto con saldo a favor: ${impuesto}`,
      `Valor aproximado del saldo: ${saldo}`,
      `El saldo corresponde a: ${periodo}`,
      `Estado de la solicitud: ${intento}`,
      "",
      "Autorizo el tratamiento de mis datos para recibir orientación relacionada con la evaluación de mi saldo a favor.",
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappUrl;
  }

  const fieldClass =
    "w-full rounded-2xl border border-[#071e2e]/12 bg-[#f6f2eb] px-5 py-4 text-[#071e2e] outline-none transition placeholder:text-[#071e2e]/35 focus:border-[#c96a1b]";

  const labelClass =
    "mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#071e2e]/55";

  return (
    <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.48fr]">
     <TaxRefundCrmEmbed /> 

      {/* PANEL LATERAL */}
      <aside className="flex flex-col justify-between rounded-[2rem] bg-[#061d2e] p-7 text-white md:p-9">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#c96a1b]">
            Evaluación inicial
          </p>

          <h3 className="mt-7 font-serif text-3xl font-semibold leading-[1.05]">
            Primero revisamos. Después solicitamos.
          </h3>

          <p className="mt-5 text-sm font-light leading-[1.8] text-white/60">
            La información suministrada nos permite conocer el origen,
            dimensión y estado del saldo antes de definir la ruta tributaria
            adecuada.
          </p>

          <div className="mt-8 space-y-3 border-t border-white/10 pt-7 text-xs text-white/50">
            <p>✓ Revisión inicial de procedencia</p>
            <p>✓ Especialistas tributarios de Grupo A&amp;C</p>
            <p>✓ Atención a empresas en Colombia</p>
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