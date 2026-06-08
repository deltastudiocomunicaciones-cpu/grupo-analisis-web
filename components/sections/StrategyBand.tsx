"use client";

import { motion } from "framer-motion";

interface StrategyBandProps {
  author: string;
  quote1: string;
  quote2: string;
}

export default function StrategyBand({
  author,
  quote1,
  quote2,
}: StrategyBandProps) {
  return (
    <section className="relative overflow-hidden bg-[#c96a1b] py-8 text-black">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max whitespace-nowrap"
      >
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-10 px-10 text-xs md:text-sm font-semibold uppercase tracking-[0.35em]"
          >
            <span>{author}</span>
            <span>•</span>
            <span>{quote1}</span>
            <span>•</span>
            <span>{quote2}</span>
            <span>•</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}