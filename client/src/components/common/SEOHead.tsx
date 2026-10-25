import React, { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'VasuNiti — Outcome-Based Education & CO–PO Mapping Software for Higher Education',
  description = 'Simplify CO–PO mapping, calculate outcome attainment, and organize academic evidence for NBA and NAAC quality assurance workflows with VasuNiti.',
  keywords = 'VasuNiti, CO-PO Mapping Software, Outcome-Based Education Software, CO-PO Attainment Software, Academic Outcome Management, NBA Documentation Support Software, NAAC Documentation Support Software, Higher Education OBE',
}) => {
  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }
  }, [title, description, keywords]);

  return null;
};
