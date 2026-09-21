import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

const siteUrl = "https://www.grupoayc.co";
const platformUrl = "https://plataforma-conecta-eight.vercel.app/";

export const metadata: Metadata = {
  title: "CONECTA | Inteligencia organizacional y gobernabilidad",
  description:
    "Plataforma de inteligencia organizacional para conectar estructura, responsabilidades, desempeño, evidencias e indicadores y convertirlos en información útil para la toma de decisiones.",
  alternates: {
    canonical: "/conecta",
  },
  openGraph: {
    title: "CONECTA | Vea cómo funciona su organización",
    description:
      "Desempeño medible. Responsabilidades visibles. Decisiones con evidencia.",
    url: `${siteUrl}/conecta`,
    siteName: "Grupo Análisis & Consultorías",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CONECTA | Inteligencia organizacional",
    description:
      "Una plataforma para convertir el funcionamiento de una organización en información para decidir.",
  },
};

type RevealProps = {
  children: ReactNode;
  delay?: number;
};

function Reveal({ children }: RevealProps) {
  return <>{children}</>;
}

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path
        d="M5 15 15 5M7 5h8v8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path
        d="M4 10h12M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlatformConectaButton() {
  return (
    <a
      href={platformUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ingresar al piloto de Plataforma CONECTA"
      className="
        conecta-platform-button
        group
        relative
        inline-flex
        min-h-[60px]
        items-center
        justify-center
        overflow-hidden
        rounded-full
        border
        border-[#b7d65e]/35
        bg-[#041422]/82
        px-2
        pr-6
        text-white
        shadow-[0_18px_55px_rgba(0,0,0,0.28)]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#b7d65e]/70
        hover:shadow-[0_20px_70px_rgba(160,200,43,0.22)]
      "
    >
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(160,200,43,0.18),transparent_38%)]" />

      <span className="conecta-platform-scan pointer-events-none absolute bottom-0 top-0 w-24 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent blur-sm" />

      <span className="relative z-10 mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#b7d65e]/25 bg-[#a0c82b]/10">
        <span className="conecta-platform-core h-2.5 w-2.5 rounded-full bg-[#b7d65e] shadow-[0_0_18px_rgba(183,214,94,0.95)]" />
        <span className="absolute inset-[7px] rounded-full border border-[#b7d65e]/20" />
      </span>

      <span className="relative z-10 flex flex-col items-start">
        <span className="flex items-center gap-2">
          <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#b7d65e]">
            Acceso piloto
          </span>

          <span className="flex items-center gap-1.5 rounded-full border border-[#b7d65e]/20 bg-[#a0c82b]/10 px-2 py-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b7d65e]" />
            <span className="text-[7px] font-semibold uppercase tracking-[0.18em] text-[#cbe77a]">
              Live
            </span>
          </span>
        </span>

        <span className="mt-0.5 text-sm font-medium tracking-[-0.02em] text-white">
          Plataforma CONECTA
        </span>
      </span>

      <span className="relative z-10 ml-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-[#b7d65e] transition-all duration-500 group-hover:translate-x-1">
        <ArrowUpRight />
      </span>
    </a>
  );
}

const measurementLayers = [
  {
    number: "01",
    label: "Responsabilidad",
    title: "Qué corresponde hacer.",
    text: "Relaciona cargos, funciones, responsabilidades y procesos para hacer visible quién responde por qué.",
  },
  {
    number: "02",
    label: "Ejecución",
    title: "Qué está ocurriendo.",
    text: "Permite seguir actividades, compromisos y estados de avance dentro de la operación.",
  },
  {
    number: "03",
    label: "Cumplimiento",
    title: "Qué avanza según lo esperado.",
    text: "Conecta objetivos, responsabilidades e indicadores para comprender niveles de cumplimiento.",
  },
  {
    number: "04",
    label: "Evidencia",
    title: "Qué demuestra la ejecución.",
    text: "Relaciona documentos, entregables y registros con las actividades que requieren respaldo verificable.",
  },
  {
    number: "05",
    label: "Desempeño",
    title: "Cómo evolucionan los resultados.",
    text: "Permite construir lecturas de desempeño asociadas al rol, al proceso y al contexto organizacional.",
  },
  {
    number: "06",
    label: "Evaluación",
    title: "Qué lectura produce la información.",
    text: "Estructura evaluaciones y criterios para convertir resultados dispersos en señales útiles para la organización.",
  },
];

