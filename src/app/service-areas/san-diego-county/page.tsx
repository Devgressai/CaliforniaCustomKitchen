import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Kitchens San Diego County | Luxury Cabinetry | AV\'s Cabinets California',
  description: 'Custom kitchens and luxury cabinetry for San Diego County\'s most prestigious estates. AV\'s Cabinets brings European craftsmanship to California\'s premier luxury community.',
  keywords: 'custom kitchens San Diego County, luxury cabinetry San Diego County, estate kitchens, luxury kitchens California, San Diego County homes',
  openGraph: {
    title: 'Custom Kitchens San Diego County | Luxury Cabinetry | AV\'s Cabinets California',
    description: 'Custom kitchens and luxury cabinetry for San Diego County\'s most prestigious estates.',
    type: 'website',
  },
}

const localProjects = [
  {
    title: 'La Jolla Waterfront Kitchen',
    location: 'San Diego County, CA',
    description: 'A stunning waterfront kitchen renovation featuring custom walnut cabinetry and panoramic ocean views. Designed to maximize the breathtaking scenery while providing luxury functionality.',
    imageSrc: 'portfolio/san-diego-la-jolla-waterfront-kitchen.jpg',
    imageAlt: 'Custom waterfront kitchen with panoramic San Diego County ocean views',
    year: '2024'
  },
  {
    title: 'Del Mar Hillside Kitchen',
    location: 'San Diego County, CA',
    description: 'A contemporary hillside kitchen with clean lines and premium materials. Perfect for the modern San Diego lifestyle with integrated outdoor living spaces.',
    imageSrc: 'portfolio/san-diego-del-mar-hillside-kitchen.jpg',
    imageAlt: 'Hillside kitchen in Del Mar with contemporary design',
    year: '2024'
  },
  {
    title: 'Rancho Santa Fe Traditional Kitchen',
    location: 'San Diego County, CA',
    description: 'A classic traditional kitchen renovation with timeless details and luxury finishes. Designed for entertaining and family gatherings in the prestigious Rancho Santa Fe community.',
    imageSrc: 'portfolio/san-diego-rancho-santa-fe-kitchen.jpg',
    imageAlt: 'Traditional kitchen in Rancho Santa Fe with classic design',
    year: '2023'
  }
]

const localArchitecture = [
  {
    style: 'Contemporary San Diego',
    description: 'San Diego County\'s contemporary homes feature clean lines, natural materials, and expansive windows that frame the stunning ocean and mountain views. Our cabinetry complements these elements with minimalist designs and premium materials.',
    characteristics: ['Clean lines', 'Natural materials', 'Ocean views', 'Minimalist design']
  },
  {
    style: 'Traditional San Diego',
    description: 'Traditional San Diego homes embrace the area\'s natural setting with classic details, natural materials, and timeless charm. Our cabinetry honors this tradition with hand-crafted details and authentic materials.',
    characteristics: ['Classic details', 'Natural materials', 'Timeless charm', 'Hand-crafted elements']
  },
  {
    style: 'Mediterranean Revival',
    description: 'Mediterranean Revival homes in San Diego County feature warm materials and elegant details. Our cabinetry enhances these spaces with sophisticated designs and premium materials.',
    characteristics: ['Warm materials', 'Elegant details', 'Sophisticated design', 'Premium materials']
  }
]

const localInsights = [
  {
    title: 'Coastal Lifestyle',
    description: 'San Diego County residents value the connection to the ocean and outdoor living. We design cabinetry that enhances this connection while providing the luxury and functionality expected in coastal estates.',
    icon: '🌊'
  },
  {
    title: 'Entertainment Focus',
    description: 'Many San Diego County homes are designed for entertaining, with open floor plans and integrated indoor-outdoor living. We create cabinetry that supports this lifestyle with flexible storage and serving solutions.',
    icon: '🍽️'
  },
  {
    title: 'Luxury Living',
    description: 'San Diego County residents expect the finest materials and finishes. We work exclusively with premium hardwoods, custom hardware, and luxury finishes that meet the highest standards.',
    icon: '💎'
  },
  {
    title: 'Marine Environment',
    description: 'The coastal environment requires special consideration for salt air and humidity. We use marine-grade materials and finishes that withstand these conditions while maintaining luxury aesthetics.',
    icon: '⚓'
  }
]

const neighborhoods = [
  'La Jolla',
  'Del Mar',
  'Rancho Santa Fe',
  'Solana Beach',
  'Encinitas',
  'Carlsbad',
  'Oceanside',
  'Vista',
  'Escondido',
  'Poway',
  'San Marcos',
  'Fallbrook'
]

