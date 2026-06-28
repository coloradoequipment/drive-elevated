import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://driveelevated.com"),

  title: {
    default: "Drive Elevated",
    template: "%s | Drive Elevated",
  },

  description:
    "Curated automotive experiences featuring premium vehicles, detailed guest guides, and elevated travel throughout Northern California.",

  openGraph: {
    title: "Drive Elevated",
    description:
      "Curated automotive experiences.",
    url: "https://driveelevated.com",
    siteName: "Drive Elevated",
    images: [
      {
        url: "/images/homepage-reference.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};
