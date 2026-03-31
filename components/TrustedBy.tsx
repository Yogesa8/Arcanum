"use client";
import Image from "next/image";
import short1 from "../public/trustedby/short1.png"
import short3 from "../public/trustedby/short3.png"
import short4 from "../public/trustedby/short4.png"
import short5 from "../public/trustedby/short5.png"
import short6 from "../public/trustedby/short6.png"
import { Reveal } from "./Animations";

export default function TrustedBy() {
  const logos = [short1, short3, short4, short5, short6];

  return (
    <section className="bg-brand-bg-pink px-5 py-16 sm:px-8 md:px-10 md:py-20 lg:px-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-155">
          <Reveal delay={100}>
            <p className="inline-flex rounded-full border border-brand-secondary px-5 py-2 text-sm font-semibold tracking-[-0.02em] text-black"> Innovators </p>
          </Reveal>
          <Reveal delay={200}>
            <h2 className="mb-8 text-4xl font-black leading-tight text-black md:mb-12 md:text-6xl">
              Trusted by Defense & Security Leaders
            </h2>
          </Reveal>
        </div>

        <div className="overflow-hidden">
          <div className="flex flex-wrap justify-center items-center gap-4">
            {logos.map((logo, i) => (
              <Reveal
                key={i}
                delay={300 + i * 100}
                className="w-[45%] sm:w-[30%] md:w-50"
              >
                <div
                  className="h-30 flex items-center justify-center px-6
                rounded-2xl border border-black/10
                transition-all duration-300 ease-in-out
                hover:bg-brand-primary  hover:scale-[1.03] hover:shadow-sm"
                >
                  <Image
                    src={logo}
                    height={80}
                    width={80}
                    sizes="(max-width: 1279px) 100vw, 33vw"
                    alt="company logo"
                    className="object-contain h-16 w-auto"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}