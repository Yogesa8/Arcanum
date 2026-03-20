import React from "react";
import Image from "next/image";
import { Cpu, Wind, BatteryCharging, Gamepad2 } from "lucide-react";

const features = [
    {
        title: "Motors",
        desc: "High-performance brushless motors designed for stability, efficiency, and longer flight times.",
        icon: Cpu,
        image: "https://images.unsplash.com/photo-1581091012184-5c9c1c6d9c1b",
    },
    {
        title: "Propellers",
        desc: "Durable and balanced propellers for smoother flights and better control in all conditions.",
        icon: Wind,
        image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e",
    },
    {
        title: "Batteries",
        desc: "Long-lasting LiPo batteries that deliver consistent power and extended flight duration.",
        icon: BatteryCharging,
        image: "https://images.unsplash.com/photo-1584270354949-1f2f7c9e5d5f",
    },
    {
        title: "Controllers",
        desc: "Advanced flight controllers with precision tuning for both beginners and professionals.",
        icon: Gamepad2,
        image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
    },
];

export default function DronePartsSection() {
    return (
        <section className="bg-[#fbfaf8] py-16 px-6 md:px-16 mb-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <p className="text-gray-500 mb-2">/ Drone Parts /</p>
                    <h2 className="inline-block text-black px-4 py-2 text-3xl md:text-5xl font-semibold">
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
                                        src={`${item.image}?auto=format&fit=crop&w=500&q=80`}
                                        alt={item.title}
                                        fill
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
