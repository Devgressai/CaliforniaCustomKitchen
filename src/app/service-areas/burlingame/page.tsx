import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Custom Kitchens Burlingame | Luxury Cabinetry Peninsula | PineWood Cabinets',
  description: 'Museum-grade custom kitchens and bespoke cabinetry for Burlingame\'s most prestigious homes. Serving Peninsula\'s luxury market with uncompromising craftsmanship since 2006.',
  keywords: [
    'custom kitchens Burlingame',
    'luxury cabinetry Peninsula',
    'bespoke cabinetry Burlingame',
    'custom kitchen cabinets Burlingame',
    'architectural millwork Peninsula',
    'luxury kitchen design Burlingame',
    'custom cabinets Burlingame',
    'high-end kitchen renovation',
    'premium cabinetry Burlingame',
    'custom millwork Peninsula',
    'kitchen design consultation Burlingame',
    'luxury home renovation Peninsula',
    'custom storage solutions Burlingame',
    'wine cellar design Burlingame',
    'kitchen remodeling Burlingame'
  ],
  openGraph: {
    title: 'Custom Kitchens Burlingame | Luxury Cabinetry Peninsula',
    description: 'Museum-grade custom kitchens and bespoke cabinetry for Burlingame\'s most prestigious homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchens Burlingame",
  "Museum-grade custom kitchens and bespoke cabinetry for Burlingame's most prestigious homes in Peninsula",
  "Custom Kitchens",
  ["Burlingame, CA", "Peninsula, CA", "San Mateo, CA", "Hillsborough, CA", "San Francisco, CA"]
)

