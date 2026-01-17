import HeroSection from "@/components/HeroSection";
import WhoWeAre from "@/components/WhoWeAre";
import ServiceCards from "@/components/ServiceCards";
import ClientsSection from "@/components/Clients";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhoWeAre />
      <ServiceCards />
      <ClientsSection />
      <WhyChooseUs />
      <ContactSection />
    </main>
  );
}
