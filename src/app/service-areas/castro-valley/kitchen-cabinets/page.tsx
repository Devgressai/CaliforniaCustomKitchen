import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Kitchen Cabinets Castro Valley | Custom Cabinet Design | PineWood Cabinets',
  description: 'Custom kitchen cabinets for Castro Valley luxury homes. Expert cabinet makers serving East Bay with bespoke cabinetry solutions.',
  keywords: [
    'kitchen cabinets Castro Valley',
    'custom kitchen cabinets Castro Valley',
    'cabinet design Castro Valley',
    'kitchen cabinets East Bay',
    'kitchen cabinets Hayward',
    'kitchen cabinets San Leandro',
    'kitchen cabinets Union City',
    'kitchen cabinets Newark',
    'kitchen cabinets Fremont',
    'kitchen cabinets San Lorenzo',
    'kitchen cabinets San Mateo',
    'kitchen cabinets Foster City',
    'kitchen cabinets Redwood City',
    'kitchen cabinets San Carlos',
    'kitchen cabinets Belmont'
  ],
  openGraph: {
    title: 'Kitchen Cabinets Castro Valley | Custom Cabinet Design | PineWood Cabinets',
    description: 'Custom kitchen cabinets for Castro Valley luxury homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Kitchen Cabinets Castro Valley",
  "Custom kitchen cabinets for Castro Valley luxury homes in East Bay",
  "Kitchen Cabinets",
  ["Castro Valley, CA", "East Bay, CA", "Hayward, CA", "San Leandro, CA", "Union City, CA"]
)

