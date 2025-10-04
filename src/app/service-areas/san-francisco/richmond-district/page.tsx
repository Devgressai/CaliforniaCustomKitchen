import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Testimonials, TestimonialsSchema } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Custom Kitchens Richmond District | Luxury Cabinetry San Francisco | PineWood Cabinets',
  description: 'Custom kitchen design and luxury cabinetry in Richmond District, San Francisco. PineWood Cabinets creates museum-grade kitchens for Richmond District\'s most prestigious homes.',
  keywords: [
    'custom kitchens Richmond District',
    'luxury cabinetry San Francisco',
    'kitchen design Richmond District',
    'custom cabinets Richmond District',
    'kitchen renovation Richmond District',
    'bespoke cabinetry San Francisco',
    'Richmond District kitchen designer',
    'San Francisco custom kitchens'
  ],
  openGraph: {
    title: 'Custom Kitchens Richmond District | PineWood Cabinets',
    description: 'Custom kitchen design and luxury cabinetry in Richmond District, San Francisco.',
    images: ['/images/service-areas/san-francisco/richmond-district-kitchen.webp'],
  },
}

const features = [
  {
    title: 'Diverse Architecture',
    description: 'Our designs work with Richmond District\'s diverse architectural styles, from Victorian to modern.',
    image: '/images/service-areas/san-francisco/richmond-district-diverse.webp'
  },
  {
    title: 'Family-Friendly Design',
    description: 'Create kitchens that accommodate the neighborhood\'s family-friendly lifestyle and community spirit.',
    image: '/images/service-areas/san-francisco/richmond-district-family.webp'
  },
  {
    title: 'Outdoor Living Integration',
    description: 'Design kitchens that connect seamlessly with outdoor spaces and garden areas.',
    image: '/images/service-areas/san-francisco/richmond-district-outdoor.webp'
  }
]

const services = [
  'Custom Kitchen Design',
  'Bespoke Cabinetry',
  'Architectural Millwork',
  'Family Kitchen Design',
  'Luxury Appliance Integration',
  'Custom Storage Solutions'
]

export default function RichmondDistrictPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'San Francisco', href: '/service-areas/san-francisco' },
              { name: 'Richmond District', href: '/service-areas/san-francisco/richmond-district', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens Richmond District"
        subtitle="Luxury Cabinetry in San Francisco's Family Neighborhood"
        description="Create museum-grade custom kitchens in Richmond District's diverse and family-friendly homes. Our designs complement the neighborhood's architectural variety while delivering exceptional functionality."
        imageSrc="service-areas/san-francisco/richmond-district-kitchen.webp"
        imageAlt="Luxury custom kitchen in Richmond District family home"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in richmond-district</h2>
            <p className="text-xl text-charcoal/80">
              Richmond District is one of San Francisco's most diverse and family-friendly neighborhoods, known for its 
              mix of architectural styles, strong community spirit, and proximity to Golden Gate Park. Our custom kitchens 
              in Richmond District are designed to accommodate the neighborhood's varied architectural character while 
              providing the luxury and functionality today's families expect.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in richmond-district</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our Richmond District kitchens are designed to complement the neighborhood's diverse character and family-friendly lifestyle.
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in richmond-district</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Comprehensive kitchen design and cabinetry services tailored to Richmond District's diverse architectural requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20 text-center">
                <h3 className="text-xl font-semibold text-charcoal mb-3">{service}</h3>
                <p className="text-charcoal/70">
                  Expert design and installation services for Richmond District homes.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials maxItems={3} />

      <CTASection
        title="Ready to Create Your Richmond District Kitchen?"
        description="Let's discuss your vision and create a custom kitchen that complements your home's unique character while meeting your family's needs."
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
            "name": "PineWood Cabinets - Richmond District",
            "description": "Custom kitchen design and luxury cabinetry in Richmond District, San Francisco",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/san-francisco/richmond-district",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Richmond District",
              "addressLocality": "San Francisco",
              "addressRegion": "CA",
              "postalCode": "94118",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.7804",
              "longitude": "-122.4600"
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
