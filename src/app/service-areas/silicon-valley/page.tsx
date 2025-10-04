import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Kitchens Silicon Valley | Luxury Cabinetry | AV\'s Cabinets California',
  description: 'Custom kitchens and luxury cabinetry for Silicon Valley\'s most prestigious tech executive estates. AV\'s Cabinets brings European craftsmanship to California\'s premier tech hub.',
  keywords: 'custom kitchens Silicon Valley, luxury cabinetry Silicon Valley, tech executive kitchens, smart home cabinetry, luxury kitchens California, Atherton kitchens, Palo Alto kitchens',
  openGraph: {
    title: 'Custom Kitchens Silicon Valley | Luxury Cabinetry | AV\'s Cabinets California',
    description: 'Custom kitchens and luxury cabinetry for Silicon Valley\'s most prestigious tech executive estates.',
    type: 'website',
  },
}

const localProjects = [
  {
    title: 'Atherton Tech Executive Kitchen',
    location: 'Silicon Valley, CA',
    description: 'A stunning tech executive kitchen featuring smart home integration, custom walnut cabinetry, and panoramic Silicon Valley views. Designed for the modern tech lifestyle with seamless connectivity.',
    imageSrc: 'portfolio/atherton-tech-executive-kitchen.webp',
    imageAlt: 'Custom tech executive kitchen with smart home integration in Atherton',
    year: '2024'
  },
  {
    title: 'Palo Alto Modern Kitchen',
    location: 'Silicon Valley, CA',
    description: 'A contemporary Palo Alto kitchen with clean lines, premium materials, and integrated smart home technology. Perfect for the Silicon Valley lifestyle with cutting-edge features.',
    imageSrc: 'portfolio/palo-alto-modern-kitchen.webp',
    imageAlt: 'Modern kitchen with smart home integration in Palo Alto',
    year: '2024'
  },
  {
    title: 'Los Altos Hills Estate Kitchen',
    location: 'Silicon Valley, CA',
    description: 'A luxury estate kitchen renovation with traditional details and modern smart home integration. Designed for entertaining and family gatherings in the prestigious Los Altos Hills community.',
    imageSrc: 'portfolio/los-altos-hills-estate-kitchen.webp',
    imageAlt: 'Luxury estate kitchen with smart home features in Los Altos Hills',
    year: '2023'
  }
]

const localArchitecture = [
  {
    style: 'Tech Modern',
    description: 'Silicon Valley\'s tech modern homes feature clean lines, smart home integration, and expansive windows that frame the stunning valley views. Our cabinetry complements these elements with minimalist designs and premium materials.',
    characteristics: ['Clean lines', 'Smart integration', 'Valley views', 'Minimalist design']
  },
  {
    style: 'Contemporary Silicon Valley',
    description: 'Contemporary Silicon Valley homes embrace the tech lifestyle with open floor plans, natural materials, and smart home features. Our cabinetry honors this tradition with hand-crafted details and modern functionality.',
    characteristics: ['Open floor plans', 'Natural materials', 'Smart features', 'Modern functionality']
  },
  {
    style: 'Luxury Tech Estate',
    description: 'Luxury tech estates maximize views and natural light while maintaining luxury finishes and smart home integration. Our cabinetry integrates seamlessly with these spaces, offering clean lines and premium materials.',
    characteristics: ['View maximization', 'Natural light', 'Luxury finishes', 'Smart integration']
  }
]

const localInsights = [
  {
    title: 'Tech Lifestyle',
    description: 'Silicon Valley residents value smart home integration and modern technology. We design cabinetry that enhances this connection while providing the luxury and functionality expected in tech executive estates.',
    icon: '💻'
  },
  {
    title: 'Entertainment Focus',
    description: 'Many Silicon Valley homes are designed for entertaining, with open floor plans and integrated smart home systems. We create cabinetry that supports this lifestyle with flexible storage and serving solutions.',
    icon: '🍽️'
  },
  {
    title: 'Luxury Living',
    description: 'Silicon Valley residents expect the finest materials and finishes. We work exclusively with premium hardwoods, custom hardware, and luxury finishes that meet the highest standards.',
    icon: '💎'
  },
  {
    title: 'Smart Home Integration',
    description: 'The tech environment requires special consideration for smart home systems and connectivity. We use materials and finishes that support modern technology while maintaining luxury aesthetics.',
    icon: '🏠'
  }
]

