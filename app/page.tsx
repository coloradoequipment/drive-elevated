import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CTAButton from "./components/CTAButton";

const turoHostLink = "https://turo.com/us/en/host/20782143";

const vehicles = [
  {
    name: "Corvette Convertible",
    image: "/images/corvette.jpg",
    eyebrow: "Sports Car Weekend",
    description: "Date nights, wine country, golf getaways, and open-air performance.",
    href: "/vehicles/corvette",
  },
  {
    name: "BMW M4 Convertible",
    image: "/images/bmw-m4.jpg",
    eyebrow: "Luxury Touring",
    description: "Mountain roads, business travel, special occasions, and top-down cruising.",
    href: "/vehicles/bmw-m4",
  },
  {
    name: "Rivian R1S",
    image: "/images/rivian.jpg",
    eyebrow: "Adventure Ready",
    description: "Tahoe trips, family travel, airport runs, and all-electric exploration.",
    href: "/vehicles/rivian",
  },
];

const experienceSteps = [
  {
    number: "01",
    title: "Choose Your Experience",
    text: "Select the vehicle that fits your trip, whether it is performance, luxury touring, or adventure.",
  },
  {
    number: "02",
    title: "Reserve With Confidence",
    text: "Book through Turo knowing your vehicle is thoughtfully prepared before every trip.",
  },
  {
    number: "03",
    title: "Review Your Guide",
    text: "Use Drive Elevated guides for pickup, luggage, controls, charging, fueling, and return details.",
  },
  {
    number: "04",
    title: "Enjoy the Drive",
    text: "Arrive prepared, settle in quickly, and spend more time enjoying the vehicle and your trip.",
  },
];

const trustItems = [
  {
    title: "All-Star Host",
    text: "A premium guest experience backed by real Turo hosting history.",
  },
  {
    title: "Professionally Prepared",
    text: "Every vehicle is cleaned, checked, and staged with guest experience in mind.",
  },
  {
    title: "Vehicle-Specific Guides",
    text: "Clear guides help you understand each vehicle before and during your trip.",
  },
  {
    title: "Responsive Support",
    text: "For active reservations, trip communication stays connected through Turo.",
  },
];

const resources = [
  {
    title: "Guest Guide",
    text: "Start here for the main Drive Elevated guest experience.",
    href: "/guest-guide",
  },
  {
    title: "Pickup & Return",
    text: "Helpful details for pickup flow, return reminders, and trip logistics.",
    href: "/pickup",
  },
  {
    title: "BMW Luggage Guide",
    text: "Convertible divider details, trunk dimensions, and luggage planning.",
    href: "/vehicles/bmw-m4/luggage",
  },
  {
    title: "Corvette Cargo Guide",
    text: "Frunk, rear trunk, golf clubs, carry-ons, and rear wing loading tips.",
    href: "/vehicles/corvette/luggage",
  },
  {
    title: "Rivian Cargo Guide",
    text: "Flexible passenger and cargo layouts for family and adventure travel.",
    href: "/vehicles/rivian/luggage",
  },
  {
    title: "Help & Emergency",
    text: "Accident steps, roadside help, towing details, and emergency support.",
    href: "/emergency",
  },
];

