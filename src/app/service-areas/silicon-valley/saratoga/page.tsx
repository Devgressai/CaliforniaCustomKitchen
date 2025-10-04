import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Testimonials, TestimonialsSchema } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Custom Kitchens Saratoga | Luxury Cabinetry Silicon Valley | PineWood Cabinets',
  description: 'Custom kitchen design and luxury cabinetry in Saratoga, Silicon Valley. PineWood Cabinets creates museum-grade kitchens for Saratoga\'s most prestigious estate homes.',
  keywords: [
    'custom kitchens Saratoga',
    'luxury cabinetry Silicon Valley',
    'kitchen design Saratoga',
    'custom cabinets Saratoga',
    'kitchen renovation Saratoga',
    'bespoke cabinetry Silicon Valley',
    'Saratoga kitchen designer',
    'Silicon Valley custom kitchens'
  ],
  openGraph: {
    title: 'Custom Kitchens Saratoga | PineWood Cabinets',
    description: 'Custom kitchen design and luxury cabinetry in Saratoga, Silicon Valley.',
    images: ['/images/service-areas/silicon-valley/saratoga-kitchen.webp'],
  },
}

export default function SaratogaPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'Silicon Valley', href: '/service-areas/silicon-valley' },
              { name: 'Saratoga', href: '/service-areas/silicon-valley/saratoga', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens Saratoga"
        subtitle="Luxury Cabinetry in Silicon Valley's Estate Community"
        description="Create museum-grade custom kitchens in Saratoga's prestigious estate homes. Our designs complement the neighborhood's luxury lifestyle while delivering exceptional functionality."
        imageSrc="service-areas/silicon-valley/saratoga-kitchen.webp"
        imageAlt="Luxury custom kitchen in Saratoga estate home"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in saratoga</h2>
            <p className="text-xl text-charcoal/80">
              Saratoga represents the pinnacle of Silicon Valley estate living, known for its luxury homes, 
              prestigious address, and sophisticated lifestyle. Our custom kitchens in Saratoga are designed to 
              complement this elite community while providing the luxury and functionality today's estate owners demand.
            </p>
          </div>
        </div>
      </section>

      <Testimonials maxItems={3} />

      <CTASection
        title="Ready to Create Your Saratoga Kitchen?"
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
            "name": "PineWood Cabinets - Saratoga",
            "description": "Custom kitchen design and luxury cabinetry in Saratoga, Silicon Valley",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/silicon-valley/saratoga",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Saratoga",
              "addressLocality": "Silicon Valley",
              "addressRegion": "CA",
              "postalCode": "95070",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.2638",
              "longitude": "-122.0231"
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
