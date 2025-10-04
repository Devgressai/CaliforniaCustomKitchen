import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Custom Kitchens Sacramento | Luxury Cabinetry | AV\'s Cabinets California',
  description: 'Custom kitchens and luxury cabinetry for Sacramento and surrounding areas. AV\'s Cabinets brings European craftsmanship to El Dorado Hills, Roseville, Loomis, Newcastle, Auburn, Grass Valley, and Nevada City.',
  keywords: 'custom kitchens Sacramento, luxury cabinetry Sacramento, El Dorado Hills kitchens, Roseville kitchens, Loomis kitchens, Newcastle kitchens, Auburn kitchens, Grass Valley kitchens, Nevada City kitchens',
  openGraph: {
    title: 'Custom Kitchens Sacramento | Luxury Cabinetry | AV\'s Cabinets California',
    description: 'Custom kitchens and luxury cabinetry for Sacramento and surrounding areas.',
    type: 'website',
  },
}

const featuredProjects = [
  {
    id: 1,
    title: 'El Dorado Hills Estate Kitchen',
    location: 'El Dorado Hills, CA',
    description: 'A magnificent estate kitchen renovation featuring custom cherry cabinetry and granite countertops. Designed for the most discerning El Dorado Hills homeowners who appreciate both luxury and functionality.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-60-sacramento-california.webp',
    alt: 'Luxury estate kitchen in El Dorado Hills with custom cherry cabinetry',
    year: '2024'
  },
  {
    id: 2,
    title: 'Roseville Contemporary Kitchen',
    location: 'Roseville, CA',
    description: 'A contemporary kitchen renovation featuring custom maple cabinetry and quartz countertops. Perfect for the modern lifestyle of Roseville\'s growing community.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-61-sacramento-california.webp',
    alt: 'Contemporary kitchen in Roseville with custom maple cabinetry',
    year: '2024'
  },
  {
    id: 3,
    title: 'Loomis Ranch Kitchen',
    location: 'Loomis, CA',
    description: 'A classic ranch kitchen renovation featuring custom oak cabinetry and butcher block countertops. Perfect for Loomis\' rural lifestyle and equestrian community.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-62-sacramento-california.webp',
    alt: 'Ranch kitchen in Loomis with custom oak cabinetry',
    year: '2023'
  },
  {
    id: 4,
    title: 'Newcastle Modern Kitchen',
    location: 'Newcastle, CA',
    description: 'A modern kitchen renovation featuring custom walnut cabinetry and marble accents. Designed to complement Newcastle\'s wine country setting.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-63-sacramento-california.webp',
    alt: 'Modern kitchen in Newcastle with custom walnut cabinetry',
    year: '2024'
  },
  {
    id: 5,
    title: 'Auburn Mountain Kitchen',
    location: 'Auburn, CA',
    description: 'A mountain-style kitchen renovation featuring custom pine cabinetry and stone accents. Perfect for Auburn\'s foothill location and outdoor lifestyle.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-64-sacramento-california.webp',
    alt: 'Mountain kitchen in Auburn with custom pine cabinetry',
    year: '2023'
  },
  {
    id: 6,
    title: 'Grass Valley Historic Kitchen',
    location: 'Grass Valley, CA',
    description: 'A historic home kitchen renovation featuring custom fir cabinetry and period-appropriate details. Perfect for Grass Valley\'s Gold Rush heritage.',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-65-sacramento-california.webp',
    alt: 'Historic kitchen in Grass Valley with custom fir cabinetry',
    year: '2023'
  }
]

