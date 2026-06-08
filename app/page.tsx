import StrategicDivider from "@/components/ui/StrategicDivider";
import EcosystemSection from "@/components/sections/EcosystemSection";
import MetricsSection from "@/components/sections/MetricsSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import CeoSection from "@/components/sections/CeoSection";
import IntelligenceSection from "@/components/sections/IntelligenceSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import LegacySection from "@/components/sections/LegacySection";
import TransitionSection from "@/components/sections/TransitionSection";
import Footer from "@/components/layout/Footer";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";


export default function InversionesPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />


      <HeroSection />

      <div className="relative h-40 bg-gradient-to-b from-black to-[#f5f2eb]" />

      <LegacySection />

      <TransitionSection />

      <EcosystemSection />

      <CeoSection />

      <IntelligenceSection />

      <MetricsSection />

      <CaseStudiesSection />

      <FinalCtaSection />

      <StrategicDivider
  quote="La estrategia sin táctica es el camino más lento hacia la victoria."
/>

      <Footer />
    </main>
  );
}