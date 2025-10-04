import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Kitchens Palm Springs | Luxury Cabinetry | AV\'s Cabinets California',
  description: 'Custom kitchens and luxury cabinetry for Palm Springs\' most prestigious desert estates. AV\'s Cabinets brings European craftsmanship to California\'s premier desert resort community.',
  keywords: 'custom kitchens Palm Springs, luxury cabinetry Palm Springs, desert estate kitchens, resort cabinetry, luxury kitchens California',
  openGraph: {
    title: 'Custom Kitchens Palm Springs | Luxury Cabinetry | AV\'s Cabinets California',
    description: 'Custom kitchens and luxury cabinetry for Palm Springs\' most prestigious desert estates.',
    type: 'website',
  },
}

const localProjects = [
  {
    title: 'Desert Modern Estate Kitchen',
    location: 'Palm Springs, CA',
    description: 'A stunning desert modern kitchen renovation featuring custom walnut cabinetry and panoramic mountain views. Designed to maximize the breathtaking desert scenery while providing luxury functionality.',
    imageSrc: 'portfolio/palm-springs-desert-modern-kitchen.webp',
    imageAlt: 'Custom desert modern kitchen with panoramic Palm Springs mountain views',
    year: '2024'
  },
  {
    title: 'Mid-Century Modern Kitchen',
    location: 'Palm Springs, CA',
    description: 'A classic mid-century modern kitchen restoration with authentic details and luxury finishes. Perfect for the iconic Palm Springs lifestyle with integrated outdoor living spaces.',
    imageSrc: 'portfolio/palm-springs-mid-century-kitchen.webp',
    imageAlt: 'Mid-century modern kitchen in Palm Springs with authentic design',
    year: '2024'
  },
  {
    title: 'Resort Style Kitchen',
    location: 'Palm Springs, CA',
    description: 'A luxury resort-style kitchen renovation with contemporary details and premium materials. Designed for entertaining and relaxation in the prestigious Palm Springs resort community.',
    imageSrc: 'portfolio/palm-springs-resort-kitchen.webp',
    imageAlt: 'Resort style kitchen in Palm Springs with luxury design',
    year: '2023'
  }
]

const localArchitecture = [
  {
    style: 'Desert Modern',
    description: 'Palm Springs\' desert modern homes feature clean lines, natural materials, and expansive windows that frame the stunning desert and mountain views. Our cabinetry complements these elements with minimalist designs and premium materials.',
    characteristics: ['Clean lines', 'Natural materials', 'Desert views', 'Minimalist design']
  },
  {
    style: 'Mid-Century Modern',
    description: 'Classic mid-century modern homes embrace the desert setting with authentic details, natural materials, and timeless charm. Our cabinetry honors this tradition with hand-crafted details and period-accurate designs.',
    characteristics: ['Authentic details', 'Natural materials', 'Timeless charm', 'Period accuracy']
  },
  {
    style: 'Resort Contemporary',
    description: 'Resort contemporary homes maximize views and natural light while maintaining luxury finishes. Our cabinetry integrates seamlessly with these spaces, offering clean lines and premium materials.',
    characteristics: ['View maximization', 'Natural light', 'Luxury finishes', 'Seamless integration']
  }
]

const localInsights = [
  {
    title: 'Desert Lifestyle',
    description: 'Palm Springs residents value the connection to the desert and outdoor living. We design cabinetry that enhances this connection while providing the luxury and functionality expected in desert estates.',
    icon: '🏜️'
  },
  {
    title: 'Entertainment Focus',
    description: 'Many Palm Springs homes are designed for entertaining, with open floor plans and integrated indoor-outdoor living. We create cabinetry that supports this lifestyle with flexible storage and serving solutions.',
    icon: '🍽️'
  },
  {
    title: 'Luxury Living',
    description: 'Palm Springs residents expect the finest materials and finishes. We work exclusively with premium hardwoods, custom hardware, and luxury finishes that meet the highest standards.',
    icon: '💎'
  },
  {
    title: 'Desert Environment',
    description: 'The desert environment requires special consideration for temperature fluctuations and dust. We use materials and finishes that withstand these conditions while maintaining luxury aesthetics.',
    icon: '🌵'
  }
]

