import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Testimonials, TestimonialsSchema } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Custom Kitchens Venice | Luxury Cabinetry Los Angeles | PineWood Cabinets',
  description: 'Custom kitchen design and luxury cabinetry in Venice, Los Angeles. PineWood Cabinets creates museum-grade kitchens for Venice\'s most prestigious beachfront homes.',
  keywords: [
    'custom kitchens Venice',
    'luxury cabinetry Los Angeles',
    'kitchen design Venice',
    'custom cabinets Venice',
    'kitchen renovation Venice',
    'bespoke cabinetry Los Angeles',
    'Venice kitchen designer',
    'Los Angeles custom kitchens'
  ],
  openGraph: {
    title: 'Custom Kitchens Venice | PineWood Cabinets',
    description: 'Custom kitchen design and luxury cabinetry in Venice, Los Angeles.',
    images: ['/images/service-areas/los-angeles/venice-kitchen.webp'],
  },
}

export default function VenicePage() {
  return (
    <main className="min-h-screen">
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'Los Angeles', href: '/service-areas/los-angeles' },
              { name: 'Venice', href: '/service-areas/los-angeles/venice', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens Venice"
        subtitle="Luxury Cabinetry in Los Angeles' Artistic Beach Community"
        description="Create museum-grade custom kitchens in Venice's prestigious beachfront homes. Our designs complement the neighborhood's artistic spirit while delivering exceptional functionality."
        imageSrc="service-areas/los-angeles/venice-kitchen.webp"
        imageAlt="Luxury custom kitchen in Venice beachfront home"
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
              Venice Kitchen Design Excellence
            </h2>
            <p className="text-xl text-charcoal/80">
              Venice represents the artistic heart of Los Angeles beachfront living, known for its creative community, 
              stunning ocean views, and bohemian lifestyle. Our custom kitchens in Venice are designed to 
              complement this unique neighborhood while providing the luxury and functionality today's homeowners demand.
            </p>
          </div>
        </div>
      </section>

      <Testimonials maxItems={3} />

      <CTASection
        title="Ready to Create Your Venice Kitchen?"
        description="Let's discuss your vision and create a custom kitchen that reflects your artistic lifestyle."
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
            "name": "PineWood Cabinets - Venice",
            "description": "Custom kitchen design and luxury cabinetry in Venice, Los Angeles",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/los-angeles/venice",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Venice",
              "addressLocality": "Los Angeles",
              "addressRegion": "CA",
              "postalCode": "90291",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.9850",
              "longitude": "-118.4695"
            },
            "areaServed": {
              "@type": "City",
              "name": "Los Angeles"
            },
            "serviceType": "Custom Kitchen Design and Cabinetry"
          })
        }}
      />

      <TestimonialsSchema />
    </main>
  )
}
