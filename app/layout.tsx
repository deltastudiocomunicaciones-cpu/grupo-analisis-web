import CustomCursor from "@/components/ui/CustomCursor";
import PageTransition from "@/components/providers/PageTransition";
import Loader from "@/components/ui/Loader";
import SmoothScroll from "@/components/providers/SmoothScroll";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grupo A&C — Strategic Intelligence",
  description:
    "Grupo Análisis & Consultorías desarrolla estructuras tributarias, financieras y estratégicas para empresas que piensan a largo plazo.",

  keywords: [
    "consultoría financiera",
    "planeación tributaria",
    "auditoría estratégica",
    "SADI ERP",
    "Grupo A&C",
    "consultoría empresarial",
    "inteligencia corporativa",
    "contabilidad estratégica",
  ],

  authors: [
    {
      name: "Grupo A&C",
    },
  ],

  creator: "SEMA Brand Intelligence",

  openGraph: {
    title: "Grupo A&C — Strategic Intelligence",
    description:
      "Arquitectura financiera, tributaria y estratégica para empresas de alto impacto.",
    url: "https://grupoac.vercel.app",
    siteName: "Grupo A&C",
    locale: "es_CO",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Grupo A&C — Strategic Intelligence",
    description:
      "Estrategia financiera y visión empresarial para compañías que evolucionan.",
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