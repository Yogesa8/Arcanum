import { ArrowRight } from "lucide-react";

const fields = [
  { name: "name", type: "text", placeholder: "Name" },
  { name: "email", type: "email", placeholder: "Email" },
  { name: "phone", type: "text", placeholder: "Phone" },
  { name: "company", type: "text", placeholder: "Company" },
];

export default function ContactSection() {
  return (
    <section className="bg-[#f3f3f3] px-5 py-12 sm:px-8 md:px-10 md:py-16 lg:px-14 lg:py-20">
      <div className="mx-auto max-w-[1720px]">
        <div className="relative overflow-visible rounded-[34px] bg-[#06111d]">
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[34px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://r.mobirisesite.com/2460423/assets/images/photo-1576400883215-7083980b6193.jpeg')",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[34px] bg-black/45"
          />

          <div className="relative z-10 px-4 py-12 sm:px-8 md:px-14 md:py-16 lg:px-[78px] lg:py-[96px]">
            <div className="mx-auto flex min-h-[540px] max-w-[1325px] flex-col items-center rounded-[34px] bg-white px-6 py-12 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:px-10 md:px-16 md:py-16 lg:px-24 lg:py-[92px]">
              <div className="mb-7 inline-flex rounded-full border border-[#d9b6ca] px-5 py-2 text-[14px] font-semibold text-black">
                Get In Touch
              </div>

              <h2 className="text-center font-['Manrope'] text-[34px] font-medium tracking-[-0.04em] text-black sm:text-[42px] md:text-[50px] lg:text-[54px]">
                We Want To Hear
              </h2>

              <form className="mt-10 flex w-full max-w-[680px] flex-col items-center md:mt-12">
                <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-[28px] md:gap-y-7">
                  {fields.map((field) => (
                    <input
                      key={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="h-[58px] w-full rounded-full border border-transparent bg-[#f3f3f3] px-8 text-[18px] text-[#222] outline-none transition placeholder:text-[#8d8d8d] focus:border-[#d9b6ca] focus:bg-white"
                    />
                  ))}
                </div>

                <button
                  type="submit"
                  className="mt-9 inline-flex h-[62px] items-center overflow-hidden rounded-full bg-[#d1b3c4] pl-8 pr-[6px] text-[15px] font-semibold text-white transition hover:brightness-[0.97] md:mt-12 md:self-end"
                >
                  <span className="whitespace-nowrap">Send Message</span>
                  <span className="ml-5 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-black">
                    <ArrowRight size={18} strokeWidth={2.2} />
                  </span>
                </button>
              </form>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 z-20 h-[58px] w-[168px] rounded-tr-[30px] bg-[#f3f3f3]"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-[58px] left-0 z-20 h-5 w-5 rounded-bl-[20px] bg-transparent shadow-[-10px_10px_0_10px_#f3f3f3]"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[168px] z-20 h-5 w-5 rounded-bl-[20px] bg-transparent shadow-[-10px_10px_0_10px_#f3f3f3]"
          />
        </div>
      </div>
    </section>
  );
}
