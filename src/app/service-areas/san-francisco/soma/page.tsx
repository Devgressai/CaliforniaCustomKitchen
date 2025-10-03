import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Custom Kitchens SOMA | Luxury Cabinetry San Francisco | PineWood Cabinets',
  description: 'Museum-grade custom kitchens and bespoke cabinetry for SOMA\'s most prestigious condos and lofts. Serving San Francisco\'s luxury market with uncompromising craftsmanship since 2006.',
  keywords: [
    'custom kitchens SOMA',
    'luxury cabinetry San Francisco',
    'bespoke cabinetry SOMA',
    'custom kitchen cabinets SOMA',
    'architectural millwork San Francisco',
    'luxury kitchen design SOMA',
    'custom cabinets SOMA',
    'high-end kitchen renovation',
    'premium cabinetry SOMA',
    'custom millwork San Francisco',
    'kitchen design consultation SOMA',
    'luxury home renovation San Francisco',
    'custom storage solutions SOMA',
    'wine cellar design SOMA',
    'kitchen remodeling SOMA'
  ],
  openGraph: {
    title: 'Custom Kitchens SOMA | Luxury Cabinetry San Francisco',
    description: 'Museum-grade custom kitchens and bespoke cabinetry for SOMA\'s most prestigious condos and lofts.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchens SOMA",
  "Museum-grade custom kitchens and bespoke cabinetry for SOMA's most prestigious condos and lofts in San Francisco",
  "Custom Kitchens",
  ["SOMA, San Francisco, CA", "San Francisco, CA", "Pacific Heights, CA", "Nob Hill, CA", "Marina District, CA"]
)

