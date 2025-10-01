import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Custom Kitchens Hollywood Hills | Luxury Cabinetry | AV\'s Cabinets California',
  description: 'Custom kitchens and luxury cabinetry for Hollywood Hills\' most prestigious estates. AV\'s Cabinets brings European craftsmanship to Los Angeles\' most iconic neighborhood.',
  keywords: 'custom kitchens Hollywood Hills, luxury cabinetry Hollywood Hills, estate kitchens Los Angeles, high-end kitchen design Hollywood Hills, custom cabinets Hollywood Hills',
  openGraph: {
    title: 'Custom Kitchens Hollywood Hills | Luxury Cabinetry | AV\'s Cabinets California',
    description: 'Custom kitchens and luxury cabinetry for Hollywood Hills\' most prestigious estates.',
    type: 'website',
  },
}

const localProjects = [
  {
    id: 1,
    title: 'Hollywood Hills Estate Kitchen',
    location: 'Hollywood Hills, CA',
    description: 'A stunning estate kitchen renovation featuring custom walnut cabinetry and panoramic city views. Designed to maximize both functionality and luxury in one of LA\'s most iconic neighborhoods.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-34-sacramento-california.webp',
    alt: 'Luxury estate kitchen in Hollywood Hills with panoramic city views',
    year: '2024'
  },
  {
    id: 2,
    title: 'Modern Hillside Villa',
    location: 'Hollywood Hills, CA',
    description: 'A contemporary hillside villa kitchen with clean lines and premium materials. Perfect for entertaining with breathtaking views of the city below.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-35-sacramento-california.webp',
    alt: 'Modern hillside villa kitchen in Hollywood Hills with city views',
    year: '2024'
  },
  {
    id: 3,
    title: 'Traditional Hillside Manor',
    location: 'Hollywood Hills, CA',
    description: 'A classic hillside manor kitchen renovation honoring traditional design while incorporating modern luxury amenities. A perfect blend of heritage and innovation.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-36-sacramento-california.webp',
    alt: 'Traditional hillside manor kitchen in Hollywood Hills with classic cabinetry',
    year: '2023'
  }
]

const localArchitecture = [
  {
    style: 'Mid-Century Modern',
    description: 'Hollywood Hills\' Mid-Century Modern homes feature clean lines, open floor plans, and integration with nature. Our cabinetry complements these elements with minimalist designs and natural materials that honor the architectural movement.',
    characteristics: ['Clean lines', 'Open floor plans', 'Nature integration', 'Minimalist design', 'Natural materials']
  },
  {
    style: 'Contemporary Hillside',
    description: 'Modern hillside homes embrace dramatic views, cantilevered structures, and glass walls. Our cabinetry reflects this aesthetic with sleek surfaces, hidden hardware, and seamless integration with architectural elements.',
    characteristics: ['Dramatic views', 'Cantilevered structures', 'Glass walls', 'Sleek surfaces', 'Hidden hardware']
  },
  {
    style: 'Mediterranean Villa',
    description: 'Classic Mediterranean villas in Hollywood Hills feature stucco exteriors, tile roofs, and terraced gardens. Our cabinetry honors this tradition with warm wood tones and classical proportions that complement the architectural heritage.',
    characteristics: ['Stucco exteriors', 'Tile roofs', 'Terraced gardens', 'Warm wood tones', 'Classical proportions']
  }
]

const localCommunities = [
  {
    name: 'Hollywood Hills West',
    description: 'The most prestigious area of Hollywood Hills, featuring the largest estates with panoramic city and ocean views.',
    averageHomeValue: '$8M',
    keyFeatures: ['Panoramic views', 'Large estates', 'Prestigious address', 'Private security']
  },
  {
    name: 'Bird Streets',
    description: 'An exclusive area known for its celebrity residents and stunning hillside properties.',
    averageHomeValue: '$12M',
    keyFeatures: ['Celebrity residents', 'Hillside properties', 'Exclusive area', 'Stunning views']
  },
  {
    name: 'Hollywood Hills East',
    description: 'A more intimate community with custom homes and private streets.',
    averageHomeValue: '$6M',
    keyFeatures: ['Custom homes', 'Private streets', 'Intimate community', 'Hillside location']
  }
]

const localFAQ = [
  {
    question: 'What makes Hollywood Hills kitchens unique?',
    answer: 'Hollywood Hills kitchens are characterized by their dramatic views, open layouts, and integration with outdoor living spaces. They often feature large windows, indoor-outdoor flow, and materials that complement the hillside setting while maximizing the breathtaking city views.'
  },
  {
    question: 'How long does a Hollywood Hills kitchen renovation take?',
    answer: 'Hollywood Hills kitchen renovations typically take 14-18 weeks from design approval to completion. This timeline accounts for the hillside location challenges, view considerations, and the high-end finishes that our clients expect in this iconic neighborhood.'
  },
  {
    question: 'Do you work with Hollywood Hills\' view requirements?',
    answer: 'Yes, we\'re experienced in working with Hollywood Hills\' strict view protection ordinances. We ensure all our designs and installations comply with local regulations while maximizing the stunning views that make this neighborhood so special.'
  },
  {
    question: 'What materials work best in Hollywood Hills homes?',
    answer: 'Hollywood Hills homes work beautifully with materials that complement the natural setting and maximize views. We often use natural woods, stone, and glass elements that enhance the indoor-outdoor living experience while providing the luxury finishes our clients expect.'
  }
]

export default function HollywoodHillsPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Custom Kitchens Hollywood Hills
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-french-gray">
              Luxury cabinetry and custom kitchens for Hollywood Hills' most prestigious estates. Where European craftsmanship meets Los Angeles' most iconic views.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Hillside Estates
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Mid-Century Modern
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Panoramic Views
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
              Hollywood Hills' Architectural Legacy
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our cabinetry designs honor Hollywood Hills' diverse architectural heritage while maximizing the stunning views that make this neighborhood so special.
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
              Recent Hollywood Hills Commissions
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Each project represents a unique collaboration with Hollywood Hills' most discerning homeowners, creating spaces that honor both architectural heritage and contemporary luxury.
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
              Hollywood Hills' Exclusive Communities
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We serve Hollywood Hills' most prestigious neighborhoods, each with its own unique character and architectural requirements.
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
                Hillside Installation Excellence
              </h2>
              <p className="text-xl text-french-gray mb-8 leading-relaxed">
                Hollywood Hills' hillside estates require specialized installation expertise and careful consideration of the unique challenges posed by the steep terrain and view requirements. Our team brings decades of experience working in hillside locations, ensuring every detail meets the exacting standards of our discerning clients.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Hillside Expertise</h3>
                    <p className="text-french-gray">Specialized knowledge of hillside installation challenges and view protection requirements.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">View Protection</h3>
                    <p className="text-french-gray">Full compliance with Hollywood Hills\' view protection ordinances and hillside regulations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Discrete Operations</h3>
                    <p className="text-french-gray">Respectful of neighborhood privacy with minimal disruption to daily life and complete confidentiality.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/gallery-luxury-custom-kitchen-37-sacramento-california.webp"
                alt="Hillside kitchen installation in Hollywood Hills estate"
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
              Hollywood Hills Kitchen FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchens in Hollywood Hills' prestigious neighborhoods.
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
            Ready to Transform Your Hollywood Hills Kitchen?
          </h2>
          <p className="text-xl text-ivory/90 mb-12 max-w-3xl mx-auto">
            Join the ranks of Hollywood Hills' most prestigious homeowners who have chosen AV's Cabinets for their luxury kitchen renovations.
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
