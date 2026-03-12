import { Button } from "@/components/ui/button";
import { Rocket, TrendingUp } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="CyberInspect Hero Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-gradient-glass backdrop-blur-xl text-primary px-5 py-2.5 rounded-full text-sm font-medium border border-primary/20 shadow-glass">
            <Rocket className="w-4 h-4" />
            <span>Para Parceiros</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground">
              Transforme a{" "}
              <span className="text-primary">
                NIS2
              </span>{" "}
              num serviço estruturado, escalável e recorrente
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground/90 max-w-xl mx-auto leading-relaxed">
              A CyberInspect é a forma mais simples de descomplificar a NIS2
              para os seus clientes - e escalar o seu negócio com novos
              serviços de cibersegurança.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

          <div className="flex items-center gap-6 text-sm text-muted-foreground/70 justify-center">
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
      </div>
    </section>
  );
};

export default Hero;
