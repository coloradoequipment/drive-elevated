import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://driveelevated.com"),
  title: {
    default: "Drive Elevated",
    template: "%s | Drive Elevated",
  },
  description:
    "Curated automotive experiences featuring premium vehicles, detailed guest guides, and elevated travel throughout Northern California.",
  openGraph: {
    title: "Drive Elevated",
    description: "Curated automotive experiences.",
    url: "https://driveelevated.com",
    siteName: "Drive Elevated",
    images: [
      {
        url: "/images/homepage-reference.png",
        width: 1200,
        height: 630,
        alt: "Drive Elevated",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}