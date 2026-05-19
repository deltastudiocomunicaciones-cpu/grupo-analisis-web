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
        ambientColor="#c96a1b"
        imageSrc="/brands/analisis-isotype.png"
        imageAlt="Isotipo Análisis & Consultorías"
      />

      <Footer />
    </main>
  );
}