import React from "react";
import Image from "next/image";
import { Cpu, Wind, BatteryCharging, Gamepad2 } from "lucide-react";
import mortor from "../public/parts/mortor.jpg"
import controller from "../public/parts/controller.jpg"
import propeller from "../public/parts/propeller.jpg"
import battery from "../public/parts/battery.jpg"

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
        <section className=" bg-[#fdf9fa] px-5 py-16 sm:px-8 md:px-10 md:py-20 lg:px-16 lg:py-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="max-w-155">
                    <p className="inline-flex rounded-full border border-[#d8b6c8] px-5 py-2 text-sm font-semibold tracking-[-0.02em] text-black"> Drone Parts </p>
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8 md:mb-12">
                        Why Choose Our Parts
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {features.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col gap-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
                            >
                                {/* Image */}
                                <div className="relative w-full h-40">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 1279px) 100vw, 33vw"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="p-4 flex flex-col gap-3">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>

                                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-black text-white">
                                        <Icon size={18} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Extra Details Section */}
                <div className="mt-16 grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                            Premium Drone Components
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Our drone spare parts are carefully selected to ensure durability,
                            performance, and compatibility. Whether you&apos;re repairing or
                            upgrading, we provide reliable components that meet industry
                            standards.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                            Fast Support & Delivery
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Need help choosing the right part? Our support team is ready to
                            assist. We also ensure fast shipping so you can get your drone back
                            in the air quickly.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
