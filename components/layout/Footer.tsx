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
    location: "Valle de Aburrá · Sur",
    statement:
      "Nuestro punto de encuentro para acompañar decisiones, procesos y crecimiento empresarial.",
    address: "Calle 52 Sur N° 43 A 20 · Ed. Scala · Of. 1110",
    routeLabel: "Cómo llegar a Sabaneta",
    imageDesktop: "/fotos/sedes/sede-sabaneta-desktop.png",
    imageMobile: "/fotos/sedes/sede-sabaneta-mobile.png",
    maps:
      "https://www.google.com/maps/search/?api=1&query=Calle+52+Sur+43A+20+Edificio+Scala+Sabaneta+Antioquia",
  },
  {
    name: "Sede Medellín",
    location: "Centro de Medellín",
    statement:
      "Presencia estratégica en el corazón empresarial de la ciudad para estar más cerca de nuestros clientes.",
    address: "Calle 52 N° 49-28 · Ed. La Lonja · Piso 2",
    routeLabel: "Cómo llegar a Medellín",
    imageDesktop: "/fotos/sedes/sede-medellin-desktop.png",
    imageMobile: "/fotos/sedes/sede-medellin-mobile.png",
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

     <div className="relative z-10 mx-auto max-w-7xl px-6 pb-2 pt-24 md:pb-2 md:pt-28">
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
    SEDES · DESTINOS GRUPO A&C
==================================================== */}

