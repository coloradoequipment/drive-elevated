import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import InfoCard from "../../components/InfoCard";
import CTAButton from "../../components/CTAButton";

const turoHostLink = "https://turo.com/us/en/host/20782143";

export default function CorvettePage() {
  return (
    <main className="min-h-screen bg-[#020407] text-white">
      <Navbar />

      <PageHero
        eyebrow="Vehicle Guide"
        title="Corvette Convertible"
        subtitle="Everything you need for pickup, fuel, luggage, convertible operation, and return."
        image="/images/corvette.jpg"
      />

      <section className="grid gap-6 px-6 pb-16 md:grid-cols-3 md:px-16">
        <InfoCard title="First Five Minutes">
          Review pickup details in Turo, check the fuel level, adjust mirrors and
          seats, connect Bluetooth if needed, and get familiar with the drive
          selector before leaving.
        </InfoCard>

        <InfoCard title="Fuel">
          Premium fuel only. Please return with the same fuel level as pickup
          unless otherwise arranged through Turo.
        </InfoCard>

        <InfoCard title="Convertible Top">
          Make sure the trunk divider is in place before lowering the top.
          Operate the top only when parked or moving very slowly and allow the
          cycle to fully complete.
        </InfoCard>

        <InfoCard title="Luggage">
          Smaller carry-ons and soft bags work best. Space is more limited when
          driving with the top down.
        </InfoCard>

        <InfoCard title="Parking">
          The Corvette sits low. Use extra care with curbs, parking blocks,
          steep driveways, and front-end clearance.
        </InfoCard>

        <InfoCard title="Return">
          Return on time, reasonably clean, and with the same fuel level as
          pickup. Message through Turo if anything changes.
        </InfoCard>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="rounded-3xl border border-[#d6a85f]/30 bg-[#d6a85f]/10 p-8 md:p-10">
          <h2 className="mb-4 text-3xl font-bold">Need help or ready to book?</h2>
          <p className="mb-6 max-w-3xl leading-7 text-white/70">
            For active reservations, message through your Turo trip thread. To
            view availability or book another Drive Elevated vehicle, visit our
            Turo host page.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <CTAButton href={turoHostLink} external>
              View Vehicles on Turo →
            </CTAButton>
            <CTAButton href="/pickup" variant="outline">
              Pickup & Return
            </CTAButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}