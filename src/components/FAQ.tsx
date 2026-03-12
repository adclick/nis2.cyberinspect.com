import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircleQuestion } from "lucide-react";

const faqs = [
  {
    question: "O que é a Diretiva NIS2 e quando entra em vigor?",
    answer: "A NIS2 (Diretiva 2022/2555) é a nova legislação europeia de cibersegurança que reforça a diretiva original NIS. Foi publicada em dezembro de 2022 e os Estados-Membros têm até 17 de outubro de 2024 para a transpor para a legislação nacional. Em Portugal, a transposição está em curso e as empresas devem preparar-se desde já para cumprir os requisitos."
  },
  {
    question: "A minha empresa está abrangida pela NIS2?",
    answer: "A NIS2 aplica-se a entidades 'Essenciais' e 'Importantes' que operam em setores críticos. Entidades Essenciais incluem grandes operadores em energia, transportes, saúde, infraestruturas digitais, banca e água. Entidades Importantes abrangem média dimensão em setores como correios, gestão de resíduos, produção alimentar, químicos, manufatura e fornecedores digitais. O critério inclui dimensão da empresa, setor de atividade e criticidade dos serviços prestados."
  },
  {
    question: "Quais são as penalizações por não conformidade?",
    answer: "As multas são significativas: Entidades Essenciais podem ser multadas até 10 milhões € ou 2% do volume de negócios anual global (o que for maior). Entidades Importantes enfrentam multas até 7 milhões € ou 1,4% do volume de negócios. Além disso, a gestão de topo é diretamente responsável e pode enfrentar sanções pessoais, incluindo proibição temporária de exercer funções de gestão."
  },
  {
    question: "O que são as medidas de gestão de risco exigidas?",
    answer: "A NIS2 exige múltiplas medidas, incluindo: análise de risco e segurança de sistemas, gestão de incidentes, continuidade de negócio, segurança na cadeia de abastecimento, e crucialmente - testes regulares e gestão de vulnerabilidades. As empresas devem implementar políticas de criptografia, formação de colaboradores, controlo de acessos, autenticação multi-fator e comunicações seguras. Todas as medidas devem ser documentadas e demonstráveis em auditorias."
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
              Tudo o que precisa de saber sobre a NIS2 e como preparar a sua empresa
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
              Ainda tem dúvidas sobre como preparar a sua empresa?
            </h3>
            <p className="text-muted-foreground mb-6">
              Fale connosco para uma avaliação personalizada da sua situação face à NIS2
            </p>
            <a
              href="#form"
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold h-11 px-8 bg-cyberLight text-white shadow-cta hover:shadow-neon hover:scale-105 transition-all duration-300 border border-white/10"
            >
              Solicitar Consulta Gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
