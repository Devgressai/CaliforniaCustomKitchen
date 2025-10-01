import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Custom Kitchens Grass Valley | Luxury Cabinetry | AV\'s Cabinets',
  description: 'Custom kitchens and luxury cabinetry for Grass Valley. AV\'s Cabinets brings European craftsmanship to Sacramento\'s historic Gold Rush town.',
  keywords: 'custom kitchens Grass Valley, luxury cabinetry Grass Valley, Gold Rush town kitchens, Victorian architecture kitchens Grass Valley',
  openGraph: {
    title: 'Custom Kitchens Grass Valley | AV\'s Cabinets',
    description: 'Custom kitchens and luxury cabinetry for Grass Valley.',
    type: 'website',
  },
}

const grassValleyProjects = [
  {
    id: 1,
    title: 'Victorian Heritage Kitchen',
    location: 'Grass Valley, CA',
    description: 'A magnificent Victorian heritage kitchen renovation featuring custom fir cabinetry and period-appropriate details. Perfect for Grass Valley\'s Gold Rush history and Victorian architecture.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-87-sacramento-california.webp',
    alt: 'Victorian heritage kitchen in Grass Valley with custom fir cabinetry',
    year: '2024'
  },
  {
    id: 2,
    title: 'Gold Rush Historic Kitchen',
    location: 'Grass Valley, CA',
    description: 'A historic Gold Rush kitchen renovation featuring custom oak cabinetry and traditional craftsmanship. Perfect for Grass Valley\'s mining heritage and historic downtown.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-88-sacramento-california.webp',
    alt: 'Gold Rush historic kitchen in Grass Valley with custom oak cabinetry',
    year: '2024'
  },
  {
    id: 3,
    title: 'Cultural District Kitchen',
    location: 'Grass Valley, CA',
    description: 'A cultural district kitchen renovation featuring custom maple cabinetry and artistic details. Perfect for Grass Valley\'s cultural attractions and artistic community.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-89-sacramento-california.webp',
    alt: 'Cultural district kitchen in Grass Valley with custom maple cabinetry',
    year: '2023'
  }
]

const grassValleyFeatures = [
  {
    feature: 'Gold Rush History',
    description: 'Grass Valley is rich in Gold Rush history, with historic downtown and buildings that influence kitchen design with period-appropriate details and traditional craftsmanship.',
    details: ['Historic downtown', 'Gold Rush buildings', 'Mining heritage', 'Period details']
  },
  {
    feature: 'Victorian Architecture',
    description: 'The community\'s Victorian architecture creates unique opportunities for kitchen design that celebrates ornate details and historic charm.',
    details: ['Ornate details', 'Victorian styling', 'Historic charm', 'Period architecture']
  },
  {
    feature: 'Cultural Attractions',
    description: 'Grass Valley\'s cultural attractions and artistic community influence kitchen design with creative elements and artistic details.',
    details: ['Cultural events', 'Artistic community', 'Creative elements', 'Cultural heritage']
  },
  {
    feature: 'Historic Downtown',
    description: 'The community\'s historic downtown provides inspiration for kitchen design that celebrates local character and historic charm.',
    details: ['Local character', 'Historic charm', 'Small town atmosphere', 'Community values']
  }
]

