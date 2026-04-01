import { ArrowRight } from "lucide-react";
import Image from "next/image";
import heroImg from "../public/hero_img.jpg";
import { Reveal } from "./Animations";

export default function HeroSection() {
  return (
    <section className=" flex min-h-screen w-full px-5 pb-5 pt-24 sm:px-8 sm:pb-8 md:px-10 md:pt-28 ">
      <div className=" mx-auto grid h-full min-h-[calc(100vh-7.5rem)] w-full grid-cols-1 overflow-hidden rounded-4xl bg-brand-bg-warm lg:min-h-[calc(100vh-8.5rem)] lg:grid-cols-[1.05fr_1fr]">
        <Reveal className="relative min-h-105 lg:min-h-175" delay={100}>
          <Image
            src={heroImg}
            alt="Advanced Tactical Drone Systems"
            loading="eager"
            fill
            sizes="(max-width: 1279px) 100vw, 33vw"
            className="h-full w-full object-cover"
          />
        </Reveal>

        <div className="flex flex-col justify-between px-5 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-16">
          <div className="mt-8 max-w-140">
            <Reveal delay={200}>
              <h1 className="max-w-130 text-4xl font-black leading-[0.95] tracking-tight text-black sm:text-6xl lg:text-7xl">
                Command the Skies with Precision
              </h1>
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-8 max-w-140 text-base font-semibold leading-8 text-neutral-500 sm:text-lg">
                Deploy next-generation UAV systems engineered for surveillance, defense, and mission-critical operations. Achieve unmatched aerial intelligence, precision targeting, and real-time data control.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <a href="#"
                className="inline-flex h-15.5 w-fit items-center rounded-full bg-brand-primary p-1 text-base font-bold text-white shadow-sm transition-all duration-200 hover:bg-brand-primary-dark active:scale-95 self-start mt-6 sm:mt-8 lg:mt-18.5"
              >
                <span className="px-5 sm:px-7">Explore Solutions</span>
                <span className="flex h-13.5 w-13.5 items-center justify-center rounded-full bg-white text-black">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </a>
            </Reveal>
          </div>

          <Reveal delay={500} className="mt-16 flex items-center gap-5">
            <span className="text-6xl font-black leading-none text-black">1</span>
            <div className="h-9 w-px bg-neutral-300" />
            <span className="text-2xl font-extrabold text-black">Trusted in Critical Missions</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
