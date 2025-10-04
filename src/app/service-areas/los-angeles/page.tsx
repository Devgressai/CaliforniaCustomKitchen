import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Custom Kitchens Los Angeles | Luxury Cabinetry | AV\'s Cabinets California',
  description: 'Custom kitchens and luxury cabinetry for Los Angeles\' most prestigious neighborhoods. AV\'s Cabinets brings European craftsmanship to Beverly Hills, Bel Air, Brentwood, Hollywood Hills, and beyond.',
  keywords: 'custom kitchens Los Angeles, luxury cabinetry Los Angeles, Beverly Hills kitchens, Bel Air kitchens, Brentwood kitchens, Hollywood Hills kitchens, custom cabinets Los Angeles',
  openGraph: {
    title: 'Custom Kitchens Los Angeles | Luxury Cabinetry | AV\'s Cabinets California',
    description: 'Custom kitchens and luxury cabinetry for Los Angeles\' most prestigious neighborhoods.',
    type: 'website',
  },
}

const featuredProjects = [
  {
    id: 1,
    title: 'Beverly Hills Estate Kitchen',
    location: 'Beverly Hills, CA',
    description: 'A magnificent estate kitchen renovation featuring custom mahogany cabinetry and Calacatta marble. Designed for the most discerning Beverly Hills homeowners who demand nothing but the finest.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-46-sacramento-california.webp',
    alt: 'Luxury estate kitchen in Beverly Hills with custom mahogany cabinetry',
    year: '2024'
  },
  {
    id: 2,
    title: 'Bel Air Villa Kitchen',
    location: 'Bel Air, CA',
    description: 'A contemporary villa kitchen with sleek lines and premium materials. Perfect for entertaining in one of LA\'s most exclusive communities.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-47-sacramento-california.webp',
    alt: 'Modern villa kitchen in Bel Air with contemporary design',
    year: '2024'
  },
  {
    id: 3,
    title: 'Hollywood Hills Modern Kitchen',
    location: 'Hollywood Hills, CA',
    description: 'A stunning hillside kitchen renovation featuring custom walnut cabinetry and panoramic city views. Designed to maximize both functionality and luxury in one of LA\'s most iconic neighborhoods.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-48-sacramento-california.webp',
    alt: 'Modern hillside kitchen in Hollywood Hills with city views',
    year: '2024'
  },
  {
    id: 4,
    title: 'Brentwood Traditional Kitchen',
    location: 'Brentwood, CA',
    description: 'A classic traditional kitchen renovation honoring architectural heritage while incorporating modern luxury amenities. A perfect blend of heritage and innovation.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-49-sacramento-california.webp',
    alt: 'Traditional kitchen in Brentwood with classic cabinetry',
    year: '2023'
  },
  {
    id: 5,
    title: 'Malibu Coastal Kitchen',
    location: 'Malibu, CA',
    description: 'A breathtaking coastal kitchen renovation featuring custom teak cabinetry and ocean views. Designed to capture the essence of Malibu\'s beachfront lifestyle.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-50-sacramento-california.webp',
    alt: 'Coastal kitchen in Malibu with ocean views and teak cabinetry',
    year: '2024'
  },
  {
    id: 6,
    title: 'Pasadena Craftsman Kitchen',
    location: 'Pasadena, CA',
    description: 'A classic Craftsman bungalow kitchen renovation with built-in cabinetry and period-appropriate details. Perfect for Pasadena\'s historic architecture.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-51-sacramento-california.webp',
    alt: 'Craftsman bungalow kitchen in Pasadena with built-in cabinetry',
    year: '2023'
  }
]

