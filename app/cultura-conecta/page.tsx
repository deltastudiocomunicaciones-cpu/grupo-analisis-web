import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import CulturaConectaLeadForm from "@/components/forms/CulturaConectaLeadForm";

const siteUrl = "https://www.grupoayc.co";
const ogImage = `${siteUrl}/brands/cultura-conecta-og-v2.png`;

export const metadata: Metadata = {
  title: "Cultura Conecta | Liderazgo y evolución organizacional",
  description:
    "Unidad de Grupo A&C para transformar liderazgo, cultura, estrategia y talento mediante consultoría, formación ejecutiva y espacios empresariales.",
  alternates: {
    canonical: "/cultura-conecta",
  },
  openGraph: {
    title: "Cultura Conecta | Inteligencia colectiva que transforma",
    description:
      "Liderazgo, cultura y evolución para organizaciones que quieren convertir su talento en resultados sostenibles.",
    url: `${siteUrl}/cultura-conecta`,
    siteName: "Grupo Análisis & Consultorías",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1350,
        height: 1165,
        type: "image/png",
        alt: "Isotipo 3D de Cultura Conecta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cultura Conecta | Inteligencia colectiva que transforma",
    description:
      "Conectamos talento, conocimiento y dirección para construir organizaciones de alto desempeño.",
    images: [ogImage],
  },
};

const businessLines = [
  {
    number: "01",
    eyebrow: "Conecta Empresas",
    title: "Transformación que comienza por comprender el sistema.",
    description:
      "Diagnóstico, liderazgo, cultura, alineación y acompañamiento para organizaciones que necesitan convertir conocimiento en capacidad de ejecución.",
    href: "#empresas",
    cta: "Explorar transformación",
  },
  {
    number: "02",
    eyebrow: "Conecta Academia",
    title: "Formación que llega a las decisiones y a la forma de trabajar.",
    description:
      "Talleres, capacitaciones, conversatorios y programas certificados para líderes y equipos que quieren aprender con propósito empresarial.",
    href: "#academia",
    cta: "Explorar formación",
  },
  {
    number: "03",
    eyebrow: "Espacios Cultura Conecta",
    title: "Entornos diseñados para pensar, crear y avanzar juntos.",
    description:
      "Auditorio, sala de juntas y estudio audiovisual con infraestructura, producción y experiencia Miiroku Café.",
    href: "#espacios",
    cta: "Explorar espacios",
  },
];

const challenges = [
  {
    number: "01",
    title: "Liderazgo ejecutivo",
    text: "Desarrollar líderes capaces de leer el contexto, movilizar equipos y sostener decisiones exigentes.",
  },
  {
    number: "02",
    title: "Coordinación entre áreas",
    text: "Reducir silos y construir acuerdos para que la información, las decisiones y la ejecución permanezcan conectadas.",
  },
  {
    number: "03",
    title: "Cultura organizacional",
    text: "Convertir valores y propósito en comportamientos visibles, confianza y sentido de pertenencia.",
  },
  {
    number: "04",
    title: "Estrategia y ejecución",
    text: "Transformar prioridades empresariales en conversaciones, responsabilidades y planes que realmente avanzan.",
  },
  {
    number: "05",
    title: "Equipos de alto desempeño",
    text: "Elevar integración, autonomía y responsabilidad compartida sin perder humanidad ni dirección.",
  },
];

const journey = [
  {
    step: "01",
    title: "Conversación estratégica",
    text: "Un primer encuentro para comprender el contexto de la organización y reconocer si Cultura Conecta puede aportar valor.",
    note: "Orientación inicial",
  },
  {
    step: "02",
    title: "Diagnóstico Conecta",
    text: "Una lectura estructurada y pagada del sistema para identificar fortalezas, tensiones y prioridades de intervención.",
    note: "Servicio especializado",
  },
  {
    step: "03",
    title: "Ruta de evolución",
    text: "Diseñamos objetivos, experiencias, acuerdos y acciones a la medida de los hallazgos y necesidades de la empresa.",
    note: "Propuesta a la medida",
  },
  {
    step: "04",
    title: "Acompañamiento",
    text: "Seguimos la evolución, consolidamos aprendizajes y fortalecemos capacidades internas para sostener los resultados.",
    note: "Continuidad y medición",
  },
];

