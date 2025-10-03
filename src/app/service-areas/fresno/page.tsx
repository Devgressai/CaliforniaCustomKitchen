import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: "Custom Kitchens Fresno | Kitchen Cabinets & Design | PineWood Cabinets",
  description: "Custom kitchen design and cabinetry services in Fresno. Premium kitchen remodeling, cabinet refacing, and storage solutions for Central Valley homes.",
  keywords: [
    'custom kitchens Fresno',
    'kitchen cabinets Fresno',
    'kitchen remodeling Fresno',
    'kitchen design Fresno',
    'cabinet refacing Fresno',
    'kitchen renovation Fresno',
    'custom cabinetry Fresno',
    'kitchen contractor Fresno'
  ],
  openGraph: {
    title: "Custom Kitchens Fresno | PineWood Cabinets",
    description: "Custom kitchen design and cabinetry services in Fresno. Premium kitchen remodeling and cabinet solutions.",
    images: ['/images/service-areas/fresno-hero.webp'],
  },
}

const neighborhoods = [
  {
    name: 'Tower District',
    href: '/service-areas/fresno/tower-district',
    description: 'Historic neighborhood with Art Deco architecture and vibrant community',
    specialties: ['Art Deco designs', 'Historic preservation', 'Community spaces']
  },
  {
    name: 'Fig Garden',
    href: '/service-areas/fresno/fig-garden',
    description: 'Upscale residential area with custom homes and beautiful gardens',
    specialties: ['Luxury kitchens', 'Custom designs', 'Garden views']
  },
  {
    name: 'Clovis',
    href: '/service-areas/fresno/clovis',
    description: 'Family-friendly community with modern homes and excellent schools',
    specialties: ['Family spaces', 'Modern designs', 'Community living']
  },
  {
    name: 'North Fresno',
    href: '/service-areas/fresno/north-fresno',
    description: 'Growing area with new construction and established neighborhoods',
    specialties: ['New construction', 'Modern updates', 'Growing community']
  },
  {
    name: 'Downtown Fresno',
    href: '/service-areas/fresno/downtown-fresno',
    description: 'Urban core with historic buildings and modern condos',
    specialties: ['Urban designs', 'Historic renovations', 'Condo spaces']
  }
]

const services = [
  {
    title: 'Custom Kitchen Design',
    description: 'Bespoke kitchen designs tailored to Fresno\'s diverse architectural styles and Central Valley lifestyle.',
    features: ['Central Valley aesthetics', 'Diverse styles', 'Family functionality', 'Community integration']
  },
  {
    title: 'Cabinet Refacing',
    description: 'Transform existing kitchens with new doors, drawer fronts, and hardware while preserving the layout.',
    features: ['Cost-effective', 'Quick turnaround', 'Minimal disruption', 'Quality materials']
  },
  {
    title: 'Kitchen Remodeling',
    description: 'Complete kitchen transformations from design to installation, perfect for Fresno homes.',
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
    name: 'Robert Johnson',
    location: 'Tower District, Fresno',
    project: 'Art Deco Kitchen Renovation',
    quote: 'PineWood Cabinets beautifully renovated our Art Deco home kitchen while preserving its historic character. The attention to detail is remarkable.',
    rating: 5
  },
  {
    name: 'Sarah Davis',
    location: 'Fig Garden, Fresno',
    project: 'Luxury Kitchen Design',
    quote: 'Our new luxury kitchen perfectly balances elegance with functionality. The team understood our vision and executed it flawlessly.',
    rating: 5
  },
  {
    name: 'Michael Wilson',
    location: 'Clovis, Fresno',
    project: 'Family Kitchen Remodel',
    quote: 'The family kitchen remodel exceeded our expectations. The quality of workmanship and materials is outstanding.',
    rating: 5
  }
]

export default function FresnoPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'Fresno', href: '/service-areas/fresno', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens Fresno"
        subtitle="Central Valley Excellence"
        description="Transform your Fresno home with custom kitchen design and cabinetry services. We specialize in diverse architectural styles, family functionality, and premium materials for Central Valley homeowners."
        imageSrc="service-areas/fresno-hero.webp"
        imageAlt="Beautiful custom kitchen in Fresno with Central Valley design and family functionality"
        primaryCTA={{
          text: "Get Fresno Quote",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Fresno Portfolio",
          href: "/portfolio"
        }}
      />

      {/* Services */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Our Fresno Services
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Comprehensive kitchen services designed specifically for Fresno homes.
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Fresno Neighborhoods We Serve
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We provide custom kitchen services throughout Fresno's diverse neighborhoods.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              What Fresno Clients Say
            </h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Hear from Fresno homeowners who have transformed their kitchens with our services.
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
        title="Ready to Transform Your Fresno Kitchen?"
        description="Let's create a custom kitchen that perfectly fits your Fresno home and Central Valley lifestyle."
        primaryCTA={{
          text: "Get Fresno Quote",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Fresno Portfolio",
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
            "name": "PineWood Cabinets - Fresno",
            "description": "Custom kitchen design and cabinetry services in Fresno. Premium kitchen remodeling and cabinet solutions.",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/fresno",
            "telephone": "+1-559-555-0123",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Fresno",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "36.7378",
              "longitude": "-119.7871"
            },
            "areaServed": {
              "@type": "City",
              "name": "Fresno",
              "sameAs": "https://en.wikipedia.org/wiki/Fresno,_California"
            },
            "serviceType": "Custom Kitchen Design and Cabinetry",
            "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-17:00"
          })
        }}
      />
    </>
  )
}
