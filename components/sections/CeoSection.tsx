"use client";

import Link from "next/link";
import SectionSpacing from "@/components/ui/SectionSpacing";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PremiumButton from "@/components/ui/PremiumButton";
import { motion } from "framer-motion";

export default function CeoSection() {
  return (
   <SectionSpacing className="bg-black text-white">
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#c96a1b]/10 blur-[180px]" />

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <Reveal>
          <div>
            <SectionEyebrow>
             Visión Directiva
            </SectionEyebrow>

            <h2 className="text-5xl sm:text-5xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95] mb-10">
              La confianza no se declara. Se construye con decisiones correctas.
            </h2>

            <p className="text-white/60 text-lg leading-[1.9] font-light mb-10">
              Grupo A&C integra experiencia, tecnología y pensamiento estratégico para acompañar a empresas que requieren claridad tributaria, estructura financiera y protección patrimonial.
            </p>

            <Link href="/nosotros">
  <PremiumButton variant="outline">
    Conocer la Firma
  </PremiumButton>
</Link>
          </div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative rounded-[40px] overflow-hidden min-h-[560px] bg-white/[0.04] border border-white/10"
        >
          <img
            src="https://i.imgur.com/7gAfOGy.jpeg"
            alt="Dirección Estratégica Grupo A&C"
            className="absolute inset-0 w-full h-full object-cover opacity-85"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-black/85" />

          <div className="absolute inset-0 bg-[#c96a1b]/10 mix-blend-overlay" />

          <div className="absolute bottom-0 left-0 right-0 p-10">
            <p className="uppercase tracking-[0.35em] text-xs text-[#c96a1b] mb-4">
              Grupo Análisis & Consultorías
            </p>

            <h3 className="text-3xl font-semibold">
              Dirección Estratégica
            </h3>
          </div>
        </motion.div>
      </Container>
    </SectionSpacing>
  );
}