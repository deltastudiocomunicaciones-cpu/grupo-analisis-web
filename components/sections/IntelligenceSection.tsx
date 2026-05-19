"use client";

import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PremiumButton from "@/components/ui/PremiumButton";
import { motion } from "framer-motion";

const items = [
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
];

export default function IntelligenceSection() {
  return (
    <section id="inteligencia" className="relative bg-[#f5f2eb] text-black py-36 overflow-hidden">
      <div className="absolute right-0 top-0 w-[800px] h-[800px] bg-[#c96a1b]/10 blur-[180px]" />

      <Container className="relative z-10">
        <Reveal>
          <SectionEyebrow>
           Visión Directiva
          </SectionEyebrow>

          <h2 className="text-5xl sm:text-5xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95] max-w-5xl mb-16">
            Conocimiento para anticipar escenarios, reducir riesgos y tomar mejores decisiones.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group rounded-[32px] bg-white/70 border border-black/5 p-8 min-h-[320px] flex flex-col justify-between hover:-translate-y-2 transition-all duration-500 shadow-[0_20px_80px_rgba(0,0,0,0.06)]"
            >
              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-[#c96a1b] mb-8">
                  {item.type}
                </p>

                <h3 className="text-3xl font-semibold tracking-[-0.04em] leading-[1.05]">
                  {item.title}
                </h3>
              </div>

              <p className="text-black/45 group-hover:text-black/70 transition-colors">
                Leer más →
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-16">
            <a href="/inteligencia">
          <PremiumButton>
            Explorar Inteligencia
          </PremiumButton>
            </a>
        </div>
      </Container>
    </section>
  );
}