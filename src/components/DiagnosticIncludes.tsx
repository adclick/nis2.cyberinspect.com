import { Card } from "@/components/ui/card";
import { Shield, TrendingDown, FileText, Target, AlertCircle } from "lucide-react";

const includes = [
  {
    icon: Shield,
    title: "Identificação das principais vulnerabilidades",
    description: "Listagem detalhada das falhas de segurança encontradas",
  },
  {
    icon: TrendingDown,
    title: "Impacto no negócio",
    description: "Entenda as consequências reais de cada vulnerabilidade",
  },
  {
    icon: Target,
    title: "Prioridades de correção",
    description: "O que deve corrigir primeiro e porquê",
  },
  {
    icon: AlertCircle,
    title: "Indicadores de risco",
    description: "Classificação clara do nível de perigo de cada falha",
  },
];

const DiagnosticIncludes = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              O que inclui o <span className="text-secondary">diagnóstico?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              O que recebe com o diagnóstico gratuito
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {includes.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-cta flex items-center justify-center flex-shrink-0 shadow-cta">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
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

export default DiagnosticIncludes;
