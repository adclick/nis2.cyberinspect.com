import { Button } from "@/components/ui/button";
import { CheckCircle2, Zap, BarChart3, FileText, RefreshCw, Shield } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Testes exigidos pela NIS2",
    description: "Vulnerability scanning, penetration testing e security assessments - tudo numa plataforma, pronto para oferecer aos seus clientes.",
  },
  {
    icon: Zap,
    title: "Escala e produtividade com IA",
    description: "Execute testes de cibersegurança para múltiplos clientes de forma eficiente e centralizada, com relatórios e análises potenciados por inteligência artificial.",
  },
  {
    icon: BarChart3,
    title: "Avaliação de risco estruturada",
    description: "Identifique e priorize vulnerabilidades com metodologia consistente entre todos os seus clientes.",
  },
  {
    icon: FileText,
    title: "Evidências técnicas",
    description: "Documentação para demonstrar conformidade no que toca à execução de testes e resultados dos mesmos - pronta para auditorias.",
  },
  {
    icon: RefreshCw,
    title: "Serviço contínuo",
    description: "Transforme diagnósticos pontuais em contratos recorrentes com testes regulares automatizados.",
  },
  {
    icon: CheckCircle2,
    title: "Oportunidades de remediação",
    description: "Cada vulnerabilidade encontrada é uma oportunidade para o Parceiro vender serviços de remediação aos seus clientes.",
  },
];

const HowCyberInspectHelps = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              A{" "}
              <span className="text-cyberLight">
                CyberInspect
              </span>{" "}
              é a solução
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O primeiro passo para transformar a NIS2 num serviço escalável,
              estruturado e recorrente - numa única plataforma.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-glass backdrop-blur-sm border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-icon flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Button variant="cta" size="xl" className="group" asChild>
              <a href="#form">
                Saber Mais
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowCyberInspectHelps;
