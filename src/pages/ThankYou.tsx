import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Obrigado - CyberInspect</title>
        <meta name="description" content="Obrigado pelo seu interesse. Entraremos em contacto em breve." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"></div>
        
        <Card className="max-w-2xl w-full p-8 md:p-12 shadow-2xl border-border relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success/10 mb-6">
              <CheckCircle2 className="w-10 h-10 text-success" />
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Obrigado!
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              O seu pedido foi recebido com sucesso. A nossa equipa entrará em contacto consigo em breve para dar seguimento ao seu diagnóstico gratuito de cibersegurança.
            </p>
            
            <Button 
              variant="cta" 
              size="lg" 
              onClick={() => navigate("/")}
              className="mt-4"
            >
              Voltar à página inicial
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ThankYou;
