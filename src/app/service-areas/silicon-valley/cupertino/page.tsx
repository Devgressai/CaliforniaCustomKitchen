import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Testimonials, TestimonialsSchema } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Custom Kitchens Cupertino | Luxury Cabinetry Silicon Valley | PineWood Cabinets',
  description: 'Custom kitchen design and luxury cabinetry in Cupertino, Silicon Valley. PineWood Cabinets creates museum-grade kitchens for Cupertino\'s most prestigious tech executive homes.',
  keywords: [
    'custom kitchens Cupertino',
    'luxury cabinetry Silicon Valley',
    'kitchen design Cupertino',
    'custom cabinets Cupertino',
    'kitchen renovation Cupertino',
    'bespoke cabinetry Silicon Valley',
    'Cupertino kitchen designer',
    'Silicon Valley custom kitchens'
  ],
  openGraph: {
    title: 'Custom Kitchens Cupertino | PineWood Cabinets',
    description: 'Custom kitchen design and luxury cabinetry in Cupertino, Silicon Valley.',
    images: ['/images/service-areas/silicon-valley/cupertino-kitchen.webp'],
  },
}

export default function CupertinoPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'Silicon Valley', href: '/service-areas/silicon-valley' },
              { name: 'Cupertino', href: '/service-areas/silicon-valley/cupertino', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens Cupertino"
        subtitle="Luxury Cabinetry in Silicon Valley's Tech Hub"
        description="Create museum-grade custom kitchens in Cupertino's prestigious tech executive homes. Our designs complement the neighborhood's innovative spirit while delivering exceptional functionality."
        imageSrc="service-areas/silicon-valley/cupertino-kitchen.webp"
        imageAlt="Luxury custom kitchen in Cupertino tech executive home"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in cupertino</h2>
            <p className="text-xl text-charcoal/80">
              Cupertino represents the heart of Silicon Valley innovation, known for its tech executives, 
              Apple headquarters, and sophisticated lifestyle. Our custom kitchens in Cupertino are designed to 
              complement this innovative community while providing the luxury and functionality today's tech leaders demand.
            </p>
          </div>
        </div>
      </section>

      <Testimonials maxItems={3} />

      <CTASection
        title="Ready to Create Your Cupertino Kitchen?"
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
            "name": "PineWood Cabinets - Cupertino",
            "description": "Custom kitchen design and luxury cabinetry in Cupertino, Silicon Valley",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/silicon-valley/cupertino",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Cupertino",
              "addressLocality": "Silicon Valley",
              "addressRegion": "CA",
              "postalCode": "95014",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.3230",
              "longitude": "-122.0322"
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
