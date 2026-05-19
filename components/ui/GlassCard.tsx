interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        p-10
        hover:bg-white/[0.05]
        transition-all
        duration-500
        ${className}
      `}
    >
      {children}
    </div>
  );
}