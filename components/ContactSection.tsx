"use client";

import { type FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import bg_img from "../public/bg_image.jpeg";
import { Reveal } from "./Animations";
import { toast } from "sonner";

const fields = [
  { name: "name", type: "text", placeholder: "Name" },
  { name: "email", type: "email", placeholder: "Email" },
  { name: "phone", type: "text", placeholder: "Phone" },
] as const;

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setLoading(true);
    formData.append("apiKey", "sf_f76f267de8c1f8ec5abe872c");

    try {
      const res = await fetch("https://api.staticforms.dev/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("✅ Message sent successfully!");
        form.reset();
        return;
      }

      toast.error("❌ Something went wrong!");
    } catch (error) {
      console.error(error);
      toast.error("❌ Error submitting form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-brand-bg-warm px-5 py-16 sm:px-8 md:px-10 md:py-20 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-8xl">
        <div className="relative overflow-visible rounded-[34px] bg-[#06111d]">
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[34px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${bg_img.src})`,
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[34px] bg-black/45"
          />

          <div className="relative z-10 px-4 py-12 sm:px-8 md:px-14 md:py-16 lg:px-19.5 lg:py-24">
            <Reveal
              delay={100}
              className="mx-auto flex min-h-135 max-w-331.25 flex-col items-center rounded-[34px] bg-white px-6 py-12 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:px-10 md:px-16 md:py-16 lg:px-24 lg:py-23"
            >
              <Reveal delay={200}>
                <div className="mb-7 inline-flex rounded-full border border-brand-secondary px-5 py-2 text-sm font-semibold tracking-[-0.02em] text-black">
                  Get In Touch
                </div>
              </Reveal>

              <Reveal delay={300}>
                <h2 className="text-center text-4xl font-black leading-tight text-black md:text-6xl">
                  Request a Consultation
                </h2>
              </Reveal>

              <form
                onSubmit={handleSubmit}
                className="mt-10 flex w-full max-w-170 flex-col items-center md:mt-12"
              >
                <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-7 md:gap-y-7">
                  {fields.map((field, index) => (
                    <Reveal key={field.name} delay={400 + index * 50}>
                      <input
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        required
                        className="h-14.5 w-full rounded-full border border-transparent bg-brand-bg-subtle px-8 text-lg text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-brand-secondary focus:bg-white"
                      />
                    </Reveal>
                  ))}

                  <Reveal delay={400 + fields.length * 50} className="md:col-span-2">
                    <textarea
                      name="message"
                      placeholder="Tell us about your requirements"
                      required
                      rows={6}
                      className="min-h-40 w-full rounded-[28px] border border-transparent bg-brand-bg-subtle px-8 py-5 text-lg text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-brand-secondary focus:bg-white resize-none"
                    />
                  </Reveal>
                </div>

                <Reveal delay={600} className="md:self-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-9 inline-flex h-15.5 items-center overflow-hidden rounded-full bg-brand-primary pl-8 pr-1.5 text-sm font-semibold text-white transition-all hover:bg-brand-primary-dark active:scale-95 md:mt-12 disabled:opacity-50"
                  >
                    <span className="whitespace-nowrap">
                      {loading ? "Sending..." : "Send Message"}
                    </span>
                    <span className="ml-5 flex h-12.5 w-12.5 items-center justify-center rounded-full bg-white text-black">
                      <ArrowRight size={18} strokeWidth={2.2} />
                    </span>
                  </button>
                </Reveal>
              </form>
            </Reveal>
          </div>

          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 z-20 h-10 w-20 md:h-14.5 md:w-42 rounded-tr-[30px] bg-brand-bg-warm"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-10 md:bottom-14.5 left-0 z-20 h-5 w-5 rounded-bl-[20px] bg-transparent shadow-[-10px_10px_0_10px_var(--brand-bg-warm)]"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-20 md:left-42 z-20 h-5 w-5 rounded-bl-[20px] bg-transparent shadow-[-10px_10px_0_10px_var(--brand-bg-warm)]"
          />
        </div>
      </div>
    </section>
  );
}
