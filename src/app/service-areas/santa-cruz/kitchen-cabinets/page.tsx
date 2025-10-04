import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Kitchen Cabinets Santa Cruz | Custom Cabinet Design | PineWood Cabinets',
  description: 'Custom kitchen cabinets for Santa Cruz luxury homes. Expert cabinet makers serving Monterey County with bespoke cabinetry solutions.',
  keywords: [
    'kitchen cabinets Santa Cruz',
    'custom cabinets Santa Cruz',
    'cabinet design Santa Cruz',
    'cabinet makers Santa Cruz',
    'kitchen cabinetry Santa Cruz',
    'kitchen cabinets Carmel',
    'kitchen cabinets Monterey',
    'kitchen cabinets Big Sur',
    'kitchen cabinets Pacific Grove',
    'kitchen cabinets Pebble Beach',
    'kitchen cabinets Seaside',
    'kitchen cabinets Marina',
    'kitchen cabinets Salinas',
    'kitchen cabinets Watsonville',
    'kitchen cabinets Monterey County'
  ],
  openGraph: {
    title: 'Kitchen Cabinets Santa Cruz | Custom Cabinet Design | PineWood Cabinets',
    description: 'Custom kitchen cabinets for Santa Cruz luxury homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Kitchen Cabinets Santa Cruz",
  "Custom kitchen cabinets for Santa Cruz luxury homes in Monterey County",
  "Kitchen Cabinets",
  ["Santa Cruz, CA", "Carmel, CA", "Monterey, CA", "Big Sur, CA", "Pacific Grove, CA"]
)

