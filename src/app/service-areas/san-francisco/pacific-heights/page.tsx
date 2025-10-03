import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Testimonials, TestimonialsSchema } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Custom Kitchens Pacific Heights | Luxury Cabinetry San Francisco | PineWood Cabinets',
  description: 'Custom kitchen design and luxury cabinetry in Pacific Heights, San Francisco. PineWood Cabinets creates museum-grade kitchens for Pacific Heights\' most prestigious homes.',
  keywords: [
    'custom kitchens Pacific Heights',
    'luxury cabinetry San Francisco',
    'kitchen design Pacific Heights',
    'custom cabinets Pacific Heights',
    'kitchen renovation Pacific Heights',
    'bespoke cabinetry San Francisco',
    'Pacific Heights kitchen designer',
    'San Francisco custom kitchens'
  ],
  openGraph: {
    title: 'Custom Kitchens Pacific Heights | PineWood Cabinets',
    description: 'Custom kitchen design and luxury cabinetry in Pacific Heights, San Francisco.',
    images: ['/images/service-areas/san-francisco/pacific-heights-kitchen.webp'],
  },
}

const features = [
  {
    title: 'Victorian Architecture Integration',
    description: 'Our designs honor Pacific Heights\' Victorian heritage while incorporating modern functionality and luxury amenities.',
    image: '/images/service-areas/san-francisco/pacific-heights-victorian.webp'
  },
  {
    title: 'Bay Views & Natural Light',
    description: 'Maximize the stunning Bay views and abundant natural light that make Pacific Heights homes so desirable.',
    image: '/images/service-areas/san-francisco/pacific-heights-bay-views.webp'
  },
  {
    title: 'Historic Preservation',
    description: 'Work within historic preservation guidelines while creating kitchens that meet modern luxury standards.',
    image: '/images/service-areas/san-francisco/pacific-heights-historic.webp'
  }
]

const services = [
  'Custom Kitchen Design',
  'Bespoke Cabinetry',
  'Architectural Millwork',
  'Historic Renovation',
  'Luxury Appliance Integration',
  'Custom Storage Solutions'
]

export default function PacificHeightsPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'San Francisco', href: '/service-areas/san-francisco' },
              { name: 'Pacific Heights', href: '/service-areas/san-francisco/pacific-heights', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens Pacific Heights"
        subtitle="Luxury Cabinetry in San Francisco's Premier Neighborhood"
        description="Create museum-grade custom kitchens in Pacific Heights' most prestigious Victorian and Edwardian homes. Our designs honor historic architecture while delivering modern luxury."
        imageSrc="service-areas/san-francisco/pacific-heights-kitchen.webp"
        imageAlt="Luxury custom kitchen in Pacific Heights Victorian home with Bay views"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Pacific Heights Kitchen Design Excellence
            </h2>
            <p className="text-xl text-charcoal/80">
              Pacific Heights represents the pinnacle of San Francisco living, with its stunning Victorian and Edwardian architecture, 
              breathtaking Bay views, and prestigious address. Our custom kitchens in Pacific Heights honor this heritage while 
              delivering the modern luxury and functionality today's discerning homeowners demand.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Pacific Heights Kitchen Features
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our Pacific Heights kitchens are designed to complement the neighborhood's unique character and architectural heritage.
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Our Pacific Heights Services
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Comprehensive kitchen design and cabinetry services tailored to Pacific Heights' unique requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20 text-center">
                <h3 className="text-xl font-semibold text-charcoal mb-3">{service}</h3>
                <p className="text-charcoal/70">
                  Expert design and installation services for Pacific Heights homes.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials maxItems={3} />

      <CTASection
        title="Ready to Create Your Pacific Heights Kitchen?"
        description="Let's discuss your vision and create a custom kitchen that honors your home's heritage while delivering modern luxury."
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
            "name": "PineWood Cabinets - Pacific Heights",
            "description": "Custom kitchen design and luxury cabinetry in Pacific Heights, San Francisco",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/san-francisco/pacific-heights",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Pacific Heights",
              "addressLocality": "San Francisco",
              "addressRegion": "CA",
              "postalCode": "94115",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.7925",
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