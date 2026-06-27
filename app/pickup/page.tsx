import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import InfoCard from "../components/InfoCard";
import CTAButton from "../components/CTAButton";

const turoHostLink = "https://turo.com/us/en/host/20782143";

export default function PickupPage() {
  return (
    <main className="min-h-screen bg-[#020407] text-white">
      <Navbar />

      <PageHero
        eyebrow="Guest Guide"
        title="Pickup & Return"
        subtitle="A simple guide for local pickup, airport delivery, hotel delivery, return expectations, fuel, charging, and trip communication."
      />

      <section className="grid gap-6 px-6 pb-16 md:grid-cols-2 md:px-16">
        <InfoCard title="Local Pickup">
          Pickup details will be provided through your Turo message thread before
          your trip. Please review the instructions before arrival so the handoff
          is smooth and efficient.
        </InfoCard>

        <InfoCard title="Airport Delivery">
          Airport instructions vary by trip and location. Your Turo message
          thread will include the parking area, access instructions, photos when
          helpful, and any parking details.
        </InfoCard>

        <InfoCard title="Hotel or Custom Delivery">
          For approved delivery locations, we will coordinate timing, parking
          location, and return expectations through Turo messaging.
        </InfoCard>

        <InfoCard title="Return Instructions">
          Please return the vehicle on time, reasonably clean, and with the same
          fuel or charge level as pickup unless otherwise arranged through Turo.
        </InfoCard>

        <InfoCard title="Fuel & Charging">
          Gas vehicles require premium fuel. The Rivian should be returned with
          the agreed charge level. Refueling or charging differences may be
          handled through Turo.
        </InfoCard>

        <InfoCard title="Communication">
          For active reservations, message through Turo so all instructions,
          changes, and trip details stay connected to your booking.
        </InfoCard>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="rounded-3xl border border-[#d6a85f]/30 bg-[#d6a85f]/10 p-8 md:p-10">
          <h2 className="mb-4 text-3xl font-bold">Booking or trip questions?</h2>
          <p className="mb-6 max-w-3xl leading-7 text-white/70">
            For active trips, please message through your Turo reservation. To
            view availability or book another Drive Elevated vehicle, visit our
            Turo host page.
          </p>

          <CTAButton href={turoHostLink} external>
            View Vehicles on Turo →
          </CTAButton>
        </div>
      </section>

      <Footer />
    </main>
  );
}