"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

const whatsappMessage = encodeURIComponent(
  "Hola Grupo A&C. Visité la página de Declaración de Renta y quiero validar mi caso con un especialista. Origen: web / declaración de renta."
);

const whatsappUrl = `https://wa.me/573118687774?text=${whatsappMessage}`;

export default function FloatingWhatsApp() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const visible =
    pathname === "/soluciones/declaracion-de-renta" ||
    pathname === "/soluciones/declaracion-de-renta/";

  if (!mounted || !visible) {
    return null;
  }

  return createPortal(
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar declaración de renta por WhatsApp"
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
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/20" />

      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6 fill-current sm:h-7 sm:w-7"
      >
        <path d="M12.04 2a9.84 9.84 0 0 0-8.42 14.93L2 22l5.22-1.57A9.98 9.98 0 1 0 12.04 2Zm0 17.98a8.04 8.04 0 0 1-4.1-1.12l-.29-.17-3.1.93.96-3.02-.19-.31a7.87 7.87 0 1 1 6.72 3.69Zm4.42-5.89c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.94-1.19a7.31 7.31 0 0 1-1.34-1.66c-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46a.89.89 0 0 0-.64.3c-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.43-.58 1.63-1.15.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
      </svg>

      

      <span className="pointer-events-none absolute inset-[1px] rounded-full border border-white/25" />
    </a>,
    document.body
  );
}