const academyFormats = [
  "Talleres empresariales",
  "Capacitaciones para equipos",
  "Conversatorios ejecutivos",
  "Programas de formación",
  "Certificados Cultura Conecta",
  "Diplomados con aliados académicos",
];

const spaces = [
  {
    name: "Auditorio",
    capacity: "30 personas",
    description:
      "Un espacio diseñado para conferencias, diplomados, conversatorios y procesos de formación empresarial.",
    image: "/fotos/cultura-conecta-auditorio.webp",
  },
  {
    name: "Sala Audiovisual",
    capacity: "6 personas",
    description:
      "Un entorno preparado para podcast, entrevistas, producción de contenidos y conversaciones estratégicas.",
    image: "/fotos/cultura-conecta-podcast.png",
  },
  {
    name: "Sala de Juntas",
    capacity: "12 personas",
    description:
      "Un espacio reservado para reuniones directivas, planeación, talleres y trabajo colaborativo.",
    image: "/fotos/cultura-conecta-sala-de-juntas.png",
  },
];

const infrastructure = [
  "Pantalla y proyección",
  "Sonido y micrófonos",
  "Internet empresarial",
  "Aire acondicionado",
  "Mobiliario flexible",
  "Grabación y transmisión",
  "Personal de apoyo",
  "Experiencia Miiroku Café",
];

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

