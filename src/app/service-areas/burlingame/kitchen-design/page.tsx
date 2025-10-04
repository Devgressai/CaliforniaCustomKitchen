import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Kitchen Design Burlingame | Custom Kitchen Design | PineWood Cabinets',
  description: 'Custom kitchen design for Burlingame luxury homes. Expert kitchen designers serving Peninsula with bespoke design solutions.',
  keywords: [
    'kitchen design Burlingame',
    'custom kitchen design Burlingame',
    'kitchen designer Burlingame',
    'kitchen design Peninsula',
    'kitchen design San Mateo',
    'kitchen design Foster City',
    'kitchen design Redwood City',
    'kitchen design San Carlos',
    'kitchen design Belmont',
    'kitchen design Hillsborough',
    'kitchen design Atherton',
    'kitchen design Menlo Park',
    'kitchen design Palo Alto',
    'kitchen design Los Altos',
    'kitchen design Mountain View'
  ],
  openGraph: {
    title: 'Kitchen Design Burlingame | Custom Kitchen Design | PineWood Cabinets',
    description: 'Custom kitchen design for Burlingame luxury homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Kitchen Design Burlingame",
  "Custom kitchen design for Burlingame luxury homes in Peninsula",
  "Kitchen Design",
  ["Burlingame, CA", "Peninsula, CA", "San Mateo, CA", "Foster City, CA", "Redwood City, CA"]
)