const neighborhoods = [
  'Atherton',
  'Palo Alto',
  'Los Altos Hills',
  'Hillsborough',
  'Woodside',
  'Portola Valley',
  'Menlo Park',
  'Los Altos',
  'Mountain View',
  'Sunnyvale',
  'Cupertino',
  'Saratoga'
]

const techConsiderations = [
  {
    aspect: 'Smart Home Integration',
    description: 'Silicon Valley\'s tech environment requires special consideration for smart home systems and connectivity. We design cabinetry that enhances these systems while providing practical storage and functionality.',
    features: ['Smart integration', 'Connectivity support', 'Tech functionality', 'Modern design']
  },
  {
    aspect: 'Indoor-Outdoor Living',
    description: 'Tech lifestyle emphasizes the connection between indoor and outdoor spaces. We design cabinetry that supports this lifestyle with flexible storage and serving solutions.',
    features: ['Outdoor integration', 'Flexible storage', 'Serving solutions', 'Lifestyle support']
  },
  {
    aspect: 'Luxury Standards',
    description: 'Silicon Valley residents expect the highest standards of luxury and quality. We provide cabinetry solutions that meet these expectations with premium materials and finishes.',
    features: ['Premium materials', 'Luxury finishes', 'Quality craftsmanship', 'High standards']
  }
]

const localMaterials = [
  {
    name: 'Walnut',
    description: 'Rich walnut provides exceptional beauty and durability for high-end Silicon Valley applications. Its warm color and fine grain create a sophisticated appearance perfect for luxury tech homes.',
    benefits: ['Rich appearance', 'Warm color', 'Fine grain', 'Exceptional durability']
  },
  {
    name: 'Oak',
    description: 'Traditional oak provides a classic aesthetic while offering excellent workability and durability for cabinetry applications. Perfect for traditional and contemporary designs.',
    benefits: ['Classic aesthetic', 'Excellent workability', 'Durability', 'Versatile design']
  },
  {
    name: 'Maple',
    description: 'Clean maple provides a contemporary look and excellent workability for modern applications. Its light color and smooth grain make it perfect for contemporary designs.',
    benefits: ['Contemporary look', 'Excellent workability', 'Light color', 'Smooth grain']
  },
  {
    name: 'Cherry',
    description: 'Luxurious cherry offers exceptional beauty and durability for high-end applications. Its rich color and fine grain create a sophisticated appearance perfect for luxury homes.',
    benefits: ['Luxurious appearance', 'Rich color', 'Fine grain', 'Exceptional durability']
  }
]

const techCommunities = [
  {
    name: 'Atherton',
    description: 'An exclusive tech executive community with stunning valley views and luxury amenities. Our cabinetry designs complement the luxury tech lifestyle.',
    features: ['Tech executive community', 'Valley views', 'Luxury amenities', 'Exclusive access']
  },
  {
    name: 'Palo Alto',
    description: 'A premier tech community with custom homes and smart home amenities. Our designs enhance the luxury tech living experience.',
    features: ['Tech community', 'Custom homes', 'Smart amenities', 'Luxury lifestyle']
  },
  {
    name: 'Los Altos Hills',
    description: 'A private tech community with custom homes and valley views. Our cabinetry designs complement the luxury lifestyle and natural setting.',
    features: ['Private community', 'Custom homes', 'Valley views', 'Luxury lifestyle']
  }
]

