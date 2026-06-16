import GlassCard from "@/components/ui/GlassCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";

const cases = [
  {
    name: "Tuercas y Pernos",
    sector: "Industria",
    logo: "/brands/casos/tuercas-pernos.png",
    url: "https://tuercasypernos.co",
    title: "Estructura financiera y tributaria para una operación industrial en crecimiento.",
    description:
      "Empresa aliada del ecosistema Grupo A&C especializada en soluciones, suministros y componentes para sectores industriales, construcción y operación empresarial.",
  },
  {
    name: "Nombre Empresa Aliada 2",
    sector: "Alto Patrimonio",
    logo: "/brands/casos/aliado-2.png",
    url: "https://www.empresa2.com",
    title: "Arquitectura patrimonial para visión familiar de largo plazo.",
    description:
      "Reseña breve de la empresa aliada, su actividad principal y el tipo de acompañamiento estratégico desarrollado junto al Grupo A&C.",
  },
  {
    name: "Nombre Empresa Aliada 3",
    sector: "Empresa Mediana",
    logo: "/brands/casos/aliado-3.png",
    url: "https://www.empresa3.com",
    title: "Diagnóstico contable para convertir datos en decisiones estratégicas.",
    description:
      "Reseña breve de la empresa aliada, su operación y el valor generado a través de procesos contables, tributarios o financieros.",
  },
];

export default function CasosDeExitoPage() {
  return (
    <main className="relative bg-black text-white min-h-screen overflow-hidden">
      <Navbar />

      <section className="relative z-10 pt-40 pb-32 min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#c96a1b]/10 via-black to-black pointer-events-none" />
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-[#c96a1b]/10 blur-[180px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="uppercase tracking-[0.45em] text-sm text-[#c96a1b] mb-8">
              Casos de Éxito
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[8rem] font-semibold tracking-[-0.05em] leading-[0.88] max-w-5xl mb-10">
              Resultados construidos desde estructura, criterio y confianza.
            </h1>

            <p className="text-white/60 text-lg leading-[1.9] max-w-3xl font-light mb-24">
              Historias empresariales donde la planeación tributaria, financiera y corporativa permitió tomar mejores decisiones.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.08}>
                <GlassCard
  key={item.name}
  className="
    group
    min-h-[420px]
    bg-white/80
    border-black/5
    shadow-[0_20px_80px_rgba(0,0,0,0.06)]
    hover:-translate-y-2
    transition-all
    duration-500
  "
>
  <div className="flex h-full flex-col justify-between">

    <div>
      <div className="mb-8 flex items-center justify-between gap-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-black/10 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
          <img
            src={item.logo}
            alt={`Logo ${item.name}`}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <p className="text-right text-[10px] uppercase tracking-[0.28em] text-[#c96a1b]">
          {item.sector}
        </p>
      </div>

      <h3 className="mb-5 text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-black">
        {item.name}
      </h3>

      <p className="mb-8 text-sm font-light leading-[1.8] text-black/55">
        {item.description}
      </p>

      <h4 className="text-xl font-semibold leading-tight tracking-[-0.03em] text-black/85">
        {item.title}
      </h4>
    </div>

    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        mt-10
        inline-flex
        w-fit
        items-center
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
</GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}