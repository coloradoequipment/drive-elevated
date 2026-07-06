type DriveElevatedCalloutProps = {
  title: string;
  children: React.ReactNode;
};

export default function DriveElevatedCallout({
  title,
  children,
}: DriveElevatedCalloutProps) {
  return (
    <div className="my-10 rounded-3xl border border-[#d6a85f]/30 bg-[#d6a85f]/10 p-6 md:p-8">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-[#d6a85f]">
        {title}
      </p>

      <div className="space-y-4 leading-8 text-white/80">
        {children}
      </div>
    </div>
  );
}