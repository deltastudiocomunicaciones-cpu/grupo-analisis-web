import Link from "next/link";
import { articles } from "@/data/articles";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";

export default function NoticiasPage() {
  const newsArticles = articles.filter((article) => article.type === "news");

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="relative overflow-hidden px-6 pt-44 pb-28">
        <img
          src="https://images.unsplash.com/photo-1495020689067-958852a7765e"
          alt="Noticias Grupo A&C"
          className="absolute inset-0 h-full w-full object-cover brightness-75"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-[#c96a1b]">
              Noticias · Actualidad empresarial
            </p>

            <h1 className="max-w-6xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl lg:text-[6.8rem]">
              Señales del entorno para empresas que necesitan anticiparse.
            </h1>

            <p className="mt-10 max-w-3xl text-lg font-light leading-[1.9] text-white/55">
              Actualidad tributaria, financiera, tecnológica y corporativa interpretada
              desde el criterio estratégico de Grupo Análisis & Consultorías.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f5f2eb] px-6 py-32 text-black">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 border-b border-black/10 pb-6">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
              Radar de actualidad
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Últimas noticias
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles.map((article, index) => (
              <Reveal key={article.slug} delay={index * 0.06}>
                <Link href={`/inteligencia/${article.slug}`}>
                  <GlassCard className="flex h-[430px] flex-col justify-between rounded-[2.5rem] border border-black/10 bg-white/85 shadow-[0_25px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#c96a1b]/30 hover:shadow-[0_35px_100px_rgba(0,0,0,0.12)]">
                    <div>
                      <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#c96a1b]">
                        {article.category}
                      </p>

                      <div className="mb-8 h-px w-16 bg-[#c96a1b]/50" />

                      <h3 className="text-3xl font-semibold leading-[1.05] tracking-[-0.045em]">
                        {article.title}
                      </h3>

                      <p className="mt-8 text-sm font-light leading-[1.8] text-black/55">
                        {article.excerpt}
                      </p>
                    </div>

                    <div>
                      <div className="mb-5 flex gap-3 text-xs uppercase tracking-[0.22em] text-black/35">
                        <span>{article.date}</span>
                        <span>·</span>
                        <span>{article.readTime}</span>
                      </div>

                      <p className="text-sm text-black/60">Leer noticia →</p>
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