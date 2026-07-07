export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Grupo Análisis & Consultorías",
    alternateName: "Grupo A&C",
    url: "https://grupoayc.co",
    logo: "https://grupoayc.co/logos/logo-final.png",
    image: "https://grupoayc.co/og/grupo-ayc-og-v1.png",
    description:
      "Consultoría tributaria, financiera, patrimonial y tecnológica para empresas en Colombia.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Medellín",
      addressRegion: "Antioquia",
      addressCountry: "CO",
    },
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+57 312 690 1475",
      contactType: "customer service",
      availableLanguage: ["Spanish"],
    },
    knowsAbout: [
      "Planeación tributaria",
      "Auditoría financiera",
      "Protección patrimonial",
      "Consultoría empresarial",
      "Software contable SADI",
      "Trámites empresariales TRACO",
      "Contabilidad estratégica",
      "Estructura financiera",
      "Reestructuración patrimonial",
    ],
    sameAs: ["https://grupoayc.co"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}