export default function KitchenCabinetsSantaCruzPage() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="Kitchen Cabinets Santa Cruz"
        subtitle="Custom Cabinet Design"
        description="Serving Santa Cruz's discerning homeowners with custom kitchen cabinets that transform Monterey County homes into luxury culinary spaces."
        imageSrc="service-areas/santa-cruz-kitchen-cabinets-hero.webp"
        imageAlt="Custom kitchen cabinets in Santa Cruz home with coastal views and luxury finishes"
      />

      {/* Santa Cruz Kitchen Cabinets Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Santa Cruz Kitchen Cabinets Excellence
              </h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                Santa Cruz represents the sophisticated heart of California's Central Coast—where coastal elegance meets refined luxury. Our Santa Cruz kitchen cabinet clients understand that true elegance lies in creating spaces that honor both the neighborhood's unique character and their own sophisticated lifestyle.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From historic beach cottages to contemporary architectural gems, Santa Cruz's diverse residential landscape demands kitchen cabinet solutions that seamlessly blend coastal sophistication with luxury functionality and uncompromising quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Cabinet Projects</h3>
                  <p className="text-2xl font-bold text-brass">210+</p>
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
                src="/images/service-areas/santa-cruz-kitchen-cabinets-overview.webp"
                alt="Custom kitchen cabinets in Santa Cruz home with coastal views and luxury finishes"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Kitchen Cabinet Services for Santa Cruz
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our comprehensive kitchen cabinet services are tailored to meet the unique needs of Santa Cruz's diverse architectural styles and coastal lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchen Cabinets</h3>
              <p className="text-charcoal/70 mb-4">
                Handcrafted kitchen cabinets designed and built specifically for your Santa Cruz kitchen space.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Custom sizing</li>
                <li>• Premium materials</li>
                <li>• Hardware selection</li>
                <li>• Finish options</li>
                <li>• Storage solutions</li>
                <li>• Installation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Cabinet Refacing</h3>
              <p className="text-charcoal/70 mb-4">
                Transform your existing Santa Cruz kitchen cabinets with new doors, drawer fronts, and hardware.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Door replacement</li>
                <li>• Drawer front updates</li>
                <li>• Hardware selection</li>
                <li>• Finish options</li>
                <li>• Storage solutions</li>
                <li>• Installation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Cabinet Restoration</h3>
              <p className="text-charcoal/70 mb-4">
                Expert restoration of historic and vintage Santa Cruz kitchen cabinets to preserve their original beauty and character.
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
              <h3 className="text-xl font-semibold text-charcoal mb-4">Cabinet Modernization</h3>
              <p className="text-charcoal/70 mb-4">
                Modern updates that bring your Santa Cruz kitchen cabinets up to current standards while maintaining their unique character.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Smart home integration</li>
                <li>• Energy-efficient features</li>
                <li>• Modern hardware</li>
                <li>• Updated finishes</li>
                <li>• Contemporary styling</li>
                <li>• Technology integration</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Cabinet Expansion</h3>
              <p className="text-charcoal/70 mb-4">
                Strategic expansion of your Santa Cruz kitchen cabinet space to improve functionality and accommodate your growing needs.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Space planning</li>
                <li>• Structural modifications</li>
                <li>• Custom solutions</li>
                <li>• Seamless integration</li>
                <li>• Quality construction</li>
                <li>• Installation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Cabinet Refresh</h3>
              <p className="text-charcoal/70 mb-4">
                Cosmetic updates that give your Santa Cruz kitchen cabinets a fresh, modern look without the complexity of a full replacement.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Hardware updates</li>
                <li>• Finish refresh</li>
                <li>• Storage solutions</li>
                <li>• Organization systems</li>
                <li>• Lighting integration</li>
                <li>• Maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cabinet Design Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Our Kitchen Cabinet Design Process
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our proven cabinet design process ensures your Santa Cruz kitchen cabinets exceed expectations and perfectly reflect your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Initial Consultation</h3>
              <p className="text-charcoal/70 mb-4">Comprehensive consultation to understand your vision, needs, and budget for your Santa Cruz kitchen cabinets.</p>
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
              <p className="text-charcoal/70 mb-4">Creation of detailed cabinet design plans and 3D renderings for your Santa Cruz kitchen.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Space planning</li>
                <li>• 3D renderings</li>
                <li>• Material selection</li>
                <li>• Layout optimization</li>
                <li>• Hardware selection</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Construction</h3>
              <p className="text-charcoal/70 mb-4">Professional construction and installation of your approved Santa Cruz kitchen cabinet design.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Demolition</li>
                <li>• Structural work</li>
                <li>• Installation</li>
                <li>• Quality control</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">4</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Final Walkthrough</h3>
              <p className="text-charcoal/70 mb-4">Comprehensive final walkthrough and project completion for your Santa Cruz kitchen cabinets.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Final inspection</li>
                <li>• Functionality test</li>
                <li>• Cleanup</li>
                <li>• Project handover</li>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Designed for Santa Cruz Living
              </h2>
              <p className="text-xl text-ivory/90 mb-6 leading-relaxed">
                Santa Cruz's unique coastal environment creates distinct requirements for kitchen cabinets. Our approach honors the neighborhood's character while delivering the functionality and elegance modern residents demand.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From morning coffee with ocean views to evening entertaining that showcases the home's refined character, every cabinet decision reflects an understanding of how Santa Cruz residents truly live and enjoy their coastal lifestyle.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Ocean Integration</h3>
                <p className="text-ivory/80">Cabinet designs that maximize ocean and coastal views while maintaining functionality and aesthetic appeal.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Coastal Adaptation</h3>
                <p className="text-ivory/80">Custom solutions that work with the natural coastal environment and challenges.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Luxury Functionality</h3>
                <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste of Santa Cruz residents.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Kitchen Cabinet Projects */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Featured Santa Cruz Kitchen Cabinet Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of kitchen cabinet projects throughout Santa Cruz's most prestigious coastal neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/santa-cruz-kitchen-cabinets-1.webp"
                alt="Custom kitchen cabinets in Santa Cruz home with ocean views and luxury finishes"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Ocean Views</h3>
                <p className="text-charcoal/70 mb-4">Kitchen cabinets that maximize ocean and coastal views while maintaining functionality and luxury.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">View Integration</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Custom Design</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/santa-cruz-kitchen-cabinets-2.webp"
                alt="Traditional kitchen cabinets in Santa Cruz with classic design and sophisticated finishes"
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
                src="/images/portfolio/santa-cruz-kitchen-cabinets-3.webp"
                alt="Contemporary kitchen cabinets in Santa Cruz with modern design and clean lines"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Santa Cruz Kitchen Cabinets FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about kitchen cabinet services in Santa Cruz
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How long do custom kitchen cabinets take?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Custom kitchen cabinets in Santa Cruz typically take 8-12 weeks from start to finish. This includes 2-3 weeks for design and planning, 1-2 weeks for demolition and preparation, 4-6 weeks for construction and installation, and 1-2 weeks for finishing and cleanup. The timeline may vary depending on the complexity of the design and any custom features requested.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Do I need permits for my kitchen cabinets?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Most kitchen cabinet projects in Santa Cruz require permits, especially if you're moving walls, changing electrical or plumbing, or making structural modifications. We handle all permit applications and inspections as part of our comprehensive kitchen cabinet service. This ensures your project meets all local building codes and regulations.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Can I live in my home during the cabinet installation?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Yes, most of our Santa Cruz kitchen cabinet clients choose to stay in their homes during the installation. We work to minimize disruption by setting up temporary kitchen facilities, protecting other areas of your home, and maintaining a clean, organized work environment. We'll discuss your specific needs and preferences during the planning phase.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What's included in your kitchen cabinet service?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our complete kitchen cabinet service includes design consultation, 3D renderings, material selection, custom construction, hardware selection, installation, and final cleanup. We also provide ongoing support and maintenance to ensure your cabinets continue to perform at their best for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Create Your Dream Kitchen Cabinets in Santa Cruz?"
        description="Join Santa Cruz's most discerning homeowners who have chosen PineWood Cabinets for their kitchen cabinet needs. Schedule a private consultation to discuss how we can bring your vision to life with bespoke design and craftsmanship."
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
