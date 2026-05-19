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
        ambientColor="#16a34a"
        imageSrc="/brands/cec-isotype.png"
        imageAlt="Isotipo CEC Contadores en Colombia"
      />

      <Footer />
    </main>
  );
}