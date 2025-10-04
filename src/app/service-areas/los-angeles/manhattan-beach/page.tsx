import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Kitchens Manhattan Beach | Luxury Cabinetry | AV\'s Cabinets California',
  description: 'Custom kitchens and luxury cabinetry for Manhattan Beach\'s most prestigious beachfront estates. AV\'s Cabinets brings European craftsmanship to California\'s premier beach community.',
  keywords: 'custom kitchens Manhattan Beach, luxury cabinetry Manhattan Beach, beachfront estate kitchens, coastal home cabinetry, luxury kitchens California',
  openGraph: {
    title: 'Custom Kitchens Manhattan Beach | Luxury Cabinetry | AV\'s Cabinets California',
    description: 'Custom kitchens and luxury cabinetry for Manhattan Beach\'s most prestigious beachfront estates.',
    type: 'website',
  },
}

const localProjects = [
  {
    title: 'Beachfront Estate Kitchen',
    location: 'Manhattan Beach, CA',
    description: 'A stunning beachfront kitchen renovation featuring custom walnut cabinetry and panoramic ocean views. Designed to maximize the breathtaking coastal scenery while providing luxury functionality.',
    imageSrc: 'portfolio/manhattan-beach-beachfront-kitchen.webp',
    imageAlt: 'Custom beachfront kitchen with panoramic Manhattan Beach ocean views',
    year: '2024'
  },
  {
    title: 'Hill Section Modern Kitchen',
    location: 'Manhattan Beach, CA',
    description: 'A contemporary hill section kitchen with clean lines and premium materials. Perfect for the modern beach lifestyle with integrated outdoor living spaces.',
    imageSrc: 'portfolio/manhattan-beach-hill-kitchen.webp',
    imageAlt: 'Modern hill section kitchen in Manhattan Beach',
    year: '2024'
  },
  {
    title: 'Sand Section Traditional Kitchen',
    location: 'Manhattan Beach, CA',
    description: 'A classic sand section kitchen renovation with traditional details and coastal charm. Designed for entertaining and family gatherings.',
    imageSrc: 'portfolio/manhattan-beach-sand-kitchen.webp',
    imageAlt: 'Traditional sand section kitchen in Manhattan Beach',
    year: '2023'
  }
]

const localArchitecture = [
  {
    style: 'Beach Modern',
    description: 'Manhattan Beach\'s beach modern homes feature clean lines, natural materials, and expansive windows that frame the stunning ocean views. Our cabinetry complements these elements with minimalist designs and premium materials.',
    characteristics: ['Clean lines', 'Natural materials', 'Ocean views', 'Minimalist design']
  },
  {
    style: 'Traditional Beach House',
    description: 'Classic beach house architecture embraces the coastal lifestyle with open floor plans and natural materials. Our cabinetry honors this tradition with traditional details and coastal charm.',
    characteristics: ['Traditional details', 'Coastal charm', 'Open floor plans', 'Natural materials']
  },
  {
    style: 'Hill Section Contemporary',
    description: 'Hill section homes feature contemporary design with stunning views and luxury finishes. Our cabinetry integrates seamlessly with these spaces, offering clean lines and premium materials.',
    characteristics: ['Contemporary design', 'Stunning views', 'Luxury finishes', 'Seamless integration']
  }
]

const localInsights = [
  {
    title: 'Beach Lifestyle',
    description: 'Manhattan Beach residents value the connection to the ocean and outdoor living. We design cabinetry that enhances this connection while providing the luxury and functionality expected in beachfront estates.',
    icon: '🏖️'
  },
  {
    title: 'Entertainment Focus',
    description: 'Many Manhattan Beach homes are designed for entertaining, with open floor plans and integrated indoor-outdoor living. We create cabinetry that supports this lifestyle with flexible storage and serving solutions.',
    icon: '🍽️'
  },
  {
    title: 'Luxury Living',
    description: 'Manhattan Beach residents expect the finest materials and finishes. We work exclusively with premium hardwoods, custom hardware, and luxury finishes that meet the highest standards.',
    icon: '💎'
  },
  {
    title: 'Marine Environment',
    description: 'The coastal environment requires special consideration for salt air and humidity. We use marine-grade materials and finishes that withstand these conditions while maintaining luxury aesthetics.',
    icon: '⚓'
  }
]

