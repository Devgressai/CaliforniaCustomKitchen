import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import Image from 'next/image'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: "Montecito Wine Country Kitchen | Luxury Kitchen Renovation | PineWood Cabinets",
  description: "Explore our Montecito wine country kitchen renovation case study. See how we created a luxury kitchen with wine storage, premium materials, and Santa Barbara County elegance.",
  keywords: [
    'Montecito kitchen renovation',
    'wine country kitchen design',
    'luxury kitchen Montecito',
    'custom kitchen Montecito',
    'kitchen renovation case study',
    'wine storage kitchen',
    'luxury kitchen design',
    'kitchen transformation'
  ],
  openGraph: {
    title: "Montecito Wine Country Kitchen | PineWood Cabinets",
    description: "Explore our Montecito wine country kitchen renovation case study. See how we created a luxury kitchen with wine storage.",
    images: ['/images/portfolio/montecito-wine-country-kitchen-hero.webp'],
  },
}

const projectDetails = {
  location: 'Montecito, CA',
  style: 'Wine Country Luxury',
  size: '520 sq ft',
  duration: '16 weeks',
  budget: '$220,000',
  year: '2024'
}

const challenges = [
  {
    challenge: 'Wine Storage Integration',
    description: 'The client wanted extensive wine storage integrated into the kitchen design, but the existing space couldn\'t accommodate the temperature-controlled storage needed for their collection.',
    solution: 'Designed a custom wine wall with temperature-controlled storage, integrated wine refrigerator, and display areas for special bottles, all seamlessly integrated into the kitchen design.'
  },
  {
    challenge: 'Luxury Material Selection',
    description: 'The client wanted only the finest materials that would reflect their sophisticated taste and complement the wine country aesthetic, but sourcing and coordinating these materials was complex.',
    solution: 'Selected premium materials including custom walnut cabinetry, natural stone countertops, and hand-forged hardware, all sourced from the finest suppliers and coordinated for a cohesive look.'
  },
  {
    challenge: 'Entertainment Functionality',
    description: 'The kitchen needed to serve as both a cooking space and an entertainment area for wine tastings and dinner parties, requiring careful space planning and flow design.',
    solution: 'Designed an open layout with a large center island for food preparation and wine service, integrated seating areas, and flow that accommodates both cooking and entertaining functions.'
  }
]

const features = [
  {
    feature: 'Custom Wine Wall',
    description: 'Temperature-controlled wine storage with display areas and integrated wine refrigerator for the perfect wine country kitchen',
    image: '/images/portfolio/montecito-wine-wall.webp'
  },
  {
    feature: 'Premium Materials',
    description: 'Custom walnut cabinetry, natural stone countertops, and hand-forged hardware for luxury wine country aesthetic',
    image: '/images/portfolio/montecito-materials.webp'
  },
  {
    feature: 'Entertainment Island',
    description: 'Large center island with integrated wine service, seating, and food preparation areas for entertaining',
    image: '/images/portfolio/montecito-island.webp'
  },
  {
    feature: 'Luxury Appliances',
    description: 'High-end appliances including professional range, wine refrigerator, and custom ventilation for the perfect cooking experience',
    image: '/images/portfolio/montecito-appliances.webp'
  }
]

const process = [
  {
    phase: 'Design & Planning',
    description: 'Collaborated with the client to understand their wine country lifestyle and vision, creating detailed 3D renderings and material selections.',
    duration: '4 weeks',
    deliverables: ['3D renderings', 'Material samples', 'Detailed specifications', 'Timeline planning']
  },
  {
    phase: 'Custom Fabrication',
    description: 'Our craftsmen built the custom cabinetry and wine storage solutions to exact specifications, ensuring perfect fit and finish.',
    duration: '8 weeks',
    deliverables: ['Custom cabinetry', 'Wine storage', 'Hardware installation', 'Quality control']
  },
  {
    phase: 'Installation & Integration',
    description: 'Professional installation of all elements with wine storage integration and final quality inspections.',
    duration: '3 weeks',
    deliverables: ['Professional installation', 'Wine storage setup', 'Final adjustments', 'Quality inspection']
  },
  {
    phase: 'Final Testing & Handover',
    description: 'Comprehensive testing of all systems, wine storage functionality, and final client walkthrough.',
    duration: '1 week',
    deliverables: ['System testing', 'Wine storage testing', 'Client training', 'Final handover']
  }
]

const testimonials = [
  {
    name: 'Jennifer Walsh',
    location: 'Montecito, CA',
    quote: 'PineWood Cabinets created the perfect wine country kitchen for our Montecito home. The wine storage is incredible, and the luxury materials are exactly what we envisioned. It\'s the perfect space for entertaining and enjoying our wine collection.',
    rating: 5
  }
]

export default function MontecitoWineCountryKitchenPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Portfolio', href: '/portfolio' },
              { name: 'Montecito Wine Country Kitchen', href: '/portfolio/montecito-wine-country-kitchen', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Montecito Wine Country Kitchen"
        subtitle="Luxury Wine Country Renovation Case Study"
        description="Explore how we transformed a Montecito home with a stunning wine country kitchen featuring custom wine storage, premium materials, and Santa Barbara County elegance."
        imageSrc="portfolio/montecito-wine-country-kitchen-hero.webp"
        imageAlt="Beautiful wine country kitchen in Montecito with custom wine storage and luxury materials"
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
              A complete kitchen transformation that celebrates the wine country lifestyle with luxury materials and custom wine storage.
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
              Discover the luxury materials and custom features that make this wine country kitchen exceptional.
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
              Every project presents unique challenges. Here's how we solved them to create the perfect wine country kitchen.
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
              Hear what our client has to say about their new wine country kitchen.
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
            "name": "Montecito Wine Country Kitchen Case Study",
            "description": "Explore our Montecito wine country kitchen renovation case study. See how we created a luxury kitchen with wine storage.",
            "creator": {
              "@type": "Organization",
              "name": "PineWood Cabinets",
              "url": "https://california-custom-kitchen.vercel.app"
            },
            "dateCreated": "2024",
            "locationCreated": {
              "@type": "Place",
              "name": "Montecito, CA"
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
