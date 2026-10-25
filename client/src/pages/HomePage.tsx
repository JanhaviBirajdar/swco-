import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { HeroSection } from '../components/home/HeroSection';
import { ProblemsSection } from '../components/home/ProblemsSection';
import { SolutionsGrid } from '../components/home/SolutionsGrid';
import { InteractiveMappingDemo } from '../components/home/InteractiveMappingDemo';
import { DashboardShowcase } from '../components/home/DashboardShowcase';
import { HowItWorksSection } from '../components/home/HowItWorksSection';
import { AccreditationSupportSection } from '../components/home/AccreditationSupportSection';
import { StakeholderBenefitsSection } from '../components/home/StakeholderBenefitsSection';
import { ProductScreenshotsSection } from '../components/home/ProductScreenshotsSection';
import { FAQSection } from '../components/home/FAQSection';
import { HighConversionCTA } from '../components/home/HighConversionCTA';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="VasuNiti — Outcome-Based Education & CO–PO Mapping Software"
        description="Simplify CO–PO mapping, track outcome attainment, and organize academic evidence with a smarter platform built for engineering colleges and higher education institutions."
      />

      <div className="relative">
        {/* Section 2: Hero */}
        <HeroSection />

        {/* Section 3: The Problem Colleges Face */}
        <ProblemsSection />

        {/* Section 4: The VasuNiti Solution Capabilities */}
        <SolutionsGrid />

        {/* Section 5: Interactive CO-PO Mapping Demonstration */}
        <InteractiveMappingDemo />

        {/* Section 6: Dashboard & Analytics Showcase */}
        <DashboardShowcase />

        {/* Section 7: How It Works */}
        <HowItWorksSection />

        {/* Section 8: Accreditation & Quality Assurance (NBA & NAAC) */}
        <AccreditationSupportSection />

        {/* Section 9: Who Benefits from VasuNiti? */}
        <StakeholderBenefitsSection />

        {/* Section 10: Product Screenshots & Tour */}
        <ProductScreenshotsSection />

        {/* Section 11: Frequently Asked Questions */}
        <FAQSection />

        {/* Section 12: High-Conversion CTA */}
        <HighConversionCTA />
      </div>
    </>
  );
};

export default HomePage;
