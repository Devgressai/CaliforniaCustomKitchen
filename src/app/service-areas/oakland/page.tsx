import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: "Custom Kitchens Oakland | Kitchen Cabinets & Design | PineWood Cabinets",
  description: "Custom kitchen design and cabinetry services in Oakland. Premium kitchen remodeling, cabinet refacing, and storage solutions for East Bay homes.",
  keywords: [
    'custom kitchens Oakland',
    'kitchen cabinets Oakland',
    'kitchen remodeling Oakland',
    'kitchen design Oakland',
    'cabinet refacing Oakland',
    'kitchen renovation Oakland',
    'custom cabinetry Oakland',
    'kitchen contractor Oakland'
  ],
  openGraph: {
    title: "Custom Kitchens Oakland | PineWood Cabinets",
    description: "Custom kitchen design and cabinetry services in Oakland. Premium kitchen remodeling and cabinet solutions.",
    images: ['/images/service-areas/oakland-hero.webp'],
  },
}

const neighborhoods = [
  {
    name: 'Rockridge',
    href: '/service-areas/oakland/rockridge',
    description: 'Charming neighborhood with Craftsman homes and vibrant commercial district',
    specialties: ['Craftsman renovations', 'Historic preservation', 'Family kitchens']
  },
  {
    name: 'Piedmont',
    href: '/service-areas/oakland/piedmont',
    description: 'Affluent community with elegant homes and beautiful gardens',
    specialties: ['Luxury kitchens', 'Elegant designs', 'Garden views']
  },
  {
    name: 'Montclair',
    href: '/service-areas/oakland/montclair',
    description: 'Family-friendly neighborhood with diverse architectural styles',
    specialties: ['Family spaces', 'Mixed styles', 'Community living']
  },
  {
    name: 'Temescal',
    href: '/service-areas/oakland/temescal',
    description: 'Trendy neighborhood with Victorian homes and modern renovations',
    specialties: ['Victorian renovations', 'Modern updates', 'Urban designs']
  },
  {
    name: 'Grand Lake',
    href: '/service-areas/oakland/grand-lake',
    description: 'Historic neighborhood with beautiful lake views and diverse architecture',
    specialties: ['Lake views', 'Historic homes', 'Scenic designs']
  }
]

const services = [
  {
    title: 'Custom Kitchen Design',
    description: 'Bespoke kitchen designs tailored to Oakland\'s diverse architectural styles and community-focused lifestyle.',
    features: ['Community integration', 'Diverse styles', 'Family functionality', 'East Bay aesthetics']
  },
  {
    title: 'Cabinet Refacing',
    description: 'Transform existing kitchens with new doors, drawer fronts, and hardware while preserving the layout.',
    features: ['Cost-effective', 'Quick turnaround', 'Minimal disruption', 'Quality materials']
  },
  {
    title: 'Kitchen Remodeling',
    description: 'Complete kitchen transformations from design to installation, perfect for Oakland homes.',
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
    location: 'Rockridge, Oakland',
    project: 'Craftsman Kitchen Renovation',
    quote: 'PineWood Cabinets beautifully renovated our Craftsman home kitchen while preserving its historic character. The attention to detail is remarkable.',
    rating: 5
  },
  {
    name: 'David Chen',
    location: 'Piedmont, Oakland',
    project: 'Luxury Kitchen Design',
    quote: 'Our new luxury kitchen perfectly balances elegance with functionality. The team understood our vision and executed it flawlessly.',
    rating: 5
  },
  {
    name: 'Maria Rodriguez',
    location: 'Temescal, Oakland',
    project: 'Victorian Kitchen Update',
    quote: 'The Victorian kitchen update exceeded our expectations. The quality of workmanship and materials is outstanding.',
    rating: 5
  }
]

export default function OaklandPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'Oakland', href: '/service-areas/oakland', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens Oakland"
        subtitle="East Bay Excellence"
        description="Transform your Oakland home with custom kitchen design and cabinetry services. We specialize in diverse architectural styles, community integration, and premium materials for East Bay homeowners."
        imageSrc="service-areas/oakland-hero.webp"
        imageAlt="Beautiful custom kitchen in Oakland with diverse architectural style and community-focused design"
        primaryCTA={{
          text: "Get Oakland Quote",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Oakland Portfolio",
          href: "/portfolio"
        }}
      />

      {/* Services */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Our Oakland Services
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Comprehensive kitchen services designed specifically for Oakland homes.
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
              Oakland Neighborhoods We Serve
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We provide custom kitchen services throughout Oakland's diverse neighborhoods.
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
              What Oakland Clients Say
            </h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Hear from Oakland homeowners who have transformed their kitchens with our services.
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
        title="Ready to Transform Your Oakland Kitchen?"
        description="Let's create a custom kitchen that perfectly fits your Oakland home and East Bay lifestyle."
        primaryCTA={{
          text: "Get Oakland Quote",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Oakland Portfolio",
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
            "name": "PineWood Cabinets - Oakland",
            "description": "Custom kitchen design and cabinetry services in Oakland. Premium kitchen remodeling and cabinet solutions.",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/oakland",
            "telephone": "+1-510-555-0123",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oakland",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.8044",
              "longitude": "-122.2712"
            },
            "areaServed": {
              "@type": "City",
              "name": "Oakland",
              "sameAs": "https://en.wikipedia.org/wiki/Oakland,_California"
            },
            "serviceType": "Custom Kitchen Design and Cabinetry",
            "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-17:00"
          })
        }}
      />
    </>
  )
}
