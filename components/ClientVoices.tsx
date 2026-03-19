import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43?auto=format&fit=crop&w=900&q=80",
    quote: "Pure joy! This drone takes my shots to new heights.",
    name: "Alex Ryan",
    role: "Photographer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    quote: "I didn't think tech could be this thrilling. Totally hooked!",
    name: "Sam Turner",
    role: "Videographer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    quote: "Durability and performance that exceeded my wildest dreams.",
    name: "Chris Weller",
    role: "Adventure Blogger",
    imageClassName: "object-[center_20%]",
  },
];

function QuoteBadge() {
  return (
    <div className="absolute right-0 top-0 z-20 h-[60px] w-[60px] rounded-bl-[30px] bg-[#fdf9fa] pl-[10px] pb-[10px]">
      <div className="flex h-full w-full items-center justify-center rounded-full bg-[#d6b5c8] text-black">
        <Quote className="h-5 w-5 fill-current stroke-[2]" />
      </div>
      <div className="absolute left-[-20px] top-0 h-[20px] w-[20px] rounded-tr-[30px] bg-transparent shadow-[10px_-10px_0_10px_#fdf9fa]" />
      <div className="absolute right-0 top-[60px] h-[20px] w-[20px] rounded-tr-[30px] bg-transparent shadow-[10px_-10px_0_10px_#fdf9fa]" />
    </div>
  );
}

export default function ClientVoices() {
  return (
    <section className="bg-[#fdf9fa] px-5 py-20 sm:px-8 md:px-10 md:py-24 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-[1320px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[620px]">
            <span className="inline-flex rounded-full border border-[#d8b6c8] px-5 py-2 text-sm font-semibold tracking-[-0.02em] text-black">
              Client Voices
            </span>
            <h2 className="mt-8 max-w-[540px] text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] text-black sm:text-6xl md:text-[88px]">
              What They Say
            </h2>
          </div>

          <a
            href="#"
            className="inline-flex h-[62px] w-fit items-center rounded-full bg-[#d3b0c3] p-1 text-base font-bold text-white shadow-sm transition-transform duration-200 hover:scale-[1.02] self-start lg:mt-[74px]"
          >
            <span className="px-7">See More</span>
            <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white text-black">
              <ArrowRight className="h-5 w-5" />
            </span>
          </a>
        </div>

        <div className="mt-14 grid gap-8 xl:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-[30px_0px_30px_30px] bg-[#fffdfd] shadow-[0_18px_60px_rgba(185,162,171,0.08)]">            
              <div className="relative">
                <div className="relative h-[260px] overflow-hidden rounded-[30px] md:h-[280px]">
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
