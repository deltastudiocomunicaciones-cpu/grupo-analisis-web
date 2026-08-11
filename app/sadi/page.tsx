import type { Metadata } from "next";
import Link from "next/link";
import MicrositePodcast from "@/components/sections/MicrositePodcast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MicrositeHero from "@/components/sections/MicrositeHero";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "SADI ERP | Software contable para empresas y contadores",
  description:
    "SADI ERP es una plataforma administrativa y contable diseñada para automatizar procesos, estructurar información y elevar el rol del contador hacia auditoría, análisis y estrategia.",
  alternates: {
    canonical: "/sadi",
  },
  openGraph: {
    title: "SADI ERP | Software contable estratégico",
    description:
      "Software contable del ecosistema Grupo A&C para empresas y contadores que buscan automatización, control financiero y análisis empresarial.",
    url: "https://www.grupoayc.co/sadi",
    siteName: "Grupo Análisis & Consultorías",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.grupoayc.co/og/sadi-grupo-ayc.png",
        width: 1200,
        height: 630,
        alt: "SADI ERP software contable Grupo A&C",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SADI ERP | Software contable estratégico",
    description:
      "Software contable del ecosistema Grupo A&C para empresas y contadores que buscan automatización, control financiero y análisis empresarial.",
    images: ["https://www.grupoayc.co/og/sadi-grupo-ayc.png"],
  },
};

const sadiModules = [
  {
    number: "01",
    short: "Ventas",
    title: "Gestión de Ventas",
    description:
      "Controla cotizaciones, facturación, cartera y seguimiento comercial desde un solo flujo operativo.",
    points: [
      "Facturación electrónica y documentos soporte",
      "Control de clientes y cartera",
      "Seguimiento comercial en tiempo real",
    ],
    accent: "#f97316",
    accentSoft: "rgba(249,115,22,0.13)",
  },
  {
    number: "02",
    short: "Compras",
    title: "Gestión de Compras",
    description:
      "Ordena proveedores, órdenes de compra, cuentas por pagar y trazabilidad documental para operar con mayor control.",
    points: [
      "Control de proveedores",
      "Órdenes de compra y causación",
      "Seguimiento de pagos y conciliaciones",
    ],
    accent: "#2563eb",
    accentSoft: "rgba(37,99,235,0.12)",
  },
  {
    number: "03",
    short: "Inventario",
    title: "Gestión de Inventario",
    description:
      "Administra existencias, entradas, salidas y movimientos críticos del inventario dentro de una estructura conectada.",
    points: [
      "Trazabilidad por movimiento",
      "Control de existencias",
      "Integración con compras y ventas",
    ],
    accent: "#0f766e",
    accentSoft: "rgba(15,118,110,0.12)",
  },
  {
    number: "04",
    short: "Nómina",
    title: "Nómina Electrónica",
    description:
      "Organiza comprobantes, novedades y procesos asociados a nómina electrónica para reducir fricción operativa.",
    points: [
      "Generación de nómina electrónica",
      "Gestión de empleados y novedades",
      "Soporte para cumplimiento normativo",
    ],
    accent: "#7c3aed",
    accentSoft: "rgba(124,58,237,0.11)",
  },
  {
    number: "05",
    short: "Contabilidad",
    title: "Contabilidad y Administración",
    description:
      "Transforma registros operativos en información financiera útil para control, auditoría y toma de decisiones.",
    points: [
      "Estados financieros y reportes",
      "Comprobantes, cierres y auxiliares",
      "Información organizada para dirección",
    ],
    accent: "#0f172a",
    accentSoft: "rgba(15,23,42,0.09)",
  },
  {
    number: "06",
    short: "BI",
    title: "Business Intelligence",
    description:
      "Convierte información dispersa en indicadores, análisis y visibilidad empresarial para apoyar decisiones gerenciales.",
    points: [
      "Indicadores estratégicos",
      "Lectura financiera y operativa",
      "Información para decisiones gerenciales",
    ],
    accent: "#ca8a04",
    accentSoft: "rgba(202,138,4,0.12)",
  },
];

