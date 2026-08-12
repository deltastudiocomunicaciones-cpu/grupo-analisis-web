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
    address: "Calle 52 N° 49-28 · Ed. La Lonja · Piso 2",
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
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
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
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#090b0d] text-white">
      {/* =====================================================
          LÍNEA CROMÁTICA
          Inspirada en Vanilla · Butter · Honey · Ochre · Gold
      ====================================================== */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          z-20
          h-[3px]
          bg-[linear-gradient(90deg,#f5e7d2_0%,#f6daa8_20%,#e9aa34_46%,#c5771b_74%,#b2762d_100%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-20
          bg-[linear-gradient(180deg,rgba(233,170,52,0.10)_0%,transparent_100%)]
          blur-2xl
        "
      />

      {/* =====================================================
          LUCES AMBIENTALES
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[18%]
          top-[-250px]
          h-[650px]
          w-[650px]
          rounded-full
          bg-[#e9aa34]/[0.08]
          blur-[180px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[20%]
          h-[550px]
          w-[550px]
          rounded-full
          bg-[#c5771b]/[0.08]
          blur-[170px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-300px]
          left-[35%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#f5e7d2]/[0.025]
          blur-[170px]
        "
      />

      {/* =====================================================
          PALETA ESCULTÓRICA DECORATIVA
          Solo desktop
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-75px]
          top-[105px]
          hidden
          w-[250px]
          rotate-[-5deg]
          flex-col
          gap-2.5
          opacity-20
          xl:flex
        "
      >
        <div className="h-12 rounded-full bg-[#f5e7d2]" />
        <div className="h-12 rounded-full bg-[#f6daa8]" />
        <div className="h-12 rounded-full bg-[#e9aa34]" />
        <div className="h-12 rounded-full bg-[#c5771b]" />
        <div className="h-12 rounded-full bg-[#b2762d]" />
      </div>

      {/* SOMBRA SOBRE PALETA */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-100px]
          top-[70px]
          hidden
          h-[420px]
          w-[390px]
          bg-[#090b0d]/45
          blur-[65px]
          xl:block
        "
      />

      {/* =====================================================
          CONTENIDO
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-28">
        {/* ===================================================
            TOP
        ==================================================== */}

        <div className="grid grid-cols-1 gap-20 border-b border-[#f5e7d2]/10 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT */}

          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-9 bg-[#e9aa34]" />

              <p className="text-xs uppercase tracking-[0.45em] text-[#e9aa34]">
                Grupo A&amp;C
              </p>
            </div>

            <h2
              className="
                mb-10
                max-w-2xl
                text-5xl
                font-semibold
                leading-[0.95]
                tracking-[-0.045em]
                text-[#f8f3eb]
                md:text-6xl
              "
            >
              Inteligencia estratégica para empresas que piensan{" "}
              <span className="text-[#e5bd75]">
                a largo plazo.
              </span>
            </h2>

            <p className="max-w-xl font-light leading-[1.9] text-[#f5e7d2]/50">
              Planeación tributaria, protección patrimonial, estructura
              financiera, tecnología y evolución empresarial para organizaciones
              que requieren visión.
            </p>

            {/* FIRMA CROMÁTICA */}

            <div className="mt-10 flex items-center gap-2">
              <span className="h-1.5 w-10 rounded-full bg-[#f5e7d2]/70" />
              <span className="h-1.5 w-10 rounded-full bg-[#f6daa8]/70" />
              <span className="h-1.5 w-10 rounded-full bg-[#e9aa34]/80" />
              <span className="h-1.5 w-10 rounded-full bg-[#c5771b]/80" />
              <span className="h-1.5 w-10 rounded-full bg-[#b2762d]/80" />
            </div>
          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            {/* ECOSYSTEM */}

            <div>
              <p className="mb-8 text-[10px] uppercase tracking-[0.35em] text-[#f5e7d2]/35">
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
                      gap-3
                      text-[#f5e7d2]/65
                      transition-all
                      duration-300
                      hover:text-[#f6daa8]
                    "
                  >
                    <span
                      className="
                        h-px
                        w-0
                        bg-[#e9aa34]
                        transition-all
                        duration-300
                        group-hover:w-5
                      "
                    />

                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CONTACT */}

            <div>
              <p className="mb-8 text-[10px] uppercase tracking-[0.35em] text-[#f5e7d2]/35">
                Contacto
              </p>

              <div className="flex flex-col gap-5 text-[#f5e7d2]/65">
                <a
                  href={`mailto:${contactLinks.email}`}
                  className="transition-colors duration-300 hover:text-[#f6daa8]"
                >
                  {contactLinks.email}
                </a>

                {/* WHATSAPP */}

                <div>
                  <a
                    href={contactLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 hover:text-[#f6daa8]"
                  >
                    WhatsApp Business
                  </a>

                  <a
                    href={contactLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-[#f5e7d2]/35 transition-colors duration-300 hover:text-[#f5e7d2]/70"
                  >
                    +57 311 868 7774
                  </a>
                </div>

                {/* SOCIAL */}

                <div className="pt-3">
                  <p className="mb-4 text-[9px] uppercase tracking-[0.32em] text-[#f5e7d2]/25">
                    Síguenos
                  </p>

                  <div className="flex items-center gap-3">
                    {/* INSTAGRAM */}

                    <a
                      href={contactLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram Grupo A&C"
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#f5e7d2]/10
                        bg-[#f5e7d2]/[0.035]
                        text-[#f5e7d2]/55
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[#e9aa34]/45
                        hover:bg-[#e9aa34]/10
                        hover:text-[#f6daa8]
                        hover:shadow-[0_0_30px_rgba(233,170,52,0.16)]
                      "
                    >
                      <InstagramIcon />
                    </a>

                    {/* FACEBOOK */}

                    {contactLinks.facebook && (
                      <a
                        href={contactLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook Grupo A&C"
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#f5e7d2]/10
                          bg-[#f5e7d2]/[0.035]
                          text-[#f5e7d2]/55
                          backdrop-blur-xl
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-[#e9aa34]/45
                          hover:bg-[#e9aa34]/10
                          hover:text-[#f6daa8]
                          hover:shadow-[0_0_30px_rgba(233,170,52,0.16)]
                        "
                      >
                        <FacebookIcon />
                      </a>
                    )}

                    {/* YOUTUBE */}

                    {contactLinks.youtube && (
                      <a
                        href={contactLinks.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube Grupo A&C"
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#f5e7d2]/10
                          bg-[#f5e7d2]/[0.035]
                          text-[#f5e7d2]/55
                          backdrop-blur-xl
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-[#e9aa34]/45
                          hover:bg-[#e9aa34]/10
                          hover:text-[#f6daa8]
                          hover:shadow-[0_0_30px_rgba(233,170,52,0.16)]
                        "
                      >
                        <YoutubeIcon />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            SEDES
        ==================================================== */}

        <div className="border-b border-[#f5e7d2]/10 py-14">
          <div className="grid gap-8 lg:grid-cols-[0.45fr_1.55fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.38em] text-[#e9aa34]">
                Presencia
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[#f8f3eb]">
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
                    rounded-[1.7rem]
                    border
                    border-[#f5e7d2]/10
                    bg-[linear-gradient(145deg,rgba(245,231,210,0.055)_0%,rgba(233,170,52,0.025)_100%)]
                    p-7
                    shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#e9aa34]/30
                    hover:bg-[linear-gradient(145deg,rgba(245,231,210,0.075)_0%,rgba(233,170,52,0.045)_100%)]
                    hover:shadow-[0_25px_80px_rgba(0,0,0,0.20)]
                  "
                >
                  {/* GOLD LIGHT */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-12
                      -top-12
                      h-36
                      w-36
                      rounded-full
                      bg-[#e9aa34]/0
                      blur-[50px]
                      transition-all
                      duration-700
                      group-hover:bg-[#e9aa34]/10
                    "
                  />

                  {/* TOP LINE */}

                  <div
                    className="
                      absolute
                      left-8
                      right-8
                      top-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-[#e9aa34]/50
                      to-transparent
                    "
                  />

                  <div className="relative z-10">
                    <div className="mb-10 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#e9aa34]">
                        0{index + 1}
                      </span>

                      <span className="text-xs text-[#f5e7d2]/25 transition-all duration-300 group-hover:text-[#f6daa8]/70">
                        Google Maps ↗
                      </span>
                    </div>

                    <h4 className="text-xl font-medium tracking-[-0.03em] text-[#f8f3eb]">
                      {office.name}
                    </h4>

                    <p className="mt-3 max-w-md text-sm font-light leading-7 text-[#f5e7d2]/40">
                      {office.address}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM
        ==================================================== */}

        <div className="flex flex-col items-center justify-between gap-8 pt-10 md:flex-row">
          <div>
            <p className="text-sm text-[#f5e7d2]/30">
              © 2006-2026 Grupo Análisis &amp; Consultorías.
            </p>

            <p className="mt-2 text-xs text-[#f5e7d2]/18">
              Sabaneta · Medellín · Antioquia · Colombia
            </p>
          </div>

          {/* SEMA */}

          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-fuchsia-500/40" />

            <div className="relative">
              <div className="absolute inset-0 scale-100 bg-fuchsia-500/20 blur-3xl" />

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
                  drop-shadow-[0_0_30px_rgba(236,72,153,0.65)]
                "
              />
            </div>

            <div className="h-px w-12 bg-gradient-to-l from-transparent to-fuchsia-500/40" />
          </div>
        </div>
      </div>
    </footer>
  );
}