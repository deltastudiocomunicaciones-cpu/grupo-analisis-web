import sharp from "sharp";
import path from "path";

const images = [
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
    input: "public/fotos/asesor-contacto.png",
    output: "public/fotos/asesor-contacto.webp",
    width: 600,
    quality: 78,
  },
  {
    input: "public/fotos/sadimicrositio.png",
    output: "public/fotos/sadimicrositio.webp",
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
    input: "public/logos/grupoayc-logo.png",
    output: "public/logos/grupoayc-logo.webp",
    width: 900,
    quality: 82,
  },
];

for (const image of images) {
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

  console.log(`Optimizada: ${image.output}`);
}