import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const siteUrl = "https://www.grupoayc.co";

export const metadata: Metadata = {
  title: "Cultura Conecta | Liderazgo y evolución organizacional",
  description:
    "Unidad de liderazgo, cultura y evolución organizacional de Grupo A&C. Conectamos talento, conocimiento y dirección para construir organizaciones de alto desempeño.",
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
        url: `${siteUrl}/fotos/cultura-conecta/cultura-conecta-hero.webp`,
        width: 1920,
        height: 1080,
        alt: "Cultura Conecta - evolución organizacional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cultura Conecta | Inteligencia colectiva que transforma",
    description:
      "Conectamos talento, conocimiento y dirección para construir organizaciones de alto desempeño.",
    images: [`${siteUrl}/fotos/cultura-conecta-hero.webp`],
  },
};

const capabilities = [
  {
    number: "01",
    title: "Leer el sistema",
    text: "Comprendemos cómo se conectan liderazgo, cultura, decisiones y formas de trabajo para identificar las palancas reales de evolución.",
  },
  {
    number: "02",
    title: "Alinear la dirección",
    text: "Convertimos propósito y estrategia en conversaciones claras, acuerdos de liderazgo y prioridades compartidas por toda la organización.",
  },
  {
    number: "03",
    title: "Movilizar el talento",
    text: "Activamos el conocimiento que ya vive en los equipos para elevar la colaboración, la autonomía y la capacidad de ejecución.",
  },
];

const pillars = [
  {
    title: "Liderazgo consciente",
    text: "Líderes capaces de leer el contexto, sostener conversaciones decisivas y movilizar a otros con claridad.",
  },
  {
    title: "Inteligencia colectiva",
    text: "El conocimiento deja de estar aislado y se convierte en una capacidad compartida por la organización.",
  },
  {
    title: "Cultura que ejecuta",
    text: "Los valores se traducen en comportamientos, acuerdos y hábitos que hacen posible la estrategia.",
  },
  {
    title: "Evolución sostenible",
    text: "El cambio se instala en el sistema para producir resultados sólidos sin depender de impulsos pasajeros.",
  },
];

