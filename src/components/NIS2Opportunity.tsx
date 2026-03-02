import { Card } from "@/components/ui/card";
import { Building2, ShieldCheck, Search, Scale } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "Milhares",
    label: "de empresas abrangidas pela NIS2 em Portugal",
  },
  {
    icon: Scale,
    value: "Obrigatória",
    label: "Gestão de risco torna-se requisito legal",
  },
  {
    icon: Search,
    value: "Testes regulares",
    label: "Testes de cibersegurança como prova da avaliação de risco",
  },
  {
    icon: ShieldCheck,
    value: "Conformidade",
    label: "Documentação e remediação contínua exigidas",
  },
];

const NIS2Opportunity = () => {
  return (
    <section id="oportunidade" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Qual é a{" "}
              <span className="bg-gradient-cyber bg-clip-text text-transparent">
                oportunidade
              </span>{" "}
              criada pela NIS2?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A Diretiva NIS2 cria uma procura sem precedentes por serviços de
              cibersegurança - e o seu negócio pode captar essa procura.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
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
                      <h3 className="text-xl font-bold mb-1 bg-gradient-cyber bg-clip-text text-transparent">
                        {stat.value}
                      </h3>
                      <p className="text-muted-foreground">{stat.label}</p>
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

export default NIS2Opportunity;
