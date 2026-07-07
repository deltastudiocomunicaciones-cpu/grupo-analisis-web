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

<section className="relative overflow-hidden pt-44 pb-28">

  {/* Imagen editorial */}

  <div className="absolute inset-0">
    <img
      src={article.coverImage}
      alt={article.title}
      className="h-full w-full object-cover"
    />

    <div className="absolute inset-0 bg-black/10" />

    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />

    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
  </div>

  {/* Contenido */}

  <div className="relative z-10 mx-auto max-w-4xl px-6">

    <p className="text-sm uppercase tracking-[0.3em] text-[#c96a1b]">
      {article.category}
    </p>

    <div className="mt-8 h-px w-20 bg-[#c96a1b]/50" />

    <h1 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
      {article.title}
    </h1>

    <p className="mt-8 max-w-3xl text-xl text-white/65">
      {article.excerpt}
    </p>

    <div className="mt-10 flex gap-6 text-sm text-white/50">
      <span>{article.author}</span>
      <span>{article.date}</span>
      <span>{article.readTime}</span>
    </div>

    {article.tags && (
      <div className="mt-10 flex flex-wrap gap-3">
        {article.tags.map((tag) => (
          <span
            key={tag}
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
            "
          >
            {tag}
          </span>
        ))}
      </div>
    )}

  </div>
</section>

      

      {/* CONTENT */}
<section className="bg-[#f5f2eb] px-6 py-32 text-black">
  <div className="mx-auto max-w-3xl">
    <div className="mb-12 h-px w-20 bg-[#c96a1b]/50" />

    <div className="space-y-10">
  {article.content.map((block, index) => {
    if (typeof block === "string") {
      return (
        <p
          key={index}
          className="text-xl font-light leading-[2] text-black/70"
        >
          {block}
        </p>
      );
    }

    if (block.type === "lead") {
      return (
        <p
          key={index}
          className="
            border-l-2
            border-[#c96a1b]
            pl-8
            text-2xl
            font-light
            leading-[1.8]
            tracking-[-0.02em]
            text-black/80
            md:text-3xl
          "
        >
          {block.text}
        </p>
      );
    }

    if (block.type === "paragraph") {
      return (
        <p
          key={index}
          className="text-xl font-light leading-[2] text-black/70"
        >
          {block.text}
        </p>
      );
    }

    if (block.type === "heading") {
      return (
        <h2
          key={index}
          className="
            pt-10
            text-4xl
            font-semibold
            leading-[1.05]
            tracking-[-0.05em]
            text-black
            md:text-5xl
          "
        >
          {block.text}
        </h2>
      );
    }

    if (block.type === "subheading") {
      return (
        <h3
          key={index}
          className="
            pt-6
            text-2xl
            font-semibold
            leading-[1.2]
            tracking-[-0.04em]
            text-black
            md:text-3xl
          "
        >
          {block.text}
        </h3>
      );
    }

    if (block.type === "quote") {
      return (
        <blockquote
          key={index}
          className="
            my-16
            border-y
            border-[#c96a1b]/25
            py-12
            text-4xl
            font-semibold
            leading-[1.1]
            tracking-[-0.05em]
            text-black
            md:text-5xl
          "
        >
          “{block.text}”
        </blockquote>
      );
    }

    if (block.type === "list") {
      return (
        <ul key={index} className="space-y-4">
          {block.items.map((item, itemIndex) => (
            <li
              key={itemIndex}
              className="
                flex
                gap-4
                rounded-2xl
                border
                border-black/10
                bg-white/70
                p-5
                text-lg
                font-light
                leading-[1.7]
                text-black/70
                shadow-[0_18px_50px_rgba(0,0,0,0.04)]
              "
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
          className="
            my-14
            rounded-[2rem]
            border
            border-[#c96a1b]/20
            bg-[#c96a1b]/10
            p-8
            shadow-[0_25px_80px_rgba(201,106,27,0.08)]
            md:p-10
          "
        >
          {block.title && (
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c96a1b]">
              {block.title}
            </p>
          )}

          <p className="text-2xl font-light leading-[1.6] tracking-[-0.03em] text-black/75">
            {block.text}
          </p>
        </div>
      );
    }

    if (block.type === "cta") {
      return (
        <div
          key={index}
          className="
            mt-20
            rounded-[2.5rem]
            bg-black
            p-10
            text-white
            shadow-[0_30px_100px_rgba(0,0,0,0.18)]
            md:p-14
          "
        >
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
            Grupo A&C
          </p>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] md:text-5xl">
            {block.title}
          </h2>

          <p className="mt-6 max-w-2xl text-lg font-light leading-[1.8] text-white/60">
            {block.text}
          </p>

          <Link
            href={block.href}
            className="
              mt-8
              inline-flex
              rounded-full
              border
              border-[#c96a1b]/40
              bg-[#c96a1b]/15
              px-7
              py-4
              text-sm
              text-[#c96a1b]
              transition-all
              duration-500
              hover:bg-[#c96a1b]
              hover:text-white
              hover:shadow-[0_20px_70px_rgba(201,106,27,0.28)]
            "
          >
            {block.button}
          </Link>
        </div>
      );
    }

    return null;
  })}
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