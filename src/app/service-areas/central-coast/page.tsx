import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Custom Kitchens Central Coast | Luxury Cabinetry | AV\'s Cabinets California',
  description: 'Custom kitchens and luxury cabinetry for California\'s Central Coast. AV\'s Cabinets brings European craftsmanship to Carmel, Big Sur, Santa Barbara, and the most prestigious coastal communities.',
  keywords: 'custom kitchens Central Coast, luxury cabinetry Central Coast, Carmel kitchens, Big Sur kitchens, Santa Barbara kitchens, coastal kitchen design, custom cabinets Central Coast',
  openGraph: {
    title: 'Custom Kitchens Central Coast | Luxury Cabinetry | AV\'s Cabinets California',
    description: 'Custom kitchens and luxury cabinetry for California\'s Central Coast.',
    type: 'website',
  },
}

const featuredProjects = [
  {
    id: 1,
    title: 'Carmel-by-the-Sea Estate Kitchen',
    location: 'Carmel-by-the-Sea, CA',
    description: 'A stunning coastal estate kitchen featuring custom teak cabinetry and ocean views. Designed to capture the essence of Carmel\'s artistic heritage while maximizing the breathtaking coastal scenery.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-53-sacramento-california.webp',
    alt: 'Coastal estate kitchen in Carmel with teak cabinetry and ocean views',
    year: '2024'
  },
  {
    id: 2,
    title: 'Big Sur Cliffside Kitchen',
    location: 'Big Sur, CA',
    description: 'A dramatic cliffside kitchen renovation featuring custom redwood cabinetry and panoramic ocean views. Designed to complement the rugged beauty of Big Sur while providing luxury functionality.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-54-sacramento-california.webp',
    alt: 'Cliffside kitchen in Big Sur with redwood cabinetry and ocean views',
    year: '2024'
  },
  {
    id: 3,
    title: 'Santa Barbara Mediterranean Kitchen',
    location: 'Santa Barbara, CA',
    description: 'A classic Mediterranean kitchen renovation featuring custom walnut cabinetry and Spanish tile accents. Perfect for Santa Barbara\'s architectural heritage and coastal lifestyle.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-55-sacramento-california.webp',
    alt: 'Mediterranean kitchen in Santa Barbara with walnut cabinetry',
    year: '2023'
  },
  {
    id: 4,
    title: 'Pebble Beach Golf Estate Kitchen',
    location: 'Pebble Beach, CA',
    description: 'A sophisticated golf estate kitchen featuring custom mahogany cabinetry and integrated wine storage. Designed for entertaining after a day on the legendary golf courses.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-56-sacramento-california.webp',
    alt: 'Golf estate kitchen in Pebble Beach with mahogany cabinetry',
    year: '2024'
  },
  {
    id: 5,
    title: 'Monterey Bay Contemporary Kitchen',
    location: 'Monterey, CA',
    description: 'A contemporary kitchen renovation featuring custom maple cabinetry and bay views. Perfect for the modern coastal lifestyle of Monterey Bay.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-57-sacramento-california.webp',
    alt: 'Contemporary kitchen in Monterey with maple cabinetry and bay views',
    year: '2023'
  },
  {
    id: 6,
    title: 'Santa Ynez Valley Ranch Kitchen',
    location: 'Santa Ynez Valley, CA',
    description: 'A rustic ranch kitchen renovation featuring custom reclaimed wood cabinetry and farmhouse details. Perfect for the wine country lifestyle of Santa Ynez Valley.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-58-sacramento-california.webp',
    alt: 'Ranch kitchen in Santa Ynez Valley with reclaimed wood cabinetry',
    year: '2023'
  }
]

