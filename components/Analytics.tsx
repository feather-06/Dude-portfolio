'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function Analytics() {
  useEffect(() => {
    // Custom analytics tracking
    const trackPageView = () => {
      // You can integrate with Google Analytics, Plausible, or any other analytics service
      if (typeof window !== 'undefined' && (window as any).gtag) {
        ;(window as any).gtag('config', 'GA_MEASUREMENT_ID', {
          page_path: window.location.pathname,
        })
      }
    }

    // Track initial page view
    trackPageView()

    // Track page views on route changes (Next.js)
    const handleRouteChange = () => {
      trackPageView()
    }

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange)

    return () => {
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [])

  // Google Analytics integration (uncomment and add your GA_MEASUREMENT_ID)
  // Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics ID
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || ''

  if (!GA_MEASUREMENT_ID) {
    // Return null if no analytics ID is configured
    // You can also integrate other analytics services here
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