export default function SOMAPage() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="Custom Kitchens SOMA"
        subtitle="Museum-Grade Cabinetry for San Francisco's Urban Luxury"
        description="Serving SOMA's discerning residents with uncompromising craftsmanship and luxury kitchen design since 2006."
        imageSrc="service-areas/soma-hero.webp"
        imageAlt="Luxury custom kitchen in SOMA loft with premium cabinetry and modern urban design"
      />

      {/* SOMA Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                SOMA's Premier Urban Kitchen Destination
              </h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                South of Market (SOMA) represents the cutting edge of San Francisco's urban luxury living—where historic industrial character meets contemporary sophistication. Our SOMA clients understand that true elegance lies in creating spaces that honor both the neighborhood's unique heritage and their own modern lifestyle demands.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From converted warehouses and industrial lofts to sleek new high-rise condos, SOMA's diverse architectural landscape demands cabinetry solutions that seamlessly blend industrial character with residential luxury and functionality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Population</h3>
                  <p className="text-2xl font-bold text-brass">25,000+</p>
                  <p className="text-sm text-charcoal/70">Urban professionals</p>
                </div>
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Median Home Value</h3>
                  <p className="text-2xl font-bold text-brass">$1.8M+</p>
                  <p className="text-sm text-charcoal/70">Luxury urban market</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/service-areas/soma-overview.webp"
                alt="SOMA neighborhood landscape with modern high-rises and historic industrial buildings"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Urban Living Expertise */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Urban Living Expertise
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our deep understanding of SOMA's unique urban environment and luxury lifestyle enables us to deliver cabinetry solutions that perfectly complement both the neighborhood's character and modern living standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Industrial Heritage</h3>
              <p className="text-charcoal/70 mb-4">
                SOMA's industrial past creates unique opportunities to blend historic character with modern luxury in kitchen design.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Exposed brick integration</li>
                <li>• Industrial hardware</li>
                <li>• Raw material finishes</li>
                <li>• Open ceiling designs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Space Optimization</h3>
              <p className="text-charcoal/70 mb-4">
                Urban living requires innovative solutions to maximize functionality in often challenging floor plans and space constraints.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Custom storage solutions</li>
                <li>• Multi-functional designs</li>
                <li>• Vertical storage</li>
                <li>• Hidden appliances</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Modern Lifestyle</h3>
              <p className="text-charcoal/70 mb-4">
                SOMA's tech-savvy residents demand kitchens that support their fast-paced, connected lifestyle and entertaining needs.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Smart home integration</li>
                <li>• Professional appliances</li>
                <li>• Entertaining layouts</li>
                <li>• Work-from-home spaces</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SOMA Neighborhoods */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              SOMA Neighborhoods We Serve
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              From the historic warehouse district to the modern high-rise corridor, we serve all of SOMA's most prestigious neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'South Beach',
              'Rincon Hill',
              'Mission Bay',
              'Yerba Buena',
              'SOMA Central',
              'Design District',
              'Showplace Square',
              'Civic Center',
              'Tenderloin',
              'Mid-Market',
              'Potrero Hill',
              'Dogpatch'
            ].map((neighborhood) => (
              <div key={neighborhood} className="bg-ivory p-6 rounded-lg shadow-sm border border-french-gray/20 text-center hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-charcoal mb-2">{neighborhood}</h3>
                <p className="text-sm text-charcoal/70">Custom cabinetry services</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urban Design Philosophy */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Designed for Urban Living
              </h2>
              <p className="text-xl text-ivory/90 mb-6 leading-relaxed">
                SOMA's unique urban environment creates distinct requirements for luxury kitchen design. Our approach honors the neighborhood's industrial heritage while delivering the functionality and elegance modern urbanites demand.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From morning coffee with city views to evening entertaining that showcases the neighborhood's energy, every design decision reflects an understanding of how SOMA residents truly live and work in the heart of San Francisco.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Industrial Aesthetics</h3>
                <p className="text-ivory/80">Designs that celebrate SOMA's industrial heritage while meeting modern luxury standards and functionality.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Space Innovation</h3>
                <p className="text-ivory/80">Creative solutions that maximize functionality in urban spaces while maintaining aesthetic appeal.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Tech Integration</h3>
                <p className="text-ivory/80">Seamless integration of modern technology and smart home features for the connected lifestyle.</p>
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
              Featured SOMA Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of custom kitchens and cabinetry projects throughout SOMA's most prestigious urban neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/soma-loft-kitchen.webp"
                alt="Industrial loft kitchen in SOMA with custom cabinetry and exposed brick walls"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Industrial Loft</h3>
                <p className="text-charcoal/70 mb-4">Converted warehouse loft with custom cabinetry that honors the industrial heritage while adding modern luxury.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Exposed Brick</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Industrial Design</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/soma-condo-kitchen.webp"
                alt="Modern high-rise condo kitchen in SOMA with sleek cabinetry and city views"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">High-Rise Modern</h3>
                <p className="text-charcoal/70 mb-4">Sleek contemporary kitchen in luxury high-rise with custom cabinetry and panoramic city views.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">European Walnut</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">City Views</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/soma-tech-kitchen.webp"
                alt="Tech executive kitchen in SOMA with smart home integration and modern design"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Tech Executive</h3>
                <p className="text-charcoal/70 mb-4">Smart home integrated kitchen designed for the modern tech professional with seamless connectivity.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Smart Home</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Tech Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urban Lifestyle Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Urban Lifestyle Features
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our SOMA kitchens are designed to support the unique urban lifestyle and values of this dynamic neighborhood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Space Maximization</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Custom storage solutions that maximize every inch of available space</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Multi-functional designs that serve multiple purposes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Vertical storage and hidden appliances for clean aesthetics</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Tech Integration</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Smart home systems and connected appliances</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Integrated charging stations and connectivity</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Work-from-home integration and office spaces</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Entertainment Focus</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Open layouts perfect for urban entertaining</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Integrated wine storage and bar areas</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Professional-grade appliances for serious cooking</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Industrial Character</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Designs that celebrate SOMA's industrial heritage</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Raw materials and industrial hardware</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Integration with exposed brick and structural elements</p>
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
              SOMA Kitchen Design FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchen design in SOMA
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle SOMA's space constraints and unique floor plans?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                SOMA's urban environment often presents challenging space constraints and unique floor plans. We specialize in creating custom solutions that maximize functionality in limited spaces. This includes vertical storage systems, multi-functional furniture, hidden appliances, and creative use of every available inch. We work closely with architects and designers to ensure our cabinetry integrates seamlessly with the overall space planning.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you integrate with SOMA's industrial character?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                SOMA's industrial heritage is a key part of its character. We design cabinetry that celebrates this heritage while meeting modern luxury standards. This includes using raw materials, industrial hardware, and designs that complement exposed brick, steel beams, and other industrial elements. We can also create custom pieces that reference the neighborhood's manufacturing past while providing contemporary functionality.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What's your approach to tech integration in SOMA kitchens?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                SOMA's tech-savvy residents demand seamless technology integration. We work with smart home systems, integrate charging stations, and design spaces that support work-from-home needs. This includes hidden cable management, integrated lighting controls, and cabinetry that accommodates modern devices while maintaining clean aesthetics. We stay current with the latest smart home technologies and can integrate them into our designs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle SOMA's building restrictions and HOA requirements?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                SOMA's high-rise buildings often have specific restrictions and HOA requirements. We work closely with building management and HOA boards to ensure our designs comply with all regulations. This includes noise restrictions, installation schedules, material requirements, and design guidelines. We handle all necessary approvals and coordinate with building staff to ensure smooth project execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Create Your SOMA Dream Kitchen?"
        description="Join SOMA's most discerning residents who have chosen PineWood Cabinets for their custom cabinetry needs. Schedule a private consultation to discuss how we can bring your vision to life with uncompromising craftsmanship."
        primaryCTA={{
          text: "Schedule Consultation",
          href: "/contact"
        }}
      />
    </>
  )
}
