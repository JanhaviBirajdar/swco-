import React, { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'VasuNiti — Software Built for the Way the World Works',
  description = 'VasuNiti builds intelligent, scalable software products that help modern businesses simplify complexity, automate operations, and scale with confidence.',
  keywords = 'VasuNiti, enterprise software, SaaS, automation, cloud platforms, digital transformation, business software, analytics',
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