const coastalConsiderations = [
  {
    aspect: 'Ocean Views',
    description: 'San Diego County\'s ocean views require special consideration for maximizing natural light and scenery. We design cabinetry that enhances these views while providing practical storage and functionality.',
    features: ['View enhancement', 'Natural light', 'Ocean integration', 'Functional design']
  },
  {
    aspect: 'Indoor-Outdoor Living',
    description: 'Coastal living emphasizes the connection between indoor and outdoor spaces. We design cabinetry that supports this lifestyle with flexible storage and serving solutions.',
    features: ['Outdoor integration', 'Flexible storage', 'Serving solutions', 'Lifestyle support']
  },
  {
    aspect: 'Luxury Standards',
    description: 'San Diego County residents expect the highest standards of luxury and quality. We provide cabinetry solutions that meet these expectations with premium materials and finishes.',
    features: ['Premium materials', 'Luxury finishes', 'Quality craftsmanship', 'High standards']
  }
]

const localMaterials = [
  {
    name: 'Teak',
    description: 'Natural oils in teak provide excellent weather resistance, making it perfect for San Diego County\'s coastal environment. Its golden color and tight grain create a sophisticated appearance.',
    benefits: ['Weather resistance', 'Natural oils', 'Golden color', 'Coastal appropriate']
  },
  {
    name: 'Cedar',
    description: 'Aromatic cedar provides natural resistance to moisture and insects, making it perfect for coastal applications. Its pleasant scent and light color complement the beach lifestyle.',
    benefits: ['Moisture resistance', 'Natural insect resistance', 'Pleasant scent', 'Beach aesthetic']
  },
  {
    name: 'Mahogany',
    description: 'Luxurious mahogany offers exceptional beauty and durability for high-end coastal applications. Its rich color and fine grain create a sophisticated appearance perfect for luxury beach homes.',
    benefits: ['Luxurious appearance', 'Rich color', 'Fine grain', 'Exceptional durability']
  },
  {
    name: 'Stainless Steel',
    description: 'Modern stainless steel provides a contemporary look and excellent corrosion resistance for coastal applications. Its clean lines and resistance to salt air make it perfect for modern beach homes.',
    benefits: ['Corrosion resistance', 'Contemporary look', 'Clean lines', 'Salt air resistance']
  }
]

const luxuryCommunities = [
  {
    name: 'La Jolla',
    description: 'An exclusive coastal community with stunning ocean views and luxury amenities. Our cabinetry designs complement the luxury coastal lifestyle.',
    features: ['Coastal community', 'Ocean views', 'Luxury amenities', 'Exclusive access']
  },
  {
    name: 'Rancho Santa Fe',
    description: 'A premier luxury community with custom homes and estate-style amenities. Our designs enhance the luxury living experience.',
    features: ['Luxury community', 'Custom homes', 'Estate amenities', 'Luxury lifestyle']
  },
  {
    name: 'Del Mar',
    description: 'A private coastal community with custom homes and ocean views. Our cabinetry designs complement the luxury lifestyle and natural setting.',
    features: ['Private community', 'Custom homes', 'Ocean views', 'Luxury lifestyle']
  }
]

const seasonalConsiderations = [
  {
    season: 'Summer',
    description: 'Summer in San Diego County is all about outdoor living and entertaining. Our cabinetry designs support this lifestyle with integrated outdoor kitchen connections and flexible storage for seasonal items.',
    features: ['Outdoor integration', 'Seasonal storage', 'Entertainment support', 'Summer focus']
  },
  {
    season: 'Winter',
    description: 'Winter brings a focus on cozy indoor living and warmth. Our cabinetry designs create inviting spaces that embrace the winter atmosphere while providing practical storage for winter gear.',
    features: ['Cozy design', 'Winter storage', 'Warm materials', 'Indoor focus']
  },
  {
    season: 'Year-Round',
    description: 'Our cabinetry designs work seamlessly throughout all seasons, providing consistent functionality and beauty regardless of the weather outside.',
    features: ['Versatile design', 'Durable materials', 'Consistent functionality', 'Timeless appeal']
  }
]

const coastalFeatures = [
  {
    feature: 'Ocean View Integration',
    description: 'Custom cabinetry designed to complement and enhance ocean views, with materials and finishes that work harmoniously with the coastal setting.',
    benefits: ['View enhancement', 'Natural integration', 'Harmonious design', 'Coastal aesthetic']
  },
  {
    feature: 'Entertainment Spaces',
    description: 'Integrated entertainment spaces with flexible storage, serving solutions, and spaces designed for hosting and entertaining.',
    benefits: ['Flexible storage', 'Serving solutions', 'Hosting support', 'Entertainment focus']
  },
  {
    feature: 'Luxury Finishes',
    description: 'Premium materials and finishes that meet the highest standards of luxury living expected in San Diego County.',
    benefits: ['Premium materials', 'Luxury finishes', 'High standards', 'Quality craftsmanship']
  }
]

