"use client";

import Image from "next/image";

export default function TrustedBy() {
  const logos = [
    "https://r.mobirisesite.com/2460423/assets/images/short5.png",
    "https://r.mobirisesite.com/2460423/assets/images/short1.png",
    "https://r.mobirisesite.com/2460423/assets/images/short4.png",
    "https://r.mobirisesite.com/2460423/assets/images/short6.png",
    "https://r.mobirisesite.com/2460423/assets/images/short3.png",
  ];

  return (
    <section className="bg-white px-5 py-20 sm:px-8 md:px-10 md:py-24 lg:px-16 lg:py-28">
      <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8 md:mb-12">
        Trusted by Innovators
      </h2>

      <div className="overflow-hidden">
        <div className="flex flex-wrap justify-center items-center gap-4">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="w-[45%] sm:w-[30%] md:w-[200px]"
            >
              <div
                className="h-[120px] flex items-center justify-center px-6
                rounded-3xl border border-black/10
                transition-all duration-300 ease-in-out
                hover:bg-[#d1b3c4] hover:scale-[1.03] hover:shadow-sm"
              >
                <Image
                  src={logo}
                  height={80}
                  width={80}
                  alt="company logo"
                  className="object-contain h-16 w-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}