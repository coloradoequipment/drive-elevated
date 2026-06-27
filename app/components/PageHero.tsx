import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  image?: string;
};

export default function PageHero({ eyebrow, title, subtitle, image }: PageHeroProps) {
  return (
    <section className="grid gap-10 px-6 py-12 md:px-16 lg:grid-cols-2 lg:items-start">
      <div className="min-w-0">
        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#d6a85f]">
          {eyebrow}
        </p>

        <h1 className="mb-6 max-w-full break-words text-4xl font-bold uppercase leading-[0.95] tracking-[0.03em] sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="max-w-2xl text-lg leading-8 text-white/75">
          {subtitle}
        </p>
      </div>

      {image && (
        <div className="relative h-[300px] overflow-hidden rounded-3xl border border-white/15 sm:h-[360px]">
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
      )}
    </section>
  );
}