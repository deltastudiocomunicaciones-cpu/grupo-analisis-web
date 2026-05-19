"use client";

import PremiumButton from "@/components/ui/PremiumButton";
import { motion } from "framer-motion";

interface MicrositeHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  button: string;
  ambientColor?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function MicrositeHero({
  eyebrow,
  title,
  description,
  button,
  ambientColor = "#c96a1b",
  imageSrc,
  imageAlt = "Brand visual",
}: MicrositeHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 pt-32 bg-black text-white">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom right, ${ambientColor}33, black, black)`,
        }}
      />

      <div
        className="absolute right-0 top-0 w-[900px] h-[900px] blur-[180px]"
        style={{
          backgroundColor: `${ambientColor}20`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="uppercase tracking-[0.45em] text-sm text-[#c96a1b] mb-8"
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-8xl font-semibold tracking-[-0.05em] leading-[0.92] max-w-5xl mb-10"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white/65 text-lg md:text-xl leading-[1.9] max-w-3xl mb-12 font-light"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <PremiumButton variant="gold">
              {button}
            </PremiumButton>
          </motion.div>
        </div>

    {imageSrc && imageSrc !== "sadi-isotype" && (   
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.4,
      }}
      className="relative hidden lg:flex items-center justify-center min-h-[520px]"
    >
      <div
        className="absolute w-[520px] h-[520px] blur-[150px] rounded-full"
        style={{
          backgroundColor: `${ambientColor}26`,
        }}
      />

      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-[800px] object-contain drop-shadow-[0_20px_80px_rgba(255,120,0,0.35)]"
        />
      </motion.div>
    </motion.div>
  )
)}
      </div>
    </section>
  );
}