"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Seguridad: si el video falla o tarda demasiado, no bloquea la web.
    const fallbackTimer = setTimeout(() => {
      setLoading(false);
    }, 9000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.play().catch(() => {
        // Si el navegador bloquea autoplay, cerramos el loader después de un momento.
        setTimeout(() => setLoading(false), 2500);
      });
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: "blur(14px)",
            transition: { duration: 1, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[99999] overflow-hidden bg-black"
        >
          {/* Video de introducción */}
          <video
            ref={videoRef}
            src="/videos/intro-grupo-ayc.mp4"
            poster="/videos/intro-poster.jpg"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={() => setLoading(false)}
            onError={() => setLoading(false)}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Capas cinematográficas */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/55" />

          {/* Halo premium */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
              opacity: [0, 0.45, 0.25],
              scale: [0.7, 1.15, 1],
            }}
            transition={{
              duration: 3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute left-1/2 top-1/2 h-[280px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c96a1b]/25 blur-[120px]"
          />

          {/* Contenido sobre el video */}
          <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(16px)" }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -18,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 1.4,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-center"
              >

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 1 }}
                className="mt-8 text-[10px] uppercase tracking-[0.45em] text-white/55 md:text-xs"
              >
               
              </motion.p>
            </motion.div>
          </div>

          {/* Botón para saltar intro */}
          <button
            onClick={() => setLoading(false)}
            className="absolute bottom-8 right-8 z-20 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs uppercase tracking-[0.28em] text-white/50 backdrop-blur-xl transition-all duration-500 hover:border-[#c96a1b]/40 hover:bg-[#c96a1b]/10 hover:text-white"
          >
            Saltar
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}