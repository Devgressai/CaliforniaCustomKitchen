import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Custom Kitchens Santa Barbara | Luxury Cabinetry Central Coast | PineWood Cabinets',
  description: 'Museum-grade custom kitchens and bespoke cabinetry for Santa Barbara\'s most prestigious coastal homes. Serving Central Coast\'s luxury market with uncompromising craftsmanship since 2006.',
  keywords: [
    'custom kitchens Santa Barbara',
    'luxury cabinetry Central Coast',
    'bespoke cabinetry Santa Barbara',
    'custom kitchen cabinets Santa Barbara',
    'architectural millwork Central Coast',
    'luxury kitchen design Santa Barbara',
    'custom cabinets Santa Barbara',
    'high-end kitchen renovation',
    'premium cabinetry Santa Barbara',
    'custom millwork Central Coast',
    'kitchen design consultation Santa Barbara',
    'luxury home renovation Central Coast',
    'custom storage solutions Santa Barbara',
    'wine cellar design Santa Barbara',
    'kitchen remodeling Santa Barbara'
  ],
  openGraph: {
    title: 'Custom Kitchens Santa Barbara | Luxury Cabinetry Central Coast',
    description: 'Museum-grade custom kitchens and bespoke cabinetry for Santa Barbara\'s most prestigious coastal homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchens Santa Barbara",
  "Museum-grade custom kitchens and bespoke cabinetry for Santa Barbara's most prestigious coastal homes in Central Coast",
  "Custom Kitchens",
  ["Santa Barbara, CA", "Central Coast, CA", "Montecito, CA", "Carpinteria, CA", "Goleta, CA"]
)

