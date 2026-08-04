"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Reveal from "@/components/ui/Reveal";

type Brand = {
  name: string;
  category: string;
  tagline: string;
  description: string;
  href: string;
  visual: string;
  glow: string;
  panel: string;
  visualClassName: string;
  features: string[];
};

const brands: Brand[] = [
  {
    name: "SADI ERP",
    category: "Tecnología & Automatización",
    tagline: "Simplificamos lo complejo.",
    description:
      "Infraestructura ERP para conectar operación, información contable y expansión empresarial.",
    href: "/sadi",
    visual: "/brands/sadi-isotype.png",
    glow: "#f28a2b",
    panel: "#101a27",
    visualClassName: "max-h-[165px] max-w-[210px]",
    features: ["Automatización", "Información", "Control", "Escala"],
  },
  {
    name: "TRACO",
    category: "Trámites & Formalización",
    tagline: "Formalizar nunca fue tan simple.",
    description:
      "Gestión empresarial ante DIAN, Cámara de Comercio y entidades clave, con claridad y seguimiento.",
    href: "/traco",
    visual: "/brands/traco-isotype.png",
    glow: "#3b82f6",
    panel: "#0d1b33",
    visualClassName: "max-h-[175px] max-w-[220px]",
    features: ["Formalización", "DIAN", "Cámara", "Seguimiento"],
  },
  {
    name: "CEC",
    category: "Comunidad de Contadores Colombia",
    tagline: "Conecta, aprende y crece.",
    description:
      "La comunidad donde conocimiento, evolución profesional y oportunidades conectan a los contadores del país.",
    href: "/contadores-en-colombia",
    visual: "/brands/cec-isotype.png",
    glow: "#60a5fa",
    panel: "#10233d",
    visualClassName: "max-h-[175px] max-w-[230px]",
    features: ["Networking", "Formación", "Eventos", "Oportunidades"],
  },
  {
    name: "ASPRO",
    category: "Aseguramiento de Procesos",
    tagline: "Control que anticipa.",
    description:
      "Auditoría, cumplimiento y blindaje operativo para procesos empresariales que no pueden dejarse al azar.",
    href: "/aspro",
    visual: "/brands/aspro-isotype.png",
    glow: "#ef4444",
    panel: "#251316",
    visualClassName: "max-h-[180px] max-w-[215px]",
    features: ["Control", "Auditoría", "Cumplimiento", "Mejora"],
  },
  {
    name: "Análisis & Consultorías",
    category: "Inteligencia Estratégica",
    tagline: "Decisiones con mayor claridad.",
    description:
      "Diagnóstico financiero, tributario y corporativo para organizaciones que necesitan pensar y actuar a largo plazo.",
    href: "/analisis-consultorias",
    visual: "/brands/analisis-isotype.png",
    glow: "#c96a1b",
    panel: "#211914",
    visualClassName: "max-h-[150px] max-w-[240px]",
    features: ["Estrategia", "Finanzas", "Tributación", "Decisión"],
  },
  {
    name: "Cultura Conecta",
    category: "Liderazgo & Evolución",
    tagline: "Cultura que conecta. Liderazgo que transforma.",
    description:
      "Transformación empresarial, formación ejecutiva y espacios para movilizar talento, visión y resultados.",
    href: "/cultura-conecta",
    visual: "/brands/cultura-conecta-isotype-3d.webp",
    glow: "#a0c82b",
    panel: "#0a2138",
    visualClassName: "max-h-[190px] max-w-[245px]",
    features: ["Liderazgo", "Cultura", "Formación", "Espacios"],
  },
];

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
      <path
        d="M5 15 15 5M7 5h8v8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CapabilityIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="h-7 w-7">
        <circle cx="8" cy="9" r="3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="20" cy="9" r="3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="14" cy="20" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="m10.5 11.2 2 5.4m5-5.4-2 5.4M11 9h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="h-7 w-7">
        <path d="m4.5 10 9.5-5 9.5 5-9.5 5-9.5-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M8 12.2v5.2c3.6 2.5 8.4 2.5 12 0v-5.2M23.5 10v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="h-7 w-7">
        <rect x="4.5" y="6.5" width="19" height="17" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 4.5v4M19 4.5v4M4.5 11.5h19M10 17h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" className="h-7 w-7">
      <rect x="4.5" y="8" width="19" height="14.5" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 8V5.8c0-.7.6-1.3 1.3-1.3h5.4c.7 0 1.3.6 1.3 1.3V8M4.5 14h19M12 14v2h4v-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function EcosystemSection() {
  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden bg-[#f5f2eb] py-24 text-black md:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-[760px] w-[1100px] -translate-x-1/2 rounded-full bg-[#c96a1b]/[0.065] blur-[190px]" />
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1480px] px-6">
        <Reveal>
          <div className="mb-16 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end md:mb-20">
            <div>
              <p className="mb-7 text-xs uppercase tracking-[0.45em] text-[#c96a1b]">
                Ecosistema Estratégico
              </p>
              <h2 className="max-w-5xl text-5xl font-semibold leading-[0.93] tracking-[-0.065em] md:text-7xl">
                Seis núcleos. Una inteligencia empresarial conectada.
              </h2>
            </div>

            <p className="max-w-xl text-base font-light leading-[1.9] text-black/55 lg:justify-self-end">
              Tecnología, trámites, comunidad, aseguramiento, consultoría y
              evolución organizacional reunidos para construir empresas más
              controladas, inteligentes y preparadas para crecer.
            </p>
          </div>
        </Reveal>

        <div
          className="
            grid
            snap-x
            snap-mandatory
            auto-cols-[88vw]
            grid-flow-col
            gap-6
            overflow-x-auto
            pb-8
            pr-6
            [scrollbar-width:none]
            sm:auto-cols-[76vw]
            lg:auto-cols-auto
            lg:grid-flow-row
            lg:grid-cols-2
            lg:overflow-visible
            lg:pb-0
            lg:pr-0
            [&::-webkit-scrollbar]:hidden
          "
        >
          {brands.map((brand, index) => (
            <Reveal key={brand.name} delay={(index % 2) * 0.06}>
              <Link
                href={brand.href}
                aria-label={`Explorar ${brand.name}`}
                className="group block h-full snap-center"
              >
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex h-full min-h-[620px] flex-col overflow-hidden rounded-[2.4rem] border border-white/35 p-6 text-white shadow-[0_30px_90px_rgba(8,20,38,0.18)] md:min-h-[570px] md:p-8 lg:min-h-[520px] xl:p-9"
                  style={{ backgroundColor: brand.panel }}
                >
                  {/* LIGHT, DEPTH AND GLASS */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-75"
                    style={{
                      background: `radial-gradient(circle at 16% 18%, ${brand.glow}38 0%, transparent 34%), radial-gradient(circle at 82% 18%, ${brand.glow}18 0%, transparent 38%)`,
                    }}
                  />
                  <div className="pointer-events-none absolute inset-[1px] rounded-[2.34rem] border border-white/20" />
                  <div className="pointer-events-none absolute -right-[18%] top-[-35%] h-[88%] w-[58%] rotate-[34deg] rounded-[45%] bg-white/[0.055] blur-[1px]" />
                  <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.75)]" />

                  {/* MAIN AREA */}
                  <div className="relative z-10 grid flex-1 gap-8 md:grid-cols-[0.38fr_0.62fr] md:items-center">
                    <div className="relative flex min-h-[190px] items-center justify-center border-b border-white/12 pb-7 md:min-h-0 md:border-b-0 md:border-r md:pb-0 md:pr-8">
                      <div
                        className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[55px]"
                        style={{ backgroundColor: `${brand.glow}38` }}
                      />
                      <Image
                        src={brand.visual}
                        alt={`Identidad visual de ${brand.name}`}
                        width={280}
                        height={220}
                        className={`relative z-10 h-auto w-auto object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.42)] transition-transform duration-700 group-hover:scale-[1.06] group-hover:-rotate-1 ${brand.visualClassName}`}
                      />
                    </div>

                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-3">
                        <span
                          className="h-2 w-2 rounded-full shadow-[0_0_14px_currentColor]"
                          style={{ backgroundColor: brand.glow, color: brand.glow }}
                        />
                        <p className="text-[9px] uppercase tracking-[0.28em] text-white/42 sm:text-[10px]">
                          {brand.category}
                        </p>
                      </div>

                      <h3 className="mt-5 text-4xl font-semibold leading-[0.94] tracking-[-0.055em] sm:text-5xl lg:text-[2.7rem] xl:text-5xl">
                        {brand.name}
                      </h3>
                      <p className="mt-3 text-base font-light text-white/52 sm:text-lg">
                        {brand.tagline}
                      </p>
                      <div className="my-6 h-px w-full bg-gradient-to-r from-white/22 to-transparent" />
                      <p className="max-w-xl text-sm font-light leading-[1.8] text-white/72 sm:text-base">
                        {brand.description}
                      </p>
                    </div>
                  </div>

                  {/* CAPABILITIES AND CTA */}
                  <div className="relative z-10 mt-9 grid gap-7 border-t border-white/12 pt-7 xl:grid-cols-[1fr_auto] xl:items-end">
                    <div className="grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-4">
                      {brand.features.map((feature, featureIndex) => (
                        <div
                          key={feature}
                          className="flex min-w-0 flex-col items-center border-white/10 text-center sm:border-r sm:last:border-r-0"
                        >
                          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/[0.07] text-white/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_12px_30px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                            <CapabilityIcon index={featureIndex} />
                          </span>
                          <span className="mt-3 max-w-full truncate text-[10px] font-light tracking-[0.04em] text-white/58 sm:text-[11px]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <span className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/45 bg-white/90 px-6 py-3.5 text-sm font-semibold text-[#0a1b2e] shadow-[0_0_24px_rgba(255,255,255,0.16)] transition-all duration-500 group-hover:bg-white group-hover:shadow-[0_0_32px_rgba(255,255,255,0.32)] sm:w-auto">
                      Explorar
                      <ArrowUpRight />
                    </span>
                  </div>
                </motion.article>
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="mt-5 text-center text-[9px] uppercase tracking-[0.25em] text-black/35 lg:hidden">
          Desliza para explorar el ecosistema →
        </p>
      </div>
    </section>
  );
}