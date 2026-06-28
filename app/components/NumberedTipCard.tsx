import type { LucideIcon } from "lucide-react";

type NumberedTipCardProps = {
  number: string;
  title: string;
  text: string;
  icon: LucideIcon;
};

export default function NumberedTipCard({
  number,
  title,
  text,
  icon: Icon,
}: NumberedTipCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/35 p-6">
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d6a85f]/70 text-sm font-bold text-[#d6a85f]">
          {number}
        </div>

        <Icon className="h-9 w-9 text-[#d6a85f]" strokeWidth={1.5} />
      </div>

      <h3 className="mb-4 text-lg font-semibold text-white">{title}</h3>

      <p className="text-sm leading-6 text-white/70">{text}</p>
    </div>
  );
}