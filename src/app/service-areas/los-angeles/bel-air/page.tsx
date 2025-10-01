import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Custom Kitchens Bel Air | Luxury Cabinetry | AV\'s Cabinets California',
  description: 'Custom kitchens and luxury cabinetry for Bel Air\'s most prestigious estates. AV\'s Cabinets brings European craftsmanship to Los Angeles\' most exclusive neighborhood.',
  keywords: 'custom kitchens Bel Air, luxury cabinetry Bel Air, estate kitchens Los Angeles, high-end kitchen design Bel Air, custom cabinets Bel Air',
  openGraph: {
    title: 'Custom Kitchens Bel Air | Luxury Cabinetry | AV\'s Cabinets California',
    description: 'Custom kitchens and luxury cabinetry for Bel Air\'s most prestigious estates.',
    type: 'website',
  },
}

const localProjects = [
  {
    id: 1,
    title: 'Bel Air Estate Kitchen',
    location: 'Bel Air, CA',
    description: 'A magnificent estate kitchen renovation featuring custom mahogany cabinetry and Calacatta marble. Designed for the most discerning Bel Air homeowners who demand nothing but the finest.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-30-sacramento-california.webp',
    alt: 'Luxury estate kitchen in Bel Air with custom mahogany cabinetry',
    year: '2024'
  },
  {
    id: 2,
    title: 'Modern Bel Air Villa',
    location: 'Bel Air, CA',
    description: 'A contemporary villa kitchen with sleek lines and premium materials. Perfect for entertaining in one of LA\'s most exclusive communities.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-31-sacramento-california.webp',
    alt: 'Modern villa kitchen in Bel Air with contemporary design',
    year: '2024'
  },
  {
    id: 3,
    title: 'Traditional Bel Air Manor',
    location: 'Bel Air, CA',
    description: 'A classic manor kitchen renovation honoring traditional design while incorporating modern luxury amenities. A perfect blend of heritage and innovation.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-32-sacramento-california.webp',
    alt: 'Traditional manor kitchen in Bel Air with classic cabinetry',
    year: '2023'
  }
]

const localArchitecture = [
  {
    style: 'French Chateau',
    description: 'Bel Air\'s French Chateau homes feature steeply pitched roofs, ornate details, and grand proportions. Our cabinetry complements these elements with classical French styling and premium materials that honor the architectural grandeur.',
    characteristics: ['Steeply pitched roofs', 'Ornate details', 'Grand proportions', 'Classical French styling', 'Premium materials']
  },
  {
    style: 'Modern Estate',
    description: 'Contemporary Bel Air estates embrace clean lines, expansive glass, and minimalist design. Our cabinetry reflects this aesthetic with sleek surfaces, hidden hardware, and seamless integration with architectural elements.',
    characteristics: ['Clean lines', 'Expansive glass', 'Minimalist design', 'Sleek surfaces', 'Hidden hardware']
  },
  {
    style: 'Mediterranean Villa',
    description: 'Classic Mediterranean villas in Bel Air feature stucco exteriors, tile roofs, and arched doorways. Our cabinetry honors this tradition with warm wood tones and classical proportions that complement the architectural heritage.',
    characteristics: ['Stucco exteriors', 'Tile roofs', 'Arched doorways', 'Warm wood tones', 'Classical proportions']
  }
]

const localCommunities = [
  {
    name: 'Bel Air Estates',
    description: 'The crown jewel of Bel Air, featuring the most prestigious estates with panoramic city views.',
    averageHomeValue: '$25M',
    keyFeatures: ['Panoramic views', 'Prestigious address', 'Large estates', 'Private security']
  },
  {
    name: 'Bel Air Crest',
    description: 'An exclusive gated community featuring custom homes with mountain and city views.',
    averageHomeValue: '$18M',
    keyFeatures: ['Gated security', 'Mountain views', 'Custom homes', 'Private amenities']
  },
  {
    name: 'Bel Air Glen',
    description: 'An intimate community of luxury homes with private streets and exclusive access.',
    averageHomeValue: '$22M',
    keyFeatures: ['Private streets', 'Exclusive access', 'Intimate community', 'Luxury finishes']
  }
]

const localFAQ = [
  {
    question: 'What makes Bel Air kitchens unique?',
    answer: 'Bel Air kitchens are characterized by their unparalleled luxury and attention to detail, often featuring exotic materials like rare woods and precious stones, custom storage solutions, and state-of-the-art appliances that cater to the most discerning clientele.'
  },
  {
    question: 'How long does a Bel Air kitchen renovation take?',
    answer: 'Bel Air kitchen renovations typically take 16-20 weeks from design approval to completion. This extended timeline accounts for the ultra-high-end finishes, custom millwork, and meticulous attention to detail that our clients expect in this exclusive neighborhood.'
  },
  {
    question: 'Do you work with Bel Air\'s security requirements?',
    answer: 'Yes, we\'re fully vetted and approved to work in Bel Air\'s gated communities. We understand the security protocols and work discretely to ensure our clients\' privacy and safety throughout the renovation process.'
  },
  {
    question: 'What materials work best in Bel Air homes?',
    answer: 'Bel Air homes work beautifully with the finest materials like rare woods, exotic stones, and precious metals. We also incorporate cutting-edge technology and smart home features that appeal to the tech-savvy Bel Air clientele.'
  }
]

export default function BelAirPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Custom Kitchens Bel Air
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-french-gray">
              Luxury cabinetry and custom kitchens for Bel Air's most prestigious estates. Where European craftsmanship meets Los Angeles' ultimate sophistication.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Ultra-Luxury Kitchens
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                French Chateau Style
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Estate Design
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
              Bel Air's Architectural Legacy
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our cabinetry designs honor Bel Air's prestigious architectural heritage while incorporating the latest in luxury and technology.
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
              Recent Bel Air Commissions
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Each project represents a unique collaboration with Bel Air's most discerning homeowners, creating spaces that honor both architectural heritage and contemporary luxury.
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
              Bel Air's Exclusive Communities
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We serve Bel Air's most prestigious neighborhoods, each with its own unique character and architectural requirements.
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
                Ultra-Luxury Installation
              </h2>
              <p className="text-xl text-french-gray mb-8 leading-relaxed">
                Bel Air's ultra-prestigious estates require the highest level of installation expertise and discretion. Our team brings decades of experience working in the most exclusive neighborhoods, ensuring every detail meets the exacting standards of our discerning clients.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Ultra-White-Glove Service</h3>
                    <p className="text-french-gray">Complete protection of existing finishes and seamless installation process with zero disruption.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Security Compliance</h3>
                    <p className="text-french-gray">Full compliance with Bel Air's security protocols and gated community requirements.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Maximum Discretion</h3>
                    <p className="text-french-gray">Respectful of neighborhood privacy with minimal disruption to daily life and complete confidentiality.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/gallery-luxury-custom-kitchen-33-sacramento-california.webp"
                alt="Ultra-luxury kitchen installation in Bel Air estate"
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
              Bel Air Kitchen FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchens in Bel Air's ultra-prestigious neighborhoods.
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
            Ready to Transform Your Bel Air Kitchen?
          </h2>
          <p className="text-xl text-ivory/90 mb-12 max-w-3xl mx-auto">
            Join the ranks of Bel Air's most prestigious homeowners who have chosen AV's Cabinets for their ultra-luxury kitchen renovations.
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
