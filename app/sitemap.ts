import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://driveelevated.com";

  return [
    {
      url: base,
      priority: 1,
      changeFrequency: "weekly",
    },
    {
      url: `${base}/journeys/napa`,
      priority: 0.95,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/guest-guide`,
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/pickup`,
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/emergency`,
      priority: 0.8,
      changeFrequency: "yearly",
    },
    {
      url: `${base}/vehicles/corvette`,
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/vehicles/corvette/luggage`,
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/vehicles/bmw-m4`,
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/vehicles/bmw-m4/luggage`,
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/vehicles/rivian`,
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: `${base}/vehicles/rivian/luggage`,
      priority: 0.8,
      changeFrequency: "monthly",
    },
  ];
}