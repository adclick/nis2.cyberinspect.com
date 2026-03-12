import { Card } from "@/components/ui/card";
import { AlertTriangle, TrendingUp, Shield } from "lucide-react";

const stats = [
  {
    icon: AlertTriangle,
    value: "10M€",
    label: "multa máxima para Entidades Essenciais",
    color: "text-destructive",
  },
  {
    icon: TrendingUp,
    value: "+160%",
    label: "mais setores abrangidos vs NIS1",
    color: "text-accent",
  },
  {
    icon: Shield,
    value: "Out 2024",
    label: "prazo de transposição em Portugal",
    color: "text-primary",
  },
];

const Educational = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              A NIS2 não é opcional. <span className="text-cyberLight">É obrigatória.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Os números mostram a urgência - a conformidade começa agora
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-cta flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-4xl font-bold mb-2 text-primary">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-cyberBlue/10 to-primary/10 rounded-2xl border border-cyberBlue/20 shadow-card">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-cta flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">A <span className="font-bold text-cyberLight">responsabilidade é da gestão de topo</span></h3>
                <p className="text-muted-foreground">
                  A direção das entidades tem responsabilidade legal direta pelo cumprimento da NIS2. 
                  Não implementar medidas de segurança, incluindo testes e gestão de vulnerabilidades, pode resultar em sanções pessoais e proibição temporária de funções.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educational;
