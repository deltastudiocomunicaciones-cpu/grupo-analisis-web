"use client";

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
      <form
        onSubmit={handleSubmit}
        className="rounded-[2rem] border border-[#071e2e]/10 bg-white/75 p-6 shadow-[0_28px_90px_rgba(7,30,46,0.08)] md:p-9"
      >
        <div className="grid gap-5">
          {/* NOMBRE */}
          <div>
            <label
              htmlFor="diagnostico-nombre"
              className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#071e2e]/55"
            >
              Nombre completo
            </label>

            <input
              id="diagnostico-nombre"
              name="nombre"
              type="text"
              required
              autoComplete="name"
              placeholder="¿Cómo te llamas?"
              className="w-full rounded-2xl border border-[#071e2e]/12 bg-[#f6f2eb] px-5 py-4 text-[#071e2e] outline-none transition placeholder:text-[#071e2e]/35 focus:border-[#c96a1b]"
            />
          </div>

          {/* CÉDULA Y CONTACTO */}
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label
                htmlFor="diagnostico-cedula"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#071e2e]/55"
              >
                Cédula
              </label>

              <input
                id="diagnostico-cedula"
                name="cedula"
                type="text"
                inputMode="numeric"
                required
                minLength={5}
                maxLength={20}
                pattern="[0-9. -]{5,20}"
                placeholder="Número de identificación"
                className="w-full rounded-2xl border border-[#071e2e]/12 bg-[#f6f2eb] px-5 py-4 text-[#071e2e] outline-none transition placeholder:text-[#071e2e]/35 focus:border-[#c96a1b]"
              />
            </div>

            <div>
              <label
                htmlFor="diagnostico-contacto"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#071e2e]/55"
              >
                WhatsApp o correo
              </label>

              <input
                id="diagnostico-contacto"
                name="contacto"
                type="text"
                required
                placeholder="Número o correo electrónico"
                className="w-full rounded-2xl border border-[#071e2e]/12 bg-[#f6f2eb] px-5 py-4 text-[#071e2e] outline-none transition placeholder:text-[#071e2e]/35 focus:border-[#c96a1b]"
              />
            </div>
          </div>

          {/* INGRESOS Y PATRIMONIO */}
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label
                htmlFor="diagnostico-ingresos"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#071e2e]/55"
              >
                Ingresos durante el año
              </label>

              <select
                id="diagnostico-ingresos"
                name="ingresos"
                required
                defaultValue=""
                className="w-full rounded-2xl border border-[#071e2e]/12 bg-[#f6f2eb] px-5 py-4 text-[#071e2e] outline-none transition focus:border-[#c96a1b]"
              >
                <option value="" disabled>
                  Selecciona un rango
                </option>

                <option value="De $69.000.000 a menos de $120.000.000">
                  De $69.000.000 a menos de $120.000.000
                </option>

                <option value="De $120.000.000 a menos de $500.000.000">
                  De $120.000.000 a menos de $500.000.000
                </option>

                <option value="De $500.000.000 a menos de $1.000.000.000">
                  De $500.000.000 a menos de $1.000.000.000
                </option>

                <option value="$1.000.000.000 o más">
                  $1.000.000.000 o más
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="diagnostico-patrimonio"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-[#071e2e]/55"
              >
                Patrimonio al 31 de diciembre
              </label>

              <select
                id="diagnostico-patrimonio"
                name="patrimonio"
                required
                defaultValue=""
                className="w-full rounded-2xl border border-[#071e2e]/12 bg-[#f6f2eb] px-5 py-4 text-[#071e2e] outline-none transition focus:border-[#c96a1b]"
              >
                <option value="" disabled>
                  Selecciona un rango
                </option>

                <option value="De $224.000.000 a menos de $800.000.000">
                  De $224.000.000 a menos de $800.000.000
                </option>

                <option value="De $800.000.000 a menos de $1.500.000.000">
                  De $800.000.000 a menos de $1.500.000.000
                </option>

                <option value="De $1.500.000.000 a menos de $3.000.000.000">
                  De $1.500.000.000 a menos de $3.000.000.000
                </option>

                <option value="$3.000.000.000 o más">
                  $3.000.000.000 o más
                </option>
              </select>
            </div>
          </div>

          {/* AUTORIZACIÓN */}
          <label className="flex items-start gap-3 rounded-2xl border border-[#071e2e]/8 bg-[#f6f2eb]/70 p-4 text-xs leading-[1.7] text-[#071e2e]/60">
            <input
              type="checkbox"
              name="autorizacion"
              value="si"
              required
              className="mt-1 h-4 w-4 shrink-0 accent-[#c96a1b]"
            />

            <span>
              Autorizo el tratamiento de mis datos para recibir orientación y
              una cotización relacionada con mi declaración de renta.
            </span>
          </label>

          {/* BOTÓN */}
          <button
            type="submit"
            className="mt-2 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#c96a1b] px-7 py-4 text-center text-xs font-semibold uppercase tracking-[0.1em] text-white shadow-[0_18px_45px_rgba(201,106,27,0.25)] transition hover:-translate-y-0.5 hover:bg-[#dc741b] sm:text-sm"
          >
            {section.primaryCta?.label ??
              "Cotizar mi declaración de renta"}

            <span className="ml-3 text-lg">→</span>
          </button>

          <p className="text-center text-[11px] leading-relaxed text-[#071e2e]/42">
            Al continuar, WhatsApp abrirá un mensaje con la información
            seleccionada para que puedas revisarla antes de enviarla.
          </p>
        </div>
      </form>

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