const grassValleyFAQ = [
  {
    question: 'What makes Grass Valley kitchens unique?',
    answer: 'Grass Valley kitchens are characterized by their blend of historic charm and cultural heritage, often featuring Victorian details, period-appropriate materials, and designs that complement the community\'s Gold Rush history and artistic community.'
  },
  {
    question: 'How do you handle the Victorian architecture?',
    answer: 'We\'re experienced in working with Victorian homes and understand how to preserve architectural integrity while incorporating modern functionality. We use period-appropriate materials and techniques while ensuring contemporary comfort and luxury.'
  },
  {
    question: 'Do you work with historic buildings?',
    answer: 'Yes, we\'re experienced in working with historic buildings and understand how to preserve architectural integrity while incorporating modern functionality and luxury finishes that complement the historic character.'
  },
  {
    question: 'What materials work best in Grass Valley homes?',
    answer: 'Grass Valley homes work beautifully with traditional materials like fir, oak, and maple that complement the Victorian setting. We also incorporate period-appropriate details and finishes that honor the historic heritage.'
  },
  {
    question: 'How do you celebrate the Gold Rush heritage?',
    answer: 'We design kitchens with period-appropriate details, traditional craftsmanship, and materials that honor the Gold Rush heritage while incorporating modern functionality and luxury finishes.'
  },
  {
    question: 'Do you work with the artistic community?',
    answer: 'Yes, we understand the artistic community and design kitchens with creative elements, unique details, and features that support the cultural lifestyle while maintaining luxury standards and historic integrity.'
  }
]

export default function GrassValleyPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Custom Kitchens Grass Valley
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-french-gray">
              Luxury cabinetry and custom kitchens for Grass Valley. Where European craftsmanship meets Sacramento\'s historic Gold Rush town.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Gold Rush History
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Victorian Architecture
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Cultural Attractions
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Historic Downtown
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Community Overview */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Grass Valley: Sacramento\'s Historic Gold Rush Gem
            </h2>
            <p className="text-xl text-charcoal/80 max-w-4xl mx-auto">
              Grass Valley represents the perfect blend of historic charm and cultural heritage in the Sacramento area. With its Gold Rush history, Victorian architecture, and cultural attractions, this community offers unique opportunities for kitchen design that celebrates both history and artistic expression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {grassValleyFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold text-charcoal mb-4">{feature.feature}</h3>
                <p className="text-charcoal/70 mb-4 leading-relaxed">{feature.description}</p>
                <div className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-sm text-charcoal/60">
                      <div className="w-2 h-2 bg-deep-green rounded-full mr-3"></div>
                      {detail}
                    </div>
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
              Recent Grass Valley Commissions
            </h2>
            <p className="text-xl text-charcoal/80 max-w-4xl mx-auto">
              Each project represents a unique collaboration with Grass Valley homeowners, creating spaces that honor both the community\'s historic heritage and cultural lifestyle needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {grassValleyProjects.map((project) => (
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

      {/* Grass Valley Lifestyle */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                The Grass Valley Lifestyle
              </h2>
              <p className="text-xl text-charcoal/80 mb-8 leading-relaxed">
                Grass Valley offers a unique lifestyle that combines historic charm with cultural richness. Our kitchens are designed to support this lifestyle, from celebrating the Gold Rush heritage to enjoying cultural events and artistic expression.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Historic Heritage</h3>
                    <p className="text-charcoal/70">Kitchens designed to celebrate Grass Valley\'s Gold Rush heritage with period-appropriate details, traditional craftsmanship, and materials that honor the historic downtown and Victorian architecture.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Cultural Richness</h3>
                    <p className="text-charcoal/70">Designs that celebrate the artistic community and cultural attractions with creative elements, unique details, and features that support the cultural lifestyle.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Victorian Elegance</h3>
                    <p className="text-charcoal/70">Designs that honor the Victorian architecture with ornate details, period-appropriate materials, and craftsmanship that celebrates the historic charm while maintaining luxury standards.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/gallery-luxury-custom-kitchen-90-sacramento-california.webp"
                alt="Grass Valley historic lifestyle kitchen with Victorian details"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Grass Valley Kitchen FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchens in Grass Valley.
            </p>
          </div>

          <div className="space-y-8">
            {grassValleyFAQ.map((faq, index) => (
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
            Ready to Transform Your Grass Valley Kitchen?
          </h2>
          <p className="text-xl text-ivory/90 mb-12 max-w-4xl mx-auto">
            Join the ranks of Grass Valley homeowners who have chosen AV\'s Cabinets for their luxury kitchen renovations. Experience the perfect blend of European craftsmanship and historic Gold Rush living.
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
