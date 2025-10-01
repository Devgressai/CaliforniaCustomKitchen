import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Custom Kitchens Loomis | Luxury Cabinetry | AV\'s Cabinets',
  description: 'Custom kitchens and luxury cabinetry for Loomis. AV\'s Cabinets brings European craftsmanship to Sacramento\'s charming equestrian community.',
  keywords: 'custom kitchens Loomis, luxury cabinetry Loomis, equestrian community kitchens, rural lifestyle kitchens Loomis',
  openGraph: {
    title: 'Custom Kitchens Loomis | AV\'s Cabinets',
    description: 'Custom kitchens and luxury cabinetry for Loomis.',
    type: 'website',
  },
}

const loomisProjects = [
  {
    id: 1,
    title: 'Equestrian Estate Kitchen',
    location: 'Loomis, CA',
    description: 'A magnificent equestrian estate kitchen renovation featuring custom oak cabinetry and butcher block countertops. Perfect for the rural lifestyle with mudroom integration.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-75-sacramento-california.webp',
    alt: 'Equestrian estate kitchen in Loomis with custom oak cabinetry',
    year: '2024'
  },
  {
    id: 2,
    title: 'Rural Ranch Kitchen',
    location: 'Loomis, CA',
    description: 'A classic ranch kitchen renovation featuring custom pine cabinetry and stone accents. Perfect for Loomis\' rural lifestyle and large properties.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-76-sacramento-california.webp',
    alt: 'Rural ranch kitchen in Loomis with custom pine cabinetry',
    year: '2024'
  },
  {
    id: 3,
    title: 'Charming Downtown Kitchen',
    location: 'Loomis, CA',
    description: 'A charming downtown kitchen renovation featuring custom maple cabinetry and vintage details. Perfect for Loomis\' historic charm and small-town atmosphere.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-77-sacramento-california.webp',
    alt: 'Charming downtown kitchen in Loomis with custom maple cabinetry',
    year: '2023'
  }
]

const loomisFeatures = [
  {
    feature: 'Equestrian Community',
    description: 'Loomis is known for its equestrian lifestyle, with many properties featuring horse facilities and rural amenities that influence kitchen design.',
    details: ['Horse facilities', 'Rural amenities', 'Equestrian events', 'Trail access']
  },
  {
    feature: 'Large Properties',
    description: 'The community\'s large properties provide unique opportunities for kitchen design that can accommodate both indoor and outdoor living.',
    details: ['Spacious layouts', 'Outdoor integration', 'Entertainment areas', 'Storage solutions']
  },
  {
    feature: 'Rural Lifestyle',
    description: 'The rural lifestyle creates unique needs for durable materials and designs that can handle the demands of country living.',
    details: ['Durable materials', 'Easy maintenance', 'Mudroom features', 'Country aesthetics']
  },
  {
    feature: 'Historic Charm',
    description: 'Loomis\' historic downtown and charming atmosphere influence kitchen design with vintage details and traditional craftsmanship.',
    details: ['Historic details', 'Traditional craftsmanship', 'Vintage elements', 'Small-town charm']
  }
]

const loomisFAQ = [
  {
    question: 'What makes Loomis kitchens unique?',
    answer: 'Loomis kitchens are characterized by their blend of rural functionality and luxury design, often featuring durable materials, mudroom integration, and designs that complement the equestrian lifestyle and large properties common in this community.'
  },
  {
    question: 'How do you handle the equestrian lifestyle?',
    answer: 'We understand the unique needs of the equestrian community and design kitchens with mudroom features, durable materials, and layouts that can handle the demands of country living while maintaining luxury standards.'
  },
  {
    question: 'Do you work with large properties?',
    answer: 'Yes, we\'re experienced in working with large properties and understand how to design kitchens that can accommodate both indoor and outdoor living, entertainment, and the spacious layouts common in Loomis.'
  },
  {
    question: 'What materials work best in Loomis homes?',
    answer: 'Loomis homes work beautifully with natural materials like oak, pine, and maple that complement the rural setting. We also incorporate stone and tile elements that can handle the demands of country living.'
  },
  {
    question: 'How do you integrate mudroom features?',
    answer: 'We design kitchens with integrated mudroom features, durable flooring, and storage solutions that can handle the demands of equestrian and rural living while maintaining luxury aesthetics.'
  },
  {
    question: 'Do you work with historic homes?',
    answer: 'Yes, we\'re experienced in working with historic homes and understand how to preserve architectural integrity while incorporating modern functionality and luxury finishes that complement the historic charm of Loomis.'
  }
]

export default function LoomisPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Custom Kitchens Loomis
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-french-gray">
              Luxury cabinetry and custom kitchens for Loomis. Where European craftsmanship meets Sacramento\'s charming equestrian community.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Equestrian Community
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Large Properties
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Rural Lifestyle
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Historic Charm
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
              Loomis: Sacramento\'s Equestrian Gem
            </h2>
            <p className="text-xl text-charcoal/80 max-w-4xl mx-auto">
              Loomis represents the perfect blend of rural charm and luxury living in the Sacramento area. With its equestrian community, large properties, and historic downtown, this community offers unique opportunities for kitchen design that celebrates both country living and sophisticated taste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {loomisFeatures.map((feature, index) => (
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
              Recent Loomis Commissions
            </h2>
            <p className="text-xl text-charcoal/80 max-w-4xl mx-auto">
              Each project represents a unique collaboration with Loomis homeowners, creating spaces that honor both the community\'s rural heritage and luxury lifestyle needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loomisProjects.map((project) => (
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

      {/* Loomis Lifestyle */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                The Loomis Lifestyle
              </h2>
              <p className="text-xl text-charcoal/80 mb-8 leading-relaxed">
                Loomis offers a unique lifestyle that combines rural charm with luxury living. Our kitchens are designed to support this lifestyle, from equestrian activities to entertaining in large properties and enjoying the historic downtown.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Equestrian Integration</h3>
                    <p className="text-charcoal/70">Kitchens designed for equestrian living with mudroom features, durable materials, and layouts that can handle the demands of country life while maintaining luxury standards.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Large Property Living</h3>
                    <p className="text-charcoal/70">Designs that take advantage of large properties with spacious layouts, outdoor integration, and features that support both indoor and outdoor entertaining.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Historic Charm</h3>
                    <p className="text-charcoal/70">Designs that celebrate Loomis\' historic charm with traditional craftsmanship, vintage details, and materials that complement the small-town atmosphere.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/gallery-luxury-custom-kitchen-78-sacramento-california.webp"
                alt="Loomis equestrian lifestyle kitchen with mudroom features"
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
              Loomis Kitchen FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchens in Loomis.
            </p>
          </div>

          <div className="space-y-8">
            {loomisFAQ.map((faq, index) => (
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
            Ready to Transform Your Loomis Kitchen?
          </h2>
          <p className="text-xl text-ivory/90 mb-12 max-w-4xl mx-auto">
            Join the ranks of Loomis homeowners who have chosen AV\'s Cabinets for their luxury kitchen renovations. Experience the perfect blend of European craftsmanship and equestrian community living.
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
