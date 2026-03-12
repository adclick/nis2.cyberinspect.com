import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Layers, TrendingUp, Target, Zap, MessageSquare, Users } from "lucide-react";

const benefits = [
  {
    icon: Layers,
    title: "Avaliação completa de vulnerabilidades",
    description: "Testes técnicos abrangentes incluindo scans de segurança, análise de aplicações web, verificação de configurações e identificação de pontos fracos na infraestrutura.",
  },
  {
    icon: Target,
    title: "Relatórios detalhados e acionáveis",
    description: "Documentação clara com priorização de riscos, impacto detalhado de cada vulnerabilidade e plano de ação concreto para remediação.",
  },
  {
    icon: TrendingUp,
    title: "Gestão contínua de riscos",
    description: "Monitorização regular, reavaliações periódicas e acompanhamento da evolução da postura de segurança ao longo do tempo.",
  },
  {
    icon: Zap,
    title: "Demonstração de conformidade",
    description: "Evidências documentadas para auditorias e supervisão, alinhadas com os requisitos específicos da Diretiva NIS2.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Como cumprimos a <span className="text-cyberLight">NIS2</span>
          </h2>
          <p className="text-lg text-muted-foreground/90 leading-relaxed">
            Soluções técnicas especializadas para os requisitos operacionais da diretiva
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="group p-8 hover:shadow-neon transition-all duration-500 hover:-translate-y-2 border-border hover:border-cyberBlue/40 bg-gradient-glass backdrop-blur-sm"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-cta flex items-center justify-center mb-6 shadow-cta group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 tracking-tight">{benefit.title}</h3>
                <p className="text-muted-foreground/90 leading-relaxed">{benefit.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg" asChild>
            <a href="#form">Solicitar Avaliação</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
