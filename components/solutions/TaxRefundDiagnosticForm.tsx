"use client";

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
      <form
        onSubmit={handleSubmit}
        className="relative rounded-[2rem] border border-[#071e2e]/10 bg-white/75 p-6 shadow-[0_28px_90px_rgba(7,30,46,0.08)] md:p-9"
      >
        {/* HONEYPOT */}
        <div
          className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
          aria-hidden="true"
        >
          <label htmlFor="refund-website">Website</label>
          <input
            id="refund-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid gap-5">
          {/* NOMBRE + EMPRESA */}
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="refund-nombre" className={labelClass}>
                Nombre y apellido
              </label>

              <input
                id="refund-nombre"
                name="nombre"
                type="text"
                required
                minLength={2}
                maxLength={100}
                autoComplete="name"
                placeholder="Nombre completo"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="refund-empresa" className={labelClass}>
                Empresa
              </label>

              <input
                id="refund-empresa"
                name="empresa"
                type="text"
                required
                minLength={2}
                maxLength={120}
                autoComplete="organization"
                placeholder="Nombre de la empresa"
                className={fieldClass}
              />
            </div>
          </div>

          {/* TELÉFONO + CORREO */}
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="refund-telefono" className={labelClass}>
                WhatsApp / Teléfono
              </label>

              <input
                id="refund-telefono"
                name="telefono"
                type="tel"
                required
                minLength={7}
                maxLength={30}
                autoComplete="tel"
                placeholder="+57 300 000 0000"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="refund-email" className={labelClass}>
                Correo electrónico
              </label>

              <input
                id="refund-email"
                name="email"
                type="email"
                required
                maxLength={160}
                autoComplete="email"
                placeholder="correo@empresa.com"
                className={fieldClass}
              />
            </div>
          </div>

          {/* ACTIVIDAD */}
          <div>
            <label htmlFor="refund-actividad" className={labelClass}>
              Actividad económica
            </label>

            <input
              id="refund-actividad"
              name="actividad"
              type="text"
              required
              minLength={2}
              maxLength={120}
              placeholder="Ej. Comercio, construcción, exportaciones..."
              className={fieldClass}
            />
          </div>

          {/* IMPUESTO */}
          <div>
            <label htmlFor="refund-impuesto" className={labelClass}>
              ¿En qué impuesto tiene saldo a favor?
            </label>

            <select
              id="refund-impuesto"
              name="impuesto"
              required
              defaultValue=""
              className={fieldClass}
            >
              <option value="" disabled>
                Seleccione una opción
              </option>

              <option value="IVA">IVA</option>
              <option value="Renta">Renta</option>
              <option value="Otro">Otro</option>
              <option value="No estoy seguro">No estoy seguro</option>
            </select>
          </div>

          {/* VALOR DEL SALDO */}
          <div>
            <label htmlFor="refund-saldo" className={labelClass}>
              ¿Cuál es aproximadamente el valor del saldo a favor?
            </label>

            <select
              id="refund-saldo"
              name="saldo"
              defaultValue=""
              className={fieldClass}
            >
              <option value="" disabled>
                Seleccione un rango
              </option>

              <option value="Menos de $20 millones">
                Menos de $20 millones
              </option>
              <option value="$20 – $50 millones">
                $20 – $50 millones
              </option>
              <option value="$50 – $100 millones">
                $50 – $100 millones
              </option>
              <option value="$100 – $500 millones">
                $100 – $500 millones
              </option>
              <option value="Más de $500 millones">
                Más de $500 millones
              </option>
              <option value="No conozco el valor">
                No conozco el valor
              </option>
            </select>
          </div>

          {/* PERIODO */}
          <div>
            <label htmlFor="refund-periodo" className={labelClass}>
              ¿El saldo corresponde a?
            </label>

            <select
              id="refund-periodo"
              name="periodo"
              defaultValue=""
              className={fieldClass}
            >
              <option value="" disabled>
                Seleccione una opción
              </option>

              <option value="Último período">Último período</option>
              <option value="Varios períodos">Varios períodos</option>
              <option value="No estoy seguro">No estoy seguro</option>
            </select>
          </div>

          {/* INTENTO PREVIO */}
          <div>
            <label htmlFor="refund-intento" className={labelClass}>
              ¿Ya ha intentado solicitar la devolución?
            </label>

            <select
              id="refund-intento"
              name="intento"
              defaultValue=""
              className={fieldClass}
            >
              <option value="" disabled>
                Seleccione una opción
              </option>

              <option value="No">No</option>
              <option value="Sí">Sí</option>
              <option value="Sí, pero fue inadmitida/rechazada">
                Sí, pero fue inadmitida/rechazada
              </option>
              <option value="Está actualmente en trámite">
                Está actualmente en trámite
              </option>
            </select>
          </div>

          {/* CONSENTIMIENTO */}
          <label className="flex items-start gap-3 rounded-2xl border border-[#071e2e]/8 bg-[#f6f2eb]/70 p-4 text-xs leading-[1.7] text-[#071e2e]/60">
            <input
              type="checkbox"
              name="autorizacion"
              value="si"
              required
              className="mt-1 h-4 w-4 shrink-0 accent-[#c96a1b]"
            />

            <span>
              Autorizo el tratamiento de mis datos para recibir orientación
              relacionada con la evaluación de mi saldo a favor y la posible
              devolución de impuestos.
            </span>
          </label>

          <button
            type="submit"
            className="mt-2 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#c96a1b] px-7 py-4 text-center text-xs font-semibold uppercase tracking-[0.1em] text-white shadow-[0_18px_45px_rgba(201,106,27,0.25)] transition hover:-translate-y-0.5 hover:bg-[#dc741b] sm:text-sm"
          >
            {section.primaryCta?.label ?? "Evaluar mi saldo a favor"}
            <span className="ml-3 text-lg">→</span>
          </button>

          <p className="text-center text-[11px] leading-relaxed text-[#071e2e]/42">
            Al continuar, WhatsApp abrirá el resumen de su caso para que pueda
            revisarlo antes de enviarlo.
          </p>
        </div>
      </form>

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