"use client";

import Link from "next/link";
import PremiumButton from "@/components/ui/PremiumButton";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const brands = [
  {
    name: "SADI ERP",
    category: "Tecnología Contable",
    href: "/sadi",
    description:
      "Sistema inteligente orientado a automatización financiera, módulos empresariales y evolución estratégica.",
  },
  {
    name: "Análisis & Consultorías",
    category: "Consultoría Estratégica",
    href: "/analisis-consultorias",
    description:
      "Planeación tributaria, auditoría corporativa y estructuras financieras para empresas de alto nivel.",
  },
  {
    name: "TRACO",
    category: "Tramitología Empresarial",
    href: "/traco",
    description:
      "Constitución de empresas, cumplimiento normativo y acompañamiento institucional especializado.",
  },
  {
    name: "Contadores en Colombia",
    category: "Comunidad Profesional",
    href: "/contadores-en-colombia",
    description:
      "Actualización, liderazgo y transformación del nuevo paradigma contable colombiano.",
  },
];

export default function EcosystemSection() {
  return (
    <section className="relative bg-[#f5f2eb] py-24 md:py-36 overflow-hidden">

      {/* BACKGROUND LIGHT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#c96a1b]/10 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >

          <p className="uppercase tracking-[0.45em] text-sm text-[#c96a1b] mb-6">
            Ecosistema Empresarial
          </p>

          <Reveal>

            <h2 className="text-4xl sm:text-5xlmd:text-7xl font-semibold tracking-[-0.04em] leading-[0.95] max-w-5xl">
              Un holding diseñado
              <br />
              para integrar visión,
              <br />
              estructura y evolución.
            </h2>

          </Reveal>

        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {brands.map((brand, index) => (

            <Reveal
              key={brand.name}
              delay={index * 0.12}
            >

              <motion.div
               whileHover={{
  y: -12,
  scale: 1.015,
}}
                transition={{
  type: "spring",
  stiffness: 180,
  damping: 18,
}}
             className="group relative overflow-hidden rounded-[35px] border border-white/20 bg-white/70 backdrop-blur-2xl p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)]"   
              >

                {/* HOVER LIGHT */}
                <motion.div
  initial={{ opacity: 0 }}
  whileHover={{ opacity: 1 }}
  className="absolute -top-40 -right-40 w-80 h-80 bg-[#c96a1b]/20 rounded-full blur-[120px]"
/>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-[#c96a1b]/10 to-transparent" />

                <div className="relative z-10">

                  <p className="uppercase tracking-[0.3em] text-xs text-[#c96a1b] mb-6">
                    {brand.category}
                  </p>

                  <h3 className="text-4xl font-semibold mb-8">
                    {brand.name}
                  </h3>

                  <p className="text-black/60 text-[1.05rem] leading-[1.9] mb-10 font-light">
                    {brand.description}
                  </p>

                  <Link href={brand.href}>
                    <PremiumButton>
                      Explorar Marca
                    </PremiumButton>
                  </Link>

                </div>

              </motion.div>

            </Reveal>

          ))}

        </div>

      </div>

    </section>
  );
}