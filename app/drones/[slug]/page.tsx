import { notFound } from "next/navigation";
import { drones } from "@/lib/drones";
import DronePageView from "@/components/DronePageView";
import ContactSection from "@/components/ContactSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const drone = drones.find((d) => d.slug === slug);

  if (!drone) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <DronePageView drone={drone} />      
    </main>
  );
}

export async function generateStaticParams() {
  return drones.map((drone) => ({
    slug: drone.slug,
  }));
}
