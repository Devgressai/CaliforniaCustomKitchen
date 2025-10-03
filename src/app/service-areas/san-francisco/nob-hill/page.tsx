import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Testimonials, TestimonialsSchema } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Custom Kitchens Nob Hill | Luxury Cabinetry San Francisco | PineWood Cabinets',
  description: 'Custom kitchen design and luxury cabinetry in Nob Hill, San Francisco. PineWood Cabinets creates museum-grade kitchens for Nob Hill\'s most prestigious residences.',
  keywords: [
    'custom kitchens Nob Hill',
    'luxury cabinetry San Francisco',
    'kitchen design Nob Hill',
    'custom cabinets Nob Hill',
    'kitchen renovation Nob Hill',
    'bespoke cabinetry San Francisco',
    'Nob Hill kitchen designer',
    'San Francisco custom kitchens'
  ],
  openGraph: {
    title: 'Custom Kitchens Nob Hill | PineWood Cabinets',
    description: 'Custom kitchen design and luxury cabinetry in Nob Hill, San Francisco.',
    images: ['/images/service-areas/san-francisco/nob-hill-kitchen.webp'],
  },
}

const features = [
  {
    title: 'Historic Building Integration',
    description: 'Our designs work seamlessly within Nob Hill\'s historic apartment buildings and luxury condominiums.',
    image: '/images/service-areas/san-francisco/nob-hill-historic.webp'
  },
  {
    title: 'City Views & Urban Living',
    description: 'Maximize San Francisco\'s stunning city views while creating functional urban kitchen spaces.',
    image: '/images/service-areas/san-francisco/nob-hill-city-views.webp'
  },
  {
    title: 'Luxury Condo Design',
    description: 'Specialized expertise in high-end condominium kitchen design and installation.',
    image: '/images/service-areas/san-francisco/nob-hill-condo.webp'
  }
]

const services = [
  'Custom Kitchen Design',
  'Bespoke Cabinetry',
  'Architectural Millwork',
  'Luxury Condo Renovation',
  'High-End Appliance Integration',
  'Custom Storage Solutions'
]

export default function NobHillPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'San Francisco', href: '/service-areas/san-francisco' },
              { name: 'Nob Hill', href: '/service-areas/san-francisco/nob-hill', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens Nob Hill"
        subtitle="Luxury Cabinetry in San Francisco's Historic District"
        description="Create museum-grade custom kitchens in Nob Hill's prestigious historic buildings and luxury condominiums. Our designs honor the neighborhood's rich heritage while delivering modern functionality."
        imageSrc="service-areas/san-francisco/nob-hill-kitchen.webp"
        imageAlt="Luxury custom kitchen in Nob Hill historic building with city views"
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
              Nob Hill Kitchen Design Excellence
            </h2>
            <p className="text-xl text-charcoal/80">
              Nob Hill stands as one of San Francisco's most prestigious neighborhoods, known for its historic architecture, 
              luxury condominiums, and breathtaking city views. Our custom kitchens in Nob Hill are designed to complement 
              the neighborhood's sophisticated urban character while maximizing functionality in often compact spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Nob Hill Kitchen Features
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our Nob Hill kitchens are designed to maximize space and functionality while honoring the neighborhood's historic character.
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
              Our Nob Hill Services
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Comprehensive kitchen design and cabinetry services tailored to Nob Hill's unique urban requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20 text-center">
                <h3 className="text-xl font-semibold text-charcoal mb-3">{service}</h3>
                <p className="text-charcoal/70">
                  Expert design and installation services for Nob Hill residences.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials maxItems={3} />

      <CTASection
        title="Ready to Create Your Nob Hill Kitchen?"
        description="Let's discuss your vision and create a custom kitchen that maximizes your space while honoring your home's historic character."
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
            "name": "PineWood Cabinets - Nob Hill",
            "description": "Custom kitchen design and luxury cabinetry in Nob Hill, San Francisco",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/san-francisco/nob-hill",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Nob Hill",
              "addressLocality": "San Francisco",
              "addressRegion": "CA",
              "postalCode": "94108",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.7925",
              "longitude": "-122.4144"
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
