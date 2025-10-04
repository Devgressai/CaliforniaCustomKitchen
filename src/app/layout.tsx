import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: "PineWood Cabinets | Custom Kitchens & Bespoke Cabinetry | California",
    template: "%s | PineWood Cabinets"
  },
  description: "Museum-grade custom kitchens, bespoke cabinetry, and architectural millwork for California's finest homes. Serving Silicon Valley, Marin, Lake Tahoe, and beyond since 2006.",
  keywords: [
    'custom kitchens California',
    'luxury cabinetry Silicon Valley',
    'bespoke cabinetry Beverly Hills',
    'custom kitchen cabinets Atherton',
    'architectural millwork Marin County',
    'luxury kitchen design Malibu',
    'custom cabinets Pacific Heights',
    'high-end kitchen renovation',
    'premium cabinetry Los Angeles',
    'custom millwork San Francisco',
    'kitchen design consultation',
    'luxury home renovation',
    'custom storage solutions',
    'wine cellar design',
    'kitchen remodeling California'
  ],
  authors: [{ name: "PineWood Cabinets" }],
  creator: "PineWood Cabinets",
  publisher: "PineWood Cabinets",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://california-custom-kitchen.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://california-custom-kitchen.vercel.app',
    siteName: "PineWood Cabinets",
    title: "PineWood Cabinets | Custom Kitchens & Bespoke Cabinetry",
    description: "Museum-grade custom kitchens, bespoke cabinetry, and architectural millwork for California's finest homes.",
    images: [
      {
        url: '/images/portfolio/gallery-luxury-custom-kitchen-1-sacramento-california.webp',
        width: 1200,
        height: 630,
        alt: "PineWood Cabinets - Custom Kitchen Cabinetry",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "PineWood Cabinets | Custom Kitchens & Bespoke Cabinetry",
    description: "Museum-grade custom kitchens, bespoke cabinetry, and architectural millwork for California's finest homes.",
    images: ['/images/portfolio/gallery-luxury-custom-kitchen-1-sacramento-california.webp'],
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
              "name": "PineWood Cabinets",
              "description": "Museum-grade custom kitchens, bespoke cabinetry, and architectural millwork for California's finest homes",
              "url": "https://california-custom-kitchen.vercel.app",
              "logo": "https://california-custom-kitchen.vercel.app/images/logo.svg",
              "foundingDate": "2006",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-916-742-0030",
                "contactType": "customer service",
                "availableLanguage": "English",
                "areaServed": "California"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2281 Lava Ridge Ct Ste. 200",
                "addressLocality": "Roseville",
                "addressRegion": "CA",
                "postalCode": "95661",
                "addressCountry": "US"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Atherton",
                  "sameAs": "https://en.wikipedia.org/wiki/Atherton,_California"
                },
                {
                  "@type": "City", 
                  "name": "Beverly Hills",
                  "sameAs": "https://en.wikipedia.org/wiki/Beverly_Hills,_California"
                },
                {
                  "@type": "City",
                  "name": "Malibu",
                  "sameAs": "https://en.wikipedia.org/wiki/Malibu,_California"
                },
                {
                  "@type": "City",
                  "name": "Palo Alto",
                  "sameAs": "https://en.wikipedia.org/wiki/Palo_Alto,_California"
                },
                {
                  "@type": "City",
                  "name": "San Francisco",
                  "sameAs": "https://en.wikipedia.org/wiki/San_Francisco"
                }
              ],
              "serviceType": [
                "Custom Kitchen Cabinets",
                "Luxury Cabinetry",
                "Architectural Millwork",
                "Bespoke Furniture",
                "Kitchen Design",
                "Cabinet Refacing",
                "Custom Storage Solutions"
              ],
              "priceRange": "$$$",
              "openingHours": "Mo-Fr 09:00-18:00,Sa 10:00-16:00",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Kitchen Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Kitchen Design",
                      "description": "Bespoke kitchen design and consultation services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cabinet Manufacturing",
                      "description": "Custom cabinet construction and installation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Kitchen Remodeling",
                      "description": "Complete kitchen renovation and remodeling services"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://www.facebook.com/pinewoodcabinets",
                "https://www.instagram.com/pinewoodcabinets",
                "https://www.houzz.com/pro/pinewoodcabinets",
                "https://www.yelp.com/biz/pinewood-cabinets-roseville"
              ]
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
