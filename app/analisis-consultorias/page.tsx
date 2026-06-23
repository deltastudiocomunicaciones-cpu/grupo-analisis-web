import MicrositePodcast from "@/components/sections/MicrositePodcast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MicrositeHero from "@/components/sections/MicrositeHero";


export default function AnalisisConsultoriasPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <MicrositeHero
        eyebrow="Análisis & Consultorías"
        title="Diagnóstico financiero para decisiones de alto impacto."
        description="Auditoría, planeación tributaria y análisis financiero para empresas que necesitan claridad, control y estrategia."
        button="Solicitar Diagnóstico"
        buttonLink="https://portalgrupoayc.com"
        ambientColor="#c96a1b"
        imageSrc="/brands/analisis-isotype.png"
        imageAlt="Isotipo Análisis & Consultorías"
        backgroundImage="/fotos/analisis-ecosistema-hero.png"
      />

     <section className="bg-[#f5f2eb] px-6 py-32 text-black">
  <div className="mx-auto max-w-7xl">

    <div className="mb-24 max-w-4xl">
      <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
        Qué es Análisis & Consultorías
      </p>

      <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
        Criterio financiero, tributario y patrimonial para decisiones empresariales complejas.
      </h2>

      <p className="mt-10 text-lg font-light leading-[1.9] text-black/60">
        Análisis & Consultorías acompaña a empresas, empresarios y patrimonios
        en procesos donde la información debe convertirse en diagnóstico,
        estrategia y control para tomar decisiones con mayor claridad.
      </p>
    </div>

  {/* VISIÓN ESTRATEGICA */}

<div className="mt-20 mb-24">

  <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
    Strategic Insights
  </p>

  <h3 className="max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.04em] md:text-5xl">
    Decisiones complejas requieren una lectura más profunda de la realidad empresarial.
  </h3>

</div>

<div className="grid gap-8 md:grid-cols-2">

  {[
    "/fotos/analisis-card-1.png",
    "/fotos/analisis-card-2.png",
    "/fotos/analisis-card-3.png",
    "/fotos/analisis-card-4.png",
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
        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
      "
    >
      <img
        src={image}
        alt={`Strategic Insight ${index + 1}`}
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
  eyebrow="Podcast · Análisis & Consultorías"
  title="Conversaciones para quienes toman decisiones empresariales."
  description="Un espacio para analizar estrategia tributaria, patrimonio, finanzas, auditoría y crecimiento empresarial desde una perspectiva práctica y ejecutiva."
  youtubeUrl="https://www.youtube.com/"
  embedUrl="https://www.youtube.com/embed/VIDEO_ID"
  accentColor="#c96a1b"
/>



      <Footer />
    </main>
  );
}