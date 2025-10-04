import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Kitchens Napa Valley | Luxury Cabinetry | AV\'s Cabinets California',
  description: 'Custom kitchens and luxury cabinetry for Napa Valley\'s most prestigious wine country estates. AV\'s Cabinets brings European craftsmanship to California\'s premier wine region.',
  keywords: 'custom kitchens Napa Valley, luxury cabinetry Napa Valley, wine country kitchens, estate cabinetry, luxury kitchens California',
  openGraph: {
    title: 'Custom Kitchens Napa Valley | Luxury Cabinetry | AV\'s Cabinets California',
    description: 'Custom kitchens and luxury cabinetry for Napa Valley\'s most prestigious wine country estates.',
    type: 'website',
  },
}

const localProjects = [
  {
    title: 'Wine Country Estate Kitchen',
    location: 'Napa Valley, CA',
    description: 'A stunning wine country kitchen renovation featuring custom walnut cabinetry and panoramic vineyard views. Designed to maximize the breathtaking scenery while providing luxury functionality for entertaining.',
    imageSrc: 'portfolio/napa-valley-wine-country-kitchen.webp',
    imageAlt: 'Custom wine country kitchen with panoramic Napa Valley vineyard views',
    year: '2024'
  },
  {
    title: 'Historic Winery Kitchen',
    location: 'Napa Valley, CA',
    description: 'A historic winery kitchen restoration with reclaimed wood cabinetry and traditional details. Perfect for the authentic wine country lifestyle with integrated wine storage solutions.',
    imageSrc: 'portfolio/napa-valley-historic-winery-kitchen.webp',
    imageAlt: 'Historic winery kitchen with reclaimed wood in Napa Valley',
    year: '2024'
  },
  {
    title: 'Modern Vineyard Kitchen',
    location: 'Napa Valley, CA',
    description: 'A contemporary vineyard kitchen with clean lines and premium materials. Designed for the modern wine country lifestyle with seamless indoor-outdoor living.',
    imageSrc: 'portfolio/napa-valley-modern-vineyard-kitchen.webp',
    imageAlt: 'Modern vineyard kitchen in Napa Valley with contemporary design',
    year: '2023'
  }
]

const localArchitecture = [
  {
    style: 'Wine Country Traditional',
    description: 'Napa Valley\'s traditional wine country homes feature natural materials, warm finishes, and expansive windows that frame the stunning vineyard views. Our cabinetry complements these elements with rustic elegance and premium materials.',
    characteristics: ['Natural materials', 'Warm finishes', 'Vineyard views', 'Rustic elegance']
  },
  {
    style: 'Mediterranean Revival',
    description: 'Mediterranean Revival homes in Napa Valley embrace the wine country setting with stucco, tile, and wrought iron details. Our cabinetry honors this tradition with hand-crafted details and authentic materials.',
    characteristics: ['Hand-crafted details', 'Authentic materials', 'Mediterranean influence', 'Wine country charm']
  },
  {
    style: 'Contemporary Wine Country',
    description: 'Modern wine country homes maximize views and natural light while maintaining luxury finishes. Our cabinetry integrates seamlessly with these spaces, offering clean lines and premium materials.',
    characteristics: ['View maximization', 'Natural light', 'Luxury finishes', 'Seamless integration']
  }
]

const localInsights = [
  {
    title: 'Wine Country Lifestyle',
    description: 'Napa Valley residents embrace the wine country lifestyle, with homes designed for entertaining and wine appreciation. We create cabinetry that supports this lifestyle with integrated wine storage and serving solutions.',
    icon: '🍷'
  },
  {
    title: 'Vineyard Views',
    description: 'We work with materials that connect your home to Napa Valley\'s vineyard environment, including reclaimed wood, local stone, and finishes that complement the wine country setting.',
    icon: '🍇'
  },
  {
    title: 'Entertainment Focus',
    description: 'Napa Valley homes are designed for entertaining, with open floor plans and integrated indoor-outdoor living. We create cabinetry that supports this lifestyle with flexible storage and serving solutions.',
    icon: '🍽️'
  },
  {
    title: 'Luxury Wine Country Living',
    description: 'Napa Valley residents expect luxury wine country living with resort-level amenities. We provide the same attention to detail and quality that defines the area\'s luxury wineries and resorts.',
    icon: '🏨'
  }
]