const centralCoastCommunities = [
  {
    name: 'Carmel-by-the-Sea',
    description: 'An artistic coastal village known for its galleries, cottages, and stunning ocean views.',
    averageHomeValue: '$2.8M',
    keyFeatures: ['Artistic heritage', 'Ocean views', 'Historic cottages', 'Gallery district'],
    href: '/service-areas/central-coast/carmel'
  },
  {
    name: 'Big Sur',
    description: 'A dramatic coastal region featuring cliffside homes and panoramic ocean views.',
    averageHomeValue: '$4.2M',
    keyFeatures: ['Cliffside homes', 'Ocean views', 'Rugged beauty', 'Privacy'],
    href: '/service-areas/central-coast/big-sur'
  },
  {
    name: 'Santa Barbara',
    description: 'The American Riviera featuring Mediterranean architecture and year-round perfect weather.',
    averageHomeValue: '$3.5M',
    keyFeatures: ['Mediterranean architecture', 'Perfect weather', 'Wine country proximity', 'Historic downtown'],
    href: '/service-areas/central-coast/santa-barbara'
  },
  {
    name: 'Pebble Beach',
    description: 'An exclusive gated community known for its world-class golf courses and luxury estates.',
    averageHomeValue: '$8.5M',
    keyFeatures: ['Golf courses', 'Gated community', 'Luxury estates', 'Ocean views'],
    href: '/service-areas/central-coast/pebble-beach'
  },
  {
    name: 'Monterey',
    description: 'A historic coastal city featuring Victorian architecture and Monterey Bay views.',
    averageHomeValue: '$1.8M',
    keyFeatures: ['Victorian architecture', 'Bay views', 'Historic downtown', 'Aquarium'],
    href: '/service-areas/central-coast/monterey'
  },
  {
    name: 'Santa Ynez Valley',
    description: 'A wine country region featuring ranch-style homes and vineyard views.',
    averageHomeValue: '$2.2M',
    keyFeatures: ['Wine country', 'Ranch homes', 'Vineyard views', 'Rural lifestyle'],
    href: '/service-areas/central-coast/santa-ynez-valley'
  }
]

const architecturalStyles = [
  {
    style: 'Coastal Contemporary',
    description: 'Central Coast\'s coastal contemporary homes feature clean lines, natural materials, and expansive ocean views. Our cabinetry complements these elements with minimalist designs and materials that withstand the coastal environment while maximizing the stunning scenery.',
    characteristics: ['Clean lines', 'Natural materials', 'Ocean views', 'Minimalist design', 'Coastal durability'],
    communities: ['Carmel-by-the-Sea', 'Big Sur', 'Monterey']
  },
  {
    style: 'Mediterranean Revival',
    description: 'Santa Barbara\'s Mediterranean Revival homes feature stucco exteriors, tile roofs, and arched doorways. Our cabinetry complements these elements with warm wood tones and classical proportions that honor the architectural heritage.',
    characteristics: ['Stucco exteriors', 'Tile roofs', 'Arched doorways', 'Warm wood tones', 'Classical proportions'],
    communities: ['Santa Barbara', 'Montecito', 'Hope Ranch']
  },
  {
    style: 'Rustic Ranch',
    description: 'Santa Ynez Valley\'s ranch homes feature natural materials, open floor plans, and connection to the land. Our cabinetry honors this tradition with reclaimed materials and handcrafted details that complement the rural lifestyle.',
    characteristics: ['Natural materials', 'Open floor plans', 'Connection to land', 'Reclaimed materials', 'Handcrafted details'],
    communities: ['Santa Ynez Valley', 'Los Olivos', 'Solvang']
  },
  {
    style: 'Victorian Coastal',
    description: 'Monterey\'s Victorian homes feature ornate details, bay views, and historic charm. Our cabinetry complements these elements with period-appropriate designs and materials that honor the architectural heritage.',
    characteristics: ['Ornate details', 'Bay views', 'Historic charm', 'Period-appropriate design', 'Victorian styling'],
    communities: ['Monterey', 'Pacific Grove', 'Cannery Row']
  }
]

