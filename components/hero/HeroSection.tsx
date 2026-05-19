"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 1000], [0, 250]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.2]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.08]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <motion.video
        ref={videoRef}
        style={{ y, opacity }}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"
      >
        <source src="/videos/chess_final.mp4" type="video/mp4" />
      </motion.video>

      

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/45" />

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* AMBIENT LIGHT */}
      <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 bg-[#c96a1b]/10 blur-[180px]" />

      {/* LIGHT EFFECT */}
     <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/85" />
      {/* FLOATING ORBS */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] right-[12%] w-40 h-40 rounded-full bg-[#c96a1b]/10 blur-[80px]"
      />

      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[18%] left-[10%] w-56 h-56 rounded-full bg-white/5 blur-[100px]"
      />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            className="max-w-5xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="uppercase tracking-[0.45em] text-sm text-[#c96a1b] mb-8"
            >
              Planeación • Estrategia • Evolución
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 1.2,
              }}
              className="text-white text-4xl  sm:text-5xl md:text-7xl lg:text-[6rem] font-semibold tracking-[-0.04em] leading-[0.92] mb-8 md:mb-10 max-w-[95%]"
            >
              Inteligencia
              <br />
              corporativa
              <br />
              para empresas
              <br />
              que piensan
              <br />
              a largo plazo.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 1,
              }}
              className="text-white/65 text-base md:text-[1.15rem] max-w-2xl leading-[1.9] mb-12 md:mb-14 font-light"
            >
              Grupo Análisis & Consultorías desarrolla estructuras
              tributarias, financieras y estratégicas para organizaciones
              que entienden el valor de anticiparse.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1,
                duration: 1,
              }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              
              <MagneticButton>
                Agendar Consultoría
              </MagneticButton>

              <button className="border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-500">
                Explorar Ecosistema
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}