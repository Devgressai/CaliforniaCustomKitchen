import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Kitchen Design Alameda | Custom Kitchen Design | PineWood Cabinets',
  description: 'Custom kitchen design for Alameda luxury homes. Expert kitchen designers serving East Bay with bespoke design solutions.',
  keywords: [
    'kitchen design Alameda',
    'kitchen designer Alameda',
    'custom kitchen design Alameda',
    'kitchen design East Bay',
    'kitchen design Oakland',
    'kitchen design Berkeley',
    'kitchen design San Leandro',
    'kitchen design Castro Valley',
    'kitchen design Hayward',
    'kitchen design Fremont',
    'kitchen design Union City',
    'kitchen design Newark',
    'kitchen design San Lorenzo',
    'kitchen design San Mateo',
    'kitchen design Foster City'
  ],
  openGraph: {
    title: 'Kitchen Design Alameda | Custom Kitchen Design | PineWood Cabinets',
    description: 'Custom kitchen design for Alameda luxury homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Kitchen Design Alameda",
  "Custom kitchen design for Alameda luxury homes in East Bay",
  "Kitchen Design",
  ["Alameda, CA", "East Bay, CA", "Oakland, CA", "Berkeley, CA", "San Leandro, CA"]
)

export default function KitchenDesignAlamedaPage() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="Kitchen Design Alameda"
        subtitle="Custom Kitchen Design"
        description="Serving Alameda's discerning homeowners with custom kitchen design that transforms East Bay homes into luxury culinary spaces."
        imageSrc="service-areas/alameda-kitchen-design-hero.webp"
        imageAlt="Custom kitchen design in Alameda home with East Bay views and luxury finishes"
      />

      {/* Alameda Kitchen Design Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Alameda Kitchen Design Excellence
              </h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                Alameda represents the sophisticated heart of East Bay living—where island charm meets refined luxury. Our Alameda kitchen design clients understand that true elegance lies in creating spaces that honor both the neighborhood's unique character and their own sophisticated lifestyle.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From Victorian homes to contemporary architectural gems, Alameda's diverse residential landscape demands kitchen design solutions that seamlessly blend island sophistication with luxury functionality and uncompromising quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Design Projects</h3>
                  <p className="text-2xl font-bold text-brass">425+</p>
                  <p className="text-sm text-charcoal/70">Completed designs</p>
                </div>
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Design Experience</h3>
                  <p className="text-2xl font-bold text-brass">20+</p>
                  <p className="text-sm text-charcoal/70">Years experience</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/service-areas/alameda-kitchen-design-overview.webp"
                alt="Custom kitchen design in Alameda home with East Bay views and luxury finishes"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Design Services */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Kitchen Design Services for Alameda
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our comprehensive kitchen design services are tailored to meet the unique needs of Alameda's diverse architectural styles and East Bay lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchen Design</h3>
              <p className="text-charcoal/70 mb-4">
                Bespoke kitchen design tailored to your Alameda home's unique character and your lifestyle needs.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Design consultation</li>
                <li>• 3D renderings</li>
                <li>• Space planning</li>
                <li>• Material selection</li>
                <li>• Layout optimization</li>
                <li>• Style coordination</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Renovation Design</h3>
              <p className="text-charcoal/70 mb-4">
                Design solutions for kitchen renovations that update your Alameda space while preserving its character.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Renovation planning</li>
                <li>• Layout optimization</li>
                <li>• Material selection</li>
                <li>• Style updates</li>
                <li>• Functionality improvements</li>
                <li>• Budget planning</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Remodel Design</h3>
              <p className="text-charcoal/70 mb-4">
                Comprehensive design services for kitchen remodels that transform your Alameda space completely.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Complete redesign</li>
                <li>• Structural planning</li>
                <li>• Custom solutions</li>
                <li>• Appliance integration</li>
                <li>• Lighting design</li>
                <li>• Finishing details</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Refresh Design</h3>
              <p className="text-charcoal/70 mb-4">
                Design solutions for kitchen refreshes that give your Alameda kitchen a fresh, modern look.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Cosmetic updates</li>
                <li>• Color schemes</li>
                <li>• Hardware selection</li>
                <li>• Backsplash design</li>
                <li>• Lighting updates</li>
                <li>• Accessory selection</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Expansion Design</h3>
              <p className="text-charcoal/70 mb-4">
                Design solutions for kitchen expansions that improve functionality and accommodate your growing needs.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Space planning</li>
                <li>• Layout optimization</li>
                <li>• Flow improvement</li>
                <li>• Storage solutions</li>
                <li>• Seamless integration</li>
                <li>• Functionality enhancement</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Restoration Design</h3>
              <p className="text-charcoal/70 mb-4">
                Design solutions for restoring historic and vintage Alameda kitchens to their original beauty.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Historical research</li>
                <li>• Period-appropriate design</li>
                <li>• Material selection</li>
                <li>• Hardware replication</li>
                <li>• Finish restoration</li>
                <li>• Modern functionality</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Our Kitchen Design Process
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our proven design process ensures your Alameda kitchen design exceeds expectations and perfectly reflects your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Initial Consultation</h3>
              <p className="text-charcoal/70 mb-4">Comprehensive consultation to understand your vision, needs, and budget for your Alameda kitchen design.</p>
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
              <p className="text-charcoal/70 mb-4">Creation of detailed design plans and 3D renderings for your Alameda kitchen design.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Space planning</li>
                <li>• 3D renderings</li>
                <li>• Material selection</li>
                <li>• Layout optimization</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Design Refinement</h3>
              <p className="text-charcoal/70 mb-4">Collaborative refinement of your design to ensure it perfectly meets your needs and preferences.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Design review</li>
                <li>• Refinement process</li>
                <li>• Final approval</li>
                <li>• Implementation planning</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">4</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Implementation Support</h3>
              <p className="text-charcoal/70 mb-4">Ongoing support throughout the implementation of your Alameda kitchen design.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Project oversight</li>
                <li>• Quality control</li>
                <li>• Problem solving</li>
                <li>• Final walkthrough</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* East Bay Design Philosophy */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Designed for Alameda Living
              </h2>
              <p className="text-xl text-ivory/90 mb-6 leading-relaxed">
                Alameda's unique East Bay environment creates distinct requirements for kitchen design. Our approach honors the neighborhood's character while delivering the functionality and elegance modern residents demand.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From morning coffee with East Bay views to evening entertaining that showcases the home's refined character, every design decision reflects an understanding of how Alameda residents truly live and enjoy their island lifestyle.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">East Bay Integration</h3>
                <p className="text-ivory/80">Design solutions that maximize East Bay and valley views while maintaining functionality and aesthetic appeal.</p>
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

      {/* Featured Kitchen Design Projects */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Featured Alameda Kitchen Design Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of kitchen design projects throughout Alameda's most prestigious East Bay neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/alameda-kitchen-design-1.webp"
                alt="Custom kitchen design in Alameda with East Bay views and luxury finishes"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">East Bay Views</h3>
                <p className="text-charcoal/70 mb-4">Kitchen design that maximizes East Bay and valley views while maintaining functionality and luxury.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">View Integration</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Custom Design</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/alameda-kitchen-design-2.webp"
                alt="Traditional kitchen design in Alameda with classic design and sophisticated finishes"
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
                src="/images/portfolio/alameda-kitchen-design-3.webp"
                alt="Contemporary kitchen design in Alameda with modern design and clean lines"
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

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Alameda Kitchen Design FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about kitchen design services in Alameda
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How long does the kitchen design process take?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                The kitchen design process in Alameda typically takes 4-6 weeks from initial consultation to final design approval. This includes 1-2 weeks for consultation and needs assessment, 2-3 weeks for design development and 3D renderings, and 1-2 weeks for design refinement and final approval. The timeline may vary depending on the complexity of your project.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What's included in your kitchen design service?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our complete kitchen design service includes initial consultation, needs assessment, space planning, 3D renderings, material selection, layout optimization, style coordination, and ongoing support throughout implementation. We also provide detailed specifications and recommendations for contractors and suppliers.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Can you work with my existing kitchen layout?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Yes, we can work with your existing Alameda kitchen layout or create a completely new design. We'll assess your current space, discuss your needs and preferences, and recommend the best approach for your specific situation and budget.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Do you provide 3D renderings?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Yes, we provide detailed 3D renderings as part of our kitchen design service. These renderings help you visualize your new kitchen design and make informed decisions about materials, finishes, and layout before construction begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Design Your Dream Kitchen in Alameda?"
        description="Join Alameda's most discerning homeowners who have chosen PineWood Cabinets for their kitchen design needs. Schedule a private consultation to discuss how we can bring your vision to life with bespoke design solutions."
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