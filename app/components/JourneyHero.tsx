import Image from "next/image";

type JourneyHeroProps = {
  number: string;
  title: string;
  subtitle: string;
  image: string;
};

export default function JourneyHero({
  number,
  title,
  subtitle,
  image,
}: JourneyHeroProps) {
  return (
    <section className="relative h-[75vh] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#020407] via-[#020407]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020407] via-transparent to-black/30" />

      <div className="relative z-10 flex h-full items-center px-6 md:px-16">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-[#d6a85f]">
            Drive Elevated Signature Journey
          </p>

          <p className="mb-3 text-2xl font-light text-white/70">{number}</p>

          <h1 className="mb-6 text-5xl font-bold uppercase tracking-[0.08em] md:text-7xl">
            {title}
          </h1>

          <div className="mb-8 h-1 w-28 bg-[#d6a85f]" />

          <p className="max-w-2xl text-xl leading-9 text-white/80">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}