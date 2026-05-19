import GlassCard from "@/components/ui/GlassCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";

const cases = [
  {
    sector: "Construcción",
    title: "Reestructuración financiera para proteger margen y flujo de caja.",
    description:
      "Acompañamiento estratégico para ordenar estructura financiera, controlar riesgos y mejorar la lectura gerencial.",
  },
  {
    sector: "Alto Patrimonio",
    title: "Arquitectura patrimonial para visión familiar de largo plazo.",
    description:
      "Planeación orientada a protección, continuidad y claridad en la administración patrimonial.",
  },
  {
    sector: "Empresa Mediana",
    title: "Diagnóstico contable para convertir datos en decisiones estratégicas.",
    description:
      "Evaluación integral para pasar del registro operativo a una lectura estratégica del negocio.",
  },
];

export default function CasosDeExitoPage() {
  return (
    <main className="relative bg-black text-white min-h-screen overflow-hidden">
      <Navbar />

      <section className="relative z-10 pt-40 pb-32 min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c96a1b]/10 via-black to-black pointer-events-none" />
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-[#c96a1b]/10 blur-[180px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="uppercase tracking-[0.45em] text-sm text-[#c96a1b] mb-8">
              Casos de Éxito
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[8rem] font-semibold tracking-[-0.05em] leading-[0.88] max-w-5xl mb-10">
              Resultados construidos desde estructura, criterio y confianza.
            </h1>

            <p className="text-white/60 text-lg leading-[1.9] max-w-3xl font-light mb-24">
              Historias empresariales donde la planeación tributaria, financiera y corporativa permitió tomar mejores decisiones.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <GlassCard
                key={item.title}
                className="bg-white/70 border-black/5 min-h-[360px] flex flex-col justify-between shadow-[0_20px_80px_rgba(0,0,0,0.06)] hover:-translate-y-2">
                  <div>
                    <p className="uppercase tracking-[0.3em] text-xs text-[#c96a1b] mb-8">
                      {item.sector}
                    </p>

                    <h3 className="text-3xl font-semibold tracking-[-0.03em] leading-[1.05] mb-8">
                      {item.title}
                    </h3>

                    <p className="text-white/55 leading-[1.9] font-light">
                      {item.description}
                    </p>
                  </div>

                  <p className="text-white/40 mt-10">Ver caso completo →</p>
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