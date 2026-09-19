"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

const WHATSAPP_NUMBER = "573118687774";

type ServiceOption = {
  id: string;
  label: string;
  description: string;
  message: string;
};

const services: ServiceOption[] = [
  {
    id: "renta",
    label: "Declaración de Renta",
    description: "Preparación, revisión y orientación tributaria.",
    message:
      "Quiero recibir orientación sobre mi Declaración de Renta y validar mi caso con un especialista.",
  },
  {
    id: "devolucion",
    label: "Devolución de Impuestos",
    description: "Evaluación de saldos a favor y solicitudes ante la DIAN.",
    message:
      "Quiero evaluar una posible devolución de impuestos o saldo a favor ante la DIAN.",
  },
  {
    id: "tributaria",
    label: "Asesoría Tributaria",
    description: "Planeación, diagnóstico y decisiones tributarias.",
    message:
      "Quiero conversar con un especialista sobre una necesidad tributaria de mi empresa.",
  },
  {
    id: "sadi",
    label: "SADI ERP",
    description: "Software empresarial y gestión administrativa.",
    message:
      "Estoy interesado en conocer SADI ERP y quiero recibir una demostración u orientación comercial.",
  },
  {
    id: "traco",
    label: "Trámites Empresariales",
    description: "DIAN, Cámara de Comercio y gestión documental.",
    message:
      "Necesito orientación sobre un trámite empresarial y quisiera hablar con el equipo de Grupo A&C.",
  },
  {
    id: "contabilidad",
    label: "Gestión Contable",
    description: "Contabilidad, revisión y acompañamiento empresarial.",
    message:
      "Quiero recibir orientación sobre los servicios contables de Grupo A&C.",
  },
  {
    id: "general",
    label: "Hablar con un asesor",
    description: "No estoy seguro del servicio que necesito.",
    message:
      "Visité la página de Grupo A&C y quisiera conversar con un asesor para identificar la solución adecuada.",
  },
];

function getSuggestedService(pathname: string) {
  if (pathname.includes("declaracion-de-renta")) return "renta";
  if (pathname.includes("devolucion-impuestos")) return "devolucion";
  if (pathname.includes("asesoria-tributaria")) return "tributaria";
  if (pathname.includes("sadi")) return "sadi";
  if (pathname.includes("traco")) return "traco";
  if (pathname.includes("contabilidad")) return "contabilidad";

  return "general";
}

