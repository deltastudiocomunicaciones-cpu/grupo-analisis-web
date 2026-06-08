"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const stats = [
  {
    value: "20+",
    label: "años estructurando decisiones empresariales",
  },
  {
    value: "10+",
    label: "marcas integradas en un mismo ecosistema",
  },
  {
    value: "50+",
    label: "profesionales articulados bajo una visión estratégica",
  },
];

export default function LegacySection() {
  return (
    <section className="relative bg-[#f5f2eb] text-black py-24 md:py-36 overflow-hidden">
      <div className="absolute -top-40 right-0 w-[700px] h-[700px] bg-[#c96a1b]/10 blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <Reveal>
          <p className="uppercase tracking-[0.45em] text-sm text-[#c96a1b] mb-8">
            Trayectoria
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7x1 font-semibold tracking-[-0.04em] leading-[0.95] max-w-5xl mb-16">
            Dos décadas construyendo confianza, estructura y visión empresarial.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="border-t border-black/10 pt-8"
            >
              <h3 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-[-0.05em] mb-6">
                {stat.value}
              </h3>

              <p className="text-black/60 leading-[1.8] font-light max-w-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}