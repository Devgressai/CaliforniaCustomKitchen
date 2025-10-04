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
  title: "Beverly Hills Modern Kitchen | Luxury Kitchen Renovation | PineWood Cabinets",
  description: "Explore our Beverly Hills modern kitchen renovation case study. See how we transformed a luxury home with custom cabinetry, premium materials, and contemporary design.",
  keywords: [
    'Beverly Hills kitchen renovation',
    'modern kitchen design',
    'luxury kitchen cabinets',
    'custom kitchen Beverly Hills',
    'kitchen renovation case study',
    'premium kitchen materials',
    'contemporary kitchen design',
    'kitchen transformation'
  ],
  openGraph: {
    title: "Beverly Hills Modern Kitchen | PineWood Cabinets",
    description: "Explore our Beverly Hills modern kitchen renovation case study. See how we transformed a luxury home with custom cabinetry.",
    images: ['/images/portfolio/beverly-hills-modern-kitchen-hero.webp'],
  },
}

const projectDetails = {
  location: 'Beverly Hills, CA',
  style: 'Modern Contemporary',
  size: '450 sq ft',
  duration: '12 weeks',
  budget: '$180,000',
  year: '2024'
}

const challenges = [
  {
    challenge: 'Space Optimization',
    description: 'The existing kitchen had an awkward layout with limited counter space and poor workflow. We needed to maximize functionality while maintaining the open concept design.',
    solution: 'Designed a large center island with integrated storage and seating, repositioned appliances for better workflow, and added custom pull-out storage solutions.'
  },
  {
    challenge: 'Premium Material Selection',
    description: 'The client wanted only the finest materials that would stand the test of time while maintaining a modern aesthetic.',
    solution: 'Selected premium European oak for cabinetry, Calacatta marble for countertops, and high-end appliances from Sub-Zero and Wolf.'
  },
  {
    challenge: 'Lighting Integration',
    description: 'The space lacked adequate lighting for both task and ambient illumination, which was crucial for the modern design aesthetic.',
    solution: 'Installed recessed LED lighting throughout, under-cabinet task lighting, and a statement pendant light over the island for both function and style.'
  }
]

const features = [
  {
    feature: 'Custom European Oak Cabinetry',
    description: 'Handcrafted cabinetry with soft-close mechanisms and custom storage solutions',
    image: '/images/portfolio/beverly-hills-cabinetry.webp'
  },
  {
    feature: 'Calacatta Marble Countertops',
    description: 'Premium Italian marble with book-matched veining for a seamless, luxurious appearance',
    image: '/images/portfolio/beverly-hills-countertops.webp'
  },
  {
    feature: 'Sub-Zero & Wolf Appliances',
    description: 'Professional-grade appliances seamlessly integrated with custom cabinetry',
    image: '/images/portfolio/beverly-hills-appliances.webp'
  },
  {
    feature: 'Custom Center Island',
    description: 'Large center island with integrated storage, seating, and prep sink',
    image: '/images/portfolio/beverly-hills-island.webp'
  }
]

const process = [
  {
    phase: 'Design & Planning',
    description: 'Collaborated with the client to understand their vision and lifestyle needs, creating detailed 3D renderings and material selections.',
    duration: '3 weeks',
    deliverables: ['3D renderings', 'Material samples', 'Detailed specifications', 'Timeline planning']
  },
  {
    phase: 'Demolition & Preparation',
    description: 'Carefully removed existing kitchen elements while protecting the rest of the home, then prepared the space for new installations.',
    duration: '1 week',
    deliverables: ['Safe demolition', 'Site protection', 'Waste removal', 'Surface preparation']
  },
  {
    phase: 'Custom Fabrication',
    description: 'Our craftsmen built the custom cabinetry and countertops to exact specifications, ensuring perfect fit and finish.',
    duration: '6 weeks',
    deliverables: ['Custom cabinetry', 'Countertop fabrication', 'Hardware installation', 'Quality control']
  },
  {
    phase: 'Installation & Finishing',
    description: 'Professional installation of all elements with meticulous attention to detail and final quality inspections.',
    duration: '2 weeks',
    deliverables: ['Professional installation', 'Appliance integration', 'Final adjustments', 'Quality inspection']
  }
]

const testimonials = [
  {
    name: 'Sarah Chen',
    location: 'Beverly Hills, CA',
    quote: 'PineWood Cabinets exceeded our expectations in every way. The attention to detail and quality of workmanship is exceptional. Our new kitchen is not only beautiful but incredibly functional.',
    rating: 5
  }
]

export default function BeverlyHillsModernKitchenPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Portfolio', href: '/portfolio' },
              { name: 'Beverly Hills Modern Kitchen', href: '/portfolio/beverly-hills-modern-kitchen', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Beverly Hills Modern Kitchen"
        subtitle="Luxury Renovation Case Study"
        description="Explore how we transformed a Beverly Hills home with a stunning modern kitchen featuring custom European oak cabinetry, Calacatta marble countertops, and premium appliances."
        imageSrc="portfolio/beverly-hills-modern-kitchen-hero.webp"
        imageAlt="Beautiful modern kitchen in Beverly Hills with custom cabinetry and premium materials"
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
              A complete kitchen transformation that combines modern aesthetics with luxury materials and exceptional functionality.
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
              Discover the premium materials and custom features that make this kitchen exceptional.
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
              Every project presents unique challenges. Here's how we solved them to create the perfect kitchen.
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
              Hear what our client has to say about their new kitchen.
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
            "name": "Beverly Hills Modern Kitchen Case Study",
            "description": "Explore our Beverly Hills modern kitchen renovation case study. See how we transformed a luxury home with custom cabinetry.",
            "creator": {
              "@type": "Organization",
              "name": "PineWood Cabinets",
              "url": "https://california-custom-kitchen.vercel.app"
            },
            "dateCreated": "2024",
            "locationCreated": {
              "@type": "Place",
              "name": "Beverly Hills, CA"
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
