"use client";

import type { FormEvent } from "react";
import { useState } from "react";

const needs = [
  "Diagnóstico organizacional",
  "Programa para líderes",
  "Capacitación para equipos",
  "Jornada estratégica",
  "Auditorio",
  "Sala de juntas",
  "Sala audiovisual o podcast",
  "Conversatorio o evento",
  "Otro",
];

export default function CulturaConectaLeadForm() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const value = (name: string) => String(form.get(name) ?? "").trim();

    const message = [
      "Hola, quiero conversar con Cultura Conecta.",
      "",
      `Nombre: ${value("name")}`,
      `Empresa: ${value("company")}`,
      `Cargo: ${value("role")}`,
      `Correo: ${value("email")}`,
      `WhatsApp: ${value("phone")}`,
      `Necesidad: ${value("need")}`,
      `Participantes: ${value("participants") || "Por definir"}`,
      `Fecha tentativa: ${value("date") || "Por definir"}`,
      `Contexto: ${value("message") || "Sin información adicional"}`,
    ].join("\n");

    const whatsappNumber = process.env.NEXT_PUBLIC_CULTURA_CONECTA_WHATSAPP?.replace(
      /\D/g,
      "",
    );

    if (whatsappNumber) {
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer",
      );
      setStatus("ready");
      return;
    }

    const params = new URLSearchParams({
      origen: "cultura-conecta",
      empresa: value("company"),
      necesidad: value("need"),
    });

    window.location.href = `/contacto?${params.toString()}`;
  }

  const inputClass =
    "w-full rounded-2xl border border-white/12 bg-white/[0.055] px-5 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#a0c82b]/70 focus:bg-white/[0.08]";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
      <label className="space-y-2">
        <span className="text-[10px] uppercase tracking-[0.24em] text-white/45">
          Nombre
        </span>
        <input
          required
          name="name"
          autoComplete="name"
          placeholder="Tu nombre"
          className={inputClass}
        />
      </label>

      <label className="space-y-2">
        <span className="text-[10px] uppercase tracking-[0.24em] text-white/45">
          Empresa
        </span>
        <input
          required
          name="company"
          autoComplete="organization"
          placeholder="Nombre de la empresa"
          className={inputClass}
        />
      </label>

      <label className="space-y-2">
        <span className="text-[10px] uppercase tracking-[0.24em] text-white/45">
          Cargo
        </span>
        <input
          required
          name="role"
          autoComplete="organization-title"
          placeholder="Tu rol en la organización"
          className={inputClass}
        />
      </label>

      <label className="space-y-2">
        <span className="text-[10px] uppercase tracking-[0.24em] text-white/45">
          Correo corporativo
        </span>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          placeholder="nombre@empresa.com"
          className={inputClass}
        />
      </label>

      <label className="space-y-2">
        <span className="text-[10px] uppercase tracking-[0.24em] text-white/45">
          WhatsApp
        </span>
        <input
          required
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="+57 300 000 0000"
          className={inputClass}
        />
      </label>

      <label className="space-y-2">
        <span className="text-[10px] uppercase tracking-[0.24em] text-white/45">
          Tipo de necesidad
        </span>
        <select required name="need" defaultValue="" className={inputClass}>
          <option value="" disabled className="bg-[#071d32]">
            Selecciona una opción
          </option>
          {needs.map((need) => (
            <option key={need} value={need} className="bg-[#071d32]">
              {need}
            </option>
          ))}
        </select>
      </label>

      <label className="space-y-2">
        <span className="text-[10px] uppercase tracking-[0.24em] text-white/45">
          Participantes
        </span>
        <input
          type="number"
          min="1"
          name="participants"
          placeholder="Número aproximado"
          className={inputClass}
        />
      </label>

      <label className="space-y-2">
        <span className="text-[10px] uppercase tracking-[0.24em] text-white/45">
          Fecha tentativa
        </span>
        <input type="date" name="date" className={inputClass} />
      </label>

      <label className="space-y-2 md:col-span-2">
        <span className="text-[10px] uppercase tracking-[0.24em] text-white/45">
          Contexto
        </span>
        <textarea
          name="message"
          rows={5}
          placeholder="Cuéntanos brevemente qué necesita movilizar tu organización"
          className={`${inputClass} resize-none`}
        />
      </label>

      <div className="mt-3 md:col-span-2">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-[#a0c82b] px-8 py-4 text-sm font-semibold text-[#082947] transition-transform duration-300 hover:scale-[1.01] sm:w-auto"
        >
          Enviar solicitud
          <span className="ml-3">→</span>
        </button>

        <p className="mt-4 max-w-2xl text-xs leading-6 text-white/38">
          Esta solicitud no genera una reserva automática. Nuestro equipo validará
          el alcance, la disponibilidad y la cotización antes de confirmar.
        </p>

        {status === "ready" && (
          <p aria-live="polite" className="mt-4 text-sm text-[#b7d65e]">
            Tu solicitud está lista para continuar en WhatsApp.
          </p>
        )}
      </div>
    </form>
  );
}