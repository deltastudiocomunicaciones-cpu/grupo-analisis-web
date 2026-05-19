"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const industries = [
  "Minería",
  "Construcción",
  "Alto patrimonio",
  "Empresas medianas",
  "Holdings familiares",
  "Servicios profesionales",
];

export default function IndustriesSection() {
  return (
    <section className="relative bg-black text-white py-24 md:py-36 overflow-hidden">
      <div className="absolute -left-40 top-20 w-[700px] h-[700px] bg-[#c96a1b]/10 blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <Reveal>
          <p className="uppercase tracking-[0.45em] text-sm text-[#c96a1b] mb-8">
            Industrias
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95] max-w-5xl mb-20">
            Experiencia para sectores donde cada decisión tiene impacto patrimonial.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group border border-white/10 rounded-[28px] p-8 bg-white/[0.03] hover:bg-white/[0.07] transition-all duration-500"
            >
              <p className="text-2xl font-semibold tracking-[-0.03em] group-hover:text-[#c96a1b] transition-colors">
                {industry}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}