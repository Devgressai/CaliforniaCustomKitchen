import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Custom Kitchens Brentwood | Luxury Cabinetry | AV\'s Cabinets California',
  description: 'Custom kitchens and luxury cabinetry for Brentwood\'s most prestigious estates. AV\'s Cabinets brings European craftsmanship to Los Angeles\' most exclusive neighborhood.',
  keywords: 'custom kitchens Brentwood, luxury cabinetry Brentwood, estate kitchens Los Angeles, high-end kitchen design Brentwood, custom cabinets Brentwood',
  openGraph: {
    title: 'Custom Kitchens Brentwood | Luxury Cabinetry | AV\'s Cabinets California',
    description: 'Custom kitchens and luxury cabinetry for Brentwood\'s most prestigious estates.',
    type: 'website',
  },
}

const localProjects = [
  {
    id: 1,
    title: 'Brentwood Estate Kitchen',
    location: 'Brentwood, CA',
    description: 'A stunning estate kitchen renovation featuring custom walnut cabinetry and marble countertops. Designed to maximize both functionality and luxury in one of LA\'s most prestigious neighborhoods.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-26-sacramento-california.webp',
    alt: 'Luxury estate kitchen in Brentwood with custom walnut cabinetry',
    year: '2024'
  },
  {
    id: 2,
    title: 'Modern Brentwood Villa',
    location: 'Brentwood, CA',
    description: 'A contemporary villa kitchen with clean lines and premium materials. Perfect for entertaining in this exclusive Los Angeles community.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-27-sacramento-california.webp',
    alt: 'Modern villa kitchen in Brentwood with contemporary design',
    year: '2024'
  },
  {
    id: 3,
    title: 'Traditional Brentwood Manor',
    location: 'Brentwood, CA',
    description: 'A classic manor kitchen renovation honoring traditional design while incorporating modern luxury amenities. A perfect blend of heritage and innovation.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-28-sacramento-california.webp',
    alt: 'Traditional manor kitchen in Brentwood with classic cabinetry',
    year: '2023'
  }
]

const localArchitecture = [
  {
    style: 'Mediterranean Revival',
    description: 'Brentwood\'s Mediterranean Revival homes feature stucco exteriors, red tile roofs, and arched doorways. Our cabinetry complements these elements with warm wood tones and classical proportions that honor the architectural heritage.',
    characteristics: ['Stucco exteriors', 'Red tile roofs', 'Arched doorways', 'Warm wood tones', 'Classical proportions']
  },
  {
    style: 'Contemporary Estate',
    description: 'Modern Brentwood estates embrace clean lines, expansive glass, and minimalist design. Our cabinetry reflects this aesthetic with sleek surfaces, hidden hardware, and seamless integration with architectural elements.',
    characteristics: ['Clean lines', 'Expansive glass', 'Minimalist design', 'Sleek surfaces', 'Hidden hardware']
  },
  {
    style: 'Traditional Colonial',
    description: 'Classic Colonial homes in Brentwood feature symmetrical facades, formal proportions, and traditional details. Our cabinetry honors this tradition with inset doors, raised panels, and period-appropriate hardware.',
    characteristics: ['Symmetrical facades', 'Formal proportions', 'Traditional details', 'Inset doors', 'Raised panels']
  }
]

const localCommunities = [
  {
    name: 'Brentwood Glen',
    description: 'An exclusive gated community featuring custom homes with mountain views and private amenities.',
    averageHomeValue: '$8.5M',
    keyFeatures: ['Gated security', 'Mountain views', 'Private amenities', 'Custom homes']
  },
  {
    name: 'Brentwood Park',
    description: 'A prestigious neighborhood known for its large estates and proximity to the Getty Center.',
    averageHomeValue: '$12M',
    keyFeatures: ['Large estates', 'Getty Center proximity', 'Prestigious address', 'Mature landscaping']
  },
  {
    name: 'Brentwood Circle',
    description: 'An intimate community of luxury homes with private streets and exclusive access.',
    averageHomeValue: '$15M',
    keyFeatures: ['Private streets', 'Exclusive access', 'Intimate community', 'Luxury finishes']
  }
]

const localFAQ = [
  {
    question: 'What makes Brentwood kitchens unique?',
    answer: 'Brentwood kitchens are characterized by their blend of luxury and functionality, often featuring high-end materials like marble and exotic woods, custom storage solutions, and seamless integration with indoor-outdoor living spaces that take advantage of Southern California\'s climate.'
  },
  {
    question: 'How long does a Brentwood kitchen renovation take?',
    answer: 'Brentwood kitchen renovations typically take 12-16 weeks from design approval to completion. This timeline accounts for the high-end finishes, custom millwork, and attention to detail that our clients expect in this prestigious neighborhood.'
  },
  {
    question: 'Do you work with Brentwood\'s HOA requirements?',
    answer: 'Yes, we\'re familiar with Brentwood\'s various HOA requirements and architectural guidelines. We ensure all our designs and installations comply with local regulations while meeting our clients\' luxury standards.'
  },
  {
    question: 'What materials work best in Brentwood homes?',
    answer: 'Brentwood homes work beautifully with natural materials like marble, granite, and exotic woods. We also incorporate high-tech features like smart home integration and energy-efficient appliances that appeal to the tech-savvy Brentwood clientele.'
  }
]

export default function BrentwoodPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Custom Kitchens Brentwood
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-french-gray">
              Luxury cabinetry and custom kitchens for Brentwood's most prestigious estates. Where European craftsmanship meets Los Angeles sophistication.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Estate Kitchens
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Mediterranean Revival
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Contemporary Design
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Local Architecture Section */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Brentwood's Architectural Heritage
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our cabinetry designs honor Brentwood's diverse architectural styles while incorporating modern luxury and functionality.
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Recent Brentwood Commissions
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Each project represents a unique collaboration with Brentwood's most discerning homeowners, creating spaces that honor both architectural heritage and contemporary luxury.
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Brentwood's Exclusive Communities
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We serve Brentwood's most prestigious neighborhoods, each with its own unique character and architectural requirements.
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Estate Installation Excellence
              </h2>
              <p className="text-xl text-french-gray mb-8 leading-relaxed">
                Brentwood's prestigious estates require the highest level of installation expertise. Our team brings decades of experience working in exclusive neighborhoods, ensuring every detail meets the exacting standards of our discerning clients.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">White-Glove Service</h3>
                    <p className="text-french-gray">Complete protection of existing finishes and seamless installation process.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">HOA Compliance</h3>
                    <p className="text-french-gray">Full compliance with Brentwood's architectural guidelines and HOA requirements.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Discrete Operations</h3>
                    <p className="text-french-gray">Respectful of neighborhood privacy with minimal disruption to daily life.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/gallery-luxury-custom-kitchen-29-sacramento-california.webp"
                alt="Luxury kitchen installation in Brentwood estate"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Brentwood Kitchen FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchens in Brentwood's prestigious neighborhoods.
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Brentwood Kitchen?
          </h2>
          <p className="text-xl text-ivory/90 mb-12 max-w-3xl mx-auto">
            Join the ranks of Brentwood's most prestigious homeowners who have chosen AV's Cabinets for their luxury kitchen renovations.
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
