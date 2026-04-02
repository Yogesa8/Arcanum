import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import "./globals.css"
import FeatureCarousel from "@/components/FeatureCarousel";
import KeyFeaturesSection from "@/components/KeyFeatures";
import ClientVoices from "@/components/ClientVoices";
import TeamSection from "@/components/TeamSection";
import DronePartsSection from "@/components/DronePartsSection";
import ContactSection from "@/components/ContactSection";
import TrustedBy from "@/components/TrustedBy";
import DroneFAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import MilitaryGallery from "@/components/MilitaryGallery";
import DronesSection from "@/components/DronesSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg-subtle">
      <div className="w-full">
        <Header />
        <div>
          <HeroSection />
          <TrustedBy />
          <KeyFeaturesSection />
          <FeatureCarousel />
          <DronesSection />
          <MilitaryGallery />
          <DronePartsSection />
          <TeamSection />
          <ClientVoices />
          <DroneFAQ />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
