import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Custom Kitchens Newcastle | Luxury Cabinetry | AV\'s Cabinets',
  description: 'Custom kitchens and luxury cabinetry for Newcastle. AV\'s Cabinets brings European craftsmanship to Sacramento\'s wine country community.',
  keywords: 'custom kitchens Newcastle, luxury cabinetry Newcastle, wine country kitchens, rural charm kitchens Newcastle',
  openGraph: {
    title: 'Custom Kitchens Newcastle | AV\'s Cabinets',
    description: 'Custom kitchens and luxury cabinetry for Newcastle.',
    type: 'website',
  },
}

const newcastleProjects = [
  {
    id: 1,
    title: 'Wine Country Estate Kitchen',
    location: 'Newcastle, CA',
    description: 'A magnificent wine country estate kitchen renovation featuring custom walnut cabinetry and marble accents. Perfect for entertaining with integrated wine storage and tasting areas.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-79-sacramento-california.webp',
    alt: 'Wine country estate kitchen in Newcastle with custom walnut cabinetry',
    year: '2024'
  },
  {
    id: 2,
    title: 'Rural Vineyard Kitchen',
    location: 'Newcastle, CA',
    description: 'A rustic vineyard kitchen renovation featuring custom pine cabinetry and stone accents. Perfect for Newcastle\'s wine country setting and rural charm.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-80-sacramento-california.webp',
    alt: 'Rural vineyard kitchen in Newcastle with custom pine cabinetry',
    year: '2024'
  },
  {
    id: 3,
    title: 'Historic Farmhouse Kitchen',
    location: 'Newcastle, CA',
    description: 'A historic farmhouse kitchen renovation featuring custom oak cabinetry and period-appropriate details. Perfect for Newcastle\'s agricultural heritage.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-81-sacramento-california.webp',
    alt: 'Historic farmhouse kitchen in Newcastle with custom oak cabinetry',
    year: '2023'
  }
]

const newcastleFeatures = [
  {
    feature: 'Wine Country Setting',
    description: 'Newcastle is located in the heart of wine country, with vineyards and wineries that influence kitchen design and lifestyle.',
    details: ['Vineyard views', 'Wine storage', 'Tasting areas', 'Agricultural heritage']
  },
  {
    feature: 'Rural Charm',
    description: 'The community\'s rural charm creates unique opportunities for kitchen design that celebrates agricultural heritage and natural beauty.',
    details: ['Natural materials', 'Rustic elements', 'Outdoor integration', 'Country aesthetics']
  },
  {
    feature: 'Scenic Views',
    description: 'Newcastle\'s scenic views of vineyards and rolling hills provide inspiration for kitchen design that maximizes natural beauty.',
    details: ['Vineyard views', 'Rolling hills', 'Natural light', 'Outdoor connection']
  },
  {
    feature: 'Agricultural Heritage',
    description: 'The community\'s agricultural heritage influences kitchen design with traditional materials and craftsmanship that honors the farming tradition.',
    details: ['Traditional materials', 'Handcrafted details', 'Farming heritage', 'Rural craftsmanship']
  }
]

const newcastleFAQ = [
  {
    question: 'What makes Newcastle kitchens unique?',
    answer: 'Newcastle kitchens are characterized by their blend of wine country elegance and rural charm, often featuring wine storage, tasting areas, and designs that complement the community\'s agricultural heritage and scenic vineyard views.'
  },
  {
    question: 'How do you handle the wine country influence?',
    answer: 'We incorporate wine country elements like wine storage, tasting areas, and designs that complement the agricultural setting. We use materials and finishes that reflect the rustic elegance of wine country living while maintaining luxury standards.'
  },
  {
    question: 'Do you work with rural properties?',
    answer: 'Yes, we\'re experienced in working with rural properties and understand how to design kitchens that can handle the demands of country living while maintaining luxury standards and modern functionality.'
  },
  {
    question: 'What materials work best in Newcastle homes?',
    answer: 'Newcastle homes work beautifully with natural materials like oak, pine, and walnut that complement the rural setting. We also incorporate stone and tile elements that can handle the demands of country living.'
  },
  {
    question: 'How do you maximize vineyard views?',
    answer: 'We design kitchens with large windows, open layouts, and strategic placement of cabinetry to ensure unobstructed vineyard views. We also use materials and colors that complement the natural environment.'
  },
  {
    question: 'Do you work with historic farmhouses?',
    answer: 'Yes, we\'re experienced in working with historic farmhouses and understand how to preserve architectural integrity while incorporating modern functionality and luxury finishes that complement the agricultural heritage.'
  }
]

export default function NewcastlePage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Custom Kitchens Newcastle
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-french-gray">
              Luxury cabinetry and custom kitchens for Newcastle. Where European craftsmanship meets Sacramento\'s wine country community.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Wine Country Setting
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Rural Charm
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Scenic Views
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Agricultural Heritage
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
              Newcastle: Sacramento\'s Wine Country Gem
            </h2>
            <p className="text-xl text-charcoal/80 max-w-4xl mx-auto">
              Newcastle represents the perfect blend of wine country elegance and rural charm in the Sacramento area. With its vineyards, scenic views, and agricultural heritage, this community offers unique opportunities for kitchen design that celebrates both natural beauty and sophisticated taste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newcastleFeatures.map((feature, index) => (
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
              Recent Newcastle Commissions
            </h2>
            <p className="text-xl text-charcoal/80 max-w-4xl mx-auto">
              Each project represents a unique collaboration with Newcastle homeowners, creating spaces that honor both the community\'s wine country heritage and luxury lifestyle needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newcastleProjects.map((project) => (
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

      {/* Newcastle Lifestyle */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                The Newcastle Lifestyle
              </h2>
              <p className="text-xl text-charcoal/80 mb-8 leading-relaxed">
                Newcastle offers a unique lifestyle that combines wine country elegance with rural charm. Our kitchens are designed to support this lifestyle, from wine tasting and entertaining to enjoying the scenic vineyard views and agricultural heritage.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Wine Country Living</h3>
                    <p className="text-charcoal/70">Kitchens designed for wine country living with wine storage, tasting areas, and features that support the agricultural lifestyle and vineyard views.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Rural Elegance</h3>
                    <p className="text-charcoal/70">Designs that celebrate rural charm with natural materials, rustic elements, and craftsmanship that honors the agricultural heritage while maintaining luxury standards.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Scenic Integration</h3>
                    <p className="text-charcoal/70">Designs that maximize vineyard views and natural beauty with large windows, open layouts, and materials that complement the wine country setting.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/gallery-luxury-custom-kitchen-82-sacramento-california.webp"
                alt="Newcastle wine country lifestyle kitchen with vineyard views"
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
              Newcastle Kitchen FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchens in Newcastle.
            </p>
          </div>

          <div className="space-y-8">
            {newcastleFAQ.map((faq, index) => (
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
            Ready to Transform Your Newcastle Kitchen?
          </h2>
          <p className="text-xl text-ivory/90 mb-12 max-w-4xl mx-auto">
            Join the ranks of Newcastle homeowners who have chosen AV\'s Cabinets for their luxury kitchen renovations. Experience the perfect blend of European craftsmanship and wine country living.
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
