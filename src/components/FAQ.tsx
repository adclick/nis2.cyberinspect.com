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
  {
    question: "Como funciona a obrigação de notificação de incidentes?",
    answer: "As entidades devem notificar incidentes significativos às autoridades competentes em três fases: alerta inicial (early warning) em caso de suspeita de ataque com impacto relevante, notificação oficial com avaliação detalhada do incidente e impacto, e relatórios intermédios e finais. Os prazos são rigorosos e o incumprimento pode resultar em penalizações adicionais."
  },
  {
    question: "Qual é a responsabilidade da gestão de topo?",
    answer: "A direção das entidades tem responsabilidade direta e legal pelo cumprimento da NIS2. Devem aprovar e supervisionar as medidas de gestão de risco, frequentar formação em cibersegurança, garantir formação interna e podem ser responsabilizados pessoalmente em caso de incumprimento. Esta é uma mudança significativa que coloca a cibersegurança ao nível das prioridades estratégicas da empresa."
  },
  {
    question: "Quando devo começar a preparar a minha empresa?",
    answer: "Deve começar imediatamente. Embora o prazo de transposição seja outubro de 2024, a implementação prática das medidas pode levar meses. Recomendamos: identificar se está abrangido (agora), avaliar o nível atual de conformidade (Q1 2024), implementar medidas técnicas e organizacionais (Q2-Q3 2024) e realizar testes e ajustes finais (Q4 2024). Quanto mais cedo começar, menor o risco de incumprimento."
  },
  {
    question: "Como a CyberInspect ajuda especificamente na conformidade NIS2?",
    answer: "A CyberInspect foca-se na componente técnica mais mensurável da NIS2: 'testes regulares e gestão de vulnerabilidades'. Realizamos testes técnicos regulares (scans de vulnerabilidade, penetration tests), identificamos e priorizamos falhas de segurança, estruturamos planos de correção e fornecemos documentação completa para demonstrar conformidade em auditorias. Não somos uma consultoria geral de compliance, mas sim especialistas na execução prática da parte técnica da NIS2."
  },
  {
    question: "Que tipos de testes de segurança são obrigatórios?",
    answer: "A NIS2 exige 'testes regulares' mas não especifica tipos exatos. As melhores práticas incluem: vulnerability scanning (análise automática de sistemas expostos), penetration testing (testes de intrusão controlados), security assessments (avaliação de configurações e políticas) e security audits (revisão de conformidade com standards). A CyberInspect oferece todos estes serviços adaptados ao contexto e criticidade de cada empresa."
  },
  {
    question: "A NIS2 substitui outras certificações como ISO 27001?",
    answer: "Não substitui, mas complementa. A NIS2 é uma obrigação legal com requisitos específicos e penalizações, enquanto certificações como ISO 27001 são standards voluntários (embora altamente recomendados). Na prática, empresas certificadas ISO 27001 já terão muitos controlos implementados, mas precisarão verificar gaps específicos da NIS2, especialmente em notificação de incidentes, responsabilização da gestão e requisitos de supervisão. A CyberInspect pode ajudar em ambos os contextos."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageCircleQuestion className="w-10 h-10 text-primary" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Perguntas <span className="bg-gradient-cyber bg-clip-text text-transparent">frequentes</span>
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

          <div className="mt-12 bg-gradient-to-r from-primary/10 to-cyberBlue/10 border border-primary/20 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              Ainda tem dúvidas sobre como preparar a sua empresa?
            </h3>
            <p className="text-muted-foreground mb-6">
              Fale connosco para uma avaliação personalizada da sua situação face à NIS2
            </p>
            <a
              href="#form"
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold h-11 px-8 bg-gradient-cta text-white shadow-cta hover:shadow-neon hover:scale-105 transition-all duration-300 border border-white/10"
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
