import GlassCard from "@/components/ui/GlassCard";
import PageHero from "@/components/sections/PageHero";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";

const services = [
  {
    title: "Planeación Tributaria",
    description:
      "Estructuras fiscales diseñadas para proteger patrimonio y optimizar cargas tributarias.",
  },
  {
    title: "Protección Patrimonial",
    description:
      "Arquitectura corporativa para empresas y familias con visión de largo plazo.",
  },
  {
    title: "Auditoría Estratégica",
    description:
      "Diagnóstico financiero y contable orientado a control y evolución empresarial.",
  },
  {
    title: "Consultoría Financiera",
    description:
      "Análisis estructural para decisiones de expansión, sostenibilidad y eficiencia.",
  },
  {
    title: "Implementación ERP",
    description:
      "Integración del ecosistema SADI para automatización empresarial inteligente.",
  },
  {
    title: "Estructuración Corporativa",
    description:
      "Diseño organizacional y financiero para compañías en crecimiento.",
  },
];

export default function SolucionesPage() {
  return (
    <main className="relative bg-black text-white min-h-screen overflow-hidden">
      <Navbar />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[#c96a1b]/10 blur-[180px]" />

        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-white/[0.03] blur-[160px]" />
      </div>

      <PageHero
        eyebrow="Soluciones Estratégicas"
        title="Estructuras empresariales diseñadas para decisiones de alto impacto."
        description="Grupo A&C integra estrategia tributaria, financiera y corporativa para organizaciones que requieren claridad, protección y evolución."
      />

      <section className="relative z-10 pb-32 overflow-hidden">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 0.08}
              >
                <GlassCard>
                  <h3 className="text-3xl font-semibold tracking-[-0.03em] mb-6">
                    {service.title}
                  </h3>

                  <p className="text-white/55 leading-[1.9] font-light">
                    {service.description}
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