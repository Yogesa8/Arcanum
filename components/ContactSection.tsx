import { ArrowRight } from "lucide-react";
import bg_img from "../public/bg_image.jpeg"

const fields = [
  { name: "name", type: "text", placeholder: "Name" },
  { name: "email", type: "email", placeholder: "Email" },
  { name: "phone", type: "text", placeholder: "Phone" },
  { name: "company", type: "text", placeholder: "Company" },
];

export default function ContactSection() {
  return (
    <section className="bg-[#f3f3f3] px-5 py-20 sm:px-8 md:px-10 md:py-24 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-430">
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
            <div className="mx-auto flex min-h-135 max-w-331.25 flex-col items-center rounded-[34px] bg-white px-6 py-12 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:px-10 md:px-16 md:py-16 lg:px-24 lg:py-23">
              <div className="mb-7 inline-flex rounded-full border border-[#d9b6ca] px-5 py-2 text-[14px] font-semibold text-black">
                Get In Touch
              </div>

              <h2 className="text-center font-['Manrope'] text-[34px] font-medium tracking-[-0.04em] text-black sm:text-[42px] md:text-[50px] lg:text-[54px]">
                We Want To Hear
              </h2>

              <form className="mt-10 flex w-full max-w-170 flex-col items-center md:mt-12">
                <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-7 md:gap-y-7">
                  {fields.map((field) => (
                    <input
                      key={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="h-14.5 w-full rounded-full border border-transparent bg-[#f3f3f3] px-8 text-[18px] text-[#222] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#d9b6ca] focus:bg-white"
                    />
                  ))}
                </div>

                <button
                  type="submit"
                  className="mt-9 inline-flex h-15.5 items-center overflow-hidden rounded-full bg-[#d1b3c4] pl-8 pr-1.5 text-[15px] font-semibold text-white transition hover:brightness-[0.97] md:mt-12 md:self-end"
                >
                  <span className="whitespace-nowrap">Send Message</span>
                  <span className="ml-5 flex h-12.5 w-12.5 items-center justify-center rounded-full bg-white text-black">
                    <ArrowRight size={18} strokeWidth={2.2} />
                  </span>
                </button>
              </form>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 z-20 h-14.5 w-42 rounded-tr-[30px] bg-[#f3f3f3]"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-14.5 left-0 z-20 h-5 w-5 rounded-bl-[20px] bg-transparent shadow-[-10px_10px_0_10px_#f3f3f3]"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-42 z-20 h-5 w-5 rounded-bl-[20px] bg-transparent shadow-[-10px_10px_0_10px_#f3f3f3]"
          />
        </div>
      </div>
    </section>
  );
}
