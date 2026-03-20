import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Props {
  name: string;
  role: string;
  image: string;
  className?: string;
}

export default function TeamCard({
  name,
  role,
  image,
  className = "",
}: Props) {
  return (
    <article className={`group relative z-10 hover:z-20 w-full max-w-102.5 ${className}`.trim()}>
      <div className="relative aspect-[0.82] overflow-visible rounded-[30px] bg-[#dfe7ea]">
        <div className="absolute inset-0 overflow-hidden rounded-[30px]">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 85vw, (max-width: 1280px) 34vw, 410px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/18 via-black/0 to-transparent" />
        </div>

        <div className="absolute -right-1 -top-1 z-20 h-19 w-19 rounded-bl-[28px] bg-[#fbfaf8]">
          <span className="absolute -left-5 top-0 h-5 w-5 rounded-tr-[20px] shadow-[10px_-10px_0_10px_#fbfaf8]" />
          <span className="absolute bottom-5- right-0 h-5 w-5 rounded-tr-[20px] shadow-[10px_-10px_0_10px_#fbfaf8]" />
          <div
            className="absolute right-3 top-3 flex h-13 w-13 items-center justify-center rounded-full bg-[#d8bfd0] text-[#20181d] transition-all duration-300 group-hover:scale-105 group-hover:rotate-45 group-hover:bg-[#3d3138] group-hover:text-white"
          >
            <ArrowRight size={22} strokeWidth={2.1} />
          </div>
        </div>

        <div
          className="absolute -bottom-12 left-1/2 z-10 w-[82%] -translate-x-1/2 rounded-[28px] border border-white/35 bg-linear-to-b from-white/30 via-white/16 to-white/72 px-6 py-5 text-center shadow-[0_18px_40px_rgba(61,45,33,0.14)] backdrop-blur-xl transition-all duration-300 group-hover:border-[#cfa66f]/40 group-hover:from-[#7d562d]/70 group-hover:via-[#9f6c35]/42 group-hover:to-white/78"
        >
          <p className="text-sm font-semibold tracking-[-0.01em] text-white/90 transition-colors duration-300 group-hover:text-white">
            {role}
          </p>
          <h3 className="mt-1 text-[clamp(2rem,3vw,2.6rem)] font-medium leading-none tracking-[-0.05em] text-white transition-colors duration-300 group-hover:text-[#fff8f0]">
            {name}
          </h3>
        </div>
      </div>
    </article>
  );
}
