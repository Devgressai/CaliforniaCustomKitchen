import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Custom Kitchens Calabasas | Luxury Cabinetry | AV\'s Cabinets California',
  description: 'Custom kitchens and luxury cabinetry for Calabasas\' most prestigious estates. AV\'s Cabinets brings European craftsmanship to Los Angeles\' most exclusive gated communities.',
  keywords: 'custom kitchens Calabasas, luxury cabinetry Calabasas, estate kitchens Los Angeles, high-end kitchen design Calabasas, custom cabinets Calabasas',
  openGraph: {
    title: 'Custom Kitchens Calabasas | Luxury Cabinetry | AV\'s Cabinets California',
    description: 'Custom kitchens and luxury cabinetry for Calabasas\' most prestigious estates.',
    type: 'website',
  },
}

const localProjects = [
  {
    id: 1,
    title: 'Calabasas Estate Kitchen',
    location: 'Calabasas, CA',
    description: 'A stunning estate kitchen renovation featuring custom oak cabinetry and marble countertops. Designed to maximize both functionality and luxury in one of LA\'s most exclusive gated communities.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-42-sacramento-california.webp',
    alt: 'Luxury estate kitchen in Calabasas with custom oak cabinetry',
    year: '2024'
  },
  {
    id: 2,
    title: 'Modern Calabasas Villa',
    location: 'Calabasas, CA',
    description: 'A contemporary villa kitchen with clean lines and premium materials. Perfect for entertaining in one of Calabasas\' most prestigious gated communities.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-43-sacramento-california.webp',
    alt: 'Modern villa kitchen in Calabasas with contemporary design',
    year: '2024'
  },
  {
    id: 3,
    title: 'Traditional Calabasas Manor',
    location: 'Calabasas, CA',
    description: 'A classic manor kitchen renovation honoring traditional design while incorporating modern luxury amenities. A perfect blend of heritage and innovation.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-44-sacramento-california.webp',
    alt: 'Traditional manor kitchen in Calabasas with classic cabinetry',
    year: '2023'
  }
]

const localArchitecture = [
  {
    style: 'Mediterranean Villa',
    description: 'Calabasas\' Mediterranean villas feature stucco exteriors, tile roofs, and arched doorways. Our cabinetry complements these elements with warm wood tones and classical proportions that honor the architectural heritage.',
    characteristics: ['Stucco exteriors', 'Tile roofs', 'Arched doorways', 'Warm wood tones', 'Classical proportions']
  },
  {
    style: 'Contemporary Estate',
    description: 'Modern Calabasas estates embrace clean lines, expansive glass, and minimalist design. Our cabinetry reflects this aesthetic with sleek surfaces, hidden hardware, and seamless integration with architectural elements.',
    characteristics: ['Clean lines', 'Expansive glass', 'Minimalist design', 'Sleek surfaces', 'Hidden hardware']
  },
  {
    style: 'Traditional Colonial',
    description: 'Classic Colonial homes in Calabasas feature symmetrical facades, formal proportions, and traditional details. Our cabinetry honors this tradition with inset doors, raised panels, and period-appropriate hardware.',
    characteristics: ['Symmetrical facades', 'Formal proportions', 'Traditional details', 'Inset doors', 'Raised panels']
  }
]

const localCommunities = [
  {
    name: 'The Oaks',
    description: 'Calabasas\' most exclusive gated community, featuring the largest estates and most prestigious address.',
    averageHomeValue: '$15M',
    keyFeatures: ['Gated security', 'Largest estates', 'Prestigious address', 'Private amenities']
  },
  {
    name: 'Malibu Creek',
    description: 'An exclusive gated community featuring custom homes with mountain and valley views.',
    averageHomeValue: '$8M',
    keyFeatures: ['Gated security', 'Mountain views', 'Custom homes', 'Private amenities']
  },
  {
    name: 'Calabasas Park',
    description: 'A prestigious gated community with luxury homes and private streets.',
    averageHomeValue: '$6M',
    keyFeatures: ['Gated security', 'Luxury homes', 'Private streets', 'Exclusive access']
  }
]

const localFAQ = [
  {
    question: 'What makes Calabasas kitchens unique?',
    answer: 'Calabasas kitchens are characterized by their blend of luxury and privacy, often featuring high-end materials like marble and exotic woods, custom storage solutions, and seamless integration with indoor-outdoor living spaces that take advantage of the gated community lifestyle.'
  },
  {
    question: 'How long does a Calabasas kitchen renovation take?',
    answer: 'Calabasas kitchen renovations typically take 14-18 weeks from design approval to completion. This timeline accounts for the gated community access requirements, high-end finishes, custom millwork, and attention to detail that our clients expect in this exclusive neighborhood.'
  },
  {
    question: 'Do you work with Calabasas\' gated community requirements?',
    answer: 'Yes, we\'re fully vetted and approved to work in Calabasas\' gated communities. We understand the security protocols and work discretely to ensure our clients\' privacy and safety throughout the renovation process.'
  },
  {
    question: 'What materials work best in Calabasas homes?',
    answer: 'Calabasas homes work beautifully with natural materials like marble, granite, and exotic woods. We also incorporate high-tech features like smart home integration and energy-efficient appliances that appeal to the tech-savvy Calabasas clientele.'
  }
]

export default function CalabasasPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Custom Kitchens Calabasas
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-french-gray">
              Luxury cabinetry and custom kitchens for Calabasas' most prestigious estates. Where European craftsmanship meets Los Angeles' most exclusive gated communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Gated Communities
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Mediterranean Style
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Private Estates
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
              Calabasas' Architectural Heritage
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our cabinetry designs honor Calabasas' diverse architectural styles while incorporating modern luxury and functionality.
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
              Recent Calabasas Commissions
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Each project represents a unique collaboration with Calabasas' most discerning homeowners, creating spaces that honor both architectural heritage and contemporary luxury.
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
              Calabasas' Exclusive Communities
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We serve Calabasas' most prestigious gated communities, each with its own unique character and architectural requirements.
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
                Gated Community Installation
              </h2>
              <p className="text-xl text-french-gray mb-8 leading-relaxed">
                Calabasas' gated communities require specialized installation expertise and careful consideration of security protocols. Our team brings decades of experience working in exclusive gated communities, ensuring every detail meets the exacting standards of our discerning clients while respecting the privacy and security requirements.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Security Compliance</h3>
                    <p className="text-french-gray">Full compliance with gated community security protocols and access requirements.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Privacy Protection</h3>
                    <p className="text-french-gray">Maximum discretion and privacy protection throughout the renovation process.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">White-Glove Service</h3>
                    <p className="text-french-gray">Complete protection of existing finishes and seamless installation process with zero disruption.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/gallery-luxury-custom-kitchen-45-sacramento-california.webp"
                alt="Gated community kitchen installation in Calabasas"
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
              Calabasas Kitchen FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchens in Calabasas' exclusive gated communities.
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
            Ready to Transform Your Calabasas Kitchen?
          </h2>
          <p className="text-xl text-ivory/90 mb-12 max-w-3xl mx-auto">
            Join the ranks of Calabasas' most prestigious homeowners who have chosen PineWood Cabinets for their luxury kitchen renovations.
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
