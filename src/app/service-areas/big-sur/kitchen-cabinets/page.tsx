import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Kitchen Cabinets Big Sur | Custom Kitchen Cabinets | PineWood Cabinets',
  description: 'Custom kitchen cabinets for Big Sur luxury homes. Expert cabinet makers serving Monterey County with bespoke cabinetry solutions.',
  keywords: [
    'kitchen cabinets Big Sur',
    'custom kitchen cabinets Big Sur',
    'kitchen cabinet makers Big Sur',
    'kitchen cabinets Carmel',
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
    title: 'Kitchen Cabinets Big Sur | Custom Kitchen Cabinets | PineWood Cabinets',
    description: 'Custom kitchen cabinets for Big Sur luxury homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Kitchen Cabinets Big Sur",
  "Custom kitchen cabinets for Big Sur luxury homes in Monterey County",
  "Kitchen Cabinets",
  ["Big Sur, CA", "Carmel, CA", "Monterey, CA", "Pacific Grove, CA", "Pebble Beach, CA"]
)

export default function KitchenCabinetsBigSurPage() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="Kitchen Cabinets Big Sur"
        subtitle="Custom Kitchen Cabinets"
        description="Serving Big Sur's discerning homeowners with custom kitchen cabinets that transform Monterey County homes into luxury culinary spaces."
        imageSrc="service-areas/big-sur-kitchen-cabinets-hero.webp"
        imageAlt="Custom kitchen cabinets in Big Sur home with ocean views and luxury finishes"
      />

      {/* Big Sur Kitchen Cabinets Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in kitchen-cabinets</h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                Big Sur represents the sophisticated heart of California's Central Coast—where coastal elegance meets refined luxury. Our Big Sur kitchen cabinet clients understand that true elegance lies in creating spaces that honor both the neighborhood's unique character and their own sophisticated lifestyle.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From historic cottages to contemporary architectural gems, Big Sur's diverse residential landscape demands kitchen cabinet solutions that seamlessly blend coastal sophistication with luxury functionality and uncompromising quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Cabinet Projects</h3>
                  <p className="text-2xl font-bold text-brass">200+</p>
                  <p className="text-sm text-charcoal/70">Completed cabinets</p>
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
                src="/images/service-areas/big-sur-kitchen-cabinets-overview.webp"
                alt="Custom kitchen cabinets in Big Sur home with ocean views and luxury finishes"
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
              Our comprehensive kitchen cabinet services are tailored to meet the unique needs of Big Sur's diverse architectural styles and coastal lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchen Cabinets</h3>
              <p className="text-charcoal/70 mb-4">
                Bespoke kitchen cabinets designed and crafted specifically for your Big Sur home's unique character and your lifestyle needs.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Custom design</li>
                <li>• Premium materials</li>
                <li>• Expert craftsmanship</li>
                <li>• Perfect fit</li>
                <li>• Quality construction</li>
                <li>• Professional installation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Cabinet Refacing</h3>
              <p className="text-charcoal/70 mb-4">
                Cabinet refacing services that give your Big Sur kitchen a fresh, modern look without the complexity of a full replacement.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Door replacement</li>
                <li>• Drawer front updates</li>
                <li>• Hardware updates</li>
                <li>• Finish updates</li>
                <li>• Cost efficiency</li>
                <li>• Quick turnaround</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Cabinet Repair</h3>
              <p className="text-charcoal/70 mb-4">
                Professional repair services that restore your Big Sur kitchen cabinets to their original beauty and functionality.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Door repair</li>
                <li>• Drawer repair</li>
                <li>• Hardware repair</li>
                <li>• Finish restoration</li>
                <li>• Structural repair</li>
                <li>• Quality restoration</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Cabinet Installation</h3>
              <p className="text-charcoal/70 mb-4">
                Professional installation services that ensure your Big Sur kitchen cabinets are perfectly positioned and functioning optimally.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Precise installation</li>
                <li>• Level alignment</li>
                <li>• Hardware installation</li>
                <li>• Door adjustment</li>
                <li>• Drawer adjustment</li>
                <li>• Final inspection</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Cabinet Design</h3>
              <p className="text-charcoal/70 mb-4">
                Custom design services that create the perfect kitchen cabinet solution for your Big Sur home's unique character and your lifestyle.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Space planning</li>
                <li>• Layout design</li>
                <li>• Style coordination</li>
                <li>• Functionality design</li>
                <li>• Material selection</li>
                <li>• Hardware selection</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Cabinet Restoration</h3>
              <p className="text-charcoal/70 mb-4">
                Expert restoration services that preserve the original beauty and character of your Big Sur kitchen cabinets.
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
          </div>
        </div>
      </section>

      {/* Cabinet Construction Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in kitchen-cabinets</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our proven construction process ensures your Big Sur kitchen cabinets exceed expectations and perfectly reflect your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Design & Planning</h3>
              <p className="text-charcoal/70 mb-4">Comprehensive design and planning for your Big Sur kitchen cabinets.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Space planning</li>
                <li>• Style selection</li>
                <li>• Material selection</li>
                <li>• Layout optimization</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Material Selection</h3>
              <p className="text-charcoal/70 mb-4">Careful selection of premium materials for your Big Sur kitchen cabinets.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Wood selection</li>
                <li>• Hardware selection</li>
                <li>• Finish selection</li>
                <li>• Quality inspection</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Construction</h3>
              <p className="text-charcoal/70 mb-4">Expert construction of your Big Sur kitchen cabinets with attention to detail.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Precision cutting</li>
                <li>• Expert assembly</li>
                <li>• Quality control</li>
                <li>• Finish application</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">4</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Installation</h3>
              <p className="text-charcoal/70 mb-4">Professional installation of your Big Sur kitchen cabinets with final inspection.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Precise installation</li>
                <li>• Hardware installation</li>
                <li>• Final adjustment</li>
                <li>• Quality inspection</li>
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
                Big Sur's unique coastal environment creates distinct requirements for kitchen cabinets. Our approach honors the neighborhood's character while delivering the functionality and elegance modern residents demand.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From morning coffee with ocean views to evening entertaining that showcases the home's refined character, every cabinet decision reflects an understanding of how Big Sur residents truly live and enjoy their coastal lifestyle.
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
                <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste of Big Sur residents.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Kitchen Cabinet Projects */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in kitchen-cabinets</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of kitchen cabinet projects throughout Big Sur's most prestigious coastal neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/big-sur-kitchen-cabinets-1.webp"
                alt="Custom kitchen cabinets in Big Sur home with ocean views and luxury finishes"
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
                src="/images/portfolio/big-sur-kitchen-cabinets-2.webp"
                alt="Traditional kitchen cabinets in Big Sur with classic design and sophisticated finishes"
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
                src="/images/portfolio/big-sur-kitchen-cabinets-3.webp"
                alt="Contemporary kitchen cabinets in Big Sur with modern design and clean lines"
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
              Common questions about kitchen cabinet services in Big Sur
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How long do custom kitchen cabinets take?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Custom kitchen cabinets in Big Sur typically take 8-12 weeks from start to finish. This includes 2-3 weeks for design and planning, 1-2 weeks for material selection and ordering, 4-6 weeks for construction, and 1-2 weeks for installation and finishing. The timeline may vary depending on the complexity of the project and any custom requirements.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What materials do you use for kitchen cabinets?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We use only the finest materials for our Big Sur kitchen cabinets, including premium hardwoods like oak, maple, cherry, and walnut, as well as high-quality plywood and MDF for interior construction. We also offer a wide range of finishes, from natural wood stains to custom paint colors, to ensure your cabinets perfectly match your home's style and your personal preferences.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Can you match existing kitchen cabinets?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Yes, we can match existing kitchen cabinets in Big Sur, whether you're looking to add new cabinets to complement existing ones or replace damaged cabinets while maintaining the overall design consistency. We'll carefully match the wood species, finish, and hardware to ensure a seamless integration with your existing kitchen.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What's included in your kitchen cabinet service?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our complete kitchen cabinet service includes design consultation, space planning, material selection, custom construction, hardware installation, and professional installation. We also provide project management and quality control throughout the entire process, ensuring your cabinets meet the highest standards of craftsmanship and functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Big Sur Kitchen with Custom Cabinets?"
        description="Join Big Sur's most discerning homeowners who have chosen PineWood Cabinets for their kitchen cabinet needs. Schedule a private consultation to discuss how we can bring your vision to life with bespoke design and craftsmanship."
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