const sacramentoCommunities = [
  {
    name: 'El Dorado Hills',
    description: 'An upscale master-planned community known for its rolling hills, golf courses, and luxury homes.',
    averageHomeValue: '$1.2M',
    keyFeatures: ['Master-planned community', 'Golf courses', 'Rolling hills', 'Luxury homes'],
    href: '/service-areas/sacramento/el-dorado-hills'
  },
  {
    name: 'Roseville',
    description: 'A growing city known for its excellent schools, shopping, and family-friendly atmosphere.',
    averageHomeValue: '$750K',
    keyFeatures: ['Excellent schools', 'Shopping centers', 'Family-friendly', 'Growing community'],
    href: '/service-areas/sacramento/roseville'
  },
  {
    name: 'Loomis',
    description: 'A charming rural community known for its equestrian lifestyle and large properties.',
    averageHomeValue: '$850K',
    keyFeatures: ['Rural lifestyle', 'Equestrian community', 'Large properties', 'Charming downtown'],
    href: '/service-areas/sacramento/loomis'
  },
  {
    name: 'Newcastle',
    description: 'A wine country community known for its vineyards and rural charm.',
    averageHomeValue: '$950K',
    keyFeatures: ['Wine country', 'Vineyards', 'Rural charm', 'Scenic views'],
    href: '/service-areas/sacramento/newcastle'
  },
  {
    name: 'Auburn',
    description: 'A historic foothill community known for its Gold Rush heritage and outdoor recreation.',
    averageHomeValue: '$650K',
    keyFeatures: ['Gold Rush heritage', 'Outdoor recreation', 'Historic downtown', 'Foothill location'],
    href: '/service-areas/sacramento/auburn'
  },
  {
    name: 'Grass Valley',
    description: 'A historic Gold Rush town known for its Victorian architecture and cultural attractions.',
    averageHomeValue: '$600K',
    keyFeatures: ['Gold Rush history', 'Victorian architecture', 'Cultural attractions', 'Historic downtown'],
    href: '/service-areas/sacramento/grass-valley'
  },
  {
    name: 'Nevada City',
    description: 'A charming historic town known for its Victorian architecture and artistic community.',
    averageHomeValue: '$700K',
    keyFeatures: ['Victorian architecture', 'Artistic community', 'Historic charm', 'Cultural events'],
    href: '/service-areas/sacramento/nevada-city'
  }
]

const architecturalStyles = [
  {
    style: 'Contemporary Estate',
    description: 'Sacramento\'s contemporary estate homes feature clean lines, open floor plans, and modern amenities. Our cabinetry complements these elements with sleek designs and premium materials that reflect the region\'s growing sophistication.',
    characteristics: ['Clean lines', 'Open floor plans', 'Modern amenities', 'Sleek designs', 'Premium materials'],
    communities: ['El Dorado Hills', 'Roseville', 'Newcastle']
  },
  {
    style: 'Rural Ranch',
    description: 'Loomis and Auburn\'s ranch homes feature natural materials, open floor plans, and connection to the land. Our cabinetry honors this tradition with reclaimed materials and handcrafted details that complement the rural lifestyle.',
    characteristics: ['Natural materials', 'Open floor plans', 'Connection to land', 'Reclaimed materials', 'Handcrafted details'],
    communities: ['Loomis', 'Auburn', 'Grass Valley']
  },
  {
    style: 'Victorian Historic',
    description: 'Grass Valley and Nevada City\'s Victorian homes feature ornate details, historic charm, and period architecture. Our cabinetry complements these elements with period-appropriate designs and materials that honor the architectural heritage.',
    characteristics: ['Ornate details', 'Historic charm', 'Period architecture', 'Period-appropriate design', 'Victorian styling'],
    communities: ['Grass Valley', 'Nevada City']
  },
  {
    style: 'Wine Country',
    description: 'Newcastle\'s wine country homes feature rustic elegance, natural materials, and vineyard views. Our cabinetry reflects this aesthetic with warm wood tones and traditional joinery that complements the agricultural setting.',
    characteristics: ['Rustic elegance', 'Natural materials', 'Vineyard views', 'Warm wood tones', 'Traditional joinery'],
    communities: ['Newcastle', 'El Dorado Hills']
  }
]

