import { Card } from "@/components/ui/card";

const steps = [
  {
    number: "1",
    title: "Registe-se em menos de 1 minuto",
    description: "Formulário simples e rápido, sem burocracia.",
  },
  {
    number: "2",
    title: "Receba o diagnóstico gratuito",
    description: "Análise automática do seu site em tempo real.",
  },
  {
    number: "3",
    title: "Veja vulnerabilidades e recomendações",
    description: "Relatório detalhado com passos concretos.",
  },
  {
    number: "4",
    title: "Escolha o plano certo",
    description: "Soluções adaptadas ao seu negócio.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Simples, rápido e seguro.
          </h2>
          <p className="text-lg text-muted-foreground">
            Proteja o seu negócio em 4 passos simples
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-accent hover:shadow-card transition-all duration-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-cta flex items-center justify-center shadow-cta">
                      <span className="text-xl font-bold text-white">{step.number}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
