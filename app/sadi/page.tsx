import MicrositePodcast from "@/components/sections/MicrositePodcast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MicrositeHero from "@/components/sections/MicrositeHero";

export default function SadiPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <MicrositeHero
  eyebrow="SADI ERP"
  title="El salto del contador operativo al estratega empresarial."
  description="SADI es el software contable inteligente del ecosistema Grupo A&C, diseñado para automatizar procesos, estructurar información y elevar el rol del contador hacia auditoría, análisis y estrategia."
  button="Listo para Simplificar?"
  buttonLink="https://portalgrupoayc.com"
  ambientColor="#d97706"
  imageSrc="/brands/sadi-isotype.png"
  imageAlt="Isotipo SADI ERP"
  backgroundImage="/fotos/.png"
/>

<section className="bg-[#f5f2eb] px-6 py-32 text-black">
  <div className="mx-auto max-w-7xl">

    <div className="mb-24 max-w-4xl">
      <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#d97706]">
        Qué es SADI
      </p>

      <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
        Información organizada.
        <br />
        Decisiones más inteligentes.
      </h2>

      <p className="mt-10 text-lg font-light leading-[1.9] text-black/60">
        SADI transforma procesos operativos dispersos en información estructurada,
        permitiendo que contadores, gerentes y empresarios dediquen menos tiempo
        a tareas repetitivas y más tiempo a análisis, auditoría y estrategia.
      </p>
    </div>
<div className="mb-16">

  <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#d97706]">
    Casos de Impacto
  </p>

  <h3 className="text-4xl md:text-5xl font-semibold tracking-[-0.04em]">
    Lo que sucede cuando la información deja de ser un problema.
  </h3>

</div>
    <div className="grid gap-8 md:grid-cols-2">

  {[
    "/fotos/sadi-impacto-1.png",
    "/fotos/sadi-impacto-2.png",
    "/fotos/sadi-impacto-3.png",
    "/fotos/sadi-impacto-4.png",
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
        alt={`Caso de impacto SADI ${index + 1}`}
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

    <div className="mt-24 border-t border-black/10 pt-16">
      <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#d97706]">
        Por qué existe SADI
      </p>

      <h3 className="max-w-4xl text-3xl font-semibold leading-[1.1] tracking-[-0.04em] md:text-5xl">
        Porque los datos por sí solos no generan valor. La inteligencia surge cuando la información está organizada.
      </h3>

      <p className="mt-10 max-w-3xl text-lg font-light leading-[1.9] text-black/60">
        SADI fue diseñado para liberar a los equipos contables de tareas operativas
        repetitivas y permitirles evolucionar hacia funciones de auditoría,
        análisis financiero y apoyo estratégico a la dirección empresarial.
      </p>
    </div>

  </div>
</section>

<MicrositePodcast
  eyebrow="Podcast · SADI ERP"
  title="Conversaciones sobre tecnología, contabilidad e inteligencia empresarial."
  description="Un espacio para explicar cómo la automatización, los sistemas de información y el criterio contable pueden transformar la operación empresarial."
  youtubeUrl="https://www.youtube.com/@SADISOFTWARE"
  embedUrl="https://www.youtube.com/embed/HVvMr-08xbI"
  accentColor="#d97706"
/>

      <Footer />
    </main>
  );
}