"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Animations";
import { drones } from "../lib/drones";

const styles = {
  light: {
    overlay: "bg-white/40",
    text: "text-black",
    tag: "bg-white text-neutral-700",
  },
  teal: {
    overlay: "bg-[#0b3f46]/70",
    text: "text-white",
    tag: "bg-white/10 text-white",
  },
  dark: {
    overlay: "bg-[#001e24]/70",
    text: "text-white",
    tag: "bg-white/10 text-white",
  },
};

function ArrowBadge() {
  return (
    <div className="absolute bottom-0 right-0 z-20">
      <div className="relative h-12.5 w-12.5 sm:h-15 sm:w-[60px] lg:h-[70px] lg:w-[70px] rounded-tl-[20px] sm:rounded-tl-[24px] lg:rounded-tl-[30px] bg-brand-bg-warm p-1.5 sm:p-2">
        {/* Arrow */}
        <div className="flex h-full w-full items-center justify-center rounded-full bg-brand-primary hover:bg-brand-primary-dark transition-transform duration-300 ">
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
        </div>
        {/* Curves */}
        <div className="absolute -left-4 bottom-0 h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] rounded-br-[20px] bg-transparent shadow-[5px_5px_0_4px_#f5f1f3]" />
        <div className="absolute right-0 -top-4 h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] rounded-br-[20px] bg-transparent shadow-[5px_5px_0_4px_#f5f1f3]" />
      </div>
    </div>
  );
}

const DronesSection = () => {
  const router = useRouter();

  return (
    <section className="bg-brand-bg-warm px-5 py-16 sm:px-8 md:px-10 md:py-20 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-155">
          <Reveal delay={100}>
            <p className="inline-flex rounded-full border border-brand-secondary px-5 py-2 text-sm font-semibold tracking-[-0.02em] text-black">
              Drones
            </p>
          </Reveal>
          <Reveal delay={200}>
            <h2 className="mb-8 text-4xl font-black leading-tight md:mb-12 md:text-6xl text-black">
              Defense Drone Systems
            </h2>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {drones.map((card, i) => {
            const variant = styles[card.variant || "light"];

            return (
              <Reveal key={i} delay={100 + i * 100}>
                <article 
                  onClick={() => router.push(`/drones/${card.slug}`)}
                  className="group relative cursor-pointer overflow-hidden rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] min-h-[260px] sm:min-h-[320px] lg:min-h-[380px] flex flex-col justify-between"
                >
                  {/* Image layer */}
                  <Image
                    src={card.bgImage}
                    alt={card.title}
                    fill
                    loading="eager"
                    sizes="(max-width: 1279px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className={`absolute inset-0 transition-opacity duration-500 group-hover:opacity-80 ${variant.overlay}`} />
                  
                  <ArrowBadge />

                  {/* Content */}
                  <div className={`relative z-10 p-5 sm:p-6 lg:p-8 flex flex-col justify-between h-full ${variant.text}`}>
                    <div className={`mb-8 w-fit rounded-lg px-3 py-1 text-sm font-bold ${variant.tag}`}>
                      ▪ {card.tag}
                    </div>
                    <div>
                      <h3 className="max-w-[260px] text-base sm:text-lg lg:text-xl font-bold leading-snug">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DronesSection;
