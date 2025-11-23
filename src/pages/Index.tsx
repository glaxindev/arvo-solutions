import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import ServicesSection from "@/components/ServicesSection";
import ReadySection from "@/components/ReadySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhyChoose />
      <ServicesSection />
      <ReadySection />
      <Footer />
    </div>
  );
};

export default Index;
