
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/useTranslation";

const Index = () => {
  const { language } = useTranslation();
  const [renderKey, setRenderKey] = useState(0);

  // Force complete re-render when language changes
  useEffect(() => {
    console.log('Language changed to:', language);
    setRenderKey(prev => prev + 1);
    
    // Force a small delay to ensure all components update
    setTimeout(() => {
      setRenderKey(prev => prev + 1);
    }, 50);
  }, [language]);

  return (
    <div className="min-h-screen" key={`${language}-${renderKey}`}>
      <Header key={`header-${language}-${renderKey}`} />
      <HeroSection key={`hero-${language}-${renderKey}`} />
      <ServicesSection key={`services-${language}-${renderKey}`} />
      <PortfolioSection key={`portfolio-${language}-${renderKey}`} />
      <AboutSection key={`about-${language}-${renderKey}`} />
      <ContactSection key={`contact-${language}-${renderKey}`} />
      <Footer key={`footer-${language}-${renderKey}`} />
    </div>
  );
};

export default Index;
