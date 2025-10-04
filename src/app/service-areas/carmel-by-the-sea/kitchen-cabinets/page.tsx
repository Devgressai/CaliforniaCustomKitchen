import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Kitchen Cabinets Carmel-by-the-Sea | Custom Kitchen Cabinets | PineWood Cabinets',
  description: 'Custom kitchen cabinets for Carmel-by-the-Sea luxury homes. Expert cabinet makers serving Monterey County with bespoke cabinetry and storage solutions.',
  keywords: [
    'kitchen cabinets Carmel-by-the-Sea',
    'custom kitchen cabinets Carmel-by-the-Sea',
    'kitchen cabinet makers Carmel-by-the-Sea',
    'kitchen cabinets Carmel',
    'kitchen cabinets Big Sur',
    'kitchen cabinets Monterey',
    'kitchen cabinets Pacific Grove',
    'kitchen cabinets Pebble Beach',
    'kitchen cabinets Seaside',
    'kitchen cabinets Marina',
    'kitchen cabinets Salinas',
    'kitchen cabinets Watsonville',
    'kitchen cabinets Santa Cruz',
    'kitchen cabinets Monterey County'
  ],
  openGraph: {
    title: 'Kitchen Cabinets Carmel-by-the-Sea | Custom Kitchen Cabinets | PineWood Cabinets',
    description: 'Custom kitchen cabinets for Carmel-by-the-Sea luxury homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Kitchen Cabinets Carmel-by-the-Sea",
  "Custom kitchen cabinets for Carmel-by-the-Sea luxury homes in Monterey County",
  "Kitchen Cabinets",
  ["Carmel-by-the-Sea, CA", "Carmel, CA", "Big Sur, CA", "Monterey, CA", "Pacific Grove, CA"]
)

