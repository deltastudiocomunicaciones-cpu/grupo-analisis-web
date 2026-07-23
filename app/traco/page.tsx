import type { Metadata } from "next";
import Link from "next/link";
import MicrositePodcast from "@/components/sections/MicrositePodcast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MicrositeHero from "@/components/sections/MicrositeHero";

export const metadata: Metadata = {
  title: "TRACO | Trámites empresariales DIAN y Cámara de Comercio",
  description:
    "TRACO acompaña trámites empresariales ante DIAN, Cámara de Comercio y entidades clave para formalizar, actualizar y estructurar empresas en Colombia.",
  alternates: {
    canonical: "/traco",
  },
  openGraph: {
    title: "TRACO | Trámites empresariales sin fricción",
    description:
      "Formalización, trámites DIAN, Cámara de Comercio y acompañamiento empresarial con respaldo del ecosistema Grupo A&C.",
    url: "https://www.grupoayc.co/traco",
    siteName: "Grupo Análisis & Consultorías",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.grupoayc.co/og/traco-grupo-ayc.webp",
        width: 1200,
        height: 630,
        alt: "TRACO trámites empresariales Grupo A&C",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TRACO | Trámites empresariales sin fricción",
    description:
      "Formalización, trámites DIAN, Cámara de Comercio y acompañamiento empresarial con respaldo del ecosistema Grupo A&C.",
    images: ["https://www.grupoayc.co/og/traco-grupo-ayc.webp"],
  },
};

const impactCards = [
  {
    title: "Constitución de Empresas",
    image: "/fotos/ecosistema_webp/traco-card-1.png",
    text: "Acompañamiento en la creación formal de empresas, definición de estructura societaria, documentación inicial y registro ante las entidades correspondientes.",
  },
  {
    title: "Trámites DIAN",
    image: "/fotos/ecosistema_webp/traco-card-2.png",
    text: "Gestión de procesos ante la DIAN para que la empresa pueda operar con claridad tributaria, actualización documental y cumplimiento básico.",
  },
  {
    title: "Cámara de Comercio",
    image: "/fotos/ecosistema_webp/traco-card-3.png",
    text: "Acompañamiento en registros, renovaciones, actualizaciones, certificados y movimientos empresariales ante Cámara de Comercio.",
  },
  {
    title: "Estructura Corporativa",
    image: "/fotos/ecosistema_webp/traco-card-4.png",
    text: "Organización documental, legal y administrativa para que la empresa tenga una base sólida para operar, crecer y tomar decisiones.",
  },
];

export default function TracoPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <MicrositeHero
        eyebrow="TRACO"
        title="Estructura legal y corporativa para empresas en Colombia."
        description="Constitución de empresas, trámites institucionales y acompañamiento frente a entidades de control."
        button="Iniciar Trámite"
        buttonLink="https://portalgrupoayc.com"
        ambientColor="#2563eb"
        imageSrc="/brands/traco-isotype.png"
        imageAlt="Isotipo TRACO"
        backgroundImage="/fotos/traco-ecosistema-hero.webp"
      />

      <section className="bg-[#f5f2eb] px-6 py-32 text-black">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 max-w-4xl">
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#2563eb]">
              Qué es TRACO
            </p>

            <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
              Más que trámites.
              <br />
              Infraestructura para que una empresa pueda existir, operar y
              crecer correctamente.
            </h2>

            <p className="mt-10 text-lg font-light leading-[1.9] text-black/60">
              TRACO acompaña la creación, formalización y evolución documental
              de las empresas, permitiendo que la visión estratégica se traduzca
              en una estructura legal, tributaria y corporativa sólida.
            </p>
          </div>

          {/* CASOS DE IMPACTO */}
          <div className="mb-16">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#2563eb]">
              Casos de Impacto
            </p>

            <h3 className="max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.04em] md:text-5xl">
              Lo que sucede cuando la estructura documental deja de ser un
              obstáculo.
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
                    alt={`Caso de impacto TRACO ${index + 1}: ${card.title}`}
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
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(37,99,235,0.20),transparent_38%)]" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#60a5fa]">
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
                    className="mt-8 inline-flex items-center gap-3 rounded-full border border-black/10 bg-black/[0.04] px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-black/45 transition-all duration-700 group-hover:border-[#2563eb]/35 group-hover:bg-[#2563eb]/10 group-hover:text-black"
                  >
                    Iniciar trámite
                    <span className="transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 border-t border-black/10 pt-16">
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#2563eb]">
              Por qué existe TRACO
            </p>

            <h3 className="max-w-4xl text-3xl font-semibold leading-[1.1] tracking-[-0.04em] md:text-5xl">
              Porque una empresa no solo necesita una idea. Necesita una
              estructura formal que le permita operar con seguridad.
            </h3>

            <p className="mt-10 max-w-3xl text-lg font-light leading-[1.9] text-black/60">
              TRACO fue diseñado para quitar fricción a los procesos de
              formalización, actualización y gestión documental, ayudando a que
              empresarios y equipos administrativos puedan avanzar con mayor
              claridad frente a entidades, registros y obligaciones
              institucionales.
            </p>
          </div>
        </div>
      </section>

      <MicrositePodcast
        eyebrow="Podcast · TRACO"
        title="Conversaciones sobre formalización, trámites y estructura empresarial."
        description="Un espacio para explicar cómo la correcta gestión documental, tributaria y societaria permite que una empresa opere con mayor control y seguridad."
        youtubeUrl="https://www.youtube.com/"
        embedUrl="https://www.youtube.com/embed/VIDEO_ID"
        accentColor="#2563eb"
      />

      <Footer />
    </main>
  );
}