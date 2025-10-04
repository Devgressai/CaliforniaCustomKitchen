import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import { StructuredData } from '@/components/StructuredData'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Custom Kitchen Berkeley | Bespoke Kitchen Design | PineWood Cabinets',
  description: 'Custom kitchen design and construction for Berkeley luxury homes. Expert kitchen craftsmen serving East Bay with bespoke solutions.',
  keywords: [
    'custom kitchen Berkeley',
    'bespoke kitchen Berkeley',
    'custom kitchen design Berkeley',
    'custom kitchen East Bay',
    'custom kitchen Oakland',
    'custom kitchen Alameda',
    'custom kitchen San Leandro',
    'custom kitchen Castro Valley',
    'custom kitchen Hayward',
    'custom kitchen Fremont',
    'custom kitchen Union City',
    'custom kitchen Newark',
    'custom kitchen San Lorenzo',
    'custom kitchen San Mateo',
    'custom kitchen Foster City'
  ],
  openGraph: {
    title: 'Custom Kitchen Berkeley | Bespoke Kitchen Design | PineWood Cabinets',
    description: 'Custom kitchen design and construction for Berkeley luxury homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchen Berkeley",
  "Custom kitchen design and construction for Berkeley luxury homes in East Bay",
  "Custom Kitchen",
  ["Berkeley, CA", "East Bay, CA", "Oakland, CA", "Alameda, CA", "San Leandro, CA"]
)

