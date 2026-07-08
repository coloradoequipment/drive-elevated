import Link from "next/link";

const turoHostLink = "https://turo.com/us/en/host/20782143";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020407] px-6 py-14 text-white md:px-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">

        <div>
          <h2 className="mb-3 text-2xl font-bold uppercase tracking-[0.15em]">
            Drive <span className="text-[#d6a85f]">Elevated</span>
          </h2>

          <p className="leading-7 text-white/65">
            Curated automotive experiences designed to make the drive as
            memorable as the destination.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#d6a85f]">
            Explore
          </h3>

          <div className="flex flex-col gap-3 text-sm uppercase tracking-[0.18em] text-white/70">
            <Link href="/">Home</Link>
<Link href="/journeys/napa">Signature Journey 001</Link>
<Link href="/guest-guide">Guest Guide</Link>
<Link href="/pickup">Pickup & Return</Link>
<Link href="/emergency">Help & Emergency</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#d6a85f]">
            Fleet
          </h3>

          <div className="flex flex-col gap-3 text-sm uppercase tracking-[0.18em] text-white/70">
            <Link href="/vehicles/corvette">Corvette Convertible</Link>
            <Link href="/vehicles/bmw-m4">BMW M4 Convertible</Link>
            <Link href="/vehicles/rivian">Rivian R1S</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#d6a85f]">
            Book Your Drive
          </h3>

          <p className="mb-6 leading-7 text-white/65">
            Ready to experience Northern California in one of our curated
            vehicles?
          </p>

          <a
            href={turoHostLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-[#d6a85f] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black"
          >
            Reserve on Turo →
          </a>
        </div>

      </div>

      <div className="mt-14 border-t border-white/10 pt-8 text-center text-xs uppercase tracking-[0.22em] text-white/35">
        © 2026 Drive Elevated • Designed to make every drive part of the journey.
      </div>
    </footer>
  );
}