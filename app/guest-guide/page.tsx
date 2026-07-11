
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTAButton from "../components/CTAButton";

const turoHostLink = "https://turo.com/us/en/host/20782143";

export const metadata: Metadata = {
  title: "Drive Elevated Guest Guide | Vehicle, Pickup & Trip Support",
  description:
    "Everything Drive Elevated guests need before, during, and after their trip, including pickup instructions, vehicle guides, luggage planning, FAQs, and emergency support.",
  alternates: {
    canonical: "/guest-guide",
  },
};

const vehicleGuides = [
  {
    name: "Corvette Convertible",
    description:
      "Convertible operation, drive modes, parking clearance, fuel, luggage, and the details that make the C8 easy to enjoy.",
    href: "/vehicles/corvette",
    luggageHref: "/vehicles/corvette/luggage",
  },
  {
    name: "BMW M4 Convertible",
    description:
      "M1 and M2 modes, convertible controls, transmission, voice commands, fuel, parking, and guest tips.",
    href: "/vehicles/bmw-m4",
    luggageHref: "/vehicles/bmw-m4/luggage",
  },
  {
    name: "Rivian R1S",
    description:
      "Charging, Driver+, ride height, parking, cargo configurations, road-trip planning, and electric driving support.",
    href: "/vehicles/rivian",
    luggageHref: "/vehicles/rivian/luggage",
  },
];

const faqs = [
  {
    question: "Does the vehicle need to be washed before return?",
    answer:
      "No. Normal road dust, bugs, and everyday use are expected. Please enjoy the trip and leave the cleaning to us. Excessive mud, smoke, spills, or unusual cleaning needs may still be handled under Turo’s policies.",
  },
  {
    question: "How do I operate the convertible top?",
    answer:
      "The Corvette and BMW vehicle guides include step-by-step top instructions. Take a moment to review the guide before operating it for the first time, and remain stopped whenever possible.",
  },
  {
    question: "What happens if I exceed the mileage?",
    answer:
      "Each reservation includes generous mileage, and most guests remain within the allowance across the full trip. If you go over slightly, Turo applies the per-mile amount shown in your reservation.",
  },
  {
    question: "Can I return earlier than planned?",
    answer:
      "Yes. If your schedule changes, message through Turo as soon as possible. We will do our best to accommodate an early return and provide the correct parking or key instructions.",
  },
];

