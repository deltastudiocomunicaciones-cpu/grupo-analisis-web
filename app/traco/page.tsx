import StrategicDivider from "@/components/ui/StrategicDivider";
import MicrositePodcast from "@/components/sections/MicrositePodcast";import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MicrositeHero from "@/components/sections/MicrositeHero";

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
        backgroundImage="/fotos/sadi-hero.jpg"
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

    <div className="grid gap-8 lg:grid-cols-2">

      {/* DIAN */}

      <div className="rounded-[2rem] border border-black/10 bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#2563eb]">
          Servicio Estratégico 01
        </p>

        <h3 className="text-3xl font-semibold tracking-[-0.04em]">
          Trámites DIAN
        </h3>

        <p className="mt-6 text-base leading-[1.9] text-black/60">
          La relación con la DIAN no comienza cuando aparece una sanción.
          Comienza con una estructura tributaria correctamente diseñada.
        </p>

        <ul className="mt-8 space-y-3 text-sm text-black/60">
          <li>• Inscripción y actualización RUT</li>
          <li>• Responsabilidades tributarias</li>
          <li>• Facturación electrónica</li>
          <li>• Obligaciones formales</li>
          <li>• Gestión documental</li>
        </ul>
      </div>

      {/* CAMARA */}

      <div className="rounded-[2rem] border border-black/10 bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#2563eb]">
          Servicio Estratégico 02
        </p>

        <h3 className="text-3xl font-semibold tracking-[-0.04em]">
          Cámara de Comercio
        </h3>

        <p className="mt-6 text-base leading-[1.9] text-black/60">
          Una empresa necesita una estructura jurídica coherente para sostener
          crecimiento, inversión y gobierno corporativo.
        </p>

        <ul className="mt-8 space-y-3 text-sm text-black/60">
          <li>• Constitución de sociedades</li>
          <li>• Reformas estatutarias</li>
          <li>• Cambios societarios</li>
          <li>• Renovaciones mercantiles</li>
          <li>• Registros empresariales</li>
        </ul>
      </div>

    </div>

    <div className="mt-24 border-t border-black/10 pt-16">
      <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#2563eb]">
        Por qué existe TRACO
      </p>

      <h3 className="max-w-4xl text-3xl font-semibold leading-[1.1] tracking-[-0.04em] md:text-5xl">
        Porque una gran estrategia empresarial puede fracasar por una mala ejecución documental.
      </h3>

      <p className="mt-10 max-w-3xl text-lg font-light leading-[1.9] text-black/60">
        TRACO funciona como la capa operativa que conecta la visión estratégica
        de Grupo A&C con las obligaciones formales necesarias para que una empresa
        opere correctamente ante las entidades de control y supervisión.
      </p>
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

<StrategicDivider
  quote="La formalidad no es burocracia; es la infraestructura del crecimiento."
/>
      <Footer />
    </main>
  );
}