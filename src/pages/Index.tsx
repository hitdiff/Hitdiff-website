import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedWork from "@/components/home/FeaturedWork";
import AIStatSection from "@/components/home/AIStatSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => (
  <div>
    <HeroSection />
    <div className="gradient-divider" />
    <ServicesSection />
    <AIStatSection />
    <HowItWorks />
    <div className="gradient-divider" />
    <FeaturedWork />
    <div className="gradient-divider" />
    <TestimonialsSection />
    <div className="gradient-divider" />
    <ContactSection />
  </div>
);

export default Index;
