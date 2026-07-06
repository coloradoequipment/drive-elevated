type JourneyCuratedStopProps = {
  label: string;
  title: string;
  text: string;
  bestFor?: string[];
  allow?: string;
};

export default function JourneyCuratedStop({
  label,
  title,
  text,
  bestFor = [],
  allow,
}: JourneyCuratedStopProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#d6a85f]">
        {label}
      </p>
      <h3 className="mb-4 text-2xl font-bold">{title}</h3>
      <p className="mb-5 leading-8 text-white/70">{text}</p>

      {bestFor.length > 0 && (
        <div className="mb-4">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-white/45">
            Best For
          </p>
          <div className="flex flex-wrap gap-2">
            {bestFor.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#d6a85f]/30 px-3 py-1 text-sm text-white/70"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {allow && (
        <p className="text-sm uppercase tracking-[0.2em] text-[#d6a85f]">
          Allow {allow}
        </p>
      )}
    </div>
  );
}