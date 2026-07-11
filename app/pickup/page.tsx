import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title:
    "SMF Airport Pickup & Return Guide | Drive Elevated Sacramento",
  description:
    "Know exactly what to expect when picking up or returning your Drive Elevated vehicle at Sacramento International Airport or our Roseville location.",
  alternates: {
    canonical: "/pickup",
  },
};

const airportSteps = [
  {
    number: "01",
    title: "Complete License Verification",
    text: "Turo normally makes license verification available 24 hours before your trip. Complete it before traveling so your pickup details can be released without delay.",
  },
  {
    number: "02",
    title: "Collect Your Luggage",
    text: "After landing, collect your luggage and travel companions before beginning the walk or shuttle ride to the vehicle.",
  },
  {
    number: "03",
    title: 'Tap “Directions to Car”',
    text: "Open your Turo reservation and select Directions to Car. Turo’s in-app wayfinding will guide you from the terminal to the approved parking location.",
  },
  {
    number: "04",
    title: "Review the Exact Location",
    text: "Your Turo Trip Details and my arrival message will identify the garage or lot, floor, row, and space when available.",
  },
  {
    number: "05",
    title: "Access the Vehicle",
    text: "Follow the access instructions sent through Turo. Depending on the reservation, this may include remote access or a window-mounted lockbox.",
  },
];

const finalCheckItems = [
  "Sunglasses",
  "Phone and charging cables",
  "Hats and jackets",
  "Water bottles",
  "Wallets and travel documents",
  "Items beneath the seats",
  "Door pockets and center console",
  "Frunk, trunk, and rear cargo area",
];

