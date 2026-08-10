"use client";

import SectionSpacing from "@/components/ui/SectionSpacing";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";

export default function CeoSection() {
  return (
    <SectionSpacing className="relative overflow-hidden bg-black text-white">
      {/* AMBIENT GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[1000px] -translate-x-1/2 bg-[#c96a1b]/10 blur-[180px]" />

      <div className="pointer-events-none absolute bottom-[-250px] right-[-150px] h-[600px] w-[600px] rounded-full bg-white/[0.025] blur-[160px]" />

      <Container className="relative z-10 grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
        {/* LEFT */}
        <Reveal>
          <div className="max-w-3xl">
            <SectionEyebrow>Visión Directiva</SectionEyebrow>

            <h2 className="mb-10 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-7xl">
              La confianza no se declara. Se construye con decisiones correctas.
            </h2>

            {/* CEO MANIFESTO */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[2.4rem]
                border
                border-white/[0.10]
                bg-gradient-to-br
                from-white/[0.065]
                via-white/[0.025]
                to-transparent
                px-7
                py-9
                shadow-[0_35px_120px_rgba(0,0,0,0.32)]
                backdrop-blur-2xl
                md:px-10
                md:py-11
              "
            >
              {/* RESPLANDOR */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-[340px] w-[340px] rounded-full bg-[#c96a1b]/10 blur-[100px]" />

              {/* LÍNEA EDITORIAL SUPERIOR */}
              <div className="absolute left-10 right-10 top-0 h-px bg-gradient-to-r from-transparent via-[#d6a15f]/70 to-transparent" />

              {/* COMILLA GIGANTE */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-2
                  top-0
                  select-none
                  font-serif
                  text-[11rem]
                  font-semibold
                  leading-none
                  text-white/[0.045]
                  md:text-[15rem]
                "
              >
                “
              </div>

              <div className="relative z-10">
                {/* EYEBROW MANIFIESTO */}
                <div className="mb-9 flex items-center gap-4">
                  <span className="h-px w-8 bg-[#d6a15f]" />

                  <p className="text-[10px] uppercase tracking-[0.38em] text-[#d6a15f]">
                    Palabras del CEO
                  </p>
                </div>

                {/* FRASE */}
                <blockquote
                  className="
                    max-w-2xl
                    text-[1.35rem]
                    font-light
                    leading-[1.75]
                    tracking-[-0.02em]
                    text-white/85
                    md:text-[1.6rem]
                    md:leading-[1.7]
                  "
                >
                  “En un entorno donde el error cuesta caro, nuestra labor es{" "}
                  <span className="font-medium text-white">
                    anticiparnos.
                  </span>{" "}
                  No solo gestionamos cifras: diseñamos estructuras, optimizamos
                  impuestos y generamos control real para que cada cliente
                  avance con claridad y respaldo.”
                </blockquote>

                {/* SEPARADOR */}
                <div className="my-10 h-px w-full bg-gradient-to-r from-white/15 via-white/5 to-transparent" />

                {/* FIRMA / AUTOR */}
                <div
                  className="
                    relative
                    flex
                    flex-col
                    gap-7
                    md:flex-row
                    md:items-end
                    md:justify-between
                  "
                >
                  {/* PLACA CEO */}
                  <div>
                    <p className="text-lg font-medium tracking-[-0.02em] text-white">
                      Lennyn Yepes B.
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.30em] text-white/35">
                      CEO · Grupo Análisis &amp; Consultorías
                    </p>

                    <div className="mt-5 flex items-center gap-3">
                      <span className="h-px w-10 bg-[#d6a15f]/70" />

                      <span className="text-[9px] uppercase tracking-[0.28em] text-[#d6a15f]/75">
                        Visión · Anticipación · Control
                      </span>
                    </div>
                  </div>

                  {/* FIRMA FLOTANTE */}
                  <div className="relative -mb-2 md:-mb-5 md:-mr-3">
                    {/* HALO FIRMA */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-1/2
                        h-20
                        w-[260px]
                        -translate-x-1/2
                        -translate-y-1/2
                        bg-white/[0.06]
                        blur-[45px]
                      "
                    />

                    <img
                      src="/fotos/ceo/firma-lennyn.png"
                      alt="Firma de Lennyn Yepes B."
                      className="
                        relative
                        z-10
                        h-auto
                        w-[260px]
                        max-w-full
                        object-contain
                        opacity-95
                        md:w-[310px]
                      "
                      style={{
                        filter:
                          "brightness(0) invert(1) drop-shadow(0 0 24px rgba(255,255,255,0.15))",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* RIGHT */}
        <Reveal delay={0.1}>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.1,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="
              relative
              min-h-[560px]
              overflow-hidden
              rounded-[2.5rem]
              border
              border-white/10
              bg-white/[0.04]
              shadow-[0_35px_120px_rgba(0,0,0,0.35)]
            "
          >
            <img
              src="https://i.imgur.com/KWeew6c.png"
              alt="Dirección Estratégica Grupo A&C"
              className="absolute inset-0 h-full w-full object-cover opacity-85"
            />

            {/* FILTROS */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/15 via-black/10 to-black/90" />

            <div className="absolute inset-0 bg-[#c96a1b]/10 mix-blend-overlay" />

            {/* LÍNEA SUPERIOR */}
            <div className="absolute left-10 right-10 top-0 h-px bg-gradient-to-r from-transparent via-[#d6a15f]/50 to-transparent" />

            {/* TEXTO */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#d6a15f]">
                Grupo Análisis &amp; Consultorías
              </p>

              <h3 className="max-w-lg text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-4xl">
                Dirección estratégica para anticipar, decidir y construir.
              </h3>

              
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </SectionSpacing>
  );
}