const reviews = [
  {
    stars: "★★★★★",
    quote:
      "Easy pickup, the car was epic. The host was friendly and knowledgeable, willing to answer any questions and gave us a complete rundown of the car. I had a great experience and would recommend to others!",
    guest: "Vlad",
    vehicle: "2025 Chevrolet Corvette",
  },
  {
    stars: "★★★★★",
    quote:
      "Fabulous car. It was great fun cruising around Sacramento in a sporty convertible. It left me disappointed to return home to my boring sedan and SUV. Surprisingly good on fuel, but the true measure is in smiles per hour.",
    guest: "Patrick",
    vehicle: "2022 BMW M4 Convertible",
  },
  {
    stars: "★★★★★",
    quote:
      "This trip was incredibly positive. The owner answered all of my questions and the Rivian was exciting to drive. It was presented in beautiful condition at the airport, and the entire experience was outstanding.",
    guest: "Rienzi",
    vehicle: "2023 Rivian R1S",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020407] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#020407]">
          <Image
            src="/images/fleet-hero-v5.jpeg"
            alt="Drive Elevated premium vehicle fleet"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020407] via-[#020407]/85 to-[#020407]/0" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020407] via-transparent to-[#020407]/0" />
        </div>

        <div className="relative z-10">
          <Navbar />
        </div>

        <div className="relative z-10 flex min-h-[62vh] items-center px-6 py-12 md:min-h-[68vh] md:px-16">
          <div className="max-w-4xl">
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

            <p className="mb-9 max-w-2xl text-lg leading-8 text-white/82">
              Premium vehicles, thoughtful preparation, detailed guest guides,
              and curated support designed to make every rental feel effortless.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <CTAButton href="/#vehicles">View Fleet →</CTAButton>
              <CTAButton href="/guest-guide" variant="outline">
                Guest Guide →
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#d6a85f]">
            The Drive Elevated Experience
          </p>

          <h2 className="mb-10 text-4xl font-bold md:text-5xl">
            Simple. Seamless. Elevated.
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            {experienceSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="mb-5 text-sm font-bold tracking-[0.35em] text-[#d6a85f]">
                  {step.number}
                </p>
                <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                <p className="leading-7 text-white/70">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vehicles" className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.45em] text-[#d6a85f]">
              Our Vehicles
            </p>
            <h2 className="text-4xl font-bold md:text-5xl">
              Choose Your Drive
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.name}
                className="group overflow-hidden rounded-3xl border border-white/15 bg-black/40"
              >
                <div className="relative h-72">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                </div>

                <div className="p-6">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#d6a85f]">
                    {vehicle.eyebrow}
                  </p>
                  <h3 className="mb-3 text-2xl font-semibold uppercase tracking-[0.08em]">
                    {vehicle.name}
                  </h3>
                  <p className="mb-6 leading-7 text-white/70">
                    {vehicle.description}
                  </p>
                  <Link
                    href={vehicle.href}
                    className="font-semibold text-[#d6a85f] transition hover:text-[#e3bc78]"
                  >
                    View Vehicle Guide →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[#d6a85f]/25 bg-[#11100c] p-8 md:p-10">
          <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#d6a85f]">
            Why Guests Choose Drive Elevated
          </p>

          <div className="grid gap-6 md:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item.title}>
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="leading-7 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#d6a85f]">
            Guest Resources
          </p>

          <h2 className="mb-8 text-4xl font-bold md:text-5xl">
            Guides Before, During, and After Your Trip
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#d6a85f]/50 hover:bg-white/[0.06]"
              >
                <h3 className="mb-3 text-xl font-bold">{resource.title}</h3>
                <p className="mb-6 leading-7 text-white/70">{resource.text}</p>
                <p className="font-semibold text-[#d6a85f]">Open guide →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#d6a85f]">
            Guest Reviews
          </p>

          <h2 className="mb-8 text-4xl font-bold md:text-5xl">
            Real Experiences. Real Guests.
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
  {reviews.map((review) => (
    <div
      key={review.guest}
      className="rounded-3xl border border-white/10 bg-black/30 p-6"
    >
      <p className="mb-4 text-xl text-[#d6a85f]">{review.stars}</p>

      <p className="mb-6 leading-8 text-white/75">
        "{review.quote}"
      </p>

      <div className="mb-6">
        <p className="font-semibold text-white">{review.guest}</p>
        <p className="text-sm text-white/50">{review.vehicle}</p>
      </div>

      <Link
        href={turoHostLink}
        target="_blank"
        className="font-semibold text-[#d6a85f] transition hover:text-[#e3bc78]"
      >
        View reviews on Turo →
      </Link>
    </div>
  ))}
</div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[#d6a85f]/30 bg-[#d6a85f]/10 p-8 text-center md:p-12">
          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-[#d6a85f]">
            Ready to Elevate Your Next Drive?
          </p>

          <h2 className="mx-auto mb-6 max-w-3xl text-4xl font-bold md:text-5xl">
            Choose a vehicle that turns the trip into part of the experience.
          </h2>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <CTAButton href={turoHostLink} external>
              View Turo Profile →
            </CTAButton>
            <CTAButton href="/#vehicles" variant="outline">
              Explore Fleet →
            </CTAButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}