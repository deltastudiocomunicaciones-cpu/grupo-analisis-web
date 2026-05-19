import Navbar from "@/components/layout/Navbar";
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
        ambientColor="#2563eb"
        imageSrc="/brands/traco-isotype.png"
        imageAlt="Isotipo TRACO"
      />

      <Footer />
    </main>
  );
}