const neighborhoods = [
  'Indian Wells',
  'La Quinta',
  'Rancho Mirage',
  'Palm Desert',
  'Cathedral City',
  'Desert Hot Springs',
  'Indio',
  'Coachella',
  'Thousand Palms',
  'Sky Valley',
  'Desert Edge',
  'Mecca'
]

const desertConsiderations = [
  {
    aspect: 'Desert Views',
    description: 'Palm Springs\' desert views require special consideration for maximizing natural light and scenery. We design cabinetry that enhances these views while providing practical storage and functionality.',
    features: ['View enhancement', 'Natural light', 'Desert integration', 'Functional design']
  },
  {
    aspect: 'Indoor-Outdoor Living',
    description: 'Desert living emphasizes the connection between indoor and outdoor spaces. We design cabinetry that supports this lifestyle with flexible storage and serving solutions.',
    features: ['Outdoor integration', 'Flexible storage', 'Serving solutions', 'Lifestyle support']
  },
  {
    aspect: 'Luxury Standards',
    description: 'Palm Springs residents expect the highest standards of luxury and quality. We provide cabinetry solutions that meet these expectations with premium materials and finishes.',
    features: ['Premium materials', 'Luxury finishes', 'Quality craftsmanship', 'High standards']
  }
]

const localMaterials = [
  {
    name: 'Desert Hardwood',
    description: 'Specially selected hardwoods that perform well in desert conditions, providing exceptional beauty and durability for Palm Springs applications.',
    benefits: ['Desert performance', 'Exceptional beauty', 'Durability', 'Climate appropriate']
  },
  {
    name: 'Cedar',
    description: 'Aromatic cedar provides natural resistance to moisture and insects, making it perfect for desert applications. Its pleasant scent and warm color complement the desert lifestyle.',
    benefits: ['Moisture resistance', 'Natural insect resistance', 'Pleasant scent', 'Desert aesthetic']
  },
  {
    name: 'Teak',
    description: 'Natural oils in teak provide excellent weather resistance, making it perfect for Palm Springs\' desert environment. Its golden color and tight grain create a sophisticated appearance.',
    benefits: ['Weather resistance', 'Natural oils', 'Golden color', 'Desert appropriate']
  },
  {
    name: 'Stainless Steel',
    description: 'Modern stainless steel provides a contemporary look and excellent resistance to desert conditions. Its clean lines and durability make it perfect for modern desert homes.',
    benefits: ['Desert resistance', 'Contemporary look', 'Clean lines', 'Durability']
  }
]

const resortCommunities = [
  {
    name: 'Indian Wells',
    description: 'An exclusive resort community with stunning desert views and luxury amenities. Our cabinetry designs complement the luxury resort lifestyle.',
    features: ['Resort community', 'Desert views', 'Luxury amenities', 'Exclusive access']
  },
  {
    name: 'La Quinta',
    description: 'A premier resort community with custom homes and golf course amenities. Our designs enhance the luxury resort living experience.',
    features: ['Resort community', 'Custom homes', 'Golf amenities', 'Luxury lifestyle']
  },
  {
    name: 'Rancho Mirage',
    description: 'A private resort community with custom homes and desert views. Our cabinetry designs complement the luxury lifestyle and natural setting.',
    features: ['Private community', 'Custom homes', 'Desert views', 'Luxury lifestyle']
  }
]

const seasonalConsiderations = [
  {
    season: 'Winter',
    description: 'Winter in Palm Springs is all about outdoor living and entertaining. Our cabinetry designs support this lifestyle with integrated outdoor kitchen connections and flexible storage for seasonal items.',
    features: ['Outdoor integration', 'Seasonal storage', 'Entertainment support', 'Winter focus']
  },
  {
    season: 'Summer',
    description: 'Summer brings a focus on indoor comfort and air conditioning. Our cabinetry designs create inviting spaces that embrace the indoor lifestyle while providing practical storage for summer gear.',
    features: ['Indoor comfort', 'Summer storage', 'Cool materials', 'Indoor focus']
  },
  {
    season: 'Year-Round',
    description: 'Our cabinetry designs work seamlessly throughout all seasons, providing consistent functionality and beauty regardless of the weather outside.',
    features: ['Versatile design', 'Durable materials', 'Consistent functionality', 'Timeless appeal']
  }
]

