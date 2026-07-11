import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import InfoCard from "../components/InfoCard";
import CTAButton from "../components/CTAButton";

export const metadata: Metadata = {
  title: "Contact Drive Elevated | Concierge Support",

  description:
    "Contact Drive Elevated for reservation questions, vehicle information, special requests, or support before, during, or after your rental. Active guests should message through Turo for the fastest assistance.",

  keywords: [
    "Contact Drive Elevated",
    "Sacramento Turo host",
    "Drive Elevated support",
    "Turo concierge",
    "Luxury car rental Sacramento contact",
    "BMW rental Sacramento",
    "Corvette rental Sacramento",
    "Rivian rental Sacramento",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    type: "website",
    url: "https://driveelevated.com/contact",
    title: "Contact Drive Elevated",
    description:
      "Questions before booking or during your trip? We're here to help make your Drive Elevated experience exceptional.",
    images: [
      {
        url: "/images/homepage-reference.png",
        width: 1200,
        height: 630,
        alt: "Drive Elevated Contact",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Drive Elevated",
    description:
      "Reservation questions, concierge support, and guest assistance.",
    images: ["/images/homepage-reference.png"],
  },
};

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