import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import JourneyHero from "../../components/JourneyHero";
import DriveElevatedCallout from "../../components/DriveElevatedCallout";
import JourneyCuratedStop from "../../components/JourneyCuratedStop";
import JourneyChapter from "../../components/JourneyChapter";

export const metadata: Metadata = {
  title: "Sacramento to Napa Valley Scenic Drive | Journey 001",
  description:
    "Discover a memorable drive from Sacramento to Napa Valley with Temple Coffee, the Yolo Causeway, Davis, Silverado Trail, scenic stops, and curated Napa recommendations.",

  keywords: [
    "Sacramento to Napa Valley drive",
    "scenic route Sacramento to Napa",
    "best stops between Sacramento and Napa",
    "Napa Valley road trip",
    "Silverado Trail scenic drive",
    "things to do on the way to Napa",
    "Drive Elevated Journey 001",
  ],

  alternates: {
    canonical: "/journeys/napa",
  },

  openGraph: {
    type: "article",
    url: "https://www.driveelevated.com/journeys/napa",
    title: "Journey 001: The Drive from Sacramento to Napa Valley",
    description:
      "A curated Sacramento-to-Napa journey featuring coffee, wetlands, Davis, Silverado Trail, scenic roads, and memorable wine-country stops.",
    images: [
      {
        url: "/images/napa-corvette.jpeg",
        width: 1200,
        height: 630,
        alt: "Corvette on a scenic Napa Valley driving journey",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Journey 001: Sacramento to Napa Valley",
    description:
      "Make the drive part of the vacation with a curated route from Sacramento to Napa Valley.",
    images: ["/images/napa-corvette.jpeg"],
  },
};

const journeyJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.driveelevated.com/journeys/napa#article",
      headline: "The Drive from Sacramento to Napa Valley",
      description:
        "A curated Sacramento-to-Napa journey featuring Temple Coffee, the Yolo Causeway, Davis, Silverado Trail, scenic roads, and memorable wine-country stops.",
      image: [
        "https://www.driveelevated.com/images/napa-corvette.jpeg",
      ],
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.driveelevated.com/journeys/napa",
      },
      author: {
        "@type": "Person",
        name: "JR Cardoza",
      },
      publisher: {
        "@type": "Organization",
        "@id": "https://www.driveelevated.com/#organization",
        name: "Drive Elevated",
        logo: {
          "@type": "ImageObject",
          url: "https://www.driveelevated.com/images/logo-transparent.png",
        },
      },
      about: [
        {
          "@type": "Place",
          name: "Napa Valley",
        },
        {
          "@type": "Place",
          name: "Sacramento",
        },
        {
          "@type": "Thing",
          name: "Scenic driving",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.driveelevated.com/journeys/napa#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.driveelevated.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Journeys",
          item: "https://www.driveelevated.com/journeys/napa",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Napa Valley",
          item: "https://www.driveelevated.com/journeys/napa",
        },
      ],
    },
  ],
};

const curatedStops = [
  {
    label: "Arriving Before Check-In",
    title: "Oxbow Public Market",
    text: "One of our favorite first stops if your hotel room is not ready yet. Park once, stretch your legs, grab lunch, browse local food vendors, and ease into the slower rhythm of Napa Valley.",
    bestFor: ["Before check-in", "Casual lunch", "Local food"],
    allow: "45–90 minutes",
  },
  {
    label: "Your First Toast",
    title: "Domaine Carneros",
    text: "Few places announce your arrival into Napa quite like Domaine Carneros. The approach feels grand, the terrace views are beautiful, and beginning with sparkling wine sets the tone for the weekend.",
    bestFor: ["First-time visitors", "Celebrations", "Photos"],
    allow: "60–90 minutes",
  },
  {
    label: "Build a Picnic",
    title: "Oakville Grocery",
    text: "A classic Napa stop for sandwiches, cheese, snacks, sparkling water, and local finds. Some of the best wine country lunches happen outside, not inside a restaurant.",
    bestFor: ["Picnic supplies", "Casual lunch", "Midday stop"],
    allow: "20–45 minutes",
  },
  {
    label: "Slow Down",
    title: "Yountville",
    text: "Park once and wander. Coffee, bakeries, galleries, restaurants, and shaded streets make Yountville one of the easiest places to enjoy Napa without overplanning it.",
    bestFor: ["Walking", "Shopping", "Dinner plans"],
    allow: "45–120 minutes",
  },
  {
    label: "Morning Ritual",
    title: "Bouchon Bakery",
    text: "Arrive early, grab coffee and something beautiful from the bakery, then walk Yountville before the day gets busy. Simple, memorable, and very Napa.",
    bestFor: ["Morning", "Pastries", "Walking"],
    allow: "20–45 minutes",
  },
  {
    label: "End With a View",
    title: "Artesa",
    text: "A dramatic hilltop setting with architecture, vineyard views, and a strong sense of arrival. If the timing works, this is a beautiful place to pause near the end of the day.",
    bestFor: ["Views", "Architecture", "Golden hour"],
    allow: "45–90 minutes",
  },
];

