import { Shield } from "lucide-react";
import logo from "@/assets/cyberinspect-logo.png";
import footerLogos from "@/assets/footer-logos.png";
import iso27001Badge from "@/assets/iso-27001-badge.png";
import rgpdBadge from "@/assets/rgpd-badge.png";

const Footer = () => {
  return (
    <footer id="contactos" className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-8">
          <img 
            src={logo} 
            alt="CyberInspect Logo" 
            className="h-10 w-auto mb-4"
          />
          <p className="text-muted-foreground text-sm">
            Uma marca NOS
          </p>
        </div>

        {/* Certification Badges */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <img 
            src={iso27001Badge} 
            alt="ISO 27001 Certified" 
            className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity"
          />
          <img 
            src={rgpdBadge} 
            alt="RGPD Compliant" 
            className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Client Direct Service */}
        <div className="flex justify-center mb-8">
          <p className="text-sm text-muted-foreground/70 text-center max-w-md">
            Também realizamos avaliações de cibersegurança diretamente para empresas.{" "}
            <a 
              href="https://cyberinspect.com/cyberinspect/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neonCyan/80 hover:text-neonCyan transition-colors underline"
            >
              Entre em contacto com a nossa equipa aqui
            </a>
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-center items-center mb-8">
          <a 
            href="https://cyberinspect.com/cyberinspect/TermsAndConditions" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Termos e Condições
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <img 
              src={footerLogos} 
              alt="Logos institucionais" 
              className="h-8 md:h-10 w-auto"
            />
            <p className="text-sm text-muted-foreground/60">
              © 2025 CyberInspect. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
