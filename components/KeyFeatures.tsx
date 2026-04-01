"use client";
import { useState } from "react";
import Image from "next/image";
import stablity from "../public/features/superior.jpg"
import Gen_camera from "../public/features/gen_camera.jpg"
import Controls from "../public/features/controls.jpg"
import battery from "../public/features/battery.jpg"
import { Reveal } from "./Animations";


// Data Configuration for the features
const featuresData = [
  {
    id: 1,
    title: "Advanced Flight Stabilization",
    shortDesc: "Mission-grade stability system",
    fullDesc:
      "Engineered for high-risk environments, our 3-axis stabilization ensures precise control and steady surveillance even in strong winds and harsh conditions.",
    img: stablity,
  },
  {
    id: 2,
    title: "High-Resolution ISR Camera",
    shortDesc: "4K/8K ISR imaging system",
    fullDesc:
      "Equipped with Intelligence, Surveillance, and Reconnaissance (ISR) capabilities, delivering ultra-clear imagery with enhanced zoom, night vision, and thermal support.",
    img: Gen_camera,
  },
  {
    id: 3,
    title: "AI-Assisted Navigation",
    shortDesc: "Autonomous mission control",
    fullDesc:
      "AI-powered navigation with obstacle avoidance, waypoint planning, and real-time decision-making for fully autonomous mission execution.",
    img: Controls,
  },
  {
    id: 4,
    title: "Long-Endurance Flight System",
    shortDesc: "Extended operational time",
    fullDesc:
      "Optimized power systems deliver extended flight duration, enabling long-range missions without frequent downtime or battery swaps.",
    img: battery,
  },
];

export default function KeyFeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(featuresData[0]);
  return (
    <section className="bg-brand-bg-warm px-5 py-16 sm:px-8 md:px-10 md:py-20 lg:px-16 lg:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-20">

        {/* LEFT */}
        <div className="w-full md:w-[35%]">

          <Reveal delay={100}>
            <span className="inline-flex rounded-full border border-brand-secondary px-5 py-2 text-sm font-semibold tracking-[-0.02em] text-black">
              Tactical Capabilities
            </span>
          </Reveal>

          <Reveal delay={200}>
            <h2 className="mb-8 text-4xl font-black leading-tight text-black md:mb-12 md:text-6xl">
              Mission-Grade <br className="hidden md:block" /> Performance
            </h2>
          </Reveal>

          {/* menu */}
          <div className="border-t border-gray-300">
            {featuresData.map((feature, index) => (
              <Reveal key={feature.id} delay={300 + index * 100}>
                <button
                  onClick={() => setActiveFeature(feature)}
                  className={`w-full text-left py-4 md:py-6 text-lg md:text-2xl border-b border-gray-300 transition
                  ${activeFeature.id === feature.id
                      ? "text-black"
                      : "text-gray-400 hover:text-gray-600"
                    }`}
                >
                  {feature.title}
                </button>
              </Reveal>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-[55%]">
          {/* image box */}
          <Reveal delay={400} className="relative w-full h-70  md:h-105 overflow-hidden ">
            <Image
              key={activeFeature.id}
              src={activeFeature.img}
              alt={activeFeature.title}
              fill
              loading="eager"
              sizes="(max-width: 1279px) 100vw, 33vw"
              className="object-cover rounded-[20px]"
            />
            <div
              className="absolute bottom-0 left-0 w-28 sm:w-40 md:w-55 h-12 sm:h-14 md:h-15 bg-brand-bg-warm rounded-tr-[20px] sm:rounded-tr-[30px] z-10
                  before:content-[''] before:absolute before:-top-4 sm:before:-top-5 before:left-0 before:w-4 sm:before:w-5 before:h-4 sm:before:h-5
                  before:bg-transparent before:rounded-bl-[20px] sm:before:rounded-bl-[30px] before:shadow-[-8px_8px_0_8px_var(--brand-bg-warm)] sm:before:shadow-[-10px_10px_0_10px_var(--brand-bg-warm)]

                  after:content-[''] after:absolute after:bottom-0 after:-right-4 sm:after:-right-5 after:w-4 sm:after:w-5 after:h-4 sm:after:h-5
                  after:bg-transparent after:rounded-bl-[20px] sm:after:rounded-bl-[30px] after:shadow-[-8px_8px_0_8px_var(--brand-bg-warm)] sm:after:shadow-[-10px_10px_0_10px_var(--brand-bg-warm)]
                "
            ></div>
          </Reveal>

          {/* TEXT */}
          <div className="mt-6 md:mt-10">
            <Reveal delay={500}>
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                {activeFeature.title}
              </h3>
            </Reveal>

            <Reveal delay={600}>
              <p className="text-base leading-relaxed text-neutral-500">
                {activeFeature.fullDesc}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
