import CustomCursor from "@/components/ui/CustomCursor";
import PageTransition from "@/components/providers/PageTransition";
import Loader from "@/components/ui/Loader";
import SmoothScroll from "@/components/providers/SmoothScroll";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://grupoayc.co"),

  title: {
    default: "Grupo Análisis & Consultorías | Inteligencia Estratégica",
    template: "%s | Grupo A&C",
  },

  description:
    "Planeación tributaria, auditoría financiera, protección patrimonial, software contable SADI y consultoría estratégica para empresas en Colombia.",

  keywords: [
    "Grupo Análisis y Consultorías",
    "Grupo A&C",
    "planeación tributaria",
    "auditoría financiera",
    "protección patrimonial",
    "consultoría financiera",
    "consultoría empresarial",
    "SADI ERP",
    "TRACO",
    "Contadores en Colombia",
    "contabilidad estratégica",
    "Medellín Colombia",
  ],

  authors: [{ name: "Grupo A&C" }],
  creator: "SEMA Strategic Intelligence Studio",

  openGraph: {
    title: "Grupo Análisis & Consultorías | Inteligencia Estratégica",
    description:
      "Arquitectura financiera, tributaria y estratégica para empresas que piensan a largo plazo.",
    url: "https://grupoayc.co",
    siteName: "Grupo A&C",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/og/grupo-ayc-og.png",
        width: 1200,
        height: 630,
        alt: "Grupo Análisis & Consultorías",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Grupo Análisis & Consultorías | Inteligencia Estratégica",
    description:
      "Planeación tributaria, auditoría financiera, protección patrimonial y tecnología empresarial en Colombia.",
    images: ["/og/grupo-ayc-og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
  <body>
  <Loader />
  <CustomCursor />

  <SmoothScroll>
    <PageTransition>
      {children}
    </PageTransition>
  </SmoothScroll>
</body>
</html>
  );
}