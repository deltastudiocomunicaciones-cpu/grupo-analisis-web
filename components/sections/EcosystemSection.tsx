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
  image?: string;

  glow: string;

  features: string[];

  featured?: boolean;
};

const brands: Brand[] = [
  {
    name: "SADI ERP",
    category: "Tecnología & Automatización",
    tagline: "Simplificamos lo complejo.",
    description:
      "Infraestructura ERP adaptable para conectar operación, información contable, automatización y crecimiento empresarial.",
    href: "/sadi",
    visual: "/brands/sadi-isotype.png",
    image: "/fotos/ecosistema_webp/sadi-erp-v1.png",
    glow: "#f28a2b",
    features: ["ERP", "Automatización", "Datos", "Escalabilidad"],
  },

  {
    name: "CEC",
    category: "Conocimiento & Comunidad",
    tagline: "Conocimiento que impulsa.",
    description:
      "Comunidad, formación y actualización para contadores y profesionales que evolucionan con el entorno empresarial colombiano.",
    href: "/contadores-en-colombia",
    visual: "/brands/cec-isotype.png",
    glow: "#3b82f6",
    features: ["Formación", "Comunidad", "Actualidad"],
  },

  {
  name: "Cultura Conecta",
  category: "Personas & Transformación",
  tagline: "Personas que transforman organizaciones.",
  description:
    "Liderazgo, formación y evolución organizacional para fortalecer cultura, talento y capacidad de transformación.",
  href: "/cultura-conecta",
  visual: "/brands/cultura-conecta-isotype-3d.webp",
  image: "/fotos/ecosistema_webp/cultura-conecta.jpeg",
  glow: "#a0c82b",
  features: ["Liderazgo", "Formación", "Transformación"],
},

  {
    name: "Análisis & Consultorías",
    category: "Núcleo Estratégico",
    tagline: "Inteligencia empresarial para mejores decisiones.",
    description:
      "Integramos estrategia, tributación, finanzas y consultoría para transformar información compleja en decisiones empresariales con mayor control.",
    href: "/analisis-consultorias",
    visual: "/brands/analisis-isotype.png",
    glow: "#c96a1b",
    features: ["Estrategia", "Finanzas", "Tributación", "Consultoría"],
    featured: true,
  },

  {
    name: "TRACO",
    category: "Trámites & Formalización",
    tagline: "Formalizar nunca fue tan simple.",
    description:
      "Gestión empresarial ante DIAN, Cámara de Comercio y entidades clave, con claridad documental y seguimiento especializado.",
    href: "/traco",
    visual: "/brands/traco-isotype.png",
    glow: "#2563eb",
    features: ["DIAN", "Cámara", "Trámites"],
  },

  {
    name: "ASPRO",
    category: "Aseguramiento de Procesos",
    tagline: "Confianza en cada proceso.",
    description:
      "Aseguramiento, control y mejora continua para organizaciones que necesitan operar con mayor consistencia y trazabilidad.",
    href: "/aspro",
    visual: "/brands/aspro-isotype.png",
    glow: "#ef4444",
    features: ["Control", "Procesos", "Cumplimiento"],
  },

  {
    name: "FASI",
    category: "Ingeniería Digital",
    tagline: "Ideas que se convierten en soluciones.",
    description:
      "Desarrollo de software, plataformas empresariales, experiencias digitales y e-commerce construidos para necesidades reales de negocio.",
    href: "/fasi",
    visual: "/brands/fasi-isotype.png",
    glow: "#0891b2",
    features: ["Software", "Plataformas", "E-commerce"],
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

function EcosystemCompanyCard({ brand }: { brand: Brand }) {
  return (
    <Link
      href={brand.href}
      aria-label={`Explorar ${brand.name}`}
      className="group block h-full"
    >
      <motion.article
        whileHover={{ y: -3 }}
        transition={{
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          flex
          min-h-[220px]
          h-full
          flex-col
          overflow-hidden
          rounded-[1.65rem]
          border border-black/[0.07]
          bg-white/90
          p-6
          shadow-[0_20px_55px_rgba(15,23,42,0.06)]
          backdrop-blur-xl
          transition-shadow
          duration-300
          group-hover:shadow-[0_28px_70px_rgba(15,23,42,0.11)]
          md:p-6
          lg:h-[245px]
          lg:min-h-0
          xl:h-[250px]
          xl:p-7
        "
      >
        {/* BRAND COLOR */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[38%] opacity-[0.08]"
          style={{
            background: `linear-gradient(135deg, transparent, ${brand.glow})`,
          }}
        />

{/* MOBILE PHOTO */}
{brand.image && (
  <div className="relative -mx-6 -mt-6 mb-5 h-[150px] overflow-hidden md:hidden">
    <Image
      src={brand.image}
      alt=""
      fill
      className="object-cover object-[center_55%]"
      sizes="100vw"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
  </div>
)}


        {/* PHOTO */}
        {brand.image && (
          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              z-[1]
              hidden
              w-[34%]
              overflow-hidden
              md:block
            "
          >
            <Image
              src={brand.image}
              alt=""
              fill
              className="
                object-cover
                object-[center_56%]
                transition-transform
                duration-700
                group-hover:scale-[1.035]
              "
              sizes="(min-width: 1280px) 13vw, (min-width: 768px) 24vw, 0px"
            />

            {/* Only soften the left edge of the image */}
            <div
              className="
                absolute
                inset-y-0
                left-0
                w-[42%]
                bg-gradient-to-r
                from-white
                via-white/75
                to-transparent
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/[0.04] via-transparent to-white/[0.04]" />
          </div>
        )}

        {/* CONTENT */}
        <div className="relative z-10 flex h-full flex-col">
          <div
            className={brand.image ? "md:max-w-[68%]" : ""}
          >
            {/* CATEGORY */}
            <div className="flex items-center gap-2.5">
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{
                  backgroundColor: brand.glow,
                  boxShadow: `0 0 16px ${brand.glow}`,
                }}
              />

              <p className="text-[9px] font-medium uppercase tracking-[0.23em] text-black/40">
                {brand.category}
              </p>
            </div>

            {/* BRAND */}
            <div className="mt-4 flex items-center gap-4">
              <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center">
                <Image
                  src={brand.visual}
                  alt={`Identidad visual de ${brand.name}`}
                  width={100}
                  height={100}
                  className="
                    max-h-[58px]
                    max-w-[58px]
                    object-contain
                    transition-transform
                    duration-500
                    group-hover:scale-[1.04]
                  "
                />
              </div>

              <div className="min-w-0">
                <h3 className="text-xl font-semibold leading-[1] tracking-[-0.045em] text-[#071524] xl:text-[1.55rem]">
                  {brand.name}
                </h3>

                <p className="mt-1.5 text-[12px] font-light leading-[1.4] text-black/50">
                  {brand.tagline}
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-4 text-[11px] font-light leading-[1.65] text-black/60 xl:text-[12px]">
              {brand.description}
            </p>
          </div>

          {/* FEATURES + CTA */}
          <div className="mt-auto flex items-end justify-between gap-3 pt-4">
            <div className="flex flex-wrap gap-1.5">
              {brand.features.map((feature) => (
                <span
                  key={feature}
                  style={{
                    borderColor: `${brand.glow}22`,
                  }}
                  className="
                    rounded-full
                    border
                    bg-white/80
                    px-2.5
                    py-1
                    text-[8px]
                    font-medium
                    text-[#344256]
                    shadow-[0_4px_12px_rgba(15,23,42,0.035)]
                    xl:text-[9px]
                  "
                >
                  {feature}
                </span>
              ))}
            </div>

            <span
              style={{
                borderColor: `${brand.glow}30`,
              }}
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                bg-white
                text-[#0a1b2e]
                shadow-sm
                transition-all
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            >
              <ArrowUpRight />
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

function EcosystemCoreCard({ brand }: { brand: Brand }) {
  return (
    <Link
      href={brand.href}
      aria-label="Explorar Grupo Análisis & Consultorías"
      className="group block h-full"
    >
      <motion.article
        whileHover={{ y: -3 }}
        transition={{
          duration: 0.35,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          flex
          h-full
          min-h-[600px]
          flex-col
          items-center
          justify-center
          overflow-hidden
          rounded-[2.25rem]
          border border-[#c96a1b]/20
          bg-[#fbf8f2]
          px-9 py-14 xl:px-10 xl:py-16
          text-center
          shadow-[0_28px_90px_rgba(44,31,20,0.10)]
        "
      >
        <div
          className="
            pointer-events-none
            absolute left-1/2 top-1/2
            h-[520px] w-[520px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            border border-[#c96a1b]/10
          "
        />

        <div
          className="
            pointer-events-none
            absolute left-1/2 top-1/2
            h-[390px] w-[390px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            border border-black/[0.05]
          "
        />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,106,27,0.10),transparent_52%)]" />

        <div className="relative z-10 flex flex-col items-center">
          <span
            className="
              rounded-full
              border border-black/[0.06]
              bg-white/75
              px-5 py-2
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-black/45
              shadow-sm
            "
          >
            El núcleo que integra
          </span>

          <div className="mt-10 flex h-[150px] items-center justify-center">
            <Image
              src={brand.visual}
              alt="Grupo Análisis & Consultorías"
              width={260}
              height={180}
              className="max-h-[145px] w-auto object-contain"
            />
          </div>

          <span
            className="
              mt-8
              rounded-full
              bg-[#c96a1b]/10
              px-5 py-2
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#8f4d17]
            "
          >
            Núcleo estratégico
          </span>

          <h3 className="mt-7 max-w-md text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#15100d]">
            {brand.tagline}
          </h3>

          <p className="mt-5 max-w-md text-sm font-light leading-[1.8] text-black/58">
            {brand.description}
          </p>

          <div className="mt-8 flex max-w-md flex-wrap justify-center gap-2">
            {brand.features.map((feature) => (
              <span
                key={feature}
                className="
                  rounded-full
                  border border-black/[0.05]
                  bg-white/80
                  px-3.5 py-1.5
                  text-[10px]
                  font-medium
                  text-[#5e5046]
                  shadow-sm
                "
              >
                {feature}
              </span>
            ))}
          </div>

          <span
            className="
              mt-10
              flex h-12 w-12
              items-center justify-center
              rounded-full
              bg-[#0b2135]
              text-white
              shadow-[0_12px_30px_rgba(11,33,53,0.20)]
              transition-transform
              duration-300
              group-hover:translate-x-0.5
            "
          >
            <ArrowUpRight />
          </span>
        </div>
      </motion.article>
    </Link>
  );
}

export default function EcosystemSection() {
  const coreBrand = brands.find((brand) => brand.featured);
  const satelliteBrands = brands.filter((brand) => !brand.featured);

  const leftBrands = satelliteBrands.slice(0, 3);
  const rightBrands = satelliteBrands.slice(3, 6);

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
  <div className="mb-14 max-w-7xl">
    {/* TÍTULO */}
    <h2
      className="
        max-w-6xl
        text-4xl
        font-semibold
        leading-[0.98]
        tracking-[-0.055em]
        text-black
        sm:text-5xl
        md:text-6xl
        lg:max-w-none
        lg:text-[clamp(3.8rem,5vw,5.8rem)]
        lg:leading-[0.94]
        lg:whitespace-nowrap
      "
    >
      {/* DEJA AQUÍ TU TÍTULO ACTUAL */}
      Un ecosistema diseñado para hacer crecer empresas.
    </h2>

    {/* DESCRIPCIÓN */}
    <p
      className="
        mt-7
        max-w-4xl
        text-base
        font-light
        leading-[1.9]
        text-black/55
        md:text-lg
        lg:mt-8
        lg:max-w-5xl
        lg:text-[1.15rem]
        lg:leading-[1.8]
      "
    >
      Tecnología, trámites, comunidad, aseguramiento, consultoría y
      evolución organizacional reunidos para construir empresas más
      controladas, inteligentes y preparadas para crecer.
    </p>
  </div>
</Reveal>

<div
  className="
    grid
    grid-cols-1
    items-stretch
    gap-5
    md:gap-6
    lg:grid-cols-[1fr_1.22fr_1fr]
    lg:gap-6
    xl:gap-7
  "
>
  {/* LEFT SIDE */}
  <div className="order-2 flex flex-col gap-5 md:gap-6 lg:order-1">
    {leftBrands.map((brand, index) => (
      <Reveal key={brand.name} delay={index * 0.05}>
        <EcosystemCompanyCard brand={brand} />
      </Reveal>
    ))}
  </div>

  {/* STRATEGIC CORE */}
  <div className="order-1 flex h-full items-center lg:order-2">
    {coreBrand && (
  <div className="w-full">
    <Reveal>
      <EcosystemCoreCard brand={coreBrand} />
    </Reveal>
  </div>
)}
  </div>

  {/* RIGHT SIDE */}
  <div className="order-3 flex flex-col gap-5 md:gap-6">
    {rightBrands.map((brand, index) => (
      <Reveal key={brand.name} delay={index * 0.05}>
        <EcosystemCompanyCard brand={brand} />
      </Reveal>
    ))}
  </div>
</div>
        </div>
      </section>
    );
}