import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import InfoCard from "../components/InfoCard";
import CTAButton from "../components/CTAButton";
import GuideCard from "../components/GuideCard";
import {
  AlertTriangle,
  Wrench,
  CircleAlert,
  BatteryCharging,
  Truck,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Turo Accident & Emergency Guide | Drive Elevated",

  description:
    "Accident procedures, roadside assistance, towing information, documentation steps, and emergency support for Drive Elevated guests in Sacramento and Northern California.",

  keywords: [
    "Turo accident guide",
    "Turo roadside assistance",
    "Turo emergency instructions",
    "rental car accident Sacramento",
    "Drive Elevated emergency guide",
    "Turo towing information",
    "Caliber Collision Roseville",
  ],

  alternates: {
    canonical: "/emergency",
  },

  openGraph: {
    type: "website",
    url: "https://www.driveelevated.com/emergency",
    title: "Help & Emergency Guide | Drive Elevated",
    description:
      "Clear accident, roadside, towing, documentation, and emergency instructions for active Drive Elevated reservations.",
    images: [
      {
        url: "/images/homepage-reference.png",
        width: 1200,
        height: 630,
        alt: "Drive Elevated help and emergency guide",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Help & Emergency Guide | Drive Elevated",
    description:
      "Accident steps, roadside help, towing information, and emergency support for Drive Elevated guests.",
    images: ["/images/homepage-reference.png"],
  },
};

const turoHostLink = "https://turo.com/us/en/host/20782143";

const quickActions = [
  {
    icon: AlertTriangle,
    title: "Accident",
    href: "#accident",
    text: "What to do first if another vehicle, object, or person is involved.",
  },
  {
    icon: Wrench,
    title: "Mechanical Issue",
    href: "#mechanical",
    text: "Warning lights, strange noises, or anything that does not feel right.",
  },
  {
    icon: CircleAlert,
    title: "Flat Tire",
    href: "#mechanical",
    text: "Stop driving if the vehicle feels unsafe or the tire is losing air.",
  },
  {
    icon: BatteryCharging,
    title: "Charging Issue",
    href: "#charging",
    text: "Steps for EV charging problems or Tesla adapter issues.",
  },
  {
    icon: Truck,
    title: "Towing",
    href: "#towing",
    text: "Preferred tow provider and destination information.",
  },
  {
    icon: MessageCircle,
    title: "Contact JR",
    href: "#contact",
    text: "Use Turo messaging so all trip communication stays connected.",
  },
];

export default function EmergencyPage() {
  return (
    <main className="min-h-screen bg-[#020407] text-white">
      <Navbar />

      <PageHero
        eyebrow="Drive Elevated"
        title="Emergency & Accident Guide"
        subtitle="If something unexpected happens during your trip, stay calm. This guide will walk you through the next steps."
      />

      <section className="px-6 pb-16 md:px-16">
        <div className="rounded-3xl border border-[#d6a85f]/30 bg-[#d6a85f]/10 p-8 md:p-10">
          <h2 className="mb-4 text-3xl font-bold">First, make sure everyone is safe.</h2>
          <p className="max-w-4xl leading-8 text-white/75">
            If anyone is injured or there is immediate danger, call 911 first.
            Once everyone is safe, use the steps below and message through Turo
            so the trip record stays complete.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 md:px-16">
        <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#d6a85f]">
          Quick Actions
        </p>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {quickActions.map((item) => (
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

      <section id="accident" className="px-6 pb-16 md:px-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <h2 className="mb-5 text-3xl font-bold">🚨 If You Are Involved in an Accident</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <InfoCard title="1. Check Safety First">
              If anyone is injured or there is immediate danger, call 911
              immediately.
            </InfoCard>

            <InfoCard title="2. Move Only If Safe">
              If the vehicle can be safely moved out of traffic, do so. If not,
              stay in a safe location and wait for assistance.
            </InfoCard>

            <InfoCard title="3. Take Photos">
              Photograph all vehicles, license plates, damage, driver licenses
              if exchanged, insurance cards if exchanged, the surrounding area,
              and road conditions.
            </InfoCard>

            <InfoCard title="4. Report Through Turo">
              Open the Turo app and report the incident through your trip. This
              starts the official claims process.
            </InfoCard>

            <InfoCard title="5. Message Through Turo">
              Send me a message through your Turo trip thread so I can help
              coordinate next steps.
            </InfoCard>

            <InfoCard title="6. Do Not Continue If Unsafe">
              If the vehicle feels unsafe, has warning lights, leaking fluids, a
              damaged tire, or body damage affecting drivability, do not continue
              driving.
            </InfoCard>
          </div>
        </div>
      </section>

      <section id="mechanical" className="px-6 pb-16 md:px-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <h2 className="mb-5 text-3xl font-bold">🔧 Mechanical Issue or Flat Tire</h2>

          <div className="max-w-4xl space-y-5 leading-8 text-white/75">
            <p>
              If something does not feel right — warning lights, a strange
              noise, a flat tire, vehicle vibration, charging issue, or anything
              that makes the vehicle feel unsafe — stop driving as soon as it is
              safe to do so.
            </p>

            <p>
              Message me through Turo and include photos or a short description
              of what you are experiencing. We will determine the safest next
              step together.
            </p>
          </div>
        </div>
      </section>

      <section id="charging" className="px-6 pb-16 md:px-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <h2 className="mb-5 text-3xl font-bold">🔋 EV Charging Issue</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <InfoCard title="Try Another Stall">
              If a charger will not start, try another charging stall at the
              same location first. This solves many charging issues.
            </InfoCard>

            <InfoCard title="Restart the Session">
              Disconnect, wait a moment, and restart the charging session from
              the charger screen or app if required.
            </InfoCard>

            <InfoCard title="Tesla Adapter Note">
              Some Tesla Superchargers are not compatible with adapters. If one
              location does not work, use the Rivian map to find another
              compatible charger nearby.
            </InfoCard>

            <InfoCard title="Message Through Turo">
              If you are unable to charge or range is becoming a concern, message
              me through Turo so I can help you choose the best next option.
            </InfoCard>
          </div>
        </div>
      </section>

      <section id="towing" className="px-6 pb-16 md:px-16">
        <div className="rounded-3xl border border-[#d6a85f]/30 bg-[#d6a85f]/10 p-8 md:p-10">
          <h2 className="mb-5 text-3xl font-bold">🚚 Towing Information</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <InfoCard title="Preferred Tow Provider">
              Elite Towing
              <br />
              916-771-8697
            </InfoCard>

            <InfoCard title="Tow Destination">
              Caliber Collision Luxury
              <br />
              2018 Taylor Road
              <br />
              Roseville, CA 95678
            </InfoCard>
          </div>

          <p className="mt-6 max-w-4xl leading-8 text-white/75">
            If possible, message me through Turo before arranging towing so we
            can coordinate the safest and cleanest next step.
          </p>
        </div>
      </section>

      <section className="grid gap-6 px-6 pb-16 md:grid-cols-2 md:px-16">
        <InfoCard title="Insurance & Registration">
          Insurance and registration information are located in the glovebox.
          The Turo app should remain the primary place to report incidents and
          document the trip.
        </InfoCard>

        <InfoCard title="No Smoking or Vaping">
          Smoking or vaping is not permitted in any Drive Elevated vehicle and
          may result in cleaning fees through Turo.
        </InfoCard>
      </section>

      <section id="contact" className="px-6 pb-20 md:px-16">
        <div className="rounded-3xl border border-[#d6a85f]/30 bg-[#d6a85f]/10 p-8 md:p-10">
          <h2 className="mb-4 text-3xl font-bold">Drive Elevated Promise</h2>

          <p className="mb-6 max-w-4xl leading-8 text-white/75">
            Unexpected things can happen during any trip. If they do, my goal is
            simple: help you get safely back on the road with as little
            interruption as possible. Message through Turo and I will help guide
            the next steps.
          </p>

          <CTAButton href={turoHostLink} external>
            Open Turo →
          </CTAButton>
        </div>
      </section>

      <Footer />
    </main>
  );
}