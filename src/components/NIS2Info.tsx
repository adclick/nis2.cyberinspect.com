import { Card } from "@/components/ui/card";
import { Shield, Building2, AlertTriangle, FileCheck } from "lucide-react";
const sections = [{
  icon: Shield,
  title: "O que é a NIS2?",
  description: "A NIS2 (Diretiva 2022/2555) reforça a cibersegurança em toda a União Europeia, estabelecendo obrigações para Estados-Membros e entidades públicas e privadas em setores críticos."
}, {
  icon: Building2,
  title: "Entidades abrangidas",
  description: "Entidades Essenciais (grandes operadores em setores de alta criticidade) e Importantes (média dimensão e outros setores críticos) - energia, transportes, saúde, infraestruturas digitais, banca, e muitos outros."
}, {
  icon: AlertTriangle,
  title: "Medidas obrigatórias",
  description: "Análise de risco, gestão de incidentes, continuidade de negócio, segurança na cadeia de abastecimento, políticas de criptografia, e crucialmente: testes regulares e gestão de vulnerabilidades."
}, {
  icon: FileCheck,
  title: "Penalizações",
  description: "Multas até 10M€ ou 2% do volume de negócios (Essenciais) e até 7M€ ou 1,4% (Importantes). A gestão de topo é diretamente responsável pelo cumprimento."
}];
const NIS2Info = () => {
  return <section id="nis2" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Entenda a <span className="bg-gradient-cyber bg-clip-text text-transparent">Diretiva NIS2</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Novos requisitos de cibersegurança para organizações em setores críticos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {sections.map((section, index) => {
            const Icon = section.icon;
            return <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 bg-gradient-glass backdrop-blur-sm border-border">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-cta flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                      <p className="text-muted-foreground">{section.description}</p>
                    </div>
                  </div>
                </Card>;
          })}
          </div>

          <div className="bg-gradient-to-r from-cyberBlue/10 to-primary/10 rounded-2xl border border-cyberBlue/20 shadow-card p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-cta flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Onde a <span className="font-bold bg-gradient-cta bg-clip-text text-transparent">CyberInspect</span> se posiciona
                </h3>
                <p className="text-muted-foreground mb-4">
                  A NIS2 exige "medidas concretas de segurança, incluindo testes regulares e gestão de vulnerabilidades". 
                  É precisamente aqui que entramos.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-cyberBlue mt-1">✓</span>
                    <span>Testes técnicos regulares (scans de vulnerabilidade, penetration tests)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyberBlue mt-1">✓</span>
                    <span>Processo estruturado para identificar, priorizar e corrigir falhas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyberBlue mt-1">✓</span>
                    <span>Documentação e demonstração de conformidade para auditorias</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default NIS2Info;