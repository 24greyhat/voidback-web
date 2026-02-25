import { Helmet } from 'react-helmet-async';

/**
 * Resource hints for performance optimization
 * Preconnect to external domains, preload critical resources
 */
export function ResourceHints() {
  return (
    <Helmet>
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      
      {/* Preconnect to critical third-party origins */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Viewport meta for responsive design */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      
      {/* Theme color for mobile browsers */}
      <meta name="theme-color" content="#000000" />
      
      {/* Referrer policy */}
      <meta name="referrer" content="origin-when-cross-origin" />
    </Helmet>
  );
}
