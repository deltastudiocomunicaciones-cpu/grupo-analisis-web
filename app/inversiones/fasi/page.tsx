import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "FASI | Fábrica de Sistemas de Información",
  description:
    "FASI diseña sistemas de información, plataformas empresariales y soluciones tecnológicas para automatizar procesos, integrar datos y escalar operaciones dentro del ecosistema Grupo A&C.",
  alternates: {
    canonical: "/inversiones/fasi",
  },
  openGraph: {
    title: "FASI | Fábrica de Sistemas de Información",
    description:
      "La unidad tecnológica que convierte conocimiento empresarial en plataformas de operación, control y crecimiento.",
    url: "https://www.grupoayc.co/inversiones/fasi",
    type: "website",
    siteName: "Grupo A&C",
    locale: "es_CO",
    images: [
      {
        url: "https://www.grupoayc.co/og/grupo-ayc-og-v2.jpg",
        width: 1200,
        height: 630,
        alt: "FASI Grupo A&C",
      },
    ],
  },
};

const capabilities = [
  {
    title: "Sistemas de información",
    text: "Diseño de plataformas que estructuran procesos, datos y flujos operativos para organizaciones que necesitan control y trazabilidad.",
  },
  {
    title: "Automatización empresarial",
    text: "Construcción de soluciones que reducen tareas repetitivas, conectan áreas y permiten que la información se mueva con mayor precisión.",
  },
  {
    title: "Arquitectura de datos",
    text: "Modelos de información preparados para análisis, seguimiento, reportería, control interno y toma de decisiones.",
  },
];

const platforms = [
  {
    name: "SADI ERP",
    label: "Administrativo y contable",
    description:
      "Plataforma diseñada para estructurar procesos administrativos, contables y financieros dentro de empresas que necesitan operar con mayor orden y control.",
  },
  {
    name: "SADI CDF",
    label: "Gestión deportiva",
    description:
      "Sistema orientado a la gestión administrativa de clubes de fútbol, integrando información operativa, financiera y organizacional.",
  },
  {
    name: "Sistemas internos",
    label: "Ecosistema Grupo A&C",
    description:
      "Soluciones digitales creadas para fortalecer unidades empresariales, automatizar procesos y conectar información entre áreas.",
  },
];

const architecture = [
  "Datos",
  "Procesos",
  "Automatización",
  "Control",
  "Analítica",
  "Escalabilidad",
];

const method = [
  {
    step: "01",
    title: "Comprender la operación",
    text: "Antes de desarrollar, FASI interpreta cómo funciona la empresa, qué procesos sostienen la operación y dónde existen fricciones.",
  },
  {
    step: "02",
    title: "Modelar la información",
    text: "La información se organiza en estructuras claras para que pueda ser registrada, conectada, consultada y convertida en decisiones.",
  },
  {
    step: "03",
    title: "Construir sistemas vivos",
    text: "El desarrollo no termina en una entrega técnica. Las plataformas evolucionan con la operación y se adaptan a nuevas necesidades.",
  },
];

export default function FasiPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5f2eb] text-black">
      <Navbar />

      {/* HERO */}
