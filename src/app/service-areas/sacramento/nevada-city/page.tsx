import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Custom Kitchens Nevada City | Luxury Cabinetry | AV\'s Cabinets',
  description: 'Custom kitchens and luxury cabinetry for Nevada City. AV\'s Cabinets brings European craftsmanship to Sacramento\'s charming historic town.',
  keywords: 'custom kitchens Nevada City, luxury cabinetry Nevada City, historic town kitchens, Victorian architecture kitchens Nevada City',
  openGraph: {
    title: 'Custom Kitchens Nevada City | AV\'s Cabinets',
    description: 'Custom kitchens and luxury cabinetry for Nevada City.',
    type: 'website',
  },
}

const nevadaCityProjects = [
  {
    id: 1,
    title: 'Victorian Historic Kitchen',
    location: 'Nevada City, CA',
    description: 'A magnificent Victorian historic kitchen renovation featuring custom fir cabinetry and period-appropriate details. Perfect for Nevada City\'s Victorian architecture and historic charm.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-91-sacramento-california.webp',
    alt: 'Victorian historic kitchen in Nevada City with custom fir cabinetry',
    year: '2024'
  },
  {
    id: 2,
    title: 'Artistic Community Kitchen',
    location: 'Nevada City, CA',
    description: 'A creative artistic community kitchen renovation featuring custom maple cabinetry and unique details. Perfect for Nevada City\'s artistic community and cultural events.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-92-sacramento-california.webp',
    alt: 'Artistic community kitchen in Nevada City with custom maple cabinetry',
    year: '2024'
  },
  {
    id: 3,
    title: 'Historic Downtown Kitchen',
    location: 'Nevada City, CA',
    description: 'A charming historic downtown kitchen renovation featuring custom oak cabinetry and vintage details. Perfect for Nevada City\'s historic downtown and small-town charm.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-93-sacramento-california.webp',
    alt: 'Historic downtown kitchen in Nevada City with custom oak cabinetry',
    year: '2023'
  }
]

const nevadaCityFeatures = [
  {
    feature: 'Victorian Architecture',
    description: 'Nevada City is known for its Victorian architecture, with ornate details and historic charm that influence kitchen design with period-appropriate elements.',
    details: ['Ornate details', 'Victorian styling', 'Historic charm', 'Period architecture']
  },
  {
    feature: 'Artistic Community',
    description: 'The community\'s artistic community creates unique opportunities for kitchen design with creative elements and unique details that celebrate artistic expression.',
    details: ['Creative elements', 'Artistic expression', 'Cultural events', 'Unique details']
  },
  {
    feature: 'Historic Charm',
    description: 'Nevada City\'s historic charm creates opportunities for kitchen design that celebrates local character and historic heritage.',
    details: ['Local character', 'Historic heritage', 'Small town charm', 'Community values']
  },
  {
    feature: 'Cultural Events',
    description: 'The community\'s cultural events and festivals influence kitchen design with features that support entertaining and cultural activities.',
    details: ['Cultural festivals', 'Entertaining features', 'Community events', 'Social activities']
  }
]

const nevadaCityFAQ = [
  {
    question: 'What makes Nevada City kitchens unique?',
    answer: 'Nevada City kitchens are characterized by their blend of Victorian elegance and artistic creativity, often featuring ornate details, unique artistic elements, and designs that complement the community\'s historic charm and artistic community.'
  },
  {
    question: 'How do you handle the Victorian architecture?',
    answer: 'We\'re experienced in working with Victorian homes and understand how to preserve architectural integrity while incorporating modern functionality. We use period-appropriate materials and techniques while ensuring contemporary comfort and luxury.'
  },
  {
    question: 'Do you work with the artistic community?',
    answer: 'Yes, we understand the artistic community and design kitchens with creative elements, unique details, and features that support artistic expression while maintaining luxury standards and historic integrity.'
  },
  {
    question: 'What materials work best in Nevada City homes?',
    answer: 'Nevada City homes work beautifully with traditional materials like fir, oak, and maple that complement the Victorian setting. We also incorporate period-appropriate details and artistic elements that honor the historic heritage.'
  },
  {
    question: 'How do you celebrate the historic charm?',
    answer: 'We design kitchens with period-appropriate details, traditional craftsmanship, and materials that honor the historic charm while incorporating modern functionality and luxury finishes that complement the Victorian architecture.'
  },
  {
    question: 'Do you work with cultural events?',
    answer: 'Yes, we understand the importance of cultural events and design kitchens with features that support entertaining, cultural activities, and community gatherings while maintaining luxury standards and historic character.'
  }
]

