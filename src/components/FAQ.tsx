import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircleQuestion } from "lucide-react";

const faqs = [
  {
    question: "O que é a Diretiva NIS2 e como afeta os meus clientes?",
    answer: "A NIS2 (Diretiva 2022/2555) é a nova legislação europeia de cibersegurança que obriga entidades em setores críticos a implementar medidas concretas de segurança, incluindo testes regulares e gestão de vulnerabilidades. Os seus clientes em setores como energia, saúde, transportes, banca ou infraestruturas digitais serão diretamente abrangidos - e vão precisar de parceiros que os ajudem a cumprir."
  },
  {
    question: "Como posso oferecer serviços NIS2 aos meus clientes com a CyberInspect?",
    answer: "A CyberInspect permite-lhe executar testes de cibersegurança (vulnerability scanning, penetration testing, security assessments) de forma estruturada e escalável para múltiplos clientes. A plataforma gera relatórios e evidências técnicas prontas para auditorias, sem necessidade de criar processos do zero. Basta integrar a CyberInspect na sua oferta de serviços."
  },
  {
    question: "Que tipo de receita posso gerar como Parceiro?",
    answer: "A NIS2 exige testes regulares e gestão contínua de vulnerabilidades - o que significa contratos recorrentes, não projetos pontuais. Além disso, cada vulnerabilidade identificada é uma oportunidade para vender serviços de remediação. Os Parceiros podem aumentar significativamente o ticket médio por cliente com margens superiores."
  },
  {
    question: "Preciso de ter equipa especializada em cibersegurança?",
    answer: "Não necessariamente. A CyberInspect foi desenhada para Service Providers que querem entrar ou crescer no mercado de cibersegurança. A plataforma automatiza os processos técnicos mais complexos e gera relatórios com apoio de IA, permitindo que a sua equipa entregue serviços de elevada qualidade sem precisar de especialistas dedicados."
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageCircleQuestion className="w-10 h-10 text-cyberLight" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Perguntas <span className="text-cyberLight">frequentes</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Respostas às dúvidas mais comuns dos nossos Parceiros sobre a NIS2 e a CyberInspect
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-glass backdrop-blur-sm border border-border rounded-xl px-6 shadow-card hover:shadow-neon transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 bg-gradient-to-r from-cyberLight/10 to-cyberBlue/10 border border-cyberLight/20 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              Quer saber mais sobre o programa de parceria?
            </h3>
            <p className="text-muted-foreground mb-6">
              Fale connosco para conhecer as condições e começar a oferecer serviços NIS2 aos seus clientes
            </p>
            <a
              href="#form"
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold h-11 px-8 bg-cyberLight text-white shadow-cta hover:shadow-neon hover:scale-105 transition-all duration-300 border border-white/10"
            >
              Tornar-se Parceiro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
