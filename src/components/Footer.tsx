import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    institucional: [
      { name: "Sobre nós", href: "#about" },
      { name: "Trabalhe conosco", href: "#" },
      { name: "Política de Privacidade", href: "#" },
      { name: "Termos de Uso", href: "#" },
    ],
    produtos: [
      { name: "Maquininha Card", href: "#ecosystem" },
      { name: "App Card", href: "#ecosystem" },
      { name: "CardMedia", href: "#ecosystem" },
      { name: "CardHub API", href: "#ecosystem" },
    ],
    contato: [
      { name: "WhatsApp: (11) 9999-9999", href: "#" },
      { name: "Email: contato@cardway.com.br", href: "#" },
      { name: "Atendimento: Seg-Sex 9h-18h", href: "#" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-display font-bold text-2xl text-gradient">
              Cardway
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Conectando você ao futuro dos pagamentos há mais de 20 anos.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Institucional */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Institucional
            </h3>
            <ul className="space-y-3">
              {footerLinks.institucional.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Produtos
            </h3>
            <ul className="space-y-3">
              {footerLinks.produtos.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              {footerLinks.contato.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-border pt-12 mb-8">
          <div className="max-w-xl mx-auto text-center space-y-4">
            <h3 className="font-display font-semibold text-xl text-foreground">
              Receba novidades e oportunidades da Cardway
            </h3>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="bg-background border-border"
              />
              <Button className="gradient-primary hover-glow">
                Inscrever
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Cardway. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
