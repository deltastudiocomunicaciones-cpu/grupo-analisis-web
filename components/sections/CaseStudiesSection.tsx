"use client";

import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const cases = [
  {
    name: "Tuercas y Pernos",
    sector: "Industria",
    logo: "/brands/tuercas-pernos.png",
    backgroundLogo: "/brands/tuercas-pernos-fondo.png",
    url: "https://tuercasypernos.co",
    description:
      "Desde 1968, Tuercas y Pernos ha construido una reputación basada en la calidad, la innovación y el servicio al sector industrial. Como aliado estratégico de Grupo A&C, continúa fortaleciendo su estructura empresarial para impulsar crecimiento sostenible, eficiencia operativa y visión de largo plazo.",
  },
  {
    name: "Mundo Urbano",
    sector: "Comercio",
    logo: "/brands/casos/aliado-2.png",
    url: "https://mundourbano.co",
    description:
      "Reseña breve de la empresa aliada y el acompañamiento estratégico desarrollado junto al Grupo A&C.",
  },
  {
    name: "Nombre Empresa Aliada 3",
    sector: "Empresa Mediana",
    logo: "/brands/casos/aliado-3.png",
    url: "/casos-de-exito",
    description:
      "Reseña breve de la operación, el contexto empresarial y el valor generado a través del acompañamiento financiero.",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f5f2eb] py-24 text-black md:py-36">
      <div className="absolute left-0 top-0 h-[800px] w-[800px] bg-[#c96a1b]/10 blur-[180px]" />

      <Container className="relative z-10">
        <Reveal>
          <SectionEyebrow>Visión Directiva</SectionEyebrow>

          <h2 className="mb-20 max-w-5xl text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-7xl">
            Resultados estratégicos construidos desde estructura, criterio y confianza.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.name}
              className="
                group
                relative
                min-h-[430px]
                overflow-hidden
                rounded-[32px]
                border
                border-black/5
                bg-white/80
                p-8
                shadow-[0_20px_80px_rgba(0,0,0,0.06)]
                transition-all
                duration-500
                hover:-translate-y-2
              "
            >
              {item.backgroundLogo && (
                <div className="absolute inset-0 pointer-events-none">
                  <img
                    src={item.backgroundLogo}
                    alt=""
                    className="
                      absolute
                      bottom-90
                      right-[30]
                      w-[50%]
                      opacity-[0.30]
                      object-contain
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-red-900/10" />
                </div>
              )}

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="mb-8">
                    <img
                      src={item.logo}
                      alt={`Logo ${item.name}`}
                      className="h-16 w-auto object-contain md:h-20"
                    />
                  </div>

                  <p className="mb-6 text-[10px] uppercase tracking-[0.28em] text-[#c96a1b]">
                    {item.sector}
                  </p>

                  <h3 className="mb-6 text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-black">
                    {item.name}
                  </h3>

                  <p className="text-sm font-light leading-[1.8] text-black/60">
                    {item.description}
                  </p>
                </div>

                <a
                  href={item.url}
                  target={item.url.startsWith("http") ? "_blank" : undefined}
                  rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="
                    mt-10
                    inline-flex
                    w-fit
                    rounded-full
                    border
                    border-[#c96a1b]/30
                    bg-[#c96a1b]/10
                    px-5
                    py-3
                    text-sm
                    text-[#c96a1b]
                    transition-all
                    duration-500
                    hover:bg-[#c96a1b]
                    hover:text-white
                  "
                >
                  Visitar empresa →
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}