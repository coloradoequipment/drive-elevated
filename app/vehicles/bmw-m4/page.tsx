import Link from "next/link";
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
  SlidersHorizontal,
  Mic,
  BadgeCheck,
  CircleDot,
  Zap,
  Volume2,
  ParkingCircle,
  Palette,
} from "lucide-react";

const turoHostLink = "https://turo.com/us/en/host/20782143";

const quickStart = [
  {
    icon: SlidersHorizontal,
    title: "Make It Yours",
    href: "#make-it-yours",
    text: "Seats, mirrors, heads-up display, climate, lighting, and comfort settings.",
  },
  {
    icon: Gauge,
    title: "Drive Modes",
    href: "#drive-modes",
    text: "Comfort, M1, M2, and when to use each setting.",
  },
  {
    icon: Sun,
    title: "Convertible Top",
    href: "#convertible",
    text: "How to open or close the top with confidence.",
  },
  {
    icon: CarFront,
    title: "Transmission",
    href: "#transmission",
    text: "Drive, reverse, manual mode, and paddle shifters.",
  },
  {
    icon: Mic,
    title: "Hey BMW",
    href: "#voice",
    text: "Use voice commands for directions, climate, and vehicle functions.",
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
    icon: SlidersHorizontal,
    title: "Take 10 Minutes",
    text: "The BMW rewards setup. A few minutes adjusting the car to you makes the entire trip feel better.",
  },
  {
    icon: CircleDot,
    title: "Comfort First",
    text: "The M4 starts in Comfort Mode, which is the best balance for normal driving, cruising, and city use.",
  },
  {
    icon: Zap,
    title: "M1 Is the Sweet Spot",
    text: "M1 gives you the sharper, louder, more responsive M4 experience without going straight to the most aggressive settings.",
  },
  {
    icon: Volume2,
    title: "Use Hey BMW",
    text: "Voice commands are genuinely useful. Navigation can appear in the heads-up display, keeping your focus on the road.",
  },
  {
    icon: ParkingCircle,
    title: "Back In When Possible",
    text: "The front end sits low and there is no front camera. Backing in gives you better control and an easier exit.",
  },
];

