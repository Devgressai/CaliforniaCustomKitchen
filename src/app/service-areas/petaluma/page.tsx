import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Custom Kitchens Petaluma | Luxury Cabinetry North Bay | PineWood Cabinets',
  description: 'Museum-grade custom kitchens and bespoke cabinetry for Petaluma\'s most prestigious homes. Serving North Bay\'s luxury market with uncompromising craftsmanship since 2006.',
  keywords: [
    'custom kitchens Petaluma',
    'luxury cabinetry North Bay',
    'bespoke cabinetry Petaluma',
    'custom kitchen cabinets Petaluma',
    'architectural millwork North Bay',
    'luxury kitchen design Petaluma',
    'custom cabinets Petaluma',
    'high-end kitchen renovation',
    'premium cabinetry Petaluma',
    'custom millwork North Bay',
    'kitchen design consultation Petaluma',
    'luxury home renovation North Bay',
    'custom storage solutions Petaluma',
    'wine cellar design Petaluma',
    'kitchen remodeling Petaluma'
  ],
  openGraph: {
    title: 'Custom Kitchens Petaluma | Luxury Cabinetry North Bay',
    description: 'Museum-grade custom kitchens and bespoke cabinetry for Petaluma\'s most prestigious homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchens Petaluma",
  "Museum-grade custom kitchens and bespoke cabinetry for Petaluma's most prestigious homes in North Bay",
  "Custom Kitchens",
  ["Petaluma, CA", "North Bay, CA", "Healdsburg, CA", "Santa Rosa, CA", "Sonoma, CA"]
)

