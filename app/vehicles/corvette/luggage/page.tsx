import Image from "next/image";
import Link from "next/link";

const images = {
  hero: "/images/corvette/luggage/hero-corvette.jpeg",
  frunkEmpty: "/images/corvette/luggage/frunk-empty.jpeg",
  frunkBackpack: "/images/corvette/luggage/frunk-backpack.jpeg",
  frunkCarryon: "/images/corvette/luggage/frunk-carryon.jpeg",
  rearEmpty: "/images/corvette/luggage/rear-empty.jpeg",
  rearTwoCarryons: "/images/corvette/luggage/rear-two-carryons.jpeg",
  rearGolfClubs: "/images/corvette/luggage/rear-golf-clubs.jpeg",
  rearWingCare: "/images/corvette/luggage/rear-wing-care.jpeg",
};

export default function CorvetteLuggagePage() {
  return (
    <main className="min-h-screen bg-[#020407] text-white">
      <section className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <Link
          href="/vehicles/corvette"
          className="mb-8 inline-block text-sm uppercase tracking-[0.2em] text-[#d6a85f]"
        >
          ← Back to Corvette
        </Link>

        <div className="rounded-[2rem] border border-[#d6a85f]/30 bg-[#11100c] p-6 md:p-10">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#d6a85f]">
            Luggage & Storage
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Corvette Luggage Guide
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-white/75">
            Everything you need to know about packing for your trip. The
            Corvette offers two separate storage compartments that make weekend
            getaways surprisingly practical.
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={images.hero}
              alt="Drive Elevated Corvette side profile"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <section className="mt-10 rounded-2xl border border-white/10 bg-black/30 p-6">
            <h2 className="mb-4 text-3xl font-bold">Two Storage Areas</h2>
            <p className="mb-6 max-w-4xl leading-8 text-white/75">
              The Corvette features both a front trunk and rear trunk. Using
              both storage areas makes packing easier, keeps the cabin
              uncluttered, and protects the vehicle.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <StorageAreaCard
                image={images.frunkEmpty}
                title="Front Trunk"
                text="Perfect for backpacks, soft duffels, and a standard airline carry-on placed on its side."
              />
              <StorageAreaCard
                image={images.rearEmpty}
                title="Rear Trunk"
                text="Ideal for additional luggage, golf clubs, and weekend bags. Load carefully around the rear wing."
              />
            </div>
          </section>

          <section className="mt-10">
            <h2 className="mb-3 text-3xl font-bold">What Fits?</h2>
            <p className="mb-6 text-white/70">
              Every example below was photographed using this actual Corvette.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <FitCard
                image={images.frunkBackpack}
                title="Backpack"
                text="A standard backpack fits easily in the front trunk with room to spare."
              />
              <FitCard
                image={images.frunkCarryon}
                title="Carry-on Sideways"
                text="A standard airline carry-on fits well in the front trunk when placed on its side."
              />
              <FitCard
                image={images.rearTwoCarryons}
                title="Two Carry-ons"
                text="The rear trunk comfortably accommodates two standard carry-on suitcases."
              />
              <FitCard
                image={images.rearGolfClubs}
                title="Two Golf Club Sets"
                text="Perfect for a golf getaway without sacrificing cabin space."
              />
            </div>
          </section>

          <section className="mt-8 rounded-2xl border border-red-500/30 bg-red-950/20 p-6">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <Image
                src={images.rearWingCare}
                alt="Corvette rear wing loading caution"
                width={1200}
                height={900}
                className="rounded-xl object-cover"
              />

              <div>
                <h2 className="mb-3 text-2xl font-bold text-red-300">
                  Please Be Careful Around the Rear Wing
                </h2>
                <p className="leading-7 text-white/75">
                  The rear wing sits directly behind the luggage opening. When
                  loading or unloading, avoid lifting heavy bags over the wing or
                  dragging luggage across painted surfaces. If an item feels
                  awkward, remove it from the side instead of forcing it over the
                  rear of the vehicle.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-6">
            <h2 className="mb-4 text-2xl font-bold text-[#d6a85f]">
              Pro Tips
            </h2>
            <ul className="space-y-2 text-white/75">
              <li>✓ Pack light whenever possible.</li>
              <li>✓ Use both storage compartments instead of overfilling one.</li>
              <li>✓ Soft-sided luggage provides the greatest flexibility.</li>
              <li>✓ Keep the cabin clear of loose luggage.</li>
              <li>✓ Always lift luggage clear of the rear wing.</li>
            </ul>
          </section>

          <section className="mt-8 rounded-2xl border border-[#d6a85f]/40 bg-[#d6a85f]/10 p-6 md:p-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-[#d6a85f]">
              Drive Elevated Recommendation
            </p>

            <h2 className="mb-4 text-2xl font-bold">
              Pack Smart. Drive More.
            </h2>

            <p className="max-w-4xl leading-8 text-white/80">
              For the best Corvette experience, pack with soft-sided bags when
              possible and use both storage areas. The front trunk is ideal for
              backpacks and carry-ons, while the rear trunk easily handles
              additional luggage or golf clubs.
            </p>

            <p className="mt-5 max-w-4xl leading-8 text-white/80">
              Once you&apos;ve unpacked at your destination, you&apos;ll
              appreciate having the cabin completely free to enjoy the drive.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}

function StorageAreaCard({
  image,
  title,
  text,
}: {
  image: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <Image
        src={image}
        alt={title}
        width={1200}
        height={900}
        className="mb-5 aspect-video w-full rounded-xl object-cover"
      />
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="leading-7 text-white/70">{text}</p>
    </div>
  );
}

function FitCard({
  image,
  title,
  text,
}: {
  image: string;
  title: string;
  text: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
      <Image
        src={image}
        alt={title}
        width={1200}
        height={900}
        className="aspect-video w-full object-cover"
      />
      <div className="p-5">
        <p className="mb-3 inline-block rounded-full border border-[#d6a85f]/40 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#d6a85f]">
          Guest Tested
        </p>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="leading-7 text-white/70">{text}</p>
      </div>
    </div>
  );
}