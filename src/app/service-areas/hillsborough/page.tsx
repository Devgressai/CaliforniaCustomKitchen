import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Testimonials, TestimonialsSchema } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Custom Kitchens Hillsborough | Luxury Cabinetry Peninsula | PineWood Cabinets',
  description: 'Custom kitchen design and luxury cabinetry in Hillsborough, Peninsula. PineWood Cabinets creates museum-grade kitchens for Hillsborough\'s most prestigious estate homes.',
  keywords: [
    'custom kitchens Hillsborough',
    'luxury cabinetry Peninsula',
    'kitchen design Hillsborough',
    'custom cabinets Hillsborough',
    'kitchen renovation Hillsborough',
    'bespoke cabinetry Peninsula',
    'Hillsborough kitchen designer',
    'Peninsula custom kitchens'
  ],
  openGraph: {
    title: 'Custom Kitchens Hillsborough | PineWood Cabinets',
    description: 'Custom kitchen design and luxury cabinetry in Hillsborough, Peninsula.',
    images: ['/images/service-areas/hillsborough-kitchen.webp'],
  },
}

export default function HillsboroughPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'Hillsborough', href: '/service-areas/hillsborough', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens Hillsborough"
        subtitle="Luxury Cabinetry in Peninsula's Premier Estate Community"
        description="Create museum-grade custom kitchens in Hillsborough's prestigious estate homes. Our designs complement the neighborhood's luxury lifestyle while delivering exceptional functionality."
        imageSrc="service-areas/hillsborough-kitchen.webp"
        imageAlt="Luxury custom kitchen in Hillsborough estate home"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in hillsborough</h2>
            <p className="text-xl text-charcoal/80">
              Hillsborough represents the pinnacle of Peninsula estate living, known for its luxury homes, 
              prestigious address, and sophisticated lifestyle. Our custom kitchens in Hillsborough are designed to 
              complement this elite community while providing the luxury and functionality today's estate owners demand.
            </p>
          </div>
        </div>
      </section>

      <Testimonials maxItems={3} />

      <CTASection
        title="Ready to Create Your Hillsborough Kitchen?"
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
            "name": "PineWood Cabinets - Hillsborough",
            "description": "Custom kitchen design and luxury cabinetry in Hillsborough, Peninsula",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/hillsborough",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Hillsborough",
              "addressLocality": "Peninsula",
              "addressRegion": "CA",
              "postalCode": "94010",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.5741",
              "longitude": "-122.3794"
            },
            "areaServed": {
              "@type": "City",
              "name": "Peninsula"
            },
            "serviceType": "Custom Kitchen Design and Cabinetry"
          })
        }}
      />

      <TestimonialsSchema />
    </main>
  )
}
