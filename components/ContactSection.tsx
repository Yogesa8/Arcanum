import { ArrowRight } from "lucide-react";
import bg_img from "../public/bg_image.jpeg"
import { Reveal } from "./Animations";

const fields = [
  { name: "name", type: "text", placeholder: "Name" },
  { name: "email", type: "email", placeholder: "Email" },
  { name: "phone", type: "text", placeholder: "Phone" },
  { name: "company", type: "text", placeholder: "Company" },
];

export default function ContactSection() {
  return (
    <section className="bg-brand-bg-pink px-5 py-16 sm:px-8 md:px-10 md:py-20 lg:px-16 lg:py-20">
      <div className="max-w-8xl mx-auto">
        <div className="relative overflow-visible rounded-[34px] bg-[#06111d]">
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[34px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${bg_img.src})`
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[34px] bg-black/45"
          />

          <div className="relative z-10 px-4 py-12 sm:px-8 md:px-14 md:py-16 lg:px-19.5 lg:py-24">
            <Reveal delay={100} className="mx-auto flex min-h-135 max-w-331.25 flex-col items-center rounded-[34px] bg-white px-6 py-12 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:px-10 md:px-16 md:py-16 lg:px-24 lg:py-23">
              <Reveal delay={200}>
                <div className="mb-7 inline-flex rounded-full border border-brand-secondary px-5 py-2 text-sm font-semibold text-black">
                  Get In Touch
                </div>
              </Reveal>

              <Reveal delay={300}>
                <h2 className="text-center text-4xl font-black leading-tight text-black md:text-6xl">
                  Request a Consultation
                </h2>
              </Reveal>

              <form className="mt-10 flex w-full max-w-170 flex-col items-center md:mt-12">
                <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-7 md:gap-y-7">
                  {fields.map((field, index) => (
                    <Reveal key={field.name} delay={400 + index * 50}>
                      <input
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="h-14.5 w-full rounded-full border border-transparent bg-brand-bg-subtle px-8 text-lg text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-brand-secondary focus:bg-white"
                      />
                    </Reveal>
                  ))}
                </div>

                <Reveal delay={600} className="md:self-end">
                  <button
                    type="submit"
                    className="mt-9 inline-flex h-15.5 items-center overflow-hidden rounded-full bg-brand-primary pl-8 pr-1.5 text-sm font-semibold text-white transition-all hover:bg-brand-primary-dark hover:brightness-[0.97] active:scale-95 md:mt-12"
                  >
                    <span className="whitespace-nowrap">Send Message</span>
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
            className="absolute bottom-0 left-0 z-20 h-14.5 w-42 rounded-tr-[30px] bg-brand-bg-subtle"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-14.5 left-0 z-20 h-5 w-5 rounded-bl-[20px] bg-transparent shadow-[-10px_10px_0_10px_var(--brand-bg-subtle)]"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-42 z-20 h-5 w-5 rounded-bl-[20px] bg-transparent shadow-[-10px_10px_0_10px_var(--brand-bg-subtle)]"
          />
        </div>
      </div>
    </section>
  );
}
