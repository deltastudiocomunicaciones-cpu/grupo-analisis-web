import type { Metadata } from "next";
import StrategicDivider from "@/components/ui/StrategicDivider";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import LazyVideo from "@/components/ui/LazyVideo";

export const metadata: Metadata = {
  title: "Inversiones | Activos, proyectos y ecosistema empresarial",
  description:
    "Conoce la visión de inversiones de Grupo A&C: activos productivos, tecnología, turismo, deporte, salud, impacto social y proyectos empresariales.",
  alternates: {
    canonical: "/inversiones",
  },
  openGraph: {
    title: "Inversiones | Ecosistema empresarial Grupo A&C",
    description:
      "Una estructura de inversiones orientada a desarrollar activos productivos, empresas y proyectos con visión de largo plazo.",
    url: "/inversiones",
    type: "website",
    images: [
      {
        url: "/og/inversiones-grupo-ayc.png",
        width: 1200,
        height: 630,
        alt: "Inversiones Grupo A&C",
      },
    ],
  },
};

const ecosystems = [
  {
    number: "01",
    sector: "Turismo & Hospitalidad",
    title: "Colombia Diving Tours",
    logo: "/logos/colombia.png",
    href: "https://aguacatebayhotel.com",
    description:
      "Un ecosistema turístico construido alrededor de experiencias, hospitalidad, naturaleza y operación de activos.",
  investmentText:
    "En el año 2022, Colombia Diving Tours consolidó una inversión estratégica orientada al turismo experiencial, la hospitalidad sostenible y la valorización del territorio en el Caribe chocoano. A través de activos como Hotel Bahía Aguacate, la compañía ha integrado naturaleza, operación turística y visión patrimonial dentro de un ecosistema diseñado para proyectar el potencial de la región hacia mercados nacionales e internacionales, generando desarrollo local, conexión cultural y experiencias auténticas de alto valor.",
  },
  {
    number: "02",
    sector: "Real Estate & Activos",
    title: "Valorar",
    logo: "/logos/valorar.png",
    href: "https://pagina-de-la-marca.com",

    description:
      "Gestión, monetización y operación estratégica de activos inmobiliarios propios y de terceros.",
   investmentText:
    "Valorar desarrolla una estrategia enfocada en la adquisición, comercialización y operación de activos inmobiliarios orientados a renta y valorización patrimonial. A través de One Trip And Go, unidad vinculada a Colombia Diving Tours, la compañía gestiona propiedades, hospedaje y experiencias de arrendamiento dentro de un modelo que conecta inversión, turismo y sostenibilidad operativa a largo plazo.",  
  },
    { 
    number: "03",
    sector: "Tecnología & Sistemas",
    title: "FASI",
    logo: "/logos/fasi.png",
    href: "https://fasi.com.co",

    description:
      "Fábrica de Sistemas de Información diseñada para conectar, automatizar y escalar unidades empresariales.",
   investmentText:
    "FASI desarrolla soluciones tecnológicas orientadas a la automatización, gestión y escalabilidad de ecosistemas empresariales. A través de plataformas como SADI ERP y SADI CDF, la compañía integra procesos administrativos, financieros y deportivos dentro de una arquitectura digital diseñada para optimizar operación, control estratégico y crecimiento sostenible.",
  },
  {
    number: "04",
    sector: "Deportes & Expansión",
    title: "Corporación Deportiva Lobos FC",
    logo: "/logos/lobos.png",
    href: "https://corporacionlobosfc.com",
    description:
      "Una plataforma deportiva que integra comunidad, formación, tecnología, identidad y marcas propias.",
    investmentText:
    "Corporación Deportiva Lobos FC consolida un ecosistema orientado al desarrollo deportivo, la formación competitiva y la construcción de identidad de marca. Fortalecida por plataformas como SADI CDF y la marca Wolves Territory, la organización integra tecnología, gestión institucional y proyección comercial dentro de una estructura diseñada para impulsar talento, comunidad y expansión sostenible en el entorno deportivo.",
  },
  {
    number: "05",
    sector: "Salud & Bienestar",
    title: "Respirar-T IPS",
    logo: "/logos/respirart.png",
    href: "https://respirar-t.com",
    description:
      "Una línea orientada al bienestar, la salud y el cuidado humano dentro de una visión empresarial sostenible.",
    investmentText:
    "Respirar-T IPS desarrolla servicios orientados al cuidado respiratorio, bienestar y acompañamiento integral de pacientes dentro de un sector fundamental para la salud en Colombia. Su operación combina atención humana, conocimiento clínico y sostenibilidad institucional, fortaleciendo procesos de recuperación, calidad de vida y acceso a servicios especializados en una industria de alta relevancia social y creciente demanda.",
  },
    {
    number: "06",
    sector: "Construcción & Diseño",
    title: "Madext",
    logo: "/logos/madext.png",
    href: "https://pagina-de-la-marca.com",
  description:
      "Diseño, acabados y arquitectura modular para espacios modernos, funcionales y escalables.",
  investmentText:
    "Madext desarrolla proyectos de remodelación, adecuación e intervención en obra orientados a transformar espacios residenciales y comerciales con criterios de funcionalidad, diseño y durabilidad. Su operación integra ejecución técnica, optimización de recursos y visión arquitectónica dentro de un modelo enfocado en mejorar activos, valorizar propiedades y responder a las necesidades de un entorno constructivo en constante evolución."
  },
    {
  number: "07",
  sector: "Impacto Social & Futuro",
  title: "Corporación Social KWEL",
  logo: "/logos/kwel.png",
  href: "https://kwelsocial.com",
  description:
    "Innovación social, tecnología e impacto comunitario como parte de una visión empresarial responsable.",
  investmentText:
    "Desde su fundación, Corporación Social KWEL ha representado una inversión significativa del ecosistema Grupo A&C en impacto social, desarrollo comunitario, tecnología aplicada, arte, agricultura y protección animal. Su valor estratégico está en convertir recursos, conocimiento y gestión institucional en procesos sostenibles que fortalecen comunidades y abren nuevas posibilidades de transformación territorial.",
},
];

