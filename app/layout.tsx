import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Analytics from '@/components/Analytics'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Developer & Data Engineer Portfolio',
    template: '%s | Portfolio',
  },
  description: 'Portfolio showcasing development and data engineering projects, skills, and experience.',
  keywords: ['developer', 'data engineer', 'software engineer', 'portfolio', 'web development', 'data engineering'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Developer & Data Engineer Portfolio',
    description: 'Portfolio showcasing development and data engineering projects',
    siteName: 'Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developer & Data Engineer Portfolio',
    description: 'Portfolio showcasing development and data engineering projects',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Match default dark theme color */}
        <meta name="theme-color" content="#020617" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Your Name',
              jobTitle: 'Developer & Data Engineer',
              url: 'https://yourportfolio.com',
              sameAs: [
                'https://github.com',
                'https://linkedin.com',
                'https://twitter.com',
              ],
              knowsAbout: [
                'Software Development',
                'Data Engineering',
                'Web Development',
                'Cloud Computing',
              ],
            }),
          }}
        />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

