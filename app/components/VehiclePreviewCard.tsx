"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type VehiclePreviewCardProps = {
  name: string;
  eyebrow: string;
  description: string;
  href: string;
  images: {
    src: string;
    alt: string;
  }[];
};

export default function VehiclePreviewCard({
  name,
  eyebrow,
  description,
  href,
  images,
}: VehiclePreviewCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  return (
    <div className="group overflow-hidden rounded-3xl border border-white/15 bg-black/40">
      <Link href={href} className="block">
        <div className="relative h-72 overflow-hidden">
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

          <div className="absolute bottom-4 right-4 rounded-full border border-white/20 bg-black/55 px-3 py-1 text-xs text-white/70">
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      </Link>

      <div className="flex gap-2 overflow-x-auto border-b border-white/10 bg-black/60 p-3">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border ${
              index === activeIndex
                ? "border-[#d6a85f]"
                : "border-white/10 opacity-65"
            }`}
            aria-label={`View ${name} image ${index + 1}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      <div className="p-6">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#d6a85f]">
          {eyebrow}
        </p>

        <h3 className="mb-3 text-2xl font-semibold uppercase tracking-[0.08em]">
          {name}
        </h3>

        <p className="mb-6 leading-7 text-white/70">{description}</p>

        <Link
          href={href}
          className="font-semibold text-[#d6a85f] transition hover:text-[#e3bc78]"
        >
          View Vehicle Guide →
        </Link>
      </div>
    </div>
  );
}