const centralCoastFAQ = [
  {
    question: 'What makes Central Coast kitchens unique?',
    answer: 'Central Coast kitchens are characterized by their connection to the ocean and natural environment, often featuring materials that withstand the coastal climate, large windows to capture ocean views, and designs that complement the region\'s diverse architectural heritage from Victorian to Mediterranean styles.'
  },
  {
    question: 'How do you handle the coastal climate in kitchen design?',
    answer: 'We use materials specifically chosen for their durability in coastal environments, including marine-grade hardware, moisture-resistant finishes, and woods that can handle the salt air and humidity. We also design with proper ventilation and moisture control in mind.'
  },
  {
    question: 'Do you work with Central Coast\'s historic preservation requirements?',
    answer: 'Yes, we\'re experienced in working with Central Coast\'s various historic preservation guidelines, particularly in Carmel-by-the-Sea and Monterey. We ensure all our designs comply with local regulations while respecting the historic character of the neighborhoods.'
  },
  {
    question: 'What materials work best in Central Coast homes?',
    answer: 'Central Coast homes work beautifully with natural materials like teak, redwood, and other coastal-friendly woods. We also incorporate stone and tile elements that complement the Mediterranean and Victorian architectural styles common in the region.'
  },
  {
    question: 'How do you maximize ocean views in kitchen design?',
    answer: 'We design kitchens with large windows, open layouts, and strategic placement of cabinetry to ensure unobstructed ocean views. We also use materials and colors that complement the natural coastal environment and enhance the connection to the outdoors.'
  },
  {
    question: 'Do you work with wine country properties in Santa Ynez Valley?',
    answer: 'Yes, we\'re experienced in working with wine country properties, incorporating features like wine storage, tasting areas, and designs that complement the rural ranch lifestyle while maintaining luxury standards.'
  }
]

const localMarketInsights = [
  {
    insight: 'Coastal Premium',
    description: 'Central Coast properties command premium prices due to their ocean proximity and limited availability, making kitchen renovations a key investment in property value.',
    data: 'Average Premium: 40-60%'
  },
  {
    insight: 'Tourism Impact',
    description: 'The Central Coast\'s tourism industry influences kitchen design, with many properties serving as vacation rentals requiring durable, low-maintenance finishes.',
    data: 'Tourism Properties: 35%'
  },
  {
    insight: 'Historic Preservation',
    description: 'Many Central Coast communities have strict historic preservation guidelines, requiring specialized knowledge of period-appropriate design and materials.',
    data: 'Historic Properties: 45%'
  },
  {
    insight: 'Wine Country Integration',
    description: 'The region\'s wine country culture influences kitchen design, with many clients requesting wine storage, tasting areas, and entertainment features.',
    data: 'Wine Features: 70%'
  }
]

