import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";

interface Props {
  name: string;
  role: string;
  image: "";
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

        <div className="absolute right-0 top-0 z-20 h-15 w-15 rounded-bl-[30px] bg-[#fdf9fa] pl-2.5 pb-2.5">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#2B411C] text-black transition-all group-hover:rotate-45 group-hover:bg-[#3d3138] group-hover:text-white">
            <ArrowRight size={22} strokeWidth={2.1} className="text-white"/>
          </div>
          <div className="absolute -left-5 top-0 h-5 w-5 rounded-tr-[30px] bg-transparent shadow-[3px_-5px_0_3px_#fdf9fa]" />
          <div className="absolute right-0 top-15 h-5 w-5 rounded-tr-[30px] bg-transparent shadow-[3px_-5px_0_3px_#fdf9fa]" />
        </div>

        <div
          className="absolute -bottom-12 left-1/2 z-10 w-[82%] -translate-x-1/2 rounded-[28px] border border-white/35 bg-linear-to-b from-white/30 via-white/16 to-white/72 px-6 py-5 text-center shadow-[0_18px_40px_rgba(61,45,33,0.14)] backdrop-blur-xl transition-all duration-300 group-hover:border-[#cfa66f]/40 group-hover:from-[#7d562d]/70 group-hover:via-[#9f6c35]/42 group-hover:to-white/78"
        >
          <p className="text-sm font-semibold tracking-[-0.01em] text-white/90 transition-colors duration-300 group-hover:text-white">
            {role}
          </p>
          <h3 className="mt-1 text-[clamp(2rem,3vw,2.6rem)] font-medium leading-none tracking-[-0.05em] text-[#2b411c] transition-colors duration-300 group-hover:text-[#fff8f0]">
            {name}
          </h3>
        </div>
      </div>
    </article>
  );
}
