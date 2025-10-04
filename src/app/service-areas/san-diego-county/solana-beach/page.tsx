import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Testimonials, TestimonialsSchema } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Custom Kitchens Solana Beach | Luxury Cabinetry San Diego | PineWood Cabinets',
  description: 'Custom kitchen design and luxury cabinetry in Solana Beach, San Diego. PineWood Cabinets creates museum-grade kitchens for Solana Beach\'s most prestigious coastal homes.',
  keywords: [
    'custom kitchens Solana Beach',
    'luxury cabinetry San Diego',
    'kitchen design Solana Beach',
    'custom cabinets Solana Beach',
    'kitchen renovation Solana Beach',
    'bespoke cabinetry San Diego',
    'Solana Beach kitchen designer',
    'San Diego custom kitchens'
  ],
  openGraph: {
    title: 'Custom Kitchens Solana Beach | PineWood Cabinets',
    description: 'Custom kitchen design and luxury cabinetry in Solana Beach, San Diego.',
    images: ['/images/service-areas/san-diego-county/solana-beach-kitchen.webp'],
  },
}

export default function SolanaBeachPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'San Diego County', href: '/service-areas/san-diego-county' },
              { name: 'Solana Beach', href: '/service-areas/san-diego-county/solana-beach', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens Solana Beach"
        subtitle="Luxury Cabinetry in San Diego's Coastal Community"
        description="Create museum-grade custom kitchens in Solana Beach's prestigious coastal homes. Our designs complement the neighborhood's beach lifestyle while delivering exceptional functionality."
        imageSrc="service-areas/san-diego-county/solana-beach-kitchen.webp"
        imageAlt="Luxury custom kitchen in Solana Beach coastal home"
        primaryCTA={{
          text: "Start Your Project",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Our Portfolio",
          href: "/portfolio"
        }}
      />

      <section className="py-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in solana-beach</h2>
            <p className="text-xl text-charcoal/80">
              Solana Beach represents the perfect blend of San Diego coastal living and artistic community, known for its 
              beautiful beaches, creative atmosphere, and sophisticated homes. Our custom kitchens in Solana Beach are designed to 
              complement this unique environment while providing the luxury and functionality today's homeowners demand.
            </p>
          </div>
        </div>
      </section>

      <Testimonials maxItems={3} />

      <CTASection
        title="Ready to Create Your Solana Beach Kitchen?"
        description="Let's discuss your vision and create a custom kitchen that complements your coastal lifestyle."
        primaryCTA={{
          text: "Start Your Project",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Our Portfolio",
          href: "/portfolio"
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "PineWood Cabinets - Solana Beach",
            "description": "Custom kitchen design and luxury cabinetry in Solana Beach, San Diego",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/san-diego-county/solana-beach",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Solana Beach",
              "addressLocality": "San Diego",
              "addressRegion": "CA",
              "postalCode": "92075",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "32.9912",
              "longitude": "-117.2711"
            },
            "areaServed": {
              "@type": "City",
              "name": "San Diego"
            },
            "serviceType": "Custom Kitchen Design and Cabinetry"
          })
        }}
      />

      <TestimonialsSchema />
    </main>
  )
}
