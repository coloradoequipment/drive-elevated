import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: "gold" | "outline";
};

export default function CTAButton({
  href,
  children,
  external = false,
  variant = "gold",
}: CTAButtonProps) {
  const className =
    variant === "gold"
      ? "inline-block rounded-full bg-[#d6a85f] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black"
      : "inline-block rounded-full border border-white/30 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}