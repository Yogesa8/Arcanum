import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import "./globals.css"


export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f3f3] p-2 sm:p-3 lg:p-4">
      <div className="rounded-[34px] bg-[#f3f3f3]">
        <Header />
        <div className="mt-3">
          <HeroSection />
        </div>
      </div>
    </main>
  );
}
