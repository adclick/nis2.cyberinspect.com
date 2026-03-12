import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NIS2Opportunity from "@/components/NIS2Opportunity";

import SPNeedScale from "@/components/SPNeedScale";
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
        <title>CyberInspect - Transforme a NIS2 num serviço escalável para Service Providers</title>
        <meta
          name="description"
          content="A CyberInspect é a forma mais simples para Service Providers transformarem a NIS2 num serviço estruturado, escalável e recorrente."
        />
        <meta name="keywords" content="NIS2, service providers, cibersegurança, escala, vulnerabilidades, conformidade, parceiro" />
        <link rel="canonical" href="https://cyberinspect.pt" />

        {/* Open Graph */}
        <meta property="og:title" content="CyberInspect - NIS2 para Service Providers" />
        <meta property="og:description" content="Transforme a NIS2 num serviço estruturado, escalável e recorrente." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CyberInspect - NIS2 para Service Providers" />
        <meta name="twitter:description" content="Transforme a NIS2 num serviço estruturado, escalável e recorrente." />
      </Helmet>

      <Header />
      <main>
        <Hero />
        <NIS2Opportunity />
        <WhyOpportunityForSP />
        <SPNeedScale />
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
