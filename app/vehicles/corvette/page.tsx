import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import InfoCard from "../../components/InfoCard";
import CTAButton from "../../components/CTAButton";
import GuideCard from "../../components/GuideCard";
import NumberedTipCard from "../../components/NumberedTipCard";
import {
  CarFront,
  Sun,
  Gauge,
  BriefcaseBusiness,
  MapPinned,
  BadgeCheck,
  CircleDot,
  Zap,
  Wind,
  ParkingCircle,
  Clock,
} from "lucide-react";

const turoHostLink = "https://turo.com/us/en/host/20782143";

const quickStart = [
  {
    icon: CarFront,
    title: "Getting Comfortable",
    href: "#getting-comfortable",
    text: "Start button, doors, gear selector, and the first few things to know.",
  },
  {
    icon: Sun,
    title: "Convertible Top",
    href: "#convertible",
    text: "How to lower or raise the top with confidence.",
  },
  {
    icon: Gauge,
    title: "Drive Modes",
    href: "#drive-modes",
    text: "Tour Mode, the Z button, and when to use each.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Packing & Luggage",
    href: "#luggage",
    text: "What fits best in the frunk and rear cargo area.",
  },
  {
    icon: MapPinned,
    title: "Recommendations",
    href: "#recommends",
    text: "Make the drive part of the experience.",
  },
  {
    icon: BadgeCheck,
    title: "Return",
    href: "#return",
    text: "Simple reminders before drop-off.",
  },
];

const fiveThings = [
  {
    icon: CircleDot,
    title: "Start in Tour Mode",
    text: "The Corvette starts in Tour Mode every time. It provides the best overall balance of comfort, performance, steering response, and fuel economy.",
  },
  {
    icon: Zap,
    title: "Use the Z Button",
    text: "When you are comfortable and the road is right, press the Z button on the steering wheel. It is programmed for a more spirited Corvette experience.",
  },
  {
    icon: Wind,
    title: "Put the Top Down",
    text: "More often than you think. Roll the windows up, turn up the heat if needed, and let the drive become part of the memory.",
  },
  {
    icon: ParkingCircle,
    title: "Back Into Parking Spaces",
    text: "The rear camera makes backing in easy, and it helps protect the low front splitter from curbs and parking blocks.",
  },
  {
    icon: Clock,
    title: "Take Your Time",
    text: "This is not a car to rush. Let people enjoy seeing it, enjoy the attention, and make the journey part of the experience.",
  },
];

