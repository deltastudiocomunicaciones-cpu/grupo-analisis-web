import type { Metadata } from "next";
import Link from "next/link";
import MicrositePodcast from "@/components/sections/MicrositePodcast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MicrositeHero from "@/components/sections/MicrositeHero";

export const metadata: Metadata = {
  title: "Análisis & Consultorías | Consultoría tributaria y financiera",
  description:
    "Firma especializada en consultoría tributaria, financiera, contable y empresarial para compañías que necesitan estructura, control y visión estratégica.",
  alternates: {
    canonical: "/analisis-consultorias",
  },
  openGraph: {
    title: "Análisis & Consultorías | Consultoría estratégica empresarial",
    description:
      "Acompañamiento tributario, financiero y empresarial para organizaciones que requieren claridad, respaldo y planeación.",
    url: "https://www.grupoayc.co/analisis-consultorias",
    siteName: "Grupo Análisis & Consultorías",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.grupoayc.co/og/analisis-consultorias-grupo-ayc.png",
        width: 1200,
        height: 630,
        alt: "Análisis & Consultorías Grupo A&C",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Análisis & Consultorías | Consultoría estratégica empresarial",
    description:
      "Acompañamiento tributario, financiero y empresarial para organizaciones que requieren claridad, respaldo y planeación.",
    images: [
      "https://www.grupoayc.co/og/analisis-consultorias-grupo-ayc.png",
    ],
  },
};

const insightCards = [
  {
    title: "Diagnóstico Financiero",
    image: "/fotos/ecosistema_webp/analisis-card-1.webp",
    text: "Lectura profunda de la información financiera para identificar riesgos, oportunidades, márgenes, estructuras de costo y puntos críticos de decisión.",
  },
  {
    title: "Planeación Tributaria",
    image: "/fotos/ecosistema_webp/analisis-card-2.webp",
    text: "Acompañamiento estratégico para anticipar impactos fiscales, ordenar obligaciones y construir decisiones tributarias con visión de largo plazo.",
  },
  {
    title: "Auditoría y Control",
    image: "/fotos/ecosistema_webp/analisis-card-3.webp",
    text: "Revisión técnica de procesos, cifras, soportes y criterios contables para fortalecer la confianza, la trazabilidad y el gobierno empresarial.",
  },
  {
    title: "Estrategia Patrimonial",
    image: "/fotos/ecosistema_webp/analisis-card-4.webp",
    text: "Análisis y estructuración de decisiones empresariales y patrimoniales para proteger valor, reducir exposición y acompañar procesos de crecimiento.",
  },
];

export default function AnalisisConsultoriasPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <MicrositeHero
        eyebrow="Análisis & Consultorías"
        title="Diagnóstico financiero para decisiones de alto impacto."
        description="Auditoría, planeación tributaria y análisis financiero para empresas que necesitan claridad, control y estrategia."
        button="Solicitar Diagnóstico"
        buttonLink="https://portalgrupoayc.com"
        ambientColor="#c96a1b"
        imageSrc="/brands/analisis-isotype.png"
        imageAlt="Isotipo Análisis & Consultorías"
        backgroundImage="/fotos/analisis-ecosistema-hero.png"
      />

      <section className="bg-[#f5f2eb] px-6 py-32 text-black">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 max-w-4xl">
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
              Qué es Análisis & Consultorías
            </p>

            <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
              Criterio financiero, tributario y patrimonial para decisiones
              empresariales complejas.
            </h2>

            <p className="mt-10 text-lg font-light leading-[1.9] text-black/60">
              Análisis & Consultorías acompaña a empresas, empresarios y
              patrimonios en procesos donde la información debe convertirse en
              diagnóstico, estrategia y control para tomar decisiones con mayor
              claridad.
            </p>
          </div>

          {/* STRATEGIC INSIGHTS */}
          <div className="mb-16">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
              Strategic Insights
            </p>

            <h3 className="max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.04em] md:text-5xl">
              Decisiones complejas requieren una lectura más profunda de la
              realidad empresarial.
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {insightCards.map((card, index) => (
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
                    alt={`Strategic Insight ${index + 1}: ${card.title}`}
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
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(201,106,27,0.20),transparent_38%)]" />

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
                    className="mt-8 inline-flex items-center gap-3 rounded-full border border-black/10 bg-black/[0.04] px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-black/45 transition-all duration-700 group-hover:border-[#c96a1b]/35 group-hover:bg-[#c96a1b]/10 group-hover:text-black"
                  >
                    Solicitar diagnóstico
                    <span className="transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 border-t border-black/10 pt-16">
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
              Por qué existe Análisis & Consultorías
            </p>

            <h3 className="max-w-4xl text-3xl font-semibold leading-[1.1] tracking-[-0.04em] md:text-5xl">
              Porque una empresa no necesita solo información. Necesita criterio
              para interpretar lo que esa información significa.
            </h3>

            <p className="mt-10 max-w-3xl text-lg font-light leading-[1.9] text-black/60">
              Análisis & Consultorías existe para acompañar decisiones donde se
              cruzan finanzas, tributación, patrimonio, auditoría y estrategia.
              Su función es convertir datos, riesgos y escenarios complejos en
              una lectura clara para la dirección empresarial.
            </p>
          </div>
        </div>
      </section>

      <MicrositePodcast
        eyebrow="Podcast · Análisis & Consultorías"
        title="Conversaciones para quienes toman decisiones empresariales."
        description="Un espacio para analizar estrategia tributaria, patrimonio, finanzas, auditoría y crecimiento empresarial desde una perspectiva práctica y ejecutiva."
        youtubeUrl="https://www.youtube.com/"
        embedUrl="https://www.youtube.com/embed/VIDEO_ID"
        accentColor="#c96a1b"
      />

      <Footer />
    </main>
  );
}