export default function KitchenCabinetsCastroValleyPage() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="Kitchen Cabinets Castro Valley"
        subtitle="Custom Cabinet Design"
        description="Serving Castro Valley's discerning homeowners with custom kitchen cabinets that transform East Bay homes into luxury culinary spaces."
        imageSrc="service-areas/castro-valley-kitchen-cabinets-hero.webp"
        imageAlt="Custom kitchen cabinets in Castro Valley home with East Bay views and luxury finishes"
      />

      {/* Castro Valley Kitchen Cabinets Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Castro Valley Kitchen Cabinet Excellence
              </h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                Castro Valley represents the sophisticated heart of East Bay living—where suburban elegance meets refined luxury. Our Castro Valley kitchen cabinet clients understand that true elegance lies in creating spaces that honor both the neighborhood's unique character and their own sophisticated lifestyle.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From traditional estates to contemporary architectural gems, Castro Valley's diverse residential landscape demands kitchen cabinet solutions that seamlessly blend suburban sophistication with luxury functionality and uncompromising quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Cabinet Projects</h3>
                  <p className="text-2xl font-bold text-brass">325+</p>
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
                src="/images/service-areas/castro-valley-kitchen-cabinets-overview.webp"
                alt="Custom kitchen cabinets in Castro Valley home with East Bay views and luxury finishes"
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
              Kitchen Cabinet Services for Castro Valley
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our comprehensive kitchen cabinet services are tailored to meet the unique needs of Castro Valley's diverse architectural styles and East Bay lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchen Cabinets</h3>
              <p className="text-charcoal/70 mb-4">
                Bespoke kitchen cabinets designed and crafted specifically for your Castro Valley home's unique character and your lifestyle needs.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Custom design</li>
                <li>• Premium materials</li>
                <li>• Handcrafted construction</li>
                <li>• Perfect fit</li>
                <li>• Luxury finishes</li>
                <li>• Lifetime warranty</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Cabinet Refacing</h3>
              <p className="text-charcoal/70 mb-4">
                Transform your existing Castro Valley kitchen cabinets with new doors, drawer fronts, and hardware while keeping the existing structure.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Door replacement</li>
                <li>• Drawer front updates</li>
                <li>• Hardware selection</li>
                <li>• Color matching</li>
                <li>• Professional installation</li>
                <li>• Cost-effective solution</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Cabinet Restoration</h3>
              <p className="text-charcoal/70 mb-4">
                Expert restoration of vintage and historic Castro Valley kitchen cabinets to preserve their original beauty and character.
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
              <h3 className="text-xl font-semibold text-charcoal mb-4">Cabinet Design</h3>
              <p className="text-charcoal/70 mb-4">
                Professional cabinet design services that maximize your Castro Valley kitchen's functionality and aesthetic appeal.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Space planning</li>
                <li>• 3D renderings</li>
                <li>• Material selection</li>
                <li>• Layout optimization</li>
                <li>• Storage solutions</li>
                <li>• Style coordination</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Cabinet Installation</h3>
              <p className="text-charcoal/70 mb-4">
                Professional installation of your custom Castro Valley kitchen cabinets with precision and attention to detail.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Precise measurements</li>
                <li>• Level installation</li>
                <li>• Hardware mounting</li>
                <li>• Door alignment</li>
                <li>• Drawer adjustment</li>
                <li>• Final inspection</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Cabinet Maintenance</h3>
              <p className="text-charcoal/70 mb-4">
                Ongoing maintenance and care services to keep your Castro Valley kitchen cabinets looking and functioning perfectly.
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

      {/* Cabinet Materials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Premium Cabinet Materials
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We use only the finest materials for your Castro Valley kitchen cabinets, ensuring beauty, durability, and lasting value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-brass/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌳</span>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Hardwood Species</h3>
              <p className="text-charcoal/70 mb-4">Premium hardwoods including oak, maple, cherry, walnut, and mahogany for exceptional beauty and durability.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• White Oak</li>
                <li>• Red Oak</li>
                <li>• Maple</li>
                <li>• Cherry</li>
                <li>• Walnut</li>
                <li>• Mahogany</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-brass/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Finishes</h3>
              <p className="text-charcoal/70 mb-4">Custom finishes including stains, paints, and glazes to match your Castro Valley home's aesthetic.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Custom Stains</li>
                <li>• Paint Finishes</li>
                <li>• Glaze Effects</li>
                <li>• Distressed Looks</li>
                <li>• High Gloss</li>
                <li>• Matte Finishes</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-brass/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Hardware</h3>
              <p className="text-charcoal/70 mb-4">Premium hardware options including knobs, pulls, hinges, and drawer slides for smooth operation.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Soft-Close Hinges</li>
                <li>• Full-Extension Drawers</li>
                <li>• Premium Knobs</li>
                <li>• Designer Pulls</li>
                <li>• Hidden Hinges</li>
                <li>• Custom Hardware</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-brass/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Interior Options</h3>
              <p className="text-charcoal/70 mb-4">Custom interior options including organizers, lighting, and storage solutions for maximum functionality.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Drawer Organizers</li>
                <li>• Pull-Out Shelves</li>
                <li>• Lazy Susans</li>
                <li>• Spice Racks</li>
                <li>• Trash Pull-Outs</li>
                <li>• Custom Inserts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* East Bay Cabinet Philosophy */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Designed for Castro Valley Living
              </h2>
              <p className="text-xl text-ivory/90 mb-6 leading-relaxed">
                Castro Valley's unique East Bay environment creates distinct requirements for kitchen cabinets. Our approach honors the neighborhood's character while delivering the functionality and elegance modern residents demand.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From morning coffee with East Bay views to evening entertaining that showcases the home's refined character, every cabinet decision reflects an understanding of how Castro Valley residents truly live and enjoy their sophisticated lifestyle.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">East Bay Integration</h3>
                <p className="text-ivory/80">Cabinet designs that maximize East Bay and valley views while maintaining functionality and aesthetic appeal.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Suburban Adaptation</h3>
                <p className="text-ivory/80">Custom solutions that work with the natural East Bay environment and challenges.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Luxury Functionality</h3>
                <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste of Castro Valley residents.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cabinet Projects */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Featured Castro Valley Kitchen Cabinet Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of kitchen cabinet projects throughout Castro Valley's most prestigious East Bay neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/castro-valley-kitchen-cabinets-1.webp"
                alt="Custom kitchen cabinets in Castro Valley with East Bay views and luxury finishes"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">East Bay Views</h3>
                <p className="text-charcoal/70 mb-4">Kitchen cabinets that maximize East Bay and valley views while maintaining functionality and luxury.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">View Integration</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Custom Cabinets</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/castro-valley-kitchen-cabinets-2.webp"
                alt="Traditional kitchen cabinets in Castro Valley with classic design and sophisticated finishes"
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
                src="/images/portfolio/castro-valley-kitchen-cabinets-3.webp"
                alt="Contemporary kitchen cabinets in Castro Valley with modern design and clean lines"
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
              Castro Valley Kitchen Cabinet FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about kitchen cabinet services in Castro Valley
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How long does it take to install custom kitchen cabinets?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Custom kitchen cabinet installation in Castro Valley typically takes 2-4 weeks from start to finish. This includes 1-2 weeks for precise measurements and preparation, 1-2 weeks for cabinet installation and hardware mounting, and 1 week for final adjustments and finishing. The timeline may vary depending on the complexity of your project and any custom features.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What's the difference between custom and semi-custom cabinets?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Custom cabinets are built specifically for your Castro Valley home with exact measurements, unique design features, and premium materials. Semi-custom cabinets are pre-made in standard sizes with limited customization options. Custom cabinets offer superior fit, quality, and design flexibility, making them the preferred choice for luxury Castro Valley homes.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Can you match my existing kitchen cabinets?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Yes, we can match your existing Castro Valley kitchen cabinets through careful color matching, wood species identification, and finish replication. We can also create complementary cabinets that work harmoniously with your existing design while providing the functionality and quality you need.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What's included in your kitchen cabinet service?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our complete kitchen cabinet service includes design consultation, 3D renderings, material selection, custom construction, professional installation, hardware mounting, door and drawer adjustment, and final inspection. We also provide ongoing maintenance and care services to keep your cabinets looking and functioning perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Castro Valley Kitchen with Custom Cabinets?"
        description="Join Castro Valley's most discerning homeowners who have chosen PineWood Cabinets for their kitchen cabinet needs. Schedule a private consultation to discuss how we can bring your vision to life with bespoke cabinetry solutions."
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