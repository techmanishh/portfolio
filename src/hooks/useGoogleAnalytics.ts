import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export function useGoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    console.log('[GA Debug] ID:', GA_MEASUREMENT_ID);
    if (!GA_MEASUREMENT_ID) return;

    // Load GA script dynamically if not already present
    if (!window.gtag) {
      console.log('[GA Debug] Injecting script tag for:', GA_MEASUREMENT_ID);
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer?.push(arguments);
      };

      window.gtag('js', new Date());
    }

    // Log the page view with current path
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: location.pathname + location.search,
    });
  }, [location]);
}
