import type { Metadata } from "next";
import NosotrosClient from "./NosotrosClient";

export const metadata: Metadata = {
  title: "Nosotros | Historia, visión y ecosistema empresarial",
  description:
    "Conoce la historia, visión, valores y estructura de Grupo Análisis & Consultorías, un ecosistema empresarial nacido en Medellín desde 2006.",
  alternates: {
    canonical: "/nosotros",
  },
  openGraph: {
    title: "Nosotros | Grupo Análisis & Consultorías",
    description:
      "Una firma construida sobre estrategia tributaria, estructura financiera, tecnología empresarial y visión de largo plazo.",
    url: "/nosotros",
    type: "website",
    images: [
      {
        url: "/og/grupo-ayc-og-v1.png",
        width: 1200,
        height: 630,
        alt: "Nosotros Grupo Análisis & Consultorías",
      },
    ],
  },
};

export default function NosotrosPage() {
  return <NosotrosClient />;
}