import Image from "next/image";

type JourneyChapterProps = {
  eyebrow: string;
  title: string;
  image?: string;
  reverse?: boolean;
  children: React.ReactNode;
};

export default function JourneyChapter({
  eyebrow,
  title,
  image,
  reverse = false,
  children,
}: JourneyChapterProps) {
  return (
    <section className="px-6 pb-20 md:px-16">
      <div
        className={`mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-center ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        {image && (
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
            <Image
              src={image}
              alt={title}
              width={1400}
              height={1000}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        )}

        <div className={image ? "" : "md:col-span-2"}>
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