interface SectionEyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionEyebrow({
  children,
  className = "",
}: SectionEyebrowProps) {
  return (
    <p
      className={`
        uppercase
        tracking-[0.45em]
        text-sm
        text-[#c96a1b]
        mb-8
        ${className}
      `}
    >
      {children}
    </p>
  );
}