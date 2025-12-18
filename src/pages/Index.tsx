import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CoursesSection from '@/components/CoursesSection';
import RoadmapSection from '@/components/RoadmapSection';
import TeamSection from '@/components/TeamSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsAppFAB';

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <RoadmapSection />
      <TeamSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
      <WhatsAppFAB />
    </main>
  );
};

export default Index;
