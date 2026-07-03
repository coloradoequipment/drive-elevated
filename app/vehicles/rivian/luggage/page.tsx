import Link from "next/link";

export default function RivianLuggagePage() {
  return (
    <main className="min-h-screen bg-[#020407] text-white">
      <section className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <Link
          href="/vehicles/rivian"
          className="mb-8 inline-block text-sm uppercase tracking-[0.2em] text-[#d6a85f]"
        >
          ← Back to Rivian
        </Link>

        <div className="rounded-[2rem] border border-[#d6a85f]/30 bg-[#11100c] p-6 md:p-10">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#d6a85f]">
            Luggage & Storage
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Rivian Cargo Guide
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-white/75">
            The Rivian R1S is the most versatile vehicle in the Drive Elevated
            fleet. With a front trunk, flexible rear cargo area, folding third
            row, and flat-load floor options, it can adapt to family travel,
            Tahoe weekends, airport pickups, adventure gear, and longer road
            trips.
          </p>

          <div className="mt-10 aspect-video rounded-3xl border border-white/10 bg-white/5" />

          <section className="mt-10 rounded-2xl border border-white/10 bg-black/30 p-6">
            <h2 className="mb-4 text-3xl font-bold">Flexible Storage Areas</h2>
            <p className="mb-6 max-w-4xl leading-8 text-white/75">
              The Rivian gives you several ways to configure the space depending
              on how many passengers are riding and how much gear you are
              bringing.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <StorageAreaCard
                title="Front Trunk"
                text="Great for backpacks, charging gear, groceries, soft bags, or smaller luggage you want separated from the cabin."
              />

              <StorageAreaCard
                title="Rear Cargo Area"
                text="The main cargo area changes significantly depending on whether the third row is up, folded down, or fully expanded with the second row folded."
              />
            </div>
          </section>

          <section className="mt-10">
            <h2 className="mb-3 text-3xl font-bold">Cargo Configurations</h2>
            <p className="mb-6 text-white/70">
              These examples will be photographed using this actual Rivian R1S.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <FitCard
                title="Third Row Folded Down"
                label="Typical Setup"
                text="Best everyday configuration for most trips. Seats five passengers comfortably while opening up a generous rear cargo area."
              />

              <FitCard
                title="Third Row Up"
                label="Max Passengers"
                text="Best when carrying six or seven passengers. Rear luggage space is more limited, so soft bags and backpacks work best."
              />

              <FitCard
                title="Second & Third Rows Down"
                label="Max Cargo"
                text="Creates the largest cargo layout and can work well for bulky gear, adventure equipment, or a flat sleeping platform."
              />
            </div>
          </section>

          <section className="mt-10">
            <h2 className="mb-3 text-3xl font-bold">What Fits?</h2>
            <p className="mb-6 text-white/70">
              Use these examples to plan luggage, gear, coolers, strollers,
              backpacks, and road-trip equipment.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <FitCard
                title="Family Luggage"
                label="Guest Tested"
                text="With the third row folded down, the Rivian is ideal for family luggage, weekend bags, and airport trips."
              />

              <FitCard
                title="Adventure Gear"
                label="Guest Tested"
                text="The rear cargo area works well for coolers, backpacks, hiking gear, snow gear, and larger road-trip equipment."
              />

              <FitCard
                title="Charging Gear"
                label="Helpful to Know"
                text="Charging adapters and cables can be stored separately so they are easy to access without digging through luggage."
              />

              <FitCard
                title="Sleeping Platform"
                label="Max Cargo Mode"
                text="With the second and third rows folded, the Rivian can create a large flat area suitable for cargo or a simple rest setup."
              />
            </div>
          </section>

          <section className="mt-8 rounded-2xl border border-blue-500/30 bg-blue-950/20 p-6">
            <h2 className="mb-3 text-2xl font-bold text-blue-300">
              Charging & Trip Planning
            </h2>

            <p className="leading-7 text-white/75">
              If you are heading to Tahoe, the Bay Area, wine country, or a
              longer adventure, plan your charging around your route and
              destination. The Rivian is excellent for road trips, but charging
              stops are easiest when planned ahead.
            </p>
          </section>

          <section className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
            <h2 className="mb-4 text-2xl font-bold text-[#d6a85f]">
              Pro Tips
            </h2>
            <ul className="space-y-2 text-white/75">
              <li>✓ Third row down is the best setup for most luggage-heavy trips.</li>
              <li>✓ Third row up works best with soft bags and smaller backpacks.</li>
              <li>✓ Use the front trunk for items you want easy access to.</li>
              <li>✓ Keep charging gear accessible instead of buried under luggage.</li>
              <li>✓ Fold the second and third rows for maximum cargo space.</li>
            </ul>
          </section>

          <section className="mt-8 rounded-2xl border border-[#d6a85f]/40 bg-[#d6a85f]/10 p-6 md:p-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-[#d6a85f]">
              Drive Elevated Recommendation
            </p>

            <h2 className="mb-4 text-2xl font-bold">
              Choose the Layout Before You Load.
            </h2>

            <p className="max-w-4xl leading-8 text-white/80">
              For most trips, we recommend folding the third row down before
              loading luggage. This gives you the best balance of passenger
              comfort and cargo space. If you need maximum seating, pack lighter
              and use soft-sided bags. If you need maximum cargo space, fold the
              second and third rows and use the Rivian like a premium adventure
              vehicle.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}

function StorageAreaCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <div className="mb-5 aspect-video rounded-xl bg-white/5" />
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="leading-7 text-white/70">{text}</p>
    </div>
  );
}

function FitCard({
  title,
  label,
  text,
}: {
  title: string;
  label: string;
  text: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
      <div className="aspect-video w-full bg-white/5" />
      <div className="p-5">
        <p className="mb-3 inline-block rounded-full border border-[#d6a85f]/40 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#d6a85f]">
          {label}
        </p>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="leading-7 text-white/70">{text}</p>
      </div>
    </div>
  );
}