export default function NevadaCityPage() {
  return (
    
      <!-- SEO-Optimized Heading Structure -->
      <div className="heading-structure" style="display: none;">
        <h1>Custom Kitchens in nevada-city | Luxury Cabinetry</h1>
        <h2>Luxury Kitchen Design in nevada-city</h2><h2>Premium Materials & Craftsmanship</h2><h2>Local Kitchen Design Expertise</h2><h2>Custom Kitchen Services</h2><h2>Why Choose Us for nevada-city Kitchens</h2><h2>Frequently Asked Questions</h2>
        <h3>Custom Kitchen Design</h3><h3>Bespoke Cabinetry Services</h3><h3>Kitchen Remodeling</h3><h3>Cabinet Hardware Selection</h3><h3>Kitchen Lighting Design</h3><h3>Appliance Integration</h3>
      </div>
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">Custom Kitchens in nevada-city | Luxury Cabinetry</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-french-gray">
              Luxury cabinetry and custom kitchens for Nevada City. Where European craftsmanship meets Sacramento\'s charming historic town.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Victorian Architecture
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Artistic Community
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Historic Charm
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Cultural Events
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Community Overview */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in nevada-city</h2>
            <p className="text-xl text-charcoal/80 max-w-4xl mx-auto">
              Nevada City represents the perfect blend of Victorian elegance and artistic creativity in the Sacramento area. With its Victorian architecture, artistic community, and historic charm, this community offers unique opportunities for kitchen design that celebrates both history and artistic expression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nevadaCityFeatures.map((feature, index) => (
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in nevada-city</h2>
            <p className="text-xl text-charcoal/80 max-w-4xl mx-auto">
              Each project represents a unique collaboration with Nevada City homeowners, creating spaces that honor both the community\'s historic heritage and artistic lifestyle needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nevadaCityProjects.map((project) => (
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

      {/* Nevada City Lifestyle */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in nevada-city</h2>
              <p className="text-xl text-charcoal/80 mb-8 leading-relaxed">
                Nevada City offers a unique lifestyle that combines Victorian elegance with artistic creativity. Our kitchens are designed to support this lifestyle, from celebrating the historic charm to enjoying cultural events and artistic expression.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Victorian Elegance</h3>
                    <p className="text-charcoal/70">Kitchens designed to celebrate Nevada City\'s Victorian architecture with ornate details, period-appropriate materials, and craftsmanship that honors the historic charm while maintaining luxury standards.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Artistic Creativity</h3>
                    <p className="text-charcoal/70">Designs that celebrate the artistic community with creative elements, unique details, and features that support artistic expression and cultural activities.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Cultural Richness</h3>
                    <p className="text-charcoal/70">Designs that support cultural events and community gatherings with entertaining features and layouts that can accommodate the social aspects of Nevada City life.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/gallery-luxury-custom-kitchen-94-sacramento-california.webp"
                alt="Nevada City Victorian lifestyle kitchen with artistic details"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in nevada-city</h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchens in Nevada City.
            </p>
          </div>

          <div className="space-y-8">
            {nevadaCityFAQ.map((faq, index) => (
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Luxury Kitchen Design in nevada-city</h2>
          <p className="text-xl text-ivory/90 mb-12 max-w-4xl mx-auto">
            Join the ranks of Nevada City homeowners who have chosen AV\'s Cabinets for their luxury kitchen renovations. Experience the perfect blend of European craftsmanship and Victorian historic living.
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
