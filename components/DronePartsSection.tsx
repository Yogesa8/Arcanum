import React from "react";
import Image from "next/image";
import { Cpu, Wind, BatteryCharging, Gamepad2 } from "lucide-react";
import mortor from "../public/parts/mortor.jpg"
import controller from "../public/parts/controller.jpg"
import propeller from "../public/parts/propeller.jpg"
import battery from "../public/parts/battery.jpg"
import { Reveal } from "./Animations";

const features = [
    {
        title: "Motors",
        desc: "High-performance brushless motors designed for stability, efficiency, and longer flight times.",
        icon: Cpu,
        image: mortor,
    },
    {
        title: "Propellers",
        desc: "Durable and balanced propellers for smoother flights and better control in all conditions.",
        icon: Wind,
        image: propeller,
    },
    {
        title: "Batteries",
        desc: "Long-lasting LiPo batteries that deliver consistent power and extended flight duration.",
        icon: BatteryCharging,
        image: battery,
    },
    {
        title: "Controllers",
        desc: "Advanced flight controllers with precision tuning for both beginners and professionals.",
        icon: Gamepad2,
        image: controller,
    },
];

export default function DronePartsSection() {
    return (
        <section className="bg-brand-bg-warm px-5 py-16 sm:px-8 md:px-10 md:py-20 lg:px-16 lg:py-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="max-w-155">
                    <Reveal delay={100}>
                        <p className="inline-flex rounded-full border border-brand-secondary px-5 py-2 text-sm font-semibold tracking-[-0.02em] text-black"> Drone Parts </p>
                    </Reveal>
                    <Reveal delay={200}>
                        <h2 className="mb-8 text-4xl font-black leading-tight text-black md:mb-12 md:text-6xl">
                            Precision Engineered Components
                        </h2>
                    </Reveal>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {features.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <Reveal
                                key={index}
                                delay={300 + index * 100}
                                className="flex flex-col gap-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
                            >
                                {/* Image */}
                                <div className="relative w-full h-40">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        loading="eager"
                                        sizes="(max-width: 1279px) 100vw, 33vw"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="p-4 flex flex-col gap-3">
                                    <h3 className="text-xl font-bold text-neutral-900">
                                        {item.title}
                                    </h3>
                                    <p className="text-base leading-relaxed text-neutral-500">
                                        {item.desc}
                                    </p>

                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary text-white">
                                        <Icon size={18} />
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>

                {/* Extra Details Section */}
                <div className="mt-16 grid md:grid-cols-2 gap-10">
                    <Reveal delay={100}>
                        <div>
                            <h3 className="mb-4 text-2xl font-bold text-neutral-900">
                                Premium Drone Components
                            </h3>
                            <p className="leading-relaxed text-neutral-500">
                                All components are tested for durability, efficiency, and mission reliability under extreme conditions. Built to meet defense-grade standards.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div>
                            <h3 className="mb-4 text-2xl font-bold text-neutral-900">
                                Rapid Deployment Support
                            </h3>
                            <p className="leading-relaxed text-neutral-500">
                                Our team ensures quick technical assistance and fast delivery to keep your operations uninterrupted.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
