"use client";

const ContactDetails = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h2>

            <div className="space-y-4 text-gray-700 text-lg">
              <p>📧 Harsh.s@arcanumspace.com</p>

              <p>📞 8004369347</p>

              <p>📍 1101, AH Tower Antriksh Heights</p>

              <p>Sector 81, Gurugram - 122004</p>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="w-full h-100 rounded-2xl overflow-hidden border border-black/10">
            <iframe
              src="https://www.google.com/maps?q=Sector+81+Gurugram&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
