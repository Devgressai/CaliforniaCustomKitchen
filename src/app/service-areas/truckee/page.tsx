import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Kitchens Truckee | Luxury Cabinetry | AV\'s Cabinets California',
  description: 'Custom kitchens and luxury cabinetry for Truckee\'s most prestigious mountain homes. AV\'s Cabinets brings European craftsmanship to California\'s premier mountain community.',
  keywords: 'custom kitchens Truckee, luxury cabinetry Truckee, mountain home kitchens, ski resort cabinetry, luxury kitchens California',
  openGraph: {
    title: 'Custom Kitchens Truckee | Luxury Cabinetry | AV\'s Cabinets California',
    description: 'Custom kitchens and luxury cabinetry for Truckee\'s most prestigious mountain homes.',
    type: 'website',
  },
}

const localProjects = [
  {
    title: 'Martis Camp Mountain Kitchen',
    location: 'Truckee, CA',
    description: 'A sophisticated mountain kitchen renovation in the exclusive Martis Camp community, featuring custom walnut cabinetry and integrated ski storage solutions.',
    imageSrc: 'portfolio/truckee-martis-camp-kitchen.jpg',
    imageAlt: 'Custom mountain kitchen in Martis Camp with ski storage',
    year: '2024'
  },
  {
    title: 'Ski Resort Estate Kitchen',
    location: 'Truckee, CA',
    description: 'A luxury ski resort estate kitchen with reclaimed wood cabinetry and stone accents. Designed for entertaining after a day on the slopes.',
    imageSrc: 'portfolio/truckee-ski-resort-kitchen.jpg',
    imageAlt: 'Ski resort estate kitchen with reclaimed wood in Truckee',
    year: '2024'
  },
  {
    title: 'Mountain Modern Kitchen',
    location: 'Truckee, CA',
    description: 'A contemporary mountain home kitchen with clean lines and premium materials. Perfect for the modern mountain lifestyle.',
    imageSrc: 'portfolio/truckee-mountain-modern-kitchen.jpg',
    imageAlt: 'Mountain modern kitchen in Truckee with contemporary design',
    year: '2023'
  }
]

const localArchitecture = [
  {
    style: 'Mountain Modern',
    description: 'Truckee\'s mountain modern homes feature clean lines, natural materials, and expansive windows that frame the stunning mountain views. Our cabinetry complements these elements with minimalist designs and premium materials.',
    characteristics: ['Clean lines', 'Natural materials', 'Expansive windows', 'Minimalist design']
  },
  {
    style: 'Rustic Mountain',
    description: 'Traditional rustic mountain homes embrace the alpine setting with natural wood, stone, and cozy details. Our cabinetry honors this tradition with reclaimed materials and hand-crafted details.',
    characteristics: ['Reclaimed materials', 'Hand-crafted details', 'Natural finishes', 'Cozy atmosphere']
  },
  {
    style: 'Ski Lodge',
    description: 'Ski lodge homes are designed for entertaining and relaxation after a day on the slopes. Our cabinetry supports this lifestyle with flexible storage and serving solutions.',
    characteristics: ['Entertainment focus', 'Flexible storage', 'Serving solutions', 'Relaxation spaces']
  }
]

const localInsights = [
  {
    title: 'Ski Resort Lifestyle',
    description: 'Truckee residents embrace the ski resort lifestyle, with homes designed for entertaining and relaxation. We create cabinetry that supports this lifestyle with flexible storage and serving solutions.',
    icon: '⛷️'
  },
  {
    title: 'Mountain Materials',
    description: 'We work with materials that connect your home to Truckee\'s mountain environment, including reclaimed wood, local stone, and finishes that complement the alpine setting.',
    icon: '🏔️'
  },
  {
    title: 'Seasonal Flexibility',
    description: 'Truckee\'s seasonal nature requires flexible design solutions. We create cabinetry that works year-round, from summer entertaining to winter coziness.',
    icon: '🌲'
  },
  {
    title: 'Luxury Mountain Living',
    description: 'Truckee residents expect luxury mountain living with resort-level amenities. We provide the same attention to detail and quality that defines the area\'s luxury resorts.',
    icon: '🏨'
  }
]

const neighborhoods = [
  'Martis Camp',
  'Lahontan',
  'Schaffer\'s Mill',
  'Tahoe Donner',
  'Glenshire',
  'Prosser',
  'Brockway',
  'Donner Lake',
  'Sierra Meadows',
  'Tahoe Vista',
  'Kings Beach',
  'Tahoe City'
]

