"use client";

import { motion } from "framer-motion";

interface StrategicDividerProps {
  quote: string;
  author?: string;
}

export default function StrategicDivider({
  quote,
  author = "Grupo A&C",
}: StrategicDividerProps) {
  return (
    <section className="relative h-[260px] overflow-hidden bg-[#f5f2eb]">
      {/* TOP FADE */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/45 to-transparent" />

      {/* BOTTOM FADE */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f5f2eb] via-[#f5f2eb]/80 to-transparent" />

      {/* WARM ATMOSPHERE */}
      <div className="absolute left-1/2 top-1/2 h-[280px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c96a1b]/12 blur-[120px]" />

      {/* SOFT LIGHT */}
      <div className="absolute left-[18%] top-[25%] h-[220px] w-[220px] rounded-full bg-white/50 blur-[90px]" />
      <div className="absolute right-[15%] bottom-[15%] h-[260px] w-[260px] rounded-full bg-white/40 blur-[110px]" />

      {/* CENTER LINE */}
      <div className="absolute left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      {/* QUOTE */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        viewport={{ once: true }}
        className="relative z-10 flex h-full items-center justify-center px-6 text-center"
      >
        <div>
          <p className="mx-auto max-w-5xl font-serif text-2xl italic leading-[1.35] tracking-[-0.03em] text-black/70 md:text-4xl">
            “{quote}”
          </p>

          <p className="mt-6 text-[10px] uppercase tracking-[0.45em] text-[#c96a1b]/70">
            {author}
          </p>
        </div>
      </motion.div>
    </section>
  );
}