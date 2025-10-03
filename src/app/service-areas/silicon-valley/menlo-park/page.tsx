import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Testimonials, TestimonialsSchema } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Custom Kitchens Menlo Park | Luxury Cabinetry Silicon Valley | PineWood Cabinets',
  description: 'Custom kitchen design and luxury cabinetry in Menlo Park, Silicon Valley. PineWood Cabinets creates museum-grade kitchens for Menlo Park\'s most prestigious tech executive homes.',
  keywords: [
    'custom kitchens Menlo Park',
    'luxury cabinetry Silicon Valley',
    'kitchen design Menlo Park',
    'custom cabinets Menlo Park',
    'kitchen renovation Menlo Park',
    'bespoke cabinetry Silicon Valley',
    'Menlo Park kitchen designer',
    'Silicon Valley custom kitchens'
  ],
  openGraph: {
    title: 'Custom Kitchens Menlo Park | PineWood Cabinets',
    description: 'Custom kitchen design and luxury cabinetry in Menlo Park, Silicon Valley.',
    images: ['/images/service-areas/silicon-valley/menlo-park-kitchen.webp'],
  },
}

export default function MenloParkPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'Silicon Valley', href: '/service-areas/silicon-valley' },
              { name: 'Menlo Park', href: '/service-areas/silicon-valley/menlo-park', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens Menlo Park"
        subtitle="Luxury Cabinetry in Silicon Valley's Executive Community"
        description="Create museum-grade custom kitchens in Menlo Park's prestigious tech executive homes. Our designs complement the neighborhood's sophisticated lifestyle while delivering exceptional functionality."
        imageSrc="service-areas/silicon-valley/menlo-park-kitchen.webp"
        imageAlt="Luxury custom kitchen in Menlo Park tech executive home"
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
              Menlo Park Kitchen Design Excellence
            </h2>
            <p className="text-xl text-charcoal/80">
              Menlo Park represents the pinnacle of Silicon Valley living, known for its tech executive residents, 
              prestigious address, and sophisticated lifestyle. Our custom kitchens in Menlo Park are designed to 
              complement this elite community while providing the luxury and functionality today's tech leaders demand.
            </p>
          </div>
        </div>
      </section>

      <Testimonials maxItems={3} />

      <CTASection
        title="Ready to Create Your Menlo Park Kitchen?"
        description="Let's discuss your vision and create a custom kitchen that reflects your executive lifestyle."
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
            "name": "PineWood Cabinets - Menlo Park",
            "description": "Custom kitchen design and luxury cabinetry in Menlo Park, Silicon Valley",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/silicon-valley/menlo-park",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Menlo Park",
              "addressLocality": "Silicon Valley",
              "addressRegion": "CA",
              "postalCode": "94025",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.4538",
              "longitude": "-122.1817"
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
