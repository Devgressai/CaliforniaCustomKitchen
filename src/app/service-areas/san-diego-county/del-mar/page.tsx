import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Testimonials, TestimonialsSchema } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Custom Kitchens Del Mar | Luxury Cabinetry San Diego | PineWood Cabinets',
  description: 'Custom kitchen design and luxury cabinetry in Del Mar, San Diego. PineWood Cabinets creates museum-grade kitchens for Del Mar\'s most prestigious beachfront homes.',
  keywords: [
    'custom kitchens Del Mar',
    'luxury cabinetry San Diego',
    'kitchen design Del Mar',
    'custom cabinets Del Mar',
    'kitchen renovation Del Mar',
    'bespoke cabinetry San Diego',
    'Del Mar kitchen designer',
    'San Diego custom kitchens'
  ],
  openGraph: {
    title: 'Custom Kitchens Del Mar | PineWood Cabinets',
    description: 'Custom kitchen design and luxury cabinetry in Del Mar, San Diego.',
    images: ['/images/service-areas/san-diego-county/del-mar-kitchen.webp'],
  },
}

export default function DelMarPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'San Diego County', href: '/service-areas/san-diego-county' },
              { name: 'Del Mar', href: '/service-areas/san-diego-county/del-mar', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens Del Mar"
        subtitle="Luxury Cabinetry in San Diego's Premier Beach Community"
        description="Create museum-grade custom kitchens in Del Mar's prestigious beachfront homes. Our designs complement the neighborhood's coastal lifestyle while delivering exceptional functionality."
        imageSrc="service-areas/san-diego-county/del-mar-kitchen.webp"
        imageAlt="Luxury custom kitchen in Del Mar beachfront home"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in del-mar</h2>
            <p className="text-xl text-charcoal/80">
              Del Mar represents the pinnacle of San Diego beachfront living, known for its stunning ocean views, 
              luxury homes, and sophisticated lifestyle. Our custom kitchens in Del Mar are designed to 
              complement this coastal paradise while providing the luxury and functionality today's homeowners demand.
            </p>
          </div>
        </div>
      </section>

      <Testimonials maxItems={3} />

      <CTASection
        title="Ready to Create Your Del Mar Kitchen?"
        description="Let's discuss your vision and create a custom kitchen that complements your beachfront lifestyle."
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
            "name": "PineWood Cabinets - Del Mar",
            "description": "Custom kitchen design and luxury cabinetry in Del Mar, San Diego",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/san-diego-county/del-mar",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Del Mar",
              "addressLocality": "San Diego",
              "addressRegion": "CA",
              "postalCode": "92014",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "32.9595",
              "longitude": "-117.2653"
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
