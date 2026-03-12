import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Zap, 
  Plane, 
  HeartPulse, 
  Server, 
  Building2, 
  Droplet, 
  ShieldCheck, 
  Truck,
  Wifi,
  FileText,
  Factory,
  Radio
} from "lucide-react";

const sectors = [
  {
    icon: Zap,
    name: "Energia",
    description: "Eletricidade, petróleo, gás e redes de aquecimento e refrigeração"
  },
  {
    icon: Plane,
    name: "Transportes",
    description: "Aéreos, ferroviários, marítimos e rodoviários"
  },
  {
    icon: HeartPulse,
    name: "Saúde",
    description: "Prestadores de cuidados de saúde e laboratórios"
  },
  {
    icon: Server,
    name: "Infraestruturas Digitais",
    description: "Serviços de DNS, data centers e fornecedores de cloud"
  },
  {
    icon: Building2,
    name: "Banca e Serviços Financeiros",
    description: "Bancos, seguradoras e mercados de capitais"
  },
  {
    icon: Droplet,
    name: "Água",
    description: "Abastecimento e distribuição de água potável"
  },
  {
    icon: ShieldCheck,
    name: "Administração Pública",
    description: "Entidades governamentais centrais e regionais"
  },
  {
    icon: Truck,
    name: "Serviços Postais",
    description: "Operadores de serviços postais e de courier"
  },
  {
    icon: Wifi,
    name: "Telecomunicações",
    description: "Fornecedores de redes e serviços de comunicações eletrónicas"
  },
  {
    icon: FileText,
    name: "Gestão de Resíduos",
    description: "Recolha, transporte e tratamento de resíduos"
  },
  {
    icon: Factory,
    name: "Indústria Transformadora",
    description: "Químicos, alimentar, dispositivos médicos e outros críticos"
  },
  {
    icon: Radio,
    name: "Fornecedores Digitais",
    description: "Plataformas online, motores de busca e redes sociais"
  }
];

const NIS2Sectors = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-accent/30 text-accent">
              Setores Abrangidos
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Quem precisa de estar em <span className="text-primary">conformidade</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A NIS2 abrange entidades essenciais e importantes em setores críticos da economia europeia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-card transition-all duration-300 bg-gradient-glass backdrop-blur-sm border-border hover:border-accent/30 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-cta flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">{sector.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {sector.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Se a sua empresa opera em algum destes setores, a conformidade com a NIS2 é obrigatória
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NIS2Sectors;
