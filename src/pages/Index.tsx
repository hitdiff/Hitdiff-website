import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import HowItWorks from "@/components/home/HowItWorks";
import AboutSnippet from "@/components/home/AboutSnippet";
import FeaturedWork from "@/components/home/FeaturedWork";
import ContactSection from "@/components/home/ContactSection";

const Index = () => (
  <div>
    <HeroSection />
    <div className="gradient-divider" />
    <ServicesSection />
    <div className="gradient-divider" />
    <HowItWorks />
    <div className="gradient-divider" />
    <AboutSnippet />
    <div className="gradient-divider" />
    <FeaturedWork />
    <div className="gradient-divider" />
    <ContactSection />
  </div>
);

export default Index;
