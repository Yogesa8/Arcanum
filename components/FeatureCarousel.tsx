"use client";
import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../public/feature/img1.png"
import img2 from "../public/feature/img2.png"
import img3 from "../public/feature/img3.jpg"
import img4 from "../public/feature/img4.jpg"
import img5 from "../public/feature/img5.jpg"
import img6 from "../public/feature/img6.jpg"
import img7 from "../public/feature/img7.jpg"
import img8 from "../public/feature/img8.jpg"

const cards = [
  {
    title: "Bildkvalitet",
    desc: "Kristallklar bild som får dig att glömma att du sitter hemma. Som att vara där på riktigt!",
    img: img1,
  },
  {
    title: "Ljudet",
    desc: "Immersivt ljud som omsluter dig. Känn varje explosion och viskning.",
    img: img2,
  },
  {
    title: "Enkelhet",
    desc: "Plug and play. Inga krångliga inställningar, bara ren underhållning.",
    img: img3,
  },
  {
    title: "Design",
    desc: "Snygga projektorer som passar in i ditt hem. Teknik som är lika vacker som funktionell.",
    img: img4,
  },
  {
    title: "Bildkvalitet",
    desc: "Kristallklar bild som får dig att glömma att du sitter hemma. Som att vara där på riktigt!",
    img: img5,
  },
  {
    title: "Ljudet",
    desc: "Immersivt ljud som omsluter dig. Känn varje explosion och viskning.",
    img: img6,
  },
  {
    title: "Enkelhet",
    desc: "Plug and play. Inga krångliga inställningar, bara ren underhållning.",
    img: img7,
  },
  {
    title: "Design",
    desc: "Snygga projektorer som passar in i ditt hem. Teknik som är lika vacker som funktionell.",
    img: img8,
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
    <div className="relative w-full bg-[#fdf9fa] py-20 md:py-20">
      {/* Navigation buttons - positioned top-right like reference */}
      <div className="absolute border rounded-full right-6 top-6 md:right-10 md:top-10 flex z-20">
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
      </div>

      {/* Cards container */}
      <div
        ref={scrollRef}
        className="h-120 md:h-140 lg:h-162.5 flex gap-8 md:gap-10 overflow-x-auto py-6 px-6 md:px-16 lg:px-20 scroll-smooth snap-x snap-mandatory no-scrollbar " >
        {cards.map((card, i) => (
          <div
            key={i}
            className="
              group
              relative
              min-w-75 sm:min-w-85 md:min-w-90
              h-95 sm:h-105 md:h-115
              rounded-2xl overflow-hidden
              bg-gray-950
              border-gray-800/60
              shadow-xl
              transition-transform duration-400 ease-out
              hover:scale-[1.04] hover:shadow-2xl
              snap-center
            "
          >
            {/* Image - visible by default */}
            <Image
              src={card.img}
              alt={card.title}
              fill
              className="object-cover brightness-[0.85] transition-all duration-500 group-hover:brightness-100"
              priority={i < 2}
            />

            {/* Overlay - dark by default, lighter on hover */}
            <div
              className="
                absolute inset-0
                bg-linear-to-t from-black/80 via-black/40 to-transparent
                transition-opacity duration-500
                group-hover:from-black/60 group-hover:via-black/25
              "
            />

            {/* Text content */}
            <div className="absolute inset-x-0 bottom-0 p-8 text-white z-10">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
                {card.title}
              </h3>
              <p className="text-base md:text-lg opacity-90 leading-relaxed mb-6">
                {card.desc}
              </p>
              <button
                className="
                  inline-flex items-center gap-2
                  rounded-full px-6 py-2.5
                  text-sm font-medium
                  border border-white/40
                  transition-colors hover:bg-white/10
                "
              >
                Läs Mer →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}