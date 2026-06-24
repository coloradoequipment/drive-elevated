import Image from "next/image";
import Link from "next/link";

const vehicles = [
  {
    name: "Corvette Convertible",
    image: "/images/corvette.jpg",
    description: "Pure performance. Open-air freedom.",
  },
  {
    name: "BMW M4 Convertible",
    image: "/images/bmw-m4.jpg",
    description: "Precision. Power. Built to thrill.",
  },
  {
    name: "Rivian R1S",
    image: "/images/rivian.jpg",
    description: "Adventure meets innovation. All-electric capability.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020407] text-white">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/corvette.jpg"
            alt="Drive Elevated Corvette"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[12%_center] opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020407] via-[#020407]/90 to-[#020407]/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020407] via-transparent to-[#020407]/35" />
        </div>

        <nav className="relative z-10 flex items-start justify-between px-5 pt-5 md:px-16">
          <div className="ml-4 max-w-[360px] md:ml-0">
            <Image
  src="/images/logo-transparent.png"
  alt="Drive Elevated"
  width={500}
  height={150}
  priority
  className="h-auto"
 />
            
          </div>

          <div className="hidden gap-10 pt-2 text-sm font-semibold uppercase tracking-[0.25em] text-white/85 md:flex">
            <a className="border-b border-[#d6a85f] pb-2 text-[#d6a85f]" href="/">
              Home
            </a>
            <a href="#vehicles">Vehicles</a>
            <a href="#faq">FAQ</a>
            <a href="#pickup">Pickup</a>
          </div>
        </nav>

        <div className="relative z-10 flex min-h-[50vh] items-start pt-8 px-5 md:px-16">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm uppercase tracking-[0.5em] text-[#d6a85f]">
              Curated Automotive Experiences
            </p>

            <h1 className="text-6xl font-bold tracking-[0.12em] md:text-8xl">
              ELEVATE
            </h1>

            <h2 className="mt-2 text-4xl font-light tracking-[0.16em] text-[#d6a85f] md:text-6xl">
              THE WAY YOU DRIVE
            </h2>

            <div className="my-7 h-1 w-28 bg-[#d6a85f]" />

            <p className="mb-9 max-w-xl text-lg leading-8 text-white/80">
              A curated collection of premium vehicles designed for special
              weekends, business travel, celebrations, and unforgettable drives.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#vehicles"
                className="rounded-full bg-[#d6a85f] px-8 py-4 text-sm font-bold uppercase tracking-[0.25em] text-black"
              >
                View Vehicles →
              </a>
              <a
                href="#faq"
                className="rounded-full border border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-[0.25em] text-white"
              >
                Guest FAQ
              </a>
            </div>
          </div>
        </div>

        <section id="vehicles" className="relative z-10 px-8 pb-16 md:px-16">
          <div className="mb-6 text-center">
            <p className="inline-flex items-center gap-6 text-sm uppercase tracking-[0.45em] text-[#d6a85f]">
              <span className="h-px w-24 bg-[#d6a85f]/70" />
              Our Vehicles
              <span className="h-px w-24 bg-[#d6a85f]/70" />
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.name}
                className="group overflow-hidden rounded-2xl border border-white/15 bg-black/40 backdrop-blur"
              >
                <div className="relative h-64">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="mb-3 text-2xl font-semibold uppercase tracking-[0.08em]">
                      {vehicle.name}
                    </h3>
                    <div className="mb-4 h-px w-16 bg-[#d6a85f]" />
                    <p className="mb-5 text-sm leading-6 text-white/75">
                      {vehicle.description}
                    </p>
                    <Link
href={
  vehicle.name === "Corvette Convertible"
    ? "/vehicles/corvette"
    : vehicle.name === "BMW M4 Convertible"
      ? "/vehicles/bmw-m4"
      : vehicle.name === "Rivian R1S"
        ? "/vehicles/rivian"
        : "#"
}
  className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d6a85f]"
>
  View Guide →
</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}