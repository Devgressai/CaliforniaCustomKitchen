import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import Image from 'next/image'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'

import { PortfolioPageLayout } from '@/components/PageLayout'
import { PortfolioHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature, ProcessStep } from '@/components/ContentSection'
export const metadata: Metadata = {
  title: "Palo Alto Tech Executive Kitchen | Smart Kitchen Renovation | PineWood Cabinets",
  description: "Explore our Palo Alto tech executive kitchen renovation case study. See how we created a smart kitchen with integrated technology, modern design, and Silicon Valley aesthetics.",
  keywords: [
    'Palo Alto kitchen renovation',
    'smart kitchen design',
    'tech executive kitchen',
    'custom kitchen Palo Alto',
    'kitchen renovation case study',
    'smart kitchen technology',
    'modern kitchen design',
    'kitchen transformation'
  ],
  openGraph: {
    title: "Palo Alto Tech Executive Kitchen | PineWood Cabinets",
    description: "Explore our Palo Alto tech executive kitchen renovation case study. See how we created a smart kitchen with integrated technology.",
    images: ['/images/portfolio/palo-alto-tech-executive-kitchen-hero.webp'],
  },
}

const projectDetails = {
  location: 'Palo Alto, CA',
  style: 'Modern Tech-Integrated',
  size: '420 sq ft',
  duration: '14 weeks',
  budget: '$165,000',
  year: '2024'
}

const challenges = [
  {
    challenge: 'Smart Home Integration',
    description: 'The client wanted a fully integrated smart kitchen with voice control, automated lighting, and connected appliances, but the existing infrastructure couldn\'t support these features.',
    solution: 'Installed smart home infrastructure including voice control systems, automated lighting, and connected appliances, all controlled through a central hub and mobile app.'
  },
  {
    challenge: 'Work-From-Home Functionality',
    description: 'The kitchen needed to serve as both a cooking space and a work area for the tech executive, with proper lighting, charging stations, and ergonomic design.',
    solution: 'Designed a multi-functional island with built-in charging stations, task lighting, and comfortable seating, while maintaining the kitchen\'s primary cooking functions.'
  },
  {
    challenge: 'Minimalist Aesthetic',
    description: 'The client wanted a clean, minimalist design that would hide technology and create a serene, uncluttered space while maintaining full functionality.',
    solution: 'Used hidden storage solutions, integrated appliances, and clean lines to create a minimalist aesthetic while keeping all technology easily accessible and functional.'
  }
]

const features = [
  {
    feature: 'Smart Home Integration',
    description: 'Voice-controlled lighting, automated window treatments, and connected appliances for seamless smart home experience',
    image: '/images/portfolio/palo-alto-smart-home.webp'
  },
  {
    feature: 'Multi-Functional Island',
    description: 'Large center island with built-in charging stations, task lighting, and comfortable seating for work and dining',
    image: '/images/portfolio/palo-alto-island.webp'
  },
  {
    feature: 'Hidden Storage Solutions',
    description: 'Custom cabinetry with hidden storage, integrated appliances, and clean lines for minimalist aesthetic',
    image: '/images/portfolio/palo-alto-storage.webp'
  },
  {
    feature: 'Premium Materials',
    description: 'High-end materials including European oak cabinetry, quartz countertops, and premium hardware',
    image: '/images/portfolio/palo-alto-materials.webp'
  }
]

const process = [
  {
    phase: 'Design & Planning',
    description: 'Collaborated with the client to understand their tech lifestyle and vision, creating detailed 3D renderings and smart home integration plans.',
    duration: '4 weeks',
    deliverables: ['3D renderings', 'Smart home plan', 'Detailed specifications', 'Timeline planning']
  },
  {
    phase: 'Infrastructure Installation',
    description: 'Installed smart home infrastructure including wiring, networking, and control systems before beginning kitchen construction.',
    duration: '2 weeks',
    deliverables: ['Smart home wiring', 'Network installation', 'Control systems', 'Testing']
  },
  {
    phase: 'Custom Fabrication',
    description: 'Our craftsmen built the custom cabinetry and integrated technology solutions to exact specifications.',
    duration: '6 weeks',
    deliverables: ['Custom cabinetry', 'Technology integration', 'Hardware installation', 'Quality control']
  },
  {
    phase: 'Installation & Programming',
    description: 'Professional installation of all elements with smart home programming and final quality inspections.',
    duration: '2 weeks',
    deliverables: ['Professional installation', 'Smart home programming', 'Final testing', 'Quality inspection']
  }
]

