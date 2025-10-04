import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Custom Kitchens Healdsburg | Luxury Cabinetry Wine Country | PineWood Cabinets',
  description: 'Museum-grade custom kitchens and bespoke cabinetry for Healdsburg\'s most prestigious wine country homes. Serving North Bay\'s luxury market with uncompromising craftsmanship since 2006.',
  keywords: [
    'custom kitchens Healdsburg',
    'luxury cabinetry Wine Country',
    'bespoke cabinetry Healdsburg',
    'custom kitchen cabinets Healdsburg',
    'architectural millwork Wine Country',
    'luxury kitchen design Healdsburg',
    'custom cabinets Healdsburg',
    'high-end kitchen renovation',
    'premium cabinetry Healdsburg',
    'custom millwork Wine Country',
    'kitchen design consultation Healdsburg',
    'luxury home renovation Wine Country',
    'custom storage solutions Healdsburg',
    'wine cellar design Healdsburg',
    'kitchen remodeling Healdsburg'
  ],
  openGraph: {
    title: 'Custom Kitchens Healdsburg | Luxury Cabinetry Wine Country',
    description: 'Museum-grade custom kitchens and bespoke cabinetry for Healdsburg\'s most prestigious wine country homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchens Healdsburg",
  "Museum-grade custom kitchens and bespoke cabinetry for Healdsburg's most prestigious wine country homes in North Bay",
  "Custom Kitchens",
  ["Healdsburg, CA", "Wine Country, CA", "Sonoma County, CA", "Napa Valley, CA", "Santa Rosa, CA"]
)

