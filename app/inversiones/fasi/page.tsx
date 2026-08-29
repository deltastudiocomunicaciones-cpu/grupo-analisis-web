import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FasiShowcase from "@/components/sections/FasiShowcase";

export const metadata: Metadata = {
  title: "FASI | Software y plataformas empresariales a la medida",
  description:
    "FASI diseña sistemas core, plataformas SaaS, e-commerce, portales y soluciones digitales construidas desde la operación empresarial.",
  alternates: {
    canonical: "/inversiones/fasi",
  },
  openGraph: {
    title: "FASI | Fábrica de Sistemas de Información",
    description:
      "Convertimos procesos empresariales en software preparado para operar, controlar y escalar.",
    url: "https://www.grupoayc.co/inversiones/fasi",
    type: "website",
    siteName: "Grupo A&C",
    locale: "es_CO",
    images: [
      {
        url: "https://www.grupoayc.co/og/grupo-ayc-og-v2.jpg",
        width: 1200,
        height: 630,
        alt: "FASI · Fábrica de Sistemas de Información",
      },
    ],
  },
};

const metrics = [
  {
    value: "8",
    label: "Casos y desarrollos en vitrina",
  },
  {
    value: "4",
    label: "Familias de soluciones digitales",
  },
  {
    value: "2006",
    label: "Trayectoria del ecosistema que nos respalda",
  },
];

const pillars = [
  {
    number: "01",
    title: "Comprensión del negocio",
    text:
      "Traducimos procesos, reglas, decisiones y flujos de trabajo en una arquitectura digital que puede ejecutarse y medirse.",
  },
  {
    number: "02",
    title: "Escalabilidad y control",
    text:
      "Construimos soluciones preparadas para crecer en usuarios, información y capacidades, incorporando trazabilidad desde el diseño.",
  },
  {
    number: "03",
    title: "Experiencia de usuario",
    text:
      "Diseñamos interfaces claras para facilitar la adopción de los equipos internos y mejorar la experiencia de clientes y aliados.",
  },
];

const method = [
  {
    number: "01",
    title: "Comprender la operación",
    text:
      "Analizamos procesos actuales, puntos de fricción, actores, información crítica y requerimientos reales del negocio.",
  },
  {
    number: "02",
    title: "Modelar y diseñar",
    text:
      "Definimos arquitectura, datos, reglas del sistema, flujos de usuario y experiencia visual antes de construir.",
  },
  {
    number: "03",
    title: "Desplegar y evolucionar",
    text:
      "Llevamos la solución a producción y construimos una ruta de mejora para que pueda evolucionar con la empresa.",
  },
];

