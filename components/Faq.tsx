"use client";

import { useState } from "react";
import { BadgeQuestionMark, ChevronDown } from "lucide-react";
import { Reveal } from "./Animations";

const faqs = [
     {
          question: "What makes your drones mission-ready?",
          answer:
               "Our drones are engineered with military-grade stabilization, AI-driven navigation, and secure communication systems, ensuring reliable performance in high-risk and mission-critical environments.",
     },
     {
          question: "Can your drones operate autonomously?",
          answer:
               "Yes, our UAV systems support autonomous missions with waypoint navigation, obstacle avoidance, and real-time decision-making powered by advanced AI algorithms.",
     },
     {
          question: "Which sectors are your drones designed for?",
          answer:
               "Our drones are primarily built for defense, surveillance, border security, industrial monitoring, and critical infrastructure inspection.",
     },
     {
          question: "Do you provide technical and operational support?",
          answer:
               "Yes, we offer complete support including deployment guidance, maintenance services, and technical assistance to ensure uninterrupted operations.",
     },
     {
          question: "What is the operational flight duration?",
          answer:
               "Our drones are equipped with long-endurance power systems, offering extended flight durations depending on mission requirements and payload configuration.",
     },
     {
          question: "Do your drones include warranty and service coverage?",
          answer:
               "Yes, all our systems come with standard warranty coverage, with options for extended service plans tailored for enterprise and defense operations.",
     },
     {
          question: "Are your systems compliant with security standards?",
          answer:
               "Yes, our drones are designed with secure communication protocols and comply with industry-grade safety and operational standards required for sensitive missions.",
     }
];

export default function DroneFAQ() {
     const [openIndex, setOpenIndex] = useState<number | null>(null);

     const toggle = (index: number) => {
          setOpenIndex(openIndex === index ? null : index);
     };

     return (
          <section className="bg-brand-bg-pink  px-5 py-16 sm:px-8 md:px-10 md:py-20 lg:px-16 lg:py-20">
               <div className="max-w-7xl mx-auto">

                    {/* Top Label */}
                    <div className="max-w-155">
                         <Reveal delay={100}>
                              <p className="inline-flex rounded-full border border-brand-secondary px-5 py-2 text-sm font-semibold tracking-[-0.02em] text-black">
                                   Common Questions
                              </p>
                         </Reveal>
                         {/* Heading */}
                         <Reveal delay={200}>
                              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8 md:mb-12">
                                   You Ask, We Answer
                              </h2>
                         </Reveal>
                    </div>



                    {/* Divider */}
                    <div className="border-t border-black/10 mb-6" />

                    {/* FAQ List */}
                    <div className="space-y-6">
                         {faqs.map((faq, index) => (
                              <Reveal key={index} delay={300 + index * 100} className="border-b border-black/10 pb-4">

                                   <button
                                        onClick={() => toggle(index)}
                                        className="w-full flex items-center justify-between text-left"
                                   >
                                        {/* Left Icon + Question */}
                                        <div className="flex items-center gap-4">

                                             <div className="flex h-8 w-8 sm:h-10 sm:w-10   items-center justify-center rounded-full bg-brand-primary text-white">
                                                  <BadgeQuestionMark strokeWidth={1.5} />
                                             </div>

                                             <h3 className="text-sm sm:text-lg font-bold text-neutral-900">
                                                  {faq.question}
                                             </h3>
                                        </div>

                                        {/* Arrow */}
                                        <ChevronDown
                                             className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                                  }`}
                                        />
                                   </button>

                                   {/* Answer */}
                                   <div
                                        className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 mt-4" : "max-h-0"
                                             }`}
                                   >
                                        <p className="text-gray-600 pl-14">
                                             {faq.answer}
                                        </p>
                                   </div>

                              </Reveal>
                         ))}
                    </div>
               </div>
          </section>
     );
}
