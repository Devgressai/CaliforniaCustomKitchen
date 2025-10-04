import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import Image from 'next/image'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: "Custom Kitchens San Francisco | Kitchen Cabinets & Design | PineWood Cabinets",
  description: "Custom kitchen design and cabinetry services in San Francisco. Premium kitchen remodeling, cabinet refacing, and storage solutions for SF homes.",
  keywords: [
    'custom kitchens San Francisco',
    'kitchen cabinets San Francisco',
    'kitchen remodeling San Francisco',
    'kitchen design San Francisco',
    'cabinet refacing San Francisco',
    'kitchen renovation San Francisco',
    'custom cabinetry San Francisco',
    'kitchen contractor San Francisco'
  ],
  openGraph: {
    title: "Custom Kitchens San Francisco | PineWood Cabinets",
    description: "Custom kitchen design and cabinetry services in San Francisco. Premium kitchen remodeling and cabinet solutions.",
    images: ['/images/service-areas/san-francisco-hero.webp'],
  },
}

const neighborhoods = [
  {
    name: 'Pacific Heights',
    href: '/service-areas/san-francisco/pacific-heights',
    description: 'Luxury homes with stunning bay views and historic architecture',
    specialties: ['Luxury kitchens', 'Historic renovations', 'Bay view designs']
  },
  {
    name: 'Nob Hill',
    href: '/service-areas/san-francisco/nob-hill',
    description: 'Elegant Victorian and Edwardian homes with classic charm',
    specialties: ['Victorian renovations', 'Classic designs', 'Historic preservation']
  },
  {
    name: 'Russian Hill',
    href: '/service-areas/san-francisco/russian-hill',
    description: 'Charming neighborhood with steep streets and panoramic views',
    specialties: ['Compact designs', 'View optimization', 'Space maximization']
  },
  {
    name: 'Marina District',
    href: '/service-areas/san-francisco/marina-district',
    description: 'Modern condos and townhomes near the waterfront',
    specialties: ['Modern designs', 'Condo kitchens', 'Waterfront living']
  },
  {
    name: 'Mission District',
    href: '/service-areas/san-francisco/mission-district',
    description: 'Vibrant neighborhood with diverse architectural styles',
    specialties: ['Eclectic designs', 'Modern renovations', 'Cultural integration']
  }
]

const services = [
  {
    title: 'Custom Kitchen Design',
    description: 'Bespoke kitchen designs tailored to San Francisco\'s unique architectural styles and space constraints.',
    features: ['Space optimization', 'Historic preservation', 'Modern functionality', 'Bay area aesthetics']
  },
  {
    title: 'Cabinet Refacing',
    description: 'Transform existing kitchens with new doors, drawer fronts, and hardware while preserving the layout.',
    features: ['Cost-effective', 'Quick turnaround', 'Minimal disruption', 'Quality materials']
  },
  {
    title: 'Kitchen Remodeling',
    description: 'Complete kitchen transformations from design to installation, perfect for San Francisco homes.',
    features: ['Full renovation', 'Custom solutions', 'Premium materials', 'Professional installation']
  },
  {
    title: 'Storage Solutions',
    description: 'Maximize limited space with custom storage solutions designed for urban living.',
    features: ['Space efficiency', 'Custom organization', 'Urban optimization', 'Smart storage']
  }
]

const testimonials = [
  {
    name: 'Jennifer Walsh',
    location: 'Pacific Heights, San Francisco',
    project: 'Luxury Kitchen Renovation',
    quote: 'PineWood Cabinets transformed our Victorian home\'s kitchen into a modern masterpiece while preserving its historic character. The attention to detail is exceptional.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    location: 'Marina District, San Francisco',
    project: 'Condo Kitchen Design',
    quote: 'Working with limited space in our Marina condo was challenging, but PineWood created a kitchen that feels spacious and functions perfectly.',
    rating: 5
  },
  {
    name: 'Sarah Rodriguez',
    location: 'Russian Hill, San Francisco',
    project: 'Cabinet Refacing',
    quote: 'The cabinet refacing project exceeded our expectations. Our kitchen looks completely new at a fraction of the cost of a full renovation.',
    rating: 5
  }
]

