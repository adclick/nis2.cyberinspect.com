import { Button } from "@/components/ui/button";
import { Shield, Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-hero overflow-hidden pt-20">
      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-gradient-glass backdrop-blur-xl text-cyberBlue px-5 py-2.5 rounded-full text-sm font-medium border border-cyberBlue/20 shadow-glass">
              <Shield className="w-4 h-4" />
              <span>Diretiva NIS2 - Identificação de Risco</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground">
                O primeiro passo para cumprir a{" "}
                <span className="bg-gradient-cyber bg-clip-text text-transparent">
                  NIS2
                </span>{" "}
                é identificar o risco
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground/90 max-w-xl leading-relaxed">
                A conformidade começa pela identificação de vulnerabilidades nos
                seus ativos digitais. A CyberInspect ajuda-o a dar esse passo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" className="group" asChild>
                <a href="#form">
                  Solicitar Avaliação
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </Button>

              <Button variant="outline-light" size="xl" asChild>
                <a href="#como-funciona">Como Funciona</a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground/70 max-w-md">
              Os testes de cibersegurança são obrigatórios apenas para empresas
              abrangidas pela Diretiva NIS2.
            </p>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img
                alt="Identificação de vulnerabilidades em ativos digitais"
                className="w-full h-auto"
                src="/lovable-uploads/a33ad635-6bc9-4413-99aa-504eb22a92e7.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-glass backdrop-blur-2xl shadow-neon rounded-2xl px-8 py-5 border border-neonCyan/30">
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-neon bg-clip-text text-transparent tracking-tight">
                  Identifique
                </p>
                <p className="text-sm text-muted-foreground/80 font-medium">
                  Vulnerabilidades NIS2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
