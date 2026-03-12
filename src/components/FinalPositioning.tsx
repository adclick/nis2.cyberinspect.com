import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, TrendingUp, Layers } from "lucide-react";
const FinalPositioning = () => {
  return <section className="py-24 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground tracking-tight leading-tight">
              CyberInspect: referência em <span className="text-cyberLight">conformidade NIS2</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Solução especializada na execução prática dos requisitos de testes e gestão de vulnerabilidades da Diretiva NIS2.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="group p-8 text-center hover:shadow-cta transition-all duration-500 hover:-translate-y-2 hover:border-cyberBlue/40 bg-gradient-glass backdrop-blur-sm">
              <div className="w-16 h-16 rounded-2xl bg-gradient-cta flex items-center justify-center mx-auto mb-6 shadow-cta group-hover:scale-110 transition-transform duration-300">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">Testes regulares</h3>
              <p className="text-muted-foreground/90 leading-relaxed">
                Scans automáticos e manuais, penetration tests e avaliações contínuas de segurança
              </p>
            </Card>

            <Card className="group p-8 text-center hover:shadow-cta transition-all duration-500 hover:-translate-y-2 hover:border-cyberBlue/40 bg-gradient-glass backdrop-blur-sm">
              <div className="w-16 h-16 rounded-2xl bg-gradient-cta flex items-center justify-center mx-auto mb-6 shadow-cta group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">Gestão de vulnerabilidades</h3>
              <p className="text-muted-foreground/90 leading-relaxed">
                Identificação, priorização e plano de correção estruturado e documentado
              </p>
            </Card>

            <Card className="group p-8 text-center hover:shadow-cta transition-all duration-500 hover:-translate-y-2 hover:border-cyberBlue/40 bg-gradient-glass backdrop-blur-sm">
              <div className="w-16 h-16 rounded-2xl bg-gradient-cta flex items-center justify-center mx-auto mb-6 shadow-cta group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">Evidência de conformidade</h3>
              <p className="text-muted-foreground/90 leading-relaxed">
                Documentação pronta para auditorias e supervisão das autoridades competentes
              </p>
            </Card>
          </div>

          <div className="bg-gradient-glass backdrop-blur-xl rounded-3xl p-10 border border-neonCyan/30 shadow-neon relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-neon opacity-5"></div>
            <div className="relative text-center max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-5 tracking-tight">Não espere pelas multas</h3>
              <p className="text-lg text-muted-foreground/90 mb-8 leading-relaxed">
                Comece hoje a implementar os testes e gestão de vulnerabilidades exigidos pela NIS2
              </p>
              <Button variant="cta" size="xl" className="group" asChild>
                <a href="#form">
                  Solicitar Avaliação
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FinalPositioning;