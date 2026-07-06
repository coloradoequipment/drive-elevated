type Item = {
  title: string;
  text: string;
};

export default function JourneyAtAGlance({ items }: { items: Item[] }) {
  return (
    <section className="px-6 pb-20 md:px-16">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
          >
            <h3 className="mb-3 text-lg font-bold text-[#d6a85f]">
              {item.title}
            </h3>
            <p className="leading-7 text-white/70">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}