const testimonials = [
  {
    name: 'David Kim',
    location: 'Palo Alto, CA',
    quote: 'PineWood Cabinets created the perfect smart kitchen for our tech lifestyle. The integration of technology with beautiful design is seamless, and the work-from-home functionality is exactly what we needed.',
    rating: 5
  }
]

export default function PaloAltoTechExecutiveKitchenPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Portfolio', href: '/portfolio' },
              { name: 'Palo Alto Tech Executive Kitchen', href: '/portfolio/palo-alto-tech-executive-kitchen', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Palo Alto Tech Executive Kitchen"
        subtitle="Smart Kitchen Renovation Case Study"
        description="Explore how we transformed a Palo Alto home with a cutting-edge smart kitchen featuring integrated technology, modern design, and Silicon Valley innovation."
        imageSrc="portfolio/palo-alto-tech-executive-kitchen-hero.webp"
        imageAlt="Beautiful smart kitchen in Palo Alto with integrated technology and modern design"
        primaryCTA={{
          text: "Start Your Project",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View More Projects",
          href: "/portfolio"
        }}
      />

      {/* Project Overview */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Project Overview
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              A complete kitchen transformation that integrates cutting-edge technology with beautiful design for the modern tech executive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20 text-center">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Location</h3>
              <p className="text-charcoal/70">{projectDetails.location}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20 text-center">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Style</h3>
              <p className="text-charcoal/70">{projectDetails.style}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20 text-center">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Size</h3>
              <p className="text-charcoal/70">{projectDetails.size}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20 text-center">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Duration</h3>
              <p className="text-charcoal/70">{projectDetails.duration}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20 text-center">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Budget</h3>
              <p className="text-charcoal/70">{projectDetails.budget}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20 text-center">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Year</h3>
              <p className="text-charcoal/70">{projectDetails.year}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Key Features
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Discover the smart technology and custom features that make this kitchen exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.feature}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-charcoal mb-4">{feature.feature}</h3>
                <p className="text-charcoal/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Challenges & Solutions
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Every project presents unique challenges. Here's how we solved them to create the perfect smart kitchen.
            </p>
          </div>

          <div className="space-y-12">
            {challenges.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-charcoal mb-4">{item.challenge}</h3>
                    <p className="text-charcoal/70 mb-6">{item.description}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-deep-green mb-4">Our Solution</h4>
                    <p className="text-charcoal/70">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Our Process
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We followed our proven 4-phase process to ensure this project was completed on time and to the highest standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-deep-green text-ivory rounded-full flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal">{phase.phase}</h3>
                </div>
                <p className="text-charcoal/70 mb-4">{phase.description}</p>
                <div className="text-sm text-deep-green font-medium mb-2">
                  Duration: {phase.duration}
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-charcoal">Deliverables:</p>
                  <ul className="text-sm text-charcoal/70 space-y-1">
                    {phase.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-deep-green rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
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
              Client Testimonial
            </h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Hear what our client has to say about their new smart kitchen.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-charcoal/50 p-8 rounded-lg text-center">
                <div className="flex items-center justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-french-gray mb-6 italic text-lg">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-ivory text-xl">{testimonial.name}</p>
                  <p className="text-french-gray">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Create Your Dream Kitchen?"
        description="Let's discuss your vision and create a custom kitchen that perfectly fits your home and lifestyle."
        primaryCTA={{
          text: "Start Your Project",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View More Projects",
          href: "/portfolio"
        }}
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "Palo Alto Tech Executive Kitchen Case Study",
            "description": "Explore our Palo Alto tech executive kitchen renovation case study. See how we created a smart kitchen with integrated technology.",
            "creator": {
              "@type": "Organization",
              "name": "PineWood Cabinets",
              "url": "https://california-custom-kitchen.vercel.app"
            },
            "dateCreated": "2024",
            "locationCreated": {
              "@type": "Place",
              "name": "Palo Alto, CA"
            },
            "about": {
              "@type": "Thing",
              "name": "Kitchen Renovation"
            }
          })
        }}
      />
    </>
  )
}