const neighborhoods = [
  'St. Helena',
  'Calistoga',
  'Yountville',
  'Rutherford',
  'Oakville',
  'Angwin',
  'Deer Park',
  'Pope Valley',
  'Soda Canyon',
  'Sage Canyon',
  'Chiles Valley',
  'Wooden Valley'
]

const wineCountryConsiderations = [
  {
    aspect: 'Vineyard Integration',
    description: 'Napa Valley\'s vineyard environment requires special consideration for views and natural light. We design cabinetry that enhances these views while providing practical storage and functionality.',
    features: ['View enhancement', 'Natural light', 'Vineyard integration', 'Functional design']
  },
  {
    aspect: 'Wine Storage',
    description: 'Wine country living emphasizes wine appreciation and storage. We design cabinetry that supports this lifestyle with integrated wine storage, serving solutions, and entertainment spaces.',
    features: ['Wine storage', 'Serving solutions', 'Entertainment spaces', 'Lifestyle support']
  },
  {
    aspect: 'Indoor-Outdoor Living',
    description: 'Wine country living emphasizes the connection between indoor and outdoor spaces. We design cabinetry that supports this lifestyle with flexible storage and serving solutions.',
    features: ['Outdoor integration', 'Flexible storage', 'Serving solutions', 'Lifestyle support']
  }
]

const localMaterials = [
  {
    name: 'Reclaimed Wood',
    description: 'Reclaimed wood from local sources provides a connection to Napa Valley\'s history while offering unique character and environmental responsibility. Perfect for wine country aesthetics.',
    benefits: ['Historical connection', 'Unique character', 'Environmental responsibility', 'Wine country aesthetic']
  },
  {
    name: 'Cedar',
    description: 'Aromatic cedar provides natural resistance to moisture and insects, making it perfect for Napa Valley\'s climate conditions. Its pleasant scent and warm color complement the wine country setting.',
    benefits: ['Moisture resistance', 'Natural insect resistance', 'Pleasant scent', 'Wine country appropriate']
  },
  {
    name: 'Pine',
    description: 'Traditional pine provides a classic wine country aesthetic while offering excellent workability and durability for cabinetry applications. Perfect for rustic and traditional designs.',
    benefits: ['Wine country aesthetic', 'Excellent workability', 'Durability', 'Traditional appeal']
  },
  {
    name: 'Stone Accents',
    description: 'Local stone accents complement our cabinetry designs, creating a seamless connection to Napa Valley\'s natural environment and vineyard setting.',
    benefits: ['Natural connection', 'Local materials', 'Visual harmony', 'Vineyard integration']
  }
]

const wineryCommunities = [
  {
    name: 'St. Helena',
    description: 'An exclusive wine country community with stunning vineyard views and luxury amenities. Our cabinetry designs complement the luxury wine country lifestyle.',
    features: ['Wine country community', 'Vineyard views', 'Luxury amenities', 'Exclusive access']
  },
  {
    name: 'Calistoga',
    description: 'A premier wine country community with custom homes and resort-style amenities. Our designs enhance the luxury wine country living experience.',
    features: ['Wine country community', 'Custom homes', 'Resort amenities', 'Luxury lifestyle']
  },
  {
    name: 'Yountville',
    description: 'A private wine country community with custom homes and vineyard views. Our cabinetry designs complement the luxury lifestyle and natural setting.',
    features: ['Private community', 'Custom homes', 'Vineyard views', 'Luxury lifestyle']
  }
]

const seasonalConsiderations = [
  {
    season: 'Harvest Season',
    description: 'Harvest season in Napa Valley is all about wine production and entertaining. Our cabinetry designs support this lifestyle with integrated wine storage, serving solutions, and spaces that embrace the harvest atmosphere.',
    features: ['Wine storage', 'Serving solutions', 'Harvest atmosphere', 'Entertainment focus']
  },
  {
    season: 'Off-Season',
    description: 'Off-season brings a focus on relaxation and intimate gatherings. Our cabinetry designs create inviting spaces that embrace the quieter wine country atmosphere while providing practical storage for seasonal items.',
    features: ['Relaxation spaces', 'Intimate gatherings', 'Seasonal storage', 'Quiet atmosphere']
  },
  {
    season: 'Year-Round',
    description: 'Our cabinetry designs work seamlessly throughout all seasons, providing consistent functionality and beauty regardless of the season or weather outside.',
    features: ['Versatile design', 'Durable materials', 'Consistent functionality', 'Timeless appeal']
  }
]

