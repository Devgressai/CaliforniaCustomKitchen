import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: "Custom Kitchens San Jose | Kitchen Cabinets & Design | PineWood Cabinets",
  description: "Custom kitchen design and cabinetry services in San Jose. Premium kitchen remodeling, cabinet refacing, and storage solutions for Silicon Valley homes.",
  keywords: [
    'custom kitchens San Jose',
    'kitchen cabinets San Jose',
    'kitchen remodeling San Jose',
    'kitchen design San Jose',
    'cabinet refacing San Jose',
    'kitchen renovation San Jose',
    'custom cabinetry San Jose',
    'kitchen contractor San Jose'
  ],
  openGraph: {
    title: "Custom Kitchens San Jose | PineWood Cabinets",
    description: "Custom kitchen design and cabinetry services in San Jose. Premium kitchen remodeling and cabinet solutions.",
    images: ['/images/service-areas/san-jose-hero.webp'],
  },
}

const neighborhoods = [
  {
    name: 'Willow Glen',
    href: '/service-areas/san-jose/willow-glen',
    description: 'Charming historic neighborhood with tree-lined streets and Craftsman homes',
    specialties: ['Historic renovations', 'Craftsman designs', 'Family kitchens']
  },
  {
    name: 'Almaden Valley',
    href: '/service-areas/san-jose/almaden-valley',
    description: 'Upscale residential area with modern homes and scenic valley views',
    specialties: ['Luxury kitchens', 'Modern designs', 'Valley views']
  },
  {
    name: 'Los Gatos',
    href: '/service-areas/san-jose/los-gatos',
    description: 'Affluent community with custom homes and mountain views',
    specialties: ['Custom designs', 'Mountain views', 'High-end materials']
  },
  {
    name: 'Saratoga',
    href: '/service-areas/san-jose/saratoga',
    description: 'Elegant community known for its beautiful homes and excellent schools',
    specialties: ['Elegant designs', 'Family spaces', 'Premium finishes']
  },
  {
    name: 'Campbell',
    href: '/service-areas/san-jose/campbell',
    description: 'Vibrant downtown area with mix of historic and modern homes',
    specialties: ['Mixed styles', 'Urban designs', 'Historic preservation']
  }
]

const services = [
  {
    title: 'Custom Kitchen Design',
    description: 'Bespoke kitchen designs tailored to San Jose\'s diverse architectural styles and tech-savvy lifestyle.',
    features: ['Smart home integration', 'Modern functionality', 'Tech-friendly designs', 'Silicon Valley aesthetics']
  },
  {
    title: 'Cabinet Refacing',
    description: 'Transform existing kitchens with new doors, drawer fronts, and hardware while preserving the layout.',
    features: ['Cost-effective', 'Quick turnaround', 'Minimal disruption', 'Quality materials']
  },
  {
    title: 'Kitchen Remodeling',
    description: 'Complete kitchen transformations from design to installation, perfect for San Jose homes.',
    features: ['Full renovation', 'Custom solutions', 'Premium materials', 'Professional installation']
  },
  {
    title: 'Storage Solutions',
    description: 'Maximize space with custom storage solutions designed for modern living.',
    features: ['Space efficiency', 'Custom organization', 'Modern optimization', 'Smart storage']
  }
]

const testimonials = [
  {
    name: 'David Kim',
    location: 'Willow Glen, San Jose',
    project: 'Historic Kitchen Renovation',
    quote: 'PineWood Cabinets beautifully renovated our 1920s Craftsman home kitchen while preserving its historic character. The attention to detail is remarkable.',
    rating: 5
  },
  {
    name: 'Lisa Chen',
    location: 'Almaden Valley, San Jose',
    project: 'Modern Kitchen Design',
    quote: 'Our new kitchen perfectly balances modern functionality with elegant design. The team understood our vision and executed it flawlessly.',
    rating: 5
  },
  {
    name: 'Michael Rodriguez',
    location: 'Los Gatos, San Jose',
    project: 'Luxury Kitchen Remodel',
    quote: 'The luxury kitchen remodel exceeded our expectations. The quality of workmanship and materials is outstanding.',
    rating: 5
  }
]

export default function SanJosePage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Service Areas', href: '/service-areas' },
              { name: 'San Jose', href: '/service-areas/san-jose', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Custom Kitchens San Jose"
        subtitle="Silicon Valley Excellence"
        description="Transform your San Jose home with custom kitchen design and cabinetry services. We specialize in modern functionality, smart home integration, and premium materials for Silicon Valley homeowners."
        imageSrc="service-areas/san-jose-hero.webp"
        imageAlt="Beautiful custom kitchen in San Jose with modern design and smart home features"
        primaryCTA={{
          text: "Get San Jose Quote",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View San Jose Portfolio",
          href: "/portfolio"
        }}
      />

      {/* Services */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Our San Jose Services
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Comprehensive kitchen services designed specifically for San Jose homes.
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
              San Jose Neighborhoods We Serve
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We provide custom kitchen services throughout San Jose's diverse neighborhoods.
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
              What San Jose Clients Say
            </h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Hear from San Jose homeowners who have transformed their kitchens with our services.
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
        title="Ready to Transform Your San Jose Kitchen?"
        description="Let's create a custom kitchen that perfectly fits your San Jose home and Silicon Valley lifestyle."
        primaryCTA={{
          text: "Get San Jose Quote",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View San Jose Portfolio",
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
            "name": "PineWood Cabinets - San Jose",
            "description": "Custom kitchen design and cabinetry services in San Jose. Premium kitchen remodeling and cabinet solutions.",
            "url": "https://california-custom-kitchen.vercel.app/service-areas/san-jose",
            "telephone": "+1-408-555-0123",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "San Jose",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.3382",
              "longitude": "-121.8863"
            },
            "areaServed": {
              "@type": "City",
              "name": "San Jose",
              "sameAs": "https://en.wikipedia.org/wiki/San_Jose,_California"
            },
            "serviceType": "Custom Kitchen Design and Cabinetry",
            "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-17:00"
          })
        }}
      />
    </>
  )
}
