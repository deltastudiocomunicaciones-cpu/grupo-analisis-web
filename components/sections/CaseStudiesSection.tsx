"use client";

import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const cases = [
  {
    sector: "Construcción",
    title: "Reestructuración financiera para proteger margen y flujo de caja.",
  },
  {
    sector: "Alto Patrimonio",
    title: "Arquitectura patrimonial para visión familiar de largo plazo.",
  },
  {
    sector: "Empresa Mediana",
    title: "Diagnóstico contable para convertir datos en decisiones estratégicas.",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="relative bg-[#f5f2eb] text-black py-24 md:py-36 overflow-hidden">
      <div className="absolute left-0 top-0 w-[800px] h-[800px] bg-[#c96a1b]/10 blur-[180px]" />

      <Container className="relative z-10">
        <Reveal>
         <SectionEyebrow>
          Visión Directiva
         </SectionEyebrow>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95] max-w-5xl mb-20">
            Resultados estratégicos construidos desde estructura, criterio y confianza.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((item) => (
            <article
              key={item.title}
              className="rounded-[32px] bg-white/70 border border-black/5 p-8 min-h-[360px] flex flex-col justify-between shadow-[0_20px_80px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500"
            >
              <p className="uppercase tracking-[0.3em] text-xs text-[#c96a1b]">
                {item.sector}
              </p>

              <h3 className="text-3xl font-semibold tracking-[-0.04em] leading-[1.05]">
                {item.title}
              </h3>

              <a href="/casos-de-exito" className="text-black/45 hover:text-black transition-colors">
               Ver caso →
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}