const wineStorageSolutions = [
  {
    type: 'Integrated Wine Cellars',
    description: 'Custom wine cellars integrated into kitchen and living spaces, featuring climate control, proper lighting, and elegant display systems.',
    features: ['Climate control', 'Proper lighting', 'Elegant display', 'Integrated design']
  },
  {
    type: 'Wine Storage Cabinets',
    description: 'Dedicated wine storage cabinets with temperature control, humidity management, and organized storage for different wine types and vintages.',
    features: ['Temperature control', 'Humidity management', 'Organized storage', 'Wine type organization']
  },
  {
    type: 'Serving Solutions',
    description: 'Integrated serving solutions including wine glass storage, decanter displays, and serving stations for wine tasting and entertaining.',
    features: ['Wine glass storage', 'Decanter displays', 'Serving stations', 'Tasting support']
  }
]

export default function NapaValleyPage() {
  return (
    
      <!-- SEO-Optimized Heading Structure -->
      <div className="heading-structure" style="display: none;">
        <h1>Custom Kitchens in napa-valley | Luxury Cabinetry</h1>
        <h2>Luxury Kitchen Design in napa-valley</h2><h2>Premium Materials & Craftsmanship</h2><h2>Local Kitchen Design Expertise</h2><h2>Custom Kitchen Services</h2><h2>Why Choose Us for napa-valley Kitchens</h2><h2>Frequently Asked Questions</h2>
        <h3>Custom Kitchen Design</h3><h3>Bespoke Cabinetry Services</h3><h3>Kitchen Remodeling</h3><h3>Cabinet Hardware Selection</h3><h3>Kitchen Lighting Design</h3><h3>Appliance Integration</h3>
      </div>
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">Custom Kitchens in napa-valley | Luxury Cabinetry</h1>
            <p className="text-xl md:text-2xl text-french-gray leading-relaxed mb-8">
              Serving Napa Valley\'s most prestigious wine country estates with custom kitchens and luxury cabinetry that celebrates the natural beauty of California\'s premier wine region.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Wine Country Estates</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Vineyard Views</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Wine Storage</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Luxury Living</span>
            </div>
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in napa-valley</h2>
              <div className="prose-luxury text-charcoal/80 mb-8">
                <p>
                  Napa Valley represents the pinnacle of wine country luxury living in California. Our custom cabinetry solutions are designed to complement the area\'s stunning vineyard views while providing the luxury and functionality expected in wine country estates.
                </p>
                <p>
                  We understand the unique characteristics of wine country living, from the emphasis on wine storage and entertaining to the integration of indoor-outdoor living spaces. Our designs incorporate materials and finishes that celebrate the wine country aesthetic while providing practical solutions for wine enthusiasts.
                </p>
                <p>
                  Our local knowledge extends to Napa Valley\'s diverse architectural styles, from traditional wine country homes to contemporary vineyard estates. We work closely with each client to ensure our cabinetry complements their home\'s unique character while meeting their specific wine country lifestyle requirements.
                </p>
                <p>
                  The wine country lifestyle emphasizes quality, tradition, and attention to detail. Our cabinetry reflects these values through hand-crafted details, premium materials, and designs that enhance the wine country experience. We understand that wine country homes are not just places to live, but spaces for entertaining, wine appreciation, and creating lasting memories.
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
                  <p className="text-sm text-charcoal/70">Serving Napa Valley</p>
                </div>
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">75+ Projects</h4>
                  <p className="text-sm text-charcoal/70">Completed in Napa Valley</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Wine Storage</h4>
                  <p className="text-sm text-charcoal/70">Specialized wine solutions</p>
                </div>
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Vineyard Views</h4>
                  <p className="text-sm text-charcoal/70">View-maximizing designs</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in napa-valley</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our recent work in Napa Valley, showcasing how we\'ve transformed kitchens and living spaces throughout the area\'s most prestigious wine country communities.
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in napa-valley</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Napa Valley\'s diverse architectural styles require specialized cabinetry solutions. We understand how to work with each style to create harmonious, functional spaces.
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

      {/* Wine Storage Solutions */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Luxury Kitchen Design in napa-valley</h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Specialized wine storage solutions designed for the wine country lifestyle, from integrated wine cellars to custom storage cabinets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wineStorageSolutions.map((solution, index) => (
              <div key={solution.type} className="text-center">
                <div className="text-4xl mb-4">🍷</div>
                <h3 className="text-lg font-semibold text-ivory mb-3 font-display">
                  {solution.type}
                </h3>
                <p className="text-french-gray text-sm leading-relaxed mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-1">
                  {solution.features.map((feature, i) => (
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

      {/* Wine Country Considerations */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in napa-valley</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Napa Valley\'s wine country environment requires special design considerations. We create cabinetry solutions that work beautifully in the wine country setting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wineCountryConsiderations.map((aspect, index) => (
              <div key={aspect.aspect} className="text-center">
                <div className="text-4xl mb-4">
                  {aspect.aspect === 'Vineyard Integration' ? '🍇' : aspect.aspect === 'Wine Storage' ? '🍷' : '🏡'}
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

      {/* Winery Communities */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in napa-valley</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We serve Napa Valley\'s most exclusive winery communities, each with its own unique character and luxury amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wineryCommunities.map((community, index) => (
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Luxury Kitchen Design in napa-valley</h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Napa Valley\'s seasonal nature requires thoughtful design considerations. We create cabinetry solutions that work beautifully throughout all seasons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seasonalConsiderations.map((season, index) => (
              <div key={season.season} className="text-center">
                <div className="text-4xl mb-4">
                  {season.season === 'Harvest Season' ? '🍇' : season.season === 'Off-Season' ? '🍷' : '🌲'}
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in napa-valley</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We work with materials that are specifically chosen for Napa Valley\'s wine country environment while providing exceptional beauty and durability.
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in napa-valley</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Understanding the unique characteristics of Napa Valley helps us create cabinetry solutions that truly serve our clients\' needs.
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in napa-valley</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We serve all of Napa Valley\'s prestigious neighborhoods, from the exclusive winery communities to the stunning vineyard estates.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Luxury Kitchen Design in napa-valley</h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Common questions about our services in Napa Valley and the surrounding wine country communities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-ivory/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-ivory mb-3 font-display">
                How do you design for wine storage and entertaining?
              </h3>
              <p className="text-french-gray leading-relaxed">
                We design integrated wine storage solutions including climate-controlled wine cellars, custom wine cabinets, and serving stations. Our designs support the wine country lifestyle with spaces for wine tasting, entertaining, and storage.
              </p>
            </div>

            <div className="bg-ivory/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-ivory mb-3 font-display">
                Can you work with vineyard properties and their unique requirements?
              </h3>
              <p className="text-french-gray leading-relaxed">
                Absolutely. We have extensive experience working with vineyard properties, including considerations for views, natural light, and the integration of indoor-outdoor living spaces that are essential to the wine country lifestyle.
              </p>
            </div>

            <div className="bg-ivory/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-ivory mb-3 font-display">
                Do you offer seasonal design considerations?
              </h3>
              <p className="text-french-gray leading-relaxed">
                Yes, we design cabinetry solutions that work beautifully throughout all seasons. This includes flexible storage for seasonal items, materials that perform well in variable conditions, and designs that enhance both harvest season entertaining and off-season relaxation.
              </p>
            </div>

            <div className="bg-ivory/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-ivory mb-3 font-display">
                What is the typical timeline for a Napa Valley project?
              </h3>
              <p className="text-french-gray leading-relaxed">
                Most Napa Valley projects take 6-8 months from consultation to completion. This includes 2-3 months for design and planning, 3-4 months for fabrication, and 2-3 weeks for installation. We can work around harvest schedules and seasonal considerations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in napa-valley</h2>
          <p className="text-xl text-charcoal/80 mb-12 max-w-3xl mx-auto">
            Let\'s discuss how we can create the perfect kitchen or cabinetry solution for your Napa Valley home, combining wine country luxury with vineyard views.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Schedule Napa Valley Consultation
            </Link>
            <Link href="/portfolio" className="btn-ghost">
              View Napa Valley Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
