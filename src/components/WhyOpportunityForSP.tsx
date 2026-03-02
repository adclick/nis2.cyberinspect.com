import { Card } from "@/components/ui/card";
import { Handshake, TrendingUp, RotateCcw, Star } from "lucide-react";

const reasons = [
  {
    icon: Handshake,
    title: "Traduz obrigação em crescimento",
    description:
      "A obrigação legal dos seus clientes transforma-se em receita recorrente para o seu negócio.",
  },
  {
    icon: Star,
    title: "Eleva-o a parceiro estratégico",
    description:
      "Deixa de ser visto como fornecedor de IT e passa a ser um parceiro essencial na conformidade dos clientes.",
  },
  {
    icon: TrendingUp,
    title: "Aumenta o ticket médio",
    description:
      "Serviços de cibersegurança permitem aumentar significativamente o valor por cliente, com margens superiores.",
  },
  {
    icon: RotateCcw,
    title: "Abre porta a serviços contínuos",
    description:
      "A NIS2 exige testes regulares - o que significa contratos de acompanhamento, não projetos pontuais.",
  },
];

const WhyOpportunityForSP = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Porquê é uma{" "}
              <span className="bg-gradient-cyber bg-clip-text text-transparent">
                oportunidade para SPs
              </span>
              ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A NIS2 não é só uma obrigação para os seus clientes - é uma
              alavanca de crescimento para o seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-card transition-all duration-300 bg-gradient-glass backdrop-blur-sm border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-cta flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {reason.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOpportunityForSP;
