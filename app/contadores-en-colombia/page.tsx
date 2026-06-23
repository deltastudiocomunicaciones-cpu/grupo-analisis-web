import MicrositePodcast from "@/components/sections/MicrositePodcast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MicrositeHero from "@/components/sections/MicrositeHero";

export default function ContadoresEnColombiaPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <MicrositeHero
        eyebrow="Contadores en Colombia"
        title="La nueva generación del pensamiento contable."
        description="Comunidad, actualización y liderazgo para contadores que quieren evolucionar hacia auditoría, estrategia e inteligencia financiera."
        button="Unirme a la Comunidad"
        buttonLink="https://portalgrupoayc.com"
        ambientColor="#16a34a"
        imageSrc="/brands/cec-isotype.png"
        imageAlt="Isotipo CEC Contadores en Colombia"
        backgroundImage="/fotos/cec-ecosistema-hero.png"
      />

      <section className="bg-[#f5f2eb] px-6 py-32 text-black">
  <div className="mx-auto max-w-7xl">

    <div className="mb-24 max-w-4xl">
      <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#16a34a]">
        Qué es Contadores en Colombia
      </p>

      <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
        Una comunidad para quienes entienden que la contabilidad ya no es suficiente.
      </h2>

      <p className="mt-10 text-lg font-light leading-[1.9] text-black/60">
        Contadores en Colombia nace para impulsar una nueva generación de
        profesionales capaces de conectar conocimiento técnico, auditoría,
        tecnología e inteligencia financiera dentro de un entorno empresarial
        cada vez más exigente.
      </p>
    </div>

    <div className="mb-16">
  <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#16a34a]">
    Nueva Generación Contable
  </p>

  <h3 className="max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.04em] md:text-5xl">
    El futuro de la profesión ya comenzó.
  </h3>
</div>

<div className="grid gap-8 md:grid-cols-2">
  {[
    "/fotos/cec-card-1.png",
    "/fotos/cec-card-2.png",
    "/fotos/cec-card-3.png",
    "/fotos/cec-card-4.png",
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
        alt={`CEC Insight ${index + 1}`}
        className="
          w-full
          h-auto
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
  eyebrow="Podcast · Contadores en Colombia"
  title="La nueva generación del pensamiento contable."
  description="Conversaciones sobre actualización profesional, tributación, auditoría, tecnología y el futuro de la profesión contable."
  youtubeUrl="https://www.youtube.com/"
  embedUrl="https://www.youtube.com/embed/VIDEO_ID"
  accentColor="#16a34a"
/>


      <Footer />
    </main>
  );
}