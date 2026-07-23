import type { Metadata } from "next";
import Link from "next/link";
import MicrositePodcast from "@/components/sections/MicrositePodcast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MicrositeHero from "@/components/sections/MicrositeHero";

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

const impactCards = [
  {
    title: "Automatización Contable",
    image: "/fotos/ecosistema_webp/sadi-impacto-1.webp",
    text: "SADI reduce tareas operativas repetitivas y permite que los equipos contables trabajen con información más ordenada, trazable y lista para análisis.",
  },
  {
    title: "Control Administrativo",
    image: "/fotos/ecosistema_webp/sadi-impacto-v2.webp",
    text: "Centraliza procesos administrativos y financieros para que la empresa pueda consultar, validar y controlar su operación con mayor claridad.",
  },
  {
    title: "Información Estratégica",
    image: "/fotos/ecosistema_webp/sadi-impacto-3.webp",
    text: "Convierte datos dispersos en información estructurada para apoyar decisiones gerenciales, auditorías internas y análisis financiero.",
  },
  {
    title: "Evolución del Contador",
    image: "/fotos/ecosistema_webp/sadi-impacto-4.webp",
    text: "Libera al contador de cargas manuales para elevar su rol hacia auditoría, interpretación financiera y acompañamiento estratégico empresarial.",
  },
];

export default function SadiPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <MicrositeHero
        eyebrow="SADI ERP"
        title="El salto del contador operativo al estratega empresarial."
        description="SADI es el software contable inteligente del ecosistema Grupo A&C, diseñado para automatizar procesos, estructurar información y elevar el rol del contador hacia auditoría, análisis y estrategia."
        button="Listo para Simplificar?"
        buttonLink="https://portalgrupoayc.com"
        ambientColor="#d97706"
        imageSrc="/brands/sadi-isotype.png"
        imageAlt="Isotipo SADI ERP"
        backgroundImage="/fotos/sadi-ecosistema-hero.webp"
      />

      <section className="bg-[#f5f2eb] px-6 py-32 text-black">
        <div className="mx-auto max-w-7xl">
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

          {/* CASOS DE IMPACTO */}
          <div className="mb-16">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#d97706]">
              Casos de Impacto
            </p>

            <h3 className="max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.04em] md:text-5xl">
              Lo que sucede cuando la información deja de ser un problema.
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {impactCards.map((card, index) => (
              <div
                key={card.title}
                className="
                  group
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
                      opacity-100
                      transition-all
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
                  <p className="text-sm font-light leading-[1.85] text-black/58 md:text-base">
                    {card.text}
                  </p>

                  <Link
                    href="https://portalgrupoayc.com"
                    className="mt-8 inline-flex items-center gap-3 rounded-full border border-black/10 bg-black/[0.04] px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-black/45 transition-all duration-700 group-hover:border-[#d97706]/35 group-hover:bg-[#d97706]/10 group-hover:text-black"
                  >
                    Solicitar demo
                    <span className="transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 border-t border-black/10 pt-16">
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#d97706]">
              Por qué existe SADI
            </p>

            <h3 className="max-w-4xl text-3xl font-semibold leading-[1.1] tracking-[-0.04em] md:text-5xl">
              Porque los datos por sí solos no generan valor. La inteligencia
              surge cuando la información está organizada.
            </h3>

            <p className="mt-10 max-w-3xl text-lg font-light leading-[1.9] text-black/60">
              SADI fue diseñado para liberar a los equipos contables de tareas
              operativas repetitivas y permitirles evolucionar hacia funciones
              de auditoría, análisis financiero y apoyo estratégico a la
              dirección empresarial.
            </p>
          </div>
        </div>
      </section>

      <MicrositePodcast
        eyebrow="Podcast · SADI ERP"
        title="Conversaciones sobre tecnología, contabilidad e inteligencia empresarial."
        description="Un espacio para explicar cómo la automatización, los sistemas de información y el criterio contable pueden transformar la operación empresarial."
        youtubeUrl="https://www.youtube.com/@SADISOFTWARE"
        embedUrl="https://www.youtube.com/embed/HVvMr-08xbI"
        accentColor="#d97706"
      />

      <Footer />
    </main>
  );
}