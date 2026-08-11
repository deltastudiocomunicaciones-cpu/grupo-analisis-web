"use client";

import { contactLinks } from "@/data/contact";
import Image from "next/image";
import Link from "next/link";

const ecosystem = [
  {
    name: "SADI ERP",
    href: "/sadi",
  },
  {
    name: "Análisis & Consultorías",
    href: "/analisis-consultorias",
  },
  {
    name: "TRACO",
    href: "/traco",
  },
  {
    name: "CEC",
    href: "/contadores-en-colombia",
  },
  {
    name: "ASPRO S.A.S.",
    href: "/aspro",
  },
  {
    name: "CULTURA CONECTA",
    href: "/cultura-conecta",
  },
];

const offices = [
  {
    name: "Sede Sabaneta",
    address: "Calle 52 Sur N° 43 A 20 · Ed. Scala · Of. 1110",
    maps:
      "https://www.google.com/maps/search/?api=1&query=Calle+52+Sur+43A+20+Edificio+Scala+Sabaneta+Antioquia",
  },
  {
    name: "Sede Medellín",
    address:
      "Calle 52 N° 49-28 · Ed. La Lonja · Piso 2",
    maps:
      "https://www.google.com/maps/search/?api=1&query=Calle+52+49-28+Edificio+La+Lonja+Medellin+Antioquia",
  },
];

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M13.6 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V4a22 22 0 0 0-2.4-.1c-2.4 0-4.1 1.5-4.1 4.2V10H7.8v3h2.7v8h3.1Z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M21 12c0-2.2-.2-4-.5-5-.2-.8-.9-1.5-1.7-1.7C17.3 5 14.7 5 12 5s-5.3 0-6.8.3C4.4 5.5 3.7 6.2 3.5 7 3.2 8 3 9.8 3 12s.2 4 .5 5c.2.8.9 1.5 1.7 1.7 1.5.3 4.1.3 6.8.3s5.3 0 6.8-.3c.8-.2 1.5-.9 1.7-1.7.3-1 .5-2.8.5-5Z" />
      <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      {/* AMBIENT LIGHT */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 bg-[#c96a1b]/10 blur-[180px]" />

      <div className="pointer-events-none absolute bottom-[-300px] right-[-200px] h-[600px] w-[600px] rounded-full bg-white/[0.025] blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        {/* TOP */}
        <div className="grid grid-cols-1 gap-20 border-b border-white/10 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT */}
          <div>
            <p className="mb-8 text-sm uppercase tracking-[0.45em] text-[#c96a1b]">
              Grupo A&amp;C
            </p>

            <h2 className="mb-10 max-w-2xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-6xl">
              Inteligencia estratégica para empresas que piensan a largo plazo.
            </h2>

            <p className="max-w-xl font-light leading-[1.9] text-white/55">
              Planeación tributaria, protección patrimonial, estructura
              financiera, tecnología y evolución empresarial para organizaciones
              que requieren visión.
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            {/* ECOSYSTEM */}
            <div>
              <p className="mb-8 text-xs uppercase tracking-[0.3em] text-white/40">
                Ecosistema
              </p>

              <div className="flex flex-col gap-5">
                {ecosystem.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      text-white/70
                      transition-all
                      duration-300
                      hover:text-[#c96a1b]
                    "
                  >
                    <span className="h-px w-0 bg-[#c96a1b] transition-all duration-300 group-hover:w-4" />

                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <p className="mb-8 text-xs uppercase tracking-[0.3em] text-white/40">
                Contacto
              </p>

              <div className="flex flex-col gap-5 text-white/70">
                <a
                  href={`mailto:${contactLinks.email}`}
                  className="transition-colors duration-300 hover:text-[#c96a1b]"
                >
                  {contactLinks.email}
                </a>

                {/* WHATSAPP */}
                <div>
                  <a
                    href={contactLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 hover:text-[#c96a1b]"
                  >
                    WhatsApp Business
                  </a>

                  <a
                    href={contactLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-white/40 transition-colors duration-300 hover:text-white/70"
                  >
                    +57 311 868 7774
                  </a>
                </div>

                {/* SOCIAL ICONS */}
                <div className="pt-3">
                  <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-white/30">
                    Síguenos
                  </p>

                  <div className="flex items-center gap-3">
                    <a
                      href={contactLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram Grupo A&C"
                      className="
                        group
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.035]
                        text-white/60
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#c96a1b]/50
                        hover:bg-[#c96a1b]/10
                        hover:text-[#d98945]
                        hover:shadow-[0_0_28px_rgba(201,106,27,0.18)]
                      "
                    >
                      <InstagramIcon />
                    </a>

                    <a
                      href={contactLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook Grupo A&C"
                      className="
                        group
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.035]
                        text-white/60
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#c96a1b]/50
                        hover:bg-[#c96a1b]/10
                        hover:text-[#d98945]
                        hover:shadow-[0_0_28px_rgba(201,106,27,0.18)]
                      "
                    >
                      <FacebookIcon />
                    </a>

                    <a
                      href={contactLinks.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube Grupo A&C"
                      className="
                        group
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.035]
                        text-white/60
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#c96a1b]/50
                        hover:bg-[#c96a1b]/10
                        hover:text-[#d98945]
                        hover:shadow-[0_0_28px_rgba(201,106,27,0.18)]
                      "
                    >
                      <YoutubeIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEDES */}
        <div className="border-b border-white/10 py-12">
          <div className="grid gap-8 lg:grid-cols-[0.45fr_1.55fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
                Presencia
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                Nuestras sedes
              </h3>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {offices.map((office, index) => (
                <a
                  key={office.name}
                  href={office.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[1.5rem]
                    border
                    border-white/10
                    bg-white/[0.035]
                    p-6
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#c96a1b]/35
                    hover:bg-white/[0.055]
                  "
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#c96a1b]">
                      0{index + 1}
                    </span>

                    <span className="text-xs text-white/25 transition-all duration-300 group-hover:text-[#c96a1b]">
                      Google Maps ↗
                    </span>
                  </div>

                  <h4 className="text-xl font-medium tracking-[-0.03em] text-white">
                    {office.name}
                  </h4>

                  <p className="mt-3 max-w-md text-sm font-light leading-7 text-white/45">
                    {office.address}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-6 pt-10 md:flex-row">
          <div>
            <p className="text-sm text-white/35">
              © 2006-2026 Grupo Análisis &amp; Consultorías.
            </p>

            <p className="mt-2 text-xs text-white/20">
              Sabaneta · Medellín · Antioquia · Colombia
            </p>
          </div>

          {/* SEMA */}
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-fuchsia-500/40" />

            <div className="relative">
              <div
                className="
                  absolute
                  inset-0
                  scale-100
                  bg-fuchsia-500/20
                  blur-3xl
                "
              />

              <Image
                src="/brands/sema-footer-v2.png"
                alt="SEMA Strategic Intelligence Studio"
                width={160}
                height={60}
                className="
                  relative
                  z-10
                  h-auto
                  w-[160px]
                  opacity-100
                  drop-shadow-[0_0_30px_rgba(236,72,153,0.75)]
                "
              />
            </div>

            <div className="h-px w-12 bg-fuchsia-500/40" />
          </div>
        </div>
      </div>
    </footer>
  );
}