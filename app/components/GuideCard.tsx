import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type GuideCardProps = {
  title: string;
  text: string;
  href: string;
  icon: LucideIcon;
};

export default function GuideCard({
  title,
  text,
  href,
  icon: Icon,
}: GuideCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-white/10 bg-black/45 p-7 transition hover:border-[#d6a85f]/70 hover:bg-[#d6a85f]/10"
    >
      <Icon className="mb-6 h-12 w-12 text-[#d6a85f]" strokeWidth={1.5} />

      <h3 className="mb-4 text-xl font-semibold uppercase tracking-[0.16em] text-[#d6a85f]">
        {title}
      </h3>

      <p className="leading-7 text-white/70">{text}</p>

      <div className="mt-6 text-2xl text-[#d6a85f] transition group-hover:translate-x-1">
        →
      </div>
    </Link>
  );
}