const whyChooseUs = [
  {
    reason: 'Local Expertise',
    description: 'Deep understanding of San Francisco\'s unique architectural styles, building codes, and space constraints.',
    icon: '🏛️'
  },
  {
    reason: 'Historic Preservation',
    description: 'Specialized experience in working with historic homes while meeting modern functionality needs.',
    icon: '🏺'
  },
  {
    reason: 'Space Optimization',
    description: 'Expertise in maximizing limited space common in San Francisco\'s compact urban homes.',
    icon: '📐'
  },
  {
    reason: 'Premium Materials',
    description: 'Access to the finest materials and finishes that meet the high standards of San Francisco homeowners.',
    icon: '✨'
  }
]

export default function SanFranciscoPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'San Francisco', href: '/service-areas/san-francisco', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens San Francisco"
        subtitle="Bay Area Excellence"
        description="Transform your San Francisco home with custom kitchen design and cabinetry services. We specialize in maximizing space, preserving historic character, and creating modern functionality in the City by the Bay."
        imageSrc="service-areas/san-francisco-hero.webp"
        imageAlt="Beautiful custom kitchen in San Francisco with bay views and modern design"
        primaryCTA={{
          text: "Get SF Quote",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View SF Portfolio",
          href: "/portfolio"
        }}
      />

      {/* Why Choose Us */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in san-francisco</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We understand the unique challenges and opportunities of designing kitchens in San Francisco.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">{item.reason}</h3>
                <p className="text-charcoal/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in san-francisco</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Comprehensive kitchen services designed specifically for San Francisco homes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <h3 className="text-2xl font-semibold text-charcoal mb-4">{service.title}</h3>
                <p className="text-charcoal/70 mb-6">{service.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-charcoal">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-charcoal/70">
                        <span className="w-1.5 h-1.5 bg-deep-green rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in san-francisco</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We provide custom kitchen services throughout San Francisco's diverse neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {neighborhoods.map((neighborhood, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  <Link href={neighborhood.href} className="hover:text-deep-green transition-colors">
                    {neighborhood.name}
                  </Link>
                </h3>
                <p className="text-charcoal/70 mb-4">{neighborhood.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-charcoal text-sm">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.specialties.map((specialty, i) => (
                      <span key={i} className="px-3 py-1 bg-deep-green/10 text-deep-green rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Luxury Kitchen Design in san-francisco</h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Hear from San Francisco homeowners who have transformed their kitchens with our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-charcoal/50 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-french-gray mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-ivory">{testimonial.name}</p>
                  <p className="text-french-gray text-sm">{testimonial.location}</p>
                  <p className="text-deep-green text-sm">{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Information */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in san-francisco</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We're proud to serve San Francisco and understand the unique needs of Bay Area homeowners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Our San Francisco Expertise</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-green rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold text-charcoal">Historic Home Renovations</h4>
                    <p className="text-charcoal/70">Specialized experience with Victorian, Edwardian, and other historic architectural styles</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-green rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold text-charcoal">Space Optimization</h4>
                    <p className="text-charcoal/70">Expertise in maximizing limited space common in San Francisco's compact urban homes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-green rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold text-charcoal">Building Code Compliance</h4>
                    <p className="text-charcoal/70">Thorough knowledge of San Francisco building codes and permit requirements</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deep-green rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold text-charcoal">Premium Materials</h4>
                    <p className="text-charcoal/70">Access to the finest materials and finishes that meet San Francisco's high standards</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Service Areas</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Primary Service Areas:</h4>
                  <p className="text-charcoal/70">All San Francisco neighborhoods including Pacific Heights, Nob Hill, Russian Hill, Marina District, Mission District, and more.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Project Types:</h4>
                  <p className="text-charcoal/70">Single-family homes, condos, townhomes, historic renovations, and modern new construction.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Service Radius:</h4>
                  <p className="text-charcoal/70">We serve all of San Francisco with convenient showroom visits and on-site consultations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your San Francisco Kitchen?"
        description="Let's create a custom kitchen that perfectly fits your San Francisco home and lifestyle."
        primaryCTA={{
          text: "Get SF Quote",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View SF Portfolio",
          href: "/portfolio"
        }}
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "PineWood Cabinets - San Francisco",
            "description": "Custom kitchen design and cabinetry services in San Francisco. Premium kitchen remodeling and cabinet solutions.",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/san-francisco",
            "telephone": "+1-415-555-0123",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "San Francisco",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.7749",
              "longitude": "-122.4194"
            },
            "areaServed": {
              "@type": "City",
              "name": "San Francisco",
              "sameAs": "https://en.wikipedia.org/wiki/San_Francisco"
            },
            "serviceType": "Custom Kitchen Design and Cabinetry",
            "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-17:00"
          })
        }}
      />
    </>
  )
}
