import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/data/articles";
import GlassCard from "@/components/ui/GlassCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import LazyVideo from "@/components/ui/LazyVideo";

export const metadata: Metadata = {
  title: "Artículos de inteligencia empresarial, tributaria y financiera",
  description:
    "Pensamiento estratégico de Grupo A&C sobre planeación tributaria, estructura financiera, protección patrimonial, tecnología empresarial y toma de decisiones.",
  alternates: {
    canonical: "/inteligencia",
  },
  openGraph: {
    title: "Artículos de inteligencia empresarial | Grupo A&C",
    description:
      "Ideas, análisis y pensamiento estratégico para empresas que necesitan decidir con claridad, estructura y visión de largo plazo.",
    url: "/inteligencia",
    type: "website",
    images: [
      {
        url: "/og/grupo-ayc-og-v1.png",
        width: 1200,
        height: 630,
        alt: "Inteligencia empresarial Grupo A&C",
      },
    ],
  },
};

const pillars = [
  "Criterio",
  "Estructura",
  "Anticipación",
  "Gobierno",
  "Patrimonio",
  "Evolución",
];

export default function InteligenciaPage() {
  const editorialArticles = articles.filter(
  (article) => article.type === "article"
);


const featuredArticle = editorialArticles.find(
  (article) => article.featured
);

const recentArticles = editorialArticles.filter(
  (article) => article.slug !== featuredArticle?.slug
);

  if (!featuredArticle) return null;

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      <section className="relative min-h-screen overflow-hidden px-6 pt-44 pb-20">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
          alt="Centro de Inteligencia Grupo A&C"
          className="absolute inset-0 h-full w-full object-cover brightness-110 contrast-105"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/85" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-[#c96a1b]">
              Artículos · Centro de Inteligencia
            </p>

            <h1 className="max-w-6xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl lg:text-[6.8rem]">
              Pensamiento estratégico para empresas que no deciden en piloto automático.
            </h1>

            <p className="mt-10 max-w-3xl text-lg font-light leading-[1.9] text-white/55">
              Un espacio editorial creado para empresarios, contadores, directivos y
              líderes que necesitan criterio antes de tomar decisiones tributarias,
              financieras y corporativas.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-12">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto border-y border-white/10 py-5">
          {pillars.map((pillar) => (
            <div
              key={pillar}
              className="shrink-0 rounded-full border border-[#c96a1b]/30 bg-[#c96a1b]/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-[#c96a1b] backdrop-blur-xl transition-all duration-500 hover:border-[#c96a1b]/60 hover:bg-[#c96a1b]/20 hover:shadow-[0_10px_30px_rgba(201,106,27,0.18)]"
            >
              {pillar}
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Link href={`/inteligencia/${featuredArticle.slug}`}>
              <GlassCard className="overflow-hidden">
                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.2fr]">
                  <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 h-full w-full object-cover opacity-80"
                    >
                     <LazyVideo
  src="/videos/optimized/articulo-destacado.mp4"
  className="absolute inset-0"
  videoClassName="h-full w-full object-cover"
/>
                    </video>

                    <div className="absolute inset-0 bg-gradient-to-br from-[#c96a1b]/25 via-black/40 to-black" />

                    <div className="absolute bottom-8 left-8 right-8">
                      <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                        Ensayo editorial
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="mb-8 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
                      Artículo destacado
                    </p>

                    <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.055em] md:text-6xl">
                      {featuredArticle.title}
                    </h2>

                    <p className="mt-8 max-w-2xl text-base font-light leading-[1.9] text-white/55">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4 text-xs uppercase tracking-[0.25em] text-white/35">
                      <span>{featuredArticle.author}</span>
                      <span>·</span>
                      <span>{featuredArticle.readTime}</span>
                    </div>

                    <p className="mt-12 text-sm text-white/45">
                      Leer artículo completo →
                    </p>
                  </div>
                </div>
              </GlassCard>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-[#f5f2eb] px-6 py-32 text-black">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between border-b border-black/10 pb-6">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
                Biblioteca editorial
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.05em] text-black md:text-5xl">
                Artículos recientes
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentArticles.map((article, index) => (
              <Reveal key={article.slug} delay={index * 0.06}>
                <Link href={`/inteligencia/${article.slug}`}>
                  <GlassCard className="mx-auto flex h-[430px] max-w-[420px] flex-col justify-between rounded-[2.5rem] border border-black/10 bg-white/85 shadow-[0_25px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#c96a1b]/25 hover:shadow-[0_35px_100px_rgba(0,0,0,0.12)]">
                    <div>
                      <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#c96a1b]">
                        {article.category}
                      </p>

                      <div className="mb-8 h-px w-16 bg-[#c96a1b]/50" />

                      <h3 className="text-3xl font-semibold leading-[1.05] tracking-[-0.045em]">
                        {article.title}
                      </h3>

                      <div className="my-8 h-px w-full bg-black/8" />

                      <p className="text-sm font-light leading-[1.8] text-black/55">
                        {article.excerpt}
                      </p>

                      <div className="mt-8">
                        <p className="text-sm text-black/60">
                          Leer más →
                        </p>

                        <div className="mt-4 h-px w-12 bg-[#c96a1b]/40" />
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}