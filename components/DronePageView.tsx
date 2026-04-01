"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage, Environment } from "@react-three/drei";
import { ChevronLeft, Share2, Shield } from "lucide-react";
import { GLTF } from "three-stdlib";
import Link from "next/link";
import { Drone } from "@/lib/drones";

type GLTFResult = GLTF & {
  nodes: any;
  materials: any;
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

        <button className="group relative mt-10 w-full overflow-hidden rounded-full bg-brand-primary p-5 transition-all hover:bg-brand-primary-dark active:scale-[0.98]">
          <div className="relative z-10 flex items-center justify-center gap-3 text-lg font-bold text-white">
            Initialize Deployment Protocol
          </div>
          <div className="absolute inset-0 translate-y-full bg-slate-900 transition-transform duration-300 group-hover:translate-y-0" />
        </button>
      </div>
    </div>
  );
}