const seasonalConsiderations = [
  {
    season: 'Winter',
    description: 'Winter in Truckee is all about skiing, snowboarding, and cozy indoor living. Our cabinetry designs support this lifestyle with ski storage, warm materials, and spaces that embrace the winter atmosphere.',
    features: ['Ski storage', 'Warm materials', 'Cozy design', 'Indoor focus']
  },
  {
    season: 'Summer',
    description: 'Summer brings hiking, biking, and outdoor entertaining. Our cabinetry designs support this lifestyle with flexible storage, outdoor kitchen connections, and spaces that flow seamlessly to the outdoors.',
    features: ['Outdoor connections', 'Flexible storage', 'Entertainment support', 'Summer focus']
  },
  {
    season: 'Year-Round',
    description: 'Our cabinetry designs work seamlessly throughout all seasons, providing consistent functionality and beauty regardless of the weather outside.',
    features: ['Versatile design', 'Durable materials', 'Consistent functionality', 'Timeless appeal']
  }
]

const localMaterials = [
  {
    name: 'Reclaimed Wood',
    description: 'Reclaimed wood from local sources provides a connection to Truckee\'s history while offering unique character and environmental responsibility.',
    benefits: ['Historical connection', 'Unique character', 'Environmental responsibility', 'Local sourcing']
  },
  {
    name: 'Cedar',
    description: 'Aromatic cedar provides natural resistance to moisture and insects, making it perfect for Truckee\'s variable climate conditions.',
    benefits: ['Moisture resistance', 'Natural insect resistance', 'Pleasant scent', 'Climate appropriate']
  },
  {
    name: 'Pine',
    description: 'Traditional pine provides a classic mountain aesthetic while offering excellent workability and durability for cabinetry applications.',
    benefits: ['Mountain aesthetic', 'Excellent workability', 'Durability', 'Traditional appeal']
  },
  {
    name: 'Stone Accents',
    description: 'Local stone accents complement our cabinetry designs, creating a seamless connection to Truckee\'s mountain environment.',
    benefits: ['Natural connection', 'Local materials', 'Visual harmony', 'Environmental integration']
  }
]

const skiResortCommunities = [
  {
    name: 'Martis Camp',
    description: 'An exclusive private community with world-class amenities and stunning mountain views. Our cabinetry designs complement the luxury mountain lifestyle.',
    features: ['Private community', 'Luxury amenities', 'Mountain views', 'Exclusive access']
  },
  {
    name: 'Lahontan',
    description: 'A premier golf and ski community with custom homes and resort-style amenities. Our designs enhance the luxury mountain living experience.',
    features: ['Golf community', 'Ski access', 'Custom homes', 'Resort amenities']
  },
  {
    name: 'Schaffer\'s Mill',
    description: 'A private golf community with custom homes and mountain views. Our cabinetry designs complement the luxury lifestyle and natural setting.',
    features: ['Private golf', 'Custom homes', 'Mountain views', 'Luxury lifestyle']
  }
]

