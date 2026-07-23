"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const brands = [
  {
    name: "SADI ERP",
    category: "Tecnología & Automatización",
    description:
      "Infraestructura ERP para conectar operación, información contable y expansión empresarial.",
    href: "/sadi",
    glow: "#78ffbe",
    logo: "/brands/sadi-isotype.png",
    logoClass: "h-16 w-auto",
  },
  {
    name: "TRACO",
    category: "Trámites & Formalización",
    description:
      "Gestión de trámites empresariales ante DIAN, Cámara de Comercio y entidades clave.",
    href: "/traco",
    glow: "#c96a1b",
    logo: "/brands/traco-isotype.png",
    logoClass: "h-16 w-auto",
  },
  {
    name: "CEC",
    category: "Comunidad Contable",
    description:
      "Contadores en Colombia conecta conocimiento, evolución profesional e inteligencia financiera.",
    href: "/contadores-en-colombia",
    glow: "#60a5fa",
    logo: "/brands/cec-isotype.png",
    logoClass: "h-16 w-auto",
  },
  {
    name: "ASPRO",
    category: "Aseguramiento de Procesos",
    description:
      "Control, auditoría, cumplimiento y blindaje operativo para procesos empresariales críticos.",
    href: "/aspro",
    glow: "#a78bfa",
    logo: "/brands/aspro-isotype.png",
    logoClass: "h-17 w-auto",
  },
  {
    name: "Análisis & Consultorías",
    category: "Inteligencia Estratégica",
    description:
      "Diagnóstico financiero, auditoría y visión corporativa para decisiones de alto impacto.",
    href: "/analisis-consultorias",
    glow: "#f59e0b",
    logo: "/brands/analisis-isotype.png",
    logoClass: "h-16 w-auto",
  },
];

export default function EcosystemSection() {
  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden bg-[#f5f2eb] py-28 text-black"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[760px] w-[980px] -translate-x-1/2 rounded-full bg-[#c96a1b]/[0.075] blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `
              linear-gradient(to right, black 1px, transparent 1px),
              linear-gradient(to bottom, black 1px, transparent 1px)
            `,
            backgroundSize: "120px 120px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <Reveal>
          <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-7 text-xs uppercase tracking-[0.45em] text-[#c96a1b]">
                Ecosistema Estratégico
              </p>

              <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
                Cinco núcleos conectados por inteligencia empresarial.
              </h2>
            </div>

            <p className="max-w-xl text-base font-light leading-[1.9] text-black/55 lg:justify-self-end">
              El ecosistema Grupo A&C integra tecnología, trámites,
              comunidad, aseguramiento de procesos y consultoría estratégica
              para construir empresas más controladas, eficientes y preparadas
              para crecer.
            </p>
          </div>
        </Reveal>

        {/* HORIZONTAL PREMIUM RAIL */}
        <div className="relative">
          <div className="absolute -left-8 top-0 z-20 hidden h-full w-20 bg-gradient-to-r from-[#f5f2eb] to-transparent md:block" />
          <div className="absolute -right-8 top-0 z-20 hidden h-full w-20 bg-gradient-to-l from-[#f5f2eb] to-transparent md:block" />

          <div
            className="
              grid
              auto-cols-[minmax(245px,1fr)]
              grid-flow-col
              gap-5
              overflow-x-auto
              pb-6
              pr-6
              [scrollbar-width:none]
              md:auto-cols-[minmax(270px,1fr)]
              xl:grid-flow-row
              xl:grid-cols-5
              xl:overflow-visible
              xl:pb-0
              xl:pr-0
              [&::-webkit-scrollbar]:hidden
            "
          >
            {brands.map((brand, index) => (
              <Reveal key={brand.name} delay={index * 0.06}>
                <Link href={brand.href} className="group block h-full">
                  <motion.article
  whileHover={{ y: -7 }}
  transition={{
    duration: 0.45,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="
    relative
    flex
    h-[335px]
    min-w-0
    flex-col
    overflow-hidden
    rounded-[2rem]
    border
    border-black/10
    bg-white/65
    p-6
    shadow-[0_24px_80px_rgba(0,0,0,0.08)]
    backdrop-blur-2xl
    transition-all
    duration-700
    hover:border-[#c96a1b]/35
    hover:bg-white/90
    hover:shadow-[0_34px_110px_rgba(0,0,0,0.14)]
    md:h-[350px]
    xl:h-[365px]
  "
>
  {/* GLOW */}
  <div
    className="absolute inset-0 opacity-0 blur-[95px] transition-opacity duration-700 group-hover:opacity-100"
    style={{
      background: `radial-gradient(circle at 78% 22%, ${brand.glow}35 0%, transparent 62%)`,
    }}
  />

  {/* LOGO FLOTANTE */}
  <img
    src={brand.logo}
    alt={brand.name}
    className={`
      pointer-events-none
      absolute
      right-6
      top-6
      z-10
      object-contain
      opacity-80
      drop-shadow-[0_18px_45px_rgba(0,0,0,0.14)]
      transition-all
      duration-700
      group-hover:scale-110
      group-hover:opacity-100
      ${brand.logoClass}
    `}
  />

  {/* INDEX */}
  <div className="relative z-10 mb-12 flex items-center justify-between pr-24">
    <span className="text-[10px] uppercase tracking-[0.32em] text-[#c96a1b]">
      0{index + 1}
    </span>

    <span className="h-px flex-1 bg-black/10 ml-5" />
  </div>

  {/* CONTENT */}
  <div className="relative z-10 flex flex-1 flex-col">
    <p className="mb-5 max-w-[180px] text-[10px] uppercase leading-relaxed tracking-[0.24em] text-black/35">
      {brand.category}
    </p>

    <h3 className="max-w-[210px] text-2xl font-semibold leading-[1] tracking-[-0.05em]">
      {brand.name}
    </h3>

    <p className="mt-6 flex-1 text-sm font-light leading-[1.75] text-black/55">
      {brand.description}
    </p>

    <div className="mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-black/10 bg-black/[0.035] px-4 py-2 text-[9px] uppercase tracking-[0.22em] text-black/45 transition-all duration-700 group-hover:border-[#c96a1b]/35 group-hover:bg-[#c96a1b]/10 group-hover:text-black">
      Explorar
      <span className="transition-transform duration-500 group-hover:translate-x-1">
        →
      </span>
    </div>
  </div>

  {/* BORDE INTERIOR PREMIUM */}
  <div className="pointer-events-none absolute inset-[1px] rounded-[1.95rem] border border-white/50" />
</motion.article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}