export default function PetalumaPage() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="Custom Kitchens Petaluma"
        subtitle="Museum-Grade Cabinetry for North Bay Luxury"
        description="Serving Petaluma's discerning homeowners with uncompromising craftsmanship and luxury kitchen design since 2006."
        imageSrc="service-areas/petaluma-hero.webp"
        imageAlt="Luxury custom kitchen in Petaluma home with premium cabinetry and North Bay views"
      />

      {/* Petaluma Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Petaluma's Premier Kitchen Destination
              </h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                Petaluma represents the sophisticated heart of North Bay living—where wine country charm meets refined luxury. Our Petaluma clients understand that true elegance lies in creating spaces that honor both the neighborhood's charming character and their own sophisticated lifestyle.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From traditional family homes to contemporary architectural gems, Petaluma's diverse residential landscape demands cabinetry solutions that seamlessly blend wine country comfort with luxury design and uncompromising quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Population</h3>
                  <p className="text-2xl font-bold text-brass">60,000+</p>
                  <p className="text-sm text-charcoal/70">North Bay residents</p>
                </div>
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Median Home Value</h3>
                  <p className="text-2xl font-bold text-brass">$1.2M+</p>
                  <p className="text-sm text-charcoal/70">North Bay luxury market</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/service-areas/petaluma-overview.webp"
                alt="Petaluma neighborhood landscape with luxury homes and North Bay views"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* North Bay Living Expertise */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              North Bay Living Expertise
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our deep understanding of Petaluma's unique North Bay environment enables us to deliver cabinetry solutions that perfectly complement both the neighborhood's character and sophisticated living standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">North Bay Integration</h3>
              <p className="text-charcoal/70 mb-4">
                Petaluma's North Bay setting requires cabinetry that works with the natural environment and maximizes views while maintaining functionality.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• View maximization</li>
                <li>• Natural integration</li>
                <li>• North Bay aesthetics</li>
                <li>• Custom solutions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Wine Country Luxury</h3>
              <p className="text-charcoal/70 mb-4">
                Petaluma's wine country setting requires cabinetry that balances rustic charm with sophisticated design and luxury materials.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Wine country aesthetics</li>
                <li>• Sophisticated finishes</li>
                <li>• Premium materials</li>
                <li>• Custom details</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Entertainment Focus</h3>
              <p className="text-charcoal/70 mb-4">
                Petaluma's social lifestyle demands kitchens that can host both intimate family meals and larger social gatherings.
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

      {/* Petaluma Neighborhoods */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Petaluma Neighborhoods We Serve
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              From the historic downtown to the exclusive hillside communities, we serve all of Petaluma's most prestigious neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Downtown Petaluma',
              'Petaluma Hills',
              'East Petaluma',
              'West Petaluma',
              'North Petaluma',
              'South Petaluma',
              'Petaluma Valley',
              'Sonoma Mountain',
              'Petaluma River',
              'Adobe Creek',
              'Petaluma Boulevard',
              'Lakeville'
            ].map((neighborhood) => (
              <div key={neighborhood} className="bg-ivory p-6 rounded-lg shadow-sm border border-french-gray/20 text-center hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-charcoal mb-2">{neighborhood}</h3>
                <p className="text-sm text-charcoal/70">Custom cabinetry services</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* North Bay Design Philosophy */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Designed for North Bay Living
              </h2>
              <p className="text-xl text-ivory/90 mb-6 leading-relaxed">
                Petaluma's unique North Bay environment creates distinct requirements for luxury kitchen design. Our approach honors the neighborhood's character while delivering the functionality and elegance modern residents demand.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From morning coffee with North Bay views to evening entertaining that showcases the home's refined character, every design decision reflects an understanding of how Petaluma residents truly live and enjoy their North Bay lifestyle.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">View Integration</h3>
                <p className="text-ivory/80">Designs that maximize North Bay and valley views while maintaining functionality and aesthetic appeal.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">North Bay Adaptation</h3>
                <p className="text-ivory/80">Custom solutions that work with the natural North Bay environment and challenges.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Wine Country Luxury</h3>
                <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste of Petaluma residents.</p>
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
              Featured Petaluma Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of custom kitchens and cabinetry projects throughout Petaluma's most prestigious North Bay neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/petaluma-north-bay-kitchen.webp"
                alt="North Bay kitchen in Petaluma with custom cabinetry and valley views"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">North Bay Views</h3>
                <p className="text-charcoal/70 mb-4">Custom kitchen design that maximizes North Bay and valley views while maintaining functionality and luxury.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">North Bay Views</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Valley Design</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/petaluma-wine-country-kitchen.webp"
                alt="Wine country kitchen in Petaluma with rustic charm and sophisticated design"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Wine Country Charm</h3>
                <p className="text-charcoal/70 mb-4">Rustic kitchen design with wine country aesthetics and sophisticated finishes throughout.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Wine Country Aesthetics</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Rustic Charm</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/petaluma-contemporary-kitchen.webp"
                alt="Contemporary kitchen in Petaluma with modern cabinetry and clean design"
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
          </div>
        </div>
      </section>

      {/* North Bay Lifestyle Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              North Bay Lifestyle Features
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our Petaluma kitchens are designed to support the unique North Bay lifestyle and values of this special community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">View Maximization</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Strategic cabinet placement that preserves North Bay and valley views</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Low-profile designs that don't obstruct sightlines</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Reflective surfaces that enhance natural light and views</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">North Bay Adaptation</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Custom solutions that work with the natural North Bay environment and challenges</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Structural considerations for North Bay construction and stability</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Access solutions for challenging North Bay locations</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Wine Country Luxury</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Premium materials and finishes that reflect sophisticated taste</p>
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
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Petaluma Kitchen Design FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchen design in Petaluma
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle Petaluma's North Bay construction challenges?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Petaluma's North Bay locations often present unique structural and access challenges. We work closely with local contractors and engineers to ensure our cabinetry installations are properly supported and accessible. This includes custom mounting systems, reinforced wall attachments, and careful consideration of seismic requirements. Our project management approach includes detailed site analysis and coordination with all trades to ensure smooth installation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you maximize views while maintaining functionality?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                View maximization is crucial in Petaluma. We design low-profile cabinetry that doesn't obstruct sightlines, use reflective surfaces to enhance natural light, and strategically place storage to preserve panoramic views. We often incorporate glass-front cabinets and open shelving that maintains functionality while keeping views open. The key is balancing storage needs with view preservation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What's your approach to Petaluma's wine country lifestyle requirements?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Petaluma's wine country setting requires special consideration for entertaining, wine storage, and outdoor living. We design with wine country aesthetics in mind, including integrated wine storage, spaces that support both indoor and outdoor entertaining, and materials that complement the natural environment. We also consider the home's relationship to outdoor spaces and wine country character.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle Petaluma's diverse architectural styles?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Petaluma's architectural diversity requires expertise in multiple styles, from traditional to contemporary. We study each home's unique character and create cabinetry that enhances rather than competes with the existing architecture. Whether it's a mid-century modern or a traditional colonial, we ensure our designs feel like they were always meant to be there.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Create Your Petaluma Dream Kitchen?"
        description="Join Petaluma's most discerning homeowners who have chosen PineWood Cabinets for their custom cabinetry needs. Schedule a private consultation to discuss how we can bring your vision to life with uncompromising craftsmanship."
        primaryCTA={{
          text: "Schedule Consultation",
          href: "/contact"
        }}
      />
    </>
  )
}