export default function CorvettePage() {
  return (
    <main className="min-h-screen bg-[#020407] text-white">
      <Navbar />

      <PageHero
        eyebrow="Drive Elevated"
        title="Your Corvette Experience"
        subtitle="Everything you need to feel confident, enjoy the drive, and make the Corvette one of the most memorable parts of your trip."
        image="/images/corvette.jpg"
      />

      <section className="px-6 pb-16 md:px-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <h2 className="mb-5 text-3xl font-bold">
            Welcome to Your Corvette Experience
          </h2>

          <div className="max-w-4xl space-y-5 leading-8 text-white/75">
            <p>
              Thank you for choosing Drive Elevated. Whether you are celebrating
              a special occasion, exploring Northern California, or simply
              treating yourself to an unforgettable weekend, I am honored you
              chose to experience it in this Corvette.
            </p>

            <p>
              I have driven many incredible vehicles over the years, and this
              Corvette continues to be one of the most responsive, intuitive, and
              rewarding cars I have ever owned. What surprises most guests is
              not just the performance — it is how naturally the car comes to
              you.
            </p>

            <p>
              My hope is simple: I want this Corvette to become more than
              transportation. I want the drive itself to become one of the most
              memorable parts of your trip.
            </p>

            <p className="text-[#d6a85f]">Enjoy the experience. — JR</p>
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
            Five Things Every Corvette Guest Should Know
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

      <section
        id="getting-comfortable"
        className="grid gap-6 px-6 pb-16 md:grid-cols-2 md:px-16"
      >
        <InfoCard title="Starting the Corvette">
          Sit down, press the brake pedal, then press the Start/Stop button
          located just to the right of the steering wheel on the dashboard. From
          the driver&apos;s seat, the button can be partially hidden by the wheel,
          so look just to the right side of the steering column if you do not see
          it immediately.
        </InfoCard>

        <InfoCard title="Selecting Drive">
          The gear selector looks different from many vehicles, but it is simple
          once you see it. The Park, Reverse, Neutral, and Drive controls are
          clearly labeled. Take a moment to look at the labels before pulling
          away and you will be comfortable quickly.
        </InfoCard>

        <InfoCard title="Opening the Doors">
          From the outside, the door release is tucked underneath the black trim
          where your hand naturally reaches to open the door. From the inside,
          there is no traditional handle. Rest your hand on the armrest and the
          release button is positioned naturally where your thumb lands.
        </InfoCard>

        <InfoCard title="Rearview Mirror">
          With the top up, the rearview mirror may switch into digital camera
          mode to improve visibility. With the top down, it may return to a
          traditional mirror view. The change can surprise first-time guests, but
          it is completely normal.
        </InfoCard>
      </section>

      <section id="drive-modes" className="px-6 pb-16 md:px-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <h2 className="mb-5 text-3xl font-bold">⚙️ Drive Modes</h2>

          <div className="max-w-4xl space-y-5 leading-8 text-white/75">
            <p>
              Every time you start the Corvette, it automatically begins in Tour
              Mode. That is intentional. Tour provides the best overall balance
              of comfort, performance, steering response, and fuel economy,
              making it the perfect setting for everyday driving.
            </p>

            <p>
              When you are ready for a more spirited experience, press the{" "}
              <span className="font-semibold text-[#d6a85f]">Z button</span> on
              the steering wheel. I have programmed it to maximize the
              performance feel of the Corvette with quicker response, sharper
              handling, and a more aggressive sound.
            </p>

            <p>
              My recommendation is simple: start in Tour Mode while you get
              comfortable. When you find the right road and want to experience
              more of what the Corvette offers, press Z and enjoy the
              difference.
            </p>
          </div>
        </div>
      </section>

      <section id="convertible" className="px-6 pb-16 md:px-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <h2 className="mb-5 text-3xl font-bold">☀️ Convertible Top</h2>

          <div className="max-w-4xl space-y-5 leading-8 text-white/75">
            <p>
              One of the best parts of this Corvette is enjoying it with the top
              down. My recommendation is simple: use it often.
            </p>

            <p>
              The convertible controls are located on the driver&apos;s door
              panel. One switch operates the rear window, and the other operates
              the convertible top.
            </p>

            <ul className="space-y-2 pl-5">
              <li>• Push the convertible switch down to lower the top.</li>
              <li>• Pull the convertible switch up to raise the top.</li>
              <li>
                • Hold the switch for the entire cycle until the dash confirms
                the operation is complete.
              </li>
            </ul>

            <p>
              During the cycle, the windows will lower automatically, the top
              will complete its movement, and the dash will let you know when
              the cycle is finished. Do not release the switch early.
            </p>

            <p>
              I recommend operating the top while stopped whenever possible so
              you can give it your full attention and confirm there is adequate
              clearance above and behind the vehicle. It can operate at very low
              speeds, but get comfortable with the car first.
            </p>

            <div className="rounded-2xl border border-[#d6a85f]/30 bg-[#d6a85f]/10 p-6">
              <h3 className="mb-3 text-xl font-semibold text-[#d6a85f]">
                Drive Elevated Tip
              </h3>
              <p>
                Put the top down more often than you think. Roll the windows up,
                turn up the heat if needed, and let the drive become part of the
                memory. You will hear more of the engine, feel more connected to
                the road, and experience the places you visit in a completely
                different way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="luggage"
        className="grid gap-6 px-6 pb-16 md:grid-cols-2 md:px-16"
      >
        <InfoCard title="Packing & Luggage">
          The C8 Corvette offers surprisingly useful storage between the front
          trunk and rear cargo area. Soft-sided luggage is usually best because
          it conforms to the unique shapes of the compartments.
        </InfoCard>

        <InfoCard title="Front Trunk">
          A standard airline carry-on can fit well in the frunk when placed on
          its side. Do not try to stand a carry-on upright if it prevents the
          frunk from closing properly.
        </InfoCard>

        <InfoCard title="Rear Cargo Area">
          The rear cargo area can handle additional carry-ons, soft weekend
          bags, backpacks, or golf bags. Large rigid checked-size suitcases are
          not recommended.
        </InfoCard>

        <InfoCard title="ZR1 Aero Package">
          This Corvette has the ZR1 Aero Package with a tall rear spoiler. When
          loading or unloading from the rear trunk, be careful not to lift bags
          into the spoiler. Slide items out carefully to avoid scratches or
          damage.
        </InfoCard>

        <InfoCard title="Seal Line">
          Before closing either the frunk or rear hatch, make sure all luggage
          sits completely below the weather seal line. If something sits above
          the recess, it can interfere with closing and may damage the seal,
          luggage, or vehicle.
        </InfoCard>

        <InfoCard title="Best Packing Strategy">
          For Napa, Tahoe, San Francisco, or a weekend getaway, soft duffels and
          smaller carry-ons work best. Pack flexible whenever possible and the
          Corvette becomes much easier to live with.
        </InfoCard>
      </section>

      <section className="grid gap-6 px-6 pb-16 md:grid-cols-2 md:px-16">
        <InfoCard title="⛽ Fuel">
          Premium fuel only — 91 octane or higher. Please return the Corvette
          with approximately the same fuel level as pickup unless otherwise
          arranged through Turo.
        </InfoCard>

        <InfoCard title="🅿️ Parking & Front Splitter">
          The Corvette sits lower than it looks. Take speed bumps, steep
          driveways, and parking lot entrances slowly and at a slight angle when
          possible. Backing into parking spaces is strongly recommended because
          the rear camera helps you judge distance, while the front has no camera
          or front parking sensors.
        </InfoCard>
      </section>

      <section id="recommends" className="px-6 pb-16 md:px-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#d6a85f]">
            Drive Elevated Recommends
          </p>

          <h2 className="mb-5 text-3xl font-bold">
            Make the Drive Part of the Experience
          </h2>

          <div className="max-w-4xl space-y-5 leading-8 text-white/75">
            <p>
              If you are headed to Napa, Tahoe, San Francisco, or anywhere else
              in Northern California, take a moment before leaving to ask one
              question:
            </p>

            <p className="text-xl font-semibold text-[#d6a85f]">
              Do I want the fastest route, or the most memorable drive?
            </p>

            <p>
              If you are on a schedule, take the direct route and enjoy every
              mile. But if you have extra time, consider choosing a route that
              becomes part of the trip itself. Sometimes the extra thirty
              minutes become the memory you talk about later.
            </p>
          </div>
        </div>
      </section>

      <section id="return" className="px-6 pb-20 md:px-16">
              <div className="rounded-3xl border border-[#d6a85f]/30 bg-[#d6a85f]/10 p-8 md:p-10">
                <h2 className="mb-5 text-3xl font-bold">✅ Returning Your Corvette</h2>
      
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/35 p-6">
                    <h3 className="mb-3 text-xl font-semibold text-[#d6a85f]">
                      Quick Return Checklist
                    </h3>
                    <ul className="space-y-2 leading-7 text-white/70">
                      <li>• Return on time.</li>
                      <li>• Bring fuel back to the agreed level.</li>
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
      <Footer />
    </main>
  );
}