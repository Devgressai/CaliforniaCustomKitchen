import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Testimonials, TestimonialsSchema } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Custom Kitchens Sunnyvale | Luxury Cabinetry Silicon Valley | PineWood Cabinets',
  description: 'Custom kitchen design and luxury cabinetry in Sunnyvale, Silicon Valley. PineWood Cabinets creates museum-grade kitchens for Sunnyvale\'s most prestigious tech executive homes.',
  keywords: [
    'custom kitchens Sunnyvale',
    'luxury cabinetry Silicon Valley',
    'kitchen design Sunnyvale',
    'custom cabinets Sunnyvale',
    'kitchen renovation Sunnyvale',
    'bespoke cabinetry Silicon Valley',
    'Sunnyvale kitchen designer',
    'Silicon Valley custom kitchens'
  ],
  openGraph: {
    title: 'Custom Kitchens Sunnyvale | PineWood Cabinets',
    description: 'Custom kitchen design and luxury cabinetry in Sunnyvale, Silicon Valley.',
    images: ['/images/service-areas/silicon-valley/sunnyvale-kitchen.webp'],
  },
}

export default function SunnyvalePage() {
  return (
    <main className="min-h-screen">
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'Silicon Valley', href: '/service-areas/silicon-valley' },
              { name: 'Sunnyvale', href: '/service-areas/silicon-valley/sunnyvale', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens Sunnyvale"
        subtitle="Luxury Cabinetry in Silicon Valley's Tech Community"
        description="Create museum-grade custom kitchens in Sunnyvale's prestigious tech executive homes. Our designs complement the neighborhood's innovative spirit while delivering exceptional functionality."
        imageSrc="service-areas/silicon-valley/sunnyvale-kitchen.webp"
        imageAlt="Luxury custom kitchen in Sunnyvale tech executive home"
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
              Sunnyvale Kitchen Design Excellence
            </h2>
            <p className="text-xl text-charcoal/80">
              Sunnyvale represents the innovation hub of Silicon Valley, known for its tech executives, 
              startup culture, and sophisticated lifestyle. Our custom kitchens in Sunnyvale are designed to 
              complement this dynamic community while providing the luxury and functionality today's tech leaders demand.
            </p>
          </div>
        </div>
      </section>

      <Testimonials maxItems={3} />

      <CTASection
        title="Ready to Create Your Sunnyvale Kitchen?"
        description="Let's discuss your vision and create a custom kitchen that reflects your innovative lifestyle."
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
            "name": "PineWood Cabinets - Sunnyvale",
            "description": "Custom kitchen design and luxury cabinetry in Sunnyvale, Silicon Valley",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/silicon-valley/sunnyvale",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sunnyvale",
              "addressLocality": "Silicon Valley",
              "addressRegion": "CA",
              "postalCode": "94086",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.3688",
              "longitude": "-122.0363"
            },
            "areaServed": {
              "@type": "City",
              "name": "Silicon Valley"
            },
            "serviceType": "Custom Kitchen Design and Cabinetry"
          })
        }}
      />

      <TestimonialsSchema />
    </main>
  )
}