const principles = [
  "Patrimonio",
  "Operación",
  "Tecnología",
  "Expansión",
  "Confianza",
  "Largo plazo",
];
const metrics = [
  {
    value: "+20",
    label: "Años gestionando visión patrimonial.",
    href: "/inversiones/patrimonio",
  },
  {
    value: "07",
    label: "Sinápsis empresarial conectada.",
    href: "/inversiones/verticales",
  },
  {
    value: "FASI",
    label: "Tecnología propia para escalar procesos.",
    href: "/inversiones/fasi",
  },
  {
    value: "SADI",
    label: "Sistemas de información aplicados al ecosistema.",
    href: "/inversiones/sadi",
  },
];

export default function InversionesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

  {/* MAIN GLOW */}
  <div className="absolute top-[-10%] left-1/2 h-[1100px] w-[1100px] -translate-x-1/2 rounded-full bg-[#c96a1b]/10 blur-[180px]" />

  {/* WHITE LIGHT */}
  <div className="absolute top-[30%] left-[10%] h-[700px] w-[700px] rounded-full bg-white/[0.04] blur-[140px]" />

  {/* RIGHT LIGHT */}
  <div className="absolute bottom-[-10%] right-[-10%] h-[900px] w-[900px] rounded-full bg-white/[0.03] blur-[180px]" />

  {/* GRID */}
  <div
    className="absolute inset-0 opacity-[0.04]"
    style={{
      backgroundImage: `
        linear-gradient(to right, white 1px, transparent 1px),
        linear-gradient(to bottom, white 1px, transparent 1px)
      `,
      backgroundSize: "80px 80px",
    }}
  />

  {/* GLOBAL GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />
</div>

{/* HERO */}
<section className="relative z-10 min-h-[78vh] overflow-hidden px-6 pt-44 pb-28 md:min-h-screen">

  {/* HERO BACKGROUND IMAGE */}
  <div className="absolute inset-0">

    <img
      src="/fotos/inversiones.png"
      alt="Grupo A&C"
      className="h-full w-full object-cover opacity-100 scale-100"
      style={{
        objectPosition: "50% 50%",
      }}
    />

    <div className="absolute inset-0 bg-black/5" />

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,106,27,0.12),transparent_45%)]" />

    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

  </div>
{/* HERO CONTENT */}
<div
  className="
    relative
    z-10
    mx-auto
    max-w-7xl

    flex
    min-h-[78vh]
    items-end

    pb-40
    md:min-h-screen
    md:pb-20
  "