export default function BurlingamePage() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="Custom Kitchens Burlingame"
        subtitle="Museum-Grade Cabinetry for Peninsula's Sophisticated Living"
        description="Serving Burlingame's discerning homeowners with uncompromising craftsmanship and luxury kitchen design since 2006."
        imageSrc="service-areas/burlingame-hero.webp"
        imageAlt="Luxury custom kitchen in Burlingame home with premium cabinetry and sophisticated design"
      />

      {/* Burlingame Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Burlingame's Premier Sophisticated Kitchen Destination
              </h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                Burlingame represents the sophisticated heart of Peninsula living—where suburban elegance meets refined luxury. Our Burlingame clients understand that true elegance lies in creating spaces that honor both the neighborhood's charming character and their own sophisticated lifestyle.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From traditional family homes to contemporary architectural gems, Burlingame's diverse residential landscape demands cabinetry solutions that seamlessly blend suburban comfort with luxury design and uncompromising quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Population</h3>
                  <p className="text-2xl font-bold text-brass">30,000+</p>
                  <p className="text-sm text-charcoal/70">Sophisticated residents</p>
                </div>
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Median Home Value</h3>
                  <p className="text-2xl font-bold text-brass">$2.2M+</p>
                  <p className="text-sm text-charcoal/70">Luxury suburban market</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/service-areas/burlingame-overview.webp"
                alt="Burlingame neighborhood landscape with luxury homes and tree-lined streets"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sophisticated Living Expertise */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Sophisticated Living Expertise
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our deep understanding of Burlingame's unique suburban luxury environment enables us to deliver cabinetry solutions that perfectly complement both the neighborhood's character and sophisticated living standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Suburban Luxury</h3>
              <p className="text-charcoal/70 mb-4">
                Burlingame's suburban setting requires cabinetry that balances family functionality with sophisticated design and luxury materials.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Family-friendly durability</li>
                <li>• Sophisticated aesthetics</li>
                <li>• Premium materials</li>
                <li>• Custom details</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Architectural Harmony</h3>
              <p className="text-charcoal/70 mb-4">
                Burlingame's diverse architectural styles require cabinetry that enhances rather than competes with the existing home design.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Traditional designs</li>
                <li>• Contemporary styles</li>
                <li>• Custom millwork</li>
                <li>• Architectural integration</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Entertainment Focus</h3>
              <p className="text-charcoal/70 mb-4">
                Burlingame's social lifestyle demands kitchens that can host both intimate family meals and larger social gatherings.
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

      {/* Burlingame Neighborhoods */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Burlingame Neighborhoods We Serve
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              From the historic downtown to the exclusive hillside communities, we serve all of Burlingame's most prestigious neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Downtown Burlingame',
              'Hillside Estates',
              'Burlingame Avenue',
              'California Drive',
              'El Camino Real',
              'Broadway',
              'Primrose Road',
              'Ralston Avenue',
              'Carolyn Avenue',
              'Park Road',
              'Howard Avenue',
              'Lorton Avenue'
            ].map((neighborhood) => (
              <div key={neighborhood} className="bg-ivory p-6 rounded-lg shadow-sm border border-french-gray/20 text-center hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-charcoal mb-2">{neighborhood}</h3>
                <p className="text-sm text-charcoal/70">Custom cabinetry services</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sophisticated Design Philosophy */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Designed for Sophisticated Living
              </h2>
              <p className="text-xl text-ivory/90 mb-6 leading-relaxed">
                Burlingame's unique suburban luxury environment creates distinct requirements for kitchen design. Our approach honors the neighborhood's sophisticated character while delivering the functionality and elegance modern residents demand.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From morning coffee in a sunlit breakfast nook to evening entertaining that showcases the home's refined character, every design decision reflects an understanding of how Burlingame residents truly live and enjoy their sophisticated lifestyle.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Sophisticated Materials</h3>
                <p className="text-ivory/80">Premium materials and finishes that reflect the sophisticated taste and quality expectations of Burlingame residents.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Family Functionality</h3>
                <p className="text-ivory/80">Designs that support both family life and sophisticated entertaining while maintaining luxury standards.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Architectural Integration</h3>
                <p className="text-ivory/80">Seamless integration with Burlingame's diverse architectural styles and neighborhood character.</p>
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
              Featured Burlingame Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of custom kitchens and cabinetry projects throughout Burlingame's most prestigious neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/burlingame-traditional-kitchen.webp"
                alt="Traditional kitchen in Burlingame with classic cabinetry and sophisticated design"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Traditional Sophistication</h3>
                <p className="text-charcoal/70 mb-4">Classic kitchen design with traditional details and sophisticated finishes throughout.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Traditional Design</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Sophisticated Finishes</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/burlingame-contemporary-kitchen.webp"
                alt="Contemporary kitchen in Burlingame with modern cabinetry and clean design"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Contemporary Luxury</h3>
                <p className="text-charcoal/70 mb-4">Modern kitchen design with clean lines and premium materials for sophisticated living.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Modern Design</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Premium Materials</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/burlingame-family-kitchen.webp"
                alt="Family kitchen in Burlingame with functional design and luxury touches"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Family Sophistication</h3>
                <p className="text-charcoal/70 mb-4">Family-friendly kitchen design that balances functionality with sophisticated luxury.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Family Design</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Luxury Touches</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sophisticated Lifestyle Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Sophisticated Lifestyle Features
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our Burlingame kitchens are designed to support the unique sophisticated lifestyle and values of this special Peninsula community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Sophisticated Materials</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Premium hardwoods and natural materials that reflect sophisticated taste</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Custom hardware and decorative elements that add luxury touches</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">High-end finishes that maintain beauty over time</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Entertainment Excellence</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Flexible layouts perfect for both intimate and larger gatherings</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Integrated wine storage and bar areas for sophisticated entertaining</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Professional-grade appliances for serious cooking and hosting</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Family Functionality</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Durable materials that withstand daily family use while maintaining beauty</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Ample storage solutions for family supplies and household items</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Multi-functional spaces that adapt to different family activities</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Architectural Harmony</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Designs that complement Burlingame's diverse architectural styles</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Custom millwork that matches existing architectural details</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Seamless integration with the home's overall design character</p>
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
              Burlingame Kitchen Design FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchen design in Burlingame
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you balance family functionality with sophisticated design in Burlingame?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Burlingame families need kitchens that can handle daily use while maintaining sophisticated aesthetics. We use durable, high-quality materials that are both beautiful and practical. This includes scratch-resistant finishes, easy-to-clean surfaces, and robust hardware. We design with family traffic patterns in mind, ensuring high-use areas are reinforced while maintaining the sophisticated look our clients expect.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle Burlingame's diverse architectural styles?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Burlingame's architectural diversity requires expertise in multiple styles, from traditional to contemporary. We study each home's unique character and create cabinetry that enhances rather than competes with the existing architecture. Whether it's a mid-century modern or a traditional colonial, we ensure our designs feel like they were always meant to be there.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What's your approach to sophisticated entertaining in Burlingame kitchens?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Burlingame's social lifestyle demands kitchens that can host sophisticated gatherings. We design flexible layouts that can adapt to different entertaining needs, include integrated wine storage and bar areas, and ensure professional-grade appliances for serious cooking. We also consider the flow between indoor and outdoor spaces for seamless entertaining.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle Burlingame's suburban lifestyle requirements?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Burlingame's suburban setting requires special consideration for family life, entertaining, and maintenance. We design with family needs in mind, including storage for household supplies, durable materials for daily use, and spaces that support both individual and family activities. We also consider the home's relationship to outdoor spaces and neighborhood character.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Create Your Burlingame Dream Kitchen?"
        description="Join Burlingame's most discerning homeowners who have chosen PineWood Cabinets for their custom cabinetry needs. Schedule a private consultation to discuss how we can bring your vision to life with uncompromising craftsmanship."
        primaryCTA={{
          text: "Schedule Consultation",
          href: "/contact"
        }}
      />
    </>
  )
}
