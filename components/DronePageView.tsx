"use client";

import { Suspense, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { ChevronLeft, Share2, Shield } from "lucide-react";
import { GLTF } from "three-stdlib";
import Link from "next/link";
import Image from "next/image";
import { Drone } from "@/lib/drones";

type GLTFResult = GLTF & {
  nodes: Record<string, unknown>;
  materials: Record<string, unknown>;
};

interface DroneModelProps {
  url: string;
}

function DroneModel({ url }: DroneModelProps) {
  const { scene } = useGLTF(url) as GLTFResult;
  // Using original working scale and position as a base, slightly increased
  return <primitive object={scene} scale={2.0} position={[0, -0.7, 0]} />;
}

interface DronePageViewProps {
  drone: Drone;
}

export default function DronePageView({ drone }: DronePageViewProps) {
  const previews = useMemo(
    () => [
      { id: "3d", type: "3d" as const, label: "3D Preview" },
      { id: "img-main", type: "image" as const, src: drone.bgImage.src, label: `${drone.tag} view 1` },
      { id: "img-2", type: "image" as const, src: "/drone/drone2.jpg", label: `${drone.tag} view 2` },
      { id: "img-3", type: "image" as const, src: "/drone/drone3.jpg", label: `${drone.tag} view 3` },
    ],
    [drone.bgImage.src, drone.tag]
  );
  const [activePreview, setActivePreview] = useState<{ type: "3d" | "image"; src?: string }>({
    type: "3d",
  });

  return (
    <div className="relative flex min-h-screen flex-col bg-white lg:flex-row overflow-hidden">
      
      {/* Back Button & Top Navigation */}
      <div className="absolute top-6 left-6 z-50 flex gap-4">
        <Link 
          href="/"
          className="flex items-center justify-center rounded-full bg-white/80 p-3 text-slate-900 shadow-lg backdrop-blur-md transition-all hover:bg-brand-primary hover:text-white active:scale-95"
        >
          <ChevronLeft size={24} />
        </Link>
      </div>

      <div className="absolute top-6 right-6 z-50">
        <button 
          className="flex items-center justify-center rounded-full bg-white/80 p-3 text-slate-900 shadow-lg backdrop-blur-md transition-all hover:bg-brand-primary hover:text-white active:scale-95"
        >
          <Share2 size={20} />
        </button>
      </div>

      {/* Left Side: 3D Model View */}
      <div className="relative flex h-[50vh] w-full items-center justify-center bg-neutral-50 lg:h-screen lg:w-3/5">
        <div className="absolute top-8 left-20 z-10 hidden lg:block">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-neutral-400" />
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">Interactive 3D View HUD</h2>
          </div>
        </div>
        
        <div className="h-full w-full">
          <div className="relative h-full w-full overflow-hidden">
            <div
              className={`absolute inset-0 transition-all duration-300 ease-out ${
                activePreview.type === "3d"
                  ? "scale-100 opacity-100"
                  : "pointer-events-none scale-[0.985] opacity-0"
              }`}
            >
              <Canvas camera={{ position: [0, 1.5, 4], fov: 45 }} className="cursor-grab active:cursor-grabbing">
                <ambientLight intensity={0.8} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />
                <pointLight position={[-10, -10, -10]} />
                <Suspense fallback={null}>
                  <DroneModel url={drone.modelUrl} />
                </Suspense>
                <OrbitControls autoRotate autoRotateSpeed={0.5} enableDamping />
              </Canvas>
            </div>

            {previews
              .filter((preview) => preview.type === "image")
              .map((preview) => {
                const isActive =
                  activePreview.type === "image" && activePreview.src === preview.src;

                return (
                  <div
                    key={preview.id}
                    className={`absolute inset-0 transition-all duration-300 ease-out ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "pointer-events-none scale-[0.985] opacity-0"
                    }`}
                  >
                    <Image
                      src={preview.src!}
                      alt={preview.label}
                      fill
                      priority={preview.src === drone.bgImage.src}
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                    />
                  </div>
                );
              })}
          </div>
        </div>

        <div className="absolute left-4 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-3 md:left-6">
          {previews.map((preview) => {
            const isActive =
              activePreview.type === preview.type &&
              (preview.type === "3d" || activePreview.src === preview.src);

            return (
              <button
                key={preview.id}
                type="button"
                onClick={() =>
                  setActivePreview(
                    preview.type === "3d"
                      ? { type: "3d" }
                      : { type: "image", src: preview.src }
                  )
                }
                aria-label={preview.label}
                className={`group relative h-14 w-14 overflow-hidden rounded-2xl border bg-white/80 p-1 shadow-lg backdrop-blur-md transition-all duration-200 ${
                  isActive
                    ? "border-brand-primary ring-2 ring-brand-primary/25"
                    : "border-white/70 hover:border-brand-primary/60"
                }`}
              >
                {preview.type === "3d" ? (
                  <div className="flex h-full w-full items-center justify-center rounded-xl bg-slate-900 text-xs font-black uppercase tracking-[0.2em] text-white">
                    3D
                  </div>
                ) : (
                  <Image
                    src={preview.src!}
                    alt={preview.label}
                    fill
                    sizes="56px"
                    className="rounded-xl object-cover"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* HUD Elements */}
        <div className="absolute bottom-10 left-10 hidden lg:block text-neutral-400">
          <div className="space-y-1 rounded-sm border-l-2 border-brand-primary pl-4 py-2">
            <p className="text-[10px] font-bold">COORDINATES</p>
            <p className="font-mono text-xs">34.0522° N, 118.2437° W</p>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 hidden lg:block">
          <div className="rounded-full bg-black/5 px-4 py-2 backdrop-blur-md">
            <p className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase">360° Inspection Active</p>
          </div>
        </div>
      </div>

      {/* Right Side: Detailed Info */}
      <div className="flex w-full flex-col bg-white p-8 lg:h-screen lg:w-2/5 lg:p-16 lg:justify-center overflow-y-auto">
        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand-secondary/20 px-4 py-1.5 text-xs font-bold text-brand-primary">
          <span className="h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
          Mission-Ready UAV
        </div>
        
        <h1 className="mb-6 text-4xl font-black leading-tight text-slate-900 md:text-6xl">
          {drone.tag}
        </h1>
        
        <p className="mb-12 text-lg leading-relaxed text-neutral-500">
          {drone.description}
        </p>

        <div className="mb-12 space-y-8">
          <h3 className="text-sm font-black uppercase tracking-[0.15em] text-neutral-400">Mission Parameters</h3>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="group flex items-center justify-between border-b border-neutral-100 pb-4 transition-colors hover:border-brand-primary">
              <span className="font-semibold text-neutral-500">Maximum Speed</span>
              <span className="text-xl font-black text-slate-900">{drone.specs.speed}</span>
            </div>
            <div className="group flex items-center justify-between border-b border-neutral-100 pb-4 transition-colors hover:border-brand-primary">
              <span className="font-semibold text-neutral-500">Flight Endurance</span>
              <span className="text-xl font-black text-slate-900">{drone.specs.flightTime}</span>
            </div>
            <div className="group flex items-center justify-between border-b border-neutral-100 pb-4 transition-colors hover:border-brand-primary">
              <span className="font-semibold text-neutral-500">Sensor Payload</span>
              <span className="text-xl font-black text-slate-900">{drone.specs.camera}</span>
            </div>
            <div className="group flex items-center justify-between border-b border-neutral-100 pb-4 transition-colors hover:border-brand-primary">
              <span className="font-semibold text-neutral-500">Operational Range</span>
              <span className="text-xl font-black text-slate-900">{drone.specs.range}</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="group relative mt-10 w-full overflow-hidden rounded-full bg-brand-primary p-5 transition-all hover:bg-brand-primary-dark active:scale-[0.98]"
        >
          <div className="relative z-10 flex items-center justify-center gap-3 text-lg font-bold text-white">
            Contact Our Team
          </div>
          <div className="absolute inset-0 translate-y-full bg-slate-900 transition-transform duration-300 group-hover:translate-y-0" />
        </button>
      </div>
    </div>
  );
}
