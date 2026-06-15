"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 1 },
          }}
          className="fixed inset-0 z-[99999] bg-black flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative text-center"
          >
            <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
  <motion.div
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{ opacity: [0, 0.45, 0.28], scale: [0.6, 1.25, 1] }}
    transition={{
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="w-[520px] h-[220px] rounded-full bg-[#c96a1b]/20 blur-[90px]"
  />
</div>

<motion.div
  initial={{ x: "-140%", opacity: 0 }}
  animate={{ x: "140%", opacity: [0, 0.65, 0] }}
  transition={{
    duration: 1.6,
    delay: 0.35,
    ease: "easeInOut",
  }}
  className="absolute left-0 top-1/2 h-[1px] w-full bg-gradient-to-r from-transparent via-[#c96a1b]/80 to-transparent"
/>
            <div className="flex flex-col items-center">

  <Image
    src="/logos/grupoayc-navbar.png"
    alt="Grupo Análisis & Consultorías"
    width={320}
    height={90}
    priority
    className="
      w-auto
      h-20
      md:h-24
      object-contain
      drop-shadow-[0_0_40px_rgba(201,106,27,0.35)]
    "
  />
  <p className="mt-6 text-[#c96a1b] uppercase tracking-[0.45em] text-xs">
  Inteligencia Estratégica
</p>

<p className="mt-4 text-white/45 text-sm tracking-[0.2em]">
  Medellín · Colombia · Desde 2006
</p>

  <p
    className="
      mt-8
      text-sm
      md:text-base
      uppercase
      tracking-[0.45em]
      text-white/55
    "
  >
    20 años transformando información en decisiones
  </p>

</div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1.4,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
  h-[1px]
  mt-10
  bg-gradient-to-r
  from-transparent
  via-[#c96a1b]
  to-transparent
  origin-left
"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}