import { Button } from "@/components/ui/button";
import { Rocket, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-hero overflow-hidden pt-20">
      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-gradient-glass backdrop-blur-xl text-primary px-5 py-2.5 rounded-full text-sm font-medium border border-primary/20 shadow-glass">
              <Rocket className="w-4 h-4" />
              <span>Para Parceiros</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground">
                Transforme a{" "}
                <span className="bg-gradient-cyber bg-clip-text text-transparent">
                  NIS2
                </span>{" "}
                num serviço estruturado, escalável e recorrente
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground/90 max-w-xl leading-relaxed">
                A CyberInspect é a forma mais simples de descomplificar a NIS2
                para os seus clientes - e escalar o seu negócio com novos
                serviços de cibersegurança.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" className="group" asChild>
                <a href="#form">
                  Tornar-se Parceiro
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </Button>

              <Button variant="outline-light" size="xl" asChild>
                <a href="#oportunidade">Descubra a Oportunidade</a>
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground/70">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>Aumente o ticket médio</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>Serviço recorrente</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img
                alt="Plataforma CyberInspect para Parceiros"
                className="w-full h-auto"
                src="/lovable-uploads/a33ad635-6bc9-4413-99aa-504eb22a92e7.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-glass backdrop-blur-2xl shadow-neon rounded-2xl px-8 py-5 border border-primary/30">
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-neon bg-clip-text text-transparent tracking-tight">
                  Escale
                </p>
                <p className="text-sm text-muted-foreground/80 font-medium">
                  O seu negócio com a NIS2
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