const impactCards = [
  {
    title: "Automatización Contable",
    image: "/fotos/ecosistema_webp/sadi-impacto-1.png",
    text: "SADI reduce tareas operativas repetitivas y permite que los equipos contables trabajen con información más ordenada, trazable y lista para análisis.",
  },
  {
    title: "Control Administrativo",
    image: "/fotos/ecosistema_webp/sadi-impacto-2.png",
    text: "Centraliza procesos administrativos y financieros para que la empresa pueda consultar, validar y controlar su operación con mayor claridad.",
  },
  {
    title: "Información Estratégica",
    image: "/fotos/ecosistema_webp/sadi-impacto-3.png",
    text: "Convierte datos dispersos en información estructurada para apoyar decisiones gerenciales, auditorías internas y análisis financiero.",
  },
  {
    title: "Evolución del Contador",
    image: "/fotos/ecosistema_webp/sadi-impacto-4.png",
    text: "Libera al contador de cargas manuales para elevar su rol hacia auditoría, interpretación financiera y acompañamiento estratégico empresarial.",
  },
];

export default function SadiPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO */}
      <MicrositeHero
        eyebrow="SADI ERP"
        title="El salto del contador operativo al estratega empresarial."
        description="SADI es el software contable inteligente del ecosistema Grupo A&C, diseñado para automatizar procesos, estructurar información y elevar el rol del contador hacia auditoría, análisis y estrategia."
        button="Visita nuestra Web"
        buttonLink="https://misadi.co"
        ambientColor="#d97706"
        imageSrc="/brands/sadi-isotype.png"
        imageAlt="Isotipo SADI ERP"
        backgroundImage="/fotos/sadi-ecosistema-hero.webp"
      />

      {/* QUÉ ES SADI */}
      <section className="bg-[#f5f2eb] px-6 py-32 text-black">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-24 max-w-4xl">
              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#d97706]">
                Qué es SADI
              </p>

              <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
                Información organizada.
                <br />
                Decisiones más inteligentes.
              </h2>

              <p className="mt-10 text-lg font-light leading-[1.9] text-black/60">
                SADI transforma procesos operativos dispersos en información
                estructurada, permitiendo que contadores, gerentes y empresarios
                dediquen menos tiempo a tareas repetitivas y más tiempo a
                análisis, auditoría y estrategia.
              </p>
            </div>
          </Reveal>

          {/* CASOS DE IMPACTO */}
          <Reveal>
            <div className="mb-16">
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#d97706]">
                Casos de Impacto
              </p>

              <h3 className="max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.04em] md:text-5xl">
                Lo que sucede cuando la información deja de ser un problema.
              </h3>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {impactCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.05}>
                <div
                  className="
                    group
                    h-full
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-black/10
                    bg-white
                    shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                    transition-all
                    duration-700
                    hover:-translate-y-1
                    hover:shadow-[0_30px_90px_rgba(0,0,0,0.12)]
                  "
                >
                  <div className="relative h-[310px] overflow-hidden bg-black">
                    <img
                      src={card.image}
                      alt={`Caso de impacto SADI ${index + 1}: ${card.title}`}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-[1.05]
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(217,119,6,0.18),transparent_38%)]" />

                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#f59e0b]">
                        0{index + 1}
                      </p>

                      <h4 className="text-3xl font-semibold leading-[1] tracking-[-0.045em] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.65)]">
                        {card.title}
                      </h4>
                    </div>
                  </div>

                  <div className="p-7 md:p-8">
                    <p className="text-sm font-light leading-[1.85] text-black/60 md:text-base">
                      {card.text}
                    </p>

                    <Link
                      href="https://portalgrupoayc.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        mt-8
                        inline-flex
                        items-center
                        gap-3
                        rounded-full
                        border
                        border-black/10
                        bg-black/[0.04]
                        px-4
                        py-2
                        text-[10px]
                        uppercase
                        tracking-[0.25em]
                        text-black/45
                        transition-all
                        duration-500
                        hover:border-[#d97706]/35
                        hover:bg-[#d97706]/10
                        hover:text-black
                      "
                    >
                      Solicitar demo

                      <span className="transition-transform duration-500 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTO SADI */}
      <section className="relative overflow-hidden bg-[#eef0f3] px-6 py-24 text-black md:py-32">
        {/* ATMÓSFERA */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-180px] top-[20%] h-[480px] w-[480px] rounded-full bg-[#d97706]/10 blur-[160px]" />

          <div className="absolute bottom-[5%] right-[-220px] h-[520px] w-[520px] rounded-full bg-[#2563eb]/10 blur-[180px]" />

          <div className="absolute bottom-[-300px] left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-white/70 blur-[180px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* BANNER FOTOGRÁFICO */}
          <Reveal>
            <div
              className="
                group
                relative
                min-h-[360px]
                overflow-hidden
                rounded-[2.5rem]
                border
                border-black/10
                bg-black
                shadow-[0_35px_120px_rgba(15,23,42,0.16)]
                md:min-h-[540px]
              "
            >
              <img
  src="/fotos/sadi-banner-funcionalidades.png"
  alt="SADI ERP para empresas, contadores y equipos administrativos"
  className="
    absolute
    inset-0
    h-full
    w-full
    object-cover
    object-[50%_40%]
    transition-transform
    duration-[1400ms]
    group-hover:scale-[1.025]
  "
/>

{/* FILTROS */}
<div className="absolute inset-0 bg-black/20" />

<div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />

<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

{/* HALO SADI */}
<div className="pointer-events-none absolute left-[12%] top-1/2 h-[300px] w-[480px] -translate-y-1/2 rounded-full bg-[#d97706]/15 blur-[110px]" />

{/* ISOTIPO SADI FLOTANTE */}
<div
  className="
    pointer-events-none
    absolute
    right-[2%]
    top-[8%]
    z-[8]

    md:right-[3%]
    md:top-[44%]
    md:-translate-y-1/2

    lg:right-[76%]
    lg:top-[22%]
  "
>
  <div
    className="
      absolute
      left-1/2
      top-1/2
      h-[180px]
      w-[180px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[#d97706]/20
      blur-[55px]

      sm:h-[240px]
      sm:w-[240px]

      md:h-[320px]
      md:w-[320px]
      md:blur-[75px]
    "
  />

  <div
    className="
      absolute
      left-1/2
      top-1/2
      h-[110px]
      w-[110px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-white/10
      blur-[35px]

      md:h-[180px]
      md:w-[180px]
    "
  />

  <img
    src="/brands/sadi-isotype.png"
    alt=""
    aria-hidden="true"
    className="
      relative
      z-10
      h-auto
      w-[85px]
      opacity-55
      drop-shadow-[0_20px_40px_rgba(0,0,0,0.30)]

      sm:w-[110px]
      sm:opacity-65

      md:w-[165px]
      md:opacity-80

      lg:w-[205px]
    "
  />
</div>

{/* COPY */}
<div className="absolute inset-0 z-10 flex items-center px-7 py-10 md:px-12 lg:px-16">
                <div className="max-w-6xl">
                  <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-[#f59e0b] md:text-xs">
                    SADI ERP
                  </p>

                  <h3
                    className="
                      max-w-6xl
                      text-3xl
                      font-semibold
                      leading-[0.98]
                      tracking-[-0.055em]
                      text-white
                      sm:text-4xl
                      md:text-5xl
                      lg:text-[4.3rem]
                    "
                  >
                    Porque tu negocio es tu vida{" "}
                    <span className="text-[#f59e0b]">
                      y SADI sabe que tu vida es lo más importante.
                    </span>
                  </h3>

                  <div className="mt-8 flex flex-wrap items-center gap-5">
                    <a
                      href="https://misadi.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        px-6
                        py-3.5
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.2em]
                        text-black
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:bg-[#f59e0b]
                      "
                    >
                      Conocer SADI
                    </a>

                    <a
                      href="https://www.youtube.com/@SADISOFTWARE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group/youtube
                        inline-flex
                        items-center
                        gap-3
                        text-[10px]
                        uppercase
                        tracking-[0.22em]
                        text-white/70
                        transition-colors
                        hover:text-white
                      "
                    >
                      <span
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/20
                          bg-white/10
                          text-xs
                          backdrop-blur-xl
                          transition-all
                          duration-300
                          group-hover/youtube:bg-white
                          group-hover/youtube:text-black
                        "
                      >
                        ▶
                      </span>

                      Ver SADI en YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* CABECERA MÓDULOS */}
          <Reveal>
            <div className="mb-10 mt-20 grid gap-8 border-b border-black/10 pb-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#d97706]">
                  Todo conectado
                </p>

                <h4 className="max-w-4xl text-3xl font-semibold leading-[1.02] tracking-[-0.05em] md:text-5xl">
                  Herramientas que trabajan juntas para que tú tengas el control.
                </h4>
              </div>

              
            </div>
          </Reveal>

          {/* 6 CARDS PREMIUM */}
<div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
  {sadiModules.map((module, index) => (
    <Reveal key={module.title} delay={index * 0.04}>
      <div className="h-full"></div>
      <article
        className="
          group
          relative
          flex
          h-full
          min-h-[480px]
          flex-col
          overflow-hidden
          rounded-[2.3rem]
          border
          border-black/[0.08]
          bg-[linear-gradient(145deg,#ffffff_0%,#f7f8fa_100%)]
          p-7
          shadow-[0_18px_65px_rgba(15,23,42,0.06)]
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-black/[0.13]
          hover:shadow-[0_35px_110px_rgba(15,23,42,0.13)]
          md:p-8
        "  
      >

        {/* GLOW DE COLOR */}
        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -top-20
            h-[260px]
            w-[260px]
            rounded-full
            blur-[80px]
            transition-all
            duration-700
            group-hover:scale-125
          "
          style={{
            backgroundColor: module.accentSoft,
          }}
        />

        {/* NÚMERO GIGANTE DE FONDO */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-2
            top-14
            select-none
            text-[9rem]
            font-semibold
            leading-none
            tracking-[-0.08em]
            opacity-[0.035]
            transition-all
            duration-700
            group-hover:translate-x-[-6px]
            group-hover:opacity-[0.055]
          "
          style={{
            color: module.accent,
          }}
        >
          {module.number}
        </span>

        {/* LÍNEA SUPERIOR DE IDENTIDAD */}
        <div
          className="
            absolute
            left-8
            right-8
            top-0
            h-[3px]
            rounded-b-full
            opacity-80
          "
          style={{
            background: `linear-gradient(
              90deg,
              transparent 0%,
              ${module.accent} 18%,
              ${module.accent} 82%,
              transparent 100%
            )`,
          }}
        />

        {/* HEADER */}
        <div className="relative z-10 flex items-center justify-between gap-4">
          {/* NÚMERO */}
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-[1.05rem]
              border
              bg-white
              text-[11px]
              font-semibold
              shadow-[0_8px_24px_rgba(0,0,0,0.05)]
            "
            style={{
              color: module.accent,
              borderColor: `${module.accent}35`,
            }}
          >
            {module.number}
          </div>

          <span className="text-[9px] uppercase tracking-[0.3em] text-black/25">
            SADI ERP
          </span>
        </div>

        {/* IDENTIFICADOR CROMÁTICO */}
        <div className="relative z-10 mt-9">
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              px-4
              py-2
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.28em]
              shadow-[0_6px_20px_rgba(0,0,0,0.035)]
            "
            style={{
              color: module.accent,
              backgroundColor: module.accentSoft,
              borderColor: `${module.accent}30`,
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{
                backgroundColor: module.accent,
              }}
            />

            {module.short}
          </span>
        </div>

        {/* TITLE */}
        <div className="relative z-10 mt-6">
          <h5
            className="
              max-w-sm
              text-[2rem]
              font-semibold
              leading-[0.98]
              tracking-[-0.055em]
              text-black
              md:text-[2.25rem]
            "
          >
            {module.title}
          </h5>

          <p className="mt-5 max-w-md text-sm font-light leading-[1.85] text-black/55">
            {module.description}
          </p>
        </div>

        {/* FEATURES */}
        <div className="relative z-10 mt-8 space-y-3">
          {module.points.map((point) => (
            <div
              key={point}
              className="
                flex
                items-start
                gap-3
                rounded-xl
                border
                border-transparent
                px-2
                py-1.5
                transition-all
                duration-300
                group-hover:border-black/[0.035]
                group-hover:bg-white/50
              "
            >
              <span
                className="
                  mt-[5px]
                  flex
                  h-4
                  w-4
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                "
                style={{
                  backgroundColor: module.accentSoft,
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    backgroundColor: module.accent,
                  }}
                />
              </span>

              <p className="text-sm leading-[1.65] text-black/52">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="relative z-10 mt-auto pt-8">
          <div className="border-t border-black/[0.08] pt-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[9px] uppercase tracking-[0.26em] text-black/25">
                  Ecosistema SADI
                </p>

                <p className="mt-1 text-xs font-medium text-black/45">
                  Funcionalidad integrada
                </p>
              </div>

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  bg-white
                  text-lg
                  shadow-[0_6px_20px_rgba(0,0,0,0.05)]
                  transition-all
                  duration-500
                  group-hover:translate-x-1
                  group-hover:scale-105
                "
                style={{
                  color: module.accent,
                  borderColor: `${module.accent}30`,
                }}
              >
                →
              </div>
            </div>
          </div>
        </div>

        {/* DETALLE INFERIOR */}
        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-[2px]
            w-0
            -translate-x-1/2
            transition-all
            duration-700
            group-hover:w-[60%]
          "
          style={{
            backgroundColor: module.accent,
          }}
        />
      </article>
    </Reveal>
  ))}
</div>

          {/* YOUTUBE */}
          <Reveal>
            <div
              className="
                mt-16
                grid
                overflow-hidden
                rounded-[2.5rem]
                border
                border-black/10
                bg-white
                shadow-[0_25px_80px_rgba(15,23,42,0.08)]
                lg:grid-cols-[0.78fr_1.22fr]
              "
            >
              {/* TEXTO */}
              <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
                <div className="mb-6 flex items-center gap-4">
                  <span className="h-px w-8 bg-[#d97706]" />

                  <p className="text-[10px] uppercase tracking-[0.35em] text-[#d97706]">
                    SADI en movimiento
                  </p>
                </div>

                <h4 className="max-w-xl text-3xl font-semibold leading-[1.04] tracking-[-0.045em] md:text-4xl">
                  Del contador invisible al contador influyente: SADI transforma la contabilidad en estrategia.
                </h4>

                <p className="mt-6 max-w-lg text-sm font-light leading-[1.85] text-black/50">
                  Conoce SADI, sus funcionalidades y nuestra visión sobre el
                  futuro de la gestión administrativa y contable.
                </p>

                <a
                  href="https://www.youtube.com/@SADISOFTWARE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-8
                    inline-flex
                    w-fit
                    items-center
                    gap-3
                    rounded-full
                    bg-black
                    px-6
                    py-3.5
                    text-[10px]
                    uppercase
                    tracking-[0.22em]
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#d97706]
                  "
                >
                  <span>▶</span>
                  YouTube SADI
                </a>
              </div>

              {/* VIDEO YOUTUBE */}
              <div className="relative min-h-[330px] bg-black md:min-h-[400px] lg:min-h-[460px]">
                <iframe
                  src="https://www.youtube.com/embed/HVvMr-08xbI"
                  title="SADI ERP"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      

      <Footer />
    </main>
  );
}