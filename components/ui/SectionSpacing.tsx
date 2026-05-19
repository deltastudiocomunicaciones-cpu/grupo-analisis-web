interface SectionSpacingProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SectionSpacing({
  children,
  className = "",
  id,
}: SectionSpacingProps) {
  return (
    <section
      id={id}
      className={`
        relative
        py-24
        md:py-36
        overflow-hidden
        ${className}
      `}
    >
      {children}
    </section>
  );
}