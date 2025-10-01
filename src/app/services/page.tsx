import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Luxury Kitchen & Cabinet Services | Custom Design | AV\'s Cabinets',
  description: 'Discover our comprehensive luxury cabinetry services: custom kitchens, bespoke cabinetry, architectural millwork, and storage solutions for California\'s most discerning clientele.',
  keywords: 'luxury kitchen services, custom cabinetry, bespoke millwork, kitchen design, cabinet installation, California cabinetry, high-end kitchens',
  openGraph: {
    title: 'Luxury Kitchen & Cabinet Services | AV\'s Cabinets',
    description: 'Comprehensive luxury cabinetry services for California\'s most discerning clientele.',
    type: 'website',
  },
}

const services = [
  {
    title: 'Custom Kitchens',
    description: 'The heart of the home deserves nothing less than perfection. Our custom kitchens blend functionality with artistry, creating spaces that serve both daily rituals and grand entertaining.',
    imageSrc: 'services/custom-kitchens-hero.webp',
    imageAlt: 'Luxury custom kitchen with marble countertops and walnut cabinetry',
    href: '/services/custom-kitchens',
    features: [
      'Inset door construction',
      'Soft-close hardware',
      'Grain-matched veneers',
      'Museum-grade finishing',
      'Custom sizing',
      'Integrated appliances'
    ],
    startingPrice: '$150,000',
    timeline: '6-8 months'
  },
  {
    title: 'Bespoke Cabinetry',
    description: 'Beyond kitchens, we craft storage solutions that disappear into architecture while maximizing both beauty and utility throughout your home.',
    imageSrc: 'services/bespoke-cabinetry-hero.webp',
    imageAlt: 'Built-in entertainment center with hidden storage in living room',
    href: '/services/bespoke-cabinetry',
    features: [
      'Invisible hinges',
      'Push-to-open mechanisms',
      'LED integration',
      'Custom sizing',
      'Hidden storage',
      'Built-in seating'
    ],
    startingPrice: '$75,000',
    timeline: '4-6 months'
  },
  {
    title: 'Architectural Millwork',
    description: 'From coffered ceilings to intricate moldings, our millwork transforms spaces into architectural statements worthy of the finest estates.',
    imageSrc: 'services/architectural-millwork-hero.webp',
    imageAlt: 'Coffered ceiling and crown molding in formal dining room',
    href: '/services/architectural-millwork',
    features: [
      'Hand-carved details',
      'Period-accurate profiles',
      'Seamless installation',
      'Restoration expertise',
      'Custom moldings',
      'Coffered ceilings'
    ],
    startingPrice: '$50,000',
    timeline: '3-5 months'
  },
  {
    title: 'Wine Cellars & Storage',
    description: 'Create the ultimate wine storage solution with climate-controlled environments and custom racking systems designed for serious collectors.',
    imageSrc: 'services/wine-cellar-storage.webp',
    imageAlt: 'Climate-controlled wine cellar with custom racking system',
    href: '/services/wine-cellars',
    features: [
      'Climate control systems',
      'Custom racking',
      'Display lighting',
      'Inventory management',
      'Tasting areas',
      'Security features'
    ],
    startingPrice: '$100,000',
    timeline: '4-6 months'
  },
  {
    title: 'Pantry Design',
    description: 'Transform your pantry into a highly organized, beautiful space that maximizes storage and simplifies meal preparation.',
    imageSrc: 'services/pantry-design.webp',
    imageAlt: 'Custom pantry with pull-out shelves and organization systems',
    href: '/services/pantry-design',
    features: [
      'Pull-out shelves',
      'Custom organization',
      'Spice storage',
      'Appliance garages',
      'Lighting systems',
      'Ventilation'
    ],
    startingPrice: '$25,000',
    timeline: '2-3 months'
  },
  {
    title: 'Laundry Room Cabinetry',
    description: 'Create a functional and beautiful laundry space with custom cabinetry designed for efficiency and organization.',
    imageSrc: 'services/laundry-room-cabinetry.webp',
    imageAlt: 'Custom laundry room with built-in cabinetry and organization',
    href: '/services/laundry-room-cabinetry',
    features: [
      'Built-in hampers',
      'Folding stations',
      'Ironing boards',
      'Storage solutions',
      'Utility sinks',
      'Drying racks'
    ],
    startingPrice: '$30,000',
    timeline: '2-4 months'
  }
]

