type InfoCardProps = {
  title: string;
  children: React.ReactNode;
};

export default function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
      <h2 className="mb-3 text-2xl font-semibold text-[#d6a85f]">
        {title}
      </h2>
      <div className="leading-7 text-white/70">{children}</div>
    </div>
  );
}