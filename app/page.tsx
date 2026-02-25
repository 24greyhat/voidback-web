import { SEOHead } from "./components/seo/seo-head";
import { HeroSection } from "./components/landing/hero-section";
import { StatsSection } from "./components/landing/stats-section";
import { FeaturesSection } from "./components/landing/features-section";
import { RequestFulfillmentViz } from "./components/landing/request-fulfillment-viz";
import { ProcessSection } from "./components/landing/process-section";
import { CustomRequestsSection } from "./components/landing/marketplace-section";
import { CTASection } from "./components/landing/cta-section";
import { Footer } from "./components/landing/footer";


export default function Page() {
  return (
    <>
      <SEOHead
        title="Voidback - Enterprise AI Training Data Platform | Ethical Dataset Marketplace"
        description="Access high-quality, consensually sourced AI training datasets. Voidback connects enterprises with verified annotators, sharing 80% of proceeds. Request custom datasets for computer vision, NLP, and machine learning projects."
        keywords="AI training data, machine learning datasets, data annotation, computer vision data, enterprise AI platform, ethical data sourcing, annotator marketplace, consensual data, custom datasets, AI model training"
        includeServiceSchema={true}
      />
      <div className="pt-20" style={{ fontFamily: 'var(--font-family-serif)' }}>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <RequestFulfillmentViz />
        <ProcessSection />
        <CustomRequestsSection />
        <CTASection />
        <Footer />
      </div>
    </>
  );
}