const sacramentoFAQ = [
  {
    question: 'What makes Sacramento area kitchens unique?',
    answer: 'Sacramento area kitchens are characterized by their blend of urban sophistication and rural charm, often featuring materials that complement the region\'s diverse architectural heritage from Victorian historic homes to contemporary estates. The area\'s growing economy and wine country proximity also influence design trends.'
  },
  {
    question: 'How do you handle the Sacramento area\'s diverse architectural styles?',
    answer: 'We\'re experienced in working with the Sacramento area\'s diverse architectural heritage, from Victorian homes in Grass Valley and Nevada City to contemporary estates in El Dorado Hills. We ensure all our designs complement the existing architecture while incorporating modern functionality and luxury finishes.'
  },
  {
    question: 'Do you work with historic homes in Grass Valley and Nevada City?',
    answer: 'Yes, we\'re experienced in working with historic homes and understand the importance of preserving architectural integrity. We use period-appropriate materials and techniques while incorporating modern functionality that meets contemporary living standards.'
  },
  {
    question: 'What materials work best in Sacramento area homes?',
    answer: 'Sacramento area homes work beautifully with natural materials like oak, cherry, and maple. We also incorporate stone and tile elements that complement the region\'s diverse architectural styles, from Victorian to contemporary.'
  },
  {
    question: 'How do you handle the wine country influence in Newcastle?',
    answer: 'We incorporate wine country elements like wine storage, tasting areas, and designs that complement the agricultural setting. We use materials and finishes that reflect the rustic elegance of wine country living while maintaining luxury standards.'
  },
  {
    question: 'Do you work with the equestrian community in Loomis?',
    answer: 'Yes, we understand the unique needs of the equestrian community, including durable materials that can handle the rural lifestyle, mudroom features, and designs that complement the large properties and outdoor lifestyle common in Loomis.'
  }
]

const localMarketInsights = [
  {
    insight: 'Growing Economy',
    description: 'Sacramento\'s growing economy and proximity to Silicon Valley has increased demand for luxury kitchen renovations, with many tech workers relocating to the area.',
    data: 'Growth Rate: 15%'
  },
  {
    insight: 'Wine Country Proximity',
    description: 'The region\'s proximity to wine country influences kitchen design, with many clients requesting wine storage and entertainment features.',
    data: 'Wine Features: 60%'
  },
  {
    insight: 'Historic Preservation',
    description: 'Many communities have historic homes requiring specialized knowledge of period-appropriate design and materials.',
    data: 'Historic Properties: 30%'
  },
  {
    insight: 'Rural Lifestyle',
    description: 'The area\'s rural lifestyle influences kitchen design, with many clients requesting durable materials and outdoor living integration.',
    data: 'Rural Properties: 40%'
  }
]

