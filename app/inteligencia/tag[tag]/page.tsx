import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { articles } from "@/data/articles";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    tag: string;
  }>;
}

export default async function TagPage({ params }: PageProps) {
  const { tag } = await params;

  const decodedTag = decodeURIComponent(tag);

  const taggedArticles = articles.filter((article) =>
    article.tags?.some(
      (articleTag) =>
        articleTag.toLowerCase() === decodedTag.toLowerCase()
    )
  );

  if (taggedArticles.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="px-6 pt-44 pb-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-xs uppercase tracking-[0.45em] text-[#c96a1b]">
            Inteligencia editorial · Tema
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
            {decodedTag}
          </h1>

          <p className="mt-8 max-w-3xl text-lg font-light leading-[1.9] text-white/55">
            Lecturas, noticias y análisis asociados a {decodedTag}.
          </p>
        </div>
      </section>

      <section className="bg-[#f5f2eb] px-6 py-32 text-black">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 border-b border-black/10 pb-6">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
              Biblioteca relacionada
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Contenido asociado
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {taggedArticles.map((article) => (
              <Link key={article.slug} href={`/inteligencia/${article.slug}`}>
                <article className="h-full rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_25px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#c96a1b]/30">
                  <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#c96a1b]">
                    {article.category}
                  </p>

                  <h3 className="text-2xl font-semibold leading-tight tracking-[-0.04em]">
                    {article.title}
                  </h3>

                  <p className="mt-6 text-sm font-light leading-[1.8] text-black/55">
                    {article.excerpt}
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

      <Footer />
    </main>
  );
}