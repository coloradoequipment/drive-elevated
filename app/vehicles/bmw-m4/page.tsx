import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import InfoCard from "../../components/InfoCard";
import CTAButton from "../../components/CTAButton";

const turoHostLink = "https://turo.com/us/en/host/20782143";

export default function BMWPage() {
  return (
    <main className="min-h-screen bg-[#020407] text-white">
      <Navbar />

      <PageHero
        eyebrow="Vehicle Guide"
        title="BMW M4 Convertible"
        subtitle="Everything you need for pickup, luggage, convertible operation, driving tips, fuel, and return."
        image="/images/bmw-m4.jpg"
      />

      <section className="grid gap-6 px-6 pb-16 md:grid-cols-3 md:px-16">
        <InfoCard title="First Five Minutes">
          Review your pickup instructions in Turo, check the fuel level, adjust
          seats and mirrors, connect Bluetooth if desired, and get familiar with
          the gear selector before leaving.
        </InfoCard>

        <InfoCard title="Fuel">
          Premium fuel only. Please return with the same fuel level as pickup
          unless otherwise arranged through Turo.
        </InfoCard>

        <InfoCard title="Convertible Top">
          Operate the convertible top carefully and allow the full cycle to
          complete before driving away. Make sure nothing is blocking the trunk
          area before lowering or raising the top.
        </InfoCard>

        <InfoCard title="Luggage">
          Soft bags and smaller carry-ons work best. Trunk space is more limited
          when the convertible top is down.
        </InfoCard>

        <InfoCard title="Driving">
          The M4 is powerful and responsive. Please enjoy it respectfully and
          avoid aggressive launches, burnouts, drifting, or track use.
        </InfoCard>

        <InfoCard title="Return">
          Return on time, reasonably clean, and with the same fuel level as
          pickup. Message through Turo if timing or plans change.
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