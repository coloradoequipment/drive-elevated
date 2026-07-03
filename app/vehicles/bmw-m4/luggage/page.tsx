import Image from "next/image";
import Link from "next/link";

export default function BMWM4LuggagePage() {
  return (
    <main className="min-h-screen bg-[#020407] text-white">
      <section className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <Link href="/vehicles/bmw-m4" className="mb-8 inline-block text-sm uppercase tracking-[0.2em] text-[#d6a85f]">
          ← Back to BMW M4
        </Link>

        <div className="rounded-[2rem] border border-[#d6a85f]/30 bg-[#11100c] p-6 md:p-10">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#d6a85f]">
            Luggage & Storage
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-6xl">Luggage Guide</h1>

          <p className="max-w-2xl text-lg leading-8 text-white/75">
            The BMW M4 Convertible is a true 4-seat performance car. It is surprisingly versatile,
            but luggage space is optimized for experiences, not excess. Here’s what to expect.
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
            <h2 className="mb-3 text-xl font-bold text-[#d6a85f]">
              Everyone & Luggage Will Fit. YES. Is It Optimal? No.
            </h2>
            <p className="leading-7 text-white/75">
              Yes, four adults and luggage can absolutely work. The M4 is a genuine four-seat convertible, though taller passengers may find the rear seats more comfortable for shorter drives. Most guests travel with the top up to their destination, unload, and then enjoy the rest of their trip with the top down.
            </p>
          </div>

          <section className="mt-10 grid gap-6 md:grid-cols-3">
            <div>
              <h2 className="mb-4 text-2xl font-bold">How the Trunk Divider Works</h2>
              <p className="mb-5 leading-7 text-white/75">
                A movable divider in the trunk creates extra vertical space when the convertible top is up.
                When the top is lowered, the divider must be down so the roof can store in the trunk.
              </p>
              <p className="mb-2 text-white/80">
                <strong className="text-[#d6a85f]">Top Up:</strong> divider raised for maximum trunk height.
              </p>
              <p className="text-white/80">
                <strong className="text-[#d6a85f]">Top Down:</strong> divider lowered, reducing vertical cargo space.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <Image
  src="/images/bmw/luggage/divider-up.jpg"
  alt="BMW M4 trunk with convertible divider raised"
  width={1200}
  height={800}
  className="aspect-video w-full rounded-xl object-cover"
/>
              <p className="mt-4 font-bold uppercase text-[#d6a85f]">Top Up / Divider Raised</p>
              <p className="text-white/65">Maximum luggage capacity. Four medium roller bags fit comfortably.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <Image
  src="/images/bmw/luggage/divider-down.jpg"
  alt="BMW M4 trunk with convertible divider lowered"
  width={1200}
  height={800}
  className="aspect-video w-full rounded-xl object-cover"
/>
              <p className="mt-4 font-bold uppercase text-[#d6a85f]">Top Down / Divider Lowered</p>
              <p className="text-white/65">Roof stored in trunk. Vertical clearance reduced by approximately 5½ inches.</p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="mb-6 text-3xl font-bold">Trunk Dimensions</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <DimensionCard
  title="Convertible Top Up
Maximum luggage capacity"
  image="/images/bmw/luggage/divider-up.jpg"
  note="Best for luggage. Top up provides the most usable space."
  height='16"'
/>

<DimensionCard
  title="Convertible Top Down
Reduced luggage height"
  image="/images/bmw/luggage/divider-down.jpg"
  note="Roof stored in the trunk. Vertical space is reduced."
  height='10½"'
/>
            </div>
          </section>

          <section className="mt-10 rounded-2xl border border-white/10 bg-black/30 p-6">
            <h2 className="mb-5 text-3xl font-bold">What Fits? Top Up Example</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <Image
  src="/images/bmw/luggage/luggage-example.jpg"
  alt="BMW M4 trunk with four roller bags loaded"
  width={1200}
  height={800}
  className="aspect-video w-full rounded-xl object-cover"
/>

              <div>
                <h3 className="mb-4 text-2xl font-bold text-green-400">
                  4 Adults + Luggage? Yes, It Fits.
                </h3>
                <p className="mb-4 leading-7 text-white/75">
                  Four adults can ride comfortably for short to medium trips. Plan to travel with
                  the top up, unload at your destination, then enjoy top-down driving once you arrive.
                </p>
                <p className="mb-4 text-white/75">
                  Example shown: 4 medium roller suitcases and one large soft sided
                </p>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm uppercase tracking-[0.18em] text-white/60">
                    Top Down Note
                  </p>
                  <p className="mt-2 text-xl font-bold text-[#d6a85f]">
                    Height is reduced by about 5½ inches with the top down.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8 rounded-2xl border border-red-500/30 bg-red-950/20 p-6">
            <h2 className="mb-3 text-2xl font-bold text-red-300">Please Protect the Interior</h2>
            <p className="leading-7 text-white/75">
              Please do not place roller bags on the Fiona Red leather rear seats. Wheels, zippers,
              and hard luggage surfaces can scuff or damage the leather.
            </p>
          </section>

          <section className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
            <h2 className="mb-4 text-2xl font-bold text-[#d6a85f]">Pro Tips</h2>
            <ul className="space-y-2 text-white/75">
              <li>✓ Travel with the top up when carrying luggage.</li>
              <li>✓ Unload at your destination, then enjoy top-down driving.</li>
              <li>✓ Soft-sided bags offer the most flexibility.</li>
              <li>✓ Measure oversized bags before your trip.</li>
              <li>✓ Message JR through Turo if you are unsure what will fit.</li>
            </ul>
          </section>
          <section className="mt-8 rounded-2xl border border-[#d6a85f]/40 bg-[#d6a85f]/10 p-6 md:p-8">
  <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-[#d6a85f]">
    Drive Elevated Recommendation
  </p>

  <h2 className="mb-4 text-2xl font-bold">
    Travel First. Then Enjoy the Drive.
  </h2>

  <p className="max-w-4xl leading-8 text-white/80">
    If you're traveling with four adults or several pieces of luggage, I
    recommend driving to your hotel or destination with the convertible top
    up and the trunk loaded. Once you've unloaded, put the top down and enjoy
    the rest of your trip the way the M4 was meant to be experienced.
  </p>

  <p className="mt-5 leading-8 text-white/80">
    This approach gives you the best of both worlds—plenty of luggage space for arrival, then the full open-air experience once you've settled in.
  </p>
</section>
        </div>
      </section>
    </main>
  );
}

function DimensionCard({
  title,
  note,
  height,
  image,
}: {
  title: string;
  note: string;
  height: string;
  image: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
      <div className="bg-[#17351f] px-5 py-3 text-center font-bold uppercase tracking-[0.12em] text-white">
        {title}
      </div>
      <div className="p-5">
        <Image
  src={image}
  alt={title}
  width={1200}
  height={800}
  className="mb-5 aspect-video w-full rounded-xl object-cover"
/>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div>
            <p className="text-3xl font-bold">32"</p>
            <p className="text-xs uppercase text-white/60">Wide</p>
          </div>
          <div>
            <p className="text-3xl font-bold">34"</p>
            <p className="text-xs uppercase text-white/60">Deep</p>
          </div>
          <div>
            <p className="text-3xl font-bold">{height}</p>
            <p className="text-xs uppercase text-white/60">High</p>
          </div>
        </div>
        <p className="mt-5 text-white/70">✓ {note}</p>
      </div>
    </div>
  );
}