import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Testimonials, TestimonialsSchema } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Custom Kitchens Carlsbad | Luxury Cabinetry San Diego | PineWood Cabinets',
  description: 'Custom kitchen design and luxury cabinetry in Carlsbad, San Diego. PineWood Cabinets creates museum-grade kitchens for Carlsbad\'s most prestigious coastal homes.',
  keywords: [
    'custom kitchens Carlsbad',
    'luxury cabinetry San Diego',
    'kitchen design Carlsbad',
    'custom cabinets Carlsbad',
    'kitchen renovation Carlsbad',
    'bespoke cabinetry San Diego',
    'Carlsbad kitchen designer',
    'San Diego custom kitchens'
  ],
  openGraph: {
    title: 'Custom Kitchens Carlsbad | PineWood Cabinets',
    description: 'Custom kitchen design and luxury cabinetry in Carlsbad, San Diego.',
    images: ['/images/service-areas/san-diego-county/carlsbad-kitchen.webp'],
  },
}

export default function CarlsbadPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'San Diego County', href: '/service-areas/san-diego-county' },
              { name: 'Carlsbad', href: '/service-areas/san-diego-county/carlsbad', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens Carlsbad"
        subtitle="Luxury Cabinetry in San Diego's Coastal Community"
        description="Create museum-grade custom kitchens in Carlsbad's prestigious coastal homes. Our designs complement the neighborhood's beach lifestyle while delivering exceptional functionality."
        imageSrc="service-areas/san-diego-county/carlsbad-kitchen.webp"
        imageAlt="Luxury custom kitchen in Carlsbad coastal home"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in carlsbad</h2>
            <p className="text-xl text-charcoal/80">
              Carlsbad represents the perfect blend of San Diego coastal living and family community, known for its 
              beautiful beaches, family-friendly atmosphere, and sophisticated homes. Our custom kitchens in Carlsbad are designed to 
              complement this unique environment while providing the luxury and functionality today's families demand.
            </p>
          </div>
        </div>
      </section>

      <Testimonials maxItems={3} />

      <CTASection
        title="Ready to Create Your Carlsbad Kitchen?"
        description="Let's discuss your vision and create a custom kitchen that complements your coastal family lifestyle."
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
            "name": "PineWood Cabinets - Carlsbad",
            "description": "Custom kitchen design and luxury cabinetry in Carlsbad, San Diego",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/san-diego-county/carlsbad",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Carlsbad",
              "addressLocality": "San Diego",
              "addressRegion": "CA",
              "postalCode": "92008",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.1581",
              "longitude": "-117.3506"
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