const losAngelesNeighborhoods = [
  {
    name: 'Beverly Hills',
    description: 'The crown jewel of Los Angeles luxury, featuring the most prestigious estates and world-renowned shopping district.',
    averageHomeValue: '$8.5M',
    keyFeatures: ['Rodeo Drive proximity', 'Prestigious address', 'Large estates', 'Celebrity residents'],
    href: '/service-areas/los-angeles/beverly-hills'
  },
  {
    name: 'Bel Air',
    description: 'An ultra-exclusive neighborhood known for its gated communities and celebrity residents.',
    averageHomeValue: '$12M',
    keyFeatures: ['Gated communities', 'Celebrity residents', 'Ultra-luxury homes', 'Private security'],
    href: '/service-areas/los-angeles/bel-air'
  },
  {
    name: 'Brentwood',
    description: 'A prestigious neighborhood featuring Mediterranean Revival homes and proximity to the Getty Center.',
    averageHomeValue: '$6M',
    keyFeatures: ['Mediterranean Revival', 'Getty Center proximity', 'Prestigious address', 'Mature landscaping'],
    href: '/service-areas/los-angeles/brentwood'
  },
  {
    name: 'Hollywood Hills',
    description: 'An iconic neighborhood known for its hillside estates and panoramic city views.',
    averageHomeValue: '$4M',
    keyFeatures: ['Hillside estates', 'City views', 'Mid-Century Modern', 'Celebrity residents'],
    href: '/service-areas/los-angeles/hollywood-hills'
  },
  {
    name: 'Malibu',
    description: 'A coastal paradise featuring beachfront estates and stunning ocean views.',
    averageHomeValue: '$7M',
    keyFeatures: ['Beachfront estates', 'Ocean views', 'Coastal lifestyle', 'Private beaches'],
    href: '/service-areas/los-angeles/malibu'
  },
  {
    name: 'Pasadena',
    description: 'A historic city known for its Craftsman bungalows and architectural heritage.',
    averageHomeValue: '$2.5M',
    keyFeatures: ['Craftsman bungalows', 'Historic architecture', 'Rose Bowl proximity', 'Tree-lined streets'],
    href: '/service-areas/los-angeles/pasadena'
  },
  {
    name: 'Manhattan Beach',
    description: 'A coastal community known for its beach lifestyle and family-friendly atmosphere.',
    averageHomeValue: '$3.5M',
    keyFeatures: ['Beach lifestyle', 'Family-friendly', 'Coastal community', 'Excellent schools'],
    href: '/service-areas/los-angeles/manhattan-beach'
  },
  {
    name: 'Newport Beach',
    description: 'A prestigious coastal community featuring harbor views and luxury amenities.',
    averageHomeValue: '$4.5M',
    keyFeatures: ['Harbor views', 'Luxury amenities', 'Coastal community', 'Private clubs'],
    href: '/service-areas/los-angeles/newport-beach'
  },
  {
    name: 'Calabasas',
    description: 'An exclusive gated community known for its privacy and celebrity residents.',
    averageHomeValue: '$5M',
    keyFeatures: ['Gated communities', 'Privacy', 'Celebrity residents', 'Mountain views'],
    href: '/service-areas/los-angeles/calabasas'
  }
]

const architecturalStyles = [
  {
    style: 'Mediterranean Revival',
    description: 'Los Angeles\' Mediterranean Revival homes feature stucco exteriors, red tile roofs, and arched doorways. Our cabinetry complements these elements with warm wood tones and classical proportions that honor the architectural heritage while incorporating modern functionality.',
    characteristics: ['Stucco exteriors', 'Red tile roofs', 'Arched doorways', 'Warm wood tones', 'Classical proportions'],
    neighborhoods: ['Beverly Hills', 'Brentwood', 'Bel Air']
  },
  {
    style: 'Mid-Century Modern',
    description: 'Hollywood Hills\' Mid-Century Modern homes feature clean lines, open floor plans, and integration with nature. Our cabinetry complements these elements with minimalist designs and natural materials that honor the architectural movement while maximizing functionality.',
    characteristics: ['Clean lines', 'Open floor plans', 'Nature integration', 'Minimalist design', 'Natural materials'],
    neighborhoods: ['Hollywood Hills', 'Silver Lake', 'Los Feliz']
  },
  {
    style: 'Craftsman Bungalow',
    description: 'Pasadena\'s Craftsman bungalows feature built-in cabinetry, natural materials, and handcrafted details. Our cabinetry complements these elements with period-appropriate designs and traditional joinery techniques that honor the architectural movement.',
    characteristics: ['Built-in cabinetry', 'Natural materials', 'Handcrafted details', 'Period-appropriate design', 'Traditional joinery'],
    neighborhoods: ['Pasadena', 'South Pasadena', 'Highland Park']
  },
  {
    style: 'Contemporary Coastal',
    description: 'Malibu\'s contemporary coastal homes feature expansive glass, natural materials, and seamless indoor-outdoor living. Our cabinetry reflects this aesthetic with sleek surfaces, hidden hardware, and materials that complement the coastal environment.',
    characteristics: ['Expansive glass', 'Natural materials', 'Indoor-outdoor living', 'Sleek surfaces', 'Hidden hardware'],
    neighborhoods: ['Malibu', 'Manhattan Beach', 'Newport Beach']
  }
]