export default function FloatingWhatsApp() {
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  const suggestedService = useMemo(
    () => getSuggestedService(pathname),
    [pathname]
  );

  const [selectedService, setSelectedService] =
    useState<string>(suggestedService);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setSelectedService(suggestedService);
  }, [suggestedService]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const selected =
    services.find((service) => service.id === selectedService) ??
    services[services.length - 1];

  const message = [
    "Hola Grupo A&C.",
    "",
    selected.message,
    "",
    `Origen: web Grupo A&C · ${pathname}`,
  ].join("\n");

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  if (!mounted) {
    return null;
  }

  return createPortal(
    <>
      {/* PANEL */}
      {open && (
        <>
          {/* Overlay móvil */}
          <button
            type="button"
            aria-label="Cerrar asistente de contacto"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[9998] bg-black/20 backdrop-blur-[2px] sm:bg-transparent sm:backdrop-blur-none"
          />

          <div
            className="
              fixed
              bottom-[5.5rem]
              left-4
              right-4
              z-[9999]
              max-h-[calc(100vh-8rem)]
              overflow-y-auto
              rounded-[28px]
              border
              border-black/10
              bg-[#f7f3ed]/98
              p-5
              text-[#071e2e]
              shadow-[0_30px_100px_rgba(0,0,0,0.22)]
              backdrop-blur-2xl
              sm:left-auto
              sm:right-6
              sm:w-[390px]
              sm:p-6
            "
          >
            {/* CABECERA */}
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#25D366]" />

                  <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#c96a1b]">
                    Grupo A&C
                  </p>
                </div>

                <h2 className="mt-4 text-2xl font-semibold leading-[1.05] tracking-[-0.04em]">
                  ¿Cómo podemos orientarte?
                </h2>

                <p className="mt-3 text-sm leading-[1.7] text-[#071e2e]/55">
                  Selecciona el frente que mejor describe tu necesidad.
                  Prepararemos la conversación antes de llevarte a WhatsApp.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/10
                  text-lg
                  text-black/45
                  transition-all
                  hover:border-black/20
                  hover:text-black
                "
              >
                ×
              </button>
            </div>

            {/* DIVISOR */}
            <div className="my-6 h-px bg-black/8" />

            {/* OPCIONES */}
            <div className="space-y-2">
              {services.map((service) => {
                const active = selectedService === service.id;

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setSelectedService(service.id)}
                    className={`
                      group
                      w-full
                      rounded-[18px]
                      border
                      p-4
                      text-left
                      transition-all
                      duration-300
                      ${
                        active
                          ? "border-[#c96a1b]/40 bg-[#c96a1b]/8"
                          : "border-black/8 bg-white/55 hover:border-black/15 hover:bg-white"
                      }
                    `}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`
                          mt-1.5
                          h-2
                          w-2
                          shrink-0
                          rounded-full
                          transition-all
                          ${
                            active
                              ? "bg-[#c96a1b]"
                              : "bg-black/15 group-hover:bg-[#c96a1b]/50"
                          }
                        `}
                      />

                      <div>
                        <p className="text-sm font-semibold tracking-[-0.015em]">
                          {service.label}
                        </p>

                        <p className="mt-1 text-xs leading-[1.6] text-black/45">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="
                mt-6
                flex
                min-h-[52px]
                w-full
                items-center
                justify-center
                rounded-full
                bg-[#071e2e]
                px-6
                py-4
                text-sm
                font-medium
                text-white
                shadow-[0_18px_45px_rgba(7,30,46,0.16)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#c96a1b]
              "
            >
              Iniciar conversación
              <span className="ml-3">→</span>
            </a>

            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />

              <p className="text-[9px] uppercase tracking-[0.22em] text-black/30">
                Atención Grupo A&C
              </p>
            </div>
          </div>
        </>
      )}

      {/* BOTÓN FLOTANTE */}
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={
          open
            ? "Cerrar asistente de WhatsApp"
            : "Hablar con Grupo A&C por WhatsApp"
        }
        aria-expanded={open}
        className="
          group
          fixed
          bottom-[calc(1rem+env(safe-area-inset-bottom))]
          right-4
          z-[10000]
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-white/30
          bg-[#25D366]
          text-white
          shadow-[0_10px_30px_rgba(37,211,102,0.38)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:scale-105
          hover:bg-[#20bd5a]
          hover:shadow-[0_14px_38px_rgba(37,211,102,0.52)]
          sm:bottom-6
          sm:right-6
          sm:h-14
          sm:w-14
        "
      >
        {!open && (
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/20" />
        )}

        {open ? (
          <span className="text-2xl font-light">×</span>
        ) : (
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6 fill-current sm:h-7 sm:w-7"
          >
            <path d="M12.04 2a9.84 9.84 0 0 0-8.42 14.93L2 22l5.22-1.57A9.98 9.98 0 1 0 12.04 2Zm0 17.98a8.04 8.04 0 0 1-4.1-1.12l-.29-.17-3.1.93.96-3.02-.19-.31a7.87 7.87 0 1 1 6.72 3.69Zm4.42-5.89c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.94-1.19a7.31 7.31 0 0 1-1.34-1.66c-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46a.89.89 0 0 0-.64.3c-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.43-.58 1.63-1.15.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
          </svg>
        )}

        <span className="pointer-events-none absolute inset-[1px] rounded-full border border-white/25" />
      </button>
    </>,
    document.body
  );
}