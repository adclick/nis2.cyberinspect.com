import { Card } from "@/components/ui/card";
import { Search, ShieldAlert, FileWarning, Target } from "lucide-react";

const points = [
  {
    icon: Search,
    title: "Conhecer as vulnerabilidades",
    description:
      "Sem saber onde estão as falhas nos seus ativos digitais, é impossível protegê-los ou cumprir os requisitos da NIS2.",
  },
  {
    icon: ShieldAlert,
    title: "Avaliar o risco real",
    description:
      "A identificação de vulnerabilidades permite priorizar ações e alocar recursos onde o impacto é maior.",
  },
  {
    icon: FileWarning,
    title: "Base para a conformidade",
    description:
      "A NIS2 exige medidas concretas de segurança — e todas começam com uma avaliação objetiva do estado atual.",
  },
  {
    icon: Target,
    title: "Obrigatório para empresas abrangidas",
    description:
      "Os testes regulares e a gestão de vulnerabilidades são requisitos legais para entidades essenciais e importantes ao abrigo da NIS2.",
  },
];

const WhyRiskIdentification = () => {
  return (
    <section id="como-funciona" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Porquê começar pela{" "}
              <span className="bg-gradient-cyber bg-clip-text text-transparent">
                identificação de risco
              </span>
              ?
            </h2>
            <p className="text-lg text-muted-foreground">
              O primeiro passo para entender e cumprir a NIS2 é saber onde estão
              as suas vulnerabilidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {points.map((point, index) => {
              const Icon = point.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-card transition-all duration-300 bg-gradient-glass backdrop-blur-sm border-border"
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-cta flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {point.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRiskIdentification;