const traceability = [
  "Definir",
  "Asignar",
  "Ejecutar",
  "Evidenciar",
  "Medir",
  "Evaluar",
  "Decidir",
  "Mejorar",
];

const governanceLevels = [
  {
    code: "01",
    level: "Persona",
    title: "Claridad sobre su responsabilidad.",
    text: "Responsabilidades, actividades, compromisos, evidencias y contexto de trabajo.",
  },
  {
    code: "02",
    level: "Responsable",
    title: "Visibilidad sobre la ejecución.",
    text: "Avances, entregables, alertas y necesidades del equipo bajo su responsabilidad.",
  },
  {
    code: "03",
    level: "Gerencia",
    title: "Lectura sobre procesos y desempeño.",
    text: "Indicadores, evaluaciones, cumplimiento y evolución de los procesos a su cargo.",
  },
  {
    code: "04",
    level: "Dirección",
    title: "Información para gobernar.",
    text: "Una lectura ejecutiva para priorizar decisiones, recursos, riesgos y acciones.",
  },
];

const capabilities = [
  {
    index: "01",
    name: "Mapa Vivo",
    description:
      "Representación dinámica de cargos, relaciones, responsabilidades y estructura organizacional.",
  },
  {
    index: "02",
    name: "Desempeño",
    description:
      "Seguimiento de responsabilidades, objetivos, actividades, cumplimiento y evolución.",
  },
  {
    index: "03",
    name: "Evaluaciones",
    description:
      "Lecturas estructuradas con criterios definidos por la organización.",
  },
  {
    index: "04",
    name: "Evidencias",
    description:
      "Trazabilidad documental sobre la ejecución de actividades y compromisos.",
  },
  {
    index: "05",
    name: "Informes",
    description:
      "Información organizada según cargo, responsabilidad y nivel de decisión.",
  },
  {
    index: "06",
    name: "Mi Agente",
    description:
      "Espacio de asistencia contextual conectado con el rol y las referencias de trabajo del usuario.",
  },
  {
    index: "07",
    name: "Convocatorias",
    description:
      "Coordinación de participación, asistencia, capacidad y seguimiento de encuentros.",
  },
  {
    index: "08",
    name: "Integraciones",
    description:
      "Conexión progresiva con herramientas y fuentes que forman parte de la operación empresarial.",
  },
];