export default function PickupPage() {
  return (
    <main className="min-h-screen bg-[#020407] text-white">
      <Navbar />

      <section className="px-6 pb-16 pt-10 md:px-16 md:pb-20 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.42em] text-[#d6a85f]">
            Drive Elevated Guest Concierge
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Arrival &amp; Departure
            <span className="block text-[#d6a85f]">Made Effortless.</span>
          </h1>

          <p className="mt-7 max-w-4xl text-lg leading-9 text-white/75">
            Whether you are arriving at Sacramento International Airport or
            picking up locally in Roseville, this guide explains what will
            happen before you arrive, how to find and access your vehicle, and
            how to complete a smooth return.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#airport-pickup"
              className="inline-flex items-center justify-center rounded-full bg-[#d6a85f] px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-black"
            >
              SMF Airport Pickup ↓
            </a>

            <a
              href="#local-pickup"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#d6a85f]/70 hover:text-[#d6a85f]"
            >
              Roseville Pickup ↓
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          <Image
            src="/images/guest-guide/smf-arrival-guide.png"
            alt="Drive Elevated guide to Sacramento International Airport terminals, parking garage, daily lot, economy lots, fuel station, and fast chargers"
            width={1024}
            height={1536}
            priority
            sizes="(max-width: 768px) 100vw, 1152px"
            className="h-auto w-full"
          />
        </div>
      </section>

      <section id="airport-pickup" className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Sacramento International Airport"
            title="Your SMF Arrival"
            text="Turo now provides in-app airport wayfinding. You do not need to memorize terminal directions before your flight; you only need to complete verification, review the location I send, and follow Directions to Car."
          />

          <div className="mt-10 space-y-5">
            {airportSteps.map((step) => (
              <ProcessStep key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <FeatureCard eyebrow="Before You Fly" title="Prepare in Advance">
            <p>
              Complete your driver&apos;s license verification as soon as it
              becomes available in Turo, typically 24 hours before the trip.
              Guests who complete this step before traveling generally have the
              smoothest pickup.
            </p>

            <p>
              A few hours before your reservation, I will send the vehicle&apos;s
              exact parking location and access instructions through your Turo
              trip thread.
            </p>
          </FeatureCard>

          <FeatureCard eyebrow="When You Land" title="Use the Turo App">
            <p>
              Collect your luggage first, then open your reservation and select
              <strong className="text-white"> Directions to Car</strong>.
              Turo&apos;s wayfinding will guide you from the terminal to the
              approved parking facility.
            </p>

            <p>
              If you have any difficulty locating the vehicle, message me
              through Turo so I can assist immediately.
            </p>
          </FeatureCard>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[#d6a85f]/35 bg-[#d6a85f]/10 p-8 md:p-10">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#d6a85f]">
            Good to Know
          </p>

          <h2 className="mb-5 text-3xl font-bold">
            Airport parking changes throughout the day.
          </h2>

          <div className="max-w-4xl space-y-5 leading-8 text-white/78">
            <p>
              The Parking Garage is preferred because it provides the shortest
              walk to both terminals. The Daily Lot is the next closest option
              and is also walkable.
            </p>

            <p>
              When those areas are full, the vehicle may be placed in the East,
              South, or West Economy Lot. Airport shuttles serve the economy
              lots, and Turo&apos;s in-app directions will guide you toward the
              correct pickup route.
            </p>

            <p>
              Sacramento International Airport does not permit curbside Turo
              vehicle exchanges. Pickup and return must occur in an authorized
              parking area.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Your First Few Minutes"
            title="Before You Drive Away"
            text="The vehicle has been professionally cleaned, inspected, and prepared for your arrival. Take a few minutes to begin the experience with confidence."
          />

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            <MiniStep number="01" text="Walk around the vehicle." />
            <MiniStep number="02" text="Review the fuel or charge level." />
            <MiniStep number="03" text="Adjust your seat and mirrors." />
            <MiniStep number="04" text="Connect your phone and navigation." />
            <MiniStep number="05" text="Take a moment and enjoy the car." />
          </div>
        </div>
      </section>

      <section id="airport-return" className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Before Your Flight Home"
            title="Returning at SMF"
            text="The return should be as straightforward as pickup. Allow enough time to refuel or charge if required, park, secure the key, and travel from the lot to your terminal."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ReturnCard
              number="01"
              title="Refuel or Charge"
              text="BMW and Corvette guests should use premium fuel, 91 octane or higher, unless prepaid fuel was selected. Rivian guests should return at 70% or higher unless prepaid charging was selected."
            />

            <ReturnCard
              number="02"
              title="Park & Message"
              text="Use the Parking Garage when available, followed by the Daily or Economy Lots. Leave the ticket inside and message the lot, floor, row, and space through Turo."
            />

            <ReturnCard
              number="03"
              title="Secure the Key"
              text="Place the key inside the IR-shield pouch and return it to the lockbox using the instructions and code provided in your Turo message."
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <FeatureCard eyebrow="BMW & Corvette" title="Premium Fuel Returns">
            <p>
              Please refuel with premium fuel rated at 91 octane or higher
              unless you selected prepaid fuel.
            </p>

            <p>
              The ARCO station near the airport is a convenient final stop before
              entering the airport parking system.
            </p>
          </FeatureCard>

          <FeatureCard eyebrow="Rivian R1S" title="Charging Without the Wait">
            <p>
              DC fast chargers are located near the airport ARCO. Use them if
              needed, but do not spend unnecessary travel time charging to 100%.
            </p>

            <p>
              Drive Elevated considers anything at or above
              <strong className="text-[#d6a85f]"> 70%</strong> a full return.
              Unless prepaid charging was selected, please return the Rivian at
              70% or higher.
            </p>
          </FeatureCard>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-black/30 p-8 md:p-10">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#d6a85f]">
            One Last Look
          </p>

          <h2 className="mb-6 text-3xl font-bold">
            Check before heading to your terminal.
          </h2>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {finalCheckItems.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white/75"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[#d6a85f]/35 bg-[#d6a85f]/10 p-8 md:p-10">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#d6a85f]">
            Drive Elevated Promise
          </p>

          <h2 className="mb-5 text-3xl font-bold">
            Please give me the opportunity to help.
          </h2>

          <div className="max-w-4xl space-y-5 leading-8 text-white/78">
            <p>
              If your schedule changes, you need to return early, or something
              about the experience falls short of what you expected, message me
              directly through your Turo reservation.
            </p>

            <p>
              I would much rather have the opportunity to help while your trip is
              active than have you leave disappointed.
            </p>

            <p className="text-[#d6a85f]">
              Thank you for trusting Drive Elevated with your journey. — JR
            </p>
          </div>
        </div>
      </section>

      <section id="local-pickup" className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#d6a85f]">
            Local Roseville Pickup &amp; Return
          </p>

          <h2 className="mb-4 text-4xl font-bold">
            Caliber Collision Luxury
          </h2>

          <p className="mb-7 text-lg text-white/75">
            2018 Taylor Road, Roseville, California 95678
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard eyebrow="During Business Hours" title="Meet in Person">
              <p>
                When schedules allow, I will meet you in person and help you get
                comfortable with the vehicle before you leave.
              </p>

              <p>
                You may leave your personal vehicle in the parking lot during
                your reservation when arranged in advance. The property is
                monitored by security cameras and an alarm system.
              </p>
            </FeatureCard>

            <FeatureCard eyebrow="Advance Notice Required" title="After-Hours Access">
              <p>
                Early-morning, evening, and contactless pickup or return may be
                available with advance notice.
              </p>

              <p>
                I will send the exact vehicle location, lockbox code, and any
                special access instructions through Turo before the reservation.
              </p>
            </FeatureCard>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-6">
            <p className="leading-8 text-white/75">
              For a local return, bring the vehicle back to the location where
              it was received unless we have agreed to another arrangement.
              During business hours, you may return the key directly to me. For
              an after-hours return, place it in the lockbox as instructed.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Continue Your Experience"
            title="Helpful Guest Resources"
            text="Everything else you may need is only one click away."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <ResourceCard
              title="Vehicle Guides"
              text="Controls, features, fuel, charging, parking, and vehicle-specific tips."
              href="/guest-guide"
              action="Open Guest Guide"
            />

            <ResourceCard
              title="Help & Emergency"
              text="Accident steps, roadside help, towing information, and emergency support."
              href="/emergency"
              action="Open Help"
            />

            <ResourceCard
              title="Signature Journey 001"
              text="Make your drive from Sacramento to Napa Valley part of the vacation."
              href="/journeys/napa"
              action="Explore Napa"
            />
          </div>
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

function ProcessStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d6a85f]/70 font-bold text-[#d6a85f]">
        {number}
      </div>

      <div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="leading-8 text-white/70">{text}</p>
      </div>
    </div>
  );
}

function FeatureCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#d6a85f]">
        {eyebrow}
      </p>
      <h3 className="mb-5 text-2xl font-bold">{title}</h3>
      <div className="space-y-4 leading-8 text-white/70">{children}</div>
    </div>
  );
}

function MiniStep({ number, text }: { number: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <p className="mb-3 text-sm font-bold text-[#d6a85f]">{number}</p>
      <p className="leading-7 text-white/75">{text}</p>
    </div>
  );
}

function ReturnCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
      <p className="mb-4 text-sm font-bold text-[#d6a85f]">{number}</p>
      <h3 className="mb-4 text-2xl font-bold">{title}</h3>
      <p className="leading-8 text-white/70">{text}</p>
    </div>
  );
}

function ResourceCard({
  title,
  text,
  href,
  action,
}: {
  title: string;
  text: string;
  href: string;
  action: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-[#d6a85f]/50 hover:bg-white/[0.06]"
    >
      <h3 className="mb-4 text-2xl font-bold">{title}</h3>
      <p className="mb-6 leading-8 text-white/70">{text}</p>
      <p className="font-semibold text-[#d6a85f]">{action} →</p>
    </Link>
  );
}