const neighborhoods = [
  'The Strand',
  'Hill Section',
  'Sand Section',
  'Tree Section',
  'Poop Deck',
  'Manhattan Village',
  'Manhattan Heights',
  'Manhattan Country Club',
  'Manhattan Shores',
  'Manhattan Place',
  'Manhattan Terrace',
  'Manhattan Crest'
]

const beachConsiderations = [
  {
    aspect: 'Salt Air Protection',
    description: 'Manhattan Beach\'s coastal environment requires special consideration for salt air and humidity. We use marine-grade materials and finishes that withstand these conditions while maintaining luxury aesthetics.',
    features: ['Marine-grade materials', 'Salt air resistance', 'Humidity protection', 'Luxury finishes']
  },
  {
    aspect: 'Ocean Views',
    description: 'Many Manhattan Beach homes feature stunning ocean views. Our cabinetry designs enhance these views while providing practical storage and functionality.',
    features: ['View enhancement', 'Practical storage', 'Ocean integration', 'Functional design']
  },
  {
    aspect: 'Indoor-Outdoor Living',
    description: 'Beach living emphasizes the connection between indoor and outdoor spaces. We design cabinetry that supports this lifestyle with flexible storage and serving solutions.',
    features: ['Outdoor integration', 'Flexible storage', 'Serving solutions', 'Lifestyle support']
  }
]

const localMaterials = [
  {
    name: 'Teak',
    description: 'Natural oils in teak provide excellent weather resistance, making it perfect for Manhattan Beach\'s coastal environment. Its golden color and tight grain create a sophisticated appearance.',
    benefits: ['Weather resistance', 'Natural oils', 'Golden color', 'Coastal appropriate']
  },
  {
    name: 'Cedar',
    description: 'Aromatic cedar provides natural resistance to moisture and insects, making it perfect for coastal applications. Its pleasant scent and light color complement the beach lifestyle.',
    benefits: ['Moisture resistance', 'Natural insect resistance', 'Pleasant scent', 'Beach aesthetic']
  },
  {
    name: 'Mahogany',
    description: 'Luxurious mahogany offers exceptional beauty and durability for high-end coastal applications. Its rich color and fine grain create a sophisticated appearance perfect for luxury beach homes.',
    benefits: ['Luxurious appearance', 'Rich color', 'Fine grain', 'Exceptional durability']
  },
  {
    name: 'Stainless Steel',
    description: 'Modern stainless steel provides a contemporary look and excellent corrosion resistance for coastal applications. Its clean lines and resistance to salt air make it perfect for modern beach homes.',
    benefits: ['Corrosion resistance', 'Contemporary look', 'Clean lines', 'Salt air resistance']
  }
]

const beachCommunities = [
  {
    name: 'The Strand',
    description: 'An exclusive beachfront community with stunning ocean views and luxury amenities. Our cabinetry designs complement the luxury beachfront lifestyle.',
    features: ['Beachfront community', 'Ocean views', 'Luxury amenities', 'Exclusive access']
  },
  {
    name: 'Hill Section',
    description: 'A premier hillside community with custom homes and panoramic views. Our designs enhance the luxury hillside living experience.',
    features: ['Hillside community', 'Custom homes', 'Panoramic views', 'Luxury lifestyle']
  },
  {
    name: 'Sand Section',
    description: 'A traditional beach community with classic homes and coastal charm. Our cabinetry designs complement the traditional beach lifestyle and coastal setting.',
    features: ['Traditional community', 'Classic homes', 'Coastal charm', 'Beach lifestyle']
  }
]

