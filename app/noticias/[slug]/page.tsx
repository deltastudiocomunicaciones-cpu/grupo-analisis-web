import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type NewsBlock =
  | string
  | {
      type:
        | "lead"
        | "paragraph"
        | "heading"
        | "subheading"
        | "quote"
        | "list"
        | "callout"
        | "cta";
      text?: string;
      title?: string;
      items?: string[];
      href?: string;
      label?: string;
      button?: string;
      id?: string;
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

function getNewsArticle(slug: string) {
  return articles.find(
    (article) => article.slug === slug && article.type === "news"
  );
}

export async function generateStaticParams() {
  return articles
    .filter((article) => article.type === "news")
    .map((article) => ({
      slug: article.slug,
    }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) {
    return {
      title: "Noticia no encontrada | Grupo A&C",
    };
  }

  return {
    title: article.seoTitle ?? `${article.title} | Noticias Grupo A&C`,
    description: article.seoDescription ?? article.excerpt,
    alternates: {
      canonical: `/noticias/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `/noticias/${article.slug}`,
      type: "article",
      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

function NewsContentRenderer({ content }: { content: NewsBlock[] }) {
  if (!content || content.length === 0) {
    return (
      <p className="text-lg font-light leading-[1.95] text-black/65">
        Esta noticia se encuentra en proceso de edición por la Mesa Editorial de
        Grupo A&C.
      </p>
    );
  }

  return (
    <div className="space-y-8">
      {content.map((block, index) => {
        if (typeof block === "string") {
          return (
            <p
              key={index}
              className="text-lg font-light leading-[1.95] text-black/68"
            >
              {block}
            </p>
          );
        }

        if (block.type === "lead") {
          return (
            <p
              key={index}
              className="border-l-2 border-[#c96a1b] pl-6 text-2xl font-light leading-[1.65] tracking-[-0.025em] text-black/78"
            >
              {block.text}
            </p>
          );
        }

        if (block.type === "paragraph") {
          return (
            <p
              key={index}
              className="text-lg font-light leading-[1.95] text-black/68"
            >
              {block.text}
            </p>
          );
        }

        if (block.type === "heading") {
          return (
            <h2
              key={index}
              id={block.id}
              className="pt-8 text-3xl font-semibold leading-[1.12] tracking-[-0.045em] text-black md:text-4xl"
            >
              {block.text ?? block.title}
            </h2>
          );
        }

        if (block.type === "subheading") {
          return (
            <h3
              key={index}
              id={block.id}
              className="pt-4 text-2xl font-semibold leading-[1.2] tracking-[-0.035em] text-black/85"
            >
              {block.text ?? block.title}
            </h3>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote
              key={index}
              className="rounded-[2rem] border border-black/10 bg-[#f5f2eb] p-8"
            >
              <p className="text-2xl font-light leading-[1.55] tracking-[-0.035em] text-black/75">
                “{block.text}”
              </p>
            </blockquote>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={index} className="space-y-4">
              {block.items?.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 text-lg font-light leading-[1.8] text-black/65"
                >
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c96a1b]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === "callout") {
          return (
            <div
              key={index}
              className="rounded-[2rem] border border-[#c96a1b]/20 bg-[#c96a1b]/10 p-8"
            >
              {block.title && (
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#c96a1b]">
                  {block.title}
                </p>
              )}

              <p className="text-lg font-light leading-[1.85] text-black/70">
                {block.text}
              </p>
            </div>
          );
        }

        if (block.type === "cta") {
          return (
            <div key={index} className="rounded-[2rem] bg-black p-8 text-white">
              <p className="text-2xl font-semibold tracking-[-0.04em]">
                {block.title}
              </p>

              {block.text && (
                <p className="mt-4 max-w-2xl text-sm font-light leading-[1.8] text-white/55">
                  {block.text}
                </p>
              )}

              {block.href && (
                <Link
                  href={block.href}
                  className="mt-6 inline-flex rounded-full bg-[#c96a1b] px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#a95616]"
                >
                  {block.button ?? block.label ?? "Conocer más"}
                </Link>
              )}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}

export default async function NoticiaDetallePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) {
    notFound();
  }

  const sourceName = article.sourceName ?? "Grupo A&C";
  const sourceTitle = article.sourceTitle ?? article.title;

  const attributionNote =
    article.attributionNote ??
    `Esta nota fue elaborada por la Mesa Editorial de Grupo A&C a partir de información disponible de ${sourceName}. El contenido ha sido redactado, contextualizado y organizado editorialmente para fines informativos.`;

  const relatedNews = articles
    .filter(
      (item) =>
        item.type === "news" &&
        item.slug !== article.slug &&
        item.category === article.category
    )
    .slice(0, 3);

  const fallbackRelatedNews = articles
    .filter((item) => item.type === "news" && item.slug !== article.slug)
    .slice(0, 3);

  const finalRelatedNews =
    relatedNews.length > 0 ? relatedNews : fallbackRelatedNews;

  return (
    <main className="min-h-screen bg-[#f5f2eb] text-black">
      <Navbar />

      {/* HERO DE NOTICIA */}
      <section className="relative overflow-hidden bg-black px-6 pt-44 pb-20 text-white">
        <img
          src={article.coverImage}
          alt={article.title}
          className="absolute inset-0 h-full w-full object-cover opacity-45 brightness-75"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <Link
                href="/noticias"
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/60 transition-all duration-300 hover:border-[#c96a1b]/50 hover:text-white"
              >
                Noticias
              </Link>

              <span className="rounded-full bg-[#c96a1b] px-4 py-2 text-xs uppercase tracking-[0.25em] text-white">
                {article.category}
              </span>

              {article.newsLabel && (
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/60">
                  {article.newsLabel}
                </span>
              )}
            </div>

            <h1 className="max-w-6xl text-5xl font-semibold leading-[0.98] tracking-[-0.065em] md:text-7xl">
              {article.title}
            </h1>

            <p className="mt-8 max-w-4xl text-xl font-light leading-[1.8] text-white/62">
              {article.excerpt}
            </p>

            <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-white/42">
              <span>{formatDate(article.date)}</span>
              <span>·</span>
              <span>{article.author ?? "Mesa Editorial Grupo A&C"}</span>
              <span>·</span>
              <span>{article.readTime}</span>
              <span>·</span>
              <span>Fuente: {sourceName}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CUERPO */}
      <section className="bg-[#f5f2eb] px-6 py-20 text-black">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.75fr_1.45fr]">
          {/* SIDEBAR FUENTE */}
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <div className="rounded-[2.2rem] border border-black/10 bg-white/75 p-7 shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
                <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#c96a1b]">
                  Protocolo de fuente
                </p>

                <div className="space-y-6">
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.24em] text-black/35">
                      Fuente original
                    </p>
                    <p className="mt-2 text-lg font-medium tracking-[-0.025em] text-black/75">
                      {sourceName}
                    </p>
                  </div>

                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.24em] text-black/35">
                      Documento o publicación base
                    </p>
                    <p className="mt-2 text-sm font-light leading-[1.7] text-black/60">
                      {sourceTitle}
                    </p>
                  </div>

                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.24em] text-black/35">
                      Fecha de publicación
                    </p>
                    <p className="mt-2 text-sm text-black/60">
                      {formatDate(article.date)}
                    </p>
                  </div>

                  {article.sourceUrl && (
                    <a
                      href={article.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#c96a1b]"
                    >
                      Ver fuente original ↗
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          </aside>

          {/* ARTÍCULO */}
          <article>
            <Reveal delay={0.1}>
              <div className="mb-10 rounded-[2.2rem] border border-[#c96a1b]/20 bg-white/80 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.06)]">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c96a1b]">
                  Nota de atribución
                </p>

                <p className="text-sm font-light leading-[1.9] text-black/62">
                  {attributionNote}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="rounded-[2.6rem] border border-black/10 bg-white p-8 shadow-[0_30px_100px_rgba(0,0,0,0.08)] md:p-12">
                <NewsContentRenderer
                  content={(article.content ?? []) as NewsBlock[]}
                />

                <div className="mt-14 border-t border-black/10 pt-8">
                  <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#c96a1b]">
                    Fuente original
                  </p>

                  <p className="text-sm font-light leading-[1.8] text-black/58">
                    {sourceName} — {sourceTitle}
                  </p>

                  {article.sourceUrl && (
                    <a
                      href={article.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex text-sm font-medium text-black/70 transition-colors duration-300 hover:text-[#c96a1b]"
                    >
                      Consultar publicación original ↗
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          </article>
        </div>
      </section>

      {/* RELACIONADAS */}
      {finalRelatedNews.length > 0 && (
        <section className="bg-[#eee6da] px-6 py-24 text-black">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 border-b border-black/10 pb-6">
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
                Más contexto
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
                Noticias relacionadas
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {finalRelatedNews.map((item, index) => (
                <Reveal key={item.slug} delay={index * 0.06}>
                  <Link href={`/noticias/${item.slug}`} className="group">
                    <article className="h-full rounded-[2rem] border border-black/10 bg-white/75 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-[#c96a1b]/35">
                      <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#c96a1b]">
                        {item.category}
                      </p>

                      <h3 className="text-2xl font-semibold leading-[1.1] tracking-[-0.04em] transition-colors duration-300 group-hover:text-[#c96a1b]">
                        {item.title}
                      </h3>

                      <p className="mt-5 text-sm font-light leading-[1.75] text-black/55">
                        {item.excerpt}
                      </p>

                      <div className="mt-7 flex flex-wrap gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-black/35">
                        <span>{formatDate(item.date)}</span>
                        <span>·</span>
                        <span>{item.readTime}</span>
                      </div>
                    </article>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}