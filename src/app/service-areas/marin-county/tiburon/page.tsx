import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Custom Kitchens Tiburon | Luxury Cabinetry Marin County | PineWood Cabinets',
  description: 'Museum-grade custom kitchens and bespoke cabinetry for Tiburon\'s most prestigious waterfront homes. Serving Marin County\'s luxury market with uncompromising craftsmanship since 2006.',
  keywords: [
    'custom kitchens Tiburon',
    'luxury cabinetry Marin County',
    'bespoke cabinetry Tiburon',
    'custom kitchen cabinets Tiburon',
    'architectural millwork Marin County',
    'luxury kitchen design Tiburon',
    'custom cabinets Tiburon',
    'high-end kitchen renovation',
    'premium cabinetry Tiburon',
    'custom millwork Marin County',
    'kitchen design consultation Tiburon',
    'luxury home renovation Marin County',
    'custom storage solutions Tiburon',
    'wine cellar design Tiburon',
    'kitchen remodeling Tiburon'
  ],
  openGraph: {
    title: 'Custom Kitchens Tiburon | Luxury Cabinetry Marin County',
    description: 'Museum-grade custom kitchens and bespoke cabinetry for Tiburon\'s most prestigious waterfront homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchens Tiburon",
  "Museum-grade custom kitchens and bespoke cabinetry for Tiburon's most prestigious waterfront homes in Marin County",
  "Custom Kitchens",
  ["Tiburon, CA", "Marin County, CA", "Sausalito, CA", "Mill Valley, CA", "Belvedere, CA"]
)

