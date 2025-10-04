import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Testimonials, TestimonialsSchema } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Custom Kitchens Marina District | Luxury Cabinetry San Francisco | PineWood Cabinets',
  description: 'Custom kitchen design and luxury cabinetry in Marina District, San Francisco. PineWood Cabinets creates museum-grade kitchens for Marina District\'s most prestigious homes.',
  keywords: [
    'custom kitchens Marina District',
    'luxury cabinetry San Francisco',
    'kitchen design Marina District',
    'custom cabinets Marina District',
    'kitchen renovation Marina District',
    'bespoke cabinetry San Francisco',
    'Marina District kitchen designer',
    'San Francisco custom kitchens'
  ],
  openGraph: {
    title: 'Custom Kitchens Marina District | PineWood Cabinets',
    description: 'Custom kitchen design and luxury cabinetry in Marina District, San Francisco.',
    images: ['/images/service-areas/san-francisco/marina-district-kitchen.webp'],
  },
}

const features = [
  {
    title: 'Modern Architecture Integration',
    description: 'Our designs complement Marina District\'s modern architecture and open floor plans.',
    image: '/images/service-areas/san-francisco/marina-district-modern.webp'
  },
  {
    title: 'Bay Views & Natural Light',
    description: 'Maximize the stunning Bay views and abundant natural light that define Marina District living.',
    image: '/images/service-areas/san-francisco/marina-district-bay-views.webp'
  },
  {
    title: 'Contemporary Living',
    description: 'Create kitchens that reflect the neighborhood\'s contemporary lifestyle and active community.',
    image: '/images/service-areas/san-francisco/marina-district-contemporary.webp'
  }
]

const services = [
  'Custom Kitchen Design',
  'Bespoke Cabinetry',
  'Architectural Millwork',
  'Modern Renovation',
  'Luxury Appliance Integration',
  'Custom Storage Solutions'
]

export default function MarinaDistrictPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'San Francisco', href: '/service-areas/san-francisco' },
              { name: 'Marina District', href: '/service-areas/san-francisco/marina-district', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens Marina District"
        subtitle="Luxury Cabinetry in San Francisco's Waterfront Neighborhood"
        description="Create museum-grade custom kitchens in Marina District's prestigious waterfront homes. Our designs complement the neighborhood's modern architecture while delivering exceptional functionality."
        imageSrc="service-areas/san-francisco/marina-district-kitchen.webp"
        imageAlt="Luxury custom kitchen in Marina District home with Bay views"
        primaryCTA={{
          text: "Start Your Project",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Our Portfolio",
          href: "/portfolio"
        }}
      />

      {/* Introduction */}
      <section className="py-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in marina-district</h2>
            <p className="text-xl text-charcoal/80">
              The Marina District represents the best of modern San Francisco living, with its stunning waterfront location, 
              contemporary architecture, and vibrant community. Our custom kitchens in Marina District are designed to 
              complement this dynamic neighborhood while providing the luxury and functionality today's homeowners expect.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in marina-district</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our Marina District kitchens are designed to complement the neighborhood's modern character and waterfront lifestyle.
            </p>
          </div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-3xl font-semibold text-charcoal mb-4">{feature.title}</h3>
                    <p className="text-charcoal/70 text-lg leading-relaxed">{feature.description}</p>
                  </div>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in marina-district</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Comprehensive kitchen design and cabinetry services tailored to Marina District's modern lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20 text-center">
                <h3 className="text-xl font-semibold text-charcoal mb-3">{service}</h3>
                <p className="text-charcoal/70">
                  Expert design and installation services for Marina District homes.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials maxItems={3} />

      <CTASection
        title="Ready to Create Your Marina District Kitchen?"
        description="Let's discuss your vision and create a custom kitchen that complements your home's modern design while maximizing functionality."
        primaryCTA={{
          text: "Start Your Project",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Our Portfolio",
          href: "/portfolio"
        }}
      />

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "PineWood Cabinets - Marina District",
            "description": "Custom kitchen design and luxury cabinetry in Marina District, San Francisco",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/san-francisco/marina-district",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Marina District",
              "addressLocality": "San Francisco",
              "addressRegion": "CA",
              "postalCode": "94123",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.8025",
              "longitude": "-122.4444"
            },
            "areaServed": {
              "@type": "City",
              "name": "San Francisco"
            },
            "serviceType": "Custom Kitchen Design and Cabinetry"
          })
        }}
      />

      <TestimonialsSchema />
    </main>
  )
}
