import { StaticImageData } from "next/image";
import drone1 from "../public/drone/drone1.jpg";
import drone2 from "../public/drone/drone2.jpg";
import drone3 from "../public/drone/drone3.jpg";

export type Drone = {
  id: string;
  slug: string;
  tag: string;
  title: string;
  description: string;
  specs: {
    speed: string;
    flightTime: string;
    camera: string;
    range: string;
  };
  variant?: "light" | "teal" | "dark";
  bgImage: StaticImageData;
  modelUrl: string;
};

export const drones: Drone[] = [
  {
    id: "1",
    slug: "recon-x",
    tag: "Recon-X Surveillance",
    title: "Long-range reconnaissance drone for real-time intelligence gathering.",
    description: "The Recon-X is our premier surveillance platform, engineered for extended duration flights and high-altitude monitoring. It utilizes advanced AI to detect and track movement across vast distances, providing real-time data to command centers.",
    specs: {
      speed: "85 km/h",
      flightTime: "90 min",
      camera: "8K ISR / Night Vision",
      range: "25 km",
    },
    bgImage: drone1,
    variant: "light",
    modelUrl: "/drone.glb",
  },
  {
    id: "2",
    slug: "falcon-strike",
    tag: "Falcon Strike UAV",
    title: "High-speed tactical drone designed for rapid deployment.",
    description: "Built for speed and precision, the Falcon Strike is a tactical UAV designed to reach target locations in minutes. Its compact frame allows for agile maneuvering in urban environments where larger aircraft cannot operate.",
    specs: {
      speed: "140 km/h",
      flightTime: "35 min",
      camera: "4K Tactical Precision",
      range: "12 km",
    },
    bgImage: drone2,
    variant: "teal",
    modelUrl: "/drone.glb",
  },
  {
    id: "3",
    slug: "sentinel-pro",
    tag: "Sentinel Pro Drone",
    title: "AI-powered autonomous drone for border and perimeter security.",
    description: "The Sentinel Pro is a persistent security platform. It is designed to operate autonomously along perimeters, using thermal imaging and multi-spectral sensors to secure critical infrastructure and national borders.",
    specs: {
      speed: "60 km/h",
      flightTime: "120 min",
      camera: "Thermal + LiDAR",
      range: "40 km",
    },
    bgImage: drone3,
    variant: "dark",
    modelUrl: "/drone.glb",
  },
];
