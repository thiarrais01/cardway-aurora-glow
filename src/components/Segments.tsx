import { Store, Briefcase, Cog } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const segments = [
  {
    icon: Store,
    title: "Lojistas",
    description: "Mais vendas e menos atrito.",
    benefits: ["Aceite todos os meios de pagamento", "Antecipação de recebíveis", "Dashboard em tempo real"],
  },
  {
    icon: Briefcase,
    title: "Revendedores",
    description: "Novas fontes de renda com serviços digitais.",
    benefits: ["Comissões recorrentes", "Portfólio completo", "Suporte especializado"],
  },
  {
    icon: Cog,
    title: "Fintechs",
    description: "Integre, escale e inove com nossa API.",
    benefits: ["API robusta e documentada", "Infraestrutura escalável", "Compliance garantido"],
  },
];

const Segments = () => {
  return (
    <section id="segments" className="py-24 sm:py-32 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-slide" className="text-center space-y-4 mb-16">
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl">
            Para quem <span className="text-gradient">criamos valor</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções sob medida para cada segmento do ecossistema de pagamentos.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {segments.map((segment, index) => (
            <AnimatedSection
              key={index}
              animation="scale"
              delay={index * 150}
              className="text-center space-y-6"
            >
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-primary">
                  <segment.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-display font-bold text-2xl text-foreground">
                  {segment.title}
                </h3>
                <p className="text-lg text-primary font-medium">
                  {segment.description}
                </p>
              </div>

              <ul className="space-y-2 text-left max-w-xs mx-auto">
                {segment.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Segments;
