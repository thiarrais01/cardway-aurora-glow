import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const CTA = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-secondary opacity-90" />
      
      {/* Animated Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="scale" className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight">
            A hora de crescer é agora.
          </h2>
          
          <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto">
            Com a Cardway, inovação e confiança se encontram.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 font-semibold hover:scale-105 transition-transform"
            >
              Seja Cardway
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 font-semibold"
            >
              Fale com um especialista
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTA;