export default function CentralCoastPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Custom Kitchens Central Coast
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-french-gray">
              Luxury cabinetry and custom kitchens for California's Central Coast. Where European craftsmanship meets the Pacific Ocean's timeless beauty.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Carmel-by-the-Sea
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Big Sur
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Santa Barbara
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Pebble Beach
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Central Coast Luxury Kitchen Market
            </h2>
            <p className="text-xl text-charcoal/80 max-w-4xl mx-auto">
              California's Central Coast represents one of the most diverse and sophisticated luxury kitchen markets in the state. From Carmel-by-the-Sea's artistic cottages to Big Sur's dramatic cliffside estates, our region offers unparalleled opportunities for creative kitchen design that celebrates both coastal beauty and architectural heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {localMarketInsights.map((insight, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-deep-green mb-2">{insight.data}</div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">{insight.insight}</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Styles */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Central Coast Architectural Heritage
            </h2>
            <p className="text-xl text-charcoal/80 max-w-4xl mx-auto">
              Our cabinetry designs honor the Central Coast's diverse architectural heritage while incorporating modern luxury and functionality. From Victorian coastal homes to Mediterranean estates, we create kitchens that perfectly complement each architectural style while maximizing the stunning coastal views.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {architecturalStyles.map((style, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-french-gray/20">
                <h3 className="text-2xl font-semibold text-charcoal mb-4">{style.style}</h3>
                <p className="text-charcoal/70 mb-6 leading-relaxed">{style.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-charcoal mb-2">Key Characteristics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {style.characteristics.map((characteristic, idx) => (
                      <span key={idx} className="bg-french-gray/20 text-charcoal px-3 py-1 rounded-full text-sm">
                        {characteristic}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-charcoal mb-2">Communities:</h4>
                  <p className="text-charcoal/70 text-sm">{style.communities.join(', ')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Recent Central Coast Commissions
            </h2>
            <p className="text-xl text-charcoal/80 max-w-4xl mx-auto">
              Each project represents a unique collaboration with Central Coast's most discerning homeowners, creating spaces that honor both architectural heritage and contemporary luxury while celebrating the region's stunning natural beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden bg-french-gray/10 rounded-lg mb-6">
                  <Image
                    src={project.imageSrc}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-charcoal group-hover:text-deep-green transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-charcoal/70">{project.location} • {project.year}</p>
                  <p className="text-charcoal/80 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communities Grid */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Central Coast's Premier Communities
            </h2>
            <p className="text-xl text-french-gray max-w-4xl mx-auto">
              We serve the Central Coast's most prestigious communities, each with its own unique character, architectural requirements, and coastal lifestyle. From artistic Carmel to dramatic Big Sur, we understand the nuances of each community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {centralCoastCommunities.map((community, index) => (
              <Link key={index} href={community.href} className="group block">
                <div className="bg-white/10 hover:bg-white/20 rounded-lg p-6 transition-all duration-300 group-hover:scale-105">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-brass transition-colors duration-200">
                    {community.name}
                  </h3>
                  <p className="text-french-gray mb-4 leading-relaxed">{community.description}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-brass">{community.averageHomeValue}</span>
                    <span className="text-french-gray ml-2">average home value</span>
                  </div>
                  <div className="space-y-2">
                    {community.keyFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-french-gray">
                        <div className="w-2 h-2 bg-brass rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coastal Lifestyle */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                The Central Coast Lifestyle
              </h2>
              <p className="text-xl text-charcoal/80 mb-8 leading-relaxed">
                The Central Coast's unique lifestyle influences every aspect of kitchen design. From the region's artistic heritage to its wine country culture, our kitchens are designed to support the diverse needs of Central Coast residents while celebrating the stunning natural beauty that surrounds them.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Ocean Integration</h3>
                    <p className="text-charcoal/70">Kitchens designed to maximize ocean views and coastal breezes, with materials and finishes that complement the natural environment.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Wine Country Culture</h3>
                    <p className="text-charcoal/70">Features like wine storage, tasting areas, and entertainment spaces that support the region\'s wine country lifestyle.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Artistic Heritage</h3>
                    <p className="text-charcoal/70">Designs that celebrate the region\'s artistic heritage, from Carmel\'s galleries to Big Sur\'s bohemian culture.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/gallery-luxury-custom-kitchen-59-sacramento-california.webp"
                alt="Central Coast lifestyle kitchen with ocean views"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-grain">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Central Coast Kitchen FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchens in Central Coast communities.
            </p>
          </div>

          <div className="space-y-8">
            {centralCoastFAQ.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-french-gray/20">
                <h3 className="text-xl font-semibold text-charcoal mb-4">{faq.question}</h3>
                <p className="text-charcoal/70 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-deep-green text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Central Coast Kitchen?
          </h2>
          <p className="text-xl text-ivory/90 mb-12 max-w-4xl mx-auto">
            Join the ranks of Central Coast's most discerning homeowners who have chosen AV's Cabinets for their luxury kitchen renovations. From Carmel to Big Sur, we bring European craftsmanship to California's most beautiful coastline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-ivory text-deep-green px-8 py-4 rounded font-medium hover:bg-ivory/90 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/portfolio" 
              className="border border-ivory text-ivory px-8 py-4 rounded font-medium hover:bg-ivory hover:text-deep-green transition-colors"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
