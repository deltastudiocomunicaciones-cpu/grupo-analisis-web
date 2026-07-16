import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Grupo A&C | Sitio oficial de Grupo Análisis & Consultorías",
  description:
    "Sitio oficial de Grupo A&C, ecosistema empresarial colombiano especializado en consultoría tributaria, financiera, contable, tecnológica, patrimonial y corporativa.",
  alternates: {
    canonical: "/grupo-ayc",
  },
  openGraph: {
    title: "Grupo A&C | Sitio oficial de Grupo Análisis & Consultorías",
    description:
      "Grupo A&C es un ecosistema empresarial colombiano especializado en inteligencia tributaria, financiera, contable, tecnológica y corporativa.",
    url: "https://www.grupoayc.co/grupo-ayc",
    siteName: "Grupo Análisis & Consultorías",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.grupoayc.co/og/grupo-ayc-og-v2.png",
        width: 1200,
        height: 630,
        alt: "Grupo A&C - Grupo Análisis & Consultorías",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo A&C | Grupo Análisis & Consultorías",
    description:
      "Sitio oficial de Grupo A&C, ecosistema empresarial colombiano de consultoría tributaria, financiera, tecnológica y corporativa.",
    images: ["https://www.grupoayc.co/og/grupo-ayc-og-v2.png"],
  },
};

const pillars = [
  {
    title: "Consultoría tributaria",
    text: "Planeación, cumplimiento, revisión preventiva y acompañamiento estratégico para empresas que necesitan anticiparse a riesgos fiscales.",
  },
  {
    title: "Inteligencia financiera",
    text: "Lectura de márgenes, estructura de costos, rentabilidad, flujo de caja, patrimonio y sostenibilidad empresarial.",
  },
  {
    title: "Tecnología empresarial",
    text: "Desarrollo de sistemas de información, automatización de procesos y plataformas como SADI ERP y SADI CDF.",
  },
  {
    title: "Formalización y trámites",
    text: "Acompañamiento en procesos ante DIAN, Cámara de Comercio y entidades clave mediante TRACO.",
  },
];

const brands = [
  {
    name: "SADI ERP",
    href: "/sadi",
    description:
      "Software administrativo y contable diseñado para estructurar procesos empresariales con mayor control.",
  },
  {
    name: "TRACO",
    href: "/traco",
    description:
      "Unidad especializada en trámites empresariales, formalización, DIAN y Cámara de Comercio.",
  },
  {
    name: "CEC",
    href: "/contadores-en-colombia",
    description:
      "Comunidad de contadores orientada al conocimiento, la formación y la evolución profesional.",
  },
  {
    name: "Análisis & Consultorías",
    href: "/analisis-y-consultorias",
    description:
      "Firma consultora especializada en tributación, finanzas, auditoría y acompañamiento empresarial.",
  },
];

const searchTerms = [
  "Grupo A&C",
  "Grupo AyC",
  "Grupo AYC",
  "Grupo Análisis & Consultorías",
  "Grupo Análisis y Consultorías",
  "Consultoría tributaria en Colombia",
  "Consultoría financiera empresarial",
  "Software contable SADI",
  "Trámites empresariales TRACO",
];

