"use client";

import Link from "next/link";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const items = [
  {
    type: "Artículo",
    title: "Planeación tributaria para empresas que piensan a largo plazo",
    href: "/inteligencia/planeacion-tributaria-largo-plazo",
  },
  {
    type: "Informe",
    title: "Riesgos financieros que deben anticipar las compañías en Colombia",

    // CAMBIAR POR EL SLUG REAL DEL INFORME
    href: "/inteligencia",
  },
  {
    type: "Podcast",
    title: "El contador como auditor, estratega y arquitecto empresarial",

    // CAMBIAR POR LA RUTA REAL DEL PODCAST
    href: "/inteligencia",
  },
];

export default function IntelligenceSection() {
  return (
    <section
      id="inteligencia"
      className="relative overflow-hidden bg-[#f5f2eb] py-36 text-black"
    >
      {/* HALO AMBIENTAL */}
      <div className="pointer-events-none absolute right-0 top-0 h-[800px] w-[800px] bg-[#c96a1b]/10 blur-[180px]" />

      <Container className="relative z-10">
        {/* CABECERA */}
        <Reveal>
          <SectionEyebrow>Visión Directiva</SectionEyebrow>

          <h2 className="mb-16 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-7xl">
            Conocimiento para anticipar escenarios, reducir riesgos y tomar
            mejores decisiones.
          </h2>
        </Reveal>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: index * 0.12,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="h-full"
            >
              <Link
                href={item.href}
                className="
                  group
                  relative
                  flex
                  h-full
                  min-h-[320px]
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-black/5
                  bg-white/70
                  p-8
                  shadow-[0_20px_80px_rgba(0,0,0,0.06)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#c96a1b]/20
                  hover:bg-white
                  hover:shadow-[0_30px_100px_rgba(0,0,0,0.10)]
                "
              >
                {/* HALO CARD */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-[#c96a1b]/0
                    blur-[60px]
                    transition-all
                    duration-700
                    group-hover:bg-[#c96a1b]/10
                  "
                />

                {/* CONTENIDO */}
                <div className="relative z-10">
                  <div className="mb-8 flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#c96a1b]">
                      {item.type}
                    </p>

                    <span className="text-[10px] tracking-[0.2em] text-black/20">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="max-w-md text-3xl font-semibold leading-[1.05] tracking-[-0.04em]">
                    {item.title}
                  </h3>
                </div>

                {/* LEER MÁS */}
                <div className="relative z-10 mt-10 border-t border-black/[0.07] pt-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-black/45 transition-colors duration-300 group-hover:text-black/70">
                      Leer más
                    </p>

                    <span
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-black/10
                        bg-white
                        text-[#c96a1b]
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:border-[#c96a1b]/25
                        group-hover:bg-[#c96a1b]
                        group-hover:text-white
                      "
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ACCESO A TODO EL CONTENIDO */}
        <Reveal>
          <div className="mt-16">
            <Link
              href="/inteligencia"
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-black/10
                bg-black
                px-6
                py-3.5
                text-[10px]
                uppercase
                tracking-[0.24em]
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#c96a1b]
              "
            >
              Explorar inteligencia
              <span>→</span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}