"use client";
import { useState } from "react";
import Image from "next/image";
import stablity from "../public/features/superior.jpg"
import Gen_camera from "../public/features/gen_camera.jpg"
import Controls from "../public/features/controls.jpg"
import battery from "../public/features/battery.jpg"


// Data Configuration for the features
const featuresData = [
  {
    id: 1,
    title: "Superior Stability",
    shortDesc: "Advanced gimbal technology.",
    fullDesc:
      "Capture steady footage even in high winds with our 3-axis stabilization system.",
    img: stablity,
  },
  {
    id: 2,
    title: "Next Gen Camera",
    shortDesc: "8K resolution recording.",
    fullDesc:
      "Professional-grade sensor captures every detail with stunning dynamic range.",
    img: Gen_camera,
  },
  {
    id: 3,
    title: "Intuitive Controls",
    shortDesc: "Effortless pilot experience.",
    fullDesc:
      "Effortless controls for seamless flight, designed for beginners and pros alike.",
    img: Controls,
  },
  {
    id: 4,
    title: "Extended Battery",
    shortDesc: "Up to 45 mins flight.",
    fullDesc:
      "Industry-leading battery life keeps you in the air longer for the perfect shot.",
    img: battery,
  },
];

export default function KeyFeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(featuresData[0]);
  return (
    <section className="bg-[#fdf9fa] px-5 py-16 sm:px-8 md:px-10 md:py-20 lg:px-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row gap-10 md:gap-20">

        {/* LEFT */}
        <div className="w-full md:w-[35%]">

          <span className="inline-flex rounded-full border border-[#d8b6c8] px-5 py-2 text-sm font-semibold tracking-[-0.02em] text-black">
            Key Features
          </span>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8 md:mb-12">
            Unmatched <br />
            Performance <br />
            Ahead
          </h2>

          {/* menu */}
          <div className="border-t border-gray-300">
            {featuresData.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature)}
                className={`w-full text-left py-4 md:py-6 text-lg md:text-2xl border-b border-gray-300 transition
                ${activeFeature.id === feature.id
                    ? "text-black"
                    : "text-gray-400 hover:text-gray-600"
                  }`}
              >
                {feature.title}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-[55%]">
          {/* image box */}
          <div className="relative w-full h-70  md:h-105 overflow-hidden ">
            <Image
              key={activeFeature.id}
              src={activeFeature.img}
              alt={activeFeature.title}
              fill
              sizes="(max-width: 1279px) 100vw, 33vw"
              className="object-cover rounded-[20px]"
            />
            <div
              className="absolute bottom-0 left-0 w-28 sm:w-40 md:w-55 h-12 sm:h-14 md:h-15 bg-[#fdf9fa] rounded-tr-[20px] sm:rounded-tr-[30px] z-10
                  before:content-[''] before:absolute before:-top-4 sm:before:-top-5 before:left-0 before:w-4 sm:before:w-5 before:h-4 sm:before:h-5
                  before:bg-transparent before:rounded-bl-[20px] sm:before:rounded-bl-[30px] before:shadow-[-8px_8px_0_8px_#f5f5f5] sm:before:shadow-[-10px_10px_0_10px_#f5f5f5]

                  after:content-[''] after:absolute after:bottom-0 after:-right-4 sm:after:-right-5 after:w-4 sm:after:w-5 after:h-4 sm:after:h-5
                  after:bg-transparent after:rounded-bl-[20px] sm:after:rounded-bl-[30px] after:shadow-[-8px_8px_0_8px_#f5f5f5] sm:after:shadow-[-10px_10px_0_10px_#f5f5f5]
                "
            ></div>
          </div>

          {/* TEXT */}
          <div className="mt-6 md:mt-10">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">
              {activeFeature.title}
            </h3>

            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              {activeFeature.fullDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
