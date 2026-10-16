import CrmEmbedGate from "@/components/ui/CrmEmbedGate";

export default function TaxRefundCrmEmbed() {
  return (
    <CrmEmbedGate
      formId="ZXTN0zZBswHhSwYDNiAC"
      formName="Formulario de Devolución de Impuestos"
      title="Formulario de Devolución de Impuestos"
      height={1143}
      eyebrow="Devolución de impuestos"
      heading="Inicie la evaluación de su caso."
      description="Su solicitud ingresará directamente a nuestro sistema comercial para clasificación, seguimiento y revisión por el equipo tributario de Grupo A&C."
      buttonLabel="Iniciar evaluación"
      accentColor="#c96a1b"
    />
  );
}