<section
  className="
    relative
    left-1/2
    w-screen
    -translate-x-1/2
    overflow-hidden
    border-y
    border-[#b87a18]/15
    bg-[#f3dfb8]
    py-16
    text-[#2c241a]
    md:py-20
  "
>
  {/* ATMÓSFERA */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -left-24 -top-32 h-96 w-96 rounded-full bg-white/45 blur-[120px]" />

    <div className="absolute -bottom-40 right-[8%] h-[440px] w-[440px] rounded-full bg-[#e9aa34]/15 blur-[140px]" />

    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage: `
          linear-gradient(to right, #7b5217 1px, transparent 1px),
          linear-gradient(to bottom, #7b5217 1px, transparent 1px)
        `,
        backgroundSize: "100px 100px",
      }}
    />
  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-6">
    {/* ENCABEZADO */}
    <div className="mb-12 grid gap-7 md:mb-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
      <div>
        <p className="text-[10px] uppercase tracking-[0.38em] text-[#a96a0a]">
          Presencia Grupo A&amp;C
        </p>

        <h3 className="mt-5 max-w-xl text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-[#2c241a] md:text-5xl">
          Dos sedes.
          <br />
          Una misma forma de acompañar.
        </h3>
      </div>

      <p className="max-w-xl text-sm font-light leading-[1.9] text-[#2c241a]/55 lg:justify-self-end md:text-base">
        Elige la ubicación que te resulte más cercana y abre directamente la
        ruta en Google Maps.
      </p>
    </div>

    {/* DUALIDAD DE SEDES */}
    <div className="grid gap-5 lg:grid-cols-2">
      {offices.map((office, index) => (
        <a
          key={office.name}
          href={office.maps}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir ubicación de ${office.name} en Google Maps`}
          className={`
            group
            relative
            flex
            min-h-[390px]
            flex-col
            justify-between
            overflow-hidden
            rounded-[2.2rem]
            border
            p-7
            shadow-[0_25px_80px_rgba(91,61,19,0.10)]
            transition-all
            duration-700
            hover:-translate-y-1
            hover:shadow-[0_35px_100px_rgba(91,61,19,0.17)]
            md:min-h-[430px]
            md:p-10
            ${
              index === 0
                ? "border-[#815411]/15 bg-[#f6e7ca]"
                : "border-[#815411]/20 bg-[#e8c17e]"
            }
          `}
        >

         {/* FOTOGRAFÍA RESPONSIVA DE LA SEDE */}
<picture className="pointer-events-none absolute inset-0">
  {/* DESKTOP */}
  <source
    media="(min-width: 768px)"
    srcSet={office.imageDesktop}
  />

  {/* MOBILE: ES LA IMAGEN DE RESPALDO */}
  <img
    src={office.imageMobile}
    alt={`Fachada de ${office.name} de Grupo A&C`}
    width={1080}
    height={1350}
    loading="lazy"
    decoding="async"
    className="
      h-full
      w-full
      object-cover
      object-center
      opacity-[0.32]
      saturate-[0.72]
      contrast-[0.95]
      transition-all
      duration-[1400ms]
      md:opacity-[0.3]
      group-hover:scale-[1.035]
      group-hover:opacity-[0.46]
      group-hover:saturate-[0.85]
    "
  />
</picture>

{/* VELO CROMÁTICO PARA CONSERVAR LEGIBILIDAD */}
<div
  className={`
    pointer-events-none
    absolute
    inset-0
    ${
      index === 0
        ? "bg-gradient-to-r from-[#f6e7ca]/88 via-[#f6e7ca]/60 to-[#f6e7ca]/22"
        : "bg-gradient-to-r from-[#e8c17e]/88 via-[#e8c17e]/62 to-[#e8c17e]/24"
    }
  `}
/>

{/* PROFUNDIDAD INFERIOR */}
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2c241a]/10 via-transparent to-white/10" />

          {/* MICRO-MAPA VECTORIAL */}
          <div
            className={`
              pointer-events-none
              absolute
              right-[-35px]
              top-[-25px]
              h-[275px]
              w-[360px]
              transition-all
              duration-1000
              group-hover:translate-x-[-8px]
              group-hover:translate-y-[8px]
              group-hover:scale-105
              ${
                index === 0
                  ? "text-[#a96a0a]/18"
                  : "text-[#70450b]/20"
              }
            `}
          >
            <svg
              viewBox="0 0 400 280"
              fill="none"
              className="h-full w-full"
              aria-hidden="true"
            >
              <path
                d="M-10 225C54 196 64 109 132 119C197 129 184 218 256 198C321 180 304 88 417 65"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="7 9"
              />

              <path
                d="M24 76C91 88 112 43 178 56C245 69 238 137 315 129C353 125 378 103 417 96"
                stroke="currentColor"
                strokeWidth="1"
              />

              <circle
                cx="256"
                cy="198"
                r="22"
                fill="currentColor"
                opacity="0.16"
              />

              <circle
                cx="256"
                cy="198"
                r="7"
                fill="currentColor"
              />

              <circle
                cx="256"
                cy="198"
                r="3"
                fill="currentColor"
                opacity="0.95"
              />
            </svg>
          </div>

          {/* BRILLO SUPERIOR */}
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/75 to-transparent" />

          {/* CABECERA */}
          <div className="relative z-10 flex items-start justify-between gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.32em] text-[#8b570d]/65">
                Ubicación oficial
              </span>

              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[#2c241a]/40">
                {office.location}
              </p>
            </div>

            <span className="font-serif text-5xl font-semibold text-[#8b570d]/18 md:text-6xl">
              0{index + 1}
            </span>
          </div>

          {/* INFORMACIÓN */}
          <div className="relative z-10 mt-24 max-w-md">
            <div className="mb-6 h-px w-12 bg-[#a96a0a]/60 transition-all duration-500 group-hover:w-20" />

            <h4 className="text-3xl font-semibold tracking-[-0.045em] text-[#2c241a] md:text-4xl">
              {office.name}
            </h4>

            <p className="mt-5 max-w-sm text-sm font-light leading-[1.8] text-[#2c241a]/58">
              {office.statement}
            </p>

            <address className="mt-7 not-italic text-sm font-medium leading-[1.7] text-[#2c241a]/72">
              {office.address}
            </address>
          </div>

          {/* CTA */}
          <div className="relative z-10 mt-10 flex items-center justify-between border-t border-[#815411]/12 pt-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#754708]/70">
              {office.routeLabel}
            </span>

            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#815411]/15 bg-white/35 text-lg text-[#754708] transition-all duration-500 group-hover:rotate-45 group-hover:border-[#a96a0a]/40 group-hover:bg-[#a96a0a] group-hover:text-white">
              ↗
            </span>
          </div>

          {/* BORDE INTERIOR */}
          <div className="pointer-events-none absolute inset-[1px] rounded-[2.15rem] border border-white/45" />
        </a>
      ))}
    </div>

    {/* APOYO DE CONTACTO */}
    <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[#815411]/12 pt-7 text-center sm:flex-row sm:text-left">
      <p className="text-xs font-light leading-6 text-[#2c241a]/45">
        ¿Prefieres confirmar tu visita antes de desplazarte?
      </p>

      <a
        href={contactLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8b570d] transition-colors hover:text-[#c96a1b]"
      >
        Consultar por WhatsApp →
      </a>
    </div>
  </div>
</section>
       {/* ===================================================
    BOTTOM
==================================================== */}

<div
  className="
    relative
    left-1/2
    w-screen
    -translate-x-1/2
    overflow-hidden
    border-t
    border-[#8f5b12]/15
    bg-[#e7bd72]
  "
>
  {/* ATMÓSFERA */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -left-24 top-0 h-52 w-72 rounded-full bg-white/25 blur-[100px]" />

    <div className="absolute -bottom-24 right-[12%] h-56 w-80 rounded-full bg-[#c67b17]/15 blur-[100px]" />

    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/65 to-transparent" />
  </div>

  <div
    className="
      relative
      z-10
      mx-auto
      flex
      max-w-7xl
      flex-col
      items-center
      justify-between
      gap-8
      px-6
      py-7
      md:flex-row
    "
  >
    <div className="text-center md:text-left">
      <p className="text-sm text-[#342618]/65">
        © 2006-2026 Grupo Análisis &amp; Consultorías.
      </p>

      <p className="mt-2 text-xs text-[#342618]/42">
        Sabaneta · Medellín · Antioquia · Colombia
      </p>
    </div>

    {/* FASI · CRÉDITO TECNOLÓGICO */}
<div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
  <div className="hidden h-px w-10 bg-gradient-to-r from-transparent to-[#815411]/35 sm:block" />

  <div className="max-w-[230px] text-center sm:text-right">
    <p className="text-[8px] uppercase leading-[1.7] tracking-[0.2em] text-[#342618]/38">
      Diseño y desarrollo de plataforma
    </p>

    <p className="mt-1 text-[11px] font-medium leading-[1.45] text-[#342618]/62">
      Fábrica de Sistemas de Información
    </p>
  </div>

  <Image
    src="/brands/fasi-footer-v2.png"
    alt="FASI · Fábrica de Sistemas de Información"
    width={120}
    height={45}
    className="
      h-auto
      w-[58px]
      object-contain
      opacity-85
      drop-shadow-[0_7px_14px_rgba(92,45,10,0.14)]
      md:w-[52px]
    "
  />
</div>

      
    </div>

</div>
      </div>
    </footer>
  );
}