export default function KitchenDesignBurlingamePage() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="Kitchen Design Burlingame"
        subtitle="Custom Kitchen Design"
        description="Serving Burlingame's discerning homeowners with custom kitchen design that transforms Peninsula homes into luxury culinary spaces."
        imageSrc="service-areas/burlingame-kitchen-design-hero.webp"
        imageAlt="Custom kitchen design in Burlingame home with Peninsula views and luxury finishes"
      />

      {/* Burlingame Kitchen Design Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in kitchen-design</h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                Burlingame represents the sophisticated heart of Peninsula living—where suburban elegance meets refined luxury. Our Burlingame kitchen design clients understand that true elegance lies in creating spaces that honor both the neighborhood's unique character and their own sophisticated lifestyle.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From traditional estates to contemporary architectural gems, Burlingame's diverse residential landscape demands kitchen design solutions that seamlessly blend suburban sophistication with luxury functionality and uncompromising quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Design Projects</h3>
                  <p className="text-2xl font-bold text-brass">425+</p>
                  <p className="text-sm text-charcoal/70">Completed designs</p>
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
                src="/images/service-areas/burlingame-kitchen-design-overview.webp"
                alt="Custom kitchen design in Burlingame home with Peninsula views and luxury finishes"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in kitchen-design</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our comprehensive kitchen design services are tailored to meet the unique needs of Burlingame's diverse architectural styles and Peninsula lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchen Design</h3>
              <p className="text-charcoal/70 mb-4">
                Bespoke kitchen design tailored specifically for your Burlingame home's unique character and your lifestyle needs.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Custom layout design</li>
                <li>• 3D renderings</li>
                <li>• Material selection</li>
                <li>• Color coordination</li>
                <li>• Lighting design</li>
                <li>• Storage solutions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Renovation Design</h3>
              <p className="text-charcoal/70 mb-4">
                Design services for renovating your existing Burlingame kitchen while preserving its architectural integrity and character.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Space analysis</li>
                <li>• Layout optimization</li>
                <li>• Style updates</li>
                <li>• Functionality improvements</li>
                <li>• Material upgrades</li>
                <li>• Cost planning</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Expansion Design</h3>
              <p className="text-charcoal/70 mb-4">
                Strategic design for expanding your Burlingame kitchen space to improve functionality and accommodate your growing needs.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Space planning</li>
                <li>• Structural considerations</li>
                <li>• Flow optimization</li>
                <li>• Seamless integration</li>
                <li>• Permit coordination</li>
                <li>• Budget planning</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Style Design</h3>
              <p className="text-charcoal/70 mb-4">
                Professional style design services that create cohesive, beautiful Burlingame kitchen spaces that reflect your personal taste.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Style consultation</li>
                <li>• Color schemes</li>
                <li>• Material coordination</li>
                <li>• Hardware selection</li>
                <li>• Accessory planning</li>
                <li>• Finishing touches</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Lighting Design</h3>
              <p className="text-charcoal/70 mb-4">
                Specialized lighting design that enhances your Burlingame kitchen's functionality, ambiance, and aesthetic appeal.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Task lighting</li>
                <li>• Ambient lighting</li>
                <li>• Accent lighting</li>
                <li>• Fixture selection</li>
                <li>• Control systems</li>
                <li>• Energy efficiency</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Storage Design</h3>
              <p className="text-charcoal/70 mb-4">
                Custom storage design solutions that maximize your Burlingame kitchen's functionality and organization.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Drawer organizers</li>
                <li>• Pull-out shelves</li>
                <li>• Lazy susans</li>
                <li>• Spice racks</li>
                <li>• Trash pull-outs</li>
                <li>• Custom inserts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in kitchen-design</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our proven design process ensures your Burlingame kitchen transformation exceeds expectations and perfectly reflects your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Initial Consultation</h3>
              <p className="text-charcoal/70 mb-4">Comprehensive consultation to understand your vision, needs, and budget for your Burlingame kitchen design.</p>
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
              <p className="text-charcoal/70 mb-4">Creation of detailed design plans and 3D renderings for your Burlingame kitchen design.</p>
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
              <p className="text-charcoal/70 mb-4">Collaborative refinement of your Burlingame kitchen design to ensure it meets all your requirements.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Design review</li>
                <li>• Revisions</li>
                <li>• Final approval</li>
                <li>• Implementation planning</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">4</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Implementation</h3>
              <p className="text-charcoal/70 mb-4">Professional implementation of your approved Burlingame kitchen design with ongoing support.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Project management</li>
                <li>• Quality control</li>
                <li>• Progress updates</li>
                <li>• Final walkthrough</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Peninsula Design Philosophy */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Luxury Kitchen Design in kitchen-design</h2>
              <p className="text-xl text-ivory/90 mb-6 leading-relaxed">
                Burlingame's unique Peninsula environment creates distinct requirements for kitchen design. Our approach honors the neighborhood's character while delivering the functionality and elegance modern residents demand.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From morning coffee with Peninsula views to evening entertaining that showcases the home's refined character, every design decision reflects an understanding of how Burlingame residents truly live and enjoy their sophisticated lifestyle.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Peninsula Integration</h3>
                <p className="text-ivory/80">Design solutions that maximize Peninsula and valley views while maintaining functionality and aesthetic appeal.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Suburban Adaptation</h3>
                <p className="text-ivory/80">Custom solutions that work with the natural Peninsula environment and challenges.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Luxury Functionality</h3>
                <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste of Burlingame residents.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Design Projects */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in kitchen-design</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of kitchen design projects throughout Burlingame's most prestigious Peninsula neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/burlingame-kitchen-design-1.webp"
                alt="Custom kitchen design in Burlingame with Peninsula views and luxury finishes"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Peninsula Views</h3>
                <p className="text-charcoal/70 mb-4">Kitchen design that maximizes Peninsula and valley views while maintaining functionality and luxury.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">View Integration</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Custom Design</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/burlingame-kitchen-design-2.webp"
                alt="Traditional kitchen design in Burlingame with classic design and sophisticated finishes"
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
                src="/images/portfolio/burlingame-kitchen-design-3.webp"
                alt="Contemporary kitchen design in Burlingame with modern design and clean lines"
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
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Luxury Kitchen Design in kitchen-design</h2>
            <p className="text-xl text-charcoal/80">
              Common questions about kitchen design services in Burlingame
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How long does the kitchen design process take?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                The kitchen design process in Burlingame typically takes 4-6 weeks from initial consultation to final design approval. This includes 1-2 weeks for consultation and needs assessment, 2-3 weeks for design development and 3D renderings, and 1-2 weeks for design refinement and final approval. The timeline may vary depending on the complexity of your project and any custom requirements.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What's included in your kitchen design service?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our complete kitchen design service includes initial consultation, needs assessment, space planning, 3D renderings, material selection, color coordination, lighting design, storage solutions, and implementation planning. We also provide ongoing support throughout the construction process to ensure your vision is realized perfectly.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Can you work with my existing kitchen layout?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Yes, we can work with your existing Burlingame kitchen layout and make strategic improvements to enhance functionality and aesthetics. We can also design complete layout changes if you're open to structural modifications. Our goal is to create the best possible kitchen design for your space and budget.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Do you provide 3D renderings?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Yes, we provide detailed 3D renderings for all Burlingame kitchen design projects. These renderings allow you to visualize your new kitchen from multiple angles and make informed decisions about materials, colors, and layout. We can also create virtual walkthroughs to help you experience your new kitchen before construction begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Burlingame Kitchen with Custom Design?"
        description="Join Burlingame's most discerning homeowners who have chosen PineWood Cabinets for their kitchen design needs. Schedule a private consultation to discuss how we can bring your vision to life with bespoke design solutions."
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