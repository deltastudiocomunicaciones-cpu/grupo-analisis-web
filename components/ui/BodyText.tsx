interface BodyTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function BodyText({
  children,
  className = "",
}: BodyTextProps) {
  return (
    <p
      className={`
        text-white/60
        text-lg
        leading-[1.9]
        font-light
        ${className}
      `}
    >
      {children}
    </p>
  );
}