const seasonalConsiderations = [
  {
    season: 'Summer',
    description: 'Summer in Silicon Valley is all about outdoor living and entertaining. Our cabinetry designs support this lifestyle with integrated outdoor kitchen connections and flexible storage for seasonal items.',
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

const smartHomeFeatures = [
  {
    feature: 'Smart Kitchen Integration',
    description: 'Custom cabinetry designed to integrate seamlessly with smart home systems, including hidden charging stations, smart appliance integration, and automated lighting controls.',
    benefits: ['Smart integration', 'Hidden technology', 'Automated controls', 'Modern functionality']
  },
  {
    feature: 'Tech Executive Spaces',
    description: 'Integrated workspaces with flexible storage, charging solutions, and spaces designed for tech executives and entrepreneurs.',
    benefits: ['Flexible storage', 'Charging solutions', 'Executive support', 'Tech focus']
  },
  {
    feature: 'Luxury Finishes',
    description: 'Premium materials and finishes that meet the highest standards of luxury living expected in Silicon Valley.',
    benefits: ['Premium materials', 'Luxury finishes', 'High standards', 'Quality craftsmanship']
  }
]

const trendingKeywords = [
  'smart kitchen design',
  'tech executive homes',
  'luxury kitchen cabinetry',
  'custom kitchen Silicon Valley',
  'high-end kitchen design',
  'premium kitchen materials',
  'bespoke cabinetry',
  'luxury home design',
  'custom kitchen cabinets',
  'kitchen renovation Silicon Valley'
]

export default function SiliconValleyPage() {
  return (
    
      <!-- SEO-Optimized Heading Structure -->
      <div className="heading-structure" style="display: none;">
        <h1>Custom Kitchens in silicon-valley | Luxury Cabinetry</h1>
        <h2>Luxury Kitchen Design in silicon-valley</h2><h2>Premium Materials & Craftsmanship</h2><h2>Local Kitchen Design Expertise</h2><h2>Custom Kitchen Services</h2><h2>Why Choose Us for silicon-valley Kitchens</h2><h2>Frequently Asked Questions</h2>
        <h3>Custom Kitchen Design</h3><h3>Bespoke Cabinetry Services</h3><h3>Kitchen Remodeling</h3><h3>Cabinet Hardware Selection</h3><h3>Kitchen Lighting Design</h3><h3>Appliance Integration</h3>
      </div>
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">Custom Kitchens in silicon-valley | Luxury Cabinetry</h1>
            <p className="text-xl md:text-2xl text-french-gray leading-relaxed mb-8">
              Serving Silicon Valley\'s most prestigious tech executive estates with custom kitchens and luxury cabinetry that celebrates the innovation and sophistication of California\'s premier tech hub.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Tech Executive Estates</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Smart Home Integration</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Luxury Living</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Premium Materials</span>
            </div>
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in silicon-valley</h2>
              <div className="prose-luxury text-charcoal/80 mb-8">
                <p>
                  Silicon Valley represents the pinnacle of tech innovation and luxury living in California. Our custom cabinetry solutions are designed to complement the area\'s cutting-edge technology while providing the luxury and functionality expected in tech executive estates.
                </p>
                <p>
                  We understand the unique characteristics of Silicon Valley living, from the emphasis on smart home integration to the integration of natural materials and finishes. Our designs incorporate materials and finishes that celebrate the tech aesthetic while providing practical solutions for luxury living.
                </p>
                <p>
                  Our local knowledge extends to Silicon Valley\'s diverse architectural styles, from contemporary tech homes to traditional luxury estates. We work closely with each client to ensure our cabinetry complements their home\'s unique character while meeting their specific lifestyle requirements.
                </p>
                <p>
                  The Silicon Valley lifestyle emphasizes innovation, quality, and attention to detail. Our cabinetry reflects these values through hand-crafted details, premium materials, and designs that enhance the tech living experience. We understand that Silicon Valley homes are not just places to live, but spaces for innovation, entertaining, and creating lasting memories.
                </p>
                <p>
                  Silicon Valley\'s tech environment and luxury amenities create a unique setting for high-end living. Our designs honor this setting while providing modern functionality and luxury finishes that meet the highest standards of tech living.
                </p>
                <p>
                  Our expertise in smart home integration ensures that every kitchen we design seamlessly incorporates the latest technology while maintaining the timeless elegance that defines luxury living. From hidden charging stations to automated lighting controls, we create spaces that are both functional and beautiful.
                </p>
              </div>
              <Link href="/contact" className="btn-primary">
                Schedule Consultation
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">25+ Years</h4>
                  <p className="text-sm text-charcoal/70">Serving Silicon Valley</p>
                </div>
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">120+ Projects</h4>
                  <p className="text-sm text-charcoal/70">Completed in Silicon Valley</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Smart Integration</h4>
                  <p className="text-sm text-charcoal/70">Tech-enabled designs</p>
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

      {/* Trending Keywords Section */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in silicon-valley</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Stay ahead of the curve with the latest kitchen design trends and smart home integration features that Silicon Valley tech executives are embracing.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {trendingKeywords.map((keyword, index) => (
              <div key={keyword} className="bg-white p-4 rounded-lg shadow-sm border border-french-gray/20 text-center hover:shadow-md transition-shadow duration-300">
                <span className="text-sm font-medium text-charcoal">{keyword}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Projects */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in silicon-valley</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our recent work in Silicon Valley, showcasing how we\'ve transformed kitchens and living spaces throughout the area\'s most prestigious tech communities.
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
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in silicon-valley</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Silicon Valley\'s diverse architectural styles require specialized cabinetry solutions. We understand how to work with each style to create harmonious, functional spaces.
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

      {/* Smart Home Features */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Luxury Kitchen Design in silicon-valley</h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Specialized features designed for the Silicon Valley lifestyle, from smart home integration to luxury entertainment spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {smartHomeFeatures.map((feature, index) => (
              <div key={feature.feature} className="text-center">
                <div className="text-4xl mb-4">💻</div>
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

      {/* Tech Considerations */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in silicon-valley</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Silicon Valley\'s tech environment requires special design considerations. We create cabinetry solutions that work beautifully in the tech setting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techConsiderations.map((aspect, index) => (
              <div key={aspect.aspect} className="text-center">
                <div className="text-4xl mb-4">
                  {aspect.aspect === 'Smart Home Integration' ? '💻' : aspect.aspect === 'Indoor-Outdoor Living' ? '🏡' : '💎'}
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

      {/* Tech Communities */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in silicon-valley</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We serve Silicon Valley\'s most exclusive tech communities, each with its own unique character and luxury amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techCommunities.map((community, index) => (
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Luxury Kitchen Design in silicon-valley</h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Silicon Valley\'s seasonal nature requires thoughtful design considerations. We create cabinetry solutions that work beautifully throughout all seasons.
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in silicon-valley</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We work with materials that are specifically chosen for Silicon Valley\'s luxury environment while providing exceptional beauty and durability.
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in silicon-valley</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Understanding the unique characteristics of Silicon Valley helps us create cabinetry solutions that truly serve our clients\' needs.
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in silicon-valley</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We serve all of Silicon Valley\'s prestigious neighborhoods, from the exclusive tech executive communities to the stunning valley estates.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Luxury Kitchen Design in silicon-valley</h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Common questions about our services in Silicon Valley and the surrounding tech communities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-ivory/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-ivory mb-3 font-display">
                How do you integrate smart home technology into kitchen designs?
              </h3>
              <p className="text-french-gray leading-relaxed">
                We design cabinetry that seamlessly integrates with smart home systems, including hidden charging stations, smart appliance integration, automated lighting controls, and built-in connectivity solutions. Our designs ensure technology enhances rather than detracts from the luxury aesthetic.
              </p>
            </div>

            <div className="bg-ivory/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-ivory mb-3 font-display">
                Can you work with tech executive properties and their unique requirements?
              </h3>
              <p className="text-french-gray leading-relaxed">
                Absolutely. We have extensive experience working with tech executive properties, including considerations for smart home integration, connectivity, and the integration of indoor-outdoor living spaces that are essential to the Silicon Valley lifestyle.
              </p>
            </div>

            <div className="bg-ivory/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-ivory mb-3 font-display">
                Do you offer luxury finishes and materials suitable for tech executives?
              </h3>
              <p className="text-french-gray leading-relaxed">
                Yes, we work exclusively with premium materials and luxury finishes that meet the highest standards expected in Silicon Valley. This includes custom hardware, premium hardwoods, and finishes that enhance the luxury living experience while supporting modern technology.
              </p>
            </div>

            <div className="bg-ivory/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-ivory mb-3 font-display">
                What is the typical timeline for a Silicon Valley project?
              </h3>
              <p className="text-french-gray leading-relaxed">
                Most Silicon Valley projects take 6-8 months from consultation to completion. This includes 2-3 months for design and planning, 3-4 months for fabrication, and 2-3 weeks for installation. We can work around busy tech schedules and vacation considerations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in silicon-valley</h2>
          <p className="text-xl text-charcoal/80 mb-12 max-w-3xl mx-auto">
            Let\'s discuss how we can create the perfect kitchen or cabinetry solution for your Silicon Valley home, combining tech innovation with luxury living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Schedule Silicon Valley Consultation
            </Link>
            <Link href="/portfolio" className="btn-ghost">
              View Silicon Valley Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
