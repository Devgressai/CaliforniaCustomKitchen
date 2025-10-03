import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Testimonials, TestimonialsSchema } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Custom Kitchens Castro District | Luxury Cabinetry San Francisco | PineWood Cabinets',
  description: 'Custom kitchen design and luxury cabinetry in Castro District, San Francisco. PineWood Cabinets creates museum-grade kitchens for Castro District\'s most prestigious homes.',
  keywords: [
    'custom kitchens Castro District',
    'luxury cabinetry San Francisco',
    'kitchen design Castro District',
    'custom cabinets Castro District',
    'kitchen renovation Castro District',
    'bespoke cabinetry San Francisco',
    'Castro District kitchen designer',
    'San Francisco custom kitchens'
  ],
  openGraph: {
    title: 'Custom Kitchens Castro District | PineWood Cabinets',
    description: 'Custom kitchen design and luxury cabinetry in Castro District, San Francisco.',
    images: ['/images/service-areas/san-francisco/castro-district-kitchen.webp'],
  },
}

const features = [
  {
    title: 'Victorian & Edwardian Architecture',
    description: 'Our designs honor Castro District\'s beautiful Victorian and Edwardian architecture while incorporating modern functionality.',
    image: '/images/service-areas/san-francisco/castro-district-victorian.webp'
  },
  {
    title: 'Historic Preservation',
    description: 'Work within historic preservation guidelines while creating kitchens that meet modern luxury standards.',
    image: '/images/service-areas/san-francisco/castro-district-historic.webp'
  },
  {
    title: 'Community Character',
    description: 'Design kitchens that reflect Castro District\'s vibrant community spirit and architectural diversity.',
    image: '/images/service-areas/san-francisco/castro-district-community.webp'
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

export default function CastroDistrictPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'San Francisco', href: '/service-areas/san-francisco' },
              { name: 'Castro District', href: '/service-areas/san-francisco/castro-district', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens Castro District"
        subtitle="Luxury Cabinetry in San Francisco's Historic Neighborhood"
        description="Create museum-grade custom kitchens in Castro District's prestigious Victorian and Edwardian homes. Our designs honor the neighborhood's rich architectural heritage while delivering modern functionality."
        imageSrc="service-areas/san-francisco/castro-district-kitchen.webp"
        imageAlt="Luxury custom kitchen in Castro District Victorian home"
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
              Castro District Kitchen Design Excellence
            </h2>
            <p className="text-xl text-charcoal/80">
              Castro District is one of San Francisco's most vibrant and historic neighborhoods, known for its beautiful 
              Victorian and Edwardian architecture, rich cultural heritage, and strong community spirit. Our custom kitchens 
              in Castro District are designed to honor this architectural legacy while providing the modern luxury and 
              functionality today's homeowners demand.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Castro District Kitchen Features
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our Castro District kitchens are designed to complement the neighborhood's historic character and architectural diversity.
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
              Our Castro District Services
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Comprehensive kitchen design and cabinetry services tailored to Castro District's unique architectural requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20 text-center">
                <h3 className="text-xl font-semibold text-charcoal mb-3">{service}</h3>
                <p className="text-charcoal/70">
                  Expert design and installation services for Castro District homes.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials maxItems={3} />

      <CTASection
        title="Ready to Create Your Castro District Kitchen?"
        description="Let's discuss your vision and create a custom kitchen that honors your home's historic character while delivering modern luxury."
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
            "name": "PineWood Cabinets - Castro District",
            "description": "Custom kitchen design and luxury cabinetry in Castro District, San Francisco",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/san-francisco/castro-district",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Castro District",
              "addressLocality": "San Francisco",
              "addressRegion": "CA",
              "postalCode": "94114",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.7609",
              "longitude": "-122.4350"
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
