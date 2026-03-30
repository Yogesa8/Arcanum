import UnderWorking from "@/components/UnderWorking";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="flex flex-col min-h-screen bg-brand-bg-subtle">
      <Header />
      <UnderWorking 
        message="404 - Page Not Found" 
        description="We couldn't find the page you're looking for. It might have been moved or never existed in the first place."
      />
      <Footer />
    </main>
  );
}
