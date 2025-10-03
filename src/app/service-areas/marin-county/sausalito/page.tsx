import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Testimonials, TestimonialsSchema } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Custom Kitchens Sausalito | Luxury Cabinetry Marin County | PineWood Cabinets',
  description: 'Custom kitchen design and luxury cabinetry in Sausalito, Marin County. PineWood Cabinets creates museum-grade kitchens for Sausalito\'s most prestigious waterfront homes.',
  keywords: [
    'custom kitchens Sausalito',
    'luxury cabinetry Marin County',
    'kitchen design Sausalito',
    'custom cabinets Sausalito',
    'kitchen renovation Sausalito',
    'bespoke cabinetry Marin County',
    'Sausalito kitchen designer',
    'Marin County custom kitchens'
  ],
  openGraph: {
    title: 'Custom Kitchens Sausalito | PineWood Cabinets',
    description: 'Custom kitchen design and luxury cabinetry in Sausalito, Marin County.',
    images: ['/images/service-areas/marin-county/sausalito-kitchen.webp'],
  },
}

export default function SausalitoPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'Marin County', href: '/service-areas/marin-county' },
              { name: 'Sausalito', href: '/service-areas/marin-county/sausalito', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens Sausalito"
        subtitle="Luxury Cabinetry in Marin County's Waterfront Community"
        description="Create museum-grade custom kitchens in Sausalito's prestigious waterfront homes. Our designs complement the neighborhood's artistic spirit while delivering exceptional functionality."
        imageSrc="service-areas/marin-county/sausalito-kitchen.webp"
        imageAlt="Luxury custom kitchen in Sausalito waterfront home"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Sausalito Kitchen Design Excellence
            </h2>
            <p className="text-xl text-charcoal/80">
              Sausalito represents the perfect blend of Marin County waterfront living and artistic community, known for its 
              stunning Bay views, creative atmosphere, and sophisticated homes. Our custom kitchens in Sausalito are designed to 
              complement this unique environment while providing the luxury and functionality today's homeowners demand.
            </p>
          </div>
        </div>
      </section>

      <Testimonials maxItems={3} />

      <CTASection
        title="Ready to Create Your Sausalito Kitchen?"
        description="Let's discuss your vision and create a custom kitchen that complements your waterfront lifestyle."
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
            "name": "PineWood Cabinets - Sausalito",
            "description": "Custom kitchen design and luxury cabinetry in Sausalito, Marin County",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/marin-county/sausalito",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sausalito",
              "addressLocality": "Marin County",
              "addressRegion": "CA",
              "postalCode": "94965",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.8591",
              "longitude": "-122.4853"
            },
            "areaServed": {
              "@type": "City",
              "name": "Marin County"
            },
            "serviceType": "Custom Kitchen Design and Cabinetry"
          })
        }}
      />

      <TestimonialsSchema />
    </main>
  )
}
