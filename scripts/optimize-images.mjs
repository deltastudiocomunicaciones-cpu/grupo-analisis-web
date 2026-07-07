import sharp from "sharp";
import fs from "fs";

const images = [
  // HERO / FONDOS PESADOS
  {
    input: "public/fotos/nosotros/colombia.png",
    output: "public/fotos/nosotros/colombia.webp",
    width: 1600,
    quality: 78,
  },
  {
    input: "public/fotos/soluciones-main-hero.png",
    output: "public/fotos/soluciones-main-hero.webp",
    width: 1800,
    quality: 78,
  },
  {
    input: "public/fotos/contacto-landscape.png",
    output: "public/fotos/contacto-landscape.webp",
    width: 1800,
    quality: 78,
  },
  {
    input: "public/fotos/sadimicrositio.png",
    output: "public/fotos/sadimicrositio.webp",
    width: 1800,
    quality: 78,
  },

  // CONTACTO
  {
    input: "public/fotos/asesor-contacto.png",
    output: "public/fotos/asesor-contacto.webp",
    width: 600,
    quality: 78,
  },

  // SADI
  {
    input: "public/fotos/sadi-ecosistema-hero.png",
    output: "public/fotos/sadi-ecosistema-hero.webp",
    width: 1800,
    quality: 78,
  },
  {
    input: "public/fotos/sadi-hero-v1.png",
    output: "public/fotos/sadi-hero-v1.webp",
    width: 1800,
    quality: 78,
  },
  {
    input: "public/fotos/sadi-impacto-1.png",
    output: "public/fotos/sadi-impacto-1.webp",
    width: 1400,
    quality: 78,
  },
  {
    input: "public/fotos/sadi-impacto-v2.png",
    output: "public/fotos/sadi-impacto-v2.webp",
    width: 1400,
    quality: 78,
  },
  {
    input: "public/fotos/sadi-impacto-3.png",
    output: "public/fotos/sadi-impacto-3.webp",
    width: 1400,
    quality: 78,
  },
  {
    input: "public/fotos/sadi-impacto-4.png",
    output: "public/fotos/sadi-impacto-4.webp",
    width: 1400,
    quality: 78,
  },

  // TRACO / CEC / ECOSISTEMA
  {
    input: "public/fotos/traco-ecosistema-hero.png",
    output: "public/fotos/traco-ecosistema-hero.webp",
    width: 1800,
    quality: 78,
  },
  {
    input: "public/fotos/cec-ecosistema-hero.png",
    output: "public/fotos/cec-ecosistema-hero.webp",
    width: 1800,
    quality: 78,
  },
  {
    input: "public/fotos/traco-card-3.png",
    output: "public/fotos/traco-card-3.webp",
    width: 1200,
    quality: 78,
  },
  {
    input: "public/fotos/traco-card-4.png",
    output: "public/fotos/traco-card-4.webp",
    width: 1200,
    quality: 78,
  },
  {
    input: "public/fotos/cec-card-4.png",
    output: "public/fotos/cec-card-4.webp",
    width: 1200,
    quality: 78,
  },

  // SERVICIOS
  {
    input: "public/fotos/servicios/camara-comercio-v1.png",
    output: "public/fotos/servicios/camara-comercio-v1.webp",
    width: 1200,
    quality: 78,
  },
  {
    input: "public/fotos/servicios/contabilidad.png",
    output: "public/fotos/servicios/contabilidad.webp",
    width: 1200,
    quality: 78,
  },
  {
    input: "public/fotos/servicios/estrategia-tributaria.png",
    output: "public/fotos/servicios/estrategia-tributaria.webp",
    width: 1200,
    quality: 78,
  },
  {
    input: "public/fotos/servicios/asesoria-tributaria.png",
    output: "public/fotos/servicios/asesoria-tributaria.webp",
    width: 1200,
    quality: 78,
  },
  {
    input: "public/fotos/servicios/auditorias-financieras.png",
    output: "public/fotos/servicios/auditorias-financieras.webp",
    width: 1200,
    quality: 78,
  },
  {
    input: "public/fotos/servicios/devoluciones-iva.png",
    output: "public/fotos/servicios/devoluciones-iva.webp",
    width: 1200,
    quality: 78,
  },
  {
    input: "public/fotos/servicios/tramites-dian-v1.png",
    output: "public/fotos/servicios/tramites-dian-v1.webp",
    width: 1200,
    quality: 78,
  },

  // LOGOS / MARCAS
  {
    input: "public/logos/grupoayc-logo.png",
    output: "public/logos/grupoayc-logo.webp",
    width: 900,
    quality: 82,
  },
  {
    input: "public/brands/tuercas-pernos.png",
    output: "public/brands/tuercas-pernos.webp",
    width: 1200,
    quality: 78,
  },
];

for (const image of images) {
  if (!fs.existsSync(image.input)) {
    console.log(`No existe, saltando: ${image.input}`);
    continue;
  }

  await sharp(image.input)
    .resize({
      width: image.width,
      withoutEnlargement: true,
    })
    .webp({
      quality: image.quality,
      effort: 6,
    })
    .toFile(image.output);

  const originalSize = fs.statSync(image.input).size / 1024 / 1024;
  const optimizedSize = fs.statSync(image.output).size / 1024 / 1024;

  console.log(
    `Optimizada: ${image.output} | ${originalSize.toFixed(
      2
    )} MB → ${optimizedSize.toFixed(2)} MB`
  );
}