export default function SantaBarbaraPage() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="Custom Kitchens Santa Barbara"
        subtitle="Museum-Grade Cabinetry for Central Coast's Coastal Luxury"
        description="Serving Santa Barbara's discerning homeowners with uncompromising craftsmanship and luxury kitchen design since 2006."
        imageSrc="service-areas/santa-barbara-hero.webp"
        imageAlt="Luxury custom kitchen in Santa Barbara coastal home with premium cabinetry and ocean views"
      />

      {/* Santa Barbara Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in santa-barbara</h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                Santa Barbara represents the pinnacle of Central Coast luxury living—where Spanish colonial charm meets contemporary sophistication. Our Santa Barbara clients understand that true elegance lies in creating spaces that honor both the city's historic character and their own refined lifestyle.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From meticulously preserved Spanish colonial homes to contemporary architectural masterpieces, Santa Barbara's diverse architectural landscape demands cabinetry solutions that seamlessly blend historic character with modern luxury and functionality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Population</h3>
                  <p className="text-2xl font-bold text-brass">90,000+</p>
                  <p className="text-sm text-charcoal/70">Coastal luxury residents</p>
                </div>
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Median Home Value</h3>
                  <p className="text-2xl font-bold text-brass">$1.8M+</p>
                  <p className="text-sm text-charcoal/70">Coastal luxury market</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/service-areas/santa-barbara-overview.webp"
                alt="Santa Barbara coastal landscape with Spanish colonial architecture and ocean views"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coastal Living Expertise */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in santa-barbara</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our deep understanding of Santa Barbara's unique coastal environment and luxury market enables us to deliver cabinetry solutions that perfectly complement both the city's historic character and modern living standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Spanish Colonial Heritage</h3>
              <p className="text-charcoal/70 mb-4">
                Santa Barbara's Spanish colonial architecture requires cabinetry that honors historic character while integrating modern functionality and luxury amenities.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Period-appropriate details</li>
                <li>• Historic hardware sourcing</li>
                <li>• Custom millwork matching</li>
                <li>• Preservation compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Coastal Integration</h3>
              <p className="text-charcoal/70 mb-4">
                Santa Barbara's coastal setting requires special consideration for humidity, salt air, and the constant interplay between indoor and outdoor living.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Marine-grade finishes</li>
                <li>• Humidity-resistant materials</li>
                <li>• Indoor-outdoor flow</li>
                <li>• View maximization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Entertainment Focus</h3>
              <p className="text-charcoal/70 mb-4">
                Santa Barbara's social lifestyle demands kitchens that can host both intimate family meals and larger social gatherings.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Flexible layouts</li>
                <li>• Professional appliances</li>
                <li>• Wine storage</li>
                <li>• Outdoor integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Santa Barbara Neighborhoods */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in santa-barbara</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              From the historic downtown to the exclusive hillside communities, we serve all of Santa Barbara's most prestigious neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Downtown Santa Barbara',
              'Montecito',
              'Hope Ranch',
              'Riviera',
              'Mission Canyon',
              'San Roque',
              'Upper State Street',
              'Westside',
              'Eastside',
              'Carpinteria',
              'Goleta',
              'Summerland'
            ].map((neighborhood) => (
              <div key={neighborhood} className="bg-ivory p-6 rounded-lg shadow-sm border border-french-gray/20 text-center hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-charcoal mb-2">{neighborhood}</h3>
                <p className="text-sm text-charcoal/70">Custom cabinetry services</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coastal Design Philosophy */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Luxury Kitchen Design in santa-barbara</h2>
              <p className="text-xl text-ivory/90 mb-6 leading-relaxed">
                Santa Barbara's unique coastal environment creates distinct requirements for luxury kitchen design. Our approach honors the city's historic character while delivering the functionality and elegance modern residents demand.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From morning coffee with ocean views to evening entertaining that showcases the city's natural beauty, every design decision reflects an understanding of how Santa Barbara residents truly live and enjoy their coastal lifestyle.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Historic Preservation</h3>
                <p className="text-ivory/80">Careful preservation of Spanish colonial character while integrating modern luxury and functionality.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Coastal Materials</h3>
                <p className="text-ivory/80">Materials and finishes selected for their beauty and ability to withstand coastal living conditions.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">View Integration</h3>
                <p className="text-ivory/80">Designs that maximize ocean and mountain views while maintaining functionality and historic character.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in santa-barbara</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of custom kitchens and cabinetry projects throughout Santa Barbara's most prestigious coastal neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/santa-barbara-spanish-kitchen.webp"
                alt="Spanish colonial kitchen in Santa Barbara with period-appropriate custom cabinetry"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Spanish Colonial</h3>
                <p className="text-charcoal/70 mb-4">Historic Spanish colonial kitchen restoration with period-appropriate details and modern functionality.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Historic Details</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Spanish Colonial</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/santa-barbara-coastal-kitchen.webp"
                alt="Coastal kitchen in Santa Barbara with ocean views and luxury cabinetry"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Coastal Luxury</h3>
                <p className="text-charcoal/70 mb-4">Modern coastal kitchen with panoramic ocean views and luxury finishes throughout.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Ocean Views</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Coastal Design</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/santa-barbara-entertainment-kitchen.webp"
                alt="Entertainment kitchen in Santa Barbara with integrated wine storage and bar area"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Entertainment Hub</h3>
                <p className="text-charcoal/70 mb-4">Grand entertaining kitchen with integrated wine storage and seamless indoor-outdoor flow.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Wine Storage</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Entertainment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coastal Lifestyle Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in santa-barbara</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our Santa Barbara kitchens are designed to support the unique coastal lifestyle and values of this special Central Coast community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Coastal Durability</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Marine-grade finishes resistant to salt air and humidity</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Stainless steel hardware that won't corrode in coastal conditions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Proper ventilation systems for moisture control</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">View Maximization</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Strategic cabinet placement that preserves ocean and mountain views</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Low-profile designs that don't obstruct sightlines</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Reflective surfaces that enhance natural light</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Indoor-Outdoor Living</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Seamless flow to outdoor entertaining spaces</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Matching outdoor cabinetry and storage solutions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Weather-resistant materials for year-round use</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Historic Preservation</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Careful preservation of Spanish colonial architectural character</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Period-appropriate details and hardware sourcing</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Compliance with historic preservation guidelines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in santa-barbara</h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchen design in Santa Barbara
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle Santa Barbara's coastal environmental challenges?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Santa Barbara's coastal location presents unique challenges including salt air, humidity, and potential flooding. We use marine-grade finishes, stainless steel hardware, and proper ventilation systems. We also consider elevation and flood zones when designing storage solutions. Our materials are selected for their durability in coastal environments while maintaining the luxury aesthetic our clients expect.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you work with Santa Barbara's Spanish colonial architecture?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Santa Barbara's Spanish colonial heritage requires special attention to architectural details and historic character. We study the home's unique character and create cabinetry that enhances rather than competes with the existing architecture. This includes matching moldings, sourcing period-appropriate hardware, and working within historic preservation guidelines. We often collaborate with historic consultants and local preservation organizations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you maximize views while maintaining functionality?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                View maximization is crucial in Santa Barbara. We design low-profile cabinetry that doesn't obstruct sightlines, use reflective surfaces to enhance natural light, and strategically place storage to preserve panoramic views. We often incorporate glass-front cabinets and open shelving that maintains functionality while keeping views open. The key is balancing storage needs with view preservation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you coordinate with outdoor living spaces?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Santa Barbara's indoor-outdoor lifestyle requires seamless integration. We design kitchens that flow naturally to outdoor entertaining areas, often creating matching outdoor cabinetry and storage solutions. We consider sightlines to outdoor spaces, coordinate materials and finishes, and ensure the kitchen serves as a natural hub for both indoor and outdoor entertaining. This creates a cohesive living experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Create Your Santa Barbara Dream Kitchen?"
        description="Join Santa Barbara's most discerning homeowners who have chosen PineWood Cabinets for their custom cabinetry needs. Schedule a private consultation to discuss how we can bring your vision to life with uncompromising craftsmanship."
        primaryCTA={{
          text: "Schedule Consultation",
          href: "/contact"
        }}
      />
    </>
  )
}
