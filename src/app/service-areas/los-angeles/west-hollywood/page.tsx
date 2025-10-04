import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Testimonials, TestimonialsSchema } from '@/components/Testimonials'

export const metadata: Metadata = {
  title: 'Custom Kitchens West Hollywood | Luxury Cabinetry Los Angeles | PineWood Cabinets',
  description: 'Custom kitchen design and luxury cabinetry in West Hollywood, Los Angeles. PineWood Cabinets creates museum-grade kitchens for West Hollywood\'s most prestigious homes.',
  keywords: [
    'custom kitchens West Hollywood',
    'luxury cabinetry Los Angeles',
    'kitchen design West Hollywood',
    'custom cabinets West Hollywood',
    'kitchen renovation West Hollywood',
    'bespoke cabinetry Los Angeles',
    'West Hollywood kitchen designer',
    'Los Angeles custom kitchens'
  ],
  openGraph: {
    title: 'Custom Kitchens West Hollywood | PineWood Cabinets',
    description: 'Custom kitchen design and luxury cabinetry in West Hollywood, Los Angeles.',
    images: ['/images/service-areas/los-angeles/west-hollywood-kitchen.webp'],
  },
}

const features = [
  {
    title: 'Modern & Contemporary Design',
    description: 'Our designs complement West Hollywood\'s modern and contemporary architectural styles.',
    image: '/images/service-areas/los-angeles/west-hollywood-modern.webp'
  },
  {
    title: 'Entertainment Industry Focus',
    description: 'Create kitchens that meet the unique needs of entertainment industry professionals.',
    image: '/images/service-areas/los-angeles/west-hollywood-entertainment.webp'
  },
  {
    title: 'Luxury Lifestyle Integration',
    description: 'Design kitchens that reflect West Hollywood\'s sophisticated and vibrant lifestyle.',
    image: '/images/service-areas/los-angeles/west-hollywood-luxury.webp'
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

export default function WestHollywoodPage() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'Los Angeles', href: '/service-areas/los-angeles' },
              { name: 'West Hollywood', href: '/service-areas/los-angeles/west-hollywood', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens West Hollywood"
        subtitle="Luxury Cabinetry in Los Angeles' Entertainment District"
        description="Create museum-grade custom kitchens in West Hollywood's prestigious homes. Our designs complement the neighborhood's modern architecture while delivering exceptional functionality for entertainment industry professionals."
        imageSrc="service-areas/los-angeles/west-hollywood-kitchen.webp"
        imageAlt="Luxury custom kitchen in West Hollywood modern home"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in west-hollywood</h2>
            <p className="text-xl text-charcoal/80">
              West Hollywood represents the heart of Los Angeles' entertainment industry, known for its modern architecture, 
              vibrant nightlife, and sophisticated lifestyle. Our custom kitchens in West Hollywood are designed to 
              complement this dynamic neighborhood while providing the luxury and functionality that entertainment 
              industry professionals demand.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in west-hollywood</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our West Hollywood kitchens are designed to complement the neighborhood's modern character and entertainment industry focus.
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in west-hollywood</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Comprehensive kitchen design and cabinetry services tailored to West Hollywood's modern lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20 text-center">
                <h3 className="text-xl font-semibold text-charcoal mb-3">{service}</h3>
                <p className="text-charcoal/70">
                  Expert design and installation services for West Hollywood homes.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials maxItems={3} />

      <CTASection
        title="Ready to Create Your West Hollywood Kitchen?"
        description="Let's discuss your vision and create a custom kitchen that complements your home's modern design while meeting your entertainment industry lifestyle needs."
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
            "name": "PineWood Cabinets - West Hollywood",
            "description": "Custom kitchen design and luxury cabinetry in West Hollywood, Los Angeles",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/los-angeles/west-hollywood",
            "telephone": "+1-XXX-XXX-XXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "West Hollywood",
              "addressLocality": "Los Angeles",
              "addressRegion": "CA",
              "postalCode": "90069",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "34.0900",
              "longitude": "-118.3617"
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
