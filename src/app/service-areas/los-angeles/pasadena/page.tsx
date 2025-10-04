import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Custom Kitchens Pasadena | Luxury Cabinetry | AV\'s Cabinets California',
  description: 'Custom kitchens and luxury cabinetry for Pasadena\'s most prestigious estates. AV\'s Cabinets brings European craftsmanship to Los Angeles\' most historic neighborhood.',
  keywords: 'custom kitchens Pasadena, luxury cabinetry Pasadena, estate kitchens Los Angeles, high-end kitchen design Pasadena, custom cabinets Pasadena',
  openGraph: {
    title: 'Custom Kitchens Pasadena | Luxury Cabinetry | AV\'s Cabinets California',
    description: 'Custom kitchens and luxury cabinetry for Pasadena\'s most prestigious estates.',
    type: 'website',
  },
}

const localProjects = [
  {
    id: 1,
    title: 'Pasadena Estate Kitchen',
    location: 'Pasadena, CA',
    description: 'A stunning estate kitchen renovation featuring custom cherry cabinetry and granite countertops. Designed to honor Pasadena\'s architectural heritage while providing modern luxury.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-38-sacramento-california.webp',
    alt: 'Luxury estate kitchen in Pasadena with custom cherry cabinetry',
    year: '2024'
  },
  {
    id: 2,
    title: 'Craftsman Bungalow Kitchen',
    location: 'Pasadena, CA',
    description: 'A classic Craftsman bungalow kitchen renovation with built-in cabinetry and period-appropriate details. Perfect for Pasadena\'s historic architecture.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-39-sacramento-california.webp',
    alt: 'Craftsman bungalow kitchen in Pasadena with built-in cabinetry',
    year: '2024'
  },
  {
    id: 3,
    title: 'Modern Pasadena Villa',
    location: 'Pasadena, CA',
    description: 'A contemporary villa kitchen with clean lines and premium materials. Perfect for entertaining in one of Pasadena\'s most exclusive communities.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-40-sacramento-california.webp',
    alt: 'Modern villa kitchen in Pasadena with contemporary design',
    year: '2023'
  }
]

const localArchitecture = [
  {
    style: 'Craftsman Bungalow',
    description: 'Pasadena\'s Craftsman bungalows feature built-in cabinetry, natural materials, and handcrafted details. Our cabinetry complements these elements with period-appropriate designs and traditional joinery techniques that honor the architectural movement.',
    characteristics: ['Built-in cabinetry', 'Natural materials', 'Handcrafted details', 'Period-appropriate design', 'Traditional joinery']
  },
  {
    style: 'Colonial Revival',
    description: 'Classic Colonial Revival homes in Pasadena feature symmetrical facades, formal proportions, and traditional details. Our cabinetry honors this tradition with inset doors, raised panels, and period-appropriate hardware.',
    characteristics: ['Symmetrical facades', 'Formal proportions', 'Traditional details', 'Inset doors', 'Raised panels']
  },
  {
    style: 'Mediterranean Revival',
    description: 'Mediterranean Revival homes in Pasadena feature stucco exteriors, tile roofs, and arched doorways. Our cabinetry complements these elements with warm wood tones and classical proportions that honor the architectural heritage.',
    characteristics: ['Stucco exteriors', 'Tile roofs', 'Arched doorways', 'Warm wood tones', 'Classical proportions']
  }
]

const localCommunities = [
  {
    name: 'San Marino',
    description: 'An exclusive city within Pasadena, featuring the most prestigious estates and historic homes.',
    averageHomeValue: '$3.5M',
    keyFeatures: ['Historic homes', 'Prestigious address', 'Large estates', 'Tree-lined streets']
  },
  {
    name: 'South Pasadena',
    description: 'A charming community known for its Craftsman bungalows and historic architecture.',
    averageHomeValue: '$2.2M',
    keyFeatures: ['Craftsman bungalows', 'Historic architecture', 'Charming community', 'Walkable neighborhoods']
  },
  {
    name: 'Arroyo Seco',
    description: 'A prestigious area featuring custom homes and proximity to the Rose Bowl.',
    averageHomeValue: '$2.8M',
    keyFeatures: ['Custom homes', 'Rose Bowl proximity', 'Prestigious area', 'Mountain views']
  }
]

