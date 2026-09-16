import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { HeroSection } from '../components/home/HeroSection';
import { TrustMetrics } from '../components/home/TrustMetrics';
import { ProductShowcase } from '../components/home/ProductShowcase';
import { FeaturesGrid } from '../components/home/FeaturesGrid';
import { InteractiveEcosystem } from '../components/home/InteractiveEcosystem';
import { WhyVasuNiti } from '../components/home/WhyVasuNiti';
import { TechStack } from '../components/home/TechStack';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { CTASection } from '../components/home/CTASection';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="VasuNiti — Software Built for the Way the World Works"
        description="VasuNiti builds intelligent, scalable software products that help businesses simplify complexity, automate operations, and move faster."
      />

      <div className="relative">
        <HeroSection />
        <TrustMetrics />
        <ProductShowcase />
        <FeaturesGrid />
        <InteractiveEcosystem />
        <WhyVasuNiti />
        <TechStack />
        <TestimonialsSection />
        <CTASection />
      </div>
    </>
  );
};