export default function GuestGuidePage() {
  return (
    <main className="min-h-screen bg-[#020407] text-white">
      <Navbar />

      <PageHero
        eyebrow="Drive Elevated Guest Concierge"
        title="Guest Guide"
        subtitle="Everything you need before, during, and after your Drive Elevated experience."
      />

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[#d6a85f]/30 bg-[#d6a85f]/10 p-8 md:p-10">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#d6a85f]">
            Welcome
          </p>

          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            Built to answer questions before you need to ask them.
          </h2>

          <div className="max-w-4xl space-y-5 leading-8 text-white/78">
            <p>
              My goal is simple: help you feel confident with the vehicle,
              prepared for pickup and return, and excited about the journey
              ahead.
            </p>

            <p>
              Use this page as your concierge desk. From airport instructions
              and luggage planning to vehicle controls, charging, emergencies,
              and local drives, everything is organized below.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Before Your Trip"
            title="Prepare Before You Arrive"
            text="A few simple steps before traveling will make vehicle access faster and help the trip begin smoothly."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <GuideCard
              label="Pickup & Return"
              title="Know What to Expect"
              text="Review SMF airport wayfinding, parking, lockbox access, Roseville pickup, after-hours options, and return steps."
              href="/pickup"
              action="Open Arrival & Departure Guide"
            />

            <GuideCard
              label="Required Through Turo"
              title="Additional Drivers"
              text="Anyone who may operate the vehicle must be added and approved through your Turo reservation before driving."
            />

            <GuideCard
              label="Keep It in the App"
              title="Trip Changes"
              text="Extensions, early returns, timing changes, and location requests should be submitted or confirmed through Turo so everything remains connected to the reservation."
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Choose Your Vehicle"
            title="Vehicle-Specific Guides"
            text="Each guide explains the controls, features, fuel or charging needs, parking considerations, and practical details for your exact vehicle."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {vehicleGuides.map((vehicle) => (
              <div
                key={vehicle.name}
                className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7"
              >
                <h3 className="mb-4 text-2xl font-bold">{vehicle.name}</h3>

                <p className="mb-6 flex-1 leading-8 text-white/70">
                  {vehicle.description}
                </p>

                <div className="flex flex-col gap-3">
                  <Link
                    href={vehicle.href}
                    className="inline-flex items-center justify-center rounded-full bg-[#d6a85f] px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-black"
                  >
                    Open Vehicle Guide →
                  </Link>

                  <Link
                    href={vehicle.luggageHref}
                    className="inline-flex items-center justify-center rounded-full border border-[#d6a85f]/50 bg-[#d6a85f]/10 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#d6a85f] transition hover:bg-[#d6a85f]/20"
                  >
                    View Luggage Guide →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <GuideCard
            label="Fuel & Charging"
            title="Return Levels"
            text="The Corvette and BMW require premium fuel rated at 91 octane or higher. Rivian guests should review their charging and return-level instructions before the final day."
            href="/vehicles/rivian"
            action="Review Rivian Charging"
          />

          <GuideCard
            label="Active Reservations"
            title="Message Through Turo"
            text="For the fastest support during a trip, message through your Turo thread so the conversation stays connected to the reservation."
            href={turoHostLink}
            action="Open Turo"
            external
          />

          <GuideCard
            label="Unexpected Situations"
            title="Help & Emergency"
            text="Accident steps, roadside assistance, towing information, documentation, and emergency support are organized in one place."
            href="/emergency"
            action="Open Help & Emergency"
          />
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            text="Quick answers to the questions guests most often ask before or during a reservation."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
              >
                <h3 className="mb-4 text-xl font-bold">{faq.question}</h3>
                <p className="leading-8 text-white/70">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[#d6a85f]/30 bg-black/40">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-[340px]">
              <Image
                src="/images/napa-corvette.jpeg"
                alt="Corvette driving through Napa Valley for Drive Elevated Signature Journey 001"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/30" />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-10">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#d6a85f]">
                Featured Signature Journey
              </p>

              <h2 className="mb-4 text-4xl font-bold">
                The Drive to Napa Valley
              </h2>

              <p className="mb-6 leading-8 text-white/75">
                Your vacation does not begin at hotel check-in. Explore Temple
                Coffee, the Yolo Causeway, Davis, Silverado Trail, and a
                carefully curated collection of Napa stops designed to make the
                drive part of the memory.
              </p>

              <Link
                href="/journeys/napa"
                className="inline-flex w-fit rounded-full bg-[#d6a85f] px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-black"
              >
                Read Journey 001 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[#d6a85f]/30 bg-[#d6a85f]/10 p-8 md:p-10">
          <h2 className="mb-4 text-3xl font-bold">Still have a question?</h2>

          <p className="mb-6 max-w-3xl leading-8 text-white/75">
            If you do not find the answer here, send me a message through your
            Turo reservation. For active trips, keeping communication in the
            Turo thread is the quickest and most reliable way for me to help.
          </p>

          <CTAButton href={turoHostLink} external>
            Message Through Turo →
          </CTAButton>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div>
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#d6a85f]">
        {eyebrow}
      </p>

      <h2 className="mb-5 text-4xl font-bold md:text-5xl">{title}</h2>

      <p className="max-w-4xl text-lg leading-9 text-white/75">{text}</p>
    </div>
  );
}

function GuideCard({
  label,
  title,
  text,
  href,
  action,
  external = false,
}: {
  label: string;
  title: string;
  text: string;
  href?: string;
  action?: string;
  external?: boolean;
}) {
  const content = (
    <>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#d6a85f]">
        {label}
      </p>

      <h3 className="mb-4 text-2xl font-bold">{title}</h3>

      <p className="leading-8 text-white/70">{text}</p>

      {action && (
        <p className="mt-6 font-semibold text-[#d6a85f]">{action} →</p>
      )}
    </>
  );

  if (!href) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
        {content}
      </div>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-[#d6a85f]/50 hover:bg-white/[0.06]"
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-[#d6a85f]/50 hover:bg-white/[0.06]"
    >
      {content}
    </Link>
  );
}