const phases = [
  {
    phase: "Fase I",
    title: "Alineación",
    text: "Escucha estratégica, lectura del sistema y comprensión compartida del punto de partida.",
  },
  {
    phase: "Fase II",
    title: "Consolidación",
    text: "Definición de objetivos, acuerdos de liderazgo y arquitectura para coordinar mejor.",
  },
  {
    phase: "Fase III",
    title: "Evolución",
    text: "Planes de acción, victorias tempranas y comunicación que convierte intención en movimiento.",
  },
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

      {/* HERO: contenido crítico sin Framer Motion para proteger el LCP */}
      <section className="relative min-h-[92svh] overflow-hidden bg-[#071b2e] text-white">
        <Image
          src="/fotos/Giovanni-hero.png"
          alt="Espacio de encuentro y formación de Cultura Conecta"
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
            sizes="38vw"
            className="conecta-float object-contain opacity-[100] drop-shadow-[0_28px_80px_rgba(0,0,0,0.35)]"
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
              <span className="block text-[#a0c82b]">Liderazgo que transforma.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base font-light leading-[1.8] text-white/72 md:text-lg">
              Conectamos talento, conocimiento y dirección para construir
              organizaciones capaces de evolucionar, ejecutar y crecer como un
              solo sistema.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contacto"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#a0c82b] px-7 py-4 text-sm font-medium text-[#082947] transition-transform duration-300 hover:scale-[1.025]"
              >
                Iniciar una conversación
                <ArrowUpRight />
              </Link>

              <a
                href="#modelo"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 text-sm text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/10"
              >
                Conocer el modelo
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
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-[#7c9f18]">
                  Inteligencia colectiva
                </p>
              </div>

              <div>
                <h2 className="max-w-5xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl lg:text-7xl">
                  El siguiente nivel de una empresa no depende solo de cuánto
                  sabe, sino de qué tan bien logra conectar lo que sabe.
                </h2>

                <div className="mt-10 grid gap-8 border-t border-[#082947]/15 pt-8 md:grid-cols-2">
                  <p className="text-base font-light leading-[1.85] text-[#082947]/64">
                    Cultura Conecta nace para fortalecer las relaciones entre
                    áreas, activar el conocimiento interno y construir una visión
                    compartida del futuro.
                  </p>
                  <p className="text-base font-light leading-[1.85] text-[#082947]/64">
                    No imponemos fórmulas. Ayudamos a que la organización lea su
                    propio sistema, reconozca sus fortalezas y transforme su
                    capacidad colectiva en resultados.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CAPACIDADES */}
      <section id="modelo" className="bg-[#071d32] px-6 py-24 text-white md:py-32">
        <Container>
          <Reveal>
            <div className="mb-16 grid gap-10 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#a0c82b]">
                  Nuestra intervención
                </p>
                <h2 className="text-4xl font-semibold leading-[0.96] tracking-[-0.055em] md:text-6xl">
                  Del talento disperso a una organización conectada.
                </h2>
              </div>
              <p className="max-w-xl text-base font-light leading-[1.85] text-white/58 lg:justify-self-end">
                Trabajamos sobre el sistema completo: la forma en que los líderes
                interpretan, deciden, conversan y convierten la estrategia en
                acción coordinada.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 lg:grid-cols-3">
            {capabilities.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.07}>
                <article className="group min-h-[360px] bg-[#071d32] p-8 transition-colors duration-500 hover:bg-[#0b2945] md:p-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-[0.28em] text-[#a0c82b]">
                      {item.number}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-[#a0c82b] shadow-[0_0_0_8px_rgba(160,200,43,0.08)]" />
                  </div>
                  <div className="mt-24">
                    <h3 className="text-3xl font-semibold tracking-[-0.045em]">
                      {item.title}
                    </h3>
                    <p className="mt-5 text-sm font-light leading-[1.85] text-white/58">
                      {item.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* PILARES */}
      <section className="px-6 py-24 md:py-36">
        <Container>
          <Reveal>
            <div className="mb-16 max-w-4xl">
              <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#7c9f18]">
                Alto desempeño sostenible
              </p>
              <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl">
                La cultura no es un discurso. Es la forma en que una organización
                produce resultados.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-x-10 border-t border-[#082947]/15 md:grid-cols-2">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={(index % 2) * 0.06}>
                <article className="grid min-h-[230px] grid-cols-[52px_1fr] gap-5 border-b border-[#082947]/15 py-10 md:py-12">
                  <span className="text-xs tracking-[0.25em] text-[#7c9f18]">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-5 max-w-lg text-sm font-light leading-[1.85] text-[#082947]/62">
                      {pillar.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* RUTA */}
      <section className="bg-[#e9ecdf] px-6 py-24 md:py-32">
        <Container>
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#7c9f18]">
                  Ruta de evolución
                </p>
                <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl">
                  Comprender. Alinear. Movilizar.
                </h2>
                <p className="mt-7 max-w-md text-base font-light leading-[1.85] text-[#082947]/62">
                  Una ruta progresiva que convierte la comprensión del sistema en
                  decisiones, hábitos y resultados visibles.
                </p>
              </div>

              <div className="border-t border-[#082947]/18">
                {phases.map((item, index) => (
                  <div
                    key={item.phase}
                    className="grid gap-5 border-b border-[#082947]/18 py-8 sm:grid-cols-[100px_1fr] md:py-10"
                  >
                    <span className="text-xs uppercase tracking-[0.24em] text-[#7c9f18]">
                      {item.phase}
                    </span>
                    <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
                      <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                        {item.title}
                      </h3>
                      <p className="text-sm font-light leading-[1.8] text-[#082947]/60">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ESPACIO */}
      <section className="bg-[#071d32] px-4 py-4 text-white sm:px-6 sm:py-6">
        <div className="relative mx-auto min-h-[720px] max-w-[1600px] overflow-hidden rounded-[2rem] md:min-h-[820px]">
          <Image
  src="/fotos/cultura-conecta-hero.webp"
  alt="Espacio de encuentro y formación de Cultura Conecta"
  fill
  preload
  fetchPriority="high"
  sizes="100vw"
  quality={78}
  className="
    object-cover
    object-[58%_center]
    saturate-[1.06]
    contrast-[1.03]
    sm:object-[55%_center]
    md:object-[center_30%]
  "
/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#041422]/95 via-[#041422]/20 to-[#041422]/10" />

          <div className="absolute inset-x-0 bottom-0 p-7 sm:p-12 md:p-16">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div>
                  <p className="mb-5 text-xs uppercase tracking-[0.32em] text-[#b7d65e]">
                    Encuentros que mueven la organización
                  </p>
                  <h2 className="max-w-4xl text-4xl font-semibold leading-[0.96] tracking-[-0.055em] sm:text-5xl md:text-7xl">
                    Un espacio para pensar juntos y avanzar distinto.
                  </h2>
                </div>
                <p className="max-w-xl text-base font-light leading-[1.8] text-white/68 lg:justify-self-end">
                  Conversaciones, laboratorios de liderazgo y experiencias de
                  aprendizaje diseñadas para convertir ideas en conexiones e
                  impacto.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MENSAJE FUNDAMENTAL */}
      <section className="bg-[#a0c82b] px-6 py-20 text-[#082947] md:py-28">
        <Container>
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
              <p className="text-xs font-semibold uppercase tracking-[0.32em]">
                Un principio esencial
              </p>
              <div>
                <h2 className="text-4xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl">
                  No evaluamos personas. Comprendemos el sistema que las conecta.
                </h2>
                <p className="mt-8 max-w-3xl text-base leading-[1.8] text-[#082947]/74 md:text-lg">
                  Nuestro propósito es descubrir qué ha permitido llegar hasta
                  aquí, reconocer las fortalezas existentes y crear las
                  condiciones para que el talento colectivo construya la siguiente
                  etapa de crecimiento.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative bg-[#041422] px-6 py-24 text-white md:py-36">
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a0c82b]/10 blur-[130px]" />
        <Container className="relative">
          <Reveal>
            <div className="mx-auto max-w-5xl text-center">
              <p className="mb-6 text-xs uppercase tracking-[0.34em] text-[#b7d65e]">
                Cultura Conecta
              </p>
              <h2 className="text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl lg:text-8xl">
                El futuro se construye cuando el talento se conecta.
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-[1.8] text-white/60 md:text-lg">
                Conversemos sobre el siguiente nivel de liderazgo, cultura y
                desempeño de tu organización.
              </p>
              <Link
                href="/contacto"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#a0c82b] px-8 py-4 text-sm font-medium text-[#082947] transition-transform duration-300 hover:scale-[1.025]"
              >
                Conectar con nosotros
                <ArrowUpRight />
              </Link>
            </div>
          </Reveal>
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