export default function FasiPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#edf2f3] text-[#07141f]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#07141f] px-6 pb-20 pt-40 text-white md:pb-28 md:pt-48">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(97,212,194,0.20),transparent_28%),radial-gradient(circle_at_88%_10%,rgba(77,124,255,0.22),transparent_30%)]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.38em] text-[#61d4c2]">
              FASI · Fábrica de Sistemas de Información
            </p>

            <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[5.6rem]">
              La fábrica donde los procesos de tu empresa se convierten en
              software de alto nivel.
            </h1>

            <p className="mt-9 max-w-3xl text-base font-light leading-[1.85] text-white/65 md:text-xl">
              Diseñamos plataformas a la medida, sistemas operativos
              empresariales, e-commerce transaccionales y desarrollo web
              avanzado con arquitectura pensada para operar, controlar y
              escalar.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#diagnostico"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#61d4c2] px-7 py-4 text-sm font-semibold text-[#07141f] transition hover:-translate-y-0.5 hover:bg-white"
              >
                Agendar diagnóstico operativo →
              </a>

              <a
                href="#vitrina"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/16 bg-white/[0.04] px-7 py-4 text-sm text-white/70 transition hover:border-[#61d4c2]/55 hover:text-white"
              >
                Explorar vitrina de plataformas
              </a>
            </div>

            <div className="mt-12 grid gap-4 border-t border-white/10 pt-7 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-white">
                    {metric.value}
                  </p>

                  <p className="mt-2 max-w-[190px] text-[10px] uppercase leading-[1.7] tracking-[0.15em] text-white/35">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PANEL FASI */}
          <div className="relative mx-auto w-full max-w-[600px]">
            <div className="absolute -inset-12 rounded-full bg-[#4d7cff]/15 blur-[110px]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#0b1d2a]/92 p-4 shadow-[0_45px_140px_rgba(0,0,0,0.45)]">
              <div className="flex items-center justify-between border-b border-white/10 px-3 pb-4">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#61d4c2]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#4d7cff]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </div>

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
                  FASI · Build System
                </span>
              </div>

              <div className="p-3 pt-7 md:p-6 md:pt-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[#61d4c2]">
                      Architecture pipeline
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em]">
                      Business to Software
                    </h2>
                  </div>

                  <span className="rounded-full border border-[#61d4c2]/20 bg-[#61d4c2]/10 px-3 py-2 text-[9px] uppercase tracking-[0.16em] text-[#61d4c2]">
                    Operational
                  </span>
                </div>

                <div className="mt-9 space-y-3">
                  {[
                    ["01", "Operación", "Procesos y decisiones"],
                    ["02", "Arquitectura", "Datos y reglas"],
                    ["03", "Producto", "Interfaz y experiencia"],
                    ["04", "Evolución", "Control y escala"],
                  ].map(([number, title, text], index) => (
                    <div
                      key={number}
                      className="grid grid-cols-[44px_1fr_auto] items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                    >
                      <span className="font-mono text-xs text-white/30">
                        {number}
                      </span>

                      <div>
                        <p className="text-sm font-medium">{title}</p>
                        <p className="mt-1 text-xs text-white/35">{text}</p>
                      </div>

                      <span
                        className={`h-2.5 w-2.5 rounded-full ${
                          index === 3
                            ? "bg-[#61d4c2] shadow-[0_0_18px_rgba(97,212,194,0.8)]"
                            : "bg-[#4d7cff]"
                        }`}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {["Core", "SaaS", "Commerce"].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-black/15 p-4 text-center"
                    >
                      <p className="text-[9px] uppercase tracking-[0.16em] text-white/36">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIADOR */}
      <section className="relative bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="text-xs uppercase tracking-[0.36em] text-[#327f75]">
              El diferencial FASI
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl">
              No programamos software aislado. Construimos infraestructura
              digital desde el criterio empresarial.
            </h2>

            <p className="mt-8 max-w-4xl text-base font-light leading-[1.9] text-[#07141f]/58 md:text-lg">
              El desarrollo comienza antes del código. Con el respaldo del
              ecosistema consultivo de Grupo A&C, entendemos la dimensión
              financiera, contable, administrativa y comercial de la operación
              antes de diseñar el sistema.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.number}
                className="group min-h-[330px] rounded-[2rem] border border-[#07141f]/10 bg-[#edf2f3]/70 p-8 transition hover:-translate-y-1 hover:bg-[#edf2f3]"
              >
                <span className="font-mono text-sm text-[#4d7cff]">
                  {pillar.number}
                </span>

                <h3 className="mt-20 text-3xl font-semibold leading-[1] tracking-[-0.045em]">
                  {pillar.title}
                </h3>

                <p className="mt-6 text-sm font-light leading-[1.8] text-[#07141f]/56">
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FasiShowcase />

     {/* MÉTODO */}
<section
  className="
    relative
    overflow-hidden
    bg-[#dfe9f1]
    px-6
    py-24
    text-[#0c1a2d]
    md:py-32
  "
>
  {/* ATMÓSFERA ICE / POWDER / SKY */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -left-32 -top-40 h-[520px] w-[520px] rounded-full bg-white/75 blur-[130px]" />

    <div className="absolute -bottom-40 right-[4%] h-[500px] w-[500px] rounded-full bg-[#5c82b8]/20 blur-[140px]" />

    <div className="absolute right-[18%] top-[5%] h-72 w-72 rounded-full bg-[#87a8c2]/18 blur-[110px]" />

    <div
      className="
        absolute
        inset-0
        opacity-[0.035]
        [background-image:linear-gradient(to_right,#102a54_1px,transparent_1px),linear-gradient(to_bottom,#102a54_1px,transparent_1px)]
        [background-size:100px_100px]
      "
    />
  </div>

  <div className="relative mx-auto max-w-7xl">
    {/* ENCABEZADO */}
    <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
      <div>
        <p className="text-xs uppercase tracking-[0.36em] text-[#24549a]">
          Método FASI
        </p>

        <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[0.96] tracking-[-0.055em] text-[#0c1a2d] md:text-6xl">
          De la operación al sistema en producción.
        </h2>
      </div>

      <p className="max-w-xl text-base font-light leading-[1.85] text-[#102a54]/58 lg:justify-self-end">
        Cada solución comienza comprendiendo cómo funciona la empresa, antes
        de definir la tecnología que necesita.
      </p>
    </div>

    {/* ETAPAS */}
    <div className="mt-16 grid gap-5 lg:grid-cols-3">
      {method.map((step, index) => (
        <article
          key={step.number}
          className={`
            group
            relative
            flex
            min-h-[350px]
            flex-col
            overflow-hidden
            rounded-[2rem]
            border
            p-7
            shadow-[0_24px_70px_rgba(16,42,84,0.10)]
            transition-all
            duration-500
            hover:-translate-y-1
            hover:shadow-[0_32px_90px_rgba(16,42,84,0.16)]
            md:p-8
            ${
              index === 0
                ? "border-white/80 bg-[#f4f6f7] text-[#0c1a2d]"
                : index === 1
                  ? "border-white/45 bg-[#9bb6cc] text-[#102a54]"
                  : "border-[#24549a] bg-[#173f79] text-white"
            }
          `}
        >
          {/* LUZ SUPERIOR */}
          <div
            className={`
              pointer-events-none
              absolute
              inset-x-8
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              to-transparent
              ${
                index === 2
                  ? "via-white/75"
                  : "via-[#24549a]/45"
              }
            `}
          />

          {/* RESPLANDOR */}
          <div
            className={`
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-64
              w-64
              rounded-full
              blur-[80px]
              transition-transform
              duration-700
              group-hover:scale-125
              ${
                index === 0
                  ? "bg-[#bbcdde]/40"
                  : index === 1
                    ? "bg-white/25"
                    : "bg-[#5c82b8]/35"
              }
            `}
          />

          {/* NÚMERO */}
          <div className="relative z-10 flex items-center justify-between">
            <span
              className={`
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                border
                font-mono
                text-xs
                ${
                  index === 2
                    ? "border-white/20 bg-white/[0.08] text-[#bbcdde]"
                    : "border-[#102a54]/12 bg-white/45 text-[#24549a]"
                }
              `}
            >
              {step.number}
            </span>

            <span
              className={`
                text-[9px]
                uppercase
                tracking-[0.2em]
                ${
                  index === 2
                    ? "text-white/42"
                    : "text-[#102a54]/38"
                }
              `}
            >
              {
                [
                  "Comprender",
                  "Estructurar",
                  "Evolucionar",
                ][index]
              }
            </span>
          </div>

          {/* CONTENIDO */}
          <div className="relative z-10 mt-auto pt-20">
            <div
              className={`
                mb-6
                h-px
                w-12
                transition-all
                duration-500
                group-hover:w-20
                ${
                  index === 2
                    ? "bg-[#87a8c2]"
                    : "bg-[#24549a]"
                }
              `}
            />

            <h3 className="max-w-sm text-3xl font-semibold leading-[1] tracking-[-0.045em]">
              {step.title}
            </h3>

            <p
              className={`
                mt-6
                max-w-md
                text-sm
                font-light
                leading-[1.85]
                ${
                  index === 2
                    ? "text-white/62"
                    : "text-[#102a54]/62"
                }
              `}
            >
              {step.text}
            </p>
          </div>

          {/* BORDE INTERIOR */}
          <div
            className={`
              pointer-events-none
              absolute
              inset-[1px]
              rounded-[1.95rem]
              border
              ${
                index === 2
                  ? "border-white/10"
                  : "border-white/55"
              }
            `}
          />
        </article>
      ))}
    </div>

    {/* FRASE DE CIERRE */}
    <div className="mt-12 flex flex-col gap-4 border-t border-[#102a54]/10 pt-8 md:flex-row md:items-center md:justify-between">
      <p className="max-w-2xl text-sm font-light leading-7 text-[#102a54]/55">
        La tecnología aparece después de entender el problema. Esa es la
        diferencia entre desarrollar una herramienta y construir un sistema.
      </p>

      <a
        href="#diagnostico"
        className="
          inline-flex
          w-fit
          items-center
          gap-3
          rounded-full
          bg-[#173f79]
          px-6
          py-3.5
          text-xs
          font-semibold
          uppercase
          tracking-[0.12em]
          text-white
          shadow-[0_14px_35px_rgba(23,63,121,0.22)]
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-[#102a54]
        "
      >
        Iniciar diagnóstico
        <span>→</span>
      </a>
    </div>
  </div>
</section>

     {/* DIAGNÓSTICO */}
<section
  id="diagnostico"
  className="relative overflow-hidden bg-[#edf2f3] px-4 py-20 sm:px-6 md:py-28 lg:py-32"
>
  {/* ATMÓSFERA */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -left-40 top-0 h-[460px] w-[460px] rounded-full bg-white/75 blur-[130px]" />
    <div className="absolute -bottom-40 right-0 h-[420px] w-[420px] rounded-full bg-[#87a8c2]/15 blur-[130px]" />
  </div>

  <div className="relative mx-auto grid min-w-0 max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
    {/* INFORMACIÓN */}
    <div className="min-w-0">
      <p className="text-[10px] uppercase tracking-[0.3em] text-[#327f75] sm:text-xs sm:tracking-[0.36em]">
        Conversación inicial
      </p>

      <h2 className="mt-5 max-w-2xl text-[2.35rem] font-semibold leading-[0.98] tracking-[-0.055em] text-[#07141f] sm:text-5xl md:text-6xl">
        ¿Tu visión empresarial requiere software de alto nivel?
      </h2>

      <p className="mt-6 max-w-xl text-sm font-light leading-[1.85] text-[#07141f]/60 sm:mt-8 sm:text-base">
        En una conversación inicial analizamos la necesidad, su viabilidad y
        la arquitectura que podría requerir tu solución digital.
      </p>

      {/* CONTACTO DIRECTO */}
      <div className="mt-9">
        <p className="mb-4 text-[9px] uppercase tracking-[0.24em] text-[#102a54]/40">
          Elige cómo iniciar la conversación
        </p>

        <div className="grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {/* WHATSAPP */}
          <a
            href="https://wa.me/573118687774?text=Hola%20Grupo%20A%26C%2C%20quiero%20conversar%20sobre%20un%20desarrollo%20con%20FASI."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative min-w-0 overflow-hidden rounded-[1.5rem] border border-[#327f75]/15 bg-[#dff3ef] p-5 shadow-[0_18px_45px_rgba(50,127,117,0.10)] transition-all duration-500 hover:-translate-y-1 hover:border-[#327f75]/30 hover:shadow-[0_24px_60px_rgba(50,127,117,0.18)]"
          >
            <div className="pointer-events-none absolute -right-14 -top-16 h-40 w-40 rounded-full bg-[#61d4c2]/35 blur-[45px] transition-transform duration-700 group-hover:scale-125" />

            <div className="relative z-10 flex items-start justify-between gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#07141f] text-[#61d4c2] shadow-[0_12px_30px_rgba(7,20,31,0.16)]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 8.5c.4 2.5 2 4.1 4.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              <span className="text-lg text-[#07141f]/35 transition-transform duration-500 group-hover:translate-x-1">
                ↗
              </span>
            </div>

            <div className="relative z-10 mt-7">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#327f75] shadow-[0_0_10px_rgba(50,127,117,0.8)]" />

                <span className="text-[8px] uppercase tracking-[0.2em] text-[#327f75]">
                  Conversación directa
                </span>
              </div>

              <strong className="mt-3 block text-lg font-semibold tracking-[-0.03em] text-[#07141f]">
                Escribir por WhatsApp
              </strong>

              <span className="mt-2 block text-xs text-[#07141f]/52">
                +57 311 868 7774
              </span>
            </div>

            <div className="pointer-events-none absolute inset-[1px] rounded-[1.45rem] border border-white/55" />
          </a>

          {/* CORREO */}
          <a
            href="mailto:grupoanalisisyconsultoria@gmail.com?subject=Proyecto%20de%20software%20con%20FASI"
            className="group relative min-w-0 overflow-hidden rounded-[1.5rem] border border-[#24549a]/30 bg-[#173f79] p-5 text-white shadow-[0_18px_45px_rgba(23,63,121,0.18)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#102a54] hover:shadow-[0_24px_65px_rgba(23,63,121,0.28)]"
          >
            <div className="pointer-events-none absolute -right-14 -top-16 h-40 w-40 rounded-full bg-[#87a8c2]/30 blur-[45px] transition-transform duration-700 group-hover:scale-125" />

            <div className="relative z-10 flex items-start justify-between gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.08] text-[#bbcdde]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="M4 6.5h16v11H4v-11Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m5 8 7 5 7-5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <span className="text-lg text-white/35 transition-transform duration-500 group-hover:translate-x-1">
                ↗
              </span>
            </div>

            <div className="relative z-10 mt-7">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#87a8c2] shadow-[0_0_10px_rgba(135,168,194,0.8)]" />

                <span className="text-[8px] uppercase tracking-[0.2em] text-[#bbcdde]">
                  Proyecto estructurado
                </span>
              </div>

              <strong className="mt-3 block text-lg font-semibold tracking-[-0.03em]">
                Enviar un correo
              </strong>

              <span className="mt-2 block break-all text-[11px] leading-5 text-white/52">
                grupoanalisisyconsultoria@gmail.com
              </span>
            </div>

            <div className="pointer-events-none absolute inset-[1px] rounded-[1.45rem] border border-white/10" />
          </a>
        </div>
      </div>
    </div>

    {/* FORMULARIO */}
    <form
      action="/api/contacto"
      method="POST"
      className="min-w-0 w-full overflow-hidden rounded-[1.6rem] border border-[#07141f]/10 bg-white p-5 shadow-[0_24px_70px_rgba(7,20,31,0.08)] sm:rounded-[2rem] sm:p-7 md:p-10"
    >
      <input
        type="hidden"
        name="servicio"
        value="FASI · Diagnóstico operativo"
      />

      <input
        type="hidden"
        name="redirectTo"
        value="/inversiones/fasi?enviado=1#diagnostico"
      />

      <div className="grid min-w-0 gap-4 sm:gap-5">
        <div className="min-w-0">
          <label
            htmlFor="empresa-fasi"
            className="mb-2 block text-[10px] uppercase tracking-[0.16em] text-[#07141f]/45"
          >
            Empresa o proyecto
          </label>

          <input
            id="empresa-fasi"
            name="empresa"
            required
            autoComplete="organization"
            placeholder="Nombre de la empresa"
            className="w-full min-w-0 rounded-xl border border-[#07141f]/12 bg-[#edf2f3] px-4 py-4 text-base text-[#07141f] outline-none transition placeholder:text-[#07141f]/30 focus:border-[#4d7cff] sm:rounded-2xl sm:px-5"
          />
        </div>

        <div className="min-w-0">
          <label
            htmlFor="nombre-fasi"
            className="mb-2 block text-[10px] uppercase tracking-[0.16em] text-[#07141f]/45"
          >
            Nombre de contacto
          </label>

          <input
            id="nombre-fasi"
            name="nombre"
            required
            autoComplete="name"
            placeholder="Tu nombre"
            className="w-full min-w-0 rounded-xl border border-[#07141f]/12 bg-[#edf2f3] px-4 py-4 text-base text-[#07141f] outline-none transition placeholder:text-[#07141f]/30 focus:border-[#4d7cff] sm:rounded-2xl sm:px-5"
          />
        </div>

        <div className="min-w-0">
          <label
            htmlFor="contacto-fasi"
            className="mb-2 block text-[10px] uppercase tracking-[0.16em] text-[#07141f]/45"
          >
            Medio de contacto
          </label>

          <input
            id="contacto-fasi"
            name="contacto"
            required
            placeholder="Correo o WhatsApp"
            className="w-full min-w-0 rounded-xl border border-[#07141f]/12 bg-[#edf2f3] px-4 py-4 text-base text-[#07141f] outline-none transition placeholder:text-[#07141f]/30 focus:border-[#4d7cff] sm:rounded-2xl sm:px-5"
          />
        </div>

        <div className="min-w-0">
          <label
            htmlFor="desarrollo-fasi"
            className="mb-2 block text-[10px] uppercase tracking-[0.16em] text-[#07141f]/45"
          >
            Tipo de desarrollo
          </label>

          <select
            id="desarrollo-fasi"
            name="mensaje"
            required
            defaultValue=""
            className="w-full min-w-0 max-w-full rounded-xl border border-[#07141f]/12 bg-[#edf2f3] px-4 py-4 text-base text-[#07141f] outline-none transition focus:border-[#4d7cff] sm:rounded-2xl sm:px-5"
          >
            <option value="" disabled>
              Selecciona una opción
            </option>

            <option value="ERP o sistema core operativo">
              ERP o sistema core
            </option>

            <option value="Plataforma web o SaaS">
              Plataforma web o SaaS
            </option>

            <option value="Aplicación móvil">
              Aplicación móvil
            </option>

            <option value="E-commerce o plataforma transaccional">
              E-commerce o transaccional
            </option>

            <option value="Desarrollo web avanzado">
              Desarrollo web avanzado
            </option>

            <option value="Necesito orientación">
              Necesito orientación
            </option>
          </select>
        </div>

        <label className="flex min-w-0 items-start gap-3 rounded-xl bg-[#edf2f3]/70 p-4 text-xs leading-[1.65] text-[#07141f]/52">
          <input
            type="checkbox"
            required
            name="autorizacion"
            value="si"
            className="mt-0.5 h-4 w-4 shrink-0 accent-[#4d7cff]"
          />

          <span className="min-w-0">
            Autorizo el tratamiento de mis datos para recibir orientación
            sobre esta solicitud.
          </span>
        </label>

        <button
          type="submit"
          className="inline-flex min-h-14 w-full items-center justify-center whitespace-normal rounded-full bg-[#07141f] px-5 py-4 text-center text-xs font-semibold leading-5 text-white transition hover:-translate-y-0.5 hover:bg-[#4d7cff] sm:px-7 sm:text-sm"
        >
          Solicitar diagnóstico con FASI
          <span className="ml-2 shrink-0">→</span>
        </button>

        <a
          href="https://wa.me/573118687774?text=Hola%20Grupo%20A%26C%2C%20quiero%20conversar%20sobre%20un%20desarrollo%20con%20FASI."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-14 w-full items-center justify-center whitespace-normal rounded-full border border-[#07141f]/12 px-5 py-4 text-center text-xs leading-5 text-[#07141f]/62 transition hover:border-[#327f75]/40 hover:text-[#07141f] sm:px-7 sm:text-sm"
        >
          Hablar directamente por WhatsApp
        </a>
      </div>
    </form>
  </div>
</section>
      <Footer />
    </main>
  );
}