"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

type VehicleImageGalleryProps = {
  title: string;
  subtitle?: string;
  images: GalleryImage[];
};

export default function VehicleImageGallery({
  title,
  subtitle,
  images,
}: VehicleImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  function previousImage() {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  }

  function nextImage() {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  }

  return (
    <section className="px-6 pb-12 md:px-16">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-black/40">
        <div className="relative h-[420px] md:h-[560px]">
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#d6a85f]">
              Drive Elevated Gallery
            </p>

            <h1 className="text-4xl font-bold md:text-6xl">{title}</h1>

            {subtitle && (
              <p className="mt-3 max-w-2xl text-lg leading-8 text-white/75">
                {subtitle}
              </p>
            )}

            <p className="mt-4 text-sm text-white/60">
              {activeIndex + 1} / {images.length}
            </p>
          </div>

          <button
            type="button"
            onClick={previousImage}
            className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-2xl text-white"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={nextImage}
            className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-2xl text-white"
          >
            ›
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto border-t border-white/10 bg-black/70 p-4">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative h-20 w-32 shrink-0 overflow-hidden rounded-xl border ${
                index === activeIndex
                  ? "border-[#d6a85f]"
                  : "border-white/10 opacity-70"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="160px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}