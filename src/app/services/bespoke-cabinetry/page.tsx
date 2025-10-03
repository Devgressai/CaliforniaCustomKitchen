import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { LocationBreadcrumbs } from '@/components/Breadcrumbs'
import { StructuredData, generateServiceSchema } from '@/components/StructuredData'
import { OptimizedImage } from '@/components/OptimizedImage'

export const metadata: Metadata = {
  title: "Bespoke Cabinetry | Custom Built-Ins & Storage Solutions California",
  description: "Beyond kitchens: museum-grade bespoke cabinetry for libraries, closets, entertainment centers, and wine rooms. Serving California's luxury homes with uncompromising craftsmanship.",
  keywords: [
    'bespoke cabinetry',
    'custom built-ins',
    'luxury storage solutions',
    'entertainment centers',
    'wine room cabinetry',
    'library millwork',
    'walk-in closets',
    'home office built-ins'
  ],
  openGraph: {
    title: "Bespoke Cabinetry | PineWood Cabinets",
    description: "Museum-grade bespoke cabinetry for libraries, closets, entertainment centers, and wine rooms throughout California's luxury homes.",
    images: ['/images/services/bespoke-cabinetry-hero.webp'],
  },
}

export default function BespokeCabinetryPage() {
  const serviceSchema = generateServiceSchema(
    "Bespoke Cabinetry & Custom Built-Ins",
    "Museum-grade custom cabinetry for libraries, entertainment centers, wine rooms, closets, and home offices throughout California's luxury homes",
    "Custom Cabinetry",
    ["Atherton, CA", "Beverly Hills, CA", "Malibu, CA", "Palo Alto, CA", "Montecito, CA", "Marin County, CA"]
  )

  return (
    <>
      <StructuredData service={serviceSchema} />

      <HeroQuiet
        title="Bespoke Cabinetry Beyond the Kitchen"
        subtitle="Custom Built-Ins & Storage Solutions"
        description="From library sanctuaries to entertainment centers, from wine cellars to walk-in closets—we create bespoke storage solutions that disappear into architecture while maximizing both beauty and utility."
        imageSrc="bespoke-cabinetry-hero.webp"
        imageAlt="Built-in entertainment center with hidden storage in living room"
        primaryCTA={{
          text: "Schedule Design Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Bespoke Projects",
          href: "/portfolio?category=bespoke"
        }}
      />

      {/* Breadcrumbs */}
      <div className="bg-ivory py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <LocationBreadcrumbs pathname="/services/bespoke-cabinetry" />
        </div>
      </div>

      {/* Executive Overview */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-8 text-balance">
              The Art of Invisible Storage: Bespoke Cabinetry Excellence
            </h1>
            <div className="prose-luxury">
              <p className="text-xl leading-relaxed text-charcoal/80 mb-8">
                While kitchens may be the heart of the home, truly exceptional living extends far beyond culinary spaces. Our bespoke cabinetry services encompass every room where storage, display, and organization intersect with architectural beauty—from grand libraries that house treasured collections to entertainment centers that seamlessly integrate cutting-edge technology, from wine cellars that preserve precious vintages to closets that organize life's daily essentials with museum-like precision.
              </p>
              <p className="text-lg leading-relaxed text-charcoal/70 mb-6">
                Each bespoke piece we create represents a unique solution to the complex challenge of maximizing functionality while maintaining aesthetic integrity. Our approach treats storage not as an afterthought, but as an integral component of architectural design—pieces that appear to have grown naturally from the structure itself, supporting both daily routines and special occasions with equal grace.
              </p>
              <p className="text-base leading-relaxed text-charcoal/70">
                Whether creating a temperature-controlled wine sanctuary in a Napa Valley estate, a technology-integrated entertainment center in a Beverly Hills mansion, or a walk-in closet that rivals luxury boutiques in a Pebble Beach residence, our commitment remains constant: to craft storage solutions that enhance rather than compromise the living experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Comprehensive Bespoke Solutions
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Every room in your home deserves the same attention to detail and craftsmanship excellence that defines our kitchen work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Libraries & Studies',
                description: 'Floor-to-ceiling bookcases, reading nooks, and display systems that celebrate literary collections while providing comfortable spaces for contemplation and work.',
                features: ['Rolling ladder systems', 'Integrated lighting', 'Climate control', 'Display cases', 'Reading alcoves', 'Desk integration'],
                image: 'library-millwork-walnut.webp'
              },
              {
                title: 'Entertainment Centers',
                description: 'Sophisticated media integration that conceals technology while providing optimal viewing experiences and organized storage for equipment and media.',
                features: ['Hidden TV lifts', 'Equipment ventilation', 'Cable management', 'Acoustic design', 'Remote integration', 'Gaming storage'],
                image: 'entertainment-center-modern.webp'
              },
              {
                title: 'Wine Cellars & Tasting Rooms',
                description: 'Climate-controlled environments that preserve and display wine collections while creating atmospheric spaces for tasting and entertaining.',
                features: ['Temperature control', 'Humidity management', 'Bottle organization', 'Tasting bars', 'Display lighting', 'Security systems'],
                image: 'wine-cellar-custom-storage.webp'
              },
              {
                title: 'Walk-In Closets',
                description: 'Boutique-quality organization systems that transform closets into luxury dressing rooms with specialized storage for every wardrobe need.',
                features: ['Automated systems', 'LED lighting', 'Jewelry storage', 'Shoe organization', 'Tie & belt racks', 'Island seating'],
                image: 'walk-in-closet-luxury.webp'
              },
              {
                title: 'Home Offices',
                description: 'Productive workspace solutions that integrate technology, storage, and comfort while maintaining residential warmth and style.',
                features: ['Built-in desks', 'File organization', 'Technology integration', 'Acoustic treatments', 'Privacy screens', 'Meeting areas'],
                image: 'home-office-built-ins.webp'
              },
              {
                title: 'Specialty Storage',
                description: 'Custom solutions for unique collections and hobbies, from art storage to sports equipment organization, crafted to preserve and display treasured items.',
                features: ['Art storage systems', 'Sports equipment', 'Hobby organization', 'Collection displays', 'Climate protection', 'Security features'],
                image: 'specialty-storage-custom.webp'
              }
            ].map((service, index) => (
              <div key={index} className="bg-ivory p-8 rounded-lg border border-french-gray/20 hover:border-deep-green/30 transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-[4/3] mb-6 rounded-lg overflow-hidden">
                  <OptimizedImage
                    filename={service.image}
                    alt={`${service.title} custom cabinetry example showing premium craftsmanship and functionality`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-4">
                  {service.title}
                </h3>
                <p className="text-charcoal/80 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-charcoal/70">
                      <span className="w-1 h-1 bg-brass rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="font-display text-4xl font-bold text-charcoal mb-8">
                The Philosophy of Invisible Integration
              </h2>
              <div className="prose-luxury">
                <p className="text-lg leading-relaxed text-charcoal/80 mb-6">
                  The finest bespoke cabinetry achieves a paradox: maximum functionality with minimal visual intrusion. Our design philosophy centers on creating storage solutions that feel integral to the architecture rather than imposed upon it. This requires deep understanding of both the space's architectural character and the specific needs of those who will use it daily.
                </p>
                <p className="text-base leading-relaxed text-charcoal/70 mb-6">
                  We begin every project by studying the room's proportions, natural light patterns, traffic flow, and relationship to adjacent spaces. Only then do we develop storage strategies that enhance rather than compromise the spatial experience. The result is cabinetry that appears to have been part of the original architectural vision.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Architectural integration that respects original design intent</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Functional optimization based on actual usage patterns</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Material selection that complements existing finishes</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Technology integration that remains invisible until needed</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <OptimizedImage
                filename="bespoke-design-process.webp"
                alt="Bespoke cabinetry design process showing architectural integration and custom solutions"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study: Atherton Estate Library */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-6">
              Case Study: The Atherton Estate Library
            </h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              A 2,000-volume private library that seamlessly integrates reading, display, and technology while honoring the home's 1920s architectural heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative">
              <OptimizedImage
                filename="atherton-estate-library-case-study.webp"
                alt="Custom library millwork in Atherton estate featuring floor-to-ceiling bookcases and reading nook"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold mb-6">
                The Challenge
              </h3>
              <p className="text-lg leading-relaxed text-french-gray mb-6">
                A prominent venture capitalist's 1920s Colonial Revival estate required a library that could house an extensive book collection while providing comfortable spaces for reading, video conferencing, and small meetings—all while respecting the home's historic character.
              </p>
              
              <h3 className="font-display text-2xl font-bold mb-6 text-brass">
                The Solution
              </h3>
              <div className="space-y-4 text-french-gray">
                <p>
                  <strong className="text-brass">Architectural Harmony:</strong> Custom millwork that matched the home's original crown molding and baseboard profiles, creating seamless integration with existing architecture.
                </p>
                <p>
                  <strong className="text-brass">Functional Zoning:</strong> Separate areas for focused reading, casual browsing, and business calls, each with appropriate lighting and acoustic treatment.
                </p>
                <p>
                  <strong className="text-brass">Technology Integration:</strong> Hidden AV equipment, motorized TV lift, and integrated video conferencing system that disappears when not in use.
                </p>
                <p>
                  <strong className="text-brass">Climate Control:</strong> Specialized HVAC integration to protect valuable books while maintaining human comfort.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-deep-green/20 p-12 rounded-lg">
            <h3 className="font-display text-2xl font-bold mb-8 text-center">
              Project Results & Recognition
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h4 className="font-display text-lg font-semibold mb-3">
                  Design Excellence
                </h4>
                <p className="text-sm text-french-gray leading-relaxed">
                  Featured in Architectural Digest as "Best Residential Library Design" for seamless integration of technology and tradition.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📚</div>
                <h4 className="font-display text-lg font-semibold mb-3">
                  Functional Success
                </h4>
                <p className="text-sm text-french-gray leading-relaxed">
                  Accommodates 2,000+ volumes with room for expansion, plus integrated workspace for daily business activities.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⭐</div>
                <h4 className="font-display text-lg font-semibold mb-3">
                  Client Satisfaction
                </h4>
                <p className="text-sm text-french-gray leading-relaxed">
                  "This library has become the most used room in our house. It perfectly balances work and relaxation needs."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Excellence */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Materials & Craftsmanship Excellence
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Every bespoke piece receives the same attention to material selection and construction quality that defines our kitchen work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-grain p-8 rounded-lg border border-french-gray/20">
              <h3 className="font-display text-xl font-bold text-charcoal mb-6">
                Premium Material Selection
              </h3>
              <div className="space-y-4 text-charcoal/70">
                <p>
                  <strong>Hardwood Excellence:</strong> Quarter-sawn oak, figured walnut, and cherry selected for stability and grain character, with FSC certification ensuring sustainable sourcing.
                </p>
                <p>
                  <strong>Veneer Artistry:</strong> Book-matched and slip-matched veneers creating continuous grain flow across large surfaces, with expert selection for color and figure consistency.
                </p>
                <p>
                  <strong>Hardware Integration:</strong> Premium European hardware systems providing smooth, quiet operation with adjustability for long-term performance.
                </p>
                <p>
                  <strong>Specialty Materials:</strong> Leather, fabric, metal, and glass integration for accent elements and functional components requiring specialized properties.
                </p>
              </div>
            </div>

            <div className="bg-charcoal text-ivory p-8 rounded-lg">
              <h3 className="font-display text-xl font-bold mb-6">
                Advanced Construction Methods
              </h3>
              <div className="space-y-4 text-french-gray">
                <p>
                  <strong className="text-brass">Traditional Joinery:</strong> Mortise and tenon, dovetail, and dado joints providing superior strength and longevity compared to mechanical fasteners alone.
                </p>
                <p>
                  <strong className="text-brass">Precision Fitting:</strong> Hand-fitted joints and adjustments ensuring perfect alignment and smooth operation throughout the service life.
                </p>
                <p>
                  <strong className="text-brass">Climate Adaptation:</strong> Construction methods that accommodate seasonal wood movement while maintaining structural integrity and appearance.
                </p>
                <p>
                  <strong className="text-brass">Modular Design:</strong> Component systems allowing for future modifications, technology updates, and changing storage needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Invisible Technology Integration
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Modern living requires sophisticated technology, but the best integration makes technology invisible until needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Automated Systems',
                description: 'Motorized doors, drawers, and lifts controlled by smartphone apps or integrated home automation systems.',
                features: ['Motorized TV lifts', 'Automated doors', 'Smart lighting', 'Climate control integration']
              },
              {
                title: 'Charging & Connectivity',
                description: 'Integrated charging stations, wireless charging pads, and connectivity hubs hidden within cabinetry.',
                features: ['Wireless charging', 'USB integration', 'Cable management', 'Network connectivity']
              },
              {
                title: 'Security Features',
                description: 'Biometric locks, hidden safes, and security system integration protecting valuable collections.',
                features: ['Biometric access', 'Hidden compartments', 'Security integration', 'Monitoring systems']
              }
            ].map((tech, index) => (
              <div key={index} className="bg-ivory p-6 rounded-lg border border-french-gray/20">
                <h3 className="font-display text-lg font-semibold text-charcoal mb-4">
                  {tech.title}
                </h3>
                <p className="text-charcoal/80 mb-4 leading-relaxed">
                  {tech.description}
                </p>
                <ul className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-charcoal/60 flex items-start">
                      <span className="w-1 h-1 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Transform Every Room with Bespoke Excellence"
        description="Discover how our bespoke cabinetry solutions can enhance every aspect of your home with the same museum-grade craftsmanship that defines our kitchen work. Schedule your consultation today."
        primaryCTA={{
          text: "Schedule Design Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Bespoke Portfolio",
          href: "/portfolio?category=bespoke"
        }}
        background="dark"
      />
    </>
  )
}