export default function HealdsburgPage() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="Custom Kitchens Healdsburg"
        subtitle="Museum-Grade Cabinetry for Wine Country's Finest Homes"
        description="Serving Healdsburg's discerning homeowners with uncompromising craftsmanship and luxury kitchen design since 2006."
        imageSrc="service-areas/healdsburg-hero.webp"
        imageAlt="Luxury custom kitchen in Healdsburg wine country home with premium cabinetry and rustic elegance"
      />

      {/* Healdsburg Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in healdsburg</h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                Healdsburg represents the crown jewel of Wine Country living—where rustic charm meets sophisticated luxury. Our Healdsburg clients understand that true elegance lies in creating spaces that honor both the region's agricultural heritage and their own refined lifestyle.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From historic farmhouses to contemporary wine country estates, Healdsburg's diverse architectural landscape demands cabinetry solutions that seamlessly blend rustic character with modern luxury and functionality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Population</h3>
                  <p className="text-2xl font-bold text-brass">12,000+</p>
                  <p className="text-sm text-charcoal/70">Wine country residents</p>
                </div>
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Median Home Value</h3>
                  <p className="text-2xl font-bold text-brass">$1.9M+</p>
                  <p className="text-sm text-charcoal/70">Wine country luxury market</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/service-areas/healdsburg-overview.webp"
                alt="Healdsburg wine country landscape with vineyards and luxury homes"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wine Country Living Expertise */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in healdsburg</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our deep understanding of Healdsburg's unique wine country environment enables us to deliver cabinetry solutions that perfectly complement both the region's agricultural character and luxury living standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Rustic Elegance</h3>
              <p className="text-charcoal/70 mb-4">
                Healdsburg's wine country setting requires cabinetry that balances rustic charm with sophisticated design and luxury materials.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Natural materials</li>
                <li>• Rustic finishes</li>
                <li>• Wine country aesthetics</li>
                <li>• Custom details</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Wine Integration</h3>
              <p className="text-charcoal/70 mb-4">
                Healdsburg's wine culture demands kitchens that seamlessly integrate wine storage, tasting, and entertaining features.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Wine cellar design</li>
                <li>• Tasting areas</li>
                <li>• Wine storage solutions</li>
                <li>• Entertaining layouts</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Agricultural Heritage</h3>
              <p className="text-charcoal/70 mb-4">
                Healdsburg's agricultural roots inspire designs that celebrate natural materials and sustainable practices.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Sustainable materials</li>
                <li>• Natural finishes</li>
                <li>• Local sourcing</li>
                <li>• Environmental consciousness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Healdsburg Neighborhoods */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in healdsburg</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              From the historic downtown to the exclusive wine country estates, we serve all of Healdsburg's most prestigious neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Downtown Healdsburg',
              'Wine Country Estates',
              'Dry Creek Valley',
              'Alexander Valley',
              'Russian River Valley',
              'Fitch Mountain',
              'Healdsburg Ridge',
              'Mill Creek',
              'Westside Road',
              'Chalk Hill',
              'Pine Flat',
              'Windsor Road'
            ].map((neighborhood) => (
              <div key={neighborhood} className="bg-ivory p-6 rounded-lg shadow-sm border border-french-gray/20 text-center hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-charcoal mb-2">{neighborhood}</h3>
                <p className="text-sm text-charcoal/70">Custom cabinetry services</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wine Country Design Philosophy */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Luxury Kitchen Design in healdsburg</h2>
              <p className="text-xl text-ivory/90 mb-6 leading-relaxed">
                Healdsburg's unique wine country environment creates distinct requirements for luxury kitchen design. Our approach honors the region's agricultural heritage while delivering the functionality and elegance modern residents demand.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From morning coffee with vineyard views to evening wine tastings that showcase the region's finest vintages, every design decision reflects an understanding of how Healdsburg residents truly live and enjoy their wine country lifestyle.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Rustic Materials</h3>
                <p className="text-ivory/80">Natural materials and finishes that celebrate Healdsburg's wine country character and agricultural heritage.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Wine Integration</h3>
                <p className="text-ivory/80">Seamless integration of wine storage, tasting, and entertaining features that support the wine country lifestyle.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Agricultural Harmony</h3>
                <p className="text-ivory/80">Designs that honor Healdsburg's agricultural roots while meeting modern luxury standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in healdsburg</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of custom kitchens and cabinetry projects throughout Healdsburg's most prestigious wine country neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/healdsburg-farmhouse-kitchen.webp"
                alt="Historic farmhouse kitchen in Healdsburg with rustic cabinetry and wine country charm"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Historic Farmhouse</h3>
                <p className="text-charcoal/70 mb-4">Restored farmhouse kitchen with rustic details and modern functionality for wine country living.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Rustic Design</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Wine Country</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/healdsburg-wine-kitchen.webp"
                alt="Wine country kitchen in Healdsburg with integrated wine storage and tasting area"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Wine Country Estate</h3>
                <p className="text-charcoal/70 mb-4">Luxury wine country kitchen with integrated wine cellar and tasting area.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Wine Cellar</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Tasting Area</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/healdsburg-contemporary-kitchen.webp"
                alt="Contemporary wine country kitchen in Healdsburg with modern design and rustic elements"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Contemporary Wine Country</h3>
                <p className="text-charcoal/70 mb-4">Modern kitchen design that balances contemporary luxury with wine country character.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Modern Design</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Wine Country</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wine Country Lifestyle Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in healdsburg</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our Healdsburg kitchens are designed to support the unique wine country lifestyle and values of this special community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Wine Integration</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Integrated wine cellars and storage solutions for serious wine collectors</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Tasting areas and bar spaces designed for wine appreciation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Climate-controlled storage and display solutions</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Rustic Materials</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Natural hardwoods and reclaimed materials that celebrate wine country character</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Rustic finishes and textures that honor agricultural heritage</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Sustainable and locally sourced materials when possible</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Entertainment Focus</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Open layouts perfect for wine tastings and entertaining</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Professional-grade appliances for serious cooking and hosting</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Seamless indoor-outdoor flow for vineyard entertaining</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Agricultural Heritage</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Designs that celebrate Healdsburg's agricultural roots and wine country character</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Sustainable practices and environmental consciousness</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Support for local artisans and craftspeople</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in healdsburg</h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchen design in Healdsburg
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you integrate wine storage and tasting areas into Healdsburg kitchens?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Wine integration is central to Healdsburg kitchen design. We create custom wine cellars, integrated wine storage, and dedicated tasting areas that seamlessly blend with the kitchen design. This includes climate-controlled storage, proper lighting for wine display, and bar areas designed for wine appreciation. We work with wine storage specialists to ensure optimal conditions for wine collection and aging.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you balance rustic charm with modern luxury in Healdsburg?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Balancing rustic charm with modern luxury requires careful material selection and design approach. We use natural materials like reclaimed wood and stone that celebrate wine country character while incorporating modern appliances and finishes that meet luxury standards. The key is maintaining the home's rustic soul while adding contemporary functionality and sophistication.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What's your approach to sustainable materials in Healdsburg?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Sustainability is important in Healdsburg's wine country culture. We prioritize locally sourced materials, reclaimed wood, and sustainable practices. This includes working with local suppliers, using environmentally friendly finishes, and supporting sustainable forestry practices. We also consider the home's energy efficiency and environmental impact in our design decisions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle Healdsburg's diverse architectural styles?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Healdsburg's architectural diversity requires expertise in multiple styles, from historic farmhouses to contemporary wine country estates. We study each home's unique character and create cabinetry that enhances rather than competes with the existing architecture. Whether it's a Victorian farmhouse or a modern wine country home, we ensure our designs feel like they were always meant to be there.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Create Your Healdsburg Dream Kitchen?"
        description="Join Healdsburg's most discerning homeowners who have chosen PineWood Cabinets for their custom cabinetry needs. Schedule a private consultation to discuss how we can bring your vision to life with uncompromising craftsmanship."
        primaryCTA={{
          text: "Schedule Consultation",
          href: "/contact"
        }}
      />
    </>
  )
}