export default function GrupoAycPage() {
  return (
    <main className="min-h-screen bg-[#f5f2eb] text-black">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f5f2eb] px-6 pt-44 pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(201,106,27,0.15),transparent_34%),radial-gradient(circle_at_82%_16%,rgba(0,0,0,0.08),transparent_32%),linear-gradient(to_bottom,#f5f2eb,#eee6da)]" />

        <div className="absolute inset-0 opacity-[0.10]">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(0,0,0,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.10)_1px,transparent_1px)] bg-[size:120px_120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-[#c96a1b]">
              Sitio oficial · Grupo A&C
            </p>

            <h1 className="max-w-6xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl lg:text-[6.6rem]">
              Grupo A&C es Grupo Análisis & Consultorías.
            </h1>

            <p className="mt-10 max-w-4xl text-lg font-light leading-[1.9] text-black/62">
              Grupo A&C, también conocido como Grupo Análisis & Consultorías,
              es un ecosistema empresarial colombiano especializado en
              consultoría tributaria, financiera, contable, tecnológica,
              patrimonial y corporativa para empresas que necesitan tomar
              mejores decisiones.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contacto"
                className="rounded-full bg-[#c96a1b] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#a95616]"
              >
                Contactar Grupo A&C
              </Link>

              <Link
                href="/nosotros"
                className="rounded-full border border-black/15 px-7 py-4 text-sm font-medium text-black/70 transition-all duration-300 hover:border-[#c96a1b]/60 hover:text-black"
              >
                Conocer la historia
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* IDENTIDAD DE MARCA */}
      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
                Identidad oficial
              </p>

              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.055em] md:text-6xl">
                Una misma organización, varias formas de búsqueda.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-8 md:p-10">
              <p className="text-lg font-light leading-[1.9] text-white/62">
                Esta página confirma que el dominio oficial de Grupo A&C es{" "}
                <strong className="font-medium text-white">
                  www.grupoayc.co
                </strong>
                . La organización puede ser buscada como Grupo A&C, Grupo AyC,
                Grupo AYC, Grupo Análisis & Consultorías o Grupo Análisis y
                Consultorías.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {searchTerms.map((term) => (
                  <span
                    key={term}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/55"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* QUÉ HACE */}
      <section className="bg-[#f5f2eb] px-6 py-28 text-black">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-16 max-w-4xl">
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
                Qué hace Grupo A&C
              </p>

              <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
                Inteligencia empresarial para operar con más control,
                tranquilidad y visión de futuro.
              </h2>

              <p className="mt-8 max-w-3xl text-lg font-light leading-[1.9] text-black/58">
                Grupo Análisis & Consultorías integra conocimiento tributario,
                financiero, contable, tecnológico y corporativo para acompañar
                empresas en procesos de crecimiento, cumplimiento,
                formalización y fortalecimiento estratégico.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.06}>
                <GlassCard className="h-full rounded-[2.4rem] border border-black/10 bg-white/80 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.07)]">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.28em] text-[#c96a1b]">
                      0{index + 1}
                    </span>

                    <span className="h-2.5 w-2.5 rounded-full bg-[#c96a1b]" />
                  </div>

                  <h3 className="text-3xl font-semibold tracking-[-0.045em]">
                    {pillar.title}
                  </h3>

                  <p className="mt-6 text-sm font-light leading-[1.85] text-black/55">
                    {pillar.text}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSISTEMA */}
      <section className="bg-[#eee6da] px-6 py-28 text-black">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-16 max-w-4xl">
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
                Ecosistema Grupo A&C
              </p>

              <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
                Marcas que convierten el conocimiento en soluciones.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {brands.map((brand, index) => (
              <Reveal key={brand.name} delay={index * 0.06}>
                <Link href={brand.href} className="group">
                  <article className="flex h-full flex-col justify-between rounded-[2.2rem] border border-black/10 bg-white/75 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_30px_100px_rgba(0,0,0,0.10)]">
                    <div>
                      <p className="mb-8 text-xs uppercase tracking-[0.28em] text-[#c96a1b]">
                        Marca 0{index + 1}
                      </p>

                      <h3 className="text-3xl font-semibold tracking-[-0.05em] transition-colors duration-300 group-hover:text-[#c96a1b]">
                        {brand.name}
                      </h3>

                      <p className="mt-6 text-sm font-light leading-[1.8] text-black/55">
                        {brand.description}
                      </p>
                    </div>

                    <p className="mt-10 text-sm font-medium text-black/55 transition-colors duration-300 group-hover:text-[#c96a1b]">
                      Ver marca →
                    </p>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AUTORIDAD SEO */}
      <section className="bg-[#f5f2eb] px-6 py-28 text-black">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
                Sitio oficial
              </p>

              <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
                www.grupoayc.co es el dominio oficial de Grupo A&C.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[2.5rem] border border-black/10 bg-white/75 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.07)] md:p-10">
              <p className="text-lg font-light leading-[1.9] text-black/62">
                Si está buscando Grupo A&C, Grupo AyC, Grupo AYC o Grupo
                Análisis & Consultorías, este es el sitio oficial de la
                organización. Desde este dominio se puede acceder a sus unidades
                de consultoría, tecnología, trámites empresariales, comunidad
                profesional, noticias, artículos y canales de contacto.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Link
                  href="/noticias"
                  className="rounded-2xl border border-black/10 bg-[#f5f2eb] px-5 py-4 text-sm font-medium text-black/70 transition-all duration-300 hover:border-[#c96a1b]/40 hover:text-[#c96a1b]"
                >
                  Noticias Grupo A&C
                </Link>

                <Link
                  href="/inteligencia"
                  className="rounded-2xl border border-black/10 bg-[#f5f2eb] px-5 py-4 text-sm font-medium text-black/70 transition-all duration-300 hover:border-[#c96a1b]/40 hover:text-[#c96a1b]"
                >
                  Artículos de inteligencia
                </Link>

                <Link
                  href="/soluciones"
                  className="rounded-2xl border border-black/10 bg-[#f5f2eb] px-5 py-4 text-sm font-medium text-black/70 transition-all duration-300 hover:border-[#c96a1b]/40 hover:text-[#c96a1b]"
                >
                  Servicios empresariales
                </Link>

                <Link
                  href="/contacto"
                  className="rounded-2xl border border-black/10 bg-[#f5f2eb] px-5 py-4 text-sm font-medium text-black/70 transition-all duration-300 hover:border-[#c96a1b]/40 hover:text-[#c96a1b]"
                >
                  Contactar
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black px-6 py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="rounded-[3rem] border border-white/10 bg-white/[0.045] p-10 md:p-14">
              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
                Grupo Análisis & Consultorías
              </p>

              <h2 className="max-w-5xl text-4xl font-semibold leading-[1.05] tracking-[-0.055em] md:text-6xl">
                Consultoría, tecnología y estructura empresarial para decisiones
                de largo plazo.
              </h2>

              <p className="mt-8 max-w-3xl text-base font-light leading-[1.9] text-white/55">
                Grupo A&C acompaña empresas que necesitan organizar su
                información, fortalecer su operación, cumplir con mayor
                tranquilidad y construir crecimiento sostenible.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contacto"
                  className="rounded-full bg-[#c96a1b] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#a95616]"
                >
                  Hablar con Grupo A&C
                </Link>

                <Link
                  href="/nosotros"
                  className="rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white/75 transition-all duration-300 hover:border-[#c96a1b]/60 hover:text-white"
                >
                  Conocer más
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}