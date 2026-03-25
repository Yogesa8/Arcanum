"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function TrustedBy() {

  const [emblaRef] = useEmblaCarousel(
    {
      loop: false,
      align: "center",
      dragFree: true,
      skipSnaps: true,
    },
    [
      Autoplay({
        delay: 2000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const logos = [
    "https://r.mobirisesite.com/2460423/assets/images/short5.png",
    "https://r.mobirisesite.com/2460423/assets/images/short1.png",
    "https://r.mobirisesite.com/2460423/assets/images/short4.png",
    "https://r.mobirisesite.com/2460423/assets/images/short6.png",
    "https://r.mobirisesite.com/2460423/assets/images/short3.png",
    "https://r.mobirisesite.com/2460423/assets/images/short2.png",
  ];

  return (
    <section className="py-24 bg-white">

      <h3 className="text-center text-gray-700 font-medium mb-14">
        Trusted by Innovators
      </h3>

      <div className="overflow-hidden" ref={emblaRef}>

        <div className="flex justify-center items-center" >

          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex-[0_0_220px] mx-2"
            >

              <div
                className="
                  h-[140px]
                  flex items-center justify-center
                  px-6
                  rounded-2xl
                  transition-all duration-300 ease-in-out
                  hover:bg-[#d1b3c4]
                  hover:scale-[1.03]
                  hover:shadow-sm
                "
              >

                <Image
                  src={logo}
                  height={80}
                  width={80}
                  alt="company logo"
                  className="object-contain h-10 w-auto"
                />

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
