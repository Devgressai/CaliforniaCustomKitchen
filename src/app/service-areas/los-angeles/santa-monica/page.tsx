import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Testimonials, TestimonialsSchema } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Custom Kitchens Santa Monica | Luxury Cabinetry Los Angeles | PineWood Cabinets',
  description: 'Custom kitchen design and luxury cabinetry in Santa Monica, Los Angeles. PineWood Cabinets creates museum-grade kitchens for Santa Monica\'s most prestigious beachfront homes.',
  keywords: [
    'custom kitchens Santa Monica',
    'luxury cabinetry Los Angeles',
    'kitchen design Santa Monica',
    'custom cabinets Santa Monica',
    'kitchen renovation Santa Monica',
    'bespoke cabinetry Los Angeles',
    'Santa Monica kitchen designer',
    'Los Angeles custom kitchens'
  ],
  openGraph: {
    title: 'Custom Kitchens Santa Monica | PineWood Cabinets',
    description: 'Custom kitchen design and luxury cabinetry in Santa Monica, Los Angeles.',
    images: ['/images/service-areas/los-angeles/santa-monica-kitchen.webp'],
  },
}

export default function SantaMonicaPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'Los Angeles', href: '/service-areas/los-angeles' },
              { name: 'Santa Monica', href: '/service-areas/los-angeles/santa-monica', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens Santa Monica"
        subtitle="Luxury Cabinetry in Los Angeles' Beachfront Community"
        description="Create museum-grade custom kitchens in Santa Monica's prestigious beachfront homes. Our designs complement the neighborhood's coastal lifestyle while delivering exceptional functionality."
        imageSrc="service-areas/los-angeles/santa-monica-kitchen.webp"
        imageAlt="Luxury custom kitchen in Santa Monica beachfront home"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in santa-monica</h2>
            <p className="text-xl text-charcoal/80">
              Santa Monica represents the pinnacle of Los Angeles beachfront living, known for its stunning ocean views, 
              vibrant community, and sophisticated lifestyle. Our custom kitchens in Santa Monica are designed to 
              complement this coastal paradise while providing the luxury and functionality today's homeowners demand.
            </p>
          </div>
        </div>
      </section>

      <Testimonials maxItems={3} />

      <CTASection
        title="Ready to Create Your Santa Monica Kitchen?"
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
            "name": "PineWood Cabinets - Santa Monica",
            "description": "Custom kitchen design and luxury cabinetry in Santa Monica, Los Angeles",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/los-angeles/santa-monica",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Santa Monica",
              "addressLocality": "Los Angeles",
              "addressRegion": "CA",
              "postalCode": "90401",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "34.0195",
              "longitude": "-118.4912"
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
