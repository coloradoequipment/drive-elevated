import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import InfoCard from "../../components/InfoCard";
import CTAButton from "../../components/CTAButton";
import GuideCard from "../../components/GuideCard";
import NumberedTipCard from "../../components/NumberedTipCard";
import {
  BatteryCharging,
  Gauge,
  MapPinned,
  SlidersHorizontal,
  Sparkles,
  BadgeCheck,
  Battery,
  Route,
  CarFront,
  Volume2,
  Boxes,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Rivian R1S Rental in Sacramento | Drive Elevated",
  description:
    "Explore the Rivian R1S Adventure from Drive Elevated, with Sacramento airport delivery, charging guidance, Driver+, cargo planning, family travel tips, and curated Northern California adventures.",

  keywords: [
    "Rivian rental Sacramento",
    "Rivian R1S rental Sacramento",
    "electric SUV rental Sacramento",
    "Rivian airport rental",
    "Rivian rental Lake Tahoe",
    "Rivian rental Napa Valley",
    "SMF airport Rivian rental",
    "Drive Elevated Rivian",
  ],

  alternates: {
    canonical: "/vehicles/rivian",
  },

  openGraph: {
    type: "website",
    url: "https://driveelevated.com/vehicles/rivian",
    title: "Rivian R1S Adventure | Drive Elevated",
    description:
      "Luxury electric adventure with detailed charging guidance, cargo planning, family travel support, and Sacramento airport delivery.",
    images: [
      {
        url: "/images/rivian.jpg",
        width: 1200,
        height: 630,
        alt: "Rivian R1S Adventure from Drive Elevated",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rivian R1S Adventure | Drive Elevated",
    description:
      "Explore the Rivian guide, charging tips, cargo planning, and booking details for Sacramento and Northern California.",
    images: ["/images/rivian.jpg"],
  },
};

const turoHostLink = "https://turo.com/us/en/host/20782143";

const quickStart = [
  {
    icon: SlidersHorizontal,
    title: "Make It Yours",
    href: "#make-it-yours",
    text: "Seat position, mirrors, climate, lighting, and driver settings.",
  },
  {
    icon: BatteryCharging,
    title: "Charging",
    href: "#charging",
    text: "How to plan charging stops and understand the 80% rule.",
  },
  {
    icon: Gauge,
    title: "Drive Modes",
    href: "#drive-modes",
    text: "Conserve, All-Purpose, Sport, and when each mode makes sense.",
  },
  {
    icon: MapPinned,
    title: "Planning Trips",
    href: "#trip-planning",
    text: "Use the map, range estimate, and charger icons before longer drives.",
  },
  {
    icon: Boxes,
    title: "Storage",
    href: "/vehicles/rivian/luggage",
    text: "Frunk, rear cargo, under-floor storage, and the built-in flashlight.",
  },
  {
    icon: BadgeCheck,
    title: "Return",
    href: "#return",
    text: "Charge level, belongings, photos, and final return notes.",
  },
];

const fiveThings = [
  {
    icon: Battery,
    title: "Plan a Little",
    text: "If you do not normally drive electric, give yourself a few extra minutes to plan charging. Once you understand the rhythm, the Rivian is incredibly easy to enjoy.",
  },
  {
    icon: Route,
    title: "Expect Around 300 Miles",
    text: "On a full charge, the Rivian should provide around 300 miles of range depending on speed, weather, elevation, passengers, cargo, and climate use.",
  },
  {
    icon: BatteryCharging,
    title: "Charge to 80% on the Road",
    text: "Charging to 80% is usually efficient. The final 20% can take much longer, so only charge higher when you have extra time or need the range.",
  },
  {
    icon: CarFront,
    title: "Air Suspension Is Normal",
    text: "You may hear the suspension adjust during your trip. That is normal. The Rivian changes height and pressure based on drive mode, load, and conditions.",
  },
  {
    icon: Sparkles,
    title: "Explore the Storage",
    text: "The Rivian has excellent storage, including the frunk, rear cargo area, hidden storage beneath covers, and a flashlight in the driver door jamb.",
  },
];

export default function RivianPage() {
  return (
    <main className="min-h-screen bg-[#020407] text-white">
      <Navbar />

      <PageHero
        eyebrow="Drive Elevated"
        title="Your Rivian R1S Experience"
        subtitle="An all-electric adventure SUV designed for comfort, capability, family travel, and memorable Northern California exploring."
        image="/images/rivian.jpg"
      />

      <section className="px-6 pb-16 md:px-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <h2 className="mb-5 text-3xl font-bold">
            Welcome to Your Rivian Experience
          </h2>

          <div className="max-w-4xl space-y-5 leading-8 text-white/75">
            <p>
              Thank you for choosing Drive Elevated. The Rivian R1S is a very
              different kind of premium vehicle — quiet, powerful, spacious, and
              incredibly capable.
            </p>

            <p>
              If you already drive an electric vehicle, the Rivian will feel
              familiar quickly. If this is your first EV experience, give
              yourself a little extra time to understand charging, range, drive
              modes, and the screen-based controls. Once you get the hang of it,
              it is an amazing vehicle to drive.
            </p>

            <p>
              My goal is to help you feel confident with the technology before
              you leave, so you can focus on the adventure ahead — whether that
              is Napa, Tahoe, San Francisco, Shasta, or a family weekend closer
              to home.
            </p>

            <p className="text-[#d6a85f]">Enjoy the adventure. — JR</p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-16">
        <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#d6a85f]">
          Start Here
        </p>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {quickStart.map((item) => (
            <GuideCard
              key={item.title}
              title={item.title}
              text={item.text}
              href={item.href}
              icon={item.icon}
            />
          ))}
        </div>
      </section>

      <section className="px-6 pb-16 md:px-16">
        <div className="rounded-3xl border border-[#d6a85f]/30 bg-[#d6a85f]/10 p-8 md:p-10">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#d6a85f]">
            Drive Elevated Tip
          </p>

          <h2 className="mb-8 text-3xl font-bold">
            Five Things Every Rivian Guest Should Know
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-5">
            {fiveThings.map((item, index) => (
              <NumberedTipCard
                key={item.title}
                number={String(index + 1).padStart(2, "0")}
                title={item.title}
                text={item.text}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="make-it-yours" className="px-6 pb-16 md:px-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <h2 className="mb-5 text-3xl font-bold">✨ Make It Yours</h2>

          <div className="max-w-4xl space-y-5 leading-8 text-white/75">
            <p>
              Similar to the BMW, the Rivian rewards a few minutes of setup
              before you leave. Adjust the seat, mirrors, steering wheel,
              climate, lighting, and driver preferences so the vehicle feels
              comfortable for your trip.
            </p>

            <p>
              One quirk with the Rivian is that mirror adjustment may appear
              after you begin adjusting the seat. The system connects seat and
              mirror position together so you can save them as part of the
              driver profile.
            </p>

            <p>
              Take a moment to explore the screens before driving away. The
              Rivian is very intuitive once you understand where everything
              lives.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 px-6 pb-16 md:grid-cols-2 md:px-16">
        <InfoCard title="Climate Vents">
          The air vents are controlled through the touchscreen rather than by
          manually moving physical vents. It takes a moment to get used to, but
          once adjusted, the cabin is very comfortable.
        </InfoCard>

        <InfoCard title="Voice Assistant">
          In settings, you can choose between Rivian voice interaction and a
          Google voice experience. Google tends to be more responsive, while the
          Rivian assistant feels more personalized to the vehicle.
        </InfoCard>

        <InfoCard title="Interior Lighting">
          Explore the interior lighting and comfort settings. Small adjustments
          can change the feel of the cabin and make the Rivian more enjoyable
          for longer trips.
        </InfoCard>

        <InfoCard title="Driver Profile">
          Once seat and mirror settings are adjusted, save them for the driver
          when available. This makes the vehicle feel much more natural
          throughout the trip.
        </InfoCard>
      </section>
<section id="charging" className="px-6 pb-16 md:px-16">
  <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
    <h2 className="mb-5 text-3xl font-bold">🔋 Charging & Range</h2>

    <div className="max-w-4xl space-y-5 leading-8 text-white/75">
      <p>
        On a full charge, the Rivian should provide around 300 miles of range,
        depending on speed, weather, elevation, cargo, passengers, and climate
        use.
      </p>

      <p>
        If you are new to electric vehicles, the biggest adjustment is planning.
        Take a moment before longer drives to look at your route, range, and
        charging options.
      </p>

      <p>
        Charging usually moves fastest up to about 80%. The final 20% can take
        nearly as long as the first 80%, which is normal for electric vehicles.
      </p>

      <p>
        If you are stopping briefly during a road trip, charging to around 80%
        and continuing is usually the best use of time. If you are charging
        overnight or while parked for a longer visit, charging closer to 100%
        can make sense.
      </p>
    </div>
  </div>
</section>

<section id="trip-planning" className="grid gap-6 px-6 pb-16 md:grid-cols-2 md:px-16">
  <InfoCard title="Finding Chargers">
    The Rivian map can show available charging stations nearby. Tap charger
    icons on the map to view options and route directly to a charging location.
  </InfoCard>

  <InfoCard title="Tesla Adapter">
    A Tesla Supercharger adapter is stored in the frunk. Not every Tesla
    Supercharger location will work, but many do. It is a great option when
    available, but I would not make it your only charging plan.
  </InfoCard>

  <InfoCard title="Charging Strategy">
    For longer trips, plan one charging stop earlier than you think you need.
    It keeps the drive relaxed and avoids arriving at a charger with very low
    range.
  </InfoCard>

  <InfoCard title="Return Charge">
    If prepaid charging was purchased, you may return the Rivian at any charge
    level. If prepaid charging was not purchased, please return it full. For
    Drive Elevated, anything above 80% is considered full so you do not need to
    wait unnecessarily for the final slow portion of charging.
  </InfoCard>
</section>

<section id="drive-modes" className="px-6 pb-16 md:px-16">
  <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
    <h2 className="mb-5 text-3xl font-bold">⚙️ Drive Modes</h2>

    <div className="grid gap-6 md:grid-cols-3">
      <InfoCard title="Conserve Mode">
        Best for longer trips and maximum range. Conserve Mode helps stretch
        mileage without sacrificing the overall Rivian experience.
      </InfoCard>

      <InfoCard title="All-Purpose Mode">
        Great for around-town driving, daily use, and a balanced experience.
        This is the mode most guests will enjoy most of the time.
      </InfoCard>

      <InfoCard title="Sport Mode">
        Gives the Rivian a lower, stiffer, more performance-focused feel. It
        changes both how the vehicle drives and how it looks.
      </InfoCard>
    </div>

    <p className="mt-8 max-w-4xl leading-8 text-white/75">
      The air suspension may adjust height and pressure during your trip based
      on mode, load, and conditions. Hearing it activate is completely normal.
    </p>
  </div>
</section>
<section id="storage" className="px-6 pb-16 md:px-16">
  <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
    <h2 className="mb-5 text-3xl font-bold">📦 Storage & Utility</h2>

    <div className="grid gap-6 md:grid-cols-2">
      <InfoCard title="Frunk & Rear Cargo">
  <div className="flex h-full flex-col">
    <p className="leading-8">
      The Rivian has excellent storage between the frunk, rear cargo area,
      and additional storage beneath the cargo floor. Take a moment to open
      each compartment and explore the available space before loading your
      luggage. View cargo guide for detailed examples
    </p>

    <div className="mt-auto pt-6">
     <Link
  href="/vehicles/rivian/luggage"
  className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-[#d6a85f]/60 bg-[#d6a85f]/15 px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[#d6a85f] transition hover:bg-[#d6a85f]/25"
>
  View Cargo Guide →
</Link>
    </div>
  </div>
</InfoCard>

      <InfoCard title="Hidden Storage">
        Both the front and rear storage areas have additional space underneath
        the main panels. This is useful for smaller bags, charging accessories,
        shoes, jackets, or items you want tucked away during the trip.
      </InfoCard>

      <InfoCard title="Seven-Passenger Seating">
        The R1S has three rows and room for up to seven passengers. Cargo space
        changes depending on whether the third row is upright or folded.
      </InfoCard>

      <InfoCard title="Built-In Flashlight">
        There is a rechargeable flashlight stored in the driver door jamb. It is
        useful if you need it during your trip. Please return it to the door jamb
        before drop-off so it stays with the vehicle.
      </InfoCard>
    </div>
  </div>
</section>

<section className="grid gap-6 px-6 pb-16 md:grid-cols-2 md:px-16">
  <InfoCard title="Adventure Use">
    Enjoy the Rivian&apos;s capability responsibly. Please do not off-road,
    tow, race, or use the vehicle outside Turo guidelines unless specifically
    approved.
  </InfoCard>

  <InfoCard title="Parking & Size">
    The Rivian is easy to drive but still a full-size three-row SUV. Give
    yourself extra room in tight parking lots, garages, and narrow streets,
    especially when loaded with passengers or luggage.
  </InfoCard>
   </section>
<section id="return" className="px-6 pb-20 md:px-16">
        <div className="rounded-3xl border border-[#d6a85f]/30 bg-[#d6a85f]/10 p-8 md:p-10">
          <h2 className="mb-5 text-3xl font-bold">✅ Returning Your Rivian</h2>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/35 p-6">
              <h3 className="mb-3 text-xl font-semibold text-[#d6a85f]">
                Quick Return Checklist
              </h3>
              <ul className="space-y-2 leading-7 text-white/70">
                <li>• Return on time.</li>
                <li>• Bring charge back to the agreed level.</li>
                <li>• Remove personal items.</li>
                <li>• Take required Turo photos.</li>
                <li>• Message through Turo if anything changes.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/35 p-6">
              <h3 className="mb-3 text-xl font-semibold text-[#d6a85f]">
                Need Help?
              </h3>

              <p className="mb-6 leading-7 text-white/70">
                For active reservations, please message through your Turo trip
                thread so all communication stays connected to your booking.
              </p>

              <div className="flex flex-col gap-4">
                <CTAButton href="/emergency">Help &amp; Emergency →</CTAButton>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <CTAButton href={turoHostLink} external>
                    Open Turo →
                  </CTAButton>

                  <CTAButton href="/pickup" variant="outline">
                    Pickup &amp; Return
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 pb-16 md:px-16">
  <div className="rounded-3xl border border-[#d6a85f]/30 bg-[#d6a85f]/10 p-8 md:p-10">
    <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#d6a85f]">
      Signature Journey 001
    </p>

    <h2 className="mb-4 text-3xl font-bold">
      Planning a Napa Valley Drive?
    </h2>

    <p className="mb-6 max-w-4xl leading-8 text-white/75">
      Before heading straight to your hotel, explore our Drive Elevated
      Signature Journey to Napa Valley. It includes coffee stops, the Yolo
      Causeway, Davis, Silverado Trail, curated Napa stops, and ways to make the
      drive part of the experience.
    </p>

    <Link
      href="/journeys/napa"
      className="inline-flex rounded-full border border-[#d6a85f]/60 bg-[#d6a85f]/15 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[#d6a85f] transition hover:bg-[#d6a85f]/25"
    >
      Read Journey 001 →
    </Link>
  </div>
</section>
      <Footer />
    </main>
  );
}