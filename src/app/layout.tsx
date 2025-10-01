import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: "AV's Cabinets | Custom Kitchens & Bespoke Cabinetry | California",
    template: "%s | AV's Cabinets"
  },
  description: "Museum-grade custom kitchens, bespoke cabinetry, and architectural millwork for California's finest homes. Serving Silicon Valley, Marin, Lake Tahoe, and beyond since 2006.",
  keywords: [
    'custom kitchens',
    'bespoke cabinetry',
    'architectural millwork',
    'luxury cabinetry',
    'custom millwork',
    'California',
    'Silicon Valley',
    'Marin County',
    'Lake Tahoe'
  ],
  authors: [{ name: "AV's Cabinets" }],
  creator: "AV's Cabinets",
  publisher: "AV's Cabinets",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://avscabinets.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://avscabinets.com',
    siteName: "AV's Cabinets",
    title: "AV's Cabinets | Custom Kitchens & Bespoke Cabinetry",
    description: "Museum-grade custom kitchens, bespoke cabinetry, and architectural millwork for California's finest homes.",
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: "AV's Cabinets - Custom Kitchen Cabinetry",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AV's Cabinets | Custom Kitchens & Bespoke Cabinetry",
    description: "Museum-grade custom kitchens, bespoke cabinetry, and architectural millwork for California's finest homes.",
    images: ['/images/og-home.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AV's Cabinets",
              "description": "Custom kitchens, bespoke cabinetry, and architectural millwork",
              "url": "https://avscabinets.com",
              "logo": "https://avscabinets.com/images/logo.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-XXX-XXX-XXXX",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "California",
                "addressCountry": "US"
              },
              "sameAs": []
            })
          }}
        />
      </head>
      <body className="bg-ivory text-charcoal">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
