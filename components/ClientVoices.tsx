import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import client1 from "../public/client/c1.jpg"
import client2 from "../public/client/c2.jpg"
import client3 from "../public/client/c3.jpg"

const testimonials = [
  {
    image: client1,
    quote: "Pure joy! This drone takes my shots to new heights.",
    name: "Alex Ryan",
    role: "Photographer",
  },
  {
    image: client2,
    quote: "I didn't think tech could be this thrilling. Totally hooked!",
    name: "Sam Turner",
    role: "Videographer",
  },
  {
    image: client3,
    quote: "Durability and performance that exceeded my wildest dreams.",
    name: "Chris Weller",
    role: "Adventure Blogger",
    imageClassName: "object-[center_20%]",
  },
];

function QuoteBadge() {
  return (
    <div className="absolute right-0 top-0 z-20 h-15 w-15 rounded-bl-[30px] bg-brand-bg-pink pl-2.5 pb-2.5">
      <div className="flex h-full w-full items-center justify-center rounded-full bg-brand-primary text-black">
        <Quote className="h-5 w-5 fill-current stroke-2 text-white" />
      </div>
      <div className="absolute -left-5 top-0 h-5 w-5 rounded-tr-[30px] bg-transparent shadow-[3px_-5px_0_3px_var(--brand-bg-pink)]" />
      <div className="absolute right-0 top-15 h-5 w-5 rounded-tr-[30px] bg-transparent shadow-[3px_-5px_0_3px_var(--brand-bg-pink)]" />
    </div>
  );
}

export default function ClientVoices() {
  return (
    <section className="bg-brand-bg-pink px-5 py-16 sm:px-8 md:px-10 md:py-20 lg:px-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-155">
            <span className="inline-flex rounded-full border border-brand-secondary px-5 py-2 text-sm font-semibold tracking-[-0.02em] text-black">
              Client Voices
            </span>
            <h2 className="mb-8 text-4xl font-black leading-tight text-black md:mb-12 md:text-6xl">
              What They Say
            </h2>
          </div>

          <a
            href="#"
            className="inline-flex h-15.5 w-fit items-center rounded-full bg-brand-primary p-1 text-base font-bold text-white shadow-sm transition-all duration-200 hover:bg-brand-primary-dark active:scale-95 self-start lg:mt-18.5"
          >
            <span className="px-7">See More</span>
            <span className="flex h-13.5 w-13.5 items-center justify-center rounded-full bg-white text-black">
              <ArrowRight className="h-5 w-5" />
            </span>
          </a>
        </div>

        <div className="mt-14 grid gap-8 xl:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-[30px_0px_30px_30px] bg-brand-bg-pink shadow-[0_18px_60px_rgba(185,162,171,0.08)]">
              <div className="relative">
                <div className="relative h-65 overflow-hidden rounded-[30px] md:h-70">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 1279px) 100vw, 33vw"
                    className={`object-cover ${item.imageClassName ?? ""}`}
                  />
                </div>
                <QuoteBadge />
              </div>

              <div className="p-10">
                <p className="max-w-[320px] text-[22px] font-extrabold leading-[1.28] tracking-[-0.04em] text-black">
                  {item.quote}
                </p>
                <div className="mt-6 h-px w-full bg-[#ddd6db]" />
                <div className="mt-6">
                  <h3 className="text-[18px] font-extrabold tracking-[-0.03em] text-black">
                    {item.name}
                  </h3>
                  <p className="text-[18px] font-medium tracking-[-0.03em] text-[#8e8a8b]">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