const localFAQ = [
  {
    question: 'What makes Pasadena kitchens unique?',
    answer: 'Pasadena kitchens are characterized by their respect for historic architecture, often featuring built-in cabinetry, period-appropriate details, and materials that complement the city\'s diverse architectural heritage. They balance historic charm with modern functionality.'
  },
  {
    question: 'How long does a Pasadena kitchen renovation take?',
    answer: 'Pasadena kitchen renovations typically take 12-16 weeks from design approval to completion. This timeline accounts for the historic home considerations, permit requirements, and the high-end finishes that our clients expect in this prestigious neighborhood.'
  },
  {
    question: 'Do you work with Pasadena\'s historic preservation requirements?',
    answer: 'Yes, we\'re experienced in working with Pasadena\'s historic preservation guidelines and architectural review processes. We ensure all our designs and installations comply with local regulations while respecting the historic character of the neighborhood.'
  },
  {
    question: 'What materials work best in Pasadena homes?',
    answer: 'Pasadena homes work beautifully with materials that complement the historic architecture, such as natural woods, traditional hardware, and period-appropriate finishes. We also incorporate modern amenities while maintaining the historic character of the home.'
  }
]

export default function PasadenaPage() {
  return (
    
      <!-- SEO-Optimized Heading Structure -->
      <div className="heading-structure" style="display: none;">
        <h1>Custom Kitchens in pasadena | Luxury Cabinetry</h1>
        <h2>Luxury Kitchen Design in pasadena</h2><h2>Premium Materials & Craftsmanship</h2><h2>Local Kitchen Design Expertise</h2><h2>Custom Kitchen Services</h2><h2>Why Choose Us for pasadena Kitchens</h2><h2>Frequently Asked Questions</h2>
        <h3>Custom Kitchen Design</h3><h3>Bespoke Cabinetry Services</h3><h3>Kitchen Remodeling</h3><h3>Cabinet Hardware Selection</h3><h3>Kitchen Lighting Design</h3><h3>Appliance Integration</h3>
      </div>
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">Custom Kitchens in pasadena | Luxury Cabinetry</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-french-gray">
              Luxury cabinetry and custom kitchens for Pasadena's most prestigious estates. Where European craftsmanship meets Los Angeles' most historic neighborhood.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Historic Architecture
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Craftsman Style
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Colonial Revival
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Local Architecture Section */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in pasadena</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our cabinetry designs honor Pasadena's rich architectural heritage while incorporating modern luxury and functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {localArchitecture.map((style, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl font-semibold text-charcoal mb-4">{style.style}</h3>
                <p className="text-charcoal/70 mb-6 leading-relaxed">{style.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {style.characteristics.map((characteristic, idx) => (
                    <span key={idx} className="bg-french-gray/20 text-charcoal px-3 py-1 rounded-full text-sm">
                      {characteristic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in pasadena</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Each project represents a unique collaboration with Pasadena's most discerning homeowners, creating spaces that honor both architectural heritage and contemporary luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localProjects.map((project) => (
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

      {/* Local Communities */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in pasadena</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We serve Pasadena's most prestigious neighborhoods, each with its own unique character and architectural requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {localCommunities.map((community, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-french-gray/20">
                <h3 className="text-2xl font-semibold text-charcoal mb-4">{community.name}</h3>
                <p className="text-charcoal/70 mb-4 leading-relaxed">{community.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-deep-green">{community.averageHomeValue}</span>
                  <span className="text-charcoal/60 ml-2">average home value</span>
                </div>
                <div className="space-y-2">
                  {community.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-charcoal/70">
                      <div className="w-2 h-2 bg-deep-green rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estate Logistics */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Luxury Kitchen Design in pasadena</h2>
              <p className="text-xl text-french-gray mb-8 leading-relaxed">
                Pasadena's historic homes require specialized installation expertise and careful consideration of preservation requirements. Our team brings decades of experience working in historic neighborhoods, ensuring every detail meets the exacting standards of our discerning clients while respecting the architectural heritage.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Historic Preservation</h3>
                    <p className="text-french-gray">Specialized knowledge of historic preservation requirements and architectural review processes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Period-Appropriate Design</h3>
                    <p className="text-french-gray">Designs that honor the historic character while incorporating modern functionality and luxury.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Discrete Operations</h3>
                    <p className="text-french-gray">Respectful of neighborhood character with minimal disruption to daily life and complete confidentiality.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/gallery-luxury-custom-kitchen-41-sacramento-california.webp"
                alt="Historic home kitchen installation in Pasadena"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in pasadena</h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchens in Pasadena's historic neighborhoods.
            </p>
          </div>

          <div className="space-y-8">
            {localFAQ.map((faq, index) => (
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Luxury Kitchen Design in pasadena</h2>
          <p className="text-xl text-ivory/90 mb-12 max-w-3xl mx-auto">
            Join the ranks of Pasadena's most prestigious homeowners who have chosen PineWood Cabinets for their luxury kitchen renovations.
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