const journeyImages = {
  hero: "/images/napa-corvette.jpeg",
  temple: "/images/journeys/napa/temple.jpeg",
  causeway: "/images/journeys/napa/causeway.jpeg",
  davis: "/images/journeys/napa/davis.jpeg",
  overlook: "/images/journeys/napa/overlook.jpeg",
  vineyards: "/images/journeys/napa/vineyards.jpeg",
  vineyards2: "/images/journeys/napa/vineyards2.jpeg",
};

const favorites = [
  {
    label: "Coffee",
    title: "Temple Coffee Roasters",
    text: "Not the fastest stop, but the right one if you want to begin intentionally.",
  },
  {
    label: "Bakery",
    title: "Pushkin’s Bakery",
    text: "Located next to Temple on S Street, with an excellent selection of gluten-free pastries and baked goods.",
  },
  {
    label: "Scenic Arrival",
    title: "Yolo Causeway",
    text: "The first place where Sacramento gives way to open wetlands and the trip starts to feel different.",
  },
  {
    label: "Golden Hour",
    title: "Silverado Trail",
    text: "Highway 29 gets you there. Silverado Trail helps you feel like you have arrived.",
  },
];

const vehicles = [
  {
    name: "Corvette Convertible",
    text: "For open-air drama, sunshine, and making the road into part of the occasion.",
    href: "/vehicles/corvette",
  },
  {
    name: "BMW M4 Convertible",
    text: "For luxury touring, spirited back roads, and a refined arrival into wine country.",
    href: "/vehicles/bmw-m4",
  },
  {
    name: "Rivian R1S",
    text: "For quiet comfort, room for luggage, and bringing home the bottles, bags, and finds you discover along the way.",
    href: "/vehicles/rivian",
  },
];

