interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({
  children,
  className = "",
}: SectionTitleProps) {
  return (
    <h2
      className={`
        text-5xl
        sm:text-5xl
        md:text-7xl
        font-semibold
        tracking-[-0.04em]
        leading-[0.95]
        ${className}
      `}
    >
      {children}
    </h2>
  );
}