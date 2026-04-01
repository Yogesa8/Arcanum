import React from "react";

export const DroneSkeleton = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white md:flex-row">
      {/* Left Side: 3D Model Placeholder */}
      <div className="relative flex h-[50vh] w-full items-center justify-center bg-neutral-100 md:h-screen md:w-3/5">
        <div className="h-64 w-64 animate-pulse rounded-full bg-neutral-200" />
        <div className="absolute top-6 left-8 h-4 w-40 animate-pulse rounded bg-neutral-200" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 h-2 w-32 animate-pulse rounded bg-neutral-200" />
      </div>

      {/* Right Side: Info Placeholder */}
      <div className="flex w-full flex-col p-8 md:h-screen md:w-2/5 md:p-12 md:justify-center overflow-y-auto">
        <div className="mb-4 h-6 w-32 animate-pulse rounded-full bg-neutral-200" />
        <div className="mb-6 h-12 w-3/4 animate-pulse rounded bg-neutral-200 md:h-20" />
        <div className="mb-10 space-y-3">
          <div className="h-4 w-full animate-pulse rounded bg-neutral-200" />
          <div className="h-4 w-[90%] animate-pulse rounded bg-neutral-200" />
          <div className="h-4 w-[95%] animate-pulse rounded bg-neutral-200" />
        </div>

        <div className="space-y-6">
          <div className="h-4 w-40 animate-pulse rounded bg-neutral-200" />
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex justify-between border-b border-neutral-100 pb-3">
                <div className="h-4 w-24 animate-pulse rounded bg-neutral-200" />
                <div className="h-4 w-16 animate-pulse rounded bg-neutral-200" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 h-14 w-full animate-pulse rounded-full bg-neutral-200" />
      </div>
    </div>
  );
};