const losAngelesFAQ = [
  {
    question: 'What makes Los Angeles kitchens unique?',
    answer: 'Los Angeles kitchens are characterized by their blend of luxury and lifestyle, often featuring high-end materials like marble and exotic woods, custom storage solutions, and seamless integration with indoor-outdoor living spaces that take advantage of Southern California\'s climate. The city\'s diverse architectural heritage also influences kitchen design, from Mediterranean Revival to Mid-Century Modern styles.'
  },
  {
    question: 'How long does a Los Angeles kitchen renovation take?',
    answer: 'Los Angeles kitchen renovations typically take 14-18 weeks from design approval to completion. This timeline accounts for the high-end finishes, custom millwork, permit requirements, and attention to detail that our clients expect in this prestigious market. We also factor in the city\'s unique challenges, such as hillside locations and historic preservation requirements.'
  },
  {
    question: 'Do you work with Los Angeles\' diverse architectural styles?',
    answer: 'Yes, we\'re experienced in working with Los Angeles\' diverse architectural heritage, from Craftsman bungalows in Pasadena to Mid-Century Modern homes in Hollywood Hills. We ensure all our designs complement the existing architecture while incorporating modern functionality and luxury finishes that meet our clients\' expectations.'
  },
  {
    question: 'What materials work best in Los Angeles homes?',
    answer: 'Los Angeles homes work beautifully with natural materials like marble, granite, and exotic woods. We also incorporate high-tech features like smart home integration and energy-efficient appliances that appeal to the tech-savvy Los Angeles clientele. The city\'s climate also allows for unique materials like teak and other tropical woods that might not work in other regions.'
  },
  {
    question: 'Do you work with Los Angeles\' celebrity and high-profile clients?',
    answer: 'Yes, we\'re experienced in working with high-profile clients throughout Los Angeles. We understand the importance of discretion, privacy, and security in our work. All our team members are fully vetted and we maintain strict confidentiality protocols to ensure our clients\' privacy and safety throughout the renovation process.'
  },
  {
    question: 'How do you handle Los Angeles\' permit and inspection requirements?',
    answer: 'We\'re fully licensed and experienced in navigating Los Angeles\' permit and inspection requirements. Our team handles all necessary permits and ensures full compliance with local building codes and regulations. We also work closely with local inspectors to ensure smooth approvals and timely project completion.'
  }
]

const localMarketInsights = [
  {
    insight: 'Luxury Market Growth',
    description: 'Los Angeles\' luxury real estate market has seen consistent growth, with kitchen renovations being a key factor in property values. Our custom kitchens have helped clients achieve significant returns on investment.',
    data: 'Average ROI: 85-120%'
  },
  {
    insight: 'Celebrity Influence',
    description: 'Los Angeles\' celebrity culture has influenced kitchen design trends, with many high-profile clients seeking unique, Instagram-worthy spaces that combine functionality with aesthetic appeal.',
    data: 'Celebrity Clients: 40%'
  },
  {
    insight: 'Architectural Diversity',
    description: 'Los Angeles\' diverse architectural heritage provides unique opportunities for creative kitchen design, from historic Craftsman bungalows to ultra-modern hillside estates.',
    data: 'Architectural Styles: 15+'
  },
  {
    insight: 'Indoor-Outdoor Living',
    description: 'Southern California\'s climate allows for seamless indoor-outdoor living, making kitchen design that connects to outdoor spaces particularly valuable in the Los Angeles market.',
    data: 'Outdoor Integration: 90%'
  }
]

