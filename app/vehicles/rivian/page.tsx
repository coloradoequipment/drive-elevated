import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import InfoCard from "../../components/InfoCard";
import CTAButton from "../../components/CTAButton";

const turoHostLink = "https://turo.com/us/en/host/20782143";

export default function RivianPage() {
  return (
    <main className="min-h-screen bg-[#020407] text-white">
      <Navbar />

      <PageHero
        eyebrow="Vehicle Guide"
        title="Rivian R1S"
        subtitle="Everything you need for pickup, charging, range expectations, seating, adventure use, and return."
        image="/images/rivian.jpg"
      />

      <section className="grid gap-6 px-6 pb-16 md:grid-cols-3 md:px-16">
        <InfoCard title="First Five Minutes">
          Review pickup details in Turo, check the charge level, adjust mirrors
          and seats, review range, and get familiar with the touchscreen before
          leaving.
        </InfoCard>

        <InfoCard title="Charging">
          Please return with the agreed charge level. Charging differences may
          be handled through Turo. Charging locations and speed vary by charger.
        </InfoCard>

        <InfoCard title="Range">
          Range changes based on speed, temperature, elevation, passengers,
          cargo, and climate use. Plan charging stops before longer drives.
        </InfoCard>

        <InfoCard title="Seating">
          The Rivian R1S has three rows and room for up to seven passengers.
          Cargo space changes depending on how the rear seats are configured.
        </InfoCard>

        <InfoCard title="Adventure Use">
          Enjoy the capability of the R1S responsibly. No off-roading, towing,
          racing, or use outside Turo guidelines unless specifically approved.
        </InfoCard>

        <InfoCard title="Return">
          Return on time, reasonably clean, and with the agreed charge level.
          Message through Turo if timing or plans change.
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