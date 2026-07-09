import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/data/articles";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Noticias empresariales, tributarias y financieras",
  description:
    "Actualidad empresarial de Grupo A&C sobre temas tributarios, financieros, contables, tecnológicos y corporativos para empresas en Colombia.",
  alternates: {
    canonical: "/noticias",
  },
  openGraph: {
  title: "Noticias empresariales, tributarias y financieras | Grupo A&C",
  description:
    "Noticias, novedades y actualidad empresarial para organizaciones que necesitan información clara para tomar mejores decisiones.",
  url: "https://www.grupoayc.co/noticias",
  type: "website",
  siteName: "Grupo A&C",
  locale: "es_CO",
  images: [
    {
      url: "https://www.grupoayc.co/og/grupo-ayc-og-v2.jpg",
      width: 1200,
      height: 630,
      alt: "Noticias empresariales Grupo A&C",
    },
  ],
},
twitter: {
  card: "summary_large_image",
  title: "Noticias empresariales, tributarias y financieras | Grupo A&C",
  description:
    "Noticias, novedades y actualidad empresarial para organizaciones que necesitan información clara para tomar mejores decisiones.",
  images: ["https://www.grupoayc.co/og/grupo-ayc-og-v2.jpg"],
},
};

function formatDate(date?: string) {
  if (!date) return "Fecha por definir";

  const cleanDate = date.trim();

  const isIsoDate = /^\d{4}-\d{2}-\d{2}$/.test(cleanDate);

  if (!isIsoDate) {
    return cleanDate;
  }

  const [year, month, day] = cleanDate.split("-").map(Number);
  const parsedDate = new Date(year, month - 1, day);

  if (Number.isNaN(parsedDate.getTime())) {
    return cleanDate;
  }

  return new Intl.DateTimeFormat("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsedDate);
}

function getDateTimeValue(date?: string) {
  if (!date) return 0;

  const cleanDate = date.trim();
  const isIsoDate = /^\d{4}-\d{2}-\d{2}$/.test(cleanDate);

  if (!isIsoDate) return 0;

  const [year, month, day] = cleanDate.split("-").map(Number);
  const parsedDate = new Date(year, month - 1, day);

  if (Number.isNaN(parsedDate.getTime())) return 0;

  return parsedDate.getTime();
}

export default function NoticiasPage() {
  const newsArticles = articles
    .filter((article) => article.type === "news")
    .sort((a, b) => getDateTimeValue(b.date) - getDateTimeValue(a.date));

  const featuredNews =
    newsArticles.find((article) => article.featured) ?? newsArticles[0];

  const remainingNews = newsArticles.filter(
    (article) => article.slug !== featuredNews?.slug
  );

  const secondaryNews = remainingNews.slice(0, 4);
  const gridNews = remainingNews.slice(4);

  const categories = Array.from(
    new Set(newsArticles.map((article) => article.category).filter(Boolean))
  );

  const latestDate = featuredNews?.date
    ? formatDate(featuredNews.date)
    : "Actualidad empresarial";

  return (
    <main className="min-h-screen bg-[#f5f2eb] text-black">
      <Navbar />

      {/* HERO EDITORIAL */}
      <section className="relative overflow-hidden bg-black px-6 pt-44 pb-24 text-white">
        <img
          src="https://images.unsplash.com/photo-1495020689067-958852a7765e"
          alt="Noticias Grupo A&C"
          className="absolute inset-0 h-full w-full object-cover opacity-90 brightness-95"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-black/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black" />

        <div className="absolute left-0 top-0 h-full w-full opacity-[0.01]">
          <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-[#c96a1b]">
              Noticias · Actualidad empresarial
            </p>

            <h1 className="max-w-6xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl lg:text-[6.8rem]">
              Señales del entorno para empresas que necesitan anticiparse.
            </h1>

            <p className="mt-10 max-w-3xl text-lg font-light leading-[1.9] text-white/60">
              Actualidad tributaria, financiera, tecnológica y corporativa
              interpretada desde el criterio estratégico de Grupo Análisis &
              Consultorías.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BARRA EDITORIAL */}
      <section className="border-b border-black/10 bg-[#f5f2eb] px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-black/40">
              Radar editorial
            </p>
            <p className="mt-2 text-sm text-black/65">
              Actualizado: {latestDate} · Mesa Editorial Grupo A&C
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-black/10 bg-black px-4 py-2 text-xs uppercase tracking-[0.22em] text-white">
              Todas
            </span>

            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.22em] text-black/55"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {newsArticles.length === 0 ? (
        <section className="bg-[#f5f2eb] px-6 py-28 text-black">
          <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-black/10 bg-white/80 p-10 text-center shadow-[0_30px_100px_rgba(0,0,0,0.08)] md:p-14">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
              Noticias en preparación
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Aún no hay noticias publicadas.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-sm font-light leading-[1.9] text-black/55">
              El micrositio ya está listo. Para activar la portada editorial,
              agrega contenidos en <strong>data/articles.ts</strong> con{" "}
              <strong>type: "news"</strong>.
            </p>
          </div>
        </section>
      ) : (
        <>
          {/* BLOQUE PRINCIPAL TIPO AGENCIA */}
          <section className="bg-[#f5f2eb] px-6 py-20 text-black">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1.4fr_0.8fr]">
              {/* NOTICIA PRINCIPAL */}
              {featuredNews && (
                <Reveal>
                  <Link href={`/noticias/${featuredNews.slug}`} className="group">
                    <article className="overflow-hidden rounded-[2.8rem] border border-black/10 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.10)]">
                      <div className="relative h-[420px] overflow-hidden">
                        <img
                          src={featuredNews.coverImage}
                          alt={featuredNews.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                        <div className="absolute bottom-8 left-8 right-8">
                          <div className="mb-5 flex flex-wrap items-center gap-3">
                            <span className="rounded-full bg-[#c96a1b] px-4 py-2 text-xs uppercase tracking-[0.25em] text-white">
                              {featuredNews.newsLabel ?? "Noticia principal"}
                            </span>

                            <span className="rounded-full bg-white/15 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white backdrop-blur-md">
                              {featuredNews.category}
                            </span>
                          </div>

                          <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-white md:text-6xl">
                            {featuredNews.title}
                          </h2>
                        </div>
                      </div>

                      <div className="p-8 md:p-10">
                        <p className="max-w-3xl text-lg font-light leading-[1.8] text-black/60">
                          {featuredNews.excerpt}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-black/40">
                          <span>{formatDate(featuredNews.date)}</span>
                          <span>·</span>
                          <span>{featuredNews.readTime}</span>
                          <span>·</span>
                          <span>
                            Fuente: {featuredNews.sourceName ?? "Grupo A&C"}
                          </span>
                        </div>

                        <p className="mt-8 text-sm font-medium text-black/70 transition-colors duration-300 group-hover:text-[#c96a1b]">
                          Leer noticia completa →
                        </p>
                      </div>
                    </article>
                  </Link>
                </Reveal>
              )}

              {/* TITULARES SECUNDARIOS */}
              <aside className="space-y-6">
                <Reveal delay={0.1}>
                  <div className="border-b border-black/10 pb-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
                      Titulares
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-[-0.045em]">
                      Últimas señales
                    </h3>
                  </div>
                </Reveal>

                {secondaryNews.length > 0 ? (
                  secondaryNews.map((article, index) => (
                    <Reveal key={article.slug} delay={index * 0.06}>
                      <Link href={`/noticias/${article.slug}`} className="group">
                        <article className="border-b border-black/10 pb-6 transition-all duration-300 group-hover:border-[#c96a1b]/40">
                          <div className="mb-4 flex items-center gap-3">
                            <span className="text-xs uppercase tracking-[0.25em] text-[#c96a1b]">
                              {article.category}
                            </span>
                            <span className="h-1 w-1 rounded-full bg-black/30" />
                            <span className="text-xs uppercase tracking-[0.22em] text-black/35">
                              {article.readTime}
                            </span>
                          </div>

                          <h4 className="text-2xl font-semibold leading-[1.1] tracking-[-0.04em] transition-colors duration-300 group-hover:text-[#c96a1b]">
                            {article.title}
                          </h4>

                          <p className="mt-4 text-sm font-light leading-[1.7] text-black/55">
                            {article.excerpt}
                          </p>

                          <div className="mt-5 flex flex-wrap gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-black/35">
                            <span>{formatDate(article.date)}</span>
                            <span>·</span>
                            <span>
                              Fuente: {article.sourceName ?? "Grupo A&C"}
                            </span>
                          </div>
                        </article>
                      </Link>
                    </Reveal>
                  ))
                ) : (
                  <div className="rounded-[2rem] border border-black/10 bg-white/70 p-7">
                    <p className="text-sm font-light leading-[1.8] text-black/55">
                      Pronto aparecerán más titulares secundarios en esta
                      sección.
                    </p>
                  </div>
                )}
              </aside>
            </div>
          </section>

          {/* FRANJA DE ACTUALIDAD */}
          <section className="bg-black px-6 py-8 text-white">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
                Actualidad curada
              </p>

              <p className="max-w-4xl text-sm font-light leading-[1.8] text-white/60">
                Las noticias publicadas en este espacio son seleccionadas,
                verificadas y contextualizadas por la Mesa Editorial de Grupo
                A&C con enfoque empresarial, tributario, financiero y
                tecnológico.
              </p>
            </div>
          </section>

          {/* GRID DE NOTICIAS */}
          <section className="bg-[#f5f2eb] px-6 py-28 text-black">
            <div className="mx-auto max-w-7xl">
              <div className="mb-14 flex flex-col gap-5 border-b border-black/10 pb-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
                    Radar de actualidad
                  </p>

                  <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
                    Más noticias
                  </h2>
                </div>

                <p className="max-w-xl text-sm font-light leading-[1.8] text-black/50">
                  Información relevante para empresarios, contadores, directivos
                  y organizaciones que necesitan leer el entorno con criterio.
                </p>
              </div>

              {gridNews.length > 0 ? (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {gridNews.map((article, index) => (
                    <Reveal key={article.slug} delay={index * 0.06}>
                      <Link href={`/noticias/${article.slug}`} className="group">
                        <GlassCard className="flex h-full min-h-[520px] flex-col overflow-hidden rounded-[2.5rem] border border-black/10 bg-white/85 shadow-[0_25px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#c96a1b]/30 hover:shadow-[0_35px_100px_rgba(0,0,0,0.12)]">
                          <div className="relative h-56 overflow-hidden">
                            <img
                              src={article.coverImage}
                              alt={article.title}
                              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />

                            <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.22em] text-black">
                              {article.category}
                            </span>
                          </div>

                          <div className="flex flex-1 flex-col justify-between p-7">
                            <div>
                              <div className="mb-6 h-px w-16 bg-[#c96a1b]/50" />

                              <h3 className="text-2xl font-semibold leading-[1.08] tracking-[-0.045em] transition-colors duration-300 group-hover:text-[#c96a1b]">
                                {article.title}
                              </h3>

                              <p className="mt-6 text-sm font-light leading-[1.8] text-black/55">
                                {article.excerpt}
                              </p>
                            </div>

                            <div className="mt-8">
                              <div className="mb-5 flex flex-wrap gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-black/35">
                                <span>{formatDate(article.date)}</span>
                                <span>·</span>
                                <span>{article.readTime}</span>
                              </div>

                              <div className="mb-5 rounded-2xl border border-black/10 bg-[#f5f2eb] px-4 py-3">
                                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-black/35">
                                  Fuente
                                </p>
                                <p className="mt-1 text-sm text-black/65">
                                  {article.sourceName ?? "Grupo A&C"}
                                </p>
                              </div>

                              <p className="text-sm text-black/60 transition-colors duration-300 group-hover:text-[#c96a1b]">
                                Leer noticia →
                              </p>
                            </div>
                          </div>
                        </GlassCard>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              ) : (
                <div className="rounded-[2rem] border border-black/10 bg-white/70 p-10 text-center">
                  <p className="text-sm font-light leading-[1.8] text-black/55">
                    Cuando haya más noticias disponibles, aparecerán en este
                    radar editorial.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* BLOQUE DE CATEGORÍAS */}
          <section className="bg-[#eee6da] px-6 py-28 text-black">
            <div className="mx-auto max-w-7xl">
              <div className="mb-14 max-w-3xl">
                <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
                  Categorías
                </p>

                <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
                  Lectura del entorno por áreas estratégicas.
                </h2>

                <p className="mt-6 text-sm font-light leading-[1.9] text-black/55">
                  Organizamos la actualidad por temas para facilitar la lectura
                  empresarial: tributario, financiero, tecnología, normativa,
                  gestión corporativa y transformación contable.
                </p>
              </div>

              {categories.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                  {categories.map((category, index) => {
                    const count = newsArticles.filter(
                      (article) => article.category === category
                    ).length;

                    return (
                      <Reveal key={category} delay={index * 0.05}>
                        <div className="rounded-[2rem] border border-black/10 bg-white/70 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                          <p className="text-xs uppercase tracking-[0.28em] text-[#c96a1b]">
                            {category}
                          </p>

                          <h3 className="mt-8 text-3xl font-semibold tracking-[-0.045em]">
                            {count}
                          </h3>

                          <p className="mt-2 text-sm font-light leading-[1.7] text-black/50">
                            {count === 1
                              ? "noticia publicada"
                              : "noticias publicadas"}
                          </p>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              ) : (
                <div className="rounded-[2rem] border border-black/10 bg-white/70 p-10">
                  <p className="text-sm font-light leading-[1.8] text-black/55">
                    Las categorías aparecerán cuando se publiquen noticias.
                  </p>
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {/* CTA EDITORIAL */}
      <section className="bg-black px-6 py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.04] p-10 md:p-14">
              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
                Mesa Editorial Grupo A&C
              </p>

              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.055em] md:text-6xl">
                Información para decidir, no ruido para acumular.
              </h2>

              <p className="mt-8 max-w-3xl text-base font-light leading-[1.9] text-white/55">
                Nuestro radar de noticias está diseñado para convertir la
                actualidad empresarial en señales comprensibles para la toma de
                decisiones estratégicas.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contacto"
                  className="rounded-full bg-[#c96a1b] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#a95616]"
                >
                  Hablar con un asesor
                </Link>

                <Link
                  href="/inteligencia"
                  className="rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white/75 transition-all duration-300 hover:border-[#c96a1b]/60 hover:text-white"
                >
                  Ver artículos editoriales
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