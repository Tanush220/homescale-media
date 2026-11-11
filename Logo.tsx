interface LogoProps {
  className?: string;
  /** Use the full official logo or only its image area */
  showWordmark?: boolean;
  /** Approximate displayed height in px */
  size?: number;
}

export function Logo({ className = '', showWordmark = true, size = 48 }: LogoProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center overflow-hidden rounded-lg bg-white ${className}`}
      style={{ height: size, width: showWordmark ? size * 1.52 : size }}
    >
      <img
        src="/images/WhatsApp_Image_2026-11-10_at_7.55.25_PM.jpeg"
        alt="HomeScale Media — We Scale. You Create."
        className="h-full w-full object-contain"
      />
    </span>
  );
}
