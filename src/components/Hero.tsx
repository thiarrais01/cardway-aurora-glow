import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticlesBackground from "./ParticlesBackground";
import ParallaxText from "./ParallaxText";
import FloatingShapes from "./FloatingShapes";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Interactive Particles Network */}
      <ParticlesBackground />
      
      {/* Floating Shapes with Parallax */}
      <FloatingShapes />

      {/* Content with Parallax Effect */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <ParallaxText speed={2}>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight animate-fade-in-up">
              Conectamos você ao{" "}
              <span className="text-gradient relative">
                futuro dos pagamentos
                <span className="absolute -inset-1 bg-gradient-primary blur-2xl opacity-20 animate-pulse-glow -z-10" />
              </span>
            </h1>
          </ParallaxText>
          
          <ParallaxText speed={1.5}>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto font-light animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Tecnologia, confiança e crescimento em um só ecossistema digital.
            </p>
          </ParallaxText>

          <ParallaxText speed={1}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Button
                size="lg"
                className="gradient-primary hover-glow text-lg px-8 py-6 font-semibold relative overflow-hidden group"
              >
                <span className="relative z-10">Torne-se Cardway</span>
                <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-foreground/20 hover:border-primary hover:bg-primary/5 text-lg px-8 py-6 font-semibold relative overflow-hidden group"
              >
                <span className="relative z-10">Ver soluções</span>
                <span className="absolute inset-0 bg-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Button>
            </div>
          </ParallaxText>
        </div>

        {/* Scroll Down Indicator with Parallax */}
        <ParallaxText speed={0.5}>
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="relative">
              <ArrowDown className="w-6 h-6 text-primary relative z-10" />
              <div className="absolute inset-0 bg-primary blur-lg opacity-50 animate-pulse" />
            </div>
          </div>
        </ParallaxText>
      </div>
    </section>
  );
};

export default Hero;
