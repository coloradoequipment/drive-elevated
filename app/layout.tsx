import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.driveelevated.com/#organization",
  name: "Drive Elevated",
  url: "https://www.driveelevated.com",
  logo: "https://www.driveelevated.com/images/logo-transparent.png",
  description:
    "Drive Elevated provides premium vehicle rentals, detailed guest support, and curated Northern California driving experiences from Sacramento.",
  areaServed: [
    {
      "@type": "City",
      name: "Sacramento",
    },
    {
      "@type": "AdministrativeArea",
      name: "Northern California",
    },
  ],
  sameAs: [
    "https://turo.com/us/en/host/20782143",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.driveelevated.com"),

  title: {
    default:
      "Drive Elevated | Premium Vehicle Rentals & Northern California Journeys",
    template: "%s | Drive Elevated",
  },

  description:
    "Premium Corvette, BMW M4, and Rivian rentals serving Sacramento and Northern California, with detailed guest guides, luggage planning, airport support, and curated driving journeys.",

  applicationName: "Drive Elevated",

  keywords: [
    "Drive Elevated",
    "Turo Sacramento",
    "Sacramento luxury car rental",
    "Sacramento airport car rental",
    "SMF airport vehicle delivery",
    "Corvette rental Sacramento",
    "Corvette convertible rental Napa",
    "BMW M4 rental Sacramento",
    "BMW M4 convertible rental",
    "Rivian R1S rental Sacramento",
    "Rivian rental Tahoe",
    "Napa Valley scenic drive",
    "Sacramento to Napa drive",
    "Northern California road trips",
    "premium vehicle rental Northern California",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.driveelevated.com",
    siteName: "Drive Elevated",
    title:
      "Drive Elevated | Premium Vehicle Rentals & Northern California Journeys",
    description:
      "Premium vehicles, thoughtful guest support, and curated Northern California driving experiences designed to make the journey as memorable as the destination.",
    images: [
      {
        url: "/images/homepage-reference.png",
        width: 1200,
        height: 630,
        alt: "Drive Elevated premium vehicle fleet in Northern California",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Drive Elevated | Premium Vehicle Rentals & Northern California Journeys",
    description:
      "Premium vehicles, detailed guest guides, and curated Northern California driving experiences.",
    images: ["/images/homepage-reference.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P32DWHVWBG"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P32DWHVWBG');
          `}
        </Script>
      </body>
    </html>
  );
}