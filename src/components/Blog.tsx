import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const articles = [
  {
    title: "O futuro das recargas digitais",
    excerpt: "Como a tecnologia está transformando o varejo de serviços no Brasil.",
    category: "Tendências",
    readTime: "5 min",
  },
  {
    title: "Como vender mais com soluções integradas",
    excerpt: "Estratégias práticas para aumentar conversão e ticket médio.",
    category: "Negócios",
    readTime: "7 min",
  },
  {
    title: "Integrações API: como escalar o seu negócio",
    excerpt: "Guia completo para fintechs que querem crescer com tecnologia robusta.",
    category: "Tecnologia",
    readTime: "10 min",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 sm:py-32 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-slide" className="text-center space-y-4 mb-16">
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl">
            Inovação em <span className="text-gradient">movimento</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tendências e casos de sucesso do mercado de pagamentos digital.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {articles.map((article, index) => (
            <AnimatedSection
              key={index}
              animation="slide-up"
              delay={index * 150}
            >
              <article className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover-glow cursor-pointer h-full">
              <div className="h-48 bg-gradient-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="font-display font-semibold text-xl text-foreground group-hover:text-gradient transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">
                    Leitura: {article.readTime}
                  </span>
                  <span className="text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Ler mais <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade" delay={450} className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors group"
          >
            <span className="font-semibold text-lg">Explorar mais insights</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Blog;