export default function ConectaPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f3f5ef] text-[#082947]">
      <Navbar />

     {/* HERO */}
<section className="relative isolate min-h-[94svh] overflow-hidden bg-[#041422] text-white">
  {/* 01 · FOTOGRAFÍA */}
  <Image
    src="/fotos/conecta-hero.png"
    alt="Plataforma CONECTA para inteligencia organizacional y gobernabilidad"
    fill
    priority
    sizes="100vw"
    quality={82}
    className="absolute inset-0 z-0 object-cover object-[68%_center]"
  />

  {/* 02 · TRATAMIENTO CINEMATOGRÁFICO */}
  <div className="pointer-events-none absolute inset-0 z-10 bg-[#041422]/20" />

<div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#041422]/88 via-[#041422]/48 to-transparent" />

<div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#041422]/48 via-transparent to-[#041422]/12" />

  {/* 03 · GRID */}
  <div
    aria-hidden="true"
    className="conecta-grid pointer-events-none absolute inset-0 z-20 opacity-25"
  />

  {/* 04 · GLOWS */}
  <div className="pointer-events-none absolute left-[-18rem] top-[15%] z-20 h-[42rem] w-[42rem] rounded-full bg-[#a0c82b]/10 blur-[150px]" />

  <div className="pointer-events-none absolute right-[-20rem] top-[-8rem] z-20 h-[52rem] w-[52rem] rounded-full bg-[#0d6e86]/12 blur-[180px]" />

  {/* ISOTIPO */}
<div className="pointer-events-none absolute right-[80%] top-[27%] z-30 hidden aspect-square w-[22vw] max-w-[340px] lg:block">
    <div className="absolute inset-[20%] rounded-full bg-[#a0c82b]/10 blur-[110px]" />

    <div className="conecta-orbit absolute inset-[10%] rounded-full border border-[#b7d65e]/10" />
<div className="conecta-orbit-reverse absolute inset-[22%] rounded-full border border-white/6" />
    <Image
      src="/brands/cultura-conecta-isotype-3d.webp"
      alt=""
      fill
      sizes="22vw"
className="conecta-float object-contain opacity-68 drop-shadow-[0_24px_70px_rgba(0,0,0,0.32)]"
    />
  </div>

  {/* 06 · CONTENIDO */}
  <Container className="relative z-40 flex min-h-[94svh] items-center pb-20 pt-40 md:pt-44">
    <div className="max-w-[880px]">
      <div className="mb-8 flex items-center gap-4">
        <span className="h-px w-10 bg-[#a0c82b]" />

        <p className="text-[10px] font-medium uppercase tracking-[0.34em] text-[#b7d65e] sm:text-xs">
          Inteligencia organizacional · Grupo A&amp;C
        </p>
      </div>

      <h1 className="max-w-[880px] text-[3.4rem] font-semibold leading-[0.89] tracking-[-0.065em] sm:text-[4.6rem] md:text-[6rem] lg:text-[6.7rem] xl:text-[7.3rem]">
        Vea cómo funciona
        <span className="block text-[#b7d65e]">
          su organización.
        </span>
      </h1>

      <p className="mt-8 max-w-2xl text-base font-light leading-[1.85] text-white/68 md:text-lg">
        CONECTA relaciona estructura, responsabilidades, procesos,
        actividades, evidencias, indicadores y evaluaciones para transformar
        el desempeño organizacional en información útil para decidir.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
        <Link
          href="#que-mide"
          className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full bg-[#a0c82b] px-7 py-4 text-sm font-semibold text-[#082947] transition-all duration-300 hover:scale-[1.025] hover:bg-[#b7d65e]"
        >
          Explorar lo que mide
          <ArrowRight />
        </Link>

        <PlatformConectaButton />
      </div>

      <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6">
        {["Desempeño", "Trazabilidad", "Gobernabilidad"].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b7d65e]" />

            <span className="text-[9px] uppercase tracking-[0.26em] text-white/40">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  </Container>
</section>

      {/* PROBLEMA */}
      <section className="relative px-6 py-24 md:py-36">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#789817]">
                El problema
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl text-4xl font-semibold leading-[0.97] tracking-[-0.055em] md:text-6xl lg:text-7xl">
                Una empresa puede estar operando sin saber realmente cómo está
                funcionando.
              </h2>

              <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-[#082947]/10 bg-[#082947]/10 md:grid-cols-2">
                {[
                  "Información dispersa",
                  "Responsabilidades ambiguas",
                  "Evidencias desconectadas",
                  "Seguimientos manuales",
                  "Evaluaciones aisladas",
                  "Decisiones sin trazabilidad",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex min-h-[110px] items-center gap-4 bg-[#f3f5ef] p-6 md:p-7"
                  >
                    <span className="text-[10px] tracking-[0.22em] text-[#789817]">
                      0{index + 1}
                    </span>

                    <p className="text-base font-medium tracking-[-0.02em]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-10 max-w-3xl text-lg font-light leading-[1.8] text-[#082947]/62">
                CONECTA transforma esa dispersión en una arquitectura observable
                de estructura, ejecución, evidencia, desempeño y gobierno.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* QUÉ MIDE */}
      <section
        id="que-mide"
        className="bg-[#071d32] px-6 py-24 text-white md:py-36"
      >
        <Container>
          <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#b7d65e]">
                Qué mide CONECTA
              </p>

              <h2 className="max-w-4xl text-4xl font-semibold leading-[0.96] tracking-[-0.055em] md:text-6xl lg:text-7xl">
                Lo que ocurre dentro de una organización deja señales.
              </h2>
            </div>

            <p className="max-w-xl text-base font-light leading-[1.85] text-white/58 lg:justify-self-end">
              CONECTA relaciona esas señales para construir una lectura más
              completa sobre cómo se distribuye, ejecuta y gobierna el trabajo.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
            {measurementLayers.map((item) => (
              <article
                key={item.number}
                className="group flex min-h-[350px] flex-col bg-[#071d32] p-8 transition-colors duration-500 hover:bg-[#0b2945] md:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.26em] text-[#b7d65e]">
                    {item.number}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-[#a0c82b] shadow-[0_0_0_8px_rgba(160,200,43,0.08)]" />
                </div>

                <div className="mt-auto pt-20">
                  <p className="text-[9px] uppercase tracking-[0.28em] text-white/35">
                    {item.label}
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold leading-[1.02] tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm font-light leading-[1.8] text-white/55">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* MAPA VIVO */}
      <section className="relative overflow-hidden bg-[#e9ecdf] px-6 py-24 md:py-36">
        <div className="pointer-events-none absolute right-[-14rem] top-[-12rem] h-[40rem] w-[40rem] rounded-full bg-[#a0c82b]/12 blur-[140px]" />

        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-24">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#789817]">
                Mapa Vivo
              </p>

              <h2 className="text-4xl font-semibold leading-[0.97] tracking-[-0.055em] md:text-6xl">
                La organización como sistema, no como organigrama.
              </h2>

              <p className="mt-8 max-w-xl text-base font-light leading-[1.85] text-[#082947]/62">
                CONECTA representa la relación entre personas, cargos,
                responsabilidades y procesos para comprender cómo se distribuye
                realmente la ejecución dentro de la empresa.
              </p>

              <div className="mt-9 flex flex-wrap gap-2">
                {[
                  "Personas",
                  "Cargos",
                  "Procesos",
                  "Responsabilidades",
                  "Indicadores",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#082947]/12 bg-white/45 px-4 py-2 text-[9px] uppercase tracking-[0.18em] text-[#082947]/55"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* VISUAL MAPA */}
            <div className="relative min-h-[610px] overflow-hidden rounded-[2.5rem] border border-[#082947]/12 bg-[#041422] p-7 text-white shadow-[0_35px_100px_rgba(8,41,71,0.16)] sm:p-10">
              <div className="conecta-grid pointer-events-none absolute inset-0 opacity-20" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a0c82b]/8 blur-[100px]" />

              <div className="relative z-10 flex h-full min-h-[530px] flex-col">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.28em] text-[#b7d65e]">
                      Organización
                    </p>
                    <p className="mt-2 text-sm text-white/45">
                      Arquitectura dinámica
                    </p>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-[#b7d65e]/20 bg-[#a0c82b]/8 px-3 py-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#b7d65e]" />
                    <span className="text-[8px] uppercase tracking-[0.2em] text-[#cbe77a]">
                      Live
                    </span>
                  </div>
                </div>

                <div className="mx-auto mt-12 flex w-full max-w-[520px] flex-1 flex-col items-center">
                  <div className="rounded-2xl border border-[#b7d65e]/35 bg-[#a0c82b]/10 px-7 py-4 text-center">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#b7d65e]">
                      Dirección
                    </p>
                  </div>

                  <div className="h-9 w-px bg-gradient-to-b from-[#b7d65e]/60 to-white/10" />

                  <div className="grid w-full grid-cols-3 gap-3">
                    {["Gerencia", "Gerencia", "Gerencia"].map((item, index) => (
                      <div
                        key={`${item}-${index}`}
                        className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-4 text-center"
                      >
                        <p className="text-[8px] uppercase tracking-[0.16em] text-white/46">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="h-9 w-px bg-white/12" />

                  <div className="rounded-2xl border border-white/12 bg-white/[0.055] px-7 py-4 text-center">
                    <p className="text-[8px] uppercase tracking-[0.18em] text-white/52">
                      Responsable
                    </p>
                  </div>

                  <div className="h-9 w-px bg-white/12" />

                  <div className="grid w-full grid-cols-3 gap-3">
                    {["Objetivo", "Actividad", "Indicador"].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-[#0a263e] px-3 py-4 text-center"
                      >
                        <p className="text-[8px] uppercase tracking-[0.16em] text-white/48">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="h-9 w-px bg-gradient-to-b from-white/12 to-[#b7d65e]/60" />

                  <div className="rounded-2xl border border-[#b7d65e]/30 bg-[#a0c82b]/8 px-7 py-4 text-center">
                    <p className="text-[8px] uppercase tracking-[0.18em] text-[#cbe77a]">
                      Evidencia → Evaluación → Decisión
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TRAZABILIDAD */}
      <section className="bg-[#041422] px-6 py-24 text-white md:py-32">
        <Container>
          <div className="max-w-4xl">
            <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#b7d65e]">
              Cadena de gobernabilidad
            </p>

            <h2 className="text-4xl font-semibold leading-[0.97] tracking-[-0.055em] md:text-6xl lg:text-7xl">
              Del trabajo a la decisión.
            </h2>
          </div>

          <div className="mt-16 overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.03]">
            <div className="grid md:grid-cols-4 xl:grid-cols-8">
              {traceability.map((item, index) => (
                <div
                  key={item}
                  className="relative border-b border-white/10 p-6 last:border-b-0 md:border-b md:border-r md:last:border-r-0 xl:border-b-0"
                >
                  <p className="text-[9px] tracking-[0.24em] text-[#b7d65e]">
                    0{index + 1}
                  </p>

                  <p className="mt-8 text-sm font-medium tracking-[-0.02em]">
                    {item}
                  </p>

                  {index < traceability.length - 1 && (
                    <span className="absolute bottom-5 right-5 hidden text-white/18 xl:block">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <p className="mt-10 max-w-3xl text-lg font-light leading-[1.85] text-white/60">
            CONECTA convierte la actividad cotidiana de la organización en
            trazabilidad para quienes deben interpretar, priorizar y decidir.
          </p>
        </Container>
      </section>

      {/* GOBERNABILIDAD */}
      <section className="px-6 py-24 md:py-36">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#789817]">
                Gobernabilidad
              </p>

              <h2 className="text-4xl font-semibold leading-[0.97] tracking-[-0.055em] md:text-6xl">
                Cada nivel ve lo que necesita gobernar.
              </h2>

              <p className="mt-7 max-w-md text-base font-light leading-[1.85] text-[#082947]/62">
                La misma organización necesita diferentes lecturas según la
                responsabilidad de quien observa.
              </p>
            </div>

            <div className="border-t border-[#082947]/15">
              {governanceLevels.map((item) => (
                <article
                  key={item.code}
                  className="grid gap-5 border-b border-[#082947]/15 py-8 md:grid-cols-[70px_150px_1fr] md:items-start md:py-10"
                >
                  <span className="text-[10px] tracking-[0.24em] text-[#789817]">
                    {item.code}
                  </span>

                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#082947]/48">
                    {item.level}
                  </p>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm font-light leading-[1.8] text-[#082947]/58">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CAPACIDADES */}
      <section className="bg-[#071d32] px-6 py-24 text-white md:py-36">
        <Container>
          <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#b7d65e]">
                Capacidades
              </p>

              <h2 className="text-4xl font-semibold leading-[0.96] tracking-[-0.055em] md:text-6xl">
                Una arquitectura común para observar la organización.
              </h2>
            </div>

            <p className="max-w-xl text-base font-light leading-[1.85] text-white/58 lg:justify-self-end">
              Las capacidades de CONECTA se integran progresivamente alrededor
              de una misma estructura de personas, responsabilidades, procesos
              y evidencias.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((item) => (
              <article
                key={item.name}
                className="group flex min-h-[290px] flex-col rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#b7d65e]/35 hover:bg-white/[0.055]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] tracking-[0.24em] text-[#b7d65e]">
                    {item.index}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-white/15 transition-colors group-hover:bg-[#b7d65e]" />
                </div>

                <div className="mt-auto pt-16">
                  <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                    {item.name}
                  </h3>

                  <p className="mt-5 text-sm font-light leading-[1.8] text-white/52">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* INTELIGENCIA EJECUTIVA */}
      <section className="relative overflow-hidden bg-[#a0c82b] px-6 py-24 md:py-36">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-24">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#082947]/65">
                Inteligencia ejecutiva
              </p>

              <h2 className="text-4xl font-semibold leading-[0.96] tracking-[-0.055em] text-[#082947] md:text-6xl">
                La información correcta, para la persona correcta.
              </h2>
            </div>

            <div className="rounded-[2.25rem] border border-[#082947]/14 bg-[#f3f5ef]/38 p-8 backdrop-blur-xl md:p-10">
              <p className="text-lg leading-[1.8] text-[#082947]/75 md:text-xl">
                El propósito no es producir más datos. Es estructurar contexto
                suficiente para comprender qué está ocurriendo, dónde requiere
                atención y qué decisiones necesitan ser tomadas.
              </p>

              <div className="mt-8 grid gap-4 border-t border-[#082947]/12 pt-7 sm:grid-cols-3">
                {["Contexto", "Prioridad", "Decisión"].map((item) => (
                  <div key={item}>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#082947]/45">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PRINCIPIO */}
      <section className="bg-[#f3f5ef] px-6 py-24 md:py-36">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.62fr_1.38fr] lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#789817]">
                Principio de independencia
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl text-4xl font-semibold leading-[0.97] tracking-[-0.055em] md:text-6xl">
                Los especialistas aportan criterio.
                <span className="block text-[#789817]">
                  CONECTA aporta estructura.
                </span>
              </h2>

              <div className="mt-10 grid gap-8 border-t border-[#082947]/15 pt-8 md:grid-cols-2">
                <p className="text-base font-light leading-[1.85] text-[#082947]/64">
                  CONECTA puede acompañar procesos desarrollados por equipos
                  internos, consultores o profesionales externos. Cada
                  especialista conserva la autoría y titularidad de sus
                  metodologías, contenidos y conocimiento especializado.
                </p>

                <p className="text-base font-light leading-[1.85] text-[#082947]/64">
                  La plataforma estructura responsabilidades, actividades,
                  evidencias, indicadores y resultados para proporcionar
                  trazabilidad y medición sobre la ejecución.
                </p>
              </div>

              <div className="mt-10 rounded-[2rem] border border-[#082947]/10 bg-[#e9ecdf] p-7 md:p-9">
                <p className="text-lg font-medium leading-[1.65] tracking-[-0.025em]">
                  CONECTA no le dice a una organización cómo pensar.
                  <span className="text-[#789817]">
                    {" "}
                    Le permite ver cómo está funcionando.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PILOTO */}
      <section className="relative overflow-hidden bg-[#041422] px-6 py-24 text-white md:py-36">
        <div className="conecta-grid pointer-events-none absolute inset-0 opacity-20" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a0c82b]/10 blur-[150px]" />

        <Container className="relative">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mx-auto mb-7 flex w-fit items-center gap-2 rounded-full border border-[#b7d65e]/20 bg-[#a0c82b]/8 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b7d65e]" />
              <span className="text-[9px] uppercase tracking-[0.24em] text-[#cbe77a]">
                Piloto controlado
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[0.94] tracking-[-0.06em] md:text-6xl lg:text-7xl">
              Gobierne con evidencia,
              <span className="block text-[#b7d65e]">no con percepción.</span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-[1.85] text-white/58 md:text-lg">
              CONECTA se encuentra en una etapa de despliegue controlado para
              validar su arquitectura de desempeño, trazabilidad y gobernabilidad
              en organizaciones reales.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={platformUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full bg-[#a0c82b] px-7 py-4 text-sm font-semibold text-[#082947] transition-all duration-300 hover:scale-[1.025] hover:bg-[#b7d65e]"
              >
                Acceder al piloto
                <ArrowUpRight />
              </a>

              <Link
                href="/contacto"
                className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm text-white/75 transition-colors hover:border-white/40 hover:bg-white/[0.05] hover:text-white"
              >
                Solicitar demostración
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
              {[
                "Acceso controlado",
                "Implementación guiada",
                "Evolución progresiva",
              ].map((item) => (
                <span
                  key={item}
                  className="text-[9px] uppercase tracking-[0.22em] text-white/30"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Footer />

      <style>{`
        .conecta-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: linear-gradient(to bottom, black, transparent 94%);
        }

        @keyframes conectaFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(-2deg);
          }

          50% {
            transform: translate3d(0, -18px, 0) rotate(1deg);
          }
        }

        @keyframes conectaOrbit {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes conectaOrbitReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        @keyframes conectaPlatformPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
            box-shadow: 0 0 12px rgba(183, 214, 94, 0.65);
          }

          50% {
            transform: scale(1.35);
            opacity: 0.75;
            box-shadow: 0 0 28px rgba(183, 214, 94, 1);
          }
        }

        @keyframes conectaPlatformScan {
          0% {
            left: -30%;
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          80% {
            opacity: 1;
          }

          100% {
            left: 115%;
            opacity: 0;
          }
        }

        @keyframes conectaPlatformBreath {
          0%, 100% {
            box-shadow:
              0 18px 55px rgba(0, 0, 0, 0.28),
              0 0 0 rgba(160, 200, 43, 0);
          }

          50% {
            box-shadow:
              0 18px 55px rgba(0, 0, 0, 0.28),
              0 0 38px rgba(160, 200, 43, 0.12);
          }
        }

        .conecta-float {
          animation: conectaFloat 8s ease-in-out infinite;
          will-change: transform;
        }

        .conecta-orbit {
          animation: conectaOrbit 38s linear infinite;
        }

        .conecta-orbit-reverse {
          animation: conectaOrbitReverse 26s linear infinite;
        }

        .conecta-platform-button {
          animation: conectaPlatformBreath 5s ease-in-out infinite;
        }

        .conecta-platform-core {
          animation: conectaPlatformPulse 2.4s ease-in-out infinite;
        }

        .conecta-platform-scan {
          animation: conectaPlatformScan 5.5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .conecta-float,
          .conecta-orbit,
          .conecta-orbit-reverse,
          .conecta-platform-button,
          .conecta-platform-core,
          .conecta-platform-scan {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}