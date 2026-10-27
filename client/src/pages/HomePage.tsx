import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { HeroSection } from '../components/home/HeroSection';
import { ProblemsSection } from '../components/home/ProblemsSection';
import { EducationalSoftwareSuite } from '../components/home/EducationalSoftwareSuite';
import { SolutionsGrid } from '../components/home/SolutionsGrid';
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
        title="VasuNiti — Educational Software Solutions for Higher Education & Universities"
        description="VasuNiti is an educational software company developing purpose-built software products for colleges and universities — including CO–PO mapping, attainment analytics, accreditation reporting, and institutional governance."
      />

      <div className="relative">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: The Problem Colleges Face */}
        <ProblemsSection />

        {/* Section 3: Educational Software Suite (Products) */}
        <EducationalSoftwareSuite />

        {/* Section 4: The VasuNiti Platform Capabilities */}
        <SolutionsGrid />

        {/* Section 5: Campus Dashboard & Analytics Showcase */}
        <DashboardShowcase />

        {/* Section 6: Standard Academic Workflow */}
        <HowItWorksSection />

        {/* Section 7: Accreditation & Quality Assurance (NBA & NAAC) */}
        <AccreditationSupportSection />

        {/* Section 8: Who Benefits Across the Institution */}
        <StakeholderBenefitsSection />

        {/* Section 9: Software Product Interface Tour */}
        <ProductScreenshotsSection />

        {/* Section 10: Frequently Asked Questions */}
        <FAQSection />

        {/* Section 11: High-Conversion CTA */}
        <HighConversionCTA />
      </div>
    </>
  );
};

export default HomePage;

