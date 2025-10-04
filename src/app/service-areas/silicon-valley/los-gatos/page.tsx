import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Testimonials, TestimonialsSchema } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Custom Kitchens Los Gatos | Luxury Cabinetry Silicon Valley | PineWood Cabinets',
  description: 'Custom kitchen design and luxury cabinetry in Los Gatos, Silicon Valley. PineWood Cabinets creates museum-grade kitchens for Los Gatos\' most prestigious hillside homes.',
  keywords: [
    'custom kitchens Los Gatos',
    'luxury cabinetry Silicon Valley',
    'kitchen design Los Gatos',
    'custom cabinets Los Gatos',
    'kitchen renovation Los Gatos',
    'bespoke cabinetry Silicon Valley',
    'Los Gatos kitchen designer',
    'Silicon Valley custom kitchens'
  ],
  openGraph: {
    title: 'Custom Kitchens Los Gatos | PineWood Cabinets',
    description: 'Custom kitchen design and luxury cabinetry in Los Gatos, Silicon Valley.',
    images: ['/images/service-areas/silicon-valley/los-gatos-kitchen.webp'],
  },
}

export default function LosGatosPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'Silicon Valley', href: '/service-areas/silicon-valley' },
              { name: 'Los Gatos', href: '/service-areas/silicon-valley/los-gatos', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens Los Gatos"
        subtitle="Luxury Cabinetry in Silicon Valley's Hillside Community"
        description="Create museum-grade custom kitchens in Los Gatos' prestigious hillside homes. Our designs complement the neighborhood's natural beauty while delivering exceptional functionality."
        imageSrc="service-areas/silicon-valley/los-gatos-kitchen.webp"
        imageAlt="Luxury custom kitchen in Los Gatos hillside home"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in los-gatos</h2>
            <p className="text-xl text-charcoal/80">
              Los Gatos represents the perfect blend of Silicon Valley sophistication and natural beauty, known for its 
              hillside homes, mountain views, and upscale community. Our custom kitchens in Los Gatos are designed to 
              complement this unique environment while providing the luxury and functionality today's homeowners demand.
            </p>
          </div>
        </div>
      </section>

      <Testimonials maxItems={3} />

      <CTASection
        title="Ready to Create Your Los Gatos Kitchen?"
        description="Let's discuss your vision and create a custom kitchen that complements your hillside lifestyle."
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
            "name": "PineWood Cabinets - Los Gatos",
            "description": "Custom kitchen design and luxury cabinetry in Los Gatos, Silicon Valley",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/silicon-valley/los-gatos",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Los Gatos",
              "addressLocality": "Silicon Valley",
              "addressRegion": "CA",
              "postalCode": "95030",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.2266",
              "longitude": "-121.9740"
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
