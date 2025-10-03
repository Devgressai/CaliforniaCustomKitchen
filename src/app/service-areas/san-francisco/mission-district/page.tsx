import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Custom Kitchens Mission District | Luxury Cabinetry San Francisco | PineWood Cabinets',
  description: 'Museum-grade custom kitchens and bespoke cabinetry for Mission District\'s most prestigious Victorian homes and modern lofts. Serving San Francisco\'s luxury market with uncompromising craftsmanship since 2006.',
  keywords: [
    'custom kitchens Mission District',
    'luxury cabinetry San Francisco',
    'bespoke cabinetry Mission District',
    'custom kitchen cabinets Mission District',
    'architectural millwork San Francisco',
    'luxury kitchen design Mission District',
    'custom cabinets Mission District',
    'high-end kitchen renovation',
    'premium cabinetry Mission District',
    'custom millwork San Francisco',
    'kitchen design consultation Mission District',
    'luxury home renovation San Francisco',
    'custom storage solutions Mission District',
    'wine cellar design Mission District',
    'kitchen remodeling Mission District'
  ],
  openGraph: {
    title: 'Custom Kitchens Mission District | Luxury Cabinetry San Francisco',
    description: 'Museum-grade custom kitchens and bespoke cabinetry for Mission District\'s most prestigious Victorian homes and modern lofts.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchens Mission District",
  "Museum-grade custom kitchens and bespoke cabinetry for Mission District's most prestigious Victorian homes and modern lofts in San Francisco",
  "Custom Kitchens",
  ["Mission District, San Francisco, CA", "San Francisco, CA", "SOMA, CA", "Castro District, CA", "Noe Valley, CA"]
)