const additionalServices = [
  {
    title: 'Kitchen Renovation',
    description: 'Complete kitchen transformations that preserve architectural integrity while modernizing functionality.',
    href: '/services/kitchen-renovation'
  },
  {
    title: 'Cabinet Refacing',
    description: 'Update existing cabinetry with new doors, hardware, and finishes for a fresh look.',
    href: '/services/cabinet-refacing'
  },
  {
    title: 'Custom Storage Solutions',
    description: 'Maximize every inch of space with innovative storage solutions throughout your home.',
    href: '/services/custom-storage'
  },
  {
    title: 'Home Office Cabinetry',
    description: 'Create productive workspaces with custom cabinetry designed for modern professionals.',
    href: '/services/home-office-cabinetry'
  },
  {
    title: 'Media Room Cabinetry',
    description: 'Entertainment spaces that seamlessly integrate technology with elegant cabinetry.',
    href: '/services/media-room-cabinetry'
  },
  {
    title: 'Outdoor Kitchen Cabinetry',
    description: 'Weather-resistant cabinetry for outdoor entertaining and cooking spaces.',
    href: '/services/outdoor-kitchen-cabinetry'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-french-gray leading-relaxed mb-8">
              Comprehensive luxury cabinetry services tailored to California's most discerning clientele. From custom kitchens to architectural millwork, we bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Custom Design</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Premium Materials</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">White-Glove Service</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Lifetime Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Signature Services
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our core offerings represent the pinnacle of cabinetry craftsmanship, designed for clients who demand nothing less than perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <article 
                key={service.title} 
                className="group bg-white rounded-lg shadow-sm border border-french-gray/20 hover:shadow-lg transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Link href={service.href} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-french-gray/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-ivory">
                        <h3 className="text-2xl font-semibold mb-2 font-display">{service.title}</h3>
                        <p className="text-sm opacity-90">Starting at {service.startingPrice}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="font-display text-2xl font-semibold text-charcoal mb-4 group-hover:text-deep-green transition-colors duration-200">
                      {service.title}
                    </h3>
                    
                    <p className="text-charcoal/80 leading-relaxed mb-6 line-clamp-3">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-charcoal/70">
                          <div className="w-1.5 h-1.5 bg-deep-green rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-charcoal/60 mb-4">
                      <span>Timeline: {service.timeline}</span>
                      <span className="text-deep-green font-medium">Learn More →</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Additional Services
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Beyond our signature offerings, we provide specialized cabinetry solutions for every space in your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Link 
                key={service.title}
                href={service.href} 
                className="group bg-white p-6 rounded-lg shadow-sm border border-french-gray/20 hover:shadow-md hover:border-deep-green/30 transition-all duration-300"
              >
                <h3 className="font-display text-lg font-semibold text-charcoal mb-3 group-hover:text-deep-green transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-deep-green text-sm font-medium mt-3 group-hover:underline">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Our Process
              </h2>
              <div className="prose-luxury text-charcoal/80 mb-8">
                <p>
                  Every project follows our rigorous six-phase process, ensuring unparalleled precision and a seamless client experience. From initial consultation to white-glove installation, we maintain the highest standards of craftsmanship and communication.
                </p>
                <p>
                  Our dedicated project managers keep you informed at every stage, providing detailed updates and ensuring that every decision aligns with your aesthetic and functional requirements. We pride ourselves on a process that is as refined as the cabinetry we create.
                </p>
              </div>
              <Link href="/process" className="btn-primary">
                Learn About Our Process
              </Link>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-deep-green rounded-full flex items-center justify-center text-ivory text-sm font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Initial Consultation</h3>
                  <p className="text-charcoal/70 text-sm">Understanding your vision, lifestyle, and functional requirements.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-deep-green rounded-full flex items-center justify-center text-ivory text-sm font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Conceptual Design</h3>
                  <p className="text-charcoal/70 text-sm">Creating initial concepts that integrate your vision with our expertise.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-deep-green rounded-full flex items-center justify-center text-ivory text-sm font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Design Development</h3>
                  <p className="text-charcoal/70 text-sm">Refining designs with detailed drawings and material selections.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-deep-green rounded-full flex items-center justify-center text-ivory text-sm font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Fabrication</h3>
                  <p className="text-charcoal/70 text-sm">Hand-crafting your cabinetry using traditional techniques.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-deep-green rounded-full flex items-center justify-center text-ivory text-sm font-bold flex-shrink-0">5</div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Installation</h3>
                  <p className="text-charcoal/70 text-sm">White-glove installation and final adjustments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Showcase */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Premium Materials
            </h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              We work exclusively with the finest materials sourced from around the world, each selected for its unique character, durability, and beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center text-ivory text-2xl font-bold mx-auto mb-4">W</div>
              <h3 className="text-lg font-semibold text-ivory mb-3">Walnut</h3>
              <p className="text-french-gray text-sm">Rich, warm tones with distinctive grain patterns</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center text-ivory text-2xl font-bold mx-auto mb-4">O</div>
              <h3 className="text-lg font-semibold text-ivory mb-3">Oak</h3>
              <p className="text-french-gray text-sm">Classic strength and timeless beauty</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center text-ivory text-2xl font-bold mx-auto mb-4">C</div>
              <h3 className="text-lg font-semibold text-ivory mb-3">Cherry</h3>
              <p className="text-french-gray text-sm">Deepens in color over time with use</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center text-ivory text-2xl font-bold mx-auto mb-4">T</div>
              <h3 className="text-lg font-semibold text-ivory mb-3">Teak</h3>
              <p className="text-french-gray text-sm">Natural oils provide weather resistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
            Ready to Begin Your Project?
          </h2>
          <p className="text-xl text-charcoal/80 mb-12 max-w-3xl mx-auto">
            Every masterpiece begins with a conversation. Let's discuss how we can bring your vision to life with the finest materials and time-honored craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Request a Private Consultation
            </Link>
            <Link href="/portfolio" className="btn-ghost">
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
