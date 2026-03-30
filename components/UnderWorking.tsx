import Link from 'next/link';
import { Home as HomeIcon } from 'lucide-react';

interface UnderWorkingProps {
  message?: string;
  description?: string;
}

export default function UnderWorking({ 
  message = "Page Under Construction", 
  description = "We're currently working hard to bring you something amazing. Please check back soon!"
}: UnderWorkingProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-20 px-5 text-center sm:px-10">
      <div className="max-w-2xl">
        <span className="mb-4 inline-flex rounded-full border border-brand-secondary px-5 py-2 text-sm font-semibold tracking-[-0.02em] text-black">
          Coming Soon
        </span>
        
        <h1 className="mb-6 text-5xl font-black leading-tight text-brand-primary md:text-7xl">
          {message}
        </h1>
        
        <p className="mx-auto mb-12 max-w-lg text-lg leading-relaxed text-neutral-500 md:text-xl">
          {description}
        </p>

        <Link 
          href="/" 
          className="inline-flex h-15.5 items-center overflow-hidden rounded-full bg-brand-primary pl-8 pr-1.5 text-sm font-semibold text-white transition-all hover:bg-brand-primary-dark active:scale-95"
        >
          <span className="whitespace-nowrap">Go Back Home</span>
          <span className="ml-5 flex h-12.5 w-12.5 items-center justify-center rounded-full bg-white text-black">
            <HomeIcon size={18} strokeWidth={2.2} />
          </span>
        </Link>
      </div>
    </div>
  );
}
