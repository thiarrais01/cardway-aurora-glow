import { Smartphone, CreditCard, Tv, Code } from "lucide-react";

const ecosystemItems = [
  {
    icon: CreditCard,
    title: "Maquininha Card",
    description: "Pagamentos simples, rápidos e seguros.",
  },
  {
    icon: Smartphone,
    title: "App Card",
    description: "Venda, recarregue e gerencie tudo no celular.",
  },
  {
    icon: Tv,
    title: "CardMedia",
    description: "Mídia inteligente nos pontos de venda.",
  },
  {
    icon: Code,
    title: "CardHub API",
    description: "Integração total via uma única API.",
  },
];

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl">
            Tudo integrado. <span className="text-gradient">Tudo Cardway.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um ecossistema completo de soluções digitais para o seu negócio crescer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {ecosystemItems.map((item, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              
              <h3 className="font-display font-semibold text-xl mb-3 text-foreground group-hover:text-gradient transition-colors">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
