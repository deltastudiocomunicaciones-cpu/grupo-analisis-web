import StrategicDivider from "@/components/ui/StrategicDivider";
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
        backgroundImage="/fotos/analisis-hero.jpg"
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

    <div className="grid gap-8 lg:grid-cols-2">

      <div className="rounded-[2rem] border border-black/10 bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#c96a1b]">
          Servicio Estratégico 01
        </p>

        <h3 className="text-3xl font-semibold tracking-[-0.04em]">
          Auditorías Financieras
        </h3>

        <p className="mt-6 text-base leading-[1.9] text-black/60">
          Una auditoría no solo revisa cifras. Permite identificar riesgos,
          validar información, fortalecer el control interno y construir una
          visión confiable del estado real de la organización.
        </p>

        <ul className="mt-8 space-y-3 text-sm text-black/60">
          <li>• Diagnóstico financiero</li>
          <li>• Revisión contable</li>
          <li>• Control interno</li>
          <li>• Identificación de riesgos</li>
          <li>• Recomendaciones estratégicas</li>
        </ul>
      </div>

      <div className="rounded-[2rem] border border-black/10 bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#c96a1b]">
          Servicio Estratégico 02
        </p>

        <h3 className="text-3xl font-semibold tracking-[-0.04em]">
          Asesoría Tributaria y Financiera
        </h3>

        <p className="mt-6 text-base leading-[1.9] text-black/60">
          Las decisiones tributarias y financieras deben leerse como parte de
          una misma arquitectura empresarial: liquidez, cumplimiento, eficiencia,
          crecimiento y sostenibilidad patrimonial.
        </p>

        <ul className="mt-8 space-y-3 text-sm text-black/60">
          <li>• Planeación tributaria</li>
          <li>• Análisis financiero</li>
          <li>• Eficiencia fiscal</li>
          <li>• Gestión de riesgos</li>
          <li>• Estrategia empresarial</li>
        </ul>
      </div>

      <div className="rounded-[2rem] border border-black/10 bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#c96a1b]">
          Servicio Estratégico 03
        </p>

        <h3 className="text-3xl font-semibold tracking-[-0.04em]">
          Reestructuración Patrimonial
        </h3>

        <p className="mt-6 text-base leading-[1.9] text-black/60">
          Proteger patrimonio requiere ordenar estructuras, anticipar riesgos y
          diseñar mecanismos que permitan continuidad, seguridad jurídica y
          sostenibilidad en el largo plazo.
        </p>

        <ul className="mt-8 space-y-3 text-sm text-black/60">
          <li>• Protección patrimonial</li>
          <li>• Organización de activos</li>
          <li>• Continuidad empresarial</li>
          <li>• Gobierno corporativo</li>
          <li>• Planeación de largo plazo</li>
        </ul>
      </div>

      <div className="rounded-[2rem] border border-black/10 bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#c96a1b]">
          Servicio Estratégico 04
        </p>

        <h3 className="text-3xl font-semibold tracking-[-0.04em]">
          Insolvencias y Asesoría Jurídica
        </h3>

        <p className="mt-6 text-base leading-[1.9] text-black/60">
          Cuando una organización enfrenta presión financiera o decisiones
          jurídicas complejas, necesita una lectura integral que conecte
          estrategia, riesgo, negociación y protección empresarial.
        </p>

        <ul className="mt-8 space-y-3 text-sm text-black/60">
          <li>• Reorganización empresarial</li>
          <li>• Protección frente a acreedores</li>
          <li>• Acompañamiento jurídico</li>
          <li>• Estrategia contractual</li>
          <li>• Continuidad operativa</li>
        </ul>
      </div>

    </div>

    <div className="mt-24 border-t border-black/10 pt-16">
      <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#c96a1b]">
        Por qué existe Análisis & Consultorías
      </p>

      <h3 className="max-w-4xl text-3xl font-semibold leading-[1.1] tracking-[-0.04em] md:text-5xl">
        Porque las empresas no necesitan más información. Necesitan criterio para decidir.
      </h3>

      <p className="mt-10 max-w-3xl text-lg font-light leading-[1.9] text-black/60">
        Análisis & Consultorías funciona como la unidad de pensamiento estratégico
        del ecosistema Grupo A&C: interpreta información, identifica riesgos,
        diseña escenarios y acompaña decisiones que impactan patrimonio,
        continuidad y crecimiento empresarial.
      </p>
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

<StrategicDivider
  quote="La incertidumbre disminuye cuando existe claridad para decidir."
/>

      <Footer />
    </main>
  );
}