export default function SanDiegoCountyPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Custom Kitchens San Diego County
            </h1>
            <p className="text-xl md:text-2xl text-french-gray leading-relaxed mb-8">
              Serving San Diego County\'s most prestigious estates with custom kitchens and luxury cabinetry that celebrates the natural beauty of California\'s premier luxury community.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Coastal Estates</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Ocean Views</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Luxury Living</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Marine Grade</span>
            </div>
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                San Diego County Expertise
              </h2>
              <div className="prose-luxury text-charcoal/80 mb-8">
                <p>
                  San Diego County represents the pinnacle of luxury living in Southern California. Our custom cabinetry solutions are designed to complement the area\'s stunning natural beauty while providing the luxury and functionality expected in coastal estates.
                </p>
                <p>
                  We understand the unique characteristics of San Diego County living, from the emphasis on indoor-outdoor living to the integration of natural materials and finishes. Our designs incorporate materials and finishes that celebrate the coastal aesthetic while providing practical solutions for luxury living.
                </p>
                <p>
                  Our local knowledge extends to San Diego County\'s diverse architectural styles, from contemporary coastal homes to traditional Mediterranean estates. We work closely with each client to ensure our cabinetry complements their home\'s unique character while meeting their specific lifestyle requirements.
                </p>
                <p>
                  The San Diego County lifestyle emphasizes quality, natural beauty, and attention to detail. Our cabinetry reflects these values through hand-crafted details, premium materials, and designs that enhance the coastal living experience. We understand that San Diego County homes are not just places to live, but spaces for entertaining, relaxation, and creating lasting memories.
                </p>
                <p>
                  San Diego County\'s natural setting and luxury amenities create a unique environment for high-end living. Our designs honor this setting while providing modern functionality and luxury finishes that meet the highest standards of coastal living.
                </p>
              </div>
              <Link href="/contact" className="btn-primary">
                Schedule Consultation
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">18+ Years</h4>
                  <p className="text-sm text-charcoal/70">Serving San Diego County</p>
                </div>
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">80+ Projects</h4>
                  <p className="text-sm text-charcoal/70">Completed in San Diego County</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Ocean Views</h4>
                  <p className="text-sm text-charcoal/70">View-maximizing designs</p>
                </div>
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Luxury Standards</h4>
                  <p className="text-sm text-charcoal/70">Premium materials and finishes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Projects */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              San Diego County Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our recent work in San Diego County, showcasing how we\'ve transformed kitchens and living spaces throughout the area\'s most prestigious communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localProjects.map((project, index) => (
              <article key={project.title} className="bg-white rounded-lg shadow-sm border border-french-gray/20 overflow-hidden group hover:shadow-lg transition-all duration-300">
                <Link href={`/portfolio/${project.title.toLowerCase().replace(/\s+/g, '-')}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-french-gray/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-ivory">
                        <h3 className="text-xl font-semibold mb-2 font-display px-4">{project.title}</h3>
                        <p className="text-sm opacity-90">{project.location}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-charcoal/60">{project.year}</span>
                      <span className="text-sm text-deep-green font-medium">View Details →</span>
                    </div>
                    
                    <h3 className="font-display text-lg font-semibold text-charcoal mb-3 group-hover:text-deep-green transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <p className="text-charcoal/80 leading-relaxed text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Local Architecture */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              San Diego County Architecture
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              San Diego County\'s diverse architectural styles require specialized cabinetry solutions. We understand how to work with each style to create harmonious, functional spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {localArchitecture.map((style, index) => (
              <div key={style.style} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <h3 className="text-xl font-semibold text-charcoal mb-4 font-display">
                  {style.style}
                </h3>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  {style.description}
                </p>
                <ul className="space-y-2">
                  {style.characteristics.map((characteristic, i) => (
                    <li key={i} className="flex items-center text-sm text-charcoal/70">
                      <div className="w-1.5 h-1.5 bg-deep-green rounded-full mr-2 flex-shrink-0" />
                      {characteristic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coastal Features */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Coastal Features
            </h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Specialized features designed for the San Diego County lifestyle, from ocean view integration to luxury entertainment spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coastalFeatures.map((feature, index) => (
              <div key={feature.feature} className="text-center">
                <div className="text-4xl mb-4">🌊</div>
                <h3 className="text-lg font-semibold text-ivory mb-3 font-display">
                  {feature.feature}
                </h3>
                <p className="text-french-gray text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-1">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="text-french-gray text-xs">
                      • {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coastal Considerations */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Coastal Considerations
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              San Diego County\'s coastal environment requires special design considerations. We create cabinetry solutions that work beautifully in the coastal setting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coastalConsiderations.map((aspect, index) => (
              <div key={aspect.aspect} className="text-center">
                <div className="text-4xl mb-4">
                  {aspect.aspect === 'Ocean Views' ? '🌊' : aspect.aspect === 'Indoor-Outdoor Living' ? '🏡' : '💎'}
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                  {aspect.aspect}
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
                  {aspect.description}
                </p>
                <ul className="space-y-1">
                  {aspect.features.map((feature, i) => (
                    <li key={i} className="text-charcoal/60 text-xs">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Communities */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Luxury Communities
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We serve San Diego County\'s most exclusive luxury communities, each with its own unique character and luxury amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {luxuryCommunities.map((community, index) => (
              <div key={community.name} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <h3 className="text-xl font-semibold text-charcoal mb-4 font-display">
                  {community.name}
                </h3>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  {community.description}
                </p>
                <ul className="space-y-2">
                  {community.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-charcoal/70">
                      <div className="w-1.5 h-1.5 bg-deep-green rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Considerations */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Seasonal Design
            </h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              San Diego County\'s seasonal nature requires thoughtful design considerations. We create cabinetry solutions that work beautifully throughout all seasons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seasonalConsiderations.map((season, index) => (
              <div key={season.season} className="text-center">
                <div className="text-4xl mb-4">
                  {season.season === 'Summer' ? '☀️' : season.season === 'Winter' ? '❄️' : '🌲'}
                </div>
                <h3 className="text-lg font-semibold text-ivory mb-3 font-display">
                  {season.season}
                </h3>
                <p className="text-french-gray text-sm leading-relaxed mb-4">
                  {season.description}
                </p>
                <ul className="space-y-1">
                  {season.features.map((feature, i) => (
                    <li key={i} className="text-french-gray text-xs">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Materials */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Coastal Materials
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We work with materials that are specifically chosen for San Diego County\'s coastal environment while providing exceptional beauty and durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {localMaterials.map((material, index) => (
              <div key={material.name} className="text-center">
                <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center text-ivory text-2xl font-bold mx-auto mb-4">
                  {material.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                  {material.name}
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
                  {material.description}
                </p>
                <ul className="space-y-1">
                  {material.benefits.map((benefit, i) => (
                    <li key={i} className="text-charcoal/60 text-xs">
                      • {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Insights */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              San Diego County Insights
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Understanding the unique characteristics of San Diego County helps us create cabinetry solutions that truly serve our clients\' needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {localInsights.map((insight, index) => (
              <div key={insight.title} className="text-center">
                <div className="text-4xl mb-4">{insight.icon}</div>
                <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                  {insight.title}
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  {insight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              San Diego County Neighborhoods
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We serve all of San Diego County\'s prestigious neighborhoods, from the exclusive coastal communities to the stunning inland estates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {neighborhoods.map((neighborhood) => (
              <div key={neighborhood} className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20 text-center hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-charcoal mb-2">{neighborhood}</h3>
                <p className="text-sm text-charcoal/70">Custom cabinetry services</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              San Diego County FAQ
            </h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Common questions about our services in San Diego County and the surrounding coastal communities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-ivory/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-ivory mb-3 font-display">
                How do you design for ocean views and natural light?
              </h3>
              <p className="text-french-gray leading-relaxed">
                We design cabinetry that enhances ocean views and maximizes natural light. This includes strategic placement, materials that complement the coastal setting, and designs that don\'t obstruct the views that make San Diego County special.
              </p>
            </div>

            <div className="bg-ivory/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-ivory mb-3 font-display">
                Can you work with coastal properties and their unique requirements?
              </h3>
              <p className="text-french-gray leading-relaxed">
                Absolutely. We have extensive experience working with coastal properties, including considerations for salt air, humidity, and the integration of indoor-outdoor living spaces that are essential to the San Diego County lifestyle.
              </p>
            </div>

            <div className="bg-ivory/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-ivory mb-3 font-display">
                Do you offer luxury finishes and materials?
              </h3>
              <p className="text-french-gray leading-relaxed">
                Yes, we work exclusively with premium materials and luxury finishes that meet the highest standards expected in San Diego County. This includes custom hardware, premium hardwoods, and finishes that enhance the luxury living experience.
              </p>
            </div>

            <div className="bg-ivory/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-ivory mb-3 font-display">
                What is the typical timeline for a San Diego County project?
              </h3>
              <p className="text-french-gray leading-relaxed">
                Most San Diego County projects take 6-8 months from consultation to completion. This includes 2-3 months for design and planning, 3-4 months for fabrication, and 2-3 weeks for installation. We can work around vacation schedules and seasonal considerations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
            Ready to Transform Your San Diego County Home?
          </h2>
          <p className="text-xl text-charcoal/80 mb-12 max-w-3xl mx-auto">
            Let\'s discuss how we can create the perfect kitchen or cabinetry solution for your San Diego County home, combining coastal luxury with ocean views.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Schedule San Diego County Consultation
            </Link>
            <Link href="/portfolio" className="btn-ghost">
              View San Diego County Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
