type Props = {
  message: string;
};

const WHATSAPP_NUMBER = "573118687774";

export default function ServiceWhatsAppFloat({ message }: Props) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar con Grupo A&C por WhatsApp"
      className="
        fixed
        bottom-5
        right-5
        z-[80]
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-[0_14px_36px_rgba(0,0,0,0.20)]
        transition
        duration-300
        hover:-translate-y-1
        hover:scale-[1.04]
        md:bottom-7
        md:right-7
      "
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-6 w-6"
        fill="currentColor"
      >
        <path d="M16.04 3C9.39 3 4 8.28 4 14.79c0 2.29.67 4.52 1.94 6.43L4 29l8.03-1.88a12.2 12.2 0 0 0 4 .68h.01C22.69 27.8 28 22.52 28 16S22.69 3 16.04 3Zm0 22.8h-.01a10.1 10.1 0 0 1-5.13-1.4l-.37-.22-4.76 1.12 1.27-4.54-.24-.38a9.65 9.65 0 0 1-1.56-5.59C5.24 9.38 10.08 5 16.04 5 22 5 26.8 9.48 26.8 16s-4.8 9.8-10.76 9.8Zm5.9-7.34c-.32-.16-1.9-.92-2.2-1.02-.29-.11-.5-.16-.72.16-.21.32-.82 1.02-1.01 1.23-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.56-1.56a9.54 9.54 0 0 1-1.77-2.16c-.19-.32-.02-.49.14-.65.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.72-.98-2.35-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.08 1.31 3.29c.16.21 2.26 3.43 5.48 4.81.77.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.77 2.17-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}