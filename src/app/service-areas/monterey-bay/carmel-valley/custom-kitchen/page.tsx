import { Metadata } from 'next'
import { ServiceAreaPageLayout } from '@/components/PageLayout'
import { ServiceAreaHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature } from '@/components/ContentSection'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Custom Kitchen Carmel Valley | Custom Kitchen Services | PineWood Cabinets',
  description: 'Professional bespoke kitchen design and construction for Carmel Valley luxury homes. Expert kitchen services serving Monterey Bay with museum-grade craftsmanship.',
  keywords: [
    'custom kitchen carmel valley',
    'custom kitchen carmel valley CA',
    'custom kitchen carmel valley',
    'luxury cabinetry carmel valley',
    'kitchen design carmel valley',
    'wine country estates, rolling hills, exclusive residential community',
    'Monterey Bay kitchen services',
    'Carmel, Monterey kitchen design'
  ],
  openGraph: {
    title: 'Custom Kitchen Carmel Valley | Custom Kitchen Services | PineWood Cabinets',
    description: 'Professional bespoke kitchen design and construction for Carmel Valley luxury homes in Monterey Bay.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchen Carmel Valley",
  "Professional bespoke kitchen design and construction for Carmel Valley luxury homes in Monterey Bay",
  "Custom Kitchen",
  ["Carmel Valley, CA", "Monterey Bay, CA", "Carmel, Monterey, Pebble Beach"]
)