<section className="relative overflow-hidden bg-[#f5f2eb] px-6 pt-44 pb-28 text-black">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(201,106,27,0.16),transparent_34%),radial-gradient(circle_at_82%_12%,rgba(37,99,235,0.12),transparent_30%),linear-gradient(to_bottom,#f5f2eb,#efe8dd)]" />

  <div className="absolute inset-0 opacity-[0.16]">
    <div className="h-full w-full bg-[linear-gradient(to_right,rgba(0,0,0,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.10)_1px,transparent_1px)] bg-[size:120px_120px]" />
  </div>

  <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
    <Reveal>
      <p className="mb-8 text-xs uppercase tracking-[0.45em] text-[#c96a1b]">
        FASI · Information Systems Factory
      </p>

      <h1 className="max-w-6xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-black md:text-7xl lg:text-[6.4rem]">
        La fábrica donde el conocimiento empresarial se convierte en software.
      </h1>

      <p className="mt-10 max-w-3xl text-lg font-light leading-[1.9] text-black/62">
        FASI diseña sistemas de información para convertir procesos empresariales
        en plataformas de operación, control y crecimiento escalable.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="#plataformas"
          className="rounded-full bg-[#c96a1b] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#a95616]"
        >
          Ver plataformas
        </a>

        <a
          href="#arquitectura"
          className="rounded-full border border-black/15 px-7 py-4 text-sm font-medium text-black/70 transition-all duration-300 hover:border-[#c96a1b]/60 hover:text-black"
        >
          Ver arquitectura
        </a>
      </div>
    </Reveal>

   {/* DISPOSITIVO REALISTA */}
<Reveal delay={0.12}>
  <div className="relative mx-auto w-full max-w-[620px]">
    {/* Glow de fondo */}
    <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(201,106,27,0.18),transparent_62%)] blur-3xl" />

    {/* Dispositivo */}
    <div
      className="
        relative
        rounded-[2.2rem]
        border
        border-black/10
        bg-gradient-to-br
        from-white
        via-[#e8e1d6]
        to-[#bfb5a7]
        p-3
        shadow-[0_45px_120px_rgba(0,0,0,0.22)]
        [transform:perspective(1200px)_rotateY(-7deg)_rotateX(4deg)]
        transition-transform
        duration-700
        hover:[transform:perspective(1200px)_rotateY(-3deg)_rotateX(2deg)]
      "
    >
      {/* Marco interno */}
      <div className="overflow-hidden rounded-[1.7rem] border border-black/15 bg-[#080808] shadow-inner">
        {/* Barra superior */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#111] px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>

          <div className="hidden rounded-full border border-white/10 bg-white/[0.06] px-5 py-2 text-[0.65rem] uppercase tracking-[0.24em] text-white/35 md:block">
            fasi.systems/core
          </div>

          <div className="h-7 w-7 rounded-full border border-white/10 bg-white/[0.05]" />
        </div>

        {/* Pantalla */}
        <div className="relative min-h-[430px] overflow-hidden bg-[#0b0f14] p-6">
          {/* Luz de pantalla */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(37,99,235,0.24),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(201,106,27,0.18),transparent_32%)]" />

          {/* Grid técnico */}
          <div className="absolute inset-0 opacity-[0.08]">
            <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:54px_54px]" />
          </div>

          {/* Reflejo diagonal */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-56 rotate-12 bg-white/10 blur-2xl" />

          <div className="relative z-10">
            {/* Header dashboard */}
            <div className="mb-6 flex items-start justify-between">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-[#c96a1b]">
                  FASI OS
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">
                  Information Core
                </h3>
              </div>

              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-emerald-300">
                Online
              </span>
            </div>

            {/* Métricas */}
            <div className="mb-6 grid grid-cols-3 gap-3">
              {[
                ["24", "Procesos"],
                ["8.4k", "Registros"],
                ["99%", "Control"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-md"
                >
                  <p className="text-2xl font-semibold tracking-[-0.05em] text-white">
                    {value}
                  </p>
                  <p className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-white/35">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Mapa de sistema */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-3">
                {[
                  ["SADI ERP", "Administrativo · Contable"],
                  ["SADI CDF", "Clubes de fútbol"],
                  ["Grupo A&C", "Operación interna"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/10 bg-white/[0.055] p-4"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <p className="text-sm font-medium text-white">{title}</p>
                      <span className="h-2 w-2 rounded-full bg-[#c96a1b]" />
                    </div>

                    <p className="text-xs font-light leading-[1.6] text-white/38">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-5">
                <p className="mb-5 text-[0.65rem] uppercase tracking-[0.24em] text-white/35">
                  System Flow
                </p>

                <div className="space-y-4">
                  {[
                    ["Datos", "82%"],
                    ["Procesos", "64%"],
                    ["Automatización", "74%"],
                    ["Control", "91%"],
                  ].map(([label, width]) => (
                    <div key={label}>
                      <div className="mb-2 flex justify-between text-xs">
                        <span className="text-white/55">{label}</span>
                        <span className="text-white/30">{width}</span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#c96a1b] to-[#2563eb]"
                          style={{ width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-[#c96a1b]/20 bg-[#c96a1b]/10 p-4">
                  <p className="text-xs font-light leading-[1.7] text-white/60">
                    La operación se convierte en datos, los datos en control y
                    el control en decisiones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Base del dispositivo */}
      <div className="mx-auto h-5 w-[78%] rounded-b-[2rem] bg-gradient-to-b from-[#c9c0b5] to-[#8f8375] shadow-[0_25px_60px_rgba(0,0,0,0.18)]" />

      {/* Sombra inferior */}
      <div className="mx-auto mt-2 h-8 w-[70%] rounded-full bg-black/20 blur-2xl" />
    </div>
  </div>
</Reveal>
  </div>
</section>

     {/* QUÉ HACE */}
<section className="relative overflow-hidden bg-[#f5f2eb] px-6 py-28 text-black">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(201,106,27,0.10),transparent_32%),radial-gradient(circle_at_82%_70%,rgba(37,99,235,0.08),transparent_34%)]" />

  <div className="absolute inset-0 opacity-[0.10]">
    <div className="h-full w-full bg-[linear-gradient(to_right,rgba(0,0,0,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.10)_1px,transparent_1px)] bg-[size:110px_110px]" />
  </div>

  <div className="relative z-10 mx-auto max-w-7xl">
    <Reveal>
      <div className="mb-16 max-w-4xl">
        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
          Qué hace FASI
        </p>

        <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
          Convierte procesos dispersos en sistemas operables.
        </h2>

        <p className="mt-8 max-w-3xl text-lg font-light leading-[1.9] text-black/58">
          FASI no desarrolla software como una capa aislada. Construye
          soluciones desde la comprensión real de la operación contable,
          administrativa, financiera y empresarial.
        </p>
      </div>
    </Reveal>

    <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
      {capabilities.map((item, index) => {
        const visual = [
          {
            eyebrow: "Information System",
            metric: "96%",
            label: "Trazabilidad",
            rows: ["Clientes", "Documentos", "Operación"],
            bars: ["82%", "64%", "91%"],
          },
          {
            eyebrow: "Automation Flow",
            metric: "24",
            label: "Procesos activos",
            rows: ["Validación", "Registro", "Reporte"],
            bars: ["72%", "88%", "58%"],
          },
          {
            eyebrow: "Data Architecture",
            metric: "8.4k",
            label: "Registros conectados",
            rows: ["Datos", "Reglas", "Decisiones"],
            bars: ["78%", "69%", "93%"],
          },
        ][index];

        return (
          <Reveal key={item.title} delay={index * 0.06}>
            <div className="group relative h-full overflow-hidden rounded-[2.4rem] border border-black/10 bg-white/82 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_120px_rgba(0,0,0,0.12)]">
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#c96a1b]/10 blur-3xl transition-all duration-700 group-hover:bg-[#2563eb]/10" />

              {/* Mini pantalla realista */}
              <div className="relative mb-8 overflow-hidden rounded-[1.7rem] border border-black/10 bg-[#fbfaf7] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_18px_60px_rgba(0,0,0,0.08)]">
                <div className="flex items-center justify-between border-b border-black/10 bg-gradient-to-b from-white to-[#f2eee7] px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#c96a1b]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-black/18" />
                    <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                  </div>

                  <p className="text-[0.6rem] uppercase tracking-[0.22em] text-black/35">
                    Module 0{index + 1}
                  </p>
                </div>

                <div className="relative min-h-[230px] bg-[#f8f5ef] p-5">
                  <div className="absolute inset-0 opacity-[0.14]">
                    <div className="h-full w-full bg-[linear-gradient(to_right,rgba(0,0,0,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.10)_1px,transparent_1px)] bg-[size:42px_42px]" />
                  </div>

                  <div className="relative z-10">
                    <div className="mb-5 flex items-start justify-between">
                      <div>
                        <p className="text-[0.62rem] uppercase tracking-[0.25em] text-[#c96a1b]">
                          {visual.eyebrow}
                        </p>

                        <p className="mt-2 text-3xl font-semibold tracking-[-0.055em] text-black">
                          {visual.metric}
                        </p>

                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-black/35">
                          {visual.label}
                        </p>
                      </div>

                      <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-emerald-700">
                        Live
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      {visual.rows.map((row, rowIndex) => (
                        <div
                          key={row}
                          className="rounded-xl border border-black/10 bg-white/85 p-3 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                        >
                          <div className="mb-2 flex items-center justify-between">
                            <p className="text-xs font-medium text-black/65">
                              {row}
                            </p>

                            <p className="text-[0.65rem] text-black/35">
                              {visual.bars[rowIndex]}
                            </p>
                          </div>

                          <div className="h-1.5 overflow-hidden rounded-full bg-black/8">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-[#c96a1b] to-[#2563eb]"
                              style={{ width: visual.bars[rowIndex] }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenido original */}
              <div className="px-3 pb-3">
                <div className="mb-8 h-px w-16 bg-[#c96a1b]/60" />

                <h3 className="text-3xl font-semibold leading-[1.05] tracking-[-0.045em]">
                  {item.title}
                </h3>

                <p className="mt-7 text-sm font-light leading-[1.85] text-black/55">
                  {item.text}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  </div>
</section>

      {/* PLATAFORMAS */}
<section
  id="plataformas"
  className="relative overflow-hidden bg-[#fbfaf7] px-6 py-32 text-black"
>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(201,106,27,0.10),transparent_34%),radial-gradient(circle_at_82%_70%,rgba(37,99,235,0.08),transparent_36%)]" />

  <div className="absolute inset-0 opacity-[0.08]">
    <div className="h-full w-full bg-[linear-gradient(to_right,rgba(0,0,0,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.10)_1px,transparent_1px)] bg-[size:120px_120px]" />
  </div>

  <div className="relative z-10 mx-auto max-w-7xl">
    <Reveal>
      <div className="mb-20 max-w-4xl">
        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
          Plataformas vivas
        </p>

        <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
          Un ecosistema de software construido desde la operación real.
        </h2>

        <p className="mt-8 max-w-3xl text-lg font-light leading-[1.9] text-black/58">
          Las plataformas de FASI no nacen como productos aislados. Nacen de
          procesos empresariales concretos, se conectan con información crítica
          y evolucionan como infraestructura digital del ecosistema.
        </p>
      </div>
    </Reveal>

    <Reveal delay={0.1}>
      <div className="relative overflow-hidden rounded-[3.2rem] border border-black/10 bg-[#f5f2eb]/90 p-5 shadow-[0_45px_140px_rgba(0,0,0,0.09)] backdrop-blur-xl md:p-10">
        {/* Brillos internos */}
        <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#c96a1b]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-[#2563eb]/10 blur-3xl" />

        {/* Marco superior tipo plataforma */}
        <div className="relative z-10 mb-10 flex flex-col gap-5 border-b border-black/10 pb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-black/35">
              FASI Platform Map
            </p>

            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-black md:text-4xl">
              Sistemas, datos y capacidades conectadas.
            </h3>
          </div>

          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-black/10 bg-white/75 px-5 py-3 shadow-[0_15px_45px_rgba(0,0,0,0.05)]">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs uppercase tracking-[0.24em] text-black/45">
              Ecosistema activo
            </span>
          </div>
        </div>

        {/* MAPA PRINCIPAL */}
        <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.46fr_1fr] lg:items-center">
          {/* Líneas de conexión desktop */}
          <div className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-full bg-gradient-to-r from-transparent via-black/15 to-transparent lg:block" />
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-black/10 to-transparent lg:block" />

          {/* IZQUIERDA - SISTEMAS */}
          <div className="relative space-y-5">
            <p className="mb-8 text-xs uppercase tracking-[0.3em] text-black/38">
              Sistemas en operación
            </p>

            {[
              {
                name: "SADI ERP",
                label: "Administrativo · Contable · Financiero",
                description:
                  "Estructura procesos empresariales para operar con mayor orden, trazabilidad y control.",
                color: "#c96a1b",
                badge: "Core Product",
              },
              {
                name: "SADI CDF",
                label: "Gestión administrativa de clubes de fútbol",
                description:
                  "Integra información operativa, financiera y organizacional para instituciones deportivas.",
                color: "#2563eb",
                badge: "Vertical System",
              },
              {
                name: "Sistemas internos",
                label: "Procesos del ecosistema Grupo A&C",
                description:
                  "Automatiza flujos internos, conecta unidades y fortalece la operación del grupo.",
                color: "#111111",
                badge: "Internal Ops",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/85 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_100px_rgba(0,0,0,0.10)]"
              >
                <div
                  className="absolute left-0 top-0 h-full w-1"
                  style={{ backgroundColor: item.color }}
                />

                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="rounded-full border border-black/10 bg-[#f5f2eb] px-3 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-black/42">
                    {item.badge}
                  </span>

                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>

                <p className="text-2xl font-semibold tracking-[-0.045em] text-black">
                  {item.name}
                </p>

                <p className="mt-3 text-sm font-medium text-black/48">
                  {item.label}
                </p>

                <p className="mt-5 text-sm font-light leading-[1.75] text-black/52">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* CENTRO - NÚCLEO FASI */}
<div className="relative flex min-h-[320px] items-center justify-center lg:min-h-[360px]">
  {/* Órbita exterior controlada */}
  <div className="absolute h-[260px] w-[260px] rounded-full border border-black/8 bg-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]" />
  <div className="absolute h-[205px] w-[205px] rounded-full border border-[#c96a1b]/20 bg-[#c96a1b]/5" />
  <div className="absolute h-[145px] w-[145px] rounded-full border border-[#2563eb]/20 bg-[#2563eb]/5" />

  {/* Pulso más sutil */}
  <div className="absolute h-[260px] w-[260px] rounded-full border border-black/5 opacity-70" />

  {/* Núcleo realista */}
  <div className="relative z-10 flex h-[138px] w-[138px] flex-col items-center justify-center rounded-full border border-white/40 bg-[radial-gradient(circle_at_30%_20%,#3a332b,#111_48%,#050505_100%)] text-center text-white shadow-[0_28px_80px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-18px_40px_rgba(0,0,0,0.55)]">
    {/* Brillo superior */}
    <div className="absolute left-5 top-4 h-10 w-16 rounded-full bg-white/12 blur-xl" />

    {/* Aro interior */}
    <div className="absolute inset-2 rounded-full border border-white/10" />
    <div className="absolute inset-5 rounded-full border border-[#c96a1b]/20" />

    <p className="relative text-[0.62rem] uppercase tracking-[0.26em] text-[#c96a1b]">
      Core
    </p>

    <p className="relative mt-1 text-3xl font-semibold tracking-[-0.07em]">
      FASI
    </p>

    <p className="relative mt-2 max-w-[88px] text-[0.52rem] uppercase leading-[1.45] tracking-[0.16em] text-white/38">
      System Factory
    </p>
  </div>

  {/* Micro nodos más cercanos y elegantes */}
  <span className="absolute left-[18%] top-[28%] h-2.5 w-2.5 rounded-full bg-[#c96a1b] shadow-[0_0_22px_rgba(201,106,27,0.8)]" />
  <span className="absolute right-[20%] top-[33%] h-2.5 w-2.5 rounded-full bg-[#2563eb] shadow-[0_0_22px_rgba(37,99,235,0.75)]" />
  <span className="absolute bottom-[26%] left-[30%] h-2 w-2 rounded-full bg-black/28" />
  <span className="absolute bottom-[28%] right-[30%] h-2 w-2 rounded-full bg-[#c96a1b]/60" />
</div>

          {/* DERECHA - CAPACIDADES */}
          <div className="relative space-y-5">
            <p className="mb-8 text-xs uppercase tracking-[0.3em] text-black/38">
              Capacidades que produce
            </p>

            {[
              {
                title: "Operación digital",
                text: "Procesos convertidos en flujos ejecutables.",
              },
              {
                title: "Trazabilidad de información",
                text: "Datos conectados desde el origen hasta la decisión.",
              },
              {
                title: "Automatización de procesos",
                text: "Menos fricción operativa y mayor consistencia.",
              },
              {
                title: "Control administrativo",
                text: "Seguimiento, validación y gobierno interno.",
              },
              {
                title: "Escalabilidad tecnológica",
                text: "Sistemas preparados para crecer con la operación.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="group flex gap-5 rounded-[1.7rem] border border-black/10 bg-white/65 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.045)] transition-all duration-500 hover:bg-white hover:shadow-[0_28px_90px_rgba(0,0,0,0.08)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-xs font-medium text-white">
                  {index + 1}
                </span>

                <div>
                  <p className="text-xl font-semibold tracking-[-0.04em] text-black/82">
                    {item.title}
                  </p>

                  <p className="mt-2 text-sm font-light leading-[1.65] text-black/48">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CAPAS INFERIORES */}
        <div className="relative z-10 mt-14 grid grid-cols-1 gap-4 border-t border-black/10 pt-8 md:grid-cols-4">
          {[
            ["Data", "Información estructurada", "01"],
            ["Logic", "Reglas del negocio", "02"],
            ["Action", "Procesos ejecutables", "03"],
            ["Security", "Control y gobierno", "04"],
          ].map(([title, text, number]) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-[1.7rem] border border-black/10 bg-white/70 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.045)] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_28px_90px_rgba(0,0,0,0.08)]"
            >
              <p className="mb-8 text-[0.65rem] uppercase tracking-[0.25em] text-black/30">
                Layer {number}
              </p>

              <p className="text-xs uppercase tracking-[0.28em] text-[#c96a1b]">
                {title}
              </p>

              <p className="mt-3 text-sm font-light leading-[1.7] text-black/55">
                {text}
              </p>

              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#c96a1b]/8 blur-2xl transition-all duration-500 group-hover:bg-[#2563eb]/10" />
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  </div>
</section>
      {/* ARQUITECTURA */}
      <section
        id="arquitectura"
        className="relative overflow-hidden bg-[#0a0a0a] px-6 py-28 text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(201,106,27,0.16),transparent_34%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
                  Arquitectura de información
                </p>

                <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
                  La operación convertida en capas de sistema.
                </h2>
              </div>

              <p className="max-w-2xl text-lg font-light leading-[1.9] text-white/52">
                Un sistema de información no es solo una interfaz. Es una
                arquitectura donde datos, procesos, reglas, automatizaciones y
                decisiones deben funcionar como una sola unidad.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
            {architecture.map((item, index) => (
              <Reveal key={item} delay={index * 0.04}>
                <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-6 text-center">
                  <p className="mb-4 text-xs uppercase tracking-[0.22em] text-white/30">
                    Layer {index + 1}
                  </p>

                  <h3 className="text-xl font-semibold tracking-[-0.035em]">
                    {item}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTODO */}
      <section className="bg-[#f5f2eb] px-6 py-28 text-black">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-16 max-w-4xl">
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
                Método FASI
              </p>

              <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
                Primero entender. Luego modelar. Después construir.
              </h2>
            </div>
          </Reveal>

          <div className="space-y-6">
            {method.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.06}>
                <div className="grid grid-cols-1 gap-8 rounded-[2.4rem] border border-black/10 bg-white/80 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.06)] md:grid-cols-[0.25fr_0.75fr] md:items-center">
                  <div>
                    <p className="text-5xl font-semibold tracking-[-0.06em] text-[#c96a1b]">
                      {item.step}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-3xl font-semibold tracking-[-0.045em]">
                      {item.title}
                    </h3>

                    <p className="mt-5 max-w-3xl text-sm font-light leading-[1.9] text-black/55">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black px-6 py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.045] p-10 shadow-[0_40px_140px_rgba(0,0,0,0.45)] md:p-14">
              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
                Tecnología con criterio empresarial
              </p>

              <h2 className="max-w-5xl text-4xl font-semibold leading-[1.05] tracking-[-0.055em] md:text-6xl">
                FASI no construye software para decorar procesos. Construye
                sistemas para que las empresas operen mejor.
              </h2>

              <p className="mt-8 max-w-3xl text-base font-light leading-[1.9] text-white/55">
                Desde el ecosistema Grupo A&C, FASI convierte experiencia
                contable, tributaria, financiera y administrativa en
                infraestructura digital.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/contacto"
                  className="rounded-full bg-[#c96a1b] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#a95616]"
                >
                  Construir una solución
                </a>

                <a
                  href="/ecosistema"
                  className="rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white/70 transition-all duration-300 hover:border-[#c96a1b]/60 hover:text-white"
                >
                  Ver ecosistema
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}