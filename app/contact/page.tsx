import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import InfoCard from "../components/InfoCard";
import CTAButton from "../components/CTAButton";

const turoHostLink = "https://turo.com/us/en/host/20782143";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#020407] text-white">
      <Navbar />

      <PageHero
        eyebrow="Contact & Booking"
        title="Need Assistance?"
        subtitle="For active reservations, the fastest way to reach us is through your Turo trip message thread. For future bookings, view the Drive Elevated collection on Turo."
      />

      <section className="grid gap-6 px-6 pb-16 md:grid-cols-2 md:px-16">
        <InfoCard title="Active Reservation">
          If you already have a trip booked, please message through your Turo
          reservation. This keeps pickup details, trip changes, timing updates,
          and vehicle questions connected to your booking.
        </InfoCard>

        <InfoCard title="Ready to Book">
          View available Drive Elevated vehicles, trip dates, pricing, and
          delivery options directly on Turo.
        </InfoCard>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="rounded-3xl border border-[#d6a85f]/30 bg-[#d6a85f]/10 p-8 md:p-10">
          <h2 className="mb-4 text-3xl font-bold">Drive Elevated on Turo</h2>

          <p className="mb-6 max-w-3xl leading-7 text-white/70">
            Use the button below to view the full Drive Elevated collection,
            check availability, or message through Turo.
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