export default function TiburonPage() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="Custom Kitchens Tiburon"
        subtitle="Museum-Grade Cabinetry for Marin County's Waterfront Luxury"
        description="Serving Tiburon's discerning homeowners with uncompromising craftsmanship and luxury kitchen design since 2006."
        image="/images/service-areas/tiburon-hero.webp"
        imageAlt="Luxury custom kitchen in Tiburon waterfront home with premium cabinetry and panoramic bay views"
      />

      {/* Tiburon Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Tiburon's Premier Waterfront Kitchen Destination
              </h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                Perched on the shores of Richardson Bay, Tiburon represents the ultimate in Marin County waterfront living—where breathtaking views meet sophisticated luxury. Our Tiburon clients understand that true elegance lies in creating spaces that honor both the natural beauty of the bay and the refined lifestyle they've worked to achieve.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From the historic downtown's charming Victorian homes to the contemporary hillside estates with panoramic San Francisco skyline views, Tiburon's diverse architectural landscape demands cabinetry solutions that seamlessly blend with both traditional charm and modern sophistication.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Population</h3>
                  <p className="text-2xl font-bold text-brass">9,000+</p>
                  <p className="text-sm text-charcoal/70">Affluent residents</p>
                </div>
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Median Home Value</h3>
                  <p className="text-2xl font-bold text-brass">$2.8M+</p>
                  <p className="text-sm text-charcoal/70">Waterfront luxury</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/service-areas/tiburon-overview.webp"
                alt="Tiburon waterfront landscape with San Francisco skyline in background showing luxury residential area"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Waterfront Living Expertise */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Waterfront Living Expertise
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our deep understanding of Tiburon's unique waterfront environment and luxury lifestyle enables us to deliver cabinetry solutions that perfectly complement both the natural setting and sophisticated living standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Coastal Design Integration</h3>
              <p className="text-charcoal/70 mb-4">
                Tiburon's waterfront location requires special consideration for humidity, salt air, and the constant interplay between indoor and outdoor living spaces.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Marine-grade finishes</li>
                <li>• Humidity-resistant materials</li>
                <li>• Seamless indoor-outdoor flow</li>
                <li>• View-maximizing layouts</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Historic Preservation</h3>
              <p className="text-charcoal/70 mb-4">
                Many Tiburon homes have historic character that we carefully preserve while integrating modern functionality and luxury amenities.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Period-appropriate details</li>
                <li>• Custom millwork matching</li>
                <li>• Historic hardware sourcing</li>
                <li>• Preservation compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Entertainment Focus</h3>
              <p className="text-charcoal/70 mb-4">
                Tiburon's social lifestyle demands kitchens that can host everything from intimate family dinners to large waterfront gatherings.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Open-concept layouts</li>
                <li>• Professional-grade appliances</li>
                <li>• Integrated wine storage</li>
                <li>• Outdoor kitchen coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tiburon Neighborhoods */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Tiburon Neighborhoods We Serve
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              From the historic downtown to the exclusive hillside communities, we serve all of Tiburon's most prestigious neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Downtown Tiburon',
              'Belvedere Island',
              'Tiburon Peninsula',
              'Hillside Estates',
              'Waterfront Properties',
              'Historic District',
              'Marina Area',
              'Paradise Drive',
              'Tiburon Boulevard',
              'Main Street',
              'Beach Road',
              'Shoreline Drive'
            ].map((neighborhood) => (
              <div key={neighborhood} className="bg-ivory p-6 rounded-lg shadow-sm border border-french-gray/20 text-center hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-charcoal mb-2">{neighborhood}</h3>
                <p className="text-sm text-charcoal/70">Custom cabinetry services</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waterfront Design Philosophy */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Designed for Waterfront Living
              </h2>
              <p className="text-xl text-ivory/90 mb-6 leading-relaxed">
                Tiburon's unique waterfront setting creates distinct requirements for luxury kitchen design. Our approach honors the natural beauty of the bay while delivering the functionality and elegance our clients demand.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From morning coffee with sunrise views over the bay to evening entertaining that flows seamlessly from kitchen to deck, every design decision reflects an understanding of how Tiburon residents truly live and enjoy their waterfront lifestyle.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">View Integration</h3>
                <p className="text-ivory/80">Strategic placement and design that maximizes the breathtaking bay and city skyline views from every angle.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Coastal Materials</h3>
                <p className="text-ivory/80">Premium materials selected for their beauty and ability to withstand the unique challenges of waterfront living.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Seamless Flow</h3>
                <p className="text-ivory/80">Designs that create effortless transitions between indoor and outdoor living spaces.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Featured Tiburon Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of custom kitchens and cabinetry projects throughout Tiburon's most prestigious waterfront neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/tiburon-waterfront-kitchen.webp"
                alt="Luxury waterfront kitchen in Tiburon with panoramic bay views and custom cabinetry"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Waterfront Contemporary</h3>
                <p className="text-charcoal/70 mb-4">Modern kitchen design with floor-to-ceiling windows and custom cabinetry that maximizes bay views.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">European Walnut</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">View Integration</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/tiburon-historic-kitchen.webp"
                alt="Historic Victorian kitchen renovation in Tiburon with period-appropriate custom cabinetry"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Historic Victorian</h3>
                <p className="text-charcoal/70 mb-4">Careful restoration of a Victorian-era kitchen with modern functionality and period-appropriate details.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Quarter-sawn Oak</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Historic Details</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/tiburon-entertainment-kitchen.webp"
                alt="Entertainment-focused kitchen in Tiburon with integrated wine storage and bar area"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Entertainment Hub</h3>
                <p className="text-charcoal/70 mb-4">Open-concept kitchen designed for hosting with integrated wine storage and seamless indoor-outdoor flow.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Wine Storage</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Entertainment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waterfront Lifestyle Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Waterfront Lifestyle Features
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our Tiburon kitchens are designed to support the unique waterfront lifestyle and values of this special community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">View Maximization</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Strategic cabinet placement that preserves panoramic bay and city views</p>
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
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Coastal Durability</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Marine-grade finishes resistant to salt air and humidity</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Stainless steel hardware that won't corrode</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Proper ventilation systems for moisture control</p>
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
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Entertainment Excellence</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Open layouts perfect for hosting waterfront gatherings</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Integrated wine storage and bar areas</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Professional-grade appliances for serious entertaining</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Tiburon Kitchen Design FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchen design in Tiburon
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle Tiburon's waterfront environmental challenges?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Tiburon's waterfront location presents unique challenges including salt air, humidity, and potential flooding. We use marine-grade finishes, stainless steel hardware, and proper ventilation systems. We also consider elevation and flood zones when designing storage solutions. Our materials are selected for their durability in coastal environments while maintaining the luxury aesthetic our clients expect.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you maximize views while maintaining functionality?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                View maximization is crucial in Tiburon. We design low-profile cabinetry that doesn't obstruct sightlines, use reflective surfaces to enhance natural light, and strategically place storage to preserve panoramic views. We often incorporate glass-front cabinets and open shelving that maintains functionality while keeping views open. The key is balancing storage needs with view preservation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What's your approach to historic Tiburon homes?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Many Tiburon homes have historic character that we carefully preserve. We study original architectural details and create cabinetry that complements the existing style while meeting modern needs. This includes matching moldings, sourcing period-appropriate hardware, and working within historic preservation guidelines. We often collaborate with historic consultants and local preservation organizations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you coordinate with outdoor living spaces?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Tiburon's indoor-outdoor lifestyle requires seamless integration. We design kitchens that flow naturally to outdoor entertaining areas, often creating matching outdoor cabinetry and storage solutions. We consider sightlines to outdoor spaces, coordinate materials and finishes, and ensure the kitchen serves as a natural hub for both indoor and outdoor entertaining. This creates a cohesive living experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Create Your Tiburon Dream Kitchen?"
        description="Join Tiburon's most discerning homeowners who have chosen PineWood Cabinets for their custom cabinetry needs. Schedule a private consultation to discuss how we can bring your vision to life with uncompromising craftsmanship."
        primaryButtonText="Schedule Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="View Portfolio"
        secondaryButtonHref="/portfolio"
      />
    </>
  )
}
