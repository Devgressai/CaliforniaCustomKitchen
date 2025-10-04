import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Testimonials, TestimonialsSchema } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Custom Kitchens Encino | Luxury Cabinetry Los Angeles | PineWood Cabinets',
  description: 'Custom kitchen design and luxury cabinetry in Encino, Los Angeles. PineWood Cabinets creates museum-grade kitchens for Encino\'s most prestigious family homes.',
  keywords: [
    'custom kitchens Encino',
    'luxury cabinetry Los Angeles',
    'kitchen design Encino',
    'custom cabinets Encino',
    'kitchen renovation Encino',
    'bespoke cabinetry Los Angeles',
    'Encino kitchen designer',
    'Los Angeles custom kitchens'
  ],
  openGraph: {
    title: 'Custom Kitchens Encino | PineWood Cabinets',
    description: 'Custom kitchen design and luxury cabinetry in Encino, Los Angeles.',
    images: ['/images/service-areas/los-angeles/encino-kitchen.webp'],
  },
}

export default function EncinoPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'Los Angeles', href: '/service-areas/los-angeles' },
              { name: 'Encino', href: '/service-areas/los-angeles/encino', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens Encino"
        subtitle="Luxury Cabinetry in Los Angeles' Family Community"
        description="Create museum-grade custom kitchens in Encino's prestigious family homes. Our designs complement the neighborhood's suburban charm while delivering exceptional functionality."
        imageSrc="service-areas/los-angeles/encino-kitchen.webp"
        imageAlt="Luxury custom kitchen in Encino family home"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in encino</h2>
            <p className="text-xl text-charcoal/80">
              Encino represents the ideal Los Angeles family community, known for its spacious homes, 
              excellent schools, and suburban charm. Our custom kitchens in Encino are designed to 
              complement this family-friendly environment while providing the luxury and functionality today's families demand.
            </p>
          </div>
        </div>
      </section>

      <Testimonials maxItems={3} />

      <CTASection
        title="Ready to Create Your Encino Kitchen?"
        description="Let's discuss your vision and create a custom kitchen that meets your family's needs."
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
            "name": "PineWood Cabinets - Encino",
            "description": "Custom kitchen design and luxury cabinetry in Encino, Los Angeles",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/los-angeles/encino",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Encino",
              "addressLocality": "Los Angeles",
              "addressRegion": "CA",
              "postalCode": "91316",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "34.1592",
              "longitude": "-118.5012"
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