export default function CustomKitchenBerkeleyPage() {
  return (
    <>
      <StructuredData service={serviceSchema} />
      
      <HeroQuiet
        title="Custom Kitchen Berkeley"
        subtitle="Bespoke Kitchen Design"
        description="Serving Berkeley's discerning homeowners with custom kitchen design and construction that transforms East Bay homes into luxury culinary spaces."
        imageSrc="service-areas/berkeley-custom-kitchen-hero.webp"
        imageAlt="Custom kitchen in Berkeley home with East Bay views and luxury finishes"
      />

      {/* Berkeley Custom Kitchen Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Berkeley Custom Kitchen Excellence
              </h2>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                Berkeley represents the intellectual heart of East Bay living—where academic sophistication meets refined luxury. Our Berkeley custom kitchen clients understand that true elegance lies in creating spaces that honor both the neighborhood's unique character and their own sophisticated lifestyle.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                From historic hillside homes to contemporary architectural gems, Berkeley's diverse residential landscape demands custom kitchen solutions that seamlessly blend intellectual sophistication with luxury functionality and uncompromising quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-ivory p-6 rounded-lg">
                  <h3 className="font-semibold text-charcoal mb-2">Custom Projects</h3>
                  <p className="text-2xl font-bold text-brass">525+</p>
                  <p className="text-sm text-charcoal/70">Completed kitchens</p>
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
                src="/images/service-areas/berkeley-custom-kitchen-overview.webp"
                alt="Custom kitchen in Berkeley home with East Bay views and luxury finishes"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Custom Kitchen Services */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Custom Kitchen Services for Berkeley
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our comprehensive custom kitchen services are tailored to meet the unique needs of Berkeley's diverse architectural styles and East Bay lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Complete Custom Kitchen</h3>
              <p className="text-charcoal/70 mb-4">
                Full custom kitchen design and construction from concept to completion, tailored specifically for your Berkeley home's unique character.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Custom design</li>
                <li>• Bespoke cabinetry</li>
                <li>• Premium materials</li>
                <li>• Handcrafted construction</li>
                <li>• Perfect fit</li>
                <li>• Lifetime warranty</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchen Design</h3>
              <p className="text-charcoal/70 mb-4">
                Professional custom kitchen design services that create unique, functional spaces tailored to your Berkeley lifestyle and preferences.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Space planning</li>
                <li>• 3D renderings</li>
                <li>• Material selection</li>
                <li>• Layout optimization</li>
                <li>• Style coordination</li>
                <li>• Functionality design</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Cabinetry</h3>
              <p className="text-charcoal/70 mb-4">
                Bespoke cabinetry designed and crafted specifically for your Berkeley kitchen, ensuring perfect fit and exceptional quality.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Custom dimensions</li>
                <li>• Premium hardwoods</li>
                <li>• Handcrafted construction</li>
                <li>• Custom finishes</li>
                <li>• Hardware selection</li>
                <li>• Installation service</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Countertops</h3>
              <p className="text-charcoal/70 mb-4">
                Custom countertop design and installation using premium materials that complement your Berkeley kitchen's aesthetic and functionality.
              </p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Material selection</li>
                <li>• Custom fabrication</li>
                <li>• Precise installation</li>
                <li>• Edge treatments</li>
                <li>• Seamless joints</li>
                <li>• Maintenance guidance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Storage Solutions</h3>
              <p className="text-charcoal/70 mb-4">
                Custom storage solutions designed to maximize your Berkeley kitchen's functionality and organization while maintaining aesthetic appeal.
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

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Lighting</h3>
              <p className="text-charcoal/70 mb-4">
                Custom lighting design and installation that enhances your Berkeley kitchen's functionality, ambiance, and aesthetic appeal.
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
          </div>
        </div>
      </section>

      {/* Custom Kitchen Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Our Custom Kitchen Process
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our proven custom kitchen process ensures your Berkeley kitchen transformation exceeds expectations and perfectly reflects your vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Initial Consultation</h3>
              <p className="text-charcoal/70 mb-4">Comprehensive consultation to understand your vision, needs, and budget for your Berkeley custom kitchen.</p>
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
              <p className="text-charcoal/70 mb-4">Creation of detailed design plans and 3D renderings for your Berkeley custom kitchen.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Space planning</li>
                <li>• 3D renderings</li>
                <li>• Material selection</li>
                <li>• Layout optimization</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Construction</h3>
              <p className="text-charcoal/70 mb-4">Handcrafted construction of your custom Berkeley kitchen components with attention to detail.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Custom fabrication</li>
                <li>• Quality control</li>
                <li>• Finishing work</li>
                <li>• Hardware installation</li>
              </ul>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brass text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">4</div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Installation & Finish</h3>
              <p className="text-charcoal/70 mb-4">Professional installation and finishing of your custom Berkeley kitchen with final walkthrough.</p>
              <ul className="text-sm text-charcoal/60 space-y-1">
                <li>• Precise installation</li>
                <li>• Final adjustments</li>
                <li>• Quality inspection</li>
                <li>• Project handover</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* East Bay Custom Kitchen Philosophy */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
                Designed for Berkeley Living
              </h2>
              <p className="text-xl text-ivory/90 mb-6 leading-relaxed">
                Berkeley's unique East Bay environment creates distinct requirements for custom kitchens. Our approach honors the neighborhood's character while delivering the functionality and elegance modern residents demand.
              </p>
              <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
                From morning coffee with East Bay views to evening entertaining that showcases the home's refined character, every custom kitchen decision reflects an understanding of how Berkeley residents truly live and enjoy their intellectual lifestyle.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">East Bay Integration</h3>
                <p className="text-ivory/80">Custom kitchen designs that maximize East Bay and valley views while maintaining functionality and aesthetic appeal.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Intellectual Adaptation</h3>
                <p className="text-ivory/80">Custom solutions that work with the natural East Bay environment and challenges.</p>
              </div>
              <div className="bg-ivory/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Luxury Functionality</h3>
                <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste of Berkeley residents.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Custom Kitchen Projects */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Featured Berkeley Custom Kitchen Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Explore our portfolio of custom kitchen projects throughout Berkeley's most prestigious East Bay neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/berkeley-custom-kitchen-1.webp"
                alt="Custom kitchen in Berkeley with East Bay views and luxury finishes"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">East Bay Views</h3>
                <p className="text-charcoal/70 mb-4">Custom kitchen that maximizes East Bay and valley views while maintaining functionality and luxury.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">View Integration</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Custom Design</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/berkeley-custom-kitchen-2.webp"
                alt="Traditional custom kitchen in Berkeley with classic design and sophisticated finishes"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Traditional Sophistication</h3>
                <p className="text-charcoal/70 mb-4">Classic custom kitchen with traditional details and sophisticated finishes throughout.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Traditional Design</span>
                  <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Sophisticated Finishes</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src="/images/portfolio/berkeley-custom-kitchen-3.webp"
                alt="Contemporary custom kitchen in Berkeley with modern design and clean lines"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-2">Contemporary Luxury</h3>
                <p className="text-charcoal/70 mb-4">Modern custom kitchen with clean lines and premium materials for sophisticated living.</p>
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
              Berkeley Custom Kitchen FAQ
            </h2>
            <p className="text-xl text-charcoal/80">
              Common questions about custom kitchen services in Berkeley
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">How long does a custom kitchen project take?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                A complete custom kitchen project in Berkeley typically takes 12-16 weeks from start to finish. This includes 2-3 weeks for design and planning, 8-10 weeks for custom construction and fabrication, 2-3 weeks for installation and finishing, and 1-2 weeks for final adjustments and cleanup. The timeline may vary depending on the complexity of your project and any custom features.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What's the difference between custom and semi-custom kitchens?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Custom kitchens are built specifically for your Berkeley home with exact measurements, unique design features, and premium materials. Semi-custom kitchens use pre-made components with limited customization options. Custom kitchens offer superior fit, quality, and design flexibility, making them the preferred choice for luxury Berkeley homes.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Can you work with my existing kitchen layout?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Yes, we can work with your existing Berkeley kitchen layout and make strategic improvements to enhance functionality and aesthetics. We can also design complete layout changes if you're open to structural modifications. Our goal is to create the best possible custom kitchen for your space and budget.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What's included in your custom kitchen service?</h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our complete custom kitchen service includes design consultation, 3D renderings, custom construction, professional installation, hardware mounting, final adjustments, and project management. We also provide ongoing support and maintenance services to keep your custom kitchen looking and functioning perfectly for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Berkeley Kitchen with Custom Design?"
        description="Join Berkeley's most discerning homeowners who have chosen PineWood Cabinets for their custom kitchen needs. Schedule a private consultation to discuss how we can bring your vision to life with bespoke design and construction solutions."
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