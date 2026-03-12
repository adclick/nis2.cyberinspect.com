import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Clock, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FormEvent, useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const features = [{
  icon: CheckCircle2,
  text: "Acesso completo à plataforma"
}, {
  icon: Clock,
  text: "Suporte dedicado"
}, {
  icon: FileText,
  text: "Materiais de comunicação incluídos"
}];

const stripHtml = (str: string) => str.replace(/<[^>]*>/g, "").trim();

const leadSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório.").max(100, "Nome demasiado longo.").transform(stripHtml),
  email: z.string().trim().email("E-mail inválido.").max(255, "E-mail demasiado longo."),
  company: z.string().trim().min(1, "Empresa é obrigatória.").max(150, "Nome de empresa demasiado longo.").transform(stripHtml),
  phone: z.string().regex(/^\d{9}$/, "O telemóvel deve ter exatamente 9 dígitos."),
});

const FinalCTA = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const formLoadTime = useRef(Date.now());

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 9) {
      setPhone(value);
    }
  };

  const formatPhone = (value: string) => {
    if (value.length <= 3) return value;
    if (value.length <= 6) return `${value.slice(0, 3)} ${value.slice(3)}`;
    return `${value.slice(0, 3)} ${value.slice(3, 6)} ${value.slice(6, 9)}`;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    // Honeypot check – bots fill hidden fields
    const honeypot = formData.get("website") as string;
    if (honeypot) {
      // Silently pretend success to not alert the bot
      navigate("/obrigado");
      return;
    }

    // Timing check – humans take at least 3 seconds to fill a form
    if (Date.now() - formLoadTime.current < 3000) {
      navigate("/obrigado");
      return;
    }

    // Validate with zod
    const result = leadSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      phone: phone,
    });

    if (!result.success) {
      const firstError = result.error.errors[0];
      toast({
        title: "Erro de validação",
        description: firstError.message,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    const data = {
      ...result.data,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch("https://hook.eu1.make.com/nd2gu54lcpod5mfsq18cuoijk8dpi91a", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        navigate("/obrigado");
      } else {
        toast({
          title: "Erro ao enviar",
          description: "Por favor, tente novamente.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Erro ao enviar",
        description: "Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return <section id="form" className="py-24 bg-gradient-hero relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-2xl border-border">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-cyberLight/10 text-cyberLight px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyberLight opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyberLight"></span>
                </span>
                Programa de Parceria
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">Torne-se um parceiro CyberInspect</h2>
              <p className="text-lg text-muted-foreground">
                Preencha o formulário e a nossa equipa entrará em contacto para dar a conhecer o produto e as condições de parceria.
              </p>
            </div>

            {/* Lead Form */}
            <form className="max-w-2xl mx-auto mb-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <Input name="name" placeholder="Nome" className="h-12" required maxLength={100} />
                <Input name="email" type="email" placeholder="E-mail" className="h-12" required maxLength={255} />
                <Input name="company" placeholder="Empresa" className="h-12" required maxLength={150} />
                <Input name="phone" type="tel" placeholder="Telemóvel" className="h-12" value={formatPhone(phone)} onChange={handlePhoneChange} required />
              </div>
              {/* Honeypot – hidden from real users, bots will fill it */}
              <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="flex items-start gap-3 mb-6">
                <Checkbox id="terms" className="mt-1" required />
                <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  Aceito o tratamento destes dados pela NOS para efeitos de envio de comunicações de produtos e serviços
                  e de eventos relacionados com a plataforma CyberInspect.
                </Label>
              </div>
              <Button type="submit" variant="cta" size="xl" className="w-full" disabled={isLoading}>
                {isLoading ? "A enviar..." : "Solicitar Informações"}
              </Button>
            </form>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-6">
              {features.map((feature, index) => {
              const Icon = feature.icon;
              return <div key={index} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-cta flex items-center justify-center">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature.text}</span>
                  </div>;
            })}
            </div>
          </Card>

          {/* Bottom Text */}
          <div className="text-center mt-12">
            <p className="text-xl font-semibold mb-2">Escale o seu negócio de cibersegurança com a CyberInspect</p>
            <p className="text-muted-foreground">Uma plataforma completa para Parceiros que querem crescer.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default FinalCTA;
