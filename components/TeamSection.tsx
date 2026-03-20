"use client";

import useEmblaCarousel from "embla-carousel-react";
import TeamCard from "./TeamCard";

const team = [
    {
        name: "Sophie Kim",
        role: "CMO",
        image:
            "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200",
    },
    {
        name: "Dan Smith",
        role: "Lead Designer",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200",
    },
    {
        name: "Eva Green",
        role: "Marketing Head",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200",
    },
    {
        name: "Dan Smith",
        role: "Lead Designer",
        image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200",
    },
    {
        name: "Eva Green",
        role: "Marketing Head",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200",
    }
];

export default function TeamSection() {
    const [emblaRef] = useEmblaCarousel({
        align: "start",
        dragFree: true,
        containScroll: "trimSnaps",
    });

    return (
        <section className="overflow-hidden h-full bg-[#fbfaf8] px-5 py-10 sm:px-8 md:px-10 md:py-18 lg:px-14 xl:px-20">
            <div className="h-auto mx-auto max-w-330 ">
                <div className="text-center">
                    <span className="inline-flex rounded-full border border-[#d8bfd0] px-5 py-2 text-sm font-semibold tracking-[-0.02em] text-[#151515]">
                        Meet Us
                    </span>

                    <h2 className="mx-auto mt-6 max-w-4xl text-balance font-[Manrope] text-[clamp(3rem,7vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.07em] text-[#050505]">
                        Creative Minds Behind
                    </h2>
                </div>



                <div className="h-162.5 mt-10 overflow-x-hidden overflow-y-visible md:mt-14" ref={emblaRef}>
                    <div className="-ml-4 flex touch-pan-y md:-ml-6 overflow-visible">
                        {team.map((item, index) => (
                            <div
                                key={item.name}
                                className={`min-w-0 flex-[0_0_88%] pl-4 sm:flex-[0_0_68%] md:flex-[0_0_50%] md:pl-6 lg:flex-[0_0_33.333%]
                                        ${index === 1 ? "lg:translate-y-14" : ""}
                                        ${index === 2 ? "lg:translate-y-1" : ""}
                                        ${index === 3 ? "lg:translate-y-14" : ""}
                                        ${index === 4 ? "lg:translate-y-1" : ""}
                                        ${index === 5 ? "lg:translate-y-14" : ""}
                                        ${index === 6 ? "lg:translate-y-1" : ""}`
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

