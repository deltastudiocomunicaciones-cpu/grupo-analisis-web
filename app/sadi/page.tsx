import StrategicDivider from "@/components/ui/StrategicDivider";
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
  button="Solicitar Demo"
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

    <div className="grid gap-8 lg:grid-cols-2">

      <div className="rounded-[2rem] border border-black/10 bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#d97706]">
          Servicio Estratégico 01
        </p>

        <h3 className="text-3xl font-semibold tracking-[-0.04em]">
          Automatización Empresarial
        </h3>

        <p className="mt-6 text-base leading-[1.9] text-black/60">
          Automatiza procesos críticos para reducir errores, aumentar velocidad
          operativa y garantizar trazabilidad de la información.
        </p>

        <ul className="mt-8 space-y-3 text-sm text-black/60">
          <li>• Facturación electrónica</li>
          <li>• Nómina electrónica</li>
          <li>• Compras y proveedores</li>
          <li>• Control documental</li>
          <li>• Información financiera integrada</li>
        </ul>
      </div>

      <div className="rounded-[2rem] border border-black/10 bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#d97706]">
          Servicio Estratégico 02
        </p>

        <h3 className="text-3xl font-semibold tracking-[-0.04em]">
          Diseño de Procesos
        </h3>

        <p className="mt-6 text-base leading-[1.9] text-black/60">
          Estructuramos flujos de trabajo que conectan personas, tecnología
          e información para mejorar control y escalabilidad.
        </p>

        <ul className="mt-8 space-y-3 text-sm text-black/60">
          <li>• Procesos administrativos</li>
          <li>• Flujos de aprobación</li>
          <li>• Gestión financiera</li>
          <li>• Trazabilidad operativa</li>
          <li>• Optimización de recursos</li>
        </ul>
      </div>

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
  youtubeUrl="https://www.youtube.com/"
  embedUrl="https://www.youtube.com/embed/VIDEO_ID"
  accentColor="#d97706"
/>

<StrategicDivider
  quote="La tecnología no reemplaza el juicio humano; libera tiempo para ejercerlo mejor."
/>

      <Footer />
    </main>
  );
}