export default function SacramentoPage() {
  return (
    
      <!-- SEO-Optimized Heading Structure -->
      <div className="heading-structure" style="display: none;">
        <h1>Custom Kitchens in sacramento | Luxury Cabinetry</h1>
        <h2>Luxury Kitchen Design in sacramento</h2><h2>Premium Materials & Craftsmanship</h2><h2>Local Kitchen Design Expertise</h2><h2>Custom Kitchen Services</h2><h2>Why Choose Us for sacramento Kitchens</h2><h2>Frequently Asked Questions</h2>
        <h3>Custom Kitchen Design</h3><h3>Bespoke Cabinetry Services</h3><h3>Kitchen Remodeling</h3><h3>Cabinet Hardware Selection</h3><h3>Kitchen Lighting Design</h3><h3>Appliance Integration</h3>
      </div>
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">Custom Kitchens in sacramento | Luxury Cabinetry</h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-french-gray">
              Luxury cabinetry and custom kitchens for Sacramento and surrounding areas. Where European craftsmanship meets California\'s capital region.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                El Dorado Hills
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Roseville
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Loomis
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                Grass Valley
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in sacramento</h2>
            <p className="text-xl text-charcoal/80 max-w-4xl mx-auto">
              The Sacramento area represents a unique blend of urban sophistication and rural charm, offering diverse opportunities for luxury kitchen design. From El Dorado Hills\' master-planned communities to Grass Valley\'s historic Gold Rush architecture, our region showcases the best of California\'s capital region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {localMarketInsights.map((insight, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-deep-green mb-2">{insight.data}</div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">{insight.insight}</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Styles */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in sacramento</h2>
            <p className="text-xl text-charcoal/80 max-w-4xl mx-auto">
              Our cabinetry designs honor the Sacramento area\'s diverse architectural heritage while incorporating modern luxury and functionality. From Victorian historic homes to contemporary estates, we create kitchens that perfectly complement each architectural style.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {architecturalStyles.map((style, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-french-gray/20">
                <h3 className="text-2xl font-semibold text-charcoal mb-4">{style.style}</h3>
                <p className="text-charcoal/70 mb-6 leading-relaxed">{style.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-charcoal mb-2">Key Characteristics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {style.characteristics.map((characteristic, idx) => (
                      <span key={idx} className="bg-french-gray/20 text-charcoal px-3 py-1 rounded-full text-sm">
                        {characteristic}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-charcoal mb-2">Communities:</h4>
                  <p className="text-charcoal/70 text-sm">{style.communities.join(', ')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in sacramento</h2>
            <p className="text-xl text-charcoal/80 max-w-4xl mx-auto">
              Each project represents a unique collaboration with Sacramento area homeowners, creating spaces that honor both architectural heritage and contemporary luxury while reflecting the region\'s diverse lifestyle and culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
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

      {/* Communities Grid */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Luxury Kitchen Design in sacramento</h2>
            <p className="text-xl text-french-gray max-w-4xl mx-auto">
              We serve the Sacramento area\'s most prestigious communities, each with its own unique character, architectural requirements, and lifestyle. From master-planned El Dorado Hills to historic Grass Valley, we understand the nuances of each community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sacramentoCommunities.map((community, index) => (
              <Link key={index} href={community.href} className="group block">
                <div className="bg-white/10 hover:bg-white/20 rounded-lg p-6 transition-all duration-300 group-hover:scale-105">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-brass transition-colors duration-200">
                    {community.name}
                  </h3>
                  <p className="text-french-gray mb-4 leading-relaxed">{community.description}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-brass">{community.averageHomeValue}</span>
                    <span className="text-french-gray ml-2">average home value</span>
                  </div>
                  <div className="space-y-2">
                    {community.keyFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-french-gray">
                        <div className="w-2 h-2 bg-brass rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sacramento Lifestyle */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in sacramento</h2>
              <p className="text-xl text-charcoal/80 mb-8 leading-relaxed">
                The Sacramento area\'s unique lifestyle influences every aspect of kitchen design. From the region\'s growing tech economy to its wine country proximity and historic heritage, our kitchens are designed to support the diverse needs of Sacramento area residents while celebrating the region\'s rich culture.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Growing Tech Economy</h3>
                    <p className="text-charcoal/70">Kitchens designed for tech professionals with smart home integration, modern amenities, and contemporary styling that reflects the region\'s growing sophistication.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Wine Country Proximity</h3>
                    <p className="text-charcoal/70">Features like wine storage, tasting areas, and entertainment spaces that support the region\'s wine country culture and agricultural heritage.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-deep-green/20 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-3 h-3 bg-deep-green rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Historic Heritage</h3>
                    <p className="text-charcoal/70">Designs that celebrate the region\'s Gold Rush heritage and Victorian architecture while incorporating modern functionality and luxury finishes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/portfolio/gallery-luxury-custom-kitchen-66-sacramento-california.webp"
                alt="Sacramento area lifestyle kitchen with wine country elements"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in sacramento</h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchens in Sacramento area communities.
            </p>
          </div>

          <div className="space-y-8">
            {sacramentoFAQ.map((faq, index) => (
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Luxury Kitchen Design in sacramento</h2>
          <p className="text-xl text-ivory/90 mb-12 max-w-4xl mx-auto">
            Join the ranks of Sacramento area homeowners who have chosen AV\'s Cabinets for their luxury kitchen renovations. From El Dorado Hills to Grass Valley, we bring European craftsmanship to California\'s capital region.
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