export default function ManhattanBeachPage() {
  return (
    
      <!-- SEO-Optimized Heading Structure -->
      <div className="heading-structure" style="display: none;">
        <h1>Custom Kitchens in manhattan-beach | Luxury Cabinetry</h1>
        <h2>Luxury Kitchen Design in manhattan-beach</h2><h2>Premium Materials & Craftsmanship</h2><h2>Local Kitchen Design Expertise</h2><h2>Custom Kitchen Services</h2><h2>Why Choose Us for manhattan-beach Kitchens</h2><h2>Frequently Asked Questions</h2>
        <h3>Custom Kitchen Design</h3><h3>Bespoke Cabinetry Services</h3><h3>Kitchen Remodeling</h3><h3>Cabinet Hardware Selection</h3><h3>Kitchen Lighting Design</h3><h3>Appliance Integration</h3>
      </div>
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">Custom Kitchens in manhattan-beach | Luxury Cabinetry</h1>
            <p className="text-xl md:text-2xl text-french-gray leading-relaxed mb-8">
              Serving Manhattan Beach\'s most prestigious beachfront estates with custom kitchens and luxury cabinetry that celebrates the natural beauty of California\'s premier beach community.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Beachfront Estates</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Ocean Views</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Beach Luxury</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Marine Grade</span>
            </div>
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in manhattan-beach</h2>
              <div className="prose-luxury text-charcoal/80 mb-8">
                <p>
                  Manhattan Beach represents the pinnacle of beachfront luxury living in California. Our custom cabinetry solutions are designed to complement the area\'s stunning ocean views while providing the luxury and functionality expected in beachfront estates.
                </p>
                <p>
                  We understand the unique challenges of beachfront living, from the corrosive effects of salt air to the emphasis on indoor-outdoor living. Our designs incorporate marine-grade materials and finishes that withstand coastal conditions while providing the luxury experience our clients expect.
                </p>
                <p>
                  Our local knowledge extends to Manhattan Beach\'s diverse architectural styles, from contemporary beach homes to traditional beach houses. We work closely with each client to ensure our cabinetry complements their home\'s unique character while meeting their specific lifestyle requirements.
                </p>
              </div>
              <Link href="/contact" className="btn-primary">
                Schedule Consultation
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">12+ Years</h4>
                  <p className="text-sm text-charcoal/70">Serving Manhattan Beach</p>
                </div>
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">45+ Projects</h4>
                  <p className="text-sm text-charcoal/70">Completed in Manhattan Beach</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Marine Grade</h4>
                  <p className="text-sm text-charcoal/70">Coastal-appropriate materials</p>
                </div>
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Ocean Views</h4>
                  <p className="text-sm text-charcoal/70">View-maximizing designs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Projects */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in manhattan-beach</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our recent work in Manhattan Beach, showcasing how we\'ve transformed kitchens and living spaces throughout the area\'s most prestigious beachfront communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localProjects.map((project, index) => (
              <article key={project.title} className="bg-white rounded-lg shadow-sm border border-french-gray/20 overflow-hidden group hover:shadow-lg transition-all duration-300">
                <Link href={`/portfolio/${project.title.toLowerCase().replace(/\s+/g, '-')}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-french-gray/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-ivory">
                        <h3 className="text-xl font-semibold mb-2 font-display px-4">{project.title}</h3>
                        <p className="text-sm opacity-90">{project.location}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-charcoal/60">{project.year}</span>
                      <span className="text-sm text-deep-green font-medium">View Details →</span>
                    </div>
                    
                    <h3 className="font-display text-lg font-semibold text-charcoal mb-3 group-hover:text-deep-green transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <p className="text-charcoal/80 leading-relaxed text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Local Architecture */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in manhattan-beach</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Manhattan Beach\'s diverse architectural styles require specialized cabinetry solutions. We understand how to work with each style to create harmonious, functional spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {localArchitecture.map((style, index) => (
              <div key={style.style} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <h3 className="text-xl font-semibold text-charcoal mb-4 font-display">
                  {style.style}
                </h3>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  {style.description}
                </p>
                <ul className="space-y-2">
                  {style.characteristics.map((characteristic, i) => (
                    <li key={i} className="flex items-center text-sm text-charcoal/70">
                      <div className="w-1.5 h-1.5 bg-deep-green rounded-full mr-2 flex-shrink-0" />
                      {characteristic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beach Considerations */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Luxury Kitchen Design in manhattan-beach</h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Manhattan Beach\'s coastal environment requires special design considerations. We create cabinetry solutions that work beautifully in the marine environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beachConsiderations.map((aspect, index) => (
              <div key={aspect.aspect} className="text-center">
                <div className="text-4xl mb-4">
                  {aspect.aspect === 'Salt Air Protection' ? '⚓' : aspect.aspect === 'Ocean Views' ? '🌊' : '🏖️'}
                </div>
                <h3 className="text-lg font-semibold text-ivory mb-3 font-display">
                  {aspect.aspect}
                </h3>
                <p className="text-french-gray text-sm leading-relaxed mb-4">
                  {aspect.description}
                </p>
                <ul className="space-y-1">
                  {aspect.features.map((feature, i) => (
                    <li key={i} className="text-french-gray text-xs">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beach Communities */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in manhattan-beach</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We serve Manhattan Beach\'s most exclusive beach communities, each with its own unique character and luxury amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beachCommunities.map((community, index) => (
              <div key={community.name} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <h3 className="text-xl font-semibold text-charcoal mb-4 font-display">
                  {community.name}
                </h3>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  {community.description}
                </p>
                <ul className="space-y-2">
                  {community.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-charcoal/70">
                      <div className="w-1.5 h-1.5 bg-deep-green rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Materials */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in manhattan-beach</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We work with materials that are specifically chosen for Manhattan Beach\'s coastal environment while providing exceptional beauty and durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {localMaterials.map((material, index) => (
              <div key={material.name} className="text-center">
                <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center text-ivory text-2xl font-bold mx-auto mb-4">
                  {material.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                  {material.name}
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
                  {material.description}
                </p>
                <ul className="space-y-1">
                  {material.benefits.map((benefit, i) => (
                    <li key={i} className="text-charcoal/60 text-xs">
                      • {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Insights */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Luxury Kitchen Design in manhattan-beach</h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Understanding the unique characteristics of Manhattan Beach helps us create cabinetry solutions that truly serve our clients\' needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {localInsights.map((insight, index) => (
              <div key={insight.title} className="text-center">
                <div className="text-4xl mb-4">{insight.icon}</div>
                <h3 className="text-lg font-semibold text-ivory mb-3 font-display">
                  {insight.title}
                </h3>
                <p className="text-french-gray text-sm leading-relaxed">
                  {insight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in manhattan-beach</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We serve all of Manhattan Beach\'s prestigious neighborhoods, from the exclusive beachfront communities to the stunning hill section estates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {neighborhoods.map((neighborhood) => (
              <div key={neighborhood} className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20 text-center hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-charcoal mb-2">{neighborhood}</h3>
                <p className="text-sm text-charcoal/70">Custom cabinetry services</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in manhattan-beach</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Common questions about our services in Manhattan Beach and the surrounding beach communities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                How do you handle salt air and humidity in Manhattan Beach?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                We use marine-grade materials and finishes specifically designed for coastal environments. This includes stainless steel hardware, moisture-resistant finishes, and materials that won\'t corrode or warp in salt air conditions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                Can you design for indoor-outdoor living?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Absolutely. Many Manhattan Beach homes feature seamless indoor-outdoor living. We design cabinetry that works with these spaces, including weather-resistant outdoor kitchen components and storage solutions that support entertaining.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                Do you work with beachfront properties?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Yes, we have extensive experience working with beachfront properties throughout Manhattan Beach. We understand the unique requirements and luxury standards expected in these exclusive beachfront communities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                What is the typical timeline for a Manhattan Beach project?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Most Manhattan Beach projects take 6-8 months from consultation to completion. This includes 2-3 months for design and planning, 3-4 months for fabrication, and 2-3 weeks for installation. We can work around vacation schedules and seasonal considerations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Luxury Kitchen Design in manhattan-beach</h2>
          <p className="text-xl text-french-gray mb-12 max-w-3xl mx-auto">
            Let\'s discuss how we can create the perfect kitchen or cabinetry solution for your Manhattan Beach home, combining beachfront luxury with ocean views.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-ivory text-deep-green px-8 py-4 rounded font-medium hover:bg-ivory/90 transition-colors">
              Schedule Manhattan Beach Consultation
            </Link>
            <Link href="/portfolio" className="border border-ivory text-ivory px-8 py-4 rounded font-medium hover:bg-ivory hover:text-deep-green transition-colors">
              View Manhattan Beach Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