export default function BMWPage() {
  return (
    <main className="min-h-screen bg-[#020407] text-white">
      <Navbar />

      <PageHero
        eyebrow="Drive Elevated"
        title="Your BMW M4 Experience"
        subtitle="A driver-focused convertible that rewards personalization, precision, and confidence behind the wheel."
        image="/images/bmw-m4.jpg"
      />

      <section className="px-6 pb-16 md:px-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <h2 className="mb-5 text-3xl font-bold">
            Welcome to Your BMW M4 Competition
          </h2>

          <div className="max-w-4xl space-y-5 leading-8 text-white/75">
            <p>
              Thank you for choosing Drive Elevated. The BMW M4 Competition
              Convertible is one of those rare vehicles that can feel refined,
              comfortable, and easy to enjoy one moment, then transform into a
              sharper performance machine with the press of a button.
            </p>

            <p>
              What makes the M4 special is how much it can adapt to you. Take a
              few minutes before you leave to set up the seat, mirrors, heads-up
              display, climate, lighting, and drive settings. Those small details
              make the entire trip feel more personal and more effortless.
            </p>

            <p>
              My goal is simple: I want you to feel confident using the BMW’s
              technology, comfortable with its controls, and excited to enjoy the
              precision that makes the M4 such a rewarding car to drive.
            </p>

            <p className="text-[#d6a85f]">Enjoy the drive. — JR</p>
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
            Five Things Every BMW Guest Should Know
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
              The BMW M4 is designed to adapt to the driver. Spend five to ten
              minutes setting it up before you leave, and every mile of your
              trip will feel better.
            </p>

            <p>
              Adjust the seat and mirrors first, then fine-tune the heads-up
              display so it sits comfortably in your line of sight. Connect your
              phone, confirm navigation is working, and set the climate controls
              the way you prefer.
            </p>

            <p>
              The BMW also allows you to adjust the interior ambient lighting
              with several color combinations. It may sound like a small detail,
              but the lighting changes the feel of the cabin and can completely
              shift the mood of the drive.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 px-6 pb-16 md:grid-cols-2 md:px-16">
        <InfoCard title="Heads-Up Display">
          Adjust the heads-up display height so the information appears
          comfortably in your line of sight. This makes navigation and speed
          information easier to read without taking your eyes off the road.
        </InfoCard>

        <InfoCard title="Climate & Seats">
          Set the climate the way you like it before departing. You can sync or
          unsync driver and passenger temperatures. The seat comfort button
          brings up heated and ventilated seat options, and the BMW can remember
          the last selected mode.
        </InfoCard>

        <InfoCard title="Interior Lighting">
          Explore the ambient lighting options. The different color combinations
          give the cabin a noticeably different feel and are part of what makes
          the BMW experience feel personalized.
        </InfoCard>

        <InfoCard title="Phone Pairing">
          Take a minute to connect Apple CarPlay or Android Auto before leaving.
          Once paired, the BMW will usually recognize your phone again during the
          trip.
        </InfoCard>
      </section>

      <section id="drive-modes" className="px-6 pb-16 md:px-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <h2 className="mb-5 text-3xl font-bold">⚙️ Drive Modes</h2>

          <div className="max-w-4xl space-y-5 leading-8 text-white/75">
            <p>
              The M4 starts in Comfort Mode, which gives the car its best
              everyday balance. It is smooth, comfortable, and easy to enjoy for
              city driving, highway cruising, and longer trips.
            </p>

            <p>
              The <span className="font-semibold text-[#d6a85f]">M1</span>{" "}
              button activates Sport Mode. This is the mode I recommend when you
              want the M4 to feel more alive. It sharpens the car with quicker
              shifting, stronger response, firmer handling, more responsive
              braking, and a noticeably louder exhaust.
            </p>

            <p>
              The <span className="font-semibold text-[#d6a85f]">M2</span>{" "}
              button is much more aggressive. It opens the car up further and
              reduces traction intervention. I recommend using M2 sparingly.
              Most guests will get the performance experience they want from M1.
              M2 is best reserved for highly experienced drivers and ideal road
              or track conditions.
            </p>

            <p>
              To return to Comfort Mode, press the active M button again.
            </p>
          </div>
        </div>
      </section>

      <section id="convertible" className="px-6 pb-16 md:px-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <h2 className="mb-5 text-3xl font-bold">☀️ Convertible Top</h2>

          <div className="max-w-4xl space-y-5 leading-8 text-white/75">
            <p>
              The M4 Competition is best enjoyed with the top down when
              the weather allows. The convertible top operation is simple, but
              give it your full attention.
            </p>

            <p>
              With the vehicle in Park, press and hold the convertible top
              button until the operation is fully complete. When closing the
              roof, continue holding the button so the windows complete their
              operation as well.
            </p>

            <p>
              I recommend operating the top while stopped whenever possible.
              Make sure there is enough clearance around the vehicle and allow
              the full cycle to finish before driving away.
            </p>
          </div>
        </div>
      </section>

      <section id="transmission" className="px-6 pb-16 md:px-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <h2 className="mb-5 text-3xl font-bold">⚙️ Transmission</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <InfoCard title="Drive & Reverse">
              Reverse is only available when the vehicle is fully stopped. To
              select Drive, move the shifter to the right.
            </InfoCard>

            <InfoCard title="Manual Mode">
              Manual Mode can be used with the paddle shifters or by moving the
              shifter forward and back. To return to automatic shifting, move
              the shifter back to the right.
            </InfoCard>
          </div>
        </div>
      </section>

      <section id="voice" className="px-6 pb-16 md:px-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <h2 className="mb-5 text-3xl font-bold">🎙️ Hey BMW</h2>

          <div className="max-w-4xl space-y-5 leading-8 text-white/75">
            <p>
              One of the most useful features in the BMW is the voice assistant.
              Try saying{" "}
              <span className="font-semibold text-[#d6a85f]">“Hey BMW”</span>{" "}
              followed by what you need.
            </p>

            <p>
              You can ask for directions, nearby gas stations, climate changes,
              and other vehicle functions. When using BMW navigation, directions
              can appear in the heads-up display, which creates a very clean and
              useful driving experience.
            </p>

            <p>
              Example:{" "}
              <span className="font-semibold text-[#d6a85f]">
                “Hey BMW, take me to the closest gas station.”
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 px-6 pb-16 md:grid-cols-3 md:px-16">
        <InfoCard title="⛽ Fuel">
          Premium fuel only — 91 octane or higher. Shell V-Power is recommended
          when available. Please return the BMW with approximately the same fuel
          level as pickup unless otherwise arranged through Turo.
        </InfoCard>

        <InfoCard title="🅿️ Parking & Clearance">
          The front end sits low. Avoid parking curbs, take speed bumps slowly,
          and use caution with steep driveways. There is no front camera, so
          backing into parking spaces is usually easiest and safest.
        </InfoCard>
        <Link
  href="/vehicles/bmw-m4/luggage"
  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-[#d6a85f]/50 hover:bg-white/[0.06]"
>
  <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#d6a85f]">
    Trip Planning
  </p>

  <h3 className="mb-3 text-2xl font-bold">📦 Luggage &amp; Cargo</h3>

  <p className="leading-7 text-white/70">
    Wondering if everyone and their luggage will fit? View real trunk
    measurements, photos, and tips for traveling with the convertible top up or
    down.
  </p>

  <span className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-[#d6a85f]/60 bg-[#d6a85f]/15 px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[#d6a85f] transition hover:bg-[#d6a85f]/25">
    View Luggage Guide →
  </span>
</Link>

      </section>

            <section id="return" className="px-6 pb-20 md:px-16">
        <div className="rounded-3xl border border-[#d6a85f]/30 bg-[#d6a85f]/10 p-8 md:p-10">
          <h2 className="mb-5 text-3xl font-bold">✅ Returning Your BMW</h2>

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