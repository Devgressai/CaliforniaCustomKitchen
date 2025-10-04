import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Testimonials, TestimonialsSchema } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Custom Kitchens Woodside | Luxury Cabinetry Silicon Valley | PineWood Cabinets',
  description: 'Custom kitchen design and luxury cabinetry in Woodside, Silicon Valley. PineWood Cabinets creates museum-grade kitchens for Woodside\'s most prestigious estate homes.',
  keywords: [
    'custom kitchens Woodside',
    'luxury cabinetry Silicon Valley',
    'kitchen design Woodside',
    'custom cabinets Woodside',
    'kitchen renovation Woodside',
    'bespoke cabinetry Silicon Valley',
    'Woodside kitchen designer',
    'Silicon Valley custom kitchens'
  ],
  openGraph: {
    title: 'Custom Kitchens Woodside | PineWood Cabinets',
    description: 'Custom kitchen design and luxury cabinetry in Woodside, Silicon Valley.',
    images: ['/images/service-areas/silicon-valley/woodside-kitchen.webp'],
  },
}

export default function WoodsidePage() {
  return (
    <main className="min-h-screen">
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'Silicon Valley', href: '/service-areas/silicon-valley' },
              { name: 'Woodside', href: '/service-areas/silicon-valley/woodside', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens Woodside"
        subtitle="Luxury Cabinetry in Silicon Valley's Premier Estate Community"
        description="Create museum-grade custom kitchens in Woodside's prestigious estate homes. Our designs complement the neighborhood's luxury lifestyle while delivering exceptional functionality."
        imageSrc="service-areas/silicon-valley/woodside-kitchen.webp"
        imageAlt="Luxury custom kitchen in Woodside estate home"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in woodside</h2>
            <p className="text-xl text-charcoal/80">
              Woodside represents the pinnacle of Silicon Valley estate living, known for its luxury homes, 
              prestigious address, and sophisticated lifestyle. Our custom kitchens in Woodside are designed to 
              complement this elite community while providing the luxury and functionality today's estate owners demand.
            </p>
          </div>
        </div>
      </section>

      <Testimonials maxItems={3} />

      <CTASection
        title="Ready to Create Your Woodside Kitchen?"
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
            "name": "PineWood Cabinets - Woodside",
            "description": "Custom kitchen design and luxury cabinetry in Woodside, Silicon Valley",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/silicon-valley/woodside",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Woodside",
              "addressLocality": "Silicon Valley",
              "addressRegion": "CA",
              "postalCode": "94062",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.4292",
              "longitude": "-122.2536"
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
