import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: "Custom Kitchens Stockton | Kitchen Cabinets & Design | PineWood Cabinets",
  description: "Custom kitchen design and cabinetry services in Stockton. Premium kitchen remodeling, cabinet refacing, and storage solutions for San Joaquin County homes.",
  keywords: [
    'custom kitchens Stockton',
    'kitchen cabinets Stockton',
    'kitchen remodeling Stockton',
    'kitchen design Stockton',
    'cabinet refacing Stockton',
    'kitchen renovation Stockton',
    'custom cabinetry Stockton',
    'kitchen contractor Stockton'
  ],
  openGraph: {
    title: "Custom Kitchens Stockton | PineWood Cabinets",
    description: "Custom kitchen design and cabinetry services in Stockton. Premium kitchen remodeling and cabinet solutions.",
    images: ['/images/service-areas/stockton-hero.webp'],
  },
}

const neighborhoods = [
  {
    name: 'Brookside',
    href: '/service-areas/stockton/brookside',
    description: 'Upscale residential area with custom homes and beautiful landscaping',
    specialties: ['Luxury kitchens', 'Custom designs', 'Landscaped views']
  },
  {
    name: 'Downtown Stockton',
    href: '/service-areas/stockton/downtown-stockton',
    description: 'Historic downtown with mixed-use buildings and urban living',
    specialties: ['Urban designs', 'Historic renovations', 'Mixed-use spaces']
  },
  {
    name: 'Weston Ranch',
    href: '/service-areas/stockton/weston-ranch',
    description: 'Family-friendly community with modern homes and excellent schools',
    specialties: ['Family spaces', 'Modern designs', 'Community living']
  },
  {
    name: 'Spanos Park',
    href: '/service-areas/stockton/spanos-park',
    description: 'Established neighborhood with diverse architectural styles',
    specialties: ['Diverse styles', 'Established community', 'Mixed renovations']
  },
  {
    name: 'Morada',
    href: '/service-areas/stockton/morada',
    description: 'Growing area with new construction and established neighborhoods',
    specialties: ['New construction', 'Modern updates', 'Growing community']
  }
]

const services = [
  {
    title: 'Custom Kitchen Design',
    description: 'Bespoke kitchen designs tailored to Stockton\'s diverse architectural styles and San Joaquin County lifestyle.',
    features: ['San Joaquin County aesthetics', 'Diverse styles', 'Family functionality', 'Community integration']
  },
  {
    title: 'Cabinet Refacing',
    description: 'Transform existing kitchens with new doors, drawer fronts, and hardware while preserving the layout.',
    features: ['Cost-effective', 'Quick turnaround', 'Minimal disruption', 'Quality materials']
  },
  {
    title: 'Kitchen Remodeling',
    description: 'Complete kitchen transformations from design to installation, perfect for Stockton homes.',
    features: ['Full renovation', 'Custom solutions', 'Premium materials', 'Professional installation']
  },
  {
    title: 'Storage Solutions',
    description: 'Maximize space with custom storage solutions designed for diverse living situations.',
    features: ['Space efficiency', 'Custom organization', 'Flexible solutions', 'Smart storage']
  }
]

const testimonials = [
  {
    name: 'Jennifer Walsh',
    location: 'Brookside, Stockton',
    project: 'Luxury Kitchen Renovation',
    quote: 'PineWood Cabinets beautifully renovated our luxury home kitchen. The attention to detail and quality of workmanship is exceptional.',
    rating: 5
  },
  {
    name: 'David Chen',
    location: 'Weston Ranch, Stockton',
    project: 'Family Kitchen Design',
    quote: 'Our new family kitchen perfectly balances functionality with style. The team understood our needs and delivered beyond expectations.',
    rating: 5
  },
  {
    name: 'Maria Rodriguez',
    location: 'Downtown Stockton, Stockton',
    project: 'Urban Kitchen Update',
    quote: 'The urban kitchen update exceeded our expectations. The quality of workmanship and materials is outstanding.',
    rating: 5
  }
]

export default function StocktonPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'Stockton', href: '/service-areas/stockton', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens Stockton"
        subtitle="San Joaquin County Excellence"
        description="Transform your Stockton home with custom kitchen design and cabinetry services. We specialize in diverse architectural styles, family functionality, and premium materials for San Joaquin County homeowners."
        imageSrc="service-areas/stockton-hero.webp"
        imageAlt="Beautiful custom kitchen in Stockton with San Joaquin County design and family functionality"
        primaryCTA={{
          text: "Get Stockton Quote",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Stockton Portfolio",
          href: "/portfolio"
        }}
      />

      {/* Services */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in stockton</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Comprehensive kitchen services designed specifically for Stockton homes.
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
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in stockton</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We provide custom kitchen services throughout Stockton's diverse neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {neighborhoods.map((neighborhood, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  <a href={neighborhood.href} className="hover:text-deep-green transition-colors">
                    {neighborhood.name}
                  </a>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Luxury Kitchen Design in stockton</h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Hear from Stockton homeowners who have transformed their kitchens with our services.
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

      <CTASection
        title="Ready to Transform Your Stockton Kitchen?"
        description="Let's create a custom kitchen that perfectly fits your Stockton home and San Joaquin County lifestyle."
        primaryCTA={{
          text: "Get Stockton Quote",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Stockton Portfolio",
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
            "name": "PineWood Cabinets - Stockton",
            "description": "Custom kitchen design and cabinetry services in Stockton. Premium kitchen remodeling and cabinet solutions.",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/stockton",
            "telephone": "+1-209-555-0123",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Stockton",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.9577",
              "longitude": "-121.2908"
            },
            "areaServed": {
              "@type": "City",
              "name": "Stockton",
              "sameAs": "https://en.wikipedia.org/wiki/Stockton,_California"
            },
            "serviceType": "Custom Kitchen Design and Cabinetry",
            "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-17:00"
          })
        }}
      />
    </>
  )
}
