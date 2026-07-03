import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import InfoCard from "../components/InfoCard";
import CTAButton from "../components/CTAButton";

const turoHostLink = "https://turo.com/us/en/host/20782143";

export default function GuestGuidePage() {
  return (
    <main className="min-h-screen bg-[#020407] text-white">
      <Navbar />

      <PageHero
        eyebrow="Drive Elevated"
        title="Guest Guide"
        subtitle="Everything you need before, during, and after your Drive Elevated experience."
      />

      <section className="grid gap-6 px-6 pb-16 md:grid-cols-3 md:px-16">
        <InfoCard title="Before You Arrive">
          Pickup instructions, parking details, and access information are sent
          through your Turo reservation before your trip begins.
        </InfoCard>

        <InfoCard title="Additional Drivers">
          Anyone driving the vehicle must be approved through Turo before the
          trip begins.
        </InfoCard>

        <InfoCard title="Trip Changes">
          Need to extend your trip or adjust delivery? Simply submit the change
          through Turo so everything stays connected to your reservation.
        </InfoCard>

        <InfoCard title="Fuel & Charging">
          Gas vehicles require premium fuel. The Rivian should be returned with
          the agreed charge level unless otherwise discussed.
        </InfoCard>

        <InfoCard title="Vehicle Guides">
          If you need help with Bluetooth, charging, convertible operation, or
          other vehicle-specific questions, visit that vehicle's guide from the
          homepage.
        </InfoCard>

        <InfoCard title="Need Help?">
          The fastest way to reach us during your reservation is through your
          Turo message thread.
        </InfoCard>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="rounded-3xl border border-[#d6a85f]/30 bg-[#d6a85f]/10 p-8 md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Still have a question?
          </h2>

          <p className="mb-6 max-w-3xl leading-7 text-white/70">
            If you don't find the answer here, send us a message through your
            Turo reservation and we'll be happy to help.
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