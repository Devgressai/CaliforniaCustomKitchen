import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Testimonials, TestimonialsSchema } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Custom Kitchens Berkeley | Luxury Cabinetry East Bay | PineWood Cabinets',
  description: 'Custom kitchen design and luxury cabinetry in Berkeley, East Bay. PineWood Cabinets creates museum-grade kitchens for Berkeley\'s most prestigious hillside homes.',
  keywords: [
    'custom kitchens Berkeley',
    'luxury cabinetry East Bay',
    'kitchen design Berkeley',
    'custom cabinets Berkeley',
    'kitchen renovation Berkeley',
    'bespoke cabinetry East Bay',
    'Berkeley kitchen designer',
    'East Bay custom kitchens'
  ],
  openGraph: {
    title: 'Custom Kitchens Berkeley | PineWood Cabinets',
    description: 'Custom kitchen design and luxury cabinetry in Berkeley, East Bay.',
    images: ['/images/service-areas/berkeley-kitchen.webp'],
  },
}

export default function BerkeleyPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'Berkeley', href: '/service-areas/berkeley', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens Berkeley"
        subtitle="Luxury Cabinetry in East Bay's Intellectual Community"
        description="Create museum-grade custom kitchens in Berkeley's prestigious hillside homes. Our designs complement the neighborhood's intellectual spirit while delivering exceptional functionality."
        imageSrc="service-areas/berkeley-kitchen.webp"
        imageAlt="Luxury custom kitchen in Berkeley hillside home"
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
              Berkeley Kitchen Design Excellence
            </h2>
            <p className="text-xl text-charcoal/80">
              Berkeley represents the intellectual heart of the East Bay, known for its university community, 
              hillside homes, and sophisticated lifestyle. Our custom kitchens in Berkeley are designed to 
              complement this unique environment while providing the luxury and functionality today's homeowners demand.
            </p>
          </div>
        </div>
      </section>

      <Testimonials maxItems={3} />

      <CTASection
        title="Ready to Create Your Berkeley Kitchen?"
        description="Let's discuss your vision and create a custom kitchen that reflects your intellectual lifestyle."
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
            "name": "PineWood Cabinets - Berkeley",
            "description": "Custom kitchen design and luxury cabinetry in Berkeley, East Bay",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/berkeley",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Berkeley",
              "addressLocality": "East Bay",
              "addressRegion": "CA",
              "postalCode": "94701",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.8715",
              "longitude": "-122.2730"
            },
            "areaServed": {
              "@type": "City",
              "name": "East Bay"
            },
            "serviceType": "Custom Kitchen Design and Cabinetry"
          })
        }}
      />

      <TestimonialsSchema />
    </main>
  )
}
