import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator, AlertTriangle, TrendingUp, Building2, Factory } from "lucide-react";

const NIS2Calculator = () => {
  const [revenue, setRevenue] = useState<number>(5000000);
  const [entityType, setEntityType] = useState<"essential" | "important">("essential");

  const calculateFine = () => {
    return entityType === "essential" 
      ? revenue * 0.02 
      : revenue * 0.014;
  };

  const fine = calculateFine();

  const presetValues = [
    { label: "500K€", value: 500000 },
    { label: "2M€", value: 2000000 },
    { label: "5M€", value: 5000000 },
    { label: "10M€", value: 10000000 },
    { label: "25M€", value: 25000000 },
    { label: "50M€", value: 50000000 }
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-PT', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section id="calculadora" className="py-16 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
              Calculadora de <span className="text-cyberLight">multas NIS2</span>
            </h2>
            <p className="text-base text-muted-foreground">
              Descubra o risco financeiro de não conformidade com a Diretiva NIS2
            </p>
          </div>

          <Card className="p-6 bg-gradient-glass backdrop-blur-sm border-border shadow-card">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-cta flex items-center justify-center">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Calcule a multa máxima</h3>
            </div>

            <div className="space-y-6">
              {/* Entity Type Selection */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">Tipo de Entidade</Label>
                <div className="grid md:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setEntityType("essential")}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                      entityType === "essential"
                        ? "border-cyberLight bg-cyberLight/5 shadow-card"
                        : "border-border hover:border-cyberLight/40 bg-card"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        entityType === "essential" ? "bg-gradient-cta" : "bg-muted"
                      }`}>
                        <Building2 className={`w-5 h-5 ${entityType === "essential" ? "text-white" : "text-muted-foreground"}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base mb-0.5">Essencial</h4>
                        <p className="text-xs text-muted-foreground">Alta criticidade</p>
                        <p className="text-xs text-destructive font-medium mt-1">Multa: 2%</p>
                      </div>
                    </div>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => setEntityType("important")}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                      entityType === "important"
                        ? "border-primary bg-primary/5 shadow-card"
                        : "border-border hover:border-primary/40 bg-card"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        entityType === "important" ? "bg-gradient-cta" : "bg-muted"
                      }`}>
                        <Factory className={`w-5 h-5 ${entityType === "important" ? "text-white" : "text-muted-foreground"}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base mb-0.5">Importante</h4>
                        <p className="text-xs text-muted-foreground">Média dimensão</p>
                        <p className="text-xs text-destructive font-medium mt-1">Multa: 1.4%</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Revenue Input */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-base font-semibold">Volume de Negócios Anual</Label>
                  <span className="text-xl font-bold text-cyberLight">{formatCurrency(revenue)}</span>
                </div>
                
                <Slider
                  value={[revenue]}
                  onValueChange={(values) => setRevenue(values[0])}
                  min={500000}
                  max={50000000}
                  step={100000}
                  className="py-3"
                />
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {presetValues.map((preset) => (
                    <button
                      key={preset.value}
                      type="button"
                      onClick={() => setRevenue(preset.value)}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                        revenue === preset.value
                          ? "bg-gradient-cta text-white"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="animate-in fade-in duration-500">
                <div className="bg-gradient-to-r from-destructive/10 to-destructive/5 border border-destructive/20 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="text-base font-semibold mb-2 text-foreground">
                        Multa potencial
                      </h4>
                      <div className="text-3xl font-bold text-destructive mb-1">
                        {formatCurrency(fine)}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {entityType === "essential" ? "2%" : "1.4%"} do volume de negócios
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NIS2Calculator;