export default function NapaJourneyPage() {
  return (
    <main className="min-h-screen bg-[#020407] text-white">
      <Navbar />
      
      <JourneyHero
        number="001"
        title="Napa Valley"
        subtitle="Your vacation begins the moment you leave the airport."
        image={journeyImages.hero}
      />

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#d6a85f]">
            Welcome to Northern California
          </p>

          <h2 className="mb-8 text-4xl font-bold md:text-5xl">
            This is not the fastest way to Napa. That is exactly the point.
          </h2>

          <div className="space-y-6 text-lg leading-9 text-white/75">
            <p>
              Most travelers heading to Napa have already planned the important
              parts of their trip. The hotel is booked. Dinner reservations are
              waiting. Winery tastings are already on the calendar.
            </p>

            <p>
              But the time between Sacramento and Napa is often treated like
              dead space — something to finish as quickly as possible before the
              real vacation begins.
            </p>

            <p>
              We see it differently. The drive is your first chance to slow down,
              leave everyday life behind, and arrive with stories already worth
              telling.
            </p>
          </div>

          <DriveElevatedCallout title="Drive Elevated Mindset">
            <p>
              Your vacation does not begin when you check into the hotel. It
              begins the moment you decide to stop rushing.
            </p>
          </DriveElevatedCallout>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-4">
          <Snapshot title="Journey Time" text="About 2 hours with room to pause" />
          <Snapshot title="Best Pace" text="Relaxed, unhurried, intentional" />
          <Snapshot title="Perfect For" text="Couples, celebrations, wine country" />
          <Snapshot title="Best Start" text="Morning or early afternoon arrival" />
        </div>
      </section>

      <JourneyImageSection
        eyebrow="Optional Sacramento Detour"
        title="Begin Slowly"
        image={journeyImages.temple}
      >
        <p>
          Starbucks is the easy choice — reliable, familiar, and consistent. But
          if you are not in a rush, we recommend beginning differently.
        </p>

        <p>
          Temple Coffee Roasters in Downtown Sacramento is not directly on the
          path to Napa, and that is worth knowing. It adds time. It asks you to
          park, step inside, and let someone make something with care.
        </p>

        <p>
          That is why we love it. Order a pour-over, slow the morning down, and
          let the first intentional choice of the day set the tone for the rest
          of the drive.
        </p>

        <DriveElevatedCallout title="Worth the Detour">
          <p>
            If you choose the downtown location, you can cruise by Golden 1
            Center or the California State Capitol just a few blocks away.
          </p>
          <p>
            If you choose the S Street location, Pushkin’s Bakery is next door
            with a wide selection of gluten-free pastries and baked goods.
          </p>
        </DriveElevatedCallout>
      </JourneyImageSection>

      <JourneyImageSection
        eyebrow="Leaving Everyday Life Behind"
        title="Crossing the Causeway"
        image={journeyImages.causeway}
        reverse
      >
        <p>
          There is a moment leaving Sacramento when the city finally lets go of
          you. The merges are behind you. The road opens. Then you rise onto the
          Yolo Causeway and the wetlands stretch out on both sides.
        </p>

        <p>
          Some people see traffic and stress. We see the first reminder that
          Northern California is more beautiful than we often remember in the
          rush of daily life.
        </p>

        <p>
          Look across the marshes. Watch for birds over the water. Notice how
          fertile and open this valley feels. This is where the trip begins to
          breathe.
        </p>

        <DriveElevatedCallout title="Local Insight">
          <p>
            You do not need to stop here to experience it. Just notice it. Let
            the wetlands mark the transition from ordinary life into the journey.
          </p>
        </DriveElevatedCallout>
      </JourneyImageSection>

      <JourneyChapter
  eyebrow="A Different Pace"
  title="Davis"
  image={journeyImages.davis}
>
  <p>
    Most travelers pass through Davis without giving it a second thought.
    We think that's a missed opportunity.
  </p>

  <p>
    Davis isn't another destination to squeeze into your itinerary. It's the
    first chance to slow the rhythm of your day. Wide tree-lined streets,
    bicycles rolling through downtown, locally owned cafés, and the energy of
    the University of California create an atmosphere that feels noticeably
    different from Sacramento.
  </p>

  <p>
    If you've been on an early flight, this is a wonderful place to stretch
    your legs, enjoy a smoothie or coffee, and reset before continuing into
    wine country. Even fifteen or twenty minutes changes the pace of the
    journey.
  </p>

  <DriveElevatedCallout title="Drive Elevated Recommendation">
    <p>
      If you're ahead of schedule, park in Downtown Davis and wander for a few
      minutes instead of heading straight for Napa. Grab a drink, walk a block
      or two, and let the weekend settle in before getting back behind the
      wheel.
    </p>
  </DriveElevatedCallout>

  <DriveElevatedCallout title="Local Insight">
    <p>
      Davis is consistently recognized as one of the most bicycle-friendly
      communities in America. Watching thousands of students and locals move
      through town by bike gives the city a relaxed energy that feels uniquely
      Northern California.
    </p>
  </DriveElevatedCallout>

  <DriveElevatedCallout title="Worth the Stop">
    <p>
      Looking for something light before wine tasting begins? Downtown Davis
      offers excellent coffee shops, smoothie bars, local bakeries, and shaded
      patios that make for an easy twenty-minute pause before continuing west.
    </p>
  </DriveElevatedCallout>
</JourneyChapter>

      <JourneyImageSection
        eyebrow="The Quiet Pause"
        title="Before Wine Country Opens"
        image={journeyImages.overlook}
        reverse
      >
        <p>
          As the road continues toward Napa, the landmarks begin to change. Old
          roadside stops, the Nut Tree area, and the approach toward Sonoma
          Raceway all signal that you are getting closer.
        </p>

        <p>
          Somewhere along this stretch, it is worth taking a quiet pause if the
          timing and traffic allow. Look back across the wetlands and the valley
          you just crossed. City, farmland, marsh, vineyards — California changes
          quickly here.
        </p>

        <p>
          Sometimes five quiet minutes becomes one of the most memorable parts
          of the day.
        </p>
      </JourneyImageSection>

      <JourneyImageSection
        eyebrow="Welcome to Wine Country"
        title="The First Vineyards"
        image={journeyImages.vineyards2}
      >
        <p>
          Eventually the scenery changes again. The roads narrow. Oak trees and
          vineyards begin appearing around the bends. The anticipation shifts.
        </p>

        <p>
          You are not just getting closer to your hotel. You are already inside
          the experience.
        </p>

        <p>
          Roll the windows down. Let the conversation slow. Whatever was waiting
          back home can wait a little longer.
        </p>
      </JourneyImageSection>

      <section className="px-6 pb-20 md:px-16">
  <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-black/30 p-8 md:p-10">
    <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#d6a85f]">
      The Scenic Route
    </p>

    <h2 className="mb-6 text-4xl font-bold md:text-5xl">
      Highway 29 gets you there. Silverado Trail makes you feel there.
    </h2>

    <div className="space-y-5 text-lg leading-9 text-white/75">
      <p>
        If your hotel, tasting schedule, or timing allows, make Silverado Trail
        part of your Napa arrival. It feels calmer, more scenic, and more
        connected to the valley than simply following the fastest route.
      </p>

      <p>
        We like using it as the moment where the trip changes from travel into
        experience. The road carries you past vineyards, oak trees, quieter
        wineries, and long stretches that remind you why Napa is so special.
      </p>

      <p>
        You do not need to drive the entire length. Even a short section can
        shift the feeling of the day.
      </p>
    </div>

    <DriveElevatedCallout title="Drive Elevated Recommendation">
      <p>
        If you have time before check-in, enter Napa with intention. Take a
        slower road, make one meaningful stop, and let the valley introduce
        itself before you arrive at the hotel.
      </p>
    </DriveElevatedCallout>
  </div>
</section>

<JourneyChapter
  eyebrow="The Scenic Route"
  title="Silverado Trail"
  image={journeyImages.vineyards}
  reverse
>
  <p>
    Highway 29 is useful. Silverado Trail is memorable.
  </p>

  <p>
    If your timing allows, we recommend making Silverado Trail part of your Napa
    arrival. It runs along the quieter eastern side of the valley, with
    vineyards, oak trees, hillside views, and a calmer rhythm than the main
    highway.
  </p>

  <p>
    You do not need to drive the entire length to feel the difference. Even a
    short stretch can shift the day from transportation into experience.
  </p>

  <DriveElevatedCallout title="Drive Elevated Recommendation">
    <p>
      If you are heading toward Napa, Yountville, Rutherford, or St. Helena, use
      Silverado Trail when the schedule allows. Let it be the moment where you
      stop trying to arrive quickly and start enjoying the fact that you are
      already in wine country.
    </p>
  </DriveElevatedCallout>

  <DriveElevatedCallout title="Good to Know">
    <p>
      Silverado Trail is best enjoyed at an unhurried pace. Watch for winery
      entrances, cyclists, slower traffic, and guests pulling in and out of
      driveways. This is a road to enjoy, not a road to rush.
    </p>
  </DriveElevatedCallout>
</JourneyChapter>

<section className="px-6 pb-20 md:px-16">
  <div className="mx-auto max-w-6xl rounded-3xl border border-[#d6a85f]/30 bg-black/30 p-8 md:p-10">
    <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#d6a85f]">
      Signature Route
    </p>

    <h2 className="mb-6 text-4xl font-bold md:text-5xl">
      The Drive Elevated Route
    </h2>

    <p className="mb-8 max-w-4xl text-lg leading-9 text-white/75">
      Use this as a rhythm, not a rigid schedule. The goal is not to visit every
      stop. The goal is to turn the drive from Sacramento to Napa into part of
      the experience.
    </p>

    <div className="space-y-6">
      <RouteStep
        number="01"
        title="Sacramento / SMF"
        text="Begin your journey. If time allows, start with an intentional coffee stop before heading west."
      />
      <RouteStep
        number="02"
        title="Temple Coffee Roasters"
        text="Optional but worthwhile if you are not in a rush. Downtown Sacramento or S Street near Pushkin’s Bakery."
      />
      <RouteStep
        number="03"
        title="Yolo Causeway"
        text="The transition point where the city gives way to wetlands, open sky, and the feeling that the trip has begun."
      />
      <RouteStep
        number="04"
        title="Davis"
        text="A short pause for a walk, smoothie, coffee, or reset before continuing toward wine country."
      />
      <RouteStep
        number="05"
        title="Napa Valley Arrival"
        text="As vineyards begin to appear, shift from simply arriving to experiencing the valley."
      />
      <RouteStep
        number="06"
        title="Silverado Trail"
        text="When timing allows, choose the calmer, more scenic road. This is where the drive becomes part of the memory."
      />
      <RouteStep
        number="07"
        title="Oxbow, Domaine Carneros, Yountville, or Hotel"
        text="Choose the stop that fits your timing. Early arrival, first toast, walkable town, or check-in."
      />
    </div>
  </div>
</section>

<section className="px-6 pb-20 md:px-16">
  <div className="mx-auto max-w-6xl">
    <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#d6a85f]">
      Build Your Perfect Napa Day
    </p>

    <h2 className="mb-6 text-4xl font-bold md:text-5xl">
      Useful over popular. Memorable over crowded.
    </h2>

    <p className="mb-8 max-w-4xl text-lg leading-9 text-white/75">
      You do not need to visit every place on this list. In fact, we hope you
      do not. Choose two or three that genuinely fit your day, then leave enough
      room for an unexpected discovery.
    </p>

    <div className="grid gap-6 md:grid-cols-2">
      {curatedStops.map((stop) => (
        <JourneyCuratedStop
          key={stop.title}
          label={stop.label}
          title={stop.title}
          text={stop.text}
          bestFor={stop.bestFor}
          allow={stop.allow}
        />
      ))}
    </div>
  </div>
</section>

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#d6a85f]">
            Along the Way
          </p>

          <h2 className="mb-8 text-4xl font-bold md:text-5xl">
            Drive Elevated Favorites
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {favorites.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#d6a85f]">
                  {item.label}
                </p>
                <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
                <p className="leading-8 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-black/30 p-8 md:p-10">
          <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#d6a85f]">
            Choose Your Drive 
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {vehicles.map((vehicle) => (
              <Link
                key={vehicle.name}
                href={vehicle.href}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#d6a85f]/50 hover:bg-white/[0.06]"
              >
                <h3 className="mb-3 text-xl font-bold">{vehicle.name}</h3>
                <p className="mb-5 leading-8 text-white/70">{vehicle.text}</p>
                <p className="font-semibold text-[#d6a85f]">
                  View vehicle guide →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

<section className="px-6 pb-20 md:px-16">
  <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-black/30 p-8 md:p-10">
    <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#d6a85f]">
      From the Driver&apos;s Seat
    </p>

    <h2 className="mb-6 text-4xl font-bold md:text-5xl">
      Sometimes the drive becomes the story.
    </h2>

    <div className="space-y-6 text-lg leading-9 text-white/75">
      <p>
        I&apos;ve made this drive many times, and it still reminds me that Napa
        does not begin at the hotel, the winery, or the dinner reservation.
      </p>

      <p>
        It begins when Sacramento fades behind you, the wetlands open up, the
        road starts to quiet, and you realize you are no longer just getting
        somewhere.
      </p>

      <p>
        You are already inside the experience.
      </p>

      <p>
        My hope is that this Journey helps you notice the moments most people
        rush past — the coffee, the causeway, the scenic road, the unexpected
        stop, the view that makes you pull over for five quiet minutes.
      </p>

      <p>
        If the drive becomes one of the memories you take home, then Drive
        Elevated has done exactly what it was created to do.
      </p>
    </div>

    <p className="mt-8 text-[#d6a85f]">
      — JR Cardoza, Drive Elevated
    </p>
  </div>
</section>

      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[#d6a85f]/40 bg-[#d6a85f]/10 p-8 md:p-10">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#d6a85f]">
            Drive Elevated Recommendation
          </p>

          <h2 className="mb-5 text-3xl font-bold">
            Leave one hour unscheduled.
          </h2>

          <div className="space-y-5 leading-8 text-white/80">
            <p>
              If there's one thing we hope you'll take from this guide, it's this:
            </p>

            <p>
              Don't plan every minute.
            </p>

            <p>
              The best stories rarely come from reservations we made.
            </p>

            <p>
              They come from the roads we decided to take, the conversations we didn't expect, and the places we almost drove past.
            </p>

            <p>
              Leave yourself enough time to be surprised.
            </p>

            <p>
              Northen California is remarkably good at reqarding curiosity.
            </p>

            <p>
              We hope this journey becomes part of your story.
            </p>

            <p>
              Safe Travels.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#d6a85f]">
            Continue Your Journey
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <ComingSoon title="Lake Tahoe" />
            <ComingSoon title="Gold Country" />
            <ComingSoon title="Apple Hill" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Snapshot({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <h3 className="mb-3 text-lg font-bold text-[#d6a85f]">{title}</h3>
      <p className="leading-7 text-white/70">{text}</p>
    </div>
  );
}

function JourneyImageSection({
  eyebrow,
  title,
  image,
  reverse = false,
  children,
}: {
  eyebrow: string;
  title: string;
  image: string;
  reverse?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className="px-6 pb-20 md:px-16">
      <div
        className={`mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-center ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
          <Image
            src={image}
            alt={title}
            width={1400}
            height={1000}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d6a85f]">
            {eyebrow}
          </p>

          <h2 className="mb-6 text-4xl font-bold">{title}</h2>

          <div className="space-y-5 text-lg leading-9 text-white/75">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function ComingSoon({ title }: { title: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <h3 className="mb-3 text-2xl font-bold">{title}</h3>
      <p className="text-white/60">Coming soon</p>
    </div>
  );
}

function RouteStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d6a85f] text-sm font-bold text-[#d6a85f]">
        {number}
      </div>

      <div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="leading-8 text-white/70">{text}</p>
      </div>
    </div>
  );
}