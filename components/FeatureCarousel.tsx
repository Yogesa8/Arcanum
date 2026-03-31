"use client";
import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Bildkvalit from "../public/feature/img1.jpeg"
import Ljudet from "../public/feature/img2.png"
import Enkelhet from "../public/feature/img3.jpg"
import Design from "../public/feature/img4.jpg"
import Bildkvalitet from "../public/feature/img5.jpg"
import Ljud from "../public/feature/img6.jpg"
import Enkelh from "../public/feature/img8.jpg"
import Desig from "../public/feature/img9.jpg"
import { Reveal } from "./Animations";

const cards = [
  {
    title: "Bildkvalitet",
    desc: "Kristallklar bild som får dig att glömma att du sitter hemma. Som att vara där på riktigt!",
    image: Bildkvalit,
  },
  {
    title: "Ljudet",
    desc: "Immersivt ljud som omsluter dig. Känn varje explosion och viskning.",
    image: Ljudet,
  },
  {
    title: "Enkelhet",
    desc: "Plug and play. Inga krångliga inställningar, bara ren underhållning.",
    image: Enkelhet,
  },
  {
    title: "Design",
    desc: "Snygga projektorer som passar in i ditt hem. Teknik som är lika vacker som funktionell.",
    image: Design,
  },
  {
    title: "Bildkvalitet",
    desc: "Kristallklar bild som får dig att glömma att du sitter hemma. Som att vara där på riktigt!",
    image: Bildkvalitet,
  },
  {
    title: "Ljudet",
    desc: "Immersivt ljud som omsluter dig. Känn varje explosion och viskning.",
    image: Ljud,
  },
  {
    title: "Enkelhet",
    desc: "Plug and play. Inga krångliga inställningar, bara ren underhållning.",
    image: Enkelh,
  },
  {
    title: "Design",
    desc: "Snygga projektorer som passar in i ditt hem. Teknik som är lika vacker som funktionell.",
    image: Desig,
  },
];

export default function FeatureCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector("div")?.offsetWidth ?? 340;
    const gap = 40; // matches gap-10 (2.5rem = 40px)
    const scrollAmount = cardWidth + gap;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full bg-brand-bg-pink  px-5 py-16 sm:px-8 md:px-10 md:py-20 lg:px-16 lg:py-20">
      <div className="h-130 mx-auto">
        {/* Navigation buttons - positioned top-right like reference */}
        <Reveal delay={100} className="absolute border rounded-full right-6 top-6 md:right-10 md:top-10 flex z-20">
          <button
            onClick={() => scroll("left")}
            className="
            flex h-10 w-10 items-center justify-center
            rounded-full border-0
            bg-transparent text-black backdrop-blur-sm
            transition hover:bg-white hover:shadow-md
            active:scale-95
          "
            aria-label="Scroll left"
          >
            <span className="text-xl font-light"><ChevronLeft /></span>
          </button>
          <button
            onClick={() => scroll("right")}
            className="
            flex h-10 w-10 items-center justify-center
            rounded-full border-0
            bg-transparent text-black backdrop-blur-sm
            transition hover:bg-white hover:shadow-md
            active:scale-95
          "
            aria-label="Scroll right"
          >
            <span className="text-xl font-light"><ChevronRight /></span>
          </button>
        </Reveal>

        {/* Cards container */}
        <div
          ref={scrollRef}
          className="h-full md:h-full lg:h-full flex gap-8 md:gap-10 overflow-x-auto py-6 px-6 md:px-16 lg:px-20 scroll-smooth snap-x snap-mandatory no-scrollbar " >
          {cards.map((card, i) => (
            <Reveal
              key={i}
              delay={200 + i * 100}
              className="
              group
              relative
              min-w-65 sm:min-w-75 md:min-w-80
              h-95 sm:h-105 md:h-115
              rounded-2xl overflow-hidden
              bg-gray-950
              border-gray-800/60
              transition-transform duration-400 ease-out
              hover:scale-[1.04] 
              snap-center
            "
            >
              {/* Image - visible by default */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                loading="eager"
                sizes="(max-width: 1279px) 100vw, 33vw"
                className="object-cover brightness-[0.85] transition-all duration-500 group-hover:brightness-100"
                priority={i < 2}
              />

              {/* Overlay - dark by default, lighter on hover */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/60 group-hover:via-black/25"
              />

              {/* Text content */}
              <div className="absolute inset-x-0 bottom-0 p-8 text-white z-10">
                <h3 className="mb-3 text-2xl font-black tracking-tight md:text-3xl">
                  {card.title}
                </h3>
                <p className="mb-6 text-base leading-relaxed text-white/90 md:text-lg">
                  {card.desc}
                </p>
                <button
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-2.5 text-sm font-semibold transition-all hover:bg-white/10 active:scale-95"
                >
                  Learn More →
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
