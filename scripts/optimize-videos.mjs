import ffmpegPath from "ffmpeg-static";
import { execFile } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

if (!ffmpegPath) {
  console.error("No se encontró FFmpeg.");
  process.exit(1);
}

const videos = [
  {
    input: "media-source/videos/chess_final.mp4",
    output: "public/videos/optimized/chess_final.mp4",
    width: 1920,
    crf: 28,
  },
  {
    input: "media-source/videos/chess_final1.mp4",
    output: "public/videos/optimized/chess_final1.mp4",
    width: 1920,
    crf: 30,
  },
  {
    input: "media-source/videos/chess_final2.mp4",
    output: "public/videos/optimized/chess_final2.mp4",
    width: 1920,
    crf: 30,
  },
  {
    input: "media-source/videos/articulo-destacado.mp4",
    output: "public/videos/optimized/articulo-destacado.mp4",
    width: 1600,
    crf: 30,
  },
  {
    input: "media-source/videos/inversiones-v2.mp4",
    output: "public/videos/optimized/inversiones-v2.mp4",
    width: 1600,
    crf: 30,
  },
  {
    input: "media-source/videos/intelligence-v2.mp4",
    output: "public/videos/optimized/intelligence-v2.mp4",
    width: 1600,
    crf: 30,
  },
];

fs.mkdirSync("public/videos/optimized", { recursive: true });

function formatMB(bytes) {
  return (bytes / 1024 / 1024).toFixed(2);
}

function optimizeVideo(video) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(video.input)) {
      console.log(`No existe, saltando: ${video.input}`);
      resolve();
      return;
    }

    const outputDirectory = path.dirname(video.output);
    const outputName = path.basename(video.output, path.extname(video.output));

    fs.mkdirSync(outputDirectory, { recursive: true });

    const candidate = path.join(
      outputDirectory,
      `${outputName}.candidate.mp4`
    );

    if (fs.existsSync(candidate)) {
      fs.rmSync(candidate, { force: true });
    }

    const args = [
      "-y",
      "-i",
      video.input,
      "-vf",
      `scale=${video.width}:-2`,
      "-c:v",
      "libx264",
      "-crf",
      String(video.crf),
      "-preset",
      "slow",
      "-pix_fmt",
      "yuv420p",
      "-an",
      "-movflags",
      "+faststart",
      candidate,
    ];

    console.log(`\nOptimizando: ${video.input}`);

    execFile(ffmpegPath, args, (error) => {
      if (error) {
        if (fs.existsSync(candidate)) {
          fs.rmSync(candidate, { force: true });
        }

        reject(error);
        return;
      }

      const originalSize = fs.statSync(video.input).size;
      const candidateSize = fs.statSync(candidate).size;

      if (fs.existsSync(video.output)) {
        const productionSize = fs.statSync(video.output).size;

        console.log(
          `Master: ${formatMB(originalSize)} MB | Producción actual: ${formatMB(
            productionSize
          )} MB | Candidato: ${formatMB(candidateSize)} MB`
        );

        if (candidateSize >= productionSize) {
          fs.rmSync(candidate, { force: true });

          console.log(
            `RECHAZADO: el candidato no mejora el peso de ${video.output}`
          );

          resolve();
          return;
        }
      } else {
        console.log(
          `Master: ${formatMB(originalSize)} MB | Nuevo candidato: ${formatMB(
            candidateSize
          )} MB`
        );
      }

      fs.copyFileSync(candidate, video.output);
      fs.rmSync(candidate, { force: true });

      console.log(
        `ACEPTADO: ${video.output} → ${formatMB(candidateSize)} MB`
      );

      resolve();
    });
  });
}

for (const video of videos) {
  await optimizeVideo(video);
}

console.log("\nOptimización de videos terminada.");