import GlassCard from "@/components/ui/GlassCard";
import PageHero from "@/components/sections/PageHero";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";

const content = [
  {
    type: "Artículo",
    title: "Planeación tributaria para empresas que piensan a largo plazo",
  },
  {
    type: "Informe",
    title: "Riesgos financieros que deben anticipar las compañías en Colombia",
  },
  {
    type: "Podcast",
    title: "El contador como auditor, estratega y arquitecto empresarial",
  },
  {
    type: "Caso de éxito",
    title: "Cómo una estructura financiera correcta protege el crecimiento",
  },
];

export default function InteligenciaPage() {
  return (
    <main className="relative bg-black text-white min-h-screen overflow-hidden">
      <Navbar />

      <PageHero
        eyebrow="Centro de Inteligencia"
        title="Conocimiento estratégico para anticipar escenarios empresariales."
        description="Artículos, informes, podcast y análisis diseñados para empresarios, contadores y líderes que toman decisiones de alto impacto."
      />

      <section className="relative z-10 pb-32 overflow-hidden">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <GlassCard className="min-h-[260px] flex flex-col justify-between">
                  <div>
                    <p className="uppercase tracking-[0.3em] text-xs text-[#c96a1b] mb-8">
                      {item.type}
                    </p>

                    <h3 className="text-3xl font-semibold tracking-[-0.03em] leading-[1.05]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-white/40 mt-10">
                    Leer más →
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}