export default function KitchenCabinetsCarmelByTheSeaPage() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="Kitchen Cabinets Carmel-by-the-Sea"
        subtitle="Custom Kitchen Cabinets"
        description="Serving Carmel-by-the-Sea's discerning homeowners with bespoke kitchen cabinets that transform Monterey County homes into luxury culinary spaces."
        imageSrc="service-areas/carmel-by-the-sea-kitchen-cabinets-hero.webp"
        imageAlt="Custom kitchen cabinets in Carmel-by-the-Sea home with ocean views and luxury finishes"
      />

      {/* Carmel-by-the-Sea Kitchen Cabinets Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in kitchen-cabinets</h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                Carmel-by-the-Sea represents the sophisticated heart of California's Central Coast—where coastal elegance meets refined luxury. Our Carmel-by-the-Sea kitchen cabinet clients understand that true elegance lies in creating spaces that honor both the neighborhood's unique character and their own sophisticated lifestyle.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From historic cottages to contemporary architectural gems, Carmel-by-the-Sea's diverse residential landscape demands kitchen cabinet solutions that seamlessly blend coastal sophistication with luxury functionality and uncompromising quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Cabinet Projects</h3>
                  <p className="text-2xl font-bold text-brass">225+</p>
                  <p className="text-sm text-charcoal/70">Completed projects</p>
                </div>
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Craftsmanship</h3>
                  <p className="text-2xl font-bold text-brass">20+</p>
                  <p className="text-sm text-charcoal/70">Years experience</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/service-areas/carmel-by-the-sea-kitchen-cabinets-overview.webp"
                alt="Custom kitchen cabinets in Carmel-by-the-Sea home with ocean views and luxury finishes"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Cabinet Services */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in kitchen-cabinets</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our comprehensive kitchen cabinet services are tailored to meet the unique needs of Carmel-by-the-Sea's diverse architectural styles and coastal lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchen Cabinets</h3>
              <p className="text-charcoal/70 mb-4">
                Bespoke kitchen cabinets designed and crafted specifically for your Carmel-by-the-Sea home's unique character and your lifestyle needs.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Design consultation</li>
                <li>• Custom measurements</li>
                <li>• Premium materials</li>
                <li>• Hand-crafted construction</li>
                <li>• Professional installation</li>
                <li>• Quality guarantee</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Cabinet Refacing</h3>
              <p className="text-charcoal/70 mb-4">
                Transform your existing Carmel-by-the-Sea kitchen cabinets with professional refacing services that update the look while preserving the structure.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Door replacement</li>
                <li>• Drawer front updates</li>
                <li>• Hardware upgrades</li>
                <li>• Finish updates</li>
                <li>• Interior organization</li>
                <li>• Cost-effective solution</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Cabinet Restoration</h3>
              <p className="text-charcoal/70 mb-4">
                Expert restoration of vintage and historic Carmel-by-the-Sea kitchen cabinets to preserve their original beauty and character.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Historical research</li>
                <li>• Period-appropriate materials</li>
                <li>• Craftsmanship restoration</li>
                <li>• Hardware replication</li>
                <li>• Finish restoration</li>
                <li>• Modern functionality</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Cabinet Organization</h3>
              <p className="text-charcoal/70 mb-4">
                Custom organization solutions that maximize the functionality and efficiency of your Carmel-by-the-Sea kitchen cabinets.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Pull-out shelves</li>
                <li>• Lazy susans</li>
                <li>• Drawer dividers</li>
                <li>• Spice racks</li>
                <li>• Corner solutions</li>
                <li>• Custom storage</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Cabinet Hardware</h3>
              <p className="text-charcoal/70 mb-4">
                Premium hardware selection and installation to complement your Carmel-by-the-Sea kitchen cabinets and enhance their functionality.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Knob selection</li>
                <li>• Pull installation</li>
                <li>• Hinge adjustment</li>
                <li>• Drawer slide upgrades</li>
                <li>• Soft-close mechanisms</li>
                <li>• Style coordination</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Cabinet Maintenance</h3>
              <p className="text-charcoal/70 mb-4">
                Ongoing maintenance and care services to keep your Carmel-by-the-Sea kitchen cabinets looking and functioning at their best.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Regular cleaning</li>
                <li>• Hardware adjustment</li>
                <li>• Finish touch-ups</li>
                <li>• Door alignment</li>
                <li>• Drawer repair</li>
                <li>• Preventive care</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cabinet Design Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in kitchen-cabinets</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our proven design process ensures your Carmel-by-the-Sea kitchen cabinets exceed expectations and perfectly reflect your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Initial Consultation</h3>
              <p className="text-charcoal/70 mb-4">Comprehensive consultation to understand your vision, needs, and budget for your Carmel-by-the-Sea kitchen cabinets.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Needs assessment</li>
                <li>• Style preferences</li>
                <li>• Budget planning</li>
                <li>• Timeline discussion</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Design Development</h3>
              <p className="text-charcoal/70 mb-4">Creation of detailed design plans and 3D renderings for your Carmel-by-the-Sea kitchen cabinets.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Space planning</li>
                <li>• 3D renderings</li>
                <li>• Material selection</li>
                <li>• Layout optimization</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Fabrication</h3>
              <p className="text-charcoal/70 mb-4">Hand-crafted construction of your approved Carmel-by-the-Sea kitchen cabinet design in our workshop.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Material preparation</li>
                <li>• Precision cutting</li>
                <li>• Assembly</li>
                <li>• Quality control</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">4</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Installation</h3>
              <p className="text-charcoal/70 mb-4">Professional installation and final walkthrough for your Carmel-by-the-Sea kitchen cabinets.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Site preparation</li>
                <li>• Cabinet installation</li>
                <li>• Hardware installation</li>
                <li>• Final inspection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coastal Cabinet Philosophy */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Luxury Kitchen Design in kitchen-cabinets</h2>
              <p className="text-xl text-ivory/90 mb-6 leading-relaxed">
                Carmel-by-the-Sea's unique coastal environment creates distinct requirements for kitchen cabinets. Our approach honors the neighborhood's character while delivering the functionality and elegance modern residents demand.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From morning coffee with ocean views to evening entertaining that showcases the home's refined character, every cabinet decision reflects an understanding of how Carmel-by-the-Sea residents truly live and enjoy their coastal lifestyle.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Ocean Integration</h3>
                <p className="text-ivory/80">Cabinet designs that maximize ocean and bay views while maintaining functionality and aesthetic appeal.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Coastal Adaptation</h3>
                <p className="text-ivory/80">Custom solutions that work with the natural coastal environment and challenges.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Luxury Functionality</h3>
                <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste of Carmel-by-the-Sea residents.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cabinet Projects */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in kitchen-cabinets</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of kitchen cabinet projects throughout Carmel-by-the-Sea's most prestigious coastal neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/carmel-by-the-sea-kitchen-cabinets-1.webp"
                alt="Custom kitchen cabinets in Carmel-by-the-Sea with ocean views and luxury finishes"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Ocean Views</h3>
                <p className="text-charcoal/70 mb-4">Kitchen cabinets that maximize ocean and bay views while maintaining functionality and luxury.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">View Integration</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Custom Cabinets</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/carmel-by-the-sea-kitchen-cabinets-2.webp"
                alt="Traditional kitchen cabinets in Carmel-by-the-Sea with classic design and sophisticated finishes"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Traditional Sophistication</h3>
                <p className="text-charcoal/70 mb-4">Classic kitchen cabinets with traditional details and sophisticated finishes throughout.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Traditional Design</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Sophisticated Finishes</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/carmel-by-the-sea-kitchen-cabinets-3.webp"
                alt="Contemporary kitchen cabinets in Carmel-by-the-Sea with modern design and clean lines"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Contemporary Luxury</h3>
                <p className="text-charcoal/70 mb-4">Modern kitchen cabinets with clean lines and premium materials for sophisticated living.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Modern Design</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Premium Materials</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in kitchen-cabinets</h2>
            <p className="text-xl text-charcoal/80">
              Common questions about kitchen cabinet services in Carmel-by-the-Sea
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How long does it take to install custom kitchen cabinets?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Custom kitchen cabinet installation in Carmel-by-the-Sea typically takes 3-5 days for a complete kitchen. This includes 1 day for site preparation and measurements, 2-3 days for cabinet installation and alignment, and 1 day for hardware installation and final adjustments. The timeline may vary depending on the complexity of the design and any custom features.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What materials do you use for kitchen cabinets?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We use only the finest materials for our Carmel-by-the-Sea kitchen cabinets, including solid hardwoods like oak, maple, cherry, and walnut, as well as premium plywood and MDF for painted finishes. All materials are sourced from sustainable suppliers and finished with high-quality stains, paints, and protective coatings for durability and beauty.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Can you match existing kitchen cabinets?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Yes, we can match existing kitchen cabinets in your Carmel-by-the-Sea home. We'll analyze the current cabinets' style, color, and finish, then create new cabinets that seamlessly blend with the existing ones. This is perfect for kitchen expansions or when you want to add new cabinets while keeping the existing ones.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Do you offer cabinet refacing services?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Yes, we offer comprehensive cabinet refacing services for Carmel-by-the-Sea homes. This includes replacing doors and drawer fronts, updating hardware, refinishing the cabinet boxes, and adding new organizational features. Refacing is a cost-effective way to give your kitchen a fresh look without the expense of completely new cabinets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Carmel-by-the-Sea Kitchen with Custom Cabinets?"
        description="Join Carmel-by-the-Sea's most discerning homeowners who have chosen PineWood Cabinets for their kitchen cabinet needs. Schedule a private consultation to discuss how we can bring your vision to life with bespoke cabinetry."
        primaryCTA={{
          text: "Schedule Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Portfolio",
          href: "/portfolio"
        }}
      />
    </>
  )
}
