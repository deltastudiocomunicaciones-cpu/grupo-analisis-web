"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: "blur(12px)",
            transition: { duration: 0.9, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-black"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.82, filter: "blur(18px)" }}
            animate={{
              opacity: [0, 1, 1],
              scale: [0.82, 1.05, 1],
              filter: ["blur(18px)", "blur(0px)", "blur(0px)"],
            }}
            exit={{
              opacity: 0,
              scale: 1.08,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 1.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: [0, 0.55, 0.28],
                scale: [0.6, 1.3, 1],
              }}
              transition={{
                duration: 2.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute h-[260px] w-[680px] rounded-full bg-[#c96a1b]/25 blur-[100px]"
            />

            <motion.div
              initial={{ x: "-160%", opacity: 0 }}
              animate={{ x: "160%", opacity: [0, 0.7, 0] }}
              transition={{
                duration: 1.45,
                delay: 0.45,
                ease: "easeInOut",
              }}
              className="absolute z-20 h-full w-28 bg-gradient-to-r from-transparent via-white/35 to-transparent blur-md"
            />

            <Image
              src="/logos/logo-final.png"
              alt="Grupo Análisis & Consultorías"
              width={720}
              height={240}
              priority
              className="
                relative
                z-10
                h-auto
                w-[290px]
                object-contain
                drop-shadow-[0_0_55px_rgba(201,106,27,0.65)]
                md:w-[620px]
              "
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}