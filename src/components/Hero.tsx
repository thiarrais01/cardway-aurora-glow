import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight">
            Conectamos você ao{" "}
            <span className="text-gradient">futuro dos pagamentos</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Tecnologia, confiança e crescimento em um só ecossistema digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="gradient-primary hover-glow text-lg px-8 py-6 font-semibold"
            >
              Torne-se Cardway
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-foreground/20 hover:border-primary hover:bg-primary/5 text-lg px-8 py-6 font-semibold"
            >
              Ver soluções
            </Button>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
