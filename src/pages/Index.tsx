import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyRiskIdentification from "@/components/WhyRiskIdentification";
import HowCyberInspectHelps from "@/components/HowCyberInspectHelps";
import FinalCTA from "@/components/FinalCTA";
import FAQ from "@/components/FAQ";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CyberInspect - Identificação de Risco e Conformidade NIS2</title>
        <meta
          name="description"
          content="O primeiro passo para cumprir a NIS2 é identificar vulnerabilidades nos seus ativos digitais. A CyberInspect ajuda-o a dar esse passo."
        />
        <meta name="keywords" content="NIS2, identificação de risco, vulnerabilidades, cibersegurança, conformidade, diretiva europeia" />
        <link rel="canonical" href="https://cyberinspect.pt" />

        {/* Open Graph */}
        <meta property="og:title" content="CyberInspect - Identificação de Risco NIS2" />
        <meta property="og:description" content="O primeiro passo para cumprir a NIS2 é identificar vulnerabilidades nos seus ativos digitais." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CyberInspect - Identificação de Risco NIS2" />
        <meta name="twitter:description" content="O primeiro passo para cumprir a NIS2 é identificar vulnerabilidades nos seus ativos digitais." />
      </Helmet>

      <Header />
      <main>
        <Hero />
        <WhyRiskIdentification />
        <HowCyberInspectHelps />
        <FinalCTA />
        <FAQ />
        <SocialProof />
        <Footer />
        <StickyMobileCTA />
      </main>
    </>
  );
};

export default Index;