export default function CulturaConectaPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f5ef] text-[#082947]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[92svh] overflow-hidden bg-[#071b2e] text-white">
        <Image
          src="/fotos/cultura-hero.png"
          alt="Liderazgo y transformación organizacional en Cultura Conecta"
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
          quality={78}
          className="object-cover object-[center_10%] saturate-[1.06] contrast-[1.03]"
        />

        <div className="absolute inset-0 bg-[#06192c]/58" />

        <div className="pointer-events-none absolute right-[12%] top-[35%] hidden aspect-square w-[28vw] max-w-[350px] lg:block">
          <div className="absolute inset-[12%] rounded-full bg-[#9ac222]/15 blur-[90px]" />
          <Image
            src="/brands/cultura-conecta-isotype-3d.webp"
            alt=""
            fill
            sizes="28vw"
            className="conecta-float object-contain opacity-100 drop-shadow-[0_28px_80px_rgba(0,0,0,0.35)]"
          />
        </div>

        <Container className="relative z-10 flex min-h-[92svh] items-end pb-16 pt-36 md:items-center md:pb-20 md:pt-44">
          <div className="max-w-[940px]">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-[#a0c82b]" />
              <p className="text-[10px] font-medium uppercase tracking-[0.34em] text-[#b7d65e] sm:text-xs">
                Unidad estratégica · Grupo A&amp;C
              </p>
            </div>

            <h1 className="max-w-[880px] text-[3.15rem] font-semibold leading-[0.88] tracking-[-0.065em] sm:text-[4.4rem] md:text-[5.6rem] lg:text-[6.6rem] xl:text-[7.45rem]">
              Cultura que
              <br />
              conecta.
              <span className="block text-[#a0c82b]">
                Liderazgo que transforma.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base font-light leading-[1.8] text-white/72 md:text-lg">
              Ayudamos a líderes y organizaciones a conectar estrategia,
              cultura y talento para convertir su conocimiento en resultados.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#solicitud"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#a0c82b] px-7 py-4 text-sm font-medium text-[#082947] transition-transform duration-300 hover:scale-[1.025]"
              >
                Conversemos sobre tu empresa
                <ArrowUpRight />
              </a>

              <a
                href="#soluciones"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 text-sm text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/10"
              >
                Explorar soluciones
              </a>
            </div>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-[#041422]/55 backdrop-blur-md">
          <Container className="grid grid-cols-3 divide-x divide-white/10 py-5">
            {["Liderazgo", "Cultura", "Evolución"].map((item) => (
              <p
                key={item}
                className="text-center text-[9px] uppercase tracking-[0.25em] text-white/54 sm:text-[11px]"
              >
                {item}
              </p>
            ))}
          </Container>
        </div>
      </section>

      {/* TESIS */}
      <section className="relative px-6 py-24 md:py-36">
        <div className="absolute right-[-12rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-[#a0c82b]/10 blur-[120px]" />
        <Container className="relative">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <p className="text-xs uppercase tracking-[0.32em] text-[#7c9f18]">
                Inteligencia colectiva
              </p>

              <div>
                <h2 className="max-w-5xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl lg:text-7xl">
                  El siguiente nivel de una empresa depende de qué tan bien logra
                  conectar lo que sabe.
                </h2>

                <div className="mt-10 grid gap-8 border-t border-[#082947]/15 pt-8 md:grid-cols-2">
                  <p className="text-base font-light leading-[1.85] text-[#082947]/64">
                    Cultura Conecta es una plataforma de Grupo A&amp;C para reunir
                    pensamiento, expertos, formación y espacios alrededor de los
                    desafíos reales de cada organización.
                  </p>
                  <p className="text-base font-light leading-[1.85] text-[#082947]/64">
                    No imponemos fórmulas. Leemos el sistema, reconocemos sus
                    fortalezas y construimos experiencias que conectan liderazgo,
                    equipos y resultados.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* LÍNEAS DE NEGOCIO */}
      <section id="soluciones" className="bg-[#071d32] px-6 py-24 text-white md:py-32">
        <Container>
          <Reveal>
            <div className="mb-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#a0c82b]">
                  Tres formas de conectar
                </p>
                <h2 className="text-4xl font-semibold leading-[0.96] tracking-[-0.055em] md:text-6xl">
                  Una plataforma para transformar, aprender y encontrarse.
                </h2>
              </div>
              <p className="max-w-xl text-base font-light leading-[1.85] text-white/58 lg:justify-self-end">
                Cada empresa puede comenzar por una conversación, una experiencia
                formativa o un encuentro. Nosotros conectamos la necesidad con el
                formato y el experto adecuados.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 lg:grid-cols-3">
            {businessLines.map((line, index) => (
              <Reveal key={line.eyebrow} delay={index * 0.07}>
                <article className="group flex min-h-[470px] flex-col bg-[#071d32] p-8 transition-colors duration-500 hover:bg-[#0b2945] md:p-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-[0.28em] text-[#a0c82b]">
                      {line.number}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[#a0c82b] shadow-[0_0_0_8px_rgba(160,200,43,0.08)]" />
                  </div>

                  <div className="mt-20 flex flex-1 flex-col">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-white/38">
                      {line.eyebrow}
                    </p>
                    <h3 className="mt-5 text-3xl font-semibold leading-[1.02] tracking-[-0.045em]">
                      {line.title}
                    </h3>
                    <p className="mt-6 flex-1 text-sm font-light leading-[1.85] text-white/58">
                      {line.description}
                    </p>
                    <a
                      href={line.href}
                      className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[#b7d65e]"
                    >
                      {line.cta}
                      <span>→</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* DESAFÍOS */}
      <section id="empresas" className="px-6 py-24 md:py-36">
        <Container>
          <Reveal>
            <div className="mb-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#7c9f18]">
                  Conecta Empresas
                </p>
                <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl">
                  ¿Qué necesita movilizar hoy tu organización?
                </h2>
              </div>
              <p className="max-w-xl text-base font-light leading-[1.85] text-[#082947]/62 lg:justify-self-end">
                Trabajamos sobre cinco capacidades que determinan cómo una empresa
                piensa, se coordina y convierte su estrategia en resultados.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {challenges.map((challenge, index) => (
              <Reveal key={challenge.title} delay={index * 0.05}>
                <a
                  href="#solicitud"
                  className="group flex min-h-[330px] flex-col rounded-[2rem] border border-[#082947]/12 bg-white/65 p-7 shadow-[0_24px_70px_rgba(8,41,71,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-[#a0c82b]/55 hover:bg-white"
                >
                  <span className="text-xs tracking-[0.26em] text-[#7c9f18]">
                    {challenge.number}
                  </span>
                  <div className="mt-auto">
                    <h3 className="text-2xl font-semibold leading-[1.02] tracking-[-0.045em]">
                      {challenge.title}
                    </h3>
                    <p className="mt-5 text-sm font-light leading-[1.75] text-[#082947]/58">
                      {challenge.text}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ESCALERA COMERCIAL */}
      <section className="bg-[#e9ecdf] px-6 py-24 md:py-32">
        <Container>
          <Reveal>
            <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#7c9f18]">
                  Cómo trabajamos
                </p>
                <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl">
                  Comprender antes de intervenir.
                </h2>
                <p className="mt-7 max-w-md text-base font-light leading-[1.85] text-[#082947]/62">
                  Una conversación puede abrir la puerta. El diagnóstico convierte
                  esa conversación en una ruta empresarial con sentido.
                </p>
              </div>

              <div className="border-t border-[#082947]/18">
                {journey.map((item) => (
                  <article
                    key={item.step}
                    className="grid gap-5 border-b border-[#082947]/18 py-8 sm:grid-cols-[76px_1fr] md:py-10"
                  >
                    <span className="text-xs tracking-[0.24em] text-[#7c9f18]">
                      {item.step}
                    </span>
                    <div>
                      <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
                        <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                          {item.title}
                        </h3>
                        <span className="w-fit rounded-full border border-[#082947]/14 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-[#082947]/48">
                          {item.note}
                        </span>
                      </div>
                      <p className="mt-4 max-w-2xl text-sm font-light leading-[1.8] text-[#082947]/60">
                        {item.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ACADEMIA */}
      <section id="academia" className="bg-[#071d32] px-6 py-24 text-white md:py-36">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-20">
            <Reveal>
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#a0c82b]">
                  Conecta Academia
                </p>
                <h2 className="max-w-4xl text-4xl font-semibold leading-[0.96] tracking-[-0.055em] md:text-6xl">
                  Formación que no termina en una presentación.
                </h2>
                <p className="mt-8 max-w-2xl text-base font-light leading-[1.85] text-white/60 md:text-lg">
                  Diseñamos experiencias para que el conocimiento llegue a las
                  decisiones, los equipos y la forma de trabajar. Los programas
                  propios pueden otorgar certificado Cultura Conecta; los
                  diplomados se desarrollarán con instituciones aliadas.
                </p>
                <a
                  href="#solicitud"
                  className="mt-9 inline-flex items-center gap-3 rounded-full border border-white/18 px-6 py-3 text-sm text-white transition-colors hover:border-[#a0c82b]/70 hover:bg-[#a0c82b]/10"
                >
                  Diseñar un programa
                  <ArrowUpRight />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.045]">
                {academyFormats.map((format, index) => (
                  <div
                    key={format}
                    className="flex items-center gap-5 border-b border-white/10 px-7 py-6 last:border-b-0 md:px-9"
                  >
                    <span className="text-[10px] tracking-[0.22em] text-[#a0c82b]">
                      0{index + 1}
                    </span>
                    <p className="text-base text-white/78">{format}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ESPACIOS */}
      <section id="espacios" className="bg-[#071d32] px-4 pb-4 text-white sm:px-6 sm:pb-6">
        <div className="relative mx-auto min-h-[720px] max-w-[1600px] overflow-hidden rounded-[2rem] md:min-h-[820px]">
          <Image
            src="/fotos/cultura-conecta-hero.webp"
            alt="Espacios Cultura Conecta"
            fill
            sizes="(max-width: 1600px) 100vw, 1600px"
            quality={78}
            className="object-cover object-[58%_center] saturate-[1.06] contrast-[1.03] sm:object-[55%_center] md:object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#041422]/95 via-[#041422]/20 to-[#041422]/10" />

          <div className="absolute inset-x-0 bottom-0 p-7 sm:p-12 md:p-16">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div>
                  <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#b7d65e]">
                    Espacios Cultura Conecta
                  </p>
                  <h2 className="max-w-4xl text-4xl font-semibold leading-[0.96] tracking-[-0.055em] sm:text-5xl md:text-7xl">
                    Un lugar para pensar juntos y avanzar distinto.
                  </h2>
                </div>
                <div className="lg:justify-self-end">
                  <p className="max-w-xl text-base font-light leading-[1.8] text-white/68">
                    Encuentros empresariales, formación, juntas y producción
                    audiovisual con tecnología, hospitalidad y una experiencia
                    diseñada alrededor del propósito de cada organización.
                  </p>
                  <a
                    href="#solicitud"
                    className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/25 px-6 py-3 text-sm text-white transition-colors hover:bg-white/10"
                  >
                    Proyectar un encuentro
                    <ArrowUpRight />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ESPACIOS: CAPACIDADES */}
      <section className="px-6 py-24 md:py-32">
        <Container>
          <Reveal>
            <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#7c9f18]">
                  Capacidades
                </p>
                <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl">
                  Cada conversación necesita su propio entorno.
                </h2>
              </div>
              <p className="max-w-xl text-base font-light leading-[1.85] text-[#082947]/62 lg:justify-self-end">
                La agenda se encuentra en etapa anticipada. Cada solicitud se
                valida antes de confirmar disponibilidad y construir la
                cotización.
              </p>
            </div>
          </Reveal>

          <div className="grid items-stretch gap-5 lg:grid-cols-3">
  {spaces.map((space, index) => (
    <Reveal key={space.name} delay={index * 0.05}>
      <article
        className="
          group
          relative
          flex
          min-h-[390px]
          h-full
          flex-col
          justify-between
          overflow-hidden
          rounded-[2rem]
          border
          border-white/20
          p-7
          text-white
          shadow-[0_24px_70px_rgba(8,41,71,0.14)]
          md:min-h-[420px]
          md:p-8
        "
      >
        {/* FOTOGRAFÍA DEL ESPACIO */}
        <Image
          src={space.image}
          alt={space.name}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="
            object-cover
            transition-transform
            duration-1000
            group-hover:scale-105
          "
        />

        {/* TRANSPARENCIA SOBRE LA FOTOGRAFÍA */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-b
            from-[#082947]/30
            via-[#082947]/55
            to-[#061b2e]/95
          "
        />

        {/* RESPLANDOR */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#a0c82b]/10 via-transparent to-white/5" />

        {/* BORDE INTERIOR */}
        <div className="pointer-events-none absolute inset-[1px] rounded-[1.95rem] border border-white/20" />

        {/* PARTE SUPERIOR */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="text-[10px] tracking-[0.26em] text-[#c4e851]">
            0{index + 1}
          </span>

          <span
            className="
              rounded-full
              border
              border-white/20
              bg-black/20
              px-3
              py-1.5
              text-[9px]
              uppercase
              tracking-[0.16em]
              text-white/80
              backdrop-blur-xl
            "
          >
            {space.capacity}
          </span>
        </div>

        {/* CONTENIDO INFERIOR */}
        <div className="relative z-10 mt-auto pt-24">
          <div className="mb-6 h-px w-12 bg-[#a0c82b]" />

          <h3
            className={`
              max-w-[280px]
              font-semibold
              leading-[0.95]
              tracking-[-0.045em]
              ${
                space.name === "Sala Audiovisual"
                  ? "text-[1.8rem] md:text-[2rem]"
                  : "text-3xl md:text-[2.15rem]"
              }
            `}
          >
            {space.name}
          </h3>

          <p className="mt-5 max-w-sm text-sm font-light leading-[1.75] text-white/72">
            {space.description}
          </p>

          <div className="mt-7 flex items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-white/55">
            Conocer el espacio
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </article>
    </Reveal>
  ))}
</div>

          <Reveal>
            <div className="mt-8 rounded-[2rem] border border-[#082947]/12 bg-[#e9ecdf] p-7 md:p-9">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {infrastructure.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#a0c82b]" />
                    <p className="text-sm text-[#082947]/65">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-7 border-t border-[#082947]/12 pt-6 text-sm font-light leading-[1.8] text-[#082947]/58">
                La experiencia Miiroku Café puede integrarse a cada encuentro. El
                servicio y el consumo se incluyen en la cotización según el
                formato y el número de asistentes.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* AGENDA */}
      <section className="bg-[#a0c82b] px-6 py-24 text-[#082947] md:py-32">
        <Container>
          <Reveal>
            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em]">
                  Agenda Conecta
                </p>
                <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl">
                  La próxima conversación ya se está preparando.
                </h2>
              </div>

              <div className="rounded-[2rem] border border-[#082947]/15 bg-[#f4f5ef]/45 p-8 md:p-10">
                <p className="text-lg leading-[1.75] text-[#082947]/76">
                  Publicaremos encuentros empresariales privados y una agenda
                  abierta de talleres, conversatorios y experiencias junto a
                  profesionales y marcas aliadas.
                </p>
                <a
                  href="#solicitud"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#082947] px-6 py-3 text-sm text-white transition-transform hover:scale-[1.02]"
                >
                  Recibir la próxima agenda
                  <ArrowUpRight />
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* EXPERTO */}
      <section className="bg-[#f4f5ef] px-6 py-24 md:py-36">
        <Container>
          <Reveal>
            <div className="mb-14 max-w-4xl">
              <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#7c9f18]">
                Red de expertos
              </p>
              <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl">
                El desafío define al experto.
              </h2>
              <p className="mt-7 max-w-2xl text-base font-light leading-[1.85] text-[#082947]/62">
                Cultura Conecta articula especialistas según la necesidad de cada
                organización. La marca dirige la experiencia; el conocimiento se
                reúne alrededor del reto empresarial.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <article className="grid overflow-hidden rounded-[2.5rem] border border-[#082947]/12 bg-[#071d32] text-white shadow-[0_35px_100px_rgba(8,41,71,0.16)] lg:grid-cols-[0.82fr_1.18fr]">
              <div className="relative min-h-[480px] lg:min-h-[620px]">
                <Image
                  src="/fotos/Giovanni-hero.png"
                  alt="Giovanni López, experto invitado de Cultura Conecta"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-[center_15%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071d32]/55 via-transparent to-transparent" />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                <p className="text-xs uppercase tracking-[0.3em] text-[#b7d65e]">
                  Primer experto invitado
                </p>
                <h3 className="mt-6 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
                  Giovanni López
                </h3>
                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/42">
                  Neuroliderazgo · Cultura · Transformación organizacional
                </p>

                <div className="mt-9 space-y-5 text-base font-light leading-[1.85] text-white/66">
                  <p>
                    Giovanni López es consultor en neuroliderazgo y transformación
                    organizacional, y fundador de la marca Neuronas Rebeldes.
                  </p>
                  <p>
                    Ha acompañado procesos de cultura empresarial en
                    organizaciones como SATENA, Cerro Matoso y Ecopetrol. En
                    Cultura Conecta participa como experto invitado, aportando su
                    experiencia al proceso de evolución interna de Grupo A&amp;C y
                    a futuras experiencias para otras organizaciones.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  {["Neuroliderazgo", "Cultura empresarial", "Liderazgo"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/12 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-white/52"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        </Container>
      </section>

      {/* PRINCIPIO */}
      <section className="bg-[#e9ecdf] px-6 py-20 text-[#082947] md:py-28">
        <Container>
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7c9f18]">
                Un principio esencial
              </p>
              <div>
                <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl">
                  No evaluamos personas. Comprendemos el sistema que las conecta.
                </h2>
                <p className="mt-8 max-w-3xl text-base leading-[1.8] text-[#082947]/68 md:text-lg">
                  Nuestro propósito es reconocer qué ha permitido llegar hasta
                  aquí, activar las fortalezas existentes y crear condiciones para
                  que el talento colectivo construya la siguiente etapa de
                  crecimiento.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* FORMULARIO */}
      <section id="solicitud" className="relative bg-[#041422] px-6 py-24 text-white md:py-36">
        <div className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a0c82b]/10 blur-[150px]" />
        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <div>
                <p className="mb-6 text-xs uppercase tracking-[0.34em] text-[#b7d65e]">
                  Agenda anticipada
                </p>
                <h2 className="text-4xl font-semibold leading-[0.96] tracking-[-0.055em] md:text-6xl">
                  Cuéntanos qué necesita movilizar tu organización.
                </h2>
                <p className="mt-8 max-w-xl text-base font-light leading-[1.85] text-white/58">
                  Nuestro equipo revisará el contexto, validará disponibilidad y
                  propondrá el siguiente paso: una conversación, un diagnóstico,
                  un programa o una experiencia en nuestros espacios.
                </p>

                <div className="mt-10 border-t border-white/10 pt-7">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/35">
                    Ubicación
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    Calle 52 Sur #43A-20, oficina 1110
                    <br />
                    Sabaneta, Antioquia
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl sm:p-8 md:p-10">
                <CulturaConectaLeadForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Footer />

      <style>{`
        @keyframes conectaFloat {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(-2deg); }
          50% { transform: translate3d(0, -18px, 0) rotate(1deg); }
        }

        .conecta-float {
          animation: conectaFloat 8s ease-in-out infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .conecta-float {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}