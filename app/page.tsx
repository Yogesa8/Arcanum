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
import ContactDetails from "@/components/ContactDetails";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f3f3] p-2 sm:p-3 lg:p-4 ">
      <div className=" bg-[#f3f3f3] w-auto">
        <Header />
        <div>
          <HeroSection />
          <FeatureCarousel />
          <ClientVoices />
          <KeyFeaturesSection/>
          <TeamSection/>
          <DronePartsSection/>
          <ContactSection/>
          <TrustedBy/>
          <DroneFAQ/>
          <ContactDetails/>
          <Footer/>
        </div>
      </div>
    </main>
  );
}
