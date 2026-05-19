"use client";

import { motion } from "framer-motion";

export default function TransitionSection() {
  return (
    <section className="relative bg-black text-white py-24 md:py-36 overflow-hidden border-t border-white/5 border-b border-white/5">
      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* LIGHT */}
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-[#c96a1b]/10 blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
          className="w-24 h-[2px] bg-[#c96a1b] mx-auto mb-10"
        />

        <p className="uppercase tracking-[0.45em] text-sm text-[#c96a1b] mb-8">
          Inteligencia Estratégica
        </p>

        <h2 className="text-4xl sm:text-5xl  md:text-7xl leading-[0.95] tracking-[-0.04em] font-semibold mb-10">
          Las decisiones
          <br />
          más importantes
          <br />
          no se improvisan.
        </h2>

        <p className="text-white/65 text-xl leading-relaxed max-w-3xl mx-auto">
          Construimos estructuras financieras, tributarias y corporativas
          diseñadas para organizaciones que entienden que el crecimiento
          sostenible requiere visión, precisión y anticipación.
        </p>
      </motion.div>
    </section>
  );
}