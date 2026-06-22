import Script from "next/script";
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
  images: ["/og/grupo-ayc-og-v1.png"],
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

    <SmoothScroll>
      <PageTransition>
        {children}
      </PageTransition>
    </SmoothScroll>

    {/* GOOGLE ANALYTICS */}

    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-GMYHDFLBH0"
      strategy="afterInteractive"
    />

    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-GMYHDFLBH0');
      `}
    </Script>

  </body>
</html>
  );
}