import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-slide" className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              20 anos de conexões inteligentes
            </span>
          </div>
          
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            A Cardway une tecnologia,{" "}
            <span className="text-gradient">propósito e resultado</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Há mais de 20 anos, conectamos negócios, revendedores e fintechs em uma rede 
            que transforma o varejo e o mercado digital brasileiro.
          </p>

          <div className="pt-4">
            <a
              href="#ecosystem"
              className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors group"
            >
              <span className="font-semibold">Saiba mais sobre nós</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
