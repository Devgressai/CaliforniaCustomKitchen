import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Testimonials, TestimonialsSchema } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Custom Kitchens Rancho Santa Fe | Luxury Cabinetry San Diego | PineWood Cabinets',
  description: 'Custom kitchen design and luxury cabinetry in Rancho Santa Fe, San Diego. PineWood Cabinets creates museum-grade kitchens for Rancho Santa Fe\'s most prestigious estate homes.',
  keywords: [
    'custom kitchens Rancho Santa Fe',
    'luxury cabinetry San Diego',
    'kitchen design Rancho Santa Fe',
    'custom cabinets Rancho Santa Fe',
    'kitchen renovation Rancho Santa Fe',
    'bespoke cabinetry San Diego',
    'Rancho Santa Fe kitchen designer',
    'San Diego custom kitchens'
  ],
  openGraph: {
    title: 'Custom Kitchens Rancho Santa Fe | PineWood Cabinets',
    description: 'Custom kitchen design and luxury cabinetry in Rancho Santa Fe, San Diego.',
    images: ['/images/service-areas/san-diego-county/rancho-santa-fe-kitchen.webp'],
  },
}

export default function RanchoSantaFePage() {
  return (
    <main className="min-h-screen">
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'San Diego County', href: '/service-areas/san-diego-county' },
              { name: 'Rancho Santa Fe', href: '/service-areas/san-diego-county/rancho-santa-fe', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens Rancho Santa Fe"
        subtitle="Luxury Cabinetry in San Diego's Premier Estate Community"
        description="Create museum-grade custom kitchens in Rancho Santa Fe's prestigious estate homes. Our designs complement the neighborhood's luxury lifestyle while delivering exceptional functionality."
        imageSrc="service-areas/san-diego-county/rancho-santa-fe-kitchen.webp"
        imageAlt="Luxury custom kitchen in Rancho Santa Fe estate home"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in rancho-santa-fe</h2>
            <p className="text-xl text-charcoal/80">
              Rancho Santa Fe represents the pinnacle of San Diego estate living, known for its luxury homes, 
              prestigious address, and sophisticated lifestyle. Our custom kitchens in Rancho Santa Fe are designed to 
              complement this elite community while providing the luxury and functionality today's estate owners demand.
            </p>
          </div>
        </div>
      </section>

      <Testimonials maxItems={3} />

      <CTASection
        title="Ready to Create Your Rancho Santa Fe Kitchen?"
        description="Let's discuss your vision and create a custom kitchen that reflects your estate lifestyle."
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
            "name": "PineWood Cabinets - Rancho Santa Fe",
            "description": "Custom kitchen design and luxury cabinetry in Rancho Santa Fe, San Diego",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/san-diego-county/rancho-santa-fe",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rancho Santa Fe",
              "addressLocality": "San Diego",
              "addressRegion": "CA",
              "postalCode": "92067",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.0231",
              "longitude": "-117.1992"
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
