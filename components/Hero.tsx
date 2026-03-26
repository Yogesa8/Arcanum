import { ArrowRight } from "lucide-react";
import Image from "next/image";
import heroImg from "../public/hero_img.jpg"

export default function HeroSection() {
  return (
    <section className=" flex min-h-screen w-full px-5 pb-5 pt-24 sm:px-8 sm:pb-8 md:px-10 md:pt-28 ">
      <div className=" mx-auto grid h-full min-h-[calc(100vh-7.5rem)] w-full grid-cols-1 overflow-hidden rounded-4xl bg-[#f5f1f3] lg:min-h-[calc(100vh-8.5rem)] lg:grid-cols-[1.05fr_1fr]">
        <div className="relative min-h-105 lg:min-h-175">
          <Image
            src={heroImg}
            alt="Professional drone flying in the sky"
            fill
            sizes="(max-width: 1279px) 100vw, 33vw"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between px-8 py-12 sm:px-14 lg:px-16 lg:py-16">
          <div className="mt-10 max-w-140">
            <h1 className="max-w-130 text-5xl font-black leading-[0.95] tracking-tight text-black sm:text-6xl lg:text-7xl">
              Fly Into The Future
            </h1>

            <p className="mt-8 max-w-140 text-base font-semibold leading-8 text-neutral-500 sm:text-lg">
              Discover next-generation drones built for creators, explorers,
              and professionals. Capture cinematic aerial footage, navigate with
              precision, and elevate every flight with intelligent performance.
            </p>

            {/* <button className="mt-10 inline-flex items-center gap-4 rounded-full bg-[#2B411C] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
              <span>Get Started</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
                <ArrowRight size={18} />
              </span>
            </button> */}
            <a
              href="#"
              className="inline-flex h-15.5 w-fit items-center rounded-full bg-[#2B411C] p-1 text-base font-bold text-white shadow-sm transition-transform duration-200 self-start lg:mt-18.5"
            >
              <span className="px-7">Get Started</span>
              <span className="flex h-13.5 w-13.5 items-center justify-center rounded-full bg-white text-black">
                <ArrowRight className="h-5 w-5" />
              </span>
            </a>
          </div>

          <div className="mt-16 flex items-center gap-5">
            <span className="text-6xl font-black leading-none text-black">1</span>
            <div className="h-9 w-px bg-neutral-300" />
            <span className="text-2xl font-extrabold text-black">World Leader</span>
          </div>
        </div>
      </div>
    </section>
  );
}