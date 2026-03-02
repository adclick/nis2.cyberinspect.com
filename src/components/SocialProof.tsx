import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import logoBridge351 from "@/assets/logo-bridge351.png";
import logoErgostek from "@/assets/logo-ergostek.png";
import logoWegho from "@/assets/logo-wegho.png";
import logoSooma from "@/assets/logo-sooma.png";

const testimonials = [
  {
    name: "Pedro Caetano",
    role: "Executive Director",
    company: "Bridge351",
    content: "Saber que nos colocámos à prova com a Cyberinspect foi ter a certeza de que estávamos a colocar a segurança do nosso negócio nas mãos certas, com uma visão 360º na identificação de riscos. Tudo de forma simples e intuitiva, mas, ao mesmo tempo, muito detalhada e com uma indicação clara do caminho a seguir.",
    logo: logoBridge351,
  },
  {
    name: "Luís Gerardi",
    role: "CEO",
    company: "ErgosTek",
    content: "Uma plataforma excepcional que automatiza análises de cibersegurança, otimizando processos e fornecendo relatórios detalhados que facilitam a resolução de problemas identificados.",
    logo: logoErgostek,
  },
  {
    name: "Rodrigo Trépa",
    role: "Head of Product and Marketing",
    company: "Wegho",
    content: "A plataforma de testes de cibersegurança da CyberInspect superou as nossas expectativas! Intuitiva, robusta, e com um suporte e follow-up técnico essencial. Proporcionou-nos insights valiosos para garantir uma proteção adequada dos nossos sistemas. Uma ferramenta que recomendamos para empresas que valorizam segurança digital e precisam de um apoio profissional nesta matéria. Parabéns!",
    logo: logoWegho,
  },
  {
    name: "Manuel Costa",
    role: "Co-Founder, Managing Director",
    company: "SOOMA",
    content: "Na SOOMA, onde lidamos com dados sensíveis, a cibersegurança é absolutamente vital. A plataforma da CyberInspect revelou-se uma ferramenta crítica para avaliar e reforçar a estratégia de proteção digital através de uma análise abrangente e precisa das nossas vulnerabilidades. Para empresas que procuram uma solução robusta de cibersegurança, a plataforma da CyberInspect é, sem dúvida, uma escolha acertada.",
    logo: logoSooma,
  },
];

const SocialProof = () => {
  return (
    <section id="testemunhos" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            A opinião de quem confia em nós
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:bg-card/70 transition-all duration-300 h-full">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-lg bg-background flex items-center justify-center flex-shrink-0 overflow-hidden p-2">
                        <img 
                          src={testimonial.logo} 
                          alt={`${testimonial.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.company}, {testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">({testimonial.role})</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">{testimonial.content}</p>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-12" />
          <CarouselNext className="-right-4 md:-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default SocialProof;
