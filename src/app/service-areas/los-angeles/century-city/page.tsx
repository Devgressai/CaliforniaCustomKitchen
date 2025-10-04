import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Testimonials, TestimonialsSchema } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Custom Kitchens Century City | Luxury Cabinetry Los Angeles | PineWood Cabinets',
  description: 'Custom kitchen design and luxury cabinetry in Century City, Los Angeles. PineWood Cabinets creates museum-grade kitchens for Century City\'s most prestigious high-rise residences.',
  keywords: [
    'custom kitchens Century City',
    'luxury cabinetry Los Angeles',
    'kitchen design Century City',
    'custom cabinets Century City',
    'kitchen renovation Century City',
    'bespoke cabinetry Los Angeles',
    'Century City kitchen designer',
    'Los Angeles custom kitchens'
  ],
  openGraph: {
    title: 'Custom Kitchens Century City | PineWood Cabinets',
    description: 'Custom kitchen design and luxury cabinetry in Century City, Los Angeles.',
    images: ['/images/service-areas/los-angeles/century-city-kitchen.webp'],
  },
}

export default function CenturyCityPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'Los Angeles', href: '/service-areas/los-angeles' },
              { name: 'Century City', href: '/service-areas/los-angeles/century-city', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens Century City"
        subtitle="Luxury Cabinetry in Los Angeles' Business District"
        description="Create museum-grade custom kitchens in Century City's prestigious high-rise residences. Our designs complement the neighborhood's modern architecture while delivering exceptional functionality."
        imageSrc="service-areas/los-angeles/century-city-kitchen.webp"
        imageAlt="Luxury custom kitchen in Century City high-rise residence"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in century-city</h2>
            <p className="text-xl text-charcoal/80">
              Century City represents the pinnacle of Los Angeles business district living, known for its modern high-rise 
              architecture, corporate headquarters, and sophisticated lifestyle. Our custom kitchens in Century City are 
              designed to complement this urban environment while providing the luxury and functionality today's professionals demand.
            </p>
          </div>
        </div>
      </section>

      <Testimonials maxItems={3} />

      <CTASection
        title="Ready to Create Your Century City Kitchen?"
        description="Let's discuss your vision and create a custom kitchen that complements your high-rise lifestyle."
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
            "name": "PineWood Cabinets - Century City",
            "description": "Custom kitchen design and luxury cabinetry in Century City, Los Angeles",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/los-angeles/century-city",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Century City",
              "addressLocality": "Los Angeles",
              "addressRegion": "CA",
              "postalCode": "90067",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "34.0550",
              "longitude": "-118.4170"
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
