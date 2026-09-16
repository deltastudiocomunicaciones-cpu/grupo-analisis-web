"use client";

import { usePathname } from "next/navigation";
import ServiceWhatsAppFloat from "@/components/solutions/ServiceWhatsAppFloat";

export default function GlobalWhatsAppFloat() {
  const pathname = usePathname();

  let message =
    "Hola Grupo A&C, estoy interesado en conocer más sobre sus servicios y quisiera recibir asesoría.";

  if (pathname === "/soluciones/declaracion-de-renta") {
    message =
      "Hola Grupo A&C, necesito preparar mi declaración de renta y quisiera recibir orientación especializada.";
  }

  if (pathname === "/soluciones/devolucion-impuestos") {
    message =
      "Hola Grupo A&C, estoy interesado en evaluar una devolución de impuestos y quiero revisar si mi empresa puede solicitar un saldo a favor ante la DIAN.";
  }

  return <ServiceWhatsAppFloat message={message} />;
}