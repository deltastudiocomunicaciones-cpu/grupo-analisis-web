import StrategicDivider from "@/components/ui/StrategicDivider";
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
        backgroundImage="/fotos/cec-hero.jpg"
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

    <div className="grid gap-8 lg:grid-cols-2">

      <div className="rounded-[2rem] border border-black/10 bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#16a34a]">
          Servicio Estratégico 01
        </p>

        <h3 className="text-3xl font-semibold tracking-[-0.04em]">
          Declaraciones de Renta
        </h3>

        <p className="mt-6 text-base leading-[1.9] text-black/60">
          Más que una obligación tributaria, una declaración correctamente
          estructurada permite proteger patrimonio, anticipar riesgos y tomar
          mejores decisiones financieras.
        </p>

        <ul className="mt-8 space-y-3 text-sm text-black/60">
          <li>• Personas naturales</li>
          <li>• Empresarios</li>
          <li>• Profesionales independientes</li>
          <li>• Planeación tributaria</li>
          <li>• Gestión patrimonial</li>
        </ul>
      </div>

      <div className="rounded-[2rem] border border-black/10 bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#16a34a]">
          Servicio Estratégico 02
        </p>

        <h3 className="text-3xl font-semibold tracking-[-0.04em]">
          Contabilidad Total o por Eventos
        </h3>

        <p className="mt-6 text-base leading-[1.9] text-black/60">
          Diseñamos esquemas contables adaptados al tamaño, ritmo y necesidades
          de cada organización para garantizar control, cumplimiento y acceso
          oportuno a la información.
        </p>

        <ul className="mt-8 space-y-3 text-sm text-black/60">
          <li>• Información financiera confiable</li>
          <li>• Control empresarial</li>
          <li>• Reportes oportunos</li>
          <li>• Cumplimiento normativo</li>
          <li>• Escalabilidad operativa</li>
        </ul>
      </div>

    </div>

    <div className="mt-24 border-t border-black/10 pt-16">
      <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#16a34a]">
        Por qué existe la comunidad
      </p>

      <h3 className="max-w-4xl text-3xl font-semibold leading-[1.1] tracking-[-0.04em] md:text-5xl">
        Porque el futuro pertenece a los contadores que interpretan información, no solo a quienes la registran.
      </h3>

      <p className="mt-10 max-w-3xl text-lg font-light leading-[1.9] text-black/60">
        Contadores en Colombia busca conectar conocimiento, tecnología,
        actualización profesional y pensamiento estratégico para fortalecer el
        rol del contador dentro de las decisiones empresariales más importantes.
      </p>
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

<StrategicDivider
  quote="La evolución profesional comienza cuando el conocimiento se convierte en liderazgo."
/>

      <Footer />
    </main>
  );
}