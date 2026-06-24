import Image from "next/image";
import Link from "next/link";

export default function RivianPage() {
  return (
    <main className="min-h-screen bg-[#020407] text-white">
      <section className="relative overflow-hidden px-6 py-10 md:px-16">
        <Link
          href="/"
          className="text-sm uppercase tracking-[0.25em] text-[#d6a85f]"
        >
          ← Drive Elevated
        </Link>

        <div className="grid gap-12 py-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.45em] text-[#d6a85f]">
              Vehicle Guide
            </p>
            <h1 className="mb-6 text-4xl font-bold uppercase leading-none md:text-6xl">
              <>
  Rivian R1S
  <br />
  Adventure Quad-Motor Large Pack
</>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-white/75">
              Quick answers for pickup, luggage, fuel, convertible operation,
              and common guest questions before or during your trip.
            </p>
          </div>

          <div className="relative h-[360px] overflow-hidden rounded-3xl border border-white/15">
            <Image
              src="/images/Rivian.jpg"
              alt="Rivian R1S"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
        </div>
      </section>

      <section className="grid gap-6 px-6 pb-16 md:grid-cols-3 md:px-16">
        {[
          {
            title: "Fuel",
            text: "Premium fuel only. Please return the vehicle with the same fuel level as pickup unless otherwise arranged through Turo.",
          },
          {
            title: "Luggage",
            text: "Best with soft bags or smaller carry-ons. Convertible storage is more limited when the top is down.",
          },
          {
            title: "Convertible Top",
            text: "Operate the top only while parked or moving very slowly. Make sure the trunk divider is correctly positioned before lowering the top.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"
          >
            <h2 className="mb-3 text-2xl font-semibold text-[#d6a85f]">
              {item.title}
            </h2>
            <p className="leading-7 text-white/70">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="px-6 pb-20 md:px-16">
        <h2 className="mb-8 text-4xl font-bold">Common Questions</h2>

        <div className="space-y-4">
          {[
            {
              q: "Can I put the top down?",
              a: "Yes. The Corvette is meant to be enjoyed as a convertible. Please operate the top carefully and only when the vehicle is in a safe position.",
            },
            {
              q: "Does it fit luggage?",
              a: "Yes, but space is limited. Smaller soft bags work best, especially if you plan to drive with the top down.",
            },
            {
              q: "What fuel should I use?",
              a: "Premium fuel only.",
            },
            {
              q: "Can I take it on a road trip?",
              a: "Yes, as long as your trip follows Turo rules, mileage limits, and road-use expectations.",
            },
          ].map((faq) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-white/10 bg-black/40 p-6"
            >
              <h3 className="mb-2 text-xl font-semibold">{faq.q}</h3>
              <p className="leading-7 text-white/70">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}