import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, AlertTriangle } from "lucide-react";

const steps = [
  "Scans automáticos e manuais para identificar vulnerabilidades nos seus ativos digitais",
  "Priorização de riscos por impacto e probabilidade de exploração",
  "Plano de correção estruturado e acompanhamento da remediação",
  "Documentação completa para demonstração de conformidade em auditorias NIS2",
];

const HowCyberInspectHelps = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                A{" "}
                <span className="bg-gradient-cyber bg-clip-text text-transparent">
                  CyberInspect
                </span>{" "}
                ajuda-o a dar esse passo
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Focamo-nos na componente mais prática e mensurável da NIS2:
                testes regulares e gestão de vulnerabilidades.
              </p>

              <ul className="space-y-4 mb-8">
                {steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyberBlue flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ul>

              <Button variant="cta" size="lg" asChild>
                <a href="#form">Solicitar Avaliação</a>
              </Button>
            </div>

            <div className="bg-gradient-to-r from-cyberBlue/10 to-primary/10 rounded-2xl border border-cyberBlue/20 shadow-card p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-cta flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    A sua empresa está abrangida?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Os testes de cibersegurança são obrigatórios apenas para
                    entidades abrangidas pela Diretiva NIS2 — entidades
                    essenciais e importantes em setores críticos.
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-cyberBlue mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Essenciais:</strong>{" "}
                    Energia, transportes, saúde, infraestruturas digitais, banca,
                    água
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-cyberBlue mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-foreground">Importantes:</strong>{" "}
                    Correios, resíduos, indústria, fornecedores digitais, químicos
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span>
                    Multas até <strong className="text-foreground">10M€ ou 2%</strong> do volume de negócios
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowCyberInspectHelps;
