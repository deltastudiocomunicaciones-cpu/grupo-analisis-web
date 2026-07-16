import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import PageTransition from "@/components/providers/PageTransition";
import ClientOnlyLoader from "@/components/providers/ClientOnlyLoader";
import SmoothScroll from "@/components/providers/SmoothScroll";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.grupoayc.co"),

  title: {
    default:
      "Grupo A&C | Grupo Análisis & Consultorías | Inteligencia Estratégica",
    template: "%s | Grupo A&C",
  },

  description:
    "Planeación tributaria, auditoría financiera, protección patrimonial, software contable SADI y consultoría estratégica para empresas en Colombia.",

  keywords: [
    "Grupo Análisis y Consultorías",
    "Grupo Análisis & Consultorías",
    "Grupo A&C",
    "Grupo AYC",
    "Grupo AyC",
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
    "Sabaneta Antioquia",
  ],

  authors: [{ name: "Grupo A&C" }],
  creator: "SEMA Strategic Intelligence Studio",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Grupo A&C | Grupo Análisis & Consultorías | Inteligencia Estratégica",
    description:
      "Arquitectura financiera, tributaria y estratégica para empresas que piensan a largo plazo.",
    url: "https://www.grupoayc.co",
    siteName: "Grupo Análisis & Consultorías",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://www.grupoayc.co/og/grupo-ayc-og-v2.png",
        width: 1200,
        height: 630,
        alt: "Grupo Análisis & Consultorías",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Grupo A&C | Grupo Análisis & Consultorías | Inteligencia Estratégica",
    description:
      "Planeación tributaria, auditoría financiera, protección patrimonial y tecnología empresarial en Colombia.",
    images: ["https://www.grupoayc.co/og/grupo-ayc-og-v2.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body>
        <OrganizationSchema />

        <ClientOnlyLoader />

        <SmoothScroll>
          <PageTransition>{children}</PageTransition>
        </SmoothScroll>

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