export default function CustomKitchenCarmelValleyPage() {
  return (
    <ServiceAreaPageLayout
      location="Carmel Valley"
      service="Custom Kitchen"
      structuredData={{ service: serviceSchema }}
    >
      <ServiceAreaHero
        location="Carmel Valley"
        service="Custom Kitchen"
        description="Serving Carmel Valley's discerning homeowners with bespoke kitchen design and construction that transform Monterey Bay homes into luxury culinary spaces."
        imageSrc="service-areas/carmel-valley-custom-kitchen-hero.webp"
        imageAlt="Custom custom kitchen in Carmel Valley home with Monterey Bay views and luxury finishes"
      />

      {/* Carmel Valley Custom Kitchen Overview */}
      <ContentSection background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Carmel Valley Custom Kitchen Excellence"
              description="Nestled in the rolling hills of Monterey County, Carmel Valley represents the pinnacle of California wine country living. This exclusive enclave is home to some of the most prestigious estates and custom homes in the region, where residents enjoy the perfect blend of rural tranquility and sophisticated luxury. Our Carmel Valley custom kitchen clients understand that true elegance lies in creating spaces that honor both the community's unique character and their own sophisticated lifestyle."
            />
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              From wine country estates and rolling hills, Carmel Valley's diverse residential landscape demands custom kitchen solutions that seamlessly blend exclusive residential community and equestrian properties with luxury functionality and uncompromising quality.
            </p>
            <Grid columns={2} gap="md">
              <Card>
                <h3 className="font-semibold text-charcoal mb-2">Custom Kitchen Projects</h3>
                <p className="text-2xl font-bold text-brass">150+</p>
                <p className="text-sm text-charcoal/70">Completed projects</p>
              </Card>
              <Card>
                <h3 className="font-semibold text-charcoal mb-2">Craftsmanship</h3>
                <p className="text-2xl font-bold text-brass">20+</p>
                <p className="text-sm text-charcoal/70">Years experience</p>
              </Card>
            </Grid>
          </div>
          <div className="relative">
            <img
              src="/images/service-areas/carmel-valley-custom-kitchen-overview.webp"
              alt="Custom custom kitchen in Carmel Valley home with Monterey Bay views and luxury finishes"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </ContentSection>

      {/* Custom Kitchen Services */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Custom Kitchen Services for Carmel Valley"
          description="Our comprehensive bespoke kitchen design and construction are tailored to meet the unique needs of Carmel Valley's diverse architectural styles and Monterey Bay lifestyle."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Complete Custom Kitchen</h3>
            <p className="text-charcoal/70 mb-4">
              Full custom kitchen transformation from design to completion, tailored to your Carmel Valley home's unique character and your lifestyle needs.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Design consultation</li>
              <li>• Custom planning</li>
              <li>• Material selection</li>
              <li>• Professional installation</li>
              <li>• Quality assurance</li>
              <li>• Final finishing</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Luxury Custom Kitchen</h3>
            <p className="text-charcoal/70 mb-4">
              Premium custom kitchen services that elevate your Carmel Valley home with museum-grade materials and craftsmanship.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Premium materials</li>
              <li>• Custom design</li>
              <li>• Expert craftsmanship</li>
              <li>• Luxury finishes</li>
              <li>• Quality guarantee</li>
              <li>• White-glove service</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Custom Kitchen</h3>
            <p className="text-charcoal/70 mb-4">
              Bespoke custom kitchen solutions designed specifically for your Carmel Valley home's unique requirements and aesthetic vision.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Bespoke design</li>
              <li>• Custom solutions</li>
              <li>• Personal consultation</li>
              <li>• Unique materials</li>
              <li>• Tailored functionality</li>
              <li>• Exclusive finishes</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Modern Custom Kitchen</h3>
            <p className="text-charcoal/70 mb-4">
              Contemporary custom kitchen designs that bring your Carmel Valley home up to current standards while maintaining its unique character.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Contemporary design</li>
              <li>• Modern functionality</li>
              <li>• Smart integration</li>
              <li>• Energy efficiency</li>
              <li>• Current trends</li>
              <li>• Technology integration</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Traditional Custom Kitchen</h3>
            <p className="text-charcoal/70 mb-4">
              Classic custom kitchen designs that honor traditional craftsmanship while providing modern functionality for your Carmel Valley home.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Traditional design</li>
              <li>• Classic materials</li>
              <li>• Time-honored techniques</li>
              <li>• Period details</li>
              <li>• Heritage finishes</li>
              <li>• Authentic craftsmanship</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Eco-Friendly Custom Kitchen</h3>
            <p className="text-charcoal/70 mb-4">
              Sustainable custom kitchen solutions that combine environmental responsibility with luxury living in your Carmel Valley home.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Sustainable materials</li>
              <li>• Eco-friendly finishes</li>
              <li>• Energy efficiency</li>
              <li>• Green technology</li>
              <li>• Environmental responsibility</li>
              <li>• Healthy living</li>
            </ul>
          </Card>
        </Grid>
      </ContentSection>

      {/* Custom Kitchen Process */}
      <ContentSection background="white" padding="xl">
        <SectionHeader
          title="Our Custom Kitchen Process"
          description="Our proven custom kitchen process ensures your Carmel Valley project exceeds expectations and perfectly reflects your vision."
          centered
          className="mb-16"
        />

        <Grid columns={4} gap="lg">
          <Feature
            icon={<span className="text-2xl font-bold text-brass">1</span>}
            title="Initial Consultation"
            description="Comprehensive consultation to understand your vision, needs, and budget for your Carmel Valley custom kitchen project."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">2</span>}
            title="Design Development"
            description="Creation of detailed design plans and 3D renderings for your Carmel Valley custom kitchen project."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">3</span>}
            title="Construction"
            description="Professional construction and installation of your approved Carmel Valley custom kitchen design."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">4</span>}
            title="Final Walkthrough"
            description="Comprehensive final walkthrough and project completion for your Carmel Valley custom kitchen project."
          />
        </Grid>
      </ContentSection>

      {/* Monterey Bay Custom Kitchen Philosophy */}
      <ContentSection background="charcoal" padding="xl" className="text-ivory">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Designed for Carmel Valley Living"
              description="Carmel Valley's unique Monterey Bay environment creates distinct requirements for custom kitchen projects. Our approach honors the community's character while delivering the functionality and elegance modern residents demand."
              className="text-ivory"
            />
            <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
              From morning coffee with wine country estates to evening entertaining that showcases the home's refined character, every custom kitchen decision reflects an understanding of how Carmel Valley residents truly live and enjoy their rolling hills lifestyle.
            </p>
          </div>
          <div className="space-y-6">
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Monterey Bay Integration</h3>
              <p className="text-ivory/80">Custom Kitchen designs that maximize Monterey Bay views and coastal beauty while maintaining functionality and aesthetic appeal.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Carmel Valley Adaptation</h3>
              <p className="text-ivory/80">Custom solutions that work with the natural wine country estates environment and rolling hills challenges.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Luxury Functionality</h3>
              <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste of Carmel Valley residents.</p>
            </Card>
          </div>
        </div>
      </ContentSection>

      {/* Featured Custom Kitchen Projects */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Featured Carmel Valley Custom Kitchen Projects"
          description="Explore our portfolio of custom kitchen projects throughout Carmel Valley's most prestigious Monterey Bay neighborhoods."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/carmel-valley-custom-kitchen-1.webp"
              alt="Custom custom kitchen in Carmel Valley with Monterey Bay views and luxury finishes"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Monterey Bay Views</h3>
              <p className="text-charcoal/70 mb-4">Custom Kitchen that maximizes Monterey Bay and coastal views while maintaining functionality and luxury.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">View Integration</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Custom Design</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/carmel-valley-custom-kitchen-2.webp"
              alt="Traditional custom kitchen in Carmel Valley with classic design and sophisticated finishes"
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
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/carmel-valley-custom-kitchen-3.webp"
              alt="Contemporary custom kitchen in Carmel Valley with modern design and clean lines"
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
          </Card>
        </Grid>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection background="white" padding="xl" maxWidth="2xl">
        <SectionHeader
          title="Carmel Valley Custom Kitchen FAQ"
          description="Common questions about custom kitchen services in Carmel Valley"
          centered
          className="mb-16"
        />

        <div className="space-y-8">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">How long does a custom kitchen project take?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              A complete custom kitchen project in Carmel Valley typically takes 6-10 weeks from start to finish. This includes 2-3 weeks for design and planning, 1-2 weeks for preparation, 3-5 weeks for construction and installation, and 1-2 weeks for finishing and cleanup. The timeline may vary depending on the scope of work and any unexpected issues that arise.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Do I need permits for my custom kitchen project?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Most custom kitchen projects in Carmel Valley require permits, especially if you're making structural changes, moving electrical or plumbing, or making modifications that affect the home's systems. We handle all permit applications and inspections as part of our comprehensive custom kitchen service. This ensures your project meets all local building codes and regulations.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Can I live in my home during the custom kitchen project?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Yes, most of our Carmel Valley custom kitchen clients choose to stay in their homes during the project. We work to minimize disruption by setting up temporary facilities, protecting other areas of your home, and maintaining a clean, organized work environment. We'll discuss your specific needs and preferences during the planning phase.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">What's included in your custom kitchen service?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Our complete custom kitchen service includes design consultation, 3D renderings, permit coordination, custom planning, material selection, professional installation, quality control, and final cleanup. We also provide project management and ongoing support throughout the entire process to ensure your Carmel Valley project exceeds expectations.
            </p>
          </Card>
        </div>
      </ContentSection>
    </ServiceAreaPageLayout>
  )
}