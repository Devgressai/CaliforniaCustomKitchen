import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Kitchen Cabinets Alameda | Custom Kitchen Cabinets | PineWood Cabinets',
  description: 'Custom kitchen cabinets for Alameda luxury homes. Expert cabinet makers serving East Bay with bespoke cabinetry solutions.',
  keywords: [
    'kitchen cabinets Alameda',
    'custom kitchen cabinets Alameda',
    'kitchen cabinet makers Alameda',
    'kitchen cabinets East Bay',
    'kitchen cabinets Oakland',
    'kitchen cabinets Berkeley',
    'kitchen cabinets San Leandro',
    'kitchen cabinets Castro Valley',
    'kitchen cabinets Hayward',
    'kitchen cabinets Fremont',
    'kitchen cabinets Union City',
    'kitchen cabinets Newark',
    'kitchen cabinets San Lorenzo',
    'kitchen cabinets San Mateo',
    'kitchen cabinets Foster City'
  ],
  openGraph: {
    title: 'Kitchen Cabinets Alameda | Custom Kitchen Cabinets | PineWood Cabinets',
    description: 'Custom kitchen cabinets for Alameda luxury homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Kitchen Cabinets Alameda",
  "Custom kitchen cabinets for Alameda luxury homes in East Bay",
  "Kitchen Cabinets",
  ["Alameda, CA", "East Bay, CA", "Oakland, CA", "Berkeley, CA", "San Leandro, CA"]
)

