import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Essencial",
    target: "Microempreendedores",
    price: "1,99%",
    features: [
      "Sem mensalidade",
      "Maquininha gratuita",
      "App completo",
      "Suporte via chat",
      "Pagamento em 1 dia útil",
    ],
  },
  {
    name: "Profissional",
    target: "Lojas e redes",
    price: "1,79%",
    featured: true,
    features: [
      "Dashboard avançado",
      "Antecipação automática",
      "Múltiplos usuários",
      "Suporte prioritário",
      "Recebimento no mesmo dia",
      "Relatórios personalizados",
    ],
  },
  {
    name: "Corporativo",
    target: "Fintechs",
    price: "Sob consulta",
    features: [
      "API completa",
      "White label",
      "Suporte dedicado 24/7",
      "SLA garantido",
      "Consultoria técnica",
      "Infraestrutura escalável",
    ],
  },
];

const Plans = () => {
  return (
    <section id="plans" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl">
            Planos sob medida para o seu{" "}
            <span className="text-gradient">crescimento</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparência total. Sem taxas escondidas. Sem complicações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-card border rounded-2xl p-8 space-y-6 transition-all duration-300 animate-fade-in-up ${
                plan.featured
                  ? "border-primary shadow-lg shadow-primary/20 scale-105"
                  : "border-border hover:border-primary/50"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.featured && (
                <div className="inline-block px-3 py-1 rounded-full bg-gradient-primary text-white text-sm font-semibold">
                  Mais popular
                </div>
              )}
              
              <div className="space-y-2">
                <h3 className="font-display font-bold text-2xl text-foreground">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground">{plan.target}</p>
              </div>

              <div className="py-4">
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-bold text-5xl text-gradient">
                    {plan.price}
                  </span>
                  {plan.price !== "Sob consulta" && (
                    <span className="text-muted-foreground">por transação</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.featured ? "gradient-primary hover-glow" : ""
                }`}
                variant={plan.featured ? "default" : "outline"}
              >
                {plan.name === "Corporativo" ? "Falar com consultor" : "Começar agora"}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Dúvidas sobre qual plano escolher?
          </p>
          <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/5">
            Falar com um especialista Cardway
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Plans;
