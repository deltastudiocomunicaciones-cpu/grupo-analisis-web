import type { Metadata } from "next";
import MicrositePodcast from "@/components/sections/MicrositePodcast";import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MicrositeHero from "@/components/sections/MicrositeHero";

export const metadata: Metadata = {
  title: "TRACO | Trámites empresariales DIAN y Cámara de Comercio",
  description:
    "TRACO acompaña trámites empresariales ante DIAN, Cámara de Comercio y entidades clave para formalizar, actualizar y estructurar empresas en Colombia.",
  alternates: {
    canonical: "/traco",
  },
  openGraph: {
    title: "TRACO | Trámites empresariales sin fricción",
    description:
      "Formalización, trámites DIAN, Cámara de Comercio y acompañamiento empresarial con respaldo del ecosistema Grupo A&C.",
    url: "/traco",
    type: "website",
    images: [
      {
        url: "/og/traco-grupo-ayc.webp",
        width: 1200,
        height: 630,
        alt: "TRACO trámites empresariales Grupo A&C",
      },
    ],
  },
};

export default function TracoPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <MicrositeHero
        eyebrow="TRACO"
        title="Estructura legal y corporativa para empresas en Colombia."
        description="Constitución de empresas, trámites institucionales y acompañamiento frente a entidades de control."
        button="Iniciar Trámite"
        buttonLink="https://portalgrupoayc.com"
        ambientColor="#2563eb"
        imageSrc="/brands/traco-isotype.png"
        imageAlt="Isotipo TRACO"
        backgroundImage="/fotos/traco-ecosistema-hero.webp"
      />

      <section className="bg-[#f5f2eb] px-6 py-32 text-black">
  <div className="mx-auto max-w-7xl">

    <div className="mb-24 max-w-4xl">
      <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#2563eb]">
        Qué es TRACO
      </p>

      <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
        Más que trámites.
        <br />
        Infraestructura para que una empresa pueda existir, operar y crecer correctamente.
      </h2>

      <p className="mt-10 text-lg font-light leading-[1.9] text-black/60">
        TRACO acompaña la creación, formalización y evolución documental de las empresas,
        permitiendo que la visión estratégica se traduzca en una estructura legal,
        tributaria y corporativa sólida.
      </p>
    </div>

    <div className="mb-16">
  <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#2563eb]">
    Casos de Impacto
  </p>

  <h3 className="max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.04em] md:text-5xl">
    Lo que sucede cuando la estructura documental deja de ser un obstáculo.
  </h3>
</div>

<div className="grid gap-8 md:grid-cols-2">
  {[
    "/fotos/traco-card-1.webp",
    "/fotos/traco-card-2.webp",
    "/fotos/traco-card-3.webp",
    "/fotos/traco-card-4.webp",
  ].map((image, index) => (
    <div
      key={index}
      className="
        group
        overflow-hidden
        rounded-[2rem]
        border
        border-black/10
        bg-white
        shadow-[0_20px_60px_rgba(0,0,0,0.06)]
      "
    >
      <img
        src={image}
        alt={`Caso de impacto TRACO ${index + 1}`}
        className="
          h-auto
          w-full
          transition-all
          duration-700
          group-hover:scale-[1.03]
        "
      />
    </div>
  ))}
</div>

  </div>
</section>

<MicrositePodcast
  eyebrow="Podcast · TRACO"
  title="Conversaciones sobre formalización, trámites y estructura empresarial."
  description="Un espacio para explicar cómo la correcta gestión documental, tributaria y societaria permite que una empresa opere con mayor control y seguridad."
  youtubeUrl="https://www.youtube.com/"
  embedUrl="https://www.youtube.com/embed/VIDEO_ID"
  accentColor="#2563eb"
/>


      <Footer />
    </main>
  );
}