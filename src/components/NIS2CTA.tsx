import { Button } from "@/components/ui/button";
import { AlertTriangle, Shield, CheckCircle2 } from "lucide-react";

const NIS2CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-destructive/10 via-destructive/5 to-background border-y border-destructive/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-10 h-10 text-destructive" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Não Espere <span className="text-destructive">Pelas Multas</span>
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                As penalizações da NIS2 podem chegar a milhões de euros. Comece já a preparar a sua empresa com testes de segurança regulares e demonstre conformidade antes das auditorias.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyberBlue flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Identifique vulnerabilidades antes de serem exploradas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyberBlue flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Documente conformidade com requisitos técnicos da NIS2</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyberBlue flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Reduza drasticamente o risco de incidentes graves</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-glass backdrop-blur-sm border border-border rounded-2xl p-8 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-cta flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Avaliação Gratuita</h3>
                  <p className="text-sm text-muted-foreground">Sem compromisso</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Solicite uma avaliação inicial gratuita e descubra o estado atual de segurança da sua infraestrutura face aos requisitos NIS2.
              </p>

              <div className="space-y-3">
                <Button 
                  variant="cta" 
                  size="lg" 
                  className="w-full text-base"
                  asChild
                >
                  <a href="#form">Solicitar Avaliação Gratuita</a>
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  ✓ Relatório preliminar em 48h &nbsp;•&nbsp; ✓ Sem custos iniciais
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NIS2CTA;