export default function KitchenCabinetsAlamedaPage() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="Kitchen Cabinets Alameda"
        subtitle="Custom Kitchen Cabinets"
        description="Serving Alameda's discerning homeowners with custom kitchen cabinets that transform East Bay homes into luxury culinary spaces."
        imageSrc="service-areas/alameda-kitchen-cabinets-hero.webp"
        imageAlt="Custom kitchen cabinets in Alameda home with East Bay views and luxury finishes"
      />

      {/* Alameda Kitchen Cabinets Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Alameda Kitchen Cabinets Excellence
              </h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                Alameda represents the sophisticated heart of East Bay living—where island charm meets refined luxury. Our Alameda kitchen cabinet clients understand that true elegance lies in creating spaces that honor both the neighborhood's unique character and their own sophisticated lifestyle.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From Victorian homes to contemporary architectural gems, Alameda's diverse residential landscape demands kitchen cabinet solutions that seamlessly blend island sophistication with luxury functionality and uncompromising quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Cabinet Projects</h3>
                  <p className="text-2xl font-bold text-brass">425+</p>
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
                src="/images/service-areas/alameda-kitchen-cabinets-overview.webp"
                alt="Custom kitchen cabinets in Alameda home with East Bay views and luxury finishes"
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
              Kitchen Cabinet Services for Alameda
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our comprehensive kitchen cabinet services are tailored to meet the unique needs of Alameda's diverse architectural styles and East Bay lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchen Cabinets</h3>
              <p className="text-charcoal/70 mb-4">
                Handcrafted custom kitchen cabinets designed and built specifically for your Alameda home's unique space and style.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Custom measurements</li>
                <li>• Premium materials</li>
                <li>• Handcrafted construction</li>
                <li>• Custom finishes</li>
                <li>• Hardware selection</li>
                <li>• Installation service</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Cabinet Refacing</h3>
              <p className="text-charcoal/70 mb-4">
                Transform your existing Alameda kitchen cabinets with new doors, drawer fronts, and finishes while keeping the existing structure.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Door replacement</li>
                <li>• Drawer front updates</li>
                <li>• Finish updates</li>
                <li>• Hardware updates</li>
                <li>• Interior organization</li>
                <li>• Cost-effective solution</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Cabinet Restoration</h3>
              <p className="text-charcoal/70 mb-4">
                Expert restoration of historic and vintage Alameda kitchen cabinets to preserve their original beauty and character.
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
              <h3 className="text-xl font-semibold text-charcoal mb-4">Cabinet Installation</h3>
              <p className="text-charcoal/70 mb-4">
                Professional installation of your new kitchen cabinets with precision and attention to detail.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Professional installation</li>
                <li>• Precision alignment</li>
                <li>• Hardware installation</li>
                <li>• Final adjustments</li>
                <li>• Quality control</li>
                <li>• Cleanup service</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Cabinet Repair</h3>
              <p className="text-charcoal/70 mb-4">
                Expert repair services for your existing Alameda kitchen cabinets to restore their functionality and appearance.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Structural repairs</li>
                <li>• Hardware replacement</li>
                <li>• Finish touch-ups</li>
                <li>• Door adjustments</li>
                <li>• Drawer repairs</li>
                <li>• Maintenance service</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Cabinet Design</h3>
              <p className="text-charcoal/70 mb-4">
                Custom cabinet design services that create the perfect storage solutions for your Alameda kitchen.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Space planning</li>
                <li>• Storage optimization</li>
                <li>• Style coordination</li>
                <li>• Material selection</li>
                <li>• Hardware selection</li>
                <li>• 3D renderings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cabinet Construction Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Our Kitchen Cabinet Construction Process
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our proven construction process ensures your Alameda kitchen cabinets exceed expectations and perfectly reflect your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Design & Planning</h3>
              <p className="text-charcoal/70 mb-4">Detailed design and planning for your Alameda kitchen cabinets.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Space assessment</li>
                <li>• Design development</li>
                <li>• Material selection</li>
                <li>• Timeline planning</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Material Preparation</h3>
              <p className="text-charcoal/70 mb-4">Careful selection and preparation of premium materials for your cabinets.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Material sourcing</li>
                <li>• Quality inspection</li>
                <li>• Preparation work</li>
                <li>• Tool setup</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Construction</h3>
              <p className="text-charcoal/70 mb-4">Handcrafted construction of your custom kitchen cabinets in our workshop.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Precision cutting</li>
                <li>• Assembly work</li>
                <li>• Quality control</li>
                <li>• Finishing work</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">4</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Installation</h3>
              <p className="text-charcoal/70 mb-4">Professional installation and final walkthrough of your Alameda kitchen cabinets.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Professional installation</li>
                <li>• Final inspection</li>
                <li>• Functionality test</li>
                <li>• Project handover</li>
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
                Designed for Alameda Living
              </h2>
              <p className="text-xl text-ivory/90 mb-6 leading-relaxed">
                Alameda's unique East Bay environment creates distinct requirements for kitchen cabinets. Our approach honors the neighborhood's character while delivering the functionality and elegance modern residents demand.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From morning coffee with East Bay views to evening entertaining that showcases the home's refined character, every cabinet decision reflects an understanding of how Alameda residents truly live and enjoy their island lifestyle.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">East Bay Integration</h3>
                <p className="text-ivory/80">Cabinet solutions that maximize East Bay and valley views while maintaining functionality and aesthetic appeal.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Island Adaptation</h3>
                <p className="text-ivory/80">Custom solutions that work with the natural East Bay environment and challenges.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Luxury Functionality</h3>
                <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste of Alameda residents.</p>
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
              Featured Alameda Kitchen Cabinet Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of kitchen cabinet projects throughout Alameda's most prestigious East Bay neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/alameda-kitchen-cabinets-1.webp"
                alt="Custom kitchen cabinets in Alameda with East Bay views and luxury finishes"
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
                src="/images/portfolio/alameda-kitchen-cabinets-2.webp"
                alt="Traditional kitchen cabinets in Alameda with classic design and sophisticated finishes"
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
                src="/images/portfolio/alameda-kitchen-cabinets-3.webp"
                alt="Contemporary kitchen cabinets in Alameda with modern design and clean lines"
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
              Alameda Kitchen Cabinets FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about kitchen cabinet services in Alameda
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How long does a custom kitchen cabinet project take?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                A complete custom kitchen cabinet project in Alameda typically takes 8-12 weeks from start to finish. This includes 2-3 weeks for design and planning, 4-6 weeks for custom construction in our workshop, 1-2 weeks for installation, and 1-2 weeks for finishing and cleanup. The timeline may vary depending on the complexity of your custom requirements.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What materials do you use for kitchen cabinets?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                We use only the finest materials for our Alameda kitchen cabinets, including premium hardwoods like oak, maple, cherry, and walnut, as well as high-quality plywood and MDF for painted finishes. All materials are carefully selected for durability, beauty, and suitability for your specific design requirements.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Can you match my existing kitchen cabinets?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Yes, we can match your existing Alameda kitchen cabinets or create new ones that complement your current design. We'll assess your existing cabinets, discuss your needs and preferences, and recommend the best approach for your specific situation and budget.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What's included in your kitchen cabinet service?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our complete kitchen cabinet service includes design consultation, custom construction, hardware selection, professional installation, and final cleanup. We also provide ongoing support and maintenance services to ensure your cabinets continue to look and function perfectly for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Alameda Kitchen with Custom Cabinets?"
        description="Join Alameda's most discerning homeowners who have chosen PineWood Cabinets for their kitchen cabinet needs. Schedule a private consultation to discuss how we can bring your vision to life with bespoke cabinetry solutions."
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