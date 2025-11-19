import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Ecosystem from "@/components/Ecosystem";
import Segments from "@/components/Segments";
import Testimonials from "@/components/Testimonials";
import Plans from "@/components/Plans";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const Index = () => {
  useSmoothScroll();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Ecosystem />
      <Segments />
      <Testimonials />
      <Plans />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
