import { AlertTriangle, HelpCircle } from "lucide-react";

const challenges = [
  "Como avaliar risco de forma estruturada?",
  "Como garantir consistência entre clientes?",
  "Como produzir documentação formal?",
  "Como transformar diagnóstico num serviço contínuo?",
];

const SPNeedScale = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              O desafio
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              A oportunidade é grande. Mas sem{" "}
              <span className="text-cyberLight">
                escala
              </span>
              , não é sustentável.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Os Parceiros enfrentam desafios reais quando tentam
              aproveitar esta oportunidade sem as ferramentas certas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 rounded-xl bg-gradient-glass backdrop-blur-sm border border-border hover:border-primary/30 transition-colors"
              >
                <HelpCircle className="w-6 h-6 text-cyberLight flex-shrink-0" />
                <span className="text-foreground font-medium">{challenge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SPNeedScale;
