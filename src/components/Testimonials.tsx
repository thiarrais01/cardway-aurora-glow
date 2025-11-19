import { Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    text: "Com a Cardway, aumentei meu faturamento em 40%. A integração é perfeita e o suporte é excepcional.",
    author: "João Silva",
    role: "Empório Real",
  },
  {
    text: "Finalmente encontrei um parceiro que entende as necessidades do varejo moderno. Tecnologia de verdade.",
    author: "Maria Santos",
    role: "Rede FreshMart",
  },
  {
    text: "Nossa fintech cresceu 300% após integrar a API Cardway. Escalabilidade e confiabilidade impressionantes.",
    author: "Carlos Oliveira",
    role: "PayTech Solutions",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-muted/30 overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-slide" className="text-center space-y-4 mb-16">
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl">
            Parceiros que <span className="text-gradient">crescem conosco</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={index}
              animation="slide-up"
              delay={index * 150}
              className="bg-card border border-border rounded-2xl p-8 space-y-6 hover:border-primary/50 transition-all duration-300 hover-glow"
            >
              <Quote className="w-10 h-10 text-primary/40" />
              
              <p className="text-lg text-foreground font-medium leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
