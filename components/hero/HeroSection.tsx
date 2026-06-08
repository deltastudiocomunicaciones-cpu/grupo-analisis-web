"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import MagneticButton from "@/components/ui/MagneticButton";

const VIDEOS = [
  "/videos/chess_final.mp4",
  "/videos/chess_final1.mp4",
  "/videos/chess_final2.mp4",
];

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 1000], [0, 250]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.2]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.08]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.load();
    video.play().catch(() => {});
  }, [videoIndex]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* VIDEO */}
      <motion.video
        key={videoIndex}
        ref={videoRef}
        style={{ y, opacity, scale }}
        autoPlay
        muted
        playsInline
        onEnded={() => {
          setVideoIndex((prev) => (prev + 1) % VIDEOS.length);
        }}
        className="absolute inset-0 h-full w-full object-cover opacity-40 scale-105"
      >
        <source src={VIDEOS[videoIndex]} type="video/mp4" />
      </motion.video>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/45" />

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

      <div className="absolute top-1/2 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 bg-[#c96a1b]/10 blur-[180px]" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/85" />

      {/* FLOATING LIGHTS */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] right-[12%] h-40 w-40 rounded-full bg-[#c96a1b]/10 blur-[80px]"
      />

      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[18%] left-[10%] h-56 w-56 rounded-full bg-white/5 blur-[100px]"
      />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center pt-28 pb-16">

        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            className="max-w-[980px]"
          >

            {/* EYEBROW */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 1,
              }}
              className="
                mb-6
                text-xs
                uppercase
                tracking-[0.35em]
                text-[#c96a1b]
                sm:text-sm
              "
            >
              Planeación • Estrategia • Evolución
            </motion.p>

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 1.2,
              }}
              className="
                max-w-[820px]
                text-[2.6rem]
                font-semibold
                leading-[0.92]
                tracking-[-0.06em]
                text-white
                mb-6
                sm:text-[3.4rem]
                md:text-[4.2rem]
                lg:text-[4.8rem]
                xl:text-[5.6rem]
                2xl:text-[6.6rem]
                md:mb-8
              "
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

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 1,
              }}
              className="
                max-w-2xl
                text-sm
                font-light
                leading-[1.8]
                text-white/65
                mb-10
                sm:text-base
                md:text-[1.05rem]
                md:mb-12
              "
            >
              Grupo Análisis & Consultorías desarrolla estructuras
              tributarias, financieras y estratégicas para organizaciones
              que entienden el valor de anticiparse.
            </motion.p>

            {/* BUTTONS */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    delay: 1,
    duration: 1,
  }}
  className="flex flex-col gap-4 sm:flex-row sm:gap-6"
>

  <Link href="/contacto">
    <MagneticButton>
      Agendar Consultoría
    </MagneticButton>
  </Link>

  <Link href="/inversiones/verticales">
    <button
      className="
        rounded-full
        border
        border-white/20
        px-8
        py-4
        text-white
        transition-all
        duration-500
        hover:bg-white
        hover:text-black
      "
    >
      Explorar Ecosistema
    </button>
  </Link>

</motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}