"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { X } from "lucide-react";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: Record<string, unknown>;
  materials: Record<string, unknown>;
};

interface DroneModelProps {
  url: string;
}

function DroneModel({ url }: DroneModelProps) {
  const { scene } = useGLTF(url) as GLTFResult;
  return <primitive object={scene} scale={1.5} position={[0, -0.5, 0]} />;
}

interface DroneViewerProps {
  name: string;
  description: string;
  specs: {
    speed: string;
    flightTime: string;
    camera: string;
    range: string;
  };
  modelUrl: string;
  onClose: () => void;
}

export default function DroneViewer({
  name,
  description,
  specs,
  modelUrl,
  onClose,
}: DroneViewerProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-10">
      <div className="relative w-full max-w-6xl h-[90vh] md:h-[80vh] bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white md:text-black hover:bg-brand-primary hover:text-white transition-all shadow-lg"
        >
          <X size={24} />
        </button>

        {/* Left Side: 3D Model View */}
        <div className="w-full h-1/2 md:h-full md:w-3/5 bg-neutral-100 flex items-center justify-center relative">
          <div className="absolute top-6 left-8 z-10">
            <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-400">Interactive 3D View</h2>
          </div>
          
          <Canvas camera={{ position: [0, 1.5, 4], fov: 45 }} className="cursor-grab active:cursor-grabbing">
            <ambientLight intensity={0.8} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />
            <pointLight position={[-10, -10, -10]} />
            <Suspense fallback={null}>
              <DroneModel url={modelUrl} />
            </Suspense>
            <OrbitControls autoRotate autoRotateSpeed={0.5} enableDamping />
          </Canvas>

          {/* Hint Overlay */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-tighter text-neutral-400 pointer-events-none">
            Rotate 360° • Zoom • Pan
          </div>
        </div>

        {/* Right Side: Detailed Info */}
        <div className="w-full h-1/2 md:h-full md:w-2/5 p-8 md:p-12 bg-white flex flex-col overflow-y-auto">
          <div className="mb-4 inline-flex w-fit rounded-full bg-brand-secondary/20 px-3 py-1 text-xs font-bold text-brand-primary">
            Mission-Ready UAV
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-black leading-tight mb-6">
            {name}
          </h1>
          
          <p className="mb-10 text-neutral-500 text-base md:text-lg leading-relaxed">
            {description}
          </p>

          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400">Technical Specifications</h3>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                <span className="text-neutral-500">Maximum Speed</span>
                <span className="font-bold text-black">{specs.speed}</span>
              </div>
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                <span className="text-neutral-500">Flight Endurance</span>
                <span className="font-bold text-black">{specs.flightTime}</span>
              </div>
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                <span className="text-neutral-500">ISR Capabilities</span>
                <span className="font-bold text-black">{specs.camera}</span>
              </div>
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                <span className="text-neutral-500">Operational Range</span>
                <span className="font-bold text-black">{specs.range}</span>
              </div>
            </div>
          </div>

          <button className="mt-auto pt-8 w-full group">
            <div className="flex items-center justify-center rounded-full bg-brand-primary py-4 px-6 text-white font-bold transition-all hover:bg-brand-primary-dark active:scale-95">
              Request Deployment Details
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
