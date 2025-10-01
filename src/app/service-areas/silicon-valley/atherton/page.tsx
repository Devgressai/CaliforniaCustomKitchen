import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { ProjectGrid } from '@/components/ProjectGrid'
import { OptimizedImage } from '@/components/OptimizedImage'
import { LocationBreadcrumbs } from '@/components/Breadcrumbs'
import { StructuredData, generateLocalBusinessSchema } from '@/components/StructuredData'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Custom Kitchen Cabinets Atherton CA | Luxury Cabinetry Silicon Valley",
  description: "Museum-grade custom kitchens & bespoke cabinetry for Atherton's most prestigious estates. Serving Silicon Valley's tech elite with uncompromising craftsmanship since 2006.",
  keywords: [
    'custom kitchens Atherton',
    'luxury cabinetry Silicon Valley',
    'bespoke millwork Atherton CA',
    'high-end kitchen design',
    'custom cabinets tech executives',
    'architectural millwork Atherton',
    'luxury home renovations Silicon Valley'
  ],
  openGraph: {
    title: "Custom Kitchen Cabinets Atherton CA | AV's Cabinets",
    description: "Museum-grade custom kitchens for Atherton's most discerning homeowners. Serving Silicon Valley's tech elite with uncompromising craftsmanship.",
    images: ['/images/atherton-estate-kitchen-hero.webp'],
  },
}

const athertonProjects = [
  {
    id: 1,
    title: 'Tech Executive Estate Kitchen',
    location: 'Atherton, CA',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-14-sacramento-california.webp',
    alt: 'Custom inset walnut cabinetry in Atherton tech executive kitchen with brass hardware',
    description: 'A symphony of quarter-sawn walnut and hand-forged brass for a leading Silicon Valley innovator.'
  },
  {
    id: 2,
    title: 'Contemporary Minimalist Kitchen',
    location: 'Atherton, CA',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-15-sacramento-california.webp',
    alt: 'Minimalist white oak kitchen with integrated appliances in Atherton contemporary home',
    description: 'Clean lines and hidden storage create serene functionality for a venture capitalist family.'
  },
  {
    id: 3,
    title: 'Traditional Estate Kitchen',
    location: 'Atherton, CA',
    imageSrc: '/images/portfolio/gallery-luxury-custom-kitchen-16-sacramento-california.webp',
    alt: 'Traditional cherry cabinetry with raised panels in historic Atherton estate',
    description: 'Honoring architectural heritage while incorporating modern conveniences for multi-generational living.'
  }
]

