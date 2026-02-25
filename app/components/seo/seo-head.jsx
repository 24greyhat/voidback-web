'use client'

import { Helmet, HelmetProvider } from 'react-helmet-async';


export function SEOHead({
  title = 'Voidback - Enterprise AI Training Data Platform',
  description = 'Voidback provides consensually sourced, diverse datasets for AI training. Enterprise data marketplace connecting businesses with verified annotators. 80% revenue share with data contributors.',
  keywords = 'AI training data, machine learning datasets, data annotation platform, consensual data sourcing, enterprise AI, computer vision data, annotator marketplace, ethical AI data',
  ogImage = 'https://voidback.com/og-image.jpg',
  canonicalUrl,
  type = 'website',
  includeServiceSchema = false
}) {

  const url = canonicalUrl || `https://voidback.com${window?.location.pathname}`

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Voidback",
    "url": "https://voidback.com",
    "logo": "https://voidback.com/logo.png",
    "description": description,
    "foundingDate": "2026",
    "sameAs": [
      "https://twitter.com/voidback",
      "https://linkedin.com/company/voidback"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "email": "hello@voidback.com"
    }
  };

  // Service schema for landing page
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Training Data Platform",
    "provider": {
      "@type": "Organization",
      "name": "Voidback"
    },
    "description": "Enterprise AI training data platform providing consensually sourced, diverse datasets for machine learning and computer vision",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Training Datasets",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Computer Vision Data",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Dataset Request",
                "description": "Request custom AI training datasets tailored to your specific requirements"
              }
            }
          ]
        }
      ]
    }
  };

  return (
    <HelmetProvider>

      <Helmet>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        {/* Canonical URL */}
        <link rel="canonical" href={url} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Voidback" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Voidback" />
        <meta name="revisit-after" content="7 days" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>

        {includeServiceSchema && (
          <script type="application/ld+json">
            {JSON.stringify(serviceSchema)}
          </script>
        )}
      </Helmet>
    </HelmetProvider>
  );
}