export default function MissionDistrictPage() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="Custom Kitchens Mission District"
        subtitle="Museum-Grade Cabinetry for San Francisco's Cultural Heart"
        description="Serving Mission District's discerning residents with uncompromising craftsmanship and luxury kitchen design since 2006."
        image="/images/service-areas/mission-district-hero.webp"
        alt="Luxury custom kitchen in Mission District Victorian home with premium cabinetry and cultural character"
      />

      {/* Mission District Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Mission District's Premier Cultural Kitchen Destination
              </h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                The Mission District represents the vibrant cultural heart of San Francisco—where historic Victorian charm meets contemporary artistic expression. Our Mission District clients understand that true elegance lies in creating spaces that honor both the neighborhood's rich heritage and their own sophisticated lifestyle.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From meticulously restored Victorian homes to converted industrial lofts and modern architectural masterpieces, the Mission's diverse architectural landscape demands cabinetry solutions that seamlessly blend historic character with contemporary luxury and functionality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Population</h3>
                  <p className="text-2xl font-bold text-brass">45,000+</p>
                  <p className="text-sm text-charcoal/70">Cultural residents</p>
                </div>
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Median Home Value</h3>
                  <p className="text-2xl font-bold text-brass">$1.6M+</p>
                  <p className="text-sm text-charcoal/70">Historic luxury market</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/service-areas/mission-district-overview.webp"
                alt="Mission District neighborhood landscape with Victorian homes and cultural murals"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Heritage Expertise */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Cultural Heritage Expertise
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our deep understanding of Mission District's unique cultural character and architectural diversity enables us to deliver cabinetry solutions that perfectly complement both the neighborhood's heritage and modern living standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Victorian Preservation</h3>
              <p className="text-charcoal/70 mb-4">
                Mission District's Victorian homes require careful preservation of historic character while integrating modern functionality and luxury amenities.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Period-appropriate details</li>
                <li>• Historic hardware sourcing</li>
                <li>• Custom millwork matching</li>
                <li>• Preservation compliance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Artistic Expression</h3>
              <p className="text-charcoal/70 mb-4">
                The Mission's artistic community demands cabinetry that reflects individual creativity while maintaining high standards of craftsmanship.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Custom art integration</li>
                <li>• Unique design elements</li>
                <li>• Collaborative design process</li>
                <li>• Artistic hardware selection</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Cultural Integration</h3>
              <p className="text-charcoal/70 mb-4">
                Mission District's diverse cultural heritage inspires designs that celebrate both traditional and contemporary influences.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Cultural design elements</li>
                <li>• Community collaboration</li>
                <li>• Sustainable practices</li>
                <li>• Local artisan partnerships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission District Neighborhoods */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Mission District Neighborhoods We Serve
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              From the historic Victorian rows to the modern loft conversions, we serve all of Mission District's most prestigious neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Mission Dolores',
              'Valencia Corridor',
              '24th Street',
              'Mission Street',
              'Capp Street',
              'Shotwell Street',
              'Linden Street',
              'Liberty Street',
              'Alabama Street',
              'Harrison Street',
              'Folsom Street',
              'Treat Avenue'
            ].map((neighborhood) => (
              <div key={neighborhood} className="bg-ivory p-6 rounded-lg shadow-sm border border-french-gray/20 text-center hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-charcoal mb-2">{neighborhood}</h3>
                <p className="text-sm text-charcoal/70">Custom cabinetry services</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Design Philosophy */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Designed for Cultural Living
              </h2>
              <p className="text-xl text-ivory/90 mb-6 leading-relaxed">
                Mission District's unique cultural character creates distinct requirements for luxury kitchen design. Our approach honors the neighborhood's artistic heritage while delivering the functionality and elegance modern residents demand.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From morning coffee in a restored Victorian to evening entertaining in a converted loft, every design decision reflects an understanding of how Mission District residents truly live and celebrate their cultural community.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Cultural Celebration</h3>
                <p className="text-ivory/80">Designs that celebrate the Mission's diverse cultural heritage and artistic community spirit.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Historic Preservation</h3>
                <p className="text-ivory/80">Careful preservation of Victorian character while integrating modern luxury and functionality.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Artistic Integration</h3>
                <p className="text-ivory/80">Seamless integration of artistic elements and individual expression in every design.</p>
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
              Featured Mission District Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of custom kitchens and cabinetry projects throughout Mission District's most prestigious cultural neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/mission-victorian-kitchen.webp"
                alt="Victorian kitchen restoration in Mission District with period-appropriate custom cabinetry"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Victorian Restoration</h3>
                <p className="text-charcoal/70 mb-4">Historic Victorian kitchen restoration with period-appropriate details and modern functionality.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Historic Details</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Period Hardware</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/mission-loft-kitchen.webp"
                alt="Converted loft kitchen in Mission District with industrial design and artistic elements"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Artistic Loft</h3>
                <p className="text-charcoal/70 mb-4">Converted industrial loft with custom cabinetry that celebrates the neighborhood's artistic character.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Industrial Design</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Artistic Elements</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/mission-modern-kitchen.webp"
                alt="Modern kitchen in Mission District with cultural design elements and contemporary luxury"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Cultural Modern</h3>
                <p className="text-charcoal/70 mb-4">Contemporary kitchen design that integrates cultural elements and celebrates the Mission's diversity.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Cultural Design</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Modern Luxury</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Lifestyle Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Cultural Lifestyle Features
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our Mission District kitchens are designed to support the unique cultural lifestyle and values of this vibrant community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Cultural Integration</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Designs that celebrate the Mission's diverse cultural heritage</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Collaboration with local artists and cultural organizations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Custom elements that reflect individual cultural identity</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Historic Preservation</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Careful preservation of Victorian architectural character</p>
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

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Artistic Expression</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Custom designs that reflect individual artistic vision</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Integration of art display and storage solutions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Collaborative design process with artists and creatives</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Community Connection</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Designs that support community gathering and entertaining</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full mt-2"></div>
                  <p className="text-charcoal/70">Sustainable practices that honor neighborhood values</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Mission District Kitchen Design FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchen design in Mission District
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle Mission District's historic preservation requirements?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Mission District's historic character requires careful attention to preservation guidelines. We work with historic consultants and local preservation organizations to ensure our designs comply with all requirements. This includes using period-appropriate materials, matching existing architectural details, and preserving historic character while adding modern functionality. We source authentic hardware and materials that match the home's era and style.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you integrate with Mission District's artistic community?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                The Mission's artistic community is a key part of its character. We collaborate with local artists, designers, and cultural organizations to create unique designs that reflect the neighborhood's creative spirit. This includes custom art integration, unique design elements, and collaborative design processes. We also support local artisans and craftspeople, often incorporating their work into our designs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What's your approach to Mission District's diverse architectural styles?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Mission District's architectural diversity requires expertise in multiple styles, from Victorian to modern. We study each home's unique character and create cabinetry that enhances rather than competes with the existing architecture. Whether it's a historic Victorian or a converted loft, we ensure our designs feel like they were always meant to be there. We often work with architects and designers to ensure perfect integration.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle Mission District's space challenges and unique floor plans?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Mission District's diverse building stock often presents unique space challenges. We specialize in creating custom solutions that maximize functionality in challenging layouts. This includes vertical storage systems, multi-functional designs, and creative use of every available space. We work closely with architects and designers to ensure our cabinetry integrates seamlessly with the overall space planning and architectural character.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Create Your Mission District Dream Kitchen?"
        description="Join Mission District's most discerning residents who have chosen PineWood Cabinets for their custom cabinetry needs. Schedule a private consultation to discuss how we can bring your vision to life with uncompromising craftsmanship."
        primaryButtonText="Schedule Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="View Portfolio"
        secondaryButtonHref="/portfolio"
      />
    </>
  )
}
