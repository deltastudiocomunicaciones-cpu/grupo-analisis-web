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
  ambientColor="#d97706"
  imageSrc="sadi-isotype"
  imageAlt="Isotipo SADI ERP"
/>

      <Footer />
    </main>
  );
}