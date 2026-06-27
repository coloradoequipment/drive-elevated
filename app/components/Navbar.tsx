"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const turoHostLink = "https://turo.com/us/en/host/20782143";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Vehicles", href: "/#vehicles" },
  { label: "Pickup", href: "/pickup" },
  { label: "Guest Guide", href: "/guest-guide" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 px-6 py-5 md:px-16">
      <div className="flex items-center justify-between gap-6">
        <Link href="/" className="block w-56 md:w-72">
          <Image
            src="/images/logo-transparent.png"
            alt="Drive Elevated"
            width={420}
            height={120}
            priority
            className="h-auto w-full"
          />
        </Link>

        <div className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.22em] text-white/80 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-[#d6a85f]"
            >
              {link.label}
            </Link>
          ))}

          <a
            href={turoHostLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#d6a85f] px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black"
          >
            Book on Turo
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-[0.25em] text-white lg:hidden"
        >
          Menu ☰
        </button>
      </div>

      {isOpen && (
        <div className="mt-5 rounded-3xl border border-white/10 bg-[#020407]/95 p-6 shadow-2xl backdrop-blur lg:hidden">
          <div className="flex flex-col gap-5 text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/10 pb-4 transition-colors hover:text-[#d6a85f]"
              >
                {link.label}
              </Link>
            ))}

            <a
              href={turoHostLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-[#d6a85f] px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.22em] text-black"
            >
              Book on Turo →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
