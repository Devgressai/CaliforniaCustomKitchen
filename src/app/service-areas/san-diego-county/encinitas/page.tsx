import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Testimonials, TestimonialsSchema } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Custom Kitchens Encinitas | Luxury Cabinetry San Diego | PineWood Cabinets',
  description: 'Custom kitchen design and luxury cabinetry in Encinitas, San Diego. PineWood Cabinets creates museum-grade kitchens for Encinitas\' most prestigious coastal homes.',
  keywords: [
    'custom kitchens Encinitas',
    'luxury cabinetry San Diego',
    'kitchen design Encinitas',
    'custom cabinets Encinitas',
    'kitchen renovation Encinitas',
    'bespoke cabinetry San Diego',
    'Encinitas kitchen designer',
    'San Diego custom kitchens'
  ],
  openGraph: {
    title: 'Custom Kitchens Encinitas | PineWood Cabinets',
    description: 'Custom kitchen design and luxury cabinetry in Encinitas, San Diego.',
    images: ['/images/service-areas/san-diego-county/encinitas-kitchen.webp'],
  },
}

export default function EncinitasPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'San Diego County', href: '/service-areas/san-diego-county' },
              { name: 'Encinitas', href: '/service-areas/san-diego-county/encinitas', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens Encinitas"
        subtitle="Luxury Cabinetry in San Diego's Coastal Community"
        description="Create museum-grade custom kitchens in Encinitas' prestigious coastal homes. Our designs complement the neighborhood's beach lifestyle while delivering exceptional functionality."
        imageSrc="service-areas/san-diego-county/encinitas-kitchen.webp"
        imageAlt="Luxury custom kitchen in Encinitas coastal home"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in encinitas</h2>
            <p className="text-xl text-charcoal/80">
              Encinitas represents the perfect blend of San Diego coastal living and community charm, known for its 
              beach lifestyle, surf culture, and sophisticated homes. Our custom kitchens in Encinitas are designed to 
              complement this unique environment while providing the luxury and functionality today's homeowners demand.
            </p>
          </div>
        </div>
      </section>

      <Testimonials maxItems={3} />

      <CTASection
        title="Ready to Create Your Encinitas Kitchen?"
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
            "name": "PineWood Cabinets - Encinitas",
            "description": "Custom kitchen design and luxury cabinetry in Encinitas, San Diego",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/san-diego-county/encinitas",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Encinitas",
              "addressLocality": "San Diego",
              "addressRegion": "CA",
              "postalCode": "92024",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.0370",
              "longitude": "-117.2920"
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
