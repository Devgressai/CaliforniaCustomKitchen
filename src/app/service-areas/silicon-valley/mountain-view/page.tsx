import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Testimonials, TestimonialsSchema } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Custom Kitchens Mountain View | Luxury Cabinetry Silicon Valley | PineWood Cabinets',
  description: 'Custom kitchen design and luxury cabinetry in Mountain View, Silicon Valley. PineWood Cabinets creates museum-grade kitchens for Mountain View\'s most prestigious tech executive homes.',
  keywords: [
    'custom kitchens Mountain View',
    'luxury cabinetry Silicon Valley',
    'kitchen design Mountain View',
    'custom cabinets Mountain View',
    'kitchen renovation Mountain View',
    'bespoke cabinetry Silicon Valley',
    'Mountain View kitchen designer',
    'Silicon Valley custom kitchens'
  ],
  openGraph: {
    title: 'Custom Kitchens Mountain View | PineWood Cabinets',
    description: 'Custom kitchen design and luxury cabinetry in Mountain View, Silicon Valley.',
    images: ['/images/service-areas/silicon-valley/mountain-view-kitchen.webp'],
  },
}

export default function MountainViewPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'Silicon Valley', href: '/service-areas/silicon-valley' },
              { name: 'Mountain View', href: '/service-areas/silicon-valley/mountain-view', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens Mountain View"
        subtitle="Luxury Cabinetry in Silicon Valley's Tech Hub"
        description="Create museum-grade custom kitchens in Mountain View's prestigious tech executive homes. Our designs complement the neighborhood's innovative spirit while delivering exceptional functionality."
        imageSrc="service-areas/silicon-valley/mountain-view-kitchen.webp"
        imageAlt="Luxury custom kitchen in Mountain View tech executive home"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in mountain-view</h2>
            <p className="text-xl text-charcoal/80">
              Mountain View represents the heart of Silicon Valley innovation, known for its tech executives, 
              Google headquarters, and sophisticated lifestyle. Our custom kitchens in Mountain View are designed to 
              complement this innovative community while providing the luxury and functionality today's tech leaders demand.
            </p>
          </div>
        </div>
      </section>

      <Testimonials maxItems={3} />

      <CTASection
        title="Ready to Create Your Mountain View Kitchen?"
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
            "name": "PineWood Cabinets - Mountain View",
            "description": "Custom kitchen design and luxury cabinetry in Mountain View, Silicon Valley",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/silicon-valley/mountain-view",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Mountain View",
              "addressLocality": "Silicon Valley",
              "addressRegion": "CA",
              "postalCode": "94041",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.3861",
              "longitude": "-122.0839"
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
