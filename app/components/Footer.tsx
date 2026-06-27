import Link from "next/link";

const turoHostLink = "https://turo.com/us/en/host/20782143";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020407] px-6 py-12 text-white md:px-16">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h2 className="mb-3 text-2xl font-bold uppercase tracking-[0.15em]">
            Drive <span className="text-[#d6a85f]">Elevated</span>
          </h2>
          <p className="text-sm uppercase tracking-[0.28em] text-white/50">
            Curated Automotive Experiences
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm uppercase tracking-[0.2em] text-white/70">
          <Link href="/">Home</Link>
          <Link href="/#vehicles">Vehicles</Link>
          <Link href="/pickup">Pickup</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div>
          <p className="mb-5 leading-7 text-white/65">
            For active reservations, please message through Turo so all trip
            communication stays connected to your booking.
          </p>

          <a
            href={turoHostLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-[#d6a85f] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black"
          >
            View Vehicles on Turo →
          </a>
        </div>
      </div>

      <div className="mt-10 text-xs uppercase tracking-[0.25em] text-white/35">
        © 2026 Drive Elevated. All rights reserved.
      </div>
    </footer>
  );
}