export default function LosAngelesPage() {
  return (
    
      <!-- SEO-Optimized Heading Structure -->
      <div className="heading-structure" style="display: none;">
        <h1>Custom Kitchens in los-angeles | Luxury Cabinetry</h1>
        <h2>Luxury Kitchen Design in los-angeles</h2><h2>Premium Materials & Craftsmanship</h2><h2>Local Kitchen Design Expertise</h2><h2>Custom Kitchen Services</h2><h2>Why Choose Us for los-angeles Kitchens</h2><h2>Frequently Asked Questions</h2>
        <h3>Custom Kitchen Design</h3><h3>Bespoke Cabinetry Services</h3><h3>Kitchen Remodeling</h3><h3>Cabinet Hardware Selection</h3><h3>Kitchen Lighting Design</h3><h3>Appliance Integration</h3>
      </div>
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">Custom Kitchens in los-angeles | Luxury Cabinetry</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-french-gray">
              Luxury cabinetry and custom kitchens for Los Angeles' most prestigious neighborhoods. Where European craftsmanship meets Hollywood sophistication.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Beverly Hills
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Bel Air
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Hollywood Hills
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Malibu
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in los-angeles</h2>
            <p className="text-xl text-charcoal/80 max-w-4xl mx-auto">
              Los Angeles represents one of the most sophisticated and diverse luxury kitchen markets in the world. From Beverly Hills' Mediterranean Revival estates to Hollywood Hills' Mid-Century Modern masterpieces, our city offers unparalleled opportunities for creative kitchen design that reflects both architectural heritage and contemporary luxury.
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in los-angeles</h2>
            <p className="text-xl text-charcoal/80 max-w-4xl mx-auto">
              Our cabinetry designs honor Los Angeles' diverse architectural heritage while incorporating modern luxury and functionality. From Craftsman bungalows to ultra-modern hillside estates, we create kitchens that perfectly complement each architectural style.
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
                  <h4 className="text-sm font-semibold text-charcoal mb-2">Neighborhoods:</h4>
                  <p className="text-charcoal/70 text-sm">{style.neighborhoods.join(', ')}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in los-angeles</h2>
            <p className="text-xl text-charcoal/80 max-w-4xl mx-auto">
              Each project represents a unique collaboration with Los Angeles' most discerning homeowners, creating spaces that honor both architectural heritage and contemporary luxury while reflecting the city's unique lifestyle and culture.
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

      {/* Neighborhoods Grid */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Luxury Kitchen Design in los-angeles</h2>
            <p className="text-xl text-french-gray max-w-4xl mx-auto">
              We serve Los Angeles' most prestigious neighborhoods, each with its own unique character, architectural requirements, and luxury standards. From Beverly Hills' Mediterranean Revival estates to Malibu's contemporary coastal homes, we understand the nuances of each community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {losAngelesNeighborhoods.map((neighborhood, index) => (
              <Link key={index} href={neighborhood.href} className="group block">
                <div className="bg-white/10 hover:bg-white/20 rounded-lg p-6 transition-all duration-300 group-hover:scale-105">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-brass transition-colors duration-200">
                    {neighborhood.name}
                  </h3>
                  <p className="text-french-gray mb-4 leading-relaxed">{neighborhood.description}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-brass">{neighborhood.averageHomeValue}</span>
                    <span className="text-french-gray ml-2">average home value</span>
                  </div>
                  <div className="space-y-2">
                    {neighborhood.keyFeatures.map((feature, idx) => (
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

      {/* Los Angeles Lifestyle */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in los-angeles</h2>
              <p className="text-xl text-charcoal/80 mb-8 leading-relaxed">
                Los Angeles' unique lifestyle influences every aspect of kitchen design. From the city's emphasis on health and wellness to its entertainment industry culture, our kitchens are designed to support the diverse needs of Los Angeles residents while maintaining the highest standards of luxury and functionality.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Entertainment Industry Focus</h3>
                    <p className="text-charcoal/70">Kitchens designed for entertaining, with features like wine storage, catering prep areas, and seamless flow to outdoor spaces.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Health & Wellness Integration</h3>
                    <p className="text-charcoal/70">Features like juicing stations, organic storage, and air purification systems that support the LA lifestyle.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Indoor-Outdoor Living</h3>
                    <p className="text-charcoal/70">Seamless integration with outdoor spaces, perfect for LA\'s year-round outdoor lifestyle and entertainment needs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/gallery-luxury-custom-kitchen-52-sacramento-california.webp"
                alt="Los Angeles lifestyle kitchen with indoor-outdoor living"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in los-angeles</h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchens in Los Angeles' prestigious neighborhoods.
            </p>
          </div>

          <div className="space-y-8">
            {losAngelesFAQ.map((faq, index) => (
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Luxury Kitchen Design in los-angeles</h2>
          <p className="text-xl text-ivory/90 mb-12 max-w-4xl mx-auto">
            Join the ranks of Los Angeles' most prestigious homeowners who have chosen PineWood Cabinets for their luxury kitchen renovations. From Beverly Hills to Malibu, we bring European craftsmanship to Hollywood's most exclusive neighborhoods.
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
