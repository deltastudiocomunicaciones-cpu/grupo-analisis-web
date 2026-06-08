import Link from "next/link";
import { getRelatedArticles } from "@/lib/getRelatedArticles";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { articles } from "@/data/articles";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article);


  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO */}

      <section className="relative pt-44 pb-20">
        <div className="mx-auto max-w-4xl px-6">

          <p className="text-sm uppercase tracking-[0.3em] text-[#c96a1b]">
            {article.category}   
          </p>

          <div className="mt-8 h-px w-20 bg-[#c96a1b]/50" />

          <h1 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
            {article.title}
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-white/55">
            {article.excerpt}
          </p>

          <div className="mt-10 flex gap-6 text-sm text-white/40">
            <span>{article.author}</span>
            <span>{article.date}</span>
            <span>{article.readTime}</span>
          </div>

          {article.tags && (
  <div className="mt-10 flex flex-wrap gap-3">
    {article.tags.map((tag) => (
      <Link
  key={tag}
  href={`/inteligencia/tag/${encodeURIComponent(tag)}`}
  className="
    rounded-full
    border
    border-[#c96a1b]/25
    bg-[#c96a1b]/10
    px-4
    py-2
    text-xs
    uppercase
    tracking-[0.2em]
    text-[#c96a1b]
    transition-all
    duration-500
    hover:bg-[#c96a1b]
    hover:text-white
  "
>
  {tag}
</Link>
    ))}
  </div>
)}

        </div>
      </section>

      {/* COVER */}

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6">

          <img
  src={article.coverImage}
  alt={article.title}
  className="
    h-[560px]
    w-full
    rounded-[2.5rem]
    object-cover
    shadow-[0_35px_120px_rgba(0,0,0,0.45)]
  "
/>

        </div>
      </section>

      {/* CONTENT */}
<section className="bg-[#f5f2eb] px-6 py-32 text-black">
  <div className="mx-auto max-w-3xl">
    <div className="mb-12 h-px w-20 bg-[#c96a1b]/50" />

    <div className="space-y-8 text-xl font-light leading-[2] text-black/70">
      {article.content.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>

    <div className="mt-16 border-t border-black/10 pt-10">
      <a
        href="/inteligencia"
        className="
          inline-flex
          rounded-full
          border
          border-[#c96a1b]/30
          bg-[#c96a1b]/10
          px-6
          py-3
          text-sm
          text-[#c96a1b]
          transition-all
          duration-500
          hover:bg-[#c96a1b]
          hover:text-white
          hover:shadow-[0_20px_60px_rgba(201,106,27,0.2)]
        "
      >
        Volver a Artículos
      </a>
    </div>
  </div>
</section>

{/* RELATED ARTICLES */}

{relatedArticles.length > 0 && (
  <section className="bg-[#f5f2eb] px-6 pb-32 text-black">
    <div className="mx-auto max-w-6xl border-t border-black/10 pt-16">

      <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
        Lecturas relacionadas
      </p>

      <h2 className="mb-12 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
        También podría interesarte
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {relatedArticles.map((related) => (
          <Link
            key={related.slug}
            href={`/inteligencia/${related.slug}`}
          >
            <article
              className="
                h-full
                rounded-[2rem]
                border
                border-black/10
                bg-white
                p-8
                shadow-[0_25px_80px_rgba(0,0,0,0.08)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#c96a1b]/30
              "
            >
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#c96a1b]">
                {related.category}
              </p>

              <h3 className="text-2xl font-semibold leading-tight tracking-[-0.04em]">
                {related.title}
              </h3>

              <p className="mt-6 text-sm font-light leading-[1.8] text-black/55">
                {related.excerpt}
              </p>

              <p className="mt-8 text-sm text-black/60">
                Leer más →
              </p>
            </article>
          </Link>
        ))}
      </div>

    </div>
  </section>
)}
      <Footer />

    </main>
  );
}