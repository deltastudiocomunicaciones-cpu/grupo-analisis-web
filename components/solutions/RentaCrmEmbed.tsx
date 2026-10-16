import CrmEmbedGate from "@/components/ui/CrmEmbedGate";

export default function RentaCrmEmbed() {
  return (
    <CrmEmbedGate
      formId="vvs6RZio1HLk6LRiykSn"
      formName="Formulario Declaración de Renta PN"
      title="Formulario Declaración de Renta PN"
      height={650}
      eyebrow="Declaración de renta"
      heading="Inicie su solicitud cuando esté listo."
      description="Su información ingresará directamente a nuestro sistema comercial para clasificación, seguimiento y atención por el equipo de Grupo A&C."
      buttonLabel="Iniciar cotización"
      accentColor="#c96a1b"
    />
  );
}