export default function TruckeePage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Custom Kitchens Truckee
            </h1>
            <p className="text-xl md:text-2xl text-french-gray leading-relaxed mb-8">
              Serving Truckee\'s most prestigious mountain homes with custom kitchens and luxury cabinetry that celebrates the alpine beauty of California\'s premier mountain community.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Mountain Homes</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Ski Resort Living</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Alpine Luxury</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Natural Materials</span>
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
                Truckee Expertise
              </h2>
              <div className="prose-luxury text-charcoal/80 mb-8">
                <p>
                  Truckee represents the pinnacle of mountain luxury living in California. Our custom cabinetry solutions are designed to complement the area\'s stunning alpine beauty while providing the luxury and functionality expected in mountain resort communities.
                </p>
                <p>
                  We understand the unique challenges of mountain living, from the variable climate conditions to the emphasis on indoor-outdoor living. Our designs incorporate materials and finishes that withstand the elements while creating warm, inviting spaces that celebrate the mountain lifestyle.
                </p>
                <p>
                  Our local knowledge extends to Truckee\'s diverse architectural styles, from rustic mountain lodges to contemporary alpine homes. We work closely with each client to ensure our cabinetry complements their home\'s unique character while meeting their specific lifestyle requirements.
                </p>
              </div>
              <Link href="/contact" className="btn-primary">
                Schedule Consultation
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">10+ Years</h4>
                  <p className="text-sm text-charcoal/70">Serving Truckee</p>
                </div>
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">35+ Projects</h4>
                  <p className="text-sm text-charcoal/70">Completed in Truckee</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Mountain Materials</h4>
                  <p className="text-sm text-charcoal/70">Alpine-appropriate materials</p>
                </div>
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Resort Service</h4>
                  <p className="text-sm text-charcoal/70">Luxury resort-level service</p>
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
              Truckee Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our recent work in Truckee, showcasing how we\'ve transformed kitchens and living spaces throughout the area\'s most prestigious mountain communities.
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
              Truckee Architecture
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Truckee\'s diverse architectural styles require specialized cabinetry solutions. We understand how to work with each style to create harmonious, functional spaces.
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

      {/* Ski Resort Communities */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Ski Resort Communities
            </h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              We serve Truckee\'s most exclusive ski resort communities, each with its own unique character and luxury amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skiResortCommunities.map((community, index) => (
              <div key={community.name} className="bg-ivory/10 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-ivory mb-4 font-display">
                  {community.name}
                </h3>
                <p className="text-french-gray leading-relaxed mb-6">
                  {community.description}
                </p>
                <ul className="space-y-2">
                  {community.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-french-gray">
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
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Seasonal Design
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Truckee\'s seasonal nature requires thoughtful design considerations. We create cabinetry solutions that work beautifully throughout all seasons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seasonalConsiderations.map((season, index) => (
              <div key={season.season} className="text-center">
                <div className="text-4xl mb-4">
                  {season.season === 'Winter' ? '⛷️' : season.season === 'Summer' ? '☀️' : '🌲'}
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                  {season.season}
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
                  {season.description}
                </p>
                <ul className="space-y-1">
                  {season.features.map((feature, i) => (
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

      {/* Local Materials */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Local Materials
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We work with local materials that connect your home to Truckee\'s mountain environment while providing exceptional beauty and durability.
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
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Truckee Insights
            </h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Understanding the unique characteristics of Truckee helps us create cabinetry solutions that truly serve our clients\' needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {localInsights.map((insight, index) => (
              <div key={insight.title} className="text-center">
                <div className="text-4xl mb-4">{insight.icon}</div>
                <h3 className="text-lg font-semibold text-ivory mb-3 font-display">
                  {insight.title}
                </h3>
                <p className="text-french-gray text-sm leading-relaxed">
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
              Truckee Neighborhoods
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We serve all of Truckee\'s prestigious neighborhoods, from the exclusive ski resort communities to the serene mountain retreats.
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
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Truckee FAQ
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Common questions about our services in Truckee and the surrounding mountain communities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                How do you handle the variable climate conditions in Truckee?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                We use materials and finishes specifically chosen for Truckee\'s climate conditions. This includes moisture-resistant materials, appropriate sealants, and finishes that can handle temperature fluctuations and humidity changes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                Can you work with ski resort communities and their unique requirements?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Absolutely. We have extensive experience working with ski resort communities, including considerations for ski storage, entertaining spaces, and the integration of indoor-outdoor living that is essential to the Truckee lifestyle.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                Do you offer seasonal design considerations?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Yes, we design cabinetry solutions that work beautifully throughout all seasons. This includes flexible storage for seasonal items, materials that perform well in variable conditions, and designs that enhance both summer outdoor living and winter coziness.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
              <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                What is the typical timeline for a Truckee project?
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Most Truckee projects take 6-8 months from consultation to completion. This includes 2-3 months for design and planning, 3-4 months for fabrication, and 2-3 weeks for installation. We can work around seasonal considerations and vacation schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Ready to Transform Your Truckee Home?
          </h2>
          <p className="text-xl text-french-gray mb-12 max-w-3xl mx-auto">
            Let\'s discuss how we can create the perfect kitchen or cabinetry solution for your Truckee home, combining mountain luxury with alpine beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-ivory text-deep-green px-8 py-4 rounded font-medium hover:bg-ivory/90 transition-colors">
              Schedule Truckee Consultation
            </Link>
            <Link href="/portfolio" className="border border-ivory text-ivory px-8 py-4 rounded font-medium hover:bg-ivory hover:text-deep-green transition-colors">
              View Truckee Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
