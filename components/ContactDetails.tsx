"use client";

import { Reveal } from "./Animations";

const ContactDetails = () => {
  return (
    <section className="bg-brand-bg-pink  px-5 py-16 sm:px-8 md:px-10 md:py-20 lg:px-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Contact Info */}
          <div>
            <Reveal delay={100}>
                <h2 className="mb-8 text-4xl font-black leading-tight text-black md:mb-12 md:text-6xl">
                Get in Touch
                </h2>
            </Reveal>

            <div className="space-y-4 text-gray-700 text-lg">
                <Reveal delay={200}><p>📧 Harsh.s@arcanumspace.com</p></Reveal>
                <Reveal delay={300}><p>📞 8004369347</p></Reveal>
                <Reveal delay={400}><p>📍 1101, AH Tower Antriksh Heights</p></Reveal>
                <Reveal delay={500}><p>Sector 81, Gurugram - 122004</p></Reveal>
            </div>
          </div>

          {/* Right Side - Map */}
          <Reveal delay={400} className="w-full h-100 rounded-2xl overflow-hidden border border-black/10">
            <iframe
              src="https://www.google.com/maps?q=Sector+81+Gurugram&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
