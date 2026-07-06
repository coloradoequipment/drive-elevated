import Link from "next/link";

type Vehicle = {
  name: string;
  text: string;
  href: string;
};

export default function ChooseYourDrive({ vehicles }: { vehicles: Vehicle[] }) {
  return (
    <section className="px-6 pb-20 md:px-16">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-black/30 p-8 md:p-10">
        <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#d6a85f]">
          Choose Your Drive
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {vehicles.map((vehicle) => (
            <Link
              key={vehicle.name}
              href={vehicle.href}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#d6a85f]/50 hover:bg-white/[0.06]"
            >
              <h3 className="mb-3 text-xl font-bold">{vehicle.name}</h3>
              <p className="mb-5 leading-8 text-white/70">{vehicle.text}</p>
              <p className="font-semibold text-[#d6a85f]">
                View vehicle guide →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}