>
  <div>

    <p className="mb-6 text-xs uppercase tracking-[0.45em] text-[#c96a1b]">
      Incubadora de ideas · Empresas · Activos · Ecosistemas
    </p>

    <h1 className="max-w-6xl text-4xl sm:text-5xl font-semibold leading-[0.98] md:leading-[0.95] tracking-[-0.055em] md:tracking-[-0.065em] md:text-7xl lg:text-[6.8rem]">
      Inversiones Grupo A&C
    </h1>

    <p className="mt-8 max-w-3xl text-base md:text-lg font-light leading-[1.9] text-white/70">
      Desde una idea hasta una empresa sostenible. Construimos, incubamos y conectamos
      activos, tecnología, operación e impacto social.
    </p>

  </div>
</div>

</section>
      {/* PRINCIPLES */}
      <section className="relative z-10 px-6 pb-16">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto border-y border-white/10 py-5">
          {principles.map((item) => (
            <div
              key={item}
              className="
shrink-0
rounded-full
border
border-[#c96a1b]/25
bg-[#c96a1b]/10
px-5
py-2.5
text-xs
uppercase
tracking-[0.25em]
text-[#e0b28b]
backdrop-blur-xl
transition-all
duration-500
hover:border-[#c96a1b]/45
hover:bg-[#c96a1b]/18
hover:text-white
hover:shadow-[0_0_30px_rgba(201,106,27,0.18)]
"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* STRATEGIC STATEMENT */}
<section className="relative z-10 overflow-hidden bg-[#f4f1ea] px-6 py-20 text-black">
  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">

    <Reveal>
      <div className="rounded-[1.5rem] border border-black/10 bg-black/[0.10] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
        <div className="relative flex min-h-[420px] items-end overflow-hidden rounded-[2rem] bg-black p-8">

          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          >
           <LazyVideo
  src="/videos/optimized/inversiones-v2.mp4"
  className="absolute inset-0"
  videoClassName="h-full w-full object-cover"
/>
          </video>

          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/30 to-black/85" />

          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

          <div className="relative z-10">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/45">
              Capital → Operación → Tecnología → Expansión
            </p>

            <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] text-white md:text-5xl">
              No solo asesoramos crecimiento. Lo hemos construido.
            </h2>
          </div>

        </div>
      </div>
    </Reveal>

    <Reveal delay={0.1}>
  <div className="grid h-full grid-cols-1 gap-6 sm:grid-cols-2">

    {metrics.map((metric, index) => (
      <Link key={metric.value} href={metric.href}>
        <div
          className="
            flex
            min-h-[220px]
            flex-col
            justify-between
            rounded-[2rem]
            border
            border-black/10
            bg-white/55
            p-5
            text-black
            shadow-[0_24px_70px_rgba(0,0,0,0.10)]
            backdrop-blur-xl
            transition-all
            duration-500
            hover:-translate-y-1
            hover:bg-[#c96a1b]/[0.12]
hover:border-[#c96a1b]/40
hover:shadow-[0_0_40px_rgba(201,106,27,0.12)]
          "
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#c96a1b]">
            0{index + 1}
          </p>

          <h3 className="text-4xl font-semibold tracking-[-0.05em]">
            {metric.value}
          </h3>

          <p className="text-sm leading-7 text-black/55">
            {metric.label}
          </p>

          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-black/35">
            Explorar →
          </p>
        </div>
      </Link>
    ))}

  </div>
</Reveal>
  </div>
</section>

           {/* ECOSYSTEMS */}
      <section className="relative z-10 overflow-hidden px-6 py-32">
        {/* BACKGROUND */}
<div className="absolute inset-0 bg-[#0b0b0b]" />

<div
  className="
    absolute
    left-1/2
    top-[-20%]
    h-[1200px]
    w-[1200px]
    -translate-x-1/2
    rounded-full
    bg-[#c96a1b]/12
    blur-[220px]
    pointer-events-none
  "
/>

<div
  className="
    absolute
    bottom-[-30%]
    left-[10%]
    h-[700px]
    w-[700px]
    rounded-full
    bg-[#c96a1b]/6
    blur-[180px]
    pointer-events-none
  "
/>

<div
  className="
    absolute
    right-[5%]
    top-[20%]
    h-[500px]
    w-[500px]
    rounded-full
    bg-white/[0.03]
    blur-[160px]
    pointer-events-none
  "
/>

<div
  className="
    absolute
    inset-0
    bg-[linear-gradient(to_bottom,transparent,rgba(201,106,27,0.03),transparent)]
  "
/>
  <div className="absolute inset-0 bg-white/[0.08]" />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />

  <div className="relative z-10 mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12 border-b border-white/10 pb-8">
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
                Ecosistemas estratégicos
              </p>

              <h2 className="max-w-5xl text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
                Cada unidad conecta capital, operación, marca y tecnología.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-8">
            {ecosystems.map((item) => (
  <GlassCard
    key={item.title}
    className="
      relative
      overflow-hidden
      border
      border-[#c96a1b]/20

      bg-[linear-gradient(145deg,rgba(201,106,27,0.10),rgba(255,255,255,0.03),rgba(0,0,0,0.88))]

      shadow-[0_20px_80px_rgba(0,0,0,0.45)]

      backdrop-blur-2xl

      transition-all
      duration-700

      hover:border-[#c96a1b]/45
      hover:shadow-[0_0_60px_rgba(201,106,27,0.16)]
    "
  >
    <div className="grid gap-10 lg:grid-cols-[0.25fr_0.75fr_0.9fr] lg:items-start">

      {/* LEFT COLUMN */}
      <div className="flex flex-col justify-between gap-10">

        <Link
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            transition-all
            hover:border-[#c96a1b]/40
            hover:bg-white/[0.08]
          "
        >
          <img
            src={item.logo}
            alt={item.title}
            className="
              h-auto
              w-auto
              max-h-28
              max-w-[220px]
              object-contain
              opacity-100
              transition-all
              duration-500
              group-hover:scale-105
            "
          />
        </Link>

        <p
  className="
    -mt-6
    text-[10px]
    uppercase
    tracking-[0.35em]
    text-[#c96a1b]/80
  "
>
  ↗ Ir a la web
</p>

        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
            {item.number}
          </p>

          <p className="mt-5 text-sm uppercase tracking-[0.25em] text-white/35">
            {item.sector}
          </p>
        </div>

      </div>

      {/* CENTER COLUMN */}
      <div>

        <h3 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-5xl">
          {item.title}
        </h3>

        <p className="mt-8 max-w-xl text-base font-light leading-[1.85] text-white/50">
          {item.description}
        </p>


      </div>

      {/* RIGHT COLUMN */}
      <div className="border-l border-[#c96a1b]/20 pl-8">

        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c96a1b]/80">
          Inversión & legado
        </p>

        <p className="max-w-xl text-sm leading-[1.9] text-white/55">
          {item.investmentText}
        </p>

      </div>

    </div>
  </GlassCard>
))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 pt-20 pb-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <GlassCard
  className="
    relative
    overflow-hidden
    text-center

    border
    border-[#c96a1b]/30

    bg-[linear-gradient(145deg,rgba(201,106,27,0.22),rgba(201,106,27,0.10),rgba(0,0,0,0.55))]

    shadow-[0_0_100px_rgba(201,106,27,0.18)]

    backdrop-blur-3xl
  "
>
  <div
    className="
      absolute
      left-1/2
      top-[-120px]
      h-[500px]
      w-[500px]
      -translate-x-1/2
      rounded-full
      bg-[#c96a1b]/15
      blur-[120px]
      pointer-events-none
    "
  />

  <div className="relative z-10">

    <p className="mb-8 text-xs uppercase tracking-[0.4em] text-[#d6a15f]">
      Nuevos capitales · Alianzas · Expansión
    </p>

    <h2 className="mx-auto max-w-5xl text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
      Un ecosistema preparado para conectar con nuevas oportunidades
      de inversión.
    </h2>

    <p className="mx-auto mt-10 max-w-3xl text-base font-light leading-[1.9] text-white/70">
      El respaldo del Grupo A&C no está únicamente en su experiencia
      consultiva, sino en su capacidad demostrada para construir,
      operar y sostener activos reales durante más de dos décadas.
    </p>

  </div>
</GlassCard>
          </Reveal>
        </div>
      </section>

      <StrategicDivider
        quote="Conoce a tu enemigo y conócete a ti mismo, y en cien batallas nunca estarás en peligro."
      />

      <Footer />
    </main>
  );
}