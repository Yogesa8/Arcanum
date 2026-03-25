"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
     {
          question: "What makes your drones unique?",
          answer:
               "Our drones are built with advanced stabilization, AI-assisted navigation, and high-end cameras for professional results.",
     },
     {
          question: "Are your drones beginner-friendly?",
          answer:
               "Yes, our drones are designed for both beginners and professionals with easy controls and smart flight modes.",
     },
     {
          question: "What industries use your drones?",
          answer:
               "Our drones are widely used in agriculture, surveillance, cinematography, and industrial inspections.",
     },
     {
          question: "Do you provide after-sales support?",
          answer:
               "Yes, we offer full technical support, maintenance guidance, and quick service assistance.",
     },
     {
          question: "How long does the battery last?",
          answer:
               "Depending on the model, our drones offer flight times ranging from 25 to 60 minutes.",
     },
     {
          question: "Do your drones come with warranty?",
          answer:
               "Yes, all our drones come with a standard warranty and optional extended coverage.",
     },
];

export default function DroneFAQ() {
     const [openIndex, setOpenIndex] = useState(null);

     const toggle = (index) => {
          setOpenIndex(openIndex === index ? null : index);
     };

     return (
          <section className="bg-[#f5f5f5] px-5 py-20 sm:px-8 md:px-10 md:py-24 lg:px-16 lg:py-28">
               <div className="max-w-5xl mx-auto px-4">

                    {/* Top Label */}
                    <div className="max-w-155">
                         <p className="inline-flex rounded-full border border-[#d8b6c8] px-5 py-2 text-sm font-semibold tracking-[-0.02em] text-black">
                              Common Questions
                         </p>
                         {/* Heading */}
                         <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8 md:mb-12">
                              You Ask, We Answer
                         </h2>
                    </div>



                    {/* Divider */}
                    <div className="border-t border-black/10 mb-6" />

                    {/* FAQ List */}
                    <div className="space-y-6">
                         {faqs.map((faq, index) => (
                              <div key={index} className="border-b border-black/10 pb-4">

                                   <button
                                        onClick={() => toggle(index)}
                                        className="w-full flex items-center justify-between text-left"
                                   >
                                        {/* Left Icon + Question */}
                                        <div className="flex items-center gap-4">

                                             <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e7d3dc]">
                                                  ?
                                             </div>

                                             <h3 className="font-medium text-lg">
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

                              </div>
                         ))}
                    </div>
               </div>
          </section>
     );
}