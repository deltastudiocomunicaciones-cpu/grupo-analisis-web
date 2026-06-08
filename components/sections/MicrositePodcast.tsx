interface MicrositePodcastProps {
  eyebrow: string;
  title: string;
  description: string;
  youtubeUrl: string;
  embedUrl: string;
  accentColor?: string;
}

export default function MicrositePodcast({
  eyebrow,
  title,
  description,
  youtubeUrl,
  embedUrl,
  accentColor = "#c96a1b",
}: MicrositePodcastProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f4efe7] via-[#efe8dd] to-[#e7dfd3] px-6 py-24 text-black">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 h-[420px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]"
          style={{
            backgroundColor: `${accentColor}14`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p
            className="mb-6 text-xs uppercase tracking-[0.35em]"
            style={{ color: accentColor }}
          >
            {eyebrow}
          </p>

          <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.05em] md:text-5xl">
            {title}
          </h2>

          <p className="mt-8 max-w-xl text-base font-light leading-[1.9] text-black/60">
            {description}
          </p>

          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-full border border-black/10 bg-black/[0.03] px-6 py-3 text-sm text-black/60 transition-all duration-500 hover:border-black/20 hover:bg-black/5 hover:text-black"
          >
            Ver en YouTube →
          </a>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-black shadow-[0_30px_100px_rgba(0,0,0,0.22)]">
          <div className="aspect-video">
            <iframe
              src={embedUrl}
              title={title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}