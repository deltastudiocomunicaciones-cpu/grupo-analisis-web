"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const brands = [
  {
    name: "SADI ERP",
    category: "Tecnología & Automatización",
    description:
      "Infraestructura ERP diseñada para conectar operación, información y expansión empresarial.",
    href: "/sadi",
    glow: "#78ffbe",
    logo: "/brands/sadi-isotype.png",
  },
  {
    name: "TRACO",
    category: "Arquitectura Empresarial",
    description:
      "Planeación y diseño de estructuras empresariales para compañías con visión a largo plazo.",
    href: "/traco",
    glow: "#c96a1b",
    logo: "/brands/traco-isotype.png",
  },
  {
    name: "CEC",
    category: "Comunidad Contable",
    description:
      "Contadores en Colombia conecta conocimiento, evolución profesional e inteligencia financiera.",
    href: "/contadores-en-colombia",
    glow: "#60a5fa",
    logo: "/brands/cec-isotype.png",
  },
  {
    name: "Análisis & Consultorías",
    category: "Inteligencia Estratégica",
    description:
      "Diagnóstico financiero, auditoría y visión corporativa para decisiones de alto impacto.",
    href: "/analisis-consultorias",
    glow: "#f59e0b",
    logo: "/brands/analisis-isotype.png",
  },
];

export default function EcosystemSection() {
  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden bg-[#f5f2eb] py-32 text-black"
    >
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-[#c96a1b]/8 blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.0015]"
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
        <Reveal>
          <div className="mb-20">
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-[#c96a1b]">
              Ecosistema Estratégico
            </p>

            <h2 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-7xl">
              Cuatro núcleos diseñados para conectar inteligencia, operación y expansión.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {brands.map((brand, index) => (
            <Reveal key={brand.name} delay={index * 0.08}>
              <Link href={brand.href}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    group
                    relative
                    min-h-[300px] p-7 md:min-h-[340px] md:p-8
                    overflow-hidden
                    rounded-[2.2rem]
                    border
                    border-black/10
                    bg-white/70
                    p-6
                    shadow-[0_30px_90px_rgba(0,0,0,0.12)]
                    backdrop-blur-2xl
                    transition-all
                    duration-700
                    hover:border-[#c96a1b]/30
                    hover:bg-white/85
                    hover:shadow-[0_45px_120px_rgba(0,0,0,0.18)]
                  "
                >
                  {/* GLOW */}
<div
  className="absolute inset-0 opacity-0 blur-[120px] transition-opacity duration-700 group-hover:opacity-100"
  style={{
    background: `radial-gradient(circle at 80% 35%, ${brand.glow}25 0%, transparent 65%)`,
  }}
/>

{/* HEADER */}
<div className="relative z-10 flex items-start justify-between gap-6">
  <div>
    <p className="text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
      0{index + 1}
    </p>

    <p className="mt-8 text-xs uppercase tracking-[0.25em] text-black/35">
      {brand.category}
    </p>

    <h3 className="mt-5 text-3xl font-semibold leading-[1] tracking-[-0.05em] md:text-4xl">
      {brand.name}
    </h3>
  </div>

  {/* LOGO */}
  <div className="flex h-24 w-24 shrink-0 items-center justify-center">
    <img
      src={brand.logo}
      alt={brand.name}
      className="max-h-32 max-w-32 object-contain opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
    />
  </div>
</div>

{/* DESCRIPTION */}
<p className="relative z-10 mt-8 max-w-xl text-sm font-light leading-[1.8] text-black/55 md:text-base">
  {brand.description}
</p>

{/* CTA */}
<div className="relative z-10 mt-10 inline-flex items-center gap-4 rounded-full border border-black/10 bg-black/[0.04] px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-black/45 transition-all duration-700 group-hover:border-[#c96a1b]/35 group-hover:bg-[#c96a1b]/10 group-hover:text-black group-hover:shadow-[0_18px_50px_rgba(201,106,27,0.14)]">
  
  
  Explorar Micrositio
</div>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}