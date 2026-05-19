"use client";

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
            <p className="uppercase tracking-[0.5em] text-[#c96a1b] text-sm mb-6">
              Grupo A&C
            </p>

            <h1 className="text-white text-4xl md:text-6xl font-semibold tracking-[-0.04em]">
              Strategic Intelligence
            </h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1.4,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-[1px] bg-[#c96a1b] mt-8 origin-left"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}