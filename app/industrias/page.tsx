import GlassCard from "@/components/ui/GlassCard";
import PageHero from "@/components/sections/PageHero";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";

const industries = [
  {
    title: "Minería",
    description:
      "Estructuras tributarias, financieras y corporativas para operaciones de alta complejidad.",
  },
  {
    title: "Construcción",
    description:
      "Planeación, control financiero y acompañamiento estratégico para proyectos inmobiliarios y de infraestructura.",
  },
  {
    title: "Alto Patrimonio",
    description:
      "Protección, sucesión y arquitectura patrimonial para familias empresarias y propietarios.",
  },
  {
    title: "Empresas Medianas",
    description:
      "Evolución administrativa, financiera y tributaria para compañías en crecimiento.",
  },
];

export default function IndustriasPage() {
  return (
    <main className="relative bg-black text-white min-h-screen overflow-hidden">
      <Navbar />

      <PageHero
        eyebrow="Industrias"
        title="Sectores donde la estrategia financiera define el futuro."
        description="Acompañamos empresas y patrimonios en industrias donde cada decisión tributaria, financiera y corporativa tiene impacto real."
      />

      <section className="relative z-10 pb-32 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Reveal key={industry.title} delay={index * 0.08}>
                <GlassCard>
                  <h3 className="text-3xl font-semibold tracking-[-0.03em] mb-6">
                    {industry.title}
                  </h3>

                  <p className="text-white/55 leading-[1.9] font-light">
                    {industry.description}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}