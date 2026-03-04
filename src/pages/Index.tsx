import HeroSection from "@/components/home/HeroSection";
import CredibilityStrip from "@/components/home/CredibilityStrip";
import ServicesSection from "@/components/home/ServicesSection";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedWork from "@/components/home/FeaturedWork";
import AboutSection from "@/components/home/AboutSection";
import AIPoweredSection from "@/components/home/AIPoweredSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => (
  <div>
    <HeroSection />
    <CredibilityStrip />
    <div className="gradient-divider" />
    <ServicesSection />
    <div className="gradient-divider" />
    <HowItWorks />
    <div className="gradient-divider" />
    <FeaturedWork />
    <div className="gradient-divider" />
    <AboutSection />
    <div className="gradient-divider" />
    <AIPoweredSection />
    <div className="gradient-divider" />
    <ContactSection />
  </div>
);

export default Index;
