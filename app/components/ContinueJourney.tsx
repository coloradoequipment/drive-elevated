type Journey = {
  title: string;
};

export default function ContinueJourney({ journeys }: { journeys: Journey[] }) {
  return (
    <section className="px-6 pb-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#d6a85f]">
          Continue Your Journey
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {journeys.map((journey) => (
            <div
              key={journey.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="mb-3 text-2xl font-bold">{journey.title}</h3>
              <p className="text-white/60">Coming soon</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}