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
    input: "public/videos/chess_final.mp4",
    output: "public/videos/optimized/chess_final.mp4",
    width: 1920,
    crf: 28,
  },
  {
    input: "public/videos/chess_final1.mp4",
    output: "public/videos/optimized/chess_final1.mp4",
    width: 1920,
    crf: 30,
  },
  {
    input: "public/videos/chess_final2.mp4",
    output: "public/videos/optimized/chess_final2.mp4",
    width: 1920,
    crf: 30,
  },
  {
    input: "public/videos/articulo-destacado.mp4",
    output: "public/videos/optimized/articulo-destacado.mp4",
    width: 1600,
    crf: 30,
  },
  {
    input: "public/videos/inversiones-v2.mp4",
    output: "public/videos/optimized/inversiones-v2.mp4",
    width: 1600,
    crf: 30,
  },
  {
    input: "public/videos/intelligence-v2.mp4",
    output: "public/videos/optimized/intelligence-v2.mp4",
    width: 1600,
    crf: 30,
  },
  {
    input: "public/videos/intro-grupo-ayc.mp4",
    output: "public/videos/optimized/intro-grupo-ayc.mp4",
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
      "-an",
      "-movflags",
      "+faststart",
      video.output,
    ];

    console.log(`Optimizando: ${video.input}`);

    execFile(ffmpegPath, args, (error) => {
      if (error) {
        reject(error);
        return;
      }

      const originalSize = fs.statSync(video.input).size;
      const optimizedSize = fs.statSync(video.output).size;

      console.log(
        `Listo: ${video.output} | ${formatMB(originalSize)} MB → ${formatMB(
          optimizedSize
        )} MB`
      );

      resolve();
    });
  });
}

for (const video of videos) {
  await optimizeVideo(video);
}

console.log("Optimización de videos terminada.");