const desertFeatures = [
  {
    feature: 'Desert View Integration',
    description: 'Custom cabinetry designed to complement and enhance desert views, with materials and finishes that work harmoniously with the desert setting.',
    benefits: ['View enhancement', 'Natural integration', 'Harmonious design', 'Desert aesthetic']
  },
  {
    feature: 'Entertainment Spaces',
    description: 'Integrated entertainment spaces with flexible storage, serving solutions, and spaces designed for hosting and entertaining.',
    benefits: ['Flexible storage', 'Serving solutions', 'Hosting support', 'Entertainment focus']
  },
  {
    feature: 'Luxury Finishes',
    description: 'Premium materials and finishes that meet the highest standards of luxury living expected in Palm Springs.',
    benefits: ['Premium materials', 'Luxury finishes', 'High standards', 'Quality craftsmanship']
  }
]

export default function PalmSpringsPage() {
  return (
    
      <!-- SEO-Optimized Heading Structure -->
      <div className="heading-structure" style="display: none;">
        <h1>Custom Kitchens in palm-springs | Luxury Cabinetry</h1>
        <h2>Luxury Kitchen Design in palm-springs</h2><h2>Premium Materials & Craftsmanship</h2><h2>Local Kitchen Design Expertise</h2><h2>Custom Kitchen Services</h2><h2>Why Choose Us for palm-springs Kitchens</h2><h2>Frequently Asked Questions</h2>
        <h3>Custom Kitchen Design</h3><h3>Bespoke Cabinetry Services</h3><h3>Kitchen Remodeling</h3><h3>Cabinet Hardware Selection</h3><h3>Kitchen Lighting Design</h3><h3>Appliance Integration</h3>
      </div>
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">Custom Kitchens in palm-springs | Luxury Cabinetry</h1>
            <p className="text-xl md:text-2xl text-french-gray leading-relaxed mb-8">
              Serving Palm Springs\' most prestigious desert estates with custom kitchens and luxury cabinetry that celebrates the natural beauty of California\'s premier desert resort community.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Desert Estates</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Mountain Views</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Resort Luxury</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Desert Grade</span>
            </div>
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in palm-springs</h2>
              <div className="prose-luxury text-charcoal/80 mb-8">
                <p>
                  Palm Springs represents the pinnacle of desert luxury living in California. Our custom cabinetry solutions are designed to complement the area\'s stunning natural beauty while providing the luxury and functionality expected in desert estates.
                </p>
                <p>
                  We understand the unique characteristics of Palm Springs living, from the emphasis on indoor-outdoor living to the integration of natural materials and finishes. Our designs incorporate materials and finishes that celebrate the desert aesthetic while providing practical solutions for luxury living.
                </p>
                <p>
                  Our local knowledge extends to Palm Springs\' diverse architectural styles, from contemporary desert homes to classic mid-century modern estates. We work closely with each client to ensure our cabinetry complements their home\'s unique character while meeting their specific lifestyle requirements.
                </p>
                <p>
                  The Palm Springs lifestyle emphasizes quality, natural beauty, and attention to detail. Our cabinetry reflects these values through hand-crafted details, premium materials, and designs that enhance the desert living experience. We understand that Palm Springs homes are not just places to live, but spaces for entertaining, relaxation, and creating lasting memories.
                </p>
                <p>
                  Palm Springs\' natural setting and luxury amenities create a unique environment for high-end living. Our designs honor this setting while providing modern functionality and luxury finishes that meet the highest standards of desert living.
                </p>
              </div>
              <Link href="/contact" className="btn-primary">
                Schedule Consultation
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">14+ Years</h4>
                  <p className="text-sm text-charcoal/70">Serving Palm Springs</p>
                </div>
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">55+ Projects</h4>
                  <p className="text-sm text-charcoal/70">Completed in Palm Springs</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Desert Views</h4>
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in palm-springs</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our recent work in Palm Springs, showcasing how we\'ve transformed kitchens and living spaces throughout the area\'s most prestigious communities.
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in palm-springs</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Palm Springs\' diverse architectural styles require specialized cabinetry solutions. We understand how to work with each style to create harmonious, functional spaces.
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

      {/* Desert Features */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Luxury Kitchen Design in palm-springs</h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Specialized features designed for the Palm Springs lifestyle, from desert view integration to luxury entertainment spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {desertFeatures.map((feature, index) => (
              <div key={feature.feature} className="text-center">
                <div className="text-4xl mb-4">🏜️</div>
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

      {/* Desert Considerations */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in palm-springs</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Palm Springs\' desert environment requires special design considerations. We create cabinetry solutions that work beautifully in the desert setting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {desertConsiderations.map((aspect, index) => (
              <div key={aspect.aspect} className="text-center">
                <div className="text-4xl mb-4">
                  {aspect.aspect === 'Desert Views' ? '🏜️' : aspect.aspect === 'Indoor-Outdoor Living' ? '🏡' : '💎'}
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

      {/* Resort Communities */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in palm-springs</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We serve Palm Springs\' most exclusive resort communities, each with its own unique character and luxury amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resortCommunities.map((community, index) => (
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Luxury Kitchen Design in palm-springs</h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Palm Springs\' seasonal nature requires thoughtful design considerations. We create cabinetry solutions that work beautifully throughout all seasons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seasonalConsiderations.map((season, index) => (
              <div key={season.season} className="text-center">
                <div className="text-4xl mb-4">
                  {season.season === 'Winter' ? '☀️' : season.season === 'Summer' ? '🌵' : '🌲'}
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in palm-springs</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We work with materials that are specifically chosen for Palm Springs\' desert environment while providing exceptional beauty and durability.
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in palm-springs</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Understanding the unique characteristics of Palm Springs helps us create cabinetry solutions that truly serve our clients\' needs.
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in palm-springs</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We serve all of Palm Springs\' prestigious neighborhoods, from the exclusive resort communities to the stunning desert estates.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Luxury Kitchen Design in palm-springs</h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Common questions about our services in Palm Springs and the surrounding desert communities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-ivory/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-ivory mb-3 font-display">
                How do you design for desert views and natural light?
              </h3>
              <p className="text-french-gray leading-relaxed">
                We design cabinetry that enhances desert views and maximizes natural light. This includes strategic placement, materials that complement the desert setting, and designs that don\'t obstruct the views that make Palm Springs special.
              </p>
            </div>

            <div className="bg-ivory/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-ivory mb-3 font-display">
                Can you work with desert properties and their unique requirements?
              </h3>
              <p className="text-french-gray leading-relaxed">
                Absolutely. We have extensive experience working with desert properties, including considerations for temperature fluctuations, dust, and the integration of indoor-outdoor living spaces that are essential to the Palm Springs lifestyle.
              </p>
            </div>

            <div className="bg-ivory/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-ivory mb-3 font-display">
                Do you offer luxury finishes and materials?
              </h3>
              <p className="text-french-gray leading-relaxed">
                Yes, we work exclusively with premium materials and luxury finishes that meet the highest standards expected in Palm Springs. This includes custom hardware, premium hardwoods, and finishes that enhance the luxury living experience.
              </p>
            </div>

            <div className="bg-ivory/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-ivory mb-3 font-display">
                What is the typical timeline for a Palm Springs project?
              </h3>
              <p className="text-french-gray leading-relaxed">
                Most Palm Springs projects take 6-8 months from consultation to completion. This includes 2-3 months for design and planning, 3-4 months for fabrication, and 2-3 weeks for installation. We can work around vacation schedules and seasonal considerations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in palm-springs</h2>
          <p className="text-xl text-charcoal/80 mb-12 max-w-3xl mx-auto">
            Let\'s discuss how we can create the perfect kitchen or cabinetry solution for your Palm Springs home, combining desert luxury with mountain views.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Schedule Palm Springs Consultation
            </Link>
            <Link href="/portfolio" className="btn-ghost">
              View Palm Springs Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
