"use client";

import useEmblaCarousel from "embla-carousel-react";
import TeamCard from "./TeamCard";
import har from "../public/team/har.jpg"
import man from "../public/team/man.jpg"
import moh from "../public/team/moh.jpg"

const team = [
    {
        name: "Harsh Srivastava",
        role: "CEO & DIRECTOR",
        image: har,
    },
    {
        name: "Manvender Kulhar",
        role: "GROWTH MANAGER",
        image: man,
    },
    {
        name: "Mohit Kumar Sangwan",
        role: "CO-FOUNDER",
        image: moh,
    }
];

export default function TeamSection() {
    const [emblaRef] = useEmblaCarousel({
        align: "start",
        dragFree: true,
        containScroll: "trimSnaps",
    });

    return (
        <section className="overflow-hidden h-full bg-[#f5f1f3] px-5 py-16 sm:px-8 md:px-10 md:py-20 lg:px-16 lg:py-20">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-155">
                    <span className="inline-flex rounded-full border border-[#d8b6c8] px-5 py-2 text-sm font-semibold tracking-[-0.02em] text-black">
                        Meet Us
                    </span>

                    <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8 md:mb-12">
                        Creative Minds Behind
                    </h2>
                </div>



                <div className="h-120 md:h-140 lg:h-162.5 mt-10 overflow-x-hidden overflow-y-visible md:mt-14" ref={emblaRef}>
                    <div className="-ml-4 flex touch-pan-y md:-ml-6 overflow-visible">
                        {team.map((item, index) => (
                            <div
                                key={item.name}
                                className={`min-w-0 flex-[0_0_88%] pl-4 sm:flex-[0_0_68%] md:flex-[0_0_50%] md:pl-6 lg:flex-[0_0_33.333%]
                                        ${index === 1 ? "lg:translate-y-14" : ""}
                                        ${index === 2 ? "lg:translate-y-1" : ""}
                                        ${index === 3 ? "lg:translate-y-14" : ""}`
                                }
                            >
                                <TeamCard {...item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

