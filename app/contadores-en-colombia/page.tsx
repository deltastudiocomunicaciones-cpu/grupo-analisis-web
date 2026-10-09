import type { Metadata } from "next";
import Link from "next/link";
import MicrositePodcast from "@/components/sections/MicrositePodcast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MicrositeHero from "@/components/sections/MicrositeHero";

export const metadata: Metadata = {
  title: "Contadores en Colombia | Comunidad contable estratégica",
  description:
    "Comunidad para contadores que buscan evolucionar de la operación tradicional hacia un rol más estratégico, consultivo y empresarial.",
  alternates: {
    canonical: "/contadores-en-colombia",
  },
  openGraph: {
    title: "Contadores en Colombia | Comunidad contable estratégica",
    description:
      "Una comunidad del ecosistema Grupo A&C para fortalecer el criterio, la actualización y el liderazgo del contador colombiano.",
    url: "https://www.grupoayc.co/contadores-en-colombia",
    siteName: "Grupo Análisis & Consultorías",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.grupoayc.co/og/grupo-ayc-og-v2.png",
        width: 1200,
        height: 630,
        alt: "Contadores en Colombia Grupo A&C",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contadores en Colombia | Comunidad contable estratégica",
    description:
      "Una comunidad del ecosistema Grupo A&C para fortalecer el criterio, la actualización y el liderazgo del contador colombiano.",
    images: ["https://www.grupoayc.co/og/grupo-ayc-og-v2.png"],
  },
};

const generationCards = [
  {
    title: "Actualización Profesional",
    image: "/fotos/ecosistema_webp/cec-card-1.webp",
    text: "Un espacio para que los contadores fortalezcan su conocimiento técnico, se mantengan actualizados y comprendan los cambios que impactan la profesión.",
  },
  {
    title: "Criterio Contable",
    image: "/fotos/ecosistema_webp/cec-card-2.webp",
    text: "La comunidad impulsa una visión más analítica del ejercicio contable, conectando normas, datos, auditoría y lectura empresarial.",
  },
  {
    title: "Tecnología y Automatización",
    image: "/fotos/ecosistema_webp/cec-card-3.webp",
    text: "CEC promueve la evolución del contador hacia el uso estratégico de herramientas digitales, sistemas de información y modelos más eficientes.",
  },
  {
    title: "Liderazgo Financiero",
    image: "/fotos/ecosistema_webp/cec-card-4.webp",
    text: "El contador deja de ser solo un operador de registros para convertirse en un aliado de la gerencia, la estrategia y la toma de decisiones.",
  },
];

export default function ContadoresEnColombiaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <MicrositeHero
        eyebrow="Contadores en Colombia"
        title="La nueva generación del pensamiento contable."
        description="Comunidad, actualización y liderazgo para contadores que quieren evolucionar hacia auditoría, estrategia e inteligencia financiera."
        button="Unirme a la Comunidad"
        buttonLink="https://portalgrupoayc.com"
        ambientColor="#16a34a"
        imageSrc="/brands/cec-isotype.png"
        imageAlt="Isotipo CEC Contadores en Colombia"
        backgroundImage="/fotos/cec-ecosistema-hero.webp"
      />

      <section className="bg-[#f5f2eb] px-6 py-32 text-black">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 max-w-4xl">
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#16a34a]">
              Qué es Contadores en Colombia
            </p>

            <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
              Una comunidad para quienes entienden que la contabilidad ya no es
              suficiente.
            </h2>

            <p className="mt-10 text-lg font-light leading-[1.9] text-black/60">
              Contadores en Colombia nace para impulsar una nueva generación de
              profesionales capaces de conectar conocimiento técnico, auditoría,
              tecnología e inteligencia financiera dentro de un entorno
              empresarial cada vez más exigente.
            </p>
          </div>

          {/* NUEVA GENERACIÓN CONTABLE */}
          <div className="mb-16">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#16a34a]">
              Nueva Generación Contable
            </p>

            <h3 className="max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.04em] md:text-5xl">
              El futuro de la profesión ya comenzó.
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {generationCards.map((card, index) => (
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
                    alt={`CEC Insight ${index + 1}: ${card.title}`}
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
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(22,163,74,0.22),transparent_38%)]" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#22c55e]">
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
                    className="mt-8 inline-flex items-center gap-3 rounded-full border border-black/10 bg-black/[0.04] px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-black/45 transition-all duration-700 group-hover:border-[#16a34a]/35 group-hover:bg-[#16a34a]/10 group-hover:text-black"
                  >
                    Unirme a la comunidad
                    <span className="transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 border-t border-black/10 pt-16">
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#16a34a]">
              Por qué existe Contadores en Colombia
            </p>

            <h3 className="max-w-4xl text-3xl font-semibold leading-[1.1] tracking-[-0.04em] md:text-5xl">
              Porque el contador del futuro no solo registra información:
              interpreta, audita, asesora y lidera decisiones.
            </h3>

            <p className="mt-10 max-w-3xl text-lg font-light leading-[1.9] text-black/60">
              CEC existe para acompañar la evolución del contador colombiano
              hacia un rol más estratégico, conectado con la tecnología, la
              auditoría, la lectura financiera y el pensamiento empresarial.
            </p>
          </div>
        </div>
      </section>

      <MicrositePodcast
        eyebrow="Podcast · Contadores en Colombia"
        title="La nueva generación del pensamiento contable."
        description="Conversaciones sobre actualización profesional, tributación, auditoría, tecnología y el futuro de la profesión contable."
        youtubeUrl="https://www.youtube.com/"
        embedUrl="https://www.youtube.com/embed/VIDEO_ID"
        accentColor="#16a34a"
      />

      <Footer />
    </main>
  );
}