export default function AthertonPage() {
  const localBusinessSchema = generateLocalBusinessSchema("Atherton, California", {
    lat: "37.4611",
    lng: "-122.1978"
  })

  return (
    <>
      <StructuredData localBusiness={localBusinessSchema} />

      <HeroQuiet
        title="Atherton's Premier Custom Cabinetry"
        subtitle="Silicon Valley Excellence"
        description="Where innovation meets tradition. Museum-grade craftsmanship for America's most exclusive community, serving tech leaders and visionaries who demand nothing less than perfection."
        imageSrc="atherton-estate-kitchen-hero.webp"
        imageAlt="Luxury custom kitchen in Atherton estate with marble countertops and walnut cabinetry"
        primaryCTA={{
          text: "Schedule Private Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Atherton Portfolio",
          href: "/portfolio?location=atherton"
        }}
      />

      {/* Breadcrumbs */}
      <div className="bg-ivory py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <LocationBreadcrumbs pathname="/service-areas/silicon-valley/atherton" />
        </div>
      </div>

      {/* Executive Overview */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-8 text-balance">
              Custom Kitchen Cabinets for Atherton's Elite
            </h1>
            <div className="prose-luxury">
              <p className="text-xl leading-relaxed text-charcoal/80 mb-8">
                In Atherton—America's most expensive zip code and home to tech titans, venture capitalists, and visionary entrepreneurs—exceptional homes demand exceptional craftsmanship. Since 2006, AV's Cabinets has served as the preferred cabinetry artisan for Silicon Valley's most discerning residents, creating custom kitchens and architectural millwork that reflect both the innovation spirit of the Valley and the timeless principles of fine craftsmanship.
              </p>
              <p className="text-lg leading-relaxed text-charcoal/70 mb-6">
                Our Atherton clients represent the pinnacle of achievement in technology, finance, and entrepreneurship—individuals who have revolutionized industries and shaped the global economy. They understand that true luxury lies not in ostentation, but in the quiet confidence of uncompromising quality, meticulous attention to detail, and the kind of craftsmanship that improves with age rather than diminishing over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Atherton Design Philosophy */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-charcoal mb-8">
                Design Philosophy for Silicon Valley's Finest
              </h2>
              <div className="prose-luxury">
                <p className="text-lg leading-relaxed text-charcoal/80 mb-6">
                  Atherton's architectural landscape spans from historic Craftsman estates to cutting-edge contemporary masterpieces, each reflecting the unique vision of residents who have succeeded at the highest levels of innovation and business. Our design philosophy embraces this diversity while maintaining unwavering standards of craftsmanship and functionality.
                </p>
                <p className="text-base leading-relaxed text-charcoal/70 mb-6">
                  We understand that our Atherton clients live at the intersection of tradition and innovation. They appreciate the heritage of fine craftsmanship while embracing the possibilities of modern technology and design. This duality informs every aspect of our work—from the selection of sustainably harvested hardwoods to the integration of smart home systems that anticipate needs before they're expressed.
                </p>
                <p className="text-base leading-relaxed text-charcoal/70">
                  The result is cabinetry that feels both timeless and thoroughly contemporary—pieces that honor the past while embracing the future, much like the visionary leaders who call Atherton home.
                </p>
              </div>
            </div>
            <div className="relative">
              <OptimizedImage
                filename="atherton-design-process.webp"
                alt="Custom kitchen design process for Atherton estate showing architectural drawings and wood samples"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Material Intelligence for Tech Elite */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Material Intelligence: Technology Meets Tradition
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our Atherton clients expect the same level of innovation in their cabinetry that they bring to their professional endeavors—cutting-edge materials, advanced engineering, and sustainable practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Sustainable Innovation',
                description: 'FSC-certified hardwoods from responsibly managed forests, reflecting the environmental consciousness that defines Silicon Valley leadership.',
                icon: '🌱'
              },
              {
                title: 'Precision Engineering',
                description: 'CNC precision combined with hand-crafted finishing, achieving tolerances that rival semiconductor manufacturing.',
                icon: '⚙️'
              },
              {
                title: 'Smart Integration',
                description: 'Seamless incorporation of home automation, charging stations, and IoT devices without compromising aesthetic integrity.',
                icon: '🔌'
              },
              {
                title: 'Advanced Finishes',
                description: 'Nano-ceramic coatings and UV-cured finishes that provide unprecedented durability and resistance to daily wear.',
                icon: '✨'
              },
              {
                title: 'Rare Species Access',
                description: 'Exclusive access to book-matched veneers from premium logs, creating one-of-a-kind grain patterns for discerning collectors.',
                icon: '🪵'
              },
              {
                title: 'Future-Proof Design',
                description: 'Modular construction allowing for technology upgrades and lifestyle changes without complete replacement.',
                icon: '🔮'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-ivory border border-french-gray/20 hover:border-deep-green/30 transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-4">
                  {feature.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-charcoal text-ivory p-12 rounded-lg">
            <h3 className="font-display text-2xl font-bold mb-6">
              The Atherton Advantage: Exclusive Material Access
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-display text-lg font-semibold mb-4 text-brass">
                  Premium Hardwood Selections
                </h4>
                <ul className="space-y-2 text-french-gray">
                  <li>• Quarter-sawn White Oak from Pennsylvania heritage forests</li>
                  <li>• Figured Black Walnut with exceptional grain character</li>
                  <li>• Book-matched Cherry veneers from single-log selections</li>
                  <li>• Reclaimed Chestnut from historic California structures</li>
                  <li>• Exotic species: Zebrawood, Wenge, Brazilian Rosewood</li>
                </ul>
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold mb-4 text-brass">
                  Advanced Engineering Materials
                </h4>
                <ul className="space-y-2 text-french-gray">
                  <li>• Aircraft-grade aluminum for structural components</li>
                  <li>• Solid surface materials with antimicrobial properties</li>
                  <li>• Smart glass for display cases and wine storage</li>
                  <li>• Carbon fiber reinforcement for ultra-thin profiles</li>
                  <li>• Integrated LED systems with 50,000-hour lifespans</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Excellence */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <OptimizedImage
                filename="atherton-engineering-precision.webp"
                alt="Precision engineering and tolerances in custom cabinetry manufacturing for Atherton homes"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl font-bold text-charcoal mb-8">
                Engineering Excellence: Silicon Valley Standards
              </h2>
              <div className="prose-luxury">
                <p className="text-lg leading-relaxed text-charcoal/80 mb-6">
                  Our Atherton clients operate in industries where precision isn't just preferred—it's essential for success. We apply the same exacting standards to our cabinetry, employing engineering principles and quality control processes that would be familiar to any Silicon Valley R&D department.
                </p>
                
                <h3 className="font-display text-xl font-semibold text-charcoal mb-4">
                  Precision Manufacturing Process
                </h3>
                <ul className="space-y-3 text-charcoal/70 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>CAD/CAM Integration:</strong> 3D modeling with millimeter precision, allowing virtual assembly before physical construction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>CNC Machining:</strong> Computer-controlled cutting with 1/64" tolerance standards across all components</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Quality Control Protocols:</strong> Multi-stage inspection process with statistical process control</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Environmental Testing:</strong> Humidity and temperature stress testing to ensure stability</span>
                  </li>
                </ul>

                <h3 className="font-display text-xl font-semibold text-charcoal mb-4">
                  Advanced Joinery Techniques
                </h3>
                <p className="text-base leading-relaxed text-charcoal/70">
                  We combine traditional mortise-and-tenon joinery with modern engineering, creating connections that are both aesthetically pleasing and structurally superior. Our dovetail drawer construction, reinforced with precision-milled aluminum guides, ensures smooth operation for decades while maintaining the visual appeal of traditional craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atherton Lifestyle Integration */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Designed for the Atherton Lifestyle
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              From intimate family gatherings to board-level entertaining, our kitchens adapt to the unique rhythms of Silicon Valley leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-charcoal text-ivory p-8 rounded-lg">
              <h3 className="font-display text-2xl font-bold mb-6">
                Executive Entertaining
              </h3>
              <div className="space-y-4 text-french-gray">
                <p>
                  <strong className="text-brass">Multi-Zone Functionality:</strong> Separate prep, cooking, and serving areas allow seamless coordination during large gatherings while maintaining conversation flow.
                </p>
                <p>
                  <strong className="text-brass">Professional-Grade Equipment:</strong> Integration of commercial appliances with residential aesthetics for serious culinary endeavors.
                </p>
                <p>
                  <strong className="text-brass">Wine Program Support:</strong> Climate-controlled storage, serving stations, and glassware organization for extensive wine collections.
                </p>
                <p>
                  <strong className="text-brass">Catering Accommodation:</strong> Service entrances, staging areas, and equipment storage for professional catering operations.
                </p>
              </div>
            </div>

            <div className="bg-deep-green text-ivory p-8 rounded-lg">
              <h3 className="font-display text-2xl font-bold mb-6">
                Family-Centered Design
              </h3>
              <div className="space-y-4 text-french-gray">
                <p>
                  <strong className="text-brass">Homework Stations:</strong> Built-in desks and charging stations for children's study needs within sight lines of cooking areas.
                </p>
                <p>
                  <strong className="text-brass">Health-Conscious Storage:</strong> Specialized organization for organic foods, supplements, and specialty dietary requirements.
                </p>
                <p>
                  <strong className="text-brass">Multi-Generational Access:</strong> Universal design principles ensuring comfort for family members of all ages and abilities.
                </p>
                <p>
                  <strong className="text-brass">Technology Integration:</strong> Smart home connectivity, entertainment systems, and communication hubs for busy family coordination.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-grain p-12 rounded-lg">
            <h3 className="font-display text-3xl font-bold text-charcoal mb-8 text-center">
              The Silicon Valley Executive Kitchen: A Case Study
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <OptimizedImage
                  filename="atherton-executive-kitchen-case-study.webp"
                  alt="Custom kitchen designed for Silicon Valley tech executive featuring smart technology integration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <p className="text-lg leading-relaxed text-charcoal/80 mb-6">
                  For a prominent venture capitalist's 12,000-square-foot Atherton estate, we created a kitchen that seamlessly balances the demands of high-level business entertaining with the intimacy of family life.
                </p>
                <div className="space-y-4 text-charcoal/70">
                  <div className="flex items-start">
                    <span className="w-3 h-3 bg-brass rounded-full mt-1 mr-3 flex-shrink-0"></span>
                    <span><strong>Challenge:</strong> Accommodate 40-person board dinners while maintaining daily family functionality</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-3 h-3 bg-brass rounded-full mt-1 mr-3 flex-shrink-0"></span>
                    <span><strong>Solution:</strong> Dual island configuration with retractable service areas and hidden prep zones</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-3 h-3 bg-brass rounded-full mt-1 mr-3 flex-shrink-0"></span>
                    <span><strong>Innovation:</strong> Integrated AV system for presentations during dinner meetings</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-3 h-3 bg-brass rounded-full mt-1 mr-3 flex-shrink-0"></span>
                    <span><strong>Result:</strong> A space that transforms from intimate family kitchen to executive boardroom seamlessly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Atherton Projects */}
      <ProjectGrid
        projects={athertonProjects}
        title="Recent Atherton Commissions"
        description="Each project represents a unique collaboration with Silicon Valley's most visionary leaders, creating spaces that reflect both personal style and professional excellence."
      />

      {/* Atherton-Specific Services */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-6">
              Specialized Services for Atherton Estates
            </h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              Beyond custom kitchens, we provide comprehensive cabinetry solutions for every aspect of luxury living in Silicon Valley's premier community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Executive Home Offices',
                description: 'Custom millwork for home offices that rival corporate boardrooms, with integrated technology and confidential document storage.',
                features: ['Built-in video conferencing', 'Secure file storage', 'Cable management systems', 'Acoustic treatments']
              },
              {
                title: 'Wine Cellars & Tasting Rooms',
                description: 'Climate-controlled wine storage and tasting environments for serious collectors and entertaining.',
                features: ['Temperature control integration', 'Humidity management', 'Display systems', 'Tasting bar design']
              },
              {
                title: 'Library & Study Spaces',
                description: 'Sophisticated millwork for book collections, reading areas, and quiet contemplation spaces.',
                features: ['Floor-to-ceiling bookcases', 'Rolling ladder systems', 'Reading nook design', 'Lighting integration']
              },
              {
                title: 'Master Suite Closets',
                description: 'Boutique-quality wardrobe organization with luxury finishes and smart storage solutions.',
                features: ['Automated systems', 'Climate control', 'Display lighting', 'Jewelry storage']
              },
              {
                title: 'Entertainment Centers',
                description: 'Integrated media solutions that blend seamlessly with architectural elements.',
                features: ['Hidden TV lifts', 'Equipment concealment', 'Acoustic design', 'Smart home integration']
              },
              {
                title: 'Guest Suite Amenities',
                description: 'Hospitality-grade amenities ensuring guest comfort in secondary residences and guest quarters.',
                features: ['Kitchenette design', 'Bathroom vanities', 'Closet systems', 'Welcome amenities']
              }
            ].map((service, index) => (
              <div key={index} className="bg-deep-green/20 p-8 rounded-lg border border-french-gray/20">
                <h3 className="font-display text-xl font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-french-gray leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-french-gray flex items-start">
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

      {/* Atherton Architecture Integration */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Honoring Atherton's Architectural Heritage
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              From historic Craftsman estates to cutting-edge contemporary designs, we ensure our cabinetry enhances rather than competes with architectural character.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="font-display text-2xl font-bold text-charcoal mb-6">
                Historic Estate Restoration
              </h3>
              <div className="prose-luxury">
                <p className="text-base leading-relaxed text-charcoal/80 mb-4">
                  Many of Atherton's most prestigious properties are historic estates dating to the early 20th century. Our restoration work honors original architectural intent while incorporating modern functionality and technology.
                </p>
                <p className="text-base leading-relaxed text-charcoal/70 mb-6">
                  We work closely with preservation architects to ensure that our interventions are both historically appropriate and functionally superior, often recreating period-appropriate millwork profiles using traditional joinery methods combined with modern engineering.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Period-accurate door styles and hardware selections</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Traditional finishing techniques using modern, durable materials</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Seamless integration of contemporary appliances and technology</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <OptimizedImage
                filename="atherton-historic-restoration.webp"
                alt="Historic Atherton estate kitchen restoration with period-appropriate cabinetry"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <OptimizedImage
                filename="atherton-contemporary-design.webp"
                alt="Contemporary Atherton home with minimalist custom cabinetry design"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="font-display text-2xl font-bold text-charcoal mb-6">
                Contemporary Innovation
              </h3>
              <div className="prose-luxury">
                <p className="text-base leading-relaxed text-charcoal/80 mb-4">
                  Atherton's newer construction represents the pinnacle of contemporary residential design, often featuring dramatic architectural elements like soaring ceilings, walls of glass, and open-plan living spaces.
                </p>
                <p className="text-base leading-relaxed text-charcoal/70 mb-6">
                  Our contemporary work emphasizes clean lines, innovative materials, and seamless integration with smart home technology, creating kitchens that feel like natural extensions of the architectural vision.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Minimalist aesthetics with maximum functionality</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Integrated lighting and smart home connectivity</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Sustainable materials and energy-efficient design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care & Maintenance for Luxury Homes */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Preserving Your Investment
            </h2>
            <p className="text-xl text-charcoal/80">
              Our Atherton clients understand that true luxury lies in longevity. We provide comprehensive care programs to ensure your cabinetry maintains its beauty and functionality for generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-ivory p-8 rounded-lg border border-french-gray/20">
              <h3 className="font-display text-xl font-bold text-charcoal mb-6">
                Concierge Maintenance Program
              </h3>
              <div className="space-y-4 text-charcoal/70">
                <p>
                  <strong>Annual Inspection & Tune-Up:</strong> Comprehensive assessment of hardware, finishes, and functionality with on-site adjustments and minor repairs.
                </p>
                <p>
                  <strong>Seasonal Conditioning:</strong> Professional cleaning and conditioning treatments to protect against California's varied climate conditions.
                </p>
                <p>
                  <strong>Hardware Optimization:</strong> Lubrication and adjustment of hinges, slides, and mechanisms to ensure smooth, quiet operation.
                </p>
                <p>
                  <strong>Finish Protection:</strong> Application of protective treatments and touch-up work to maintain showroom appearance.
                </p>
              </div>
            </div>

            <div className="bg-charcoal text-ivory p-8 rounded-lg">
              <h3 className="font-display text-xl font-bold mb-6">
                Emergency Response Service
              </h3>
              <div className="space-y-4 text-french-gray">
                <p>
                  <strong className="text-brass">24/7 Support:</strong> Emergency response for urgent repairs that could affect kitchen functionality or home security.
                </p>
                <p>
                  <strong className="text-brass">Parts Inventory:</strong> Maintained inventory of replacement components for immediate repair without waiting for special orders.
                </p>
                <p>
                  <strong className="text-brass">Technology Updates:</strong> Assistance with smart home integration updates and new technology incorporation.
                </p>
                <p>
                  <strong className="text-brass">Lifestyle Adaptations:</strong> Modifications and additions as family needs evolve or entertaining requirements change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration with Design Professionals */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Collaborating with Silicon Valley's Design Elite
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              The most successful Atherton projects result from collaboration between visionary architects, talented interior designers, and master craftsmen who understand the unique requirements of luxury living.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-deep-green rounded-full"></div>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-4">
                Architectural Integration
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                We work closely with renowned architects like <Link href="#" className="text-deep-green hover:text-oxblood transition-colors">Bohlin Cywinski Jackson</Link>, <Link href="#" className="text-deep-green hover:text-oxblood transition-colors">Walker Warner Architects</Link>, and <Link href="#" className="text-deep-green hover:text-oxblood transition-colors">Backen & Gillam</Link> to ensure seamless integration with architectural vision.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-deep-green rounded-full"></div>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-4">
                Interior Design Partnership
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Collaboration with top interior designers including <Link href="#" className="text-deep-green hover:text-oxblood transition-colors">Nicole Hollis</Link>, <Link href="#" className="text-deep-green hover:text-oxblood transition-colors">Ken Fulk</Link>, and <Link href="#" className="text-deep-green hover:text-oxblood transition-colors">Orlando Diaz-Azcuy</Link> ensures cohesive aesthetic vision throughout the home.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-deep-green rounded-full"></div>
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-4">
                Project Management Excellence
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our project management approach coordinates seamlessly with general contractors like <Link href="#" className="text-deep-green hover:text-oxblood transition-colors">Edmonds + Lee</Link> and <Link href="#" className="text-deep-green hover:text-oxblood transition-colors">Vance Brown Builders</Link> to ensure flawless execution.
              </p>
            </div>
          </div>

          <div className="bg-charcoal text-ivory p-12 rounded-lg">
            <h3 className="font-display text-2xl font-bold mb-8 text-center">
              The Atherton Design Process: A Collaborative Journey
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { phase: '01', title: 'Vision Alignment', description: 'Initial meetings with entire design team to establish shared vision and project goals' },
                { phase: '02', title: 'Technical Integration', description: 'Detailed coordination of cabinetry with architectural and MEP systems' },
                { phase: '03', title: 'Material Curation', description: 'Collaborative selection of materials that support overall design narrative' },
                { phase: '04', title: 'Precision Execution', description: 'Coordinated installation with protection of all other trades and finishes' }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="text-brass font-display text-lg font-bold mb-3">
                    {step.phase}
                  </div>
                  <h4 className="font-display text-lg font-semibold mb-3">
                    {step.title}
                  </h4>
                  <p className="text-french-gray text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions - Atherton Specific */}
      <section className="py-24 bg-grain">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-charcoal/80">
              Answers to common questions from Atherton homeowners about custom cabinetry projects.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "What makes AV's Cabinets the preferred choice for Atherton's tech elite?",
                answer: "Our clients choose us because we understand the intersection of innovation and tradition that defines Silicon Valley leadership. We combine cutting-edge engineering and manufacturing techniques with time-honored craftsmanship traditions, creating cabinetry that reflects the same pursuit of excellence that drives success in technology and business. Our ability to integrate smart home technology, accommodate complex entertaining requirements, and deliver museum-quality finishing sets us apart in serving the unique needs of Atherton residents."
              },
              {
                question: "How do you ensure privacy and discretion during high-profile projects?",
                answer: "Discretion is paramount when working with prominent clients. All team members sign comprehensive non-disclosure agreements, and we maintain strict protocols regarding project photography, social media, and client information. Our installation teams are trained in executive protection protocols and work with existing household staff and security teams to ensure minimal disruption. We can provide references from similar high-profile projects while maintaining complete confidentiality about specific client details."
              },
              {
                question: "What is the typical investment range for an Atherton custom kitchen project?",
                answer: "Atherton kitchen projects typically range from $200,000 to $800,000, depending on size, complexity, and material selections. This investment reflects the level of craftsmanship, premium materials, and specialized engineering required for homes of this caliber. We provide detailed cost breakdowns during the design phase, and many clients find that the long-term value and daily satisfaction justify the investment. Our work often increases property values significantly, making it both a lifestyle enhancement and a sound financial decision."
              },
              {
                question: "How do you coordinate with other luxury trades during whole-house renovations?",
                answer: "We have extensive experience working with the premier contractors, architects, and artisans who serve Atherton's luxury market. Our project management approach includes detailed scheduling coordination, protection protocols for completed work, and regular communication with all trades. We often serve as the cabinetry consultant during the design phase, helping optimize space planning and systems integration before construction begins. This collaborative approach ensures seamless project flow and exceptional results."
              },
              {
                question: "Can you accommodate unique architectural features common in Atherton estates?",
                answer: "Absolutely. Atherton's diverse architectural landscape—from historic Craftsman estates to cutting-edge contemporary designs—requires flexibility and expertise in multiple design styles. We regularly work with challenging features like vaulted ceilings, curved walls, historic millwork profiles, and complex sight lines. Our custom fabrication capabilities and traditional joinery skills allow us to create solutions that enhance rather than compromise architectural integrity."
              },
              {
                question: "What smart home integration capabilities do you offer?",
                answer: "We work with leading home automation companies like Crestron, Control4, and Savant to integrate cabinetry with smart home systems. This includes motorized cabinet doors, integrated charging stations, automated lighting systems, climate-controlled wine storage, and connectivity for kitchen appliances. We design infrastructure during the planning phase to accommodate current technology while allowing for future upgrades without major renovation."
              },
              {
                question: "How do you handle the unique entertaining requirements of Silicon Valley executives?",
                answer: "Our Atherton clients often host board meetings, investor dinners, and industry events that require sophisticated kitchen functionality. We design multi-zone kitchens with separate prep areas, professional-grade equipment integration, extensive wine storage, and service areas that support catering operations. Features like hidden service doors, warming drawers, and specialized storage for entertaining equipment ensure that hosts can manage large events while maintaining an elegant, uncluttered appearance."
              },
              {
                question: "What warranty and ongoing support do you provide for Atherton projects?",
                answer: "We provide comprehensive warranty coverage including five years on construction, three years on finishes, and full manufacturer warranties on all hardware. Beyond warranty periods, we offer ongoing maintenance services including annual inspections, seasonal conditioning, and emergency repair response. Many Atherton clients enroll in our concierge maintenance program, which provides priority scheduling and proactive care to ensure their investment maintains its beauty and functionality for decades."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-ivory p-8 rounded-lg border border-french-gray/20">
                <h3 className="font-display text-xl font-semibold text-charcoal mb-4">
                  {faq.question}
                </h3>
                <p className="text-charcoal/80 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Begin Your Atherton Kitchen Journey?"
        description="Join Silicon Valley's most discerning homeowners who have chosen AV's Cabinets for their custom cabinetry needs. Schedule a private consultation to discuss how we can bring your vision to life with uncompromising craftsmanship."
        primaryCTA={{
          text: "Schedule Private Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Atherton Portfolio",
          href: "/portfolio?location=atherton"
        }}
        background="dark"
      />
    </>
  )
}
