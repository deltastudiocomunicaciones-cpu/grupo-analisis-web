"use client";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

const metrics = [
  {
    value: "+1720",
    label: "Empresas acompañadas",
  },
  {
    value: "+20",
    label: "Años de experiencia estratégica",
  },
  {
    value: "98%",
    label: "Retención de clientes",
  },
  {
    value: "+$40B",
    label: "Activos analizados",
  },
];

export default function MetricsSection() {
  return (
    <section className="relative bg-[#f5f2eb] text-black py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,106,27,0.08),transparent_40%)]" />

      <Container className="relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {metrics.map((metric, index) => (
            <FadeIn
              key={metric.label}
              delay={index * 0.12}
            >
              <div className="text-center">
                <h3 className="text-5xl md:text-6xl font-semibold tracking-[-0.05em] mb-4">
                  {metric.value}
                </h3>

                <p className="text-black/55 uppercase tracking-[0.2em] text-xs">
                  {metric.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}