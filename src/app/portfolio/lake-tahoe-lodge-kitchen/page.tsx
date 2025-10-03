import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import Image from 'next/image'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: "Lake Tahoe Lodge Kitchen | Mountain Kitchen Renovation | PineWood Cabinets",
  description: "Explore our Lake Tahoe lodge kitchen renovation case study. See how we created a mountain lodge kitchen with rustic materials, natural finishes, and alpine aesthetics.",
  keywords: [
    'Lake Tahoe kitchen renovation',
    'mountain lodge kitchen design',
    'rustic kitchen Lake Tahoe',
    'custom kitchen Lake Tahoe',
    'kitchen renovation case study',
    'mountain kitchen design',
    'rustic kitchen materials',
    'kitchen transformation'
  ],
  openGraph: {
    title: "Lake Tahoe Lodge Kitchen | PineWood Cabinets",
    description: "Explore our Lake Tahoe lodge kitchen renovation case study. See how we created a mountain lodge kitchen with rustic materials.",
    images: ['/images/portfolio/lake-tahoe-lodge-kitchen-hero.webp'],
  },
}

const projectDetails = {
  location: 'Lake Tahoe, CA',
  style: 'Mountain Lodge Rustic',
  size: '480 sq ft',
  duration: '14 weeks',
  budget: '$175,000',
  year: '2024'
}

const challenges = [
  {
    challenge: 'Rustic Material Integration',
    description: 'The client wanted authentic rustic materials that would withstand the mountain environment while maintaining the lodge aesthetic, but sourcing and coordinating these materials was complex.',
    solution: 'Selected reclaimed wood cabinetry, natural stone countertops, and hand-forged hardware, all sourced from sustainable suppliers and coordinated for an authentic mountain lodge look.'
  },
  {
    challenge: 'Mountain Environment Durability',
    description: 'The kitchen needed to withstand the harsh mountain environment with temperature fluctuations, humidity, and heavy use, requiring careful material selection and construction techniques.',
    solution: 'Used materials specifically chosen for mountain environments, including moisture-resistant finishes, durable hardware, and construction techniques that account for temperature and humidity changes.'
  },
  {
    challenge: 'Lodge Aesthetic Balance',
    description: 'The client wanted a rustic lodge feel but also needed modern functionality and convenience, requiring careful balance between authentic rustic elements and contemporary amenities.',
    solution: 'Designed a kitchen that combines authentic rustic materials with modern appliances and functionality, creating a space that feels like a mountain lodge but functions like a modern kitchen.'
  }
]

const features = [
  {
    feature: 'Reclaimed Wood Cabinetry',
    description: 'Handcrafted cabinetry from reclaimed wood with natural grain patterns and rustic character for authentic mountain lodge aesthetic',
    image: '/images/portfolio/lake-tahoe-cabinetry.webp'
  },
  {
    feature: 'Natural Stone Countertops',
    description: 'Durable natural stone countertops with rustic finishes that complement the mountain environment and lodge aesthetic',
    image: '/images/portfolio/lake-tahoe-countertops.webp'
  },
  {
    feature: 'Hand-Forged Hardware',
    description: 'Custom hand-forged hardware and fixtures that add authentic rustic character and mountain lodge charm',
    image: '/images/portfolio/lake-tahoe-hardware.webp'
  },
  {
    feature: 'Mountain View Integration',
    description: 'Large windows and open design that maximizes the stunning Lake Tahoe mountain views while maintaining functionality',
    image: '/images/portfolio/lake-tahoe-views.webp'
  }
]

const process = [
  {
    phase: 'Design & Planning',
    description: 'Collaborated with the client to understand their mountain lifestyle and vision, creating detailed 3D renderings and material selections.',
    duration: '3 weeks',
    deliverables: ['3D renderings', 'Material samples', 'Detailed specifications', 'Timeline planning']
  },
  {
    phase: 'Custom Fabrication',
    description: 'Our craftsmen built the custom cabinetry and rustic elements to exact specifications, ensuring authentic mountain lodge character.',
    duration: '8 weeks',
    deliverables: ['Custom cabinetry', 'Rustic elements', 'Hardware installation', 'Quality control']
  },
  {
    phase: 'Installation & Integration',
    description: 'Professional installation of all elements with mountain environment considerations and final quality inspections.',
    duration: '2 weeks',
    deliverables: ['Professional installation', 'Mountain integration', 'Final adjustments', 'Quality inspection']
  },
  {
    phase: 'Final Testing & Handover',
    description: 'Comprehensive testing of all systems and final client walkthrough in the mountain environment.',
    duration: '1 week',
    deliverables: ['System testing', 'Mountain testing', 'Client training', 'Final handover']
  }
]

const testimonials = [
  {
    name: 'Michael Rodriguez',
    location: 'Lake Tahoe, CA',
    quote: 'PineWood Cabinets created the perfect mountain lodge kitchen for our Lake Tahoe home. The rustic materials are beautiful and authentic, and the mountain views are now the star of the show. It\'s exactly what we envisioned for our mountain retreat.',
    rating: 5
  }
]

export default function LakeTahoeLodgeKitchenPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Portfolio', href: '/portfolio' },
              { name: 'Lake Tahoe Lodge Kitchen', href: '/portfolio/lake-tahoe-lodge-kitchen', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Lake Tahoe Lodge Kitchen"
        subtitle="Mountain Lodge Renovation Case Study"
        description="Explore how we transformed a Lake Tahoe home with a stunning mountain lodge kitchen featuring reclaimed wood cabinetry, natural materials, and alpine aesthetics."
        imageSrc="portfolio/lake-tahoe-lodge-kitchen-hero.webp"
        imageAlt="Beautiful mountain lodge kitchen in Lake Tahoe with reclaimed wood cabinetry and natural materials"
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
              A complete kitchen transformation that celebrates the mountain lifestyle with rustic materials and natural finishes.
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
              Discover the rustic materials and custom features that make this mountain lodge kitchen exceptional.
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
              Every project presents unique challenges. Here's how we solved them to create the perfect mountain lodge kitchen.
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
              Hear what our client has to say about their new mountain lodge kitchen.
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
            "name": "Lake Tahoe Lodge Kitchen Case Study",
            "description": "Explore our Lake Tahoe lodge kitchen renovation case study. See how we created a mountain lodge kitchen with rustic materials.",
            "creator": {
              "@type": "Organization",
              "name": "PineWood Cabinets",
              "url": "https://california-custom-kitchen.vercel.app"
            },
            "dateCreated": "2024",
            "locationCreated": {
              "@type": "Place",
              "name": "Lake Tahoe, CA"
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
