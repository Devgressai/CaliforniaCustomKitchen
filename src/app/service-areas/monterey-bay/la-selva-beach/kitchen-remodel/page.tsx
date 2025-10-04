import { Metadata } from 'next'
import { ServiceAreaPageLayout } from '@/components/PageLayout'
import { ServiceAreaHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature } from '@/components/ContentSection'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Kitchen Remodel La Selva Beach | Custom Kitchen Services | PineWood Cabinets',
  description: 'Professional complete kitchen renovation and remodeling services for La Selva Beach luxury homes. Expert kitchen services serving Monterey Bay with museum-grade craftsmanship.',
  keywords: [
    'kitchen remodel la selva beach',
    'kitchen remodel la selva beach CA',
    'custom kitchen la selva beach',
    'luxury cabinetry la selva beach',
    'kitchen design la selva beach',
    'exclusive beach community, private beach access, luxury homes',
    'Monterey Bay kitchen services',
    'Aptos, Capitola kitchen design'
  ],
  openGraph: {
    title: 'Custom Kitchen Services | PineWood Cabinets',
    description: 'Professional bespoke kitchen design and construction for Monterey Bay luxury homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Kitchen Remodel La Selva Beach",
  "Professional complete kitchen renovation and remodeling services for La Selva Beach luxury homes in Monterey Bay",
  "Kitchen Remodel",
  ["La Selva Beach, CA", "Monterey Bay, CA", "Aptos, Capitola, Soquel"]
)

export default function KitchenRemodelLaSelvaBeachPage() {
  return (
    <ServiceAreaPageLayout
      location="La Selva Beach"
      service="Kitchen Remodel"
      structuredData={{ service: serviceSchema }}
    >
      <ServiceAreaHero
        location="La Selva Beach"
        service="Kitchen Remodel"
        description="Serving La Selva Beach's discerning homeowners with complete kitchen renovation and remodeling services that transform Monterey Bay homes into luxury culinary spaces."
        imageSrc="service-areas/la-selva-beach-kitchen-remodel-hero.webp"
        imageAlt="Custom kitchen remodel in La Selva Beach home with Monterey Bay views and luxury finishes"
      />

      {/* La Selva Beach Kitchen Remodel Overview */}
      <ContentSection background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="La Selva Beach Kitchen Remodel Excellence"
              description="La Selva Beach represents the pinnacle of exclusive coastal living along the Monterey Bay. This private beach community offers residents unparalleled ocean access and privacy, making it one of the most sought-after locations for luxury custom homes in the region. Our La Selva Beach kitchen remodel clients understand that true elegance lies in creating spaces that honor both the community's unique character and their own sophisticated lifestyle."
            />
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              From exclusive beach community and private beach access, La Selva Beach's diverse residential landscape demands kitchen remodel solutions that seamlessly blend luxury homes and privacy with luxury functionality and uncompromising quality.
            </p>
            <Grid columns={2} gap="md">
              <Card>
                <h3 className="font-semibold text-charcoal mb-2">Kitchen Remodel Projects</h3>
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
              src="/images/service-areas/la-selva-beach-kitchen-remodel-overview.webp"
              alt="Custom kitchen remodel in La Selva Beach home with Monterey Bay views and luxury finishes"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </ContentSection>

      {/* Kitchen Remodel Services */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Kitchen Remodel Services for La Selva Beach"
          description="Our comprehensive complete kitchen renovation and remodeling services are tailored to meet the unique needs of La Selva Beach's diverse architectural styles and Monterey Bay lifestyle."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Complete Kitchen Remodel</h3>
            <p className="text-charcoal/70 mb-4">
              Full kitchen remodel transformation from design to completion, tailored to your La Selva Beach home's unique character and your lifestyle needs.
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
            <h3 className="text-xl font-semibold text-charcoal mb-4">Luxury Kitchen Remodel</h3>
            <p className="text-charcoal/70 mb-4">
              Premium kitchen remodel services that elevate your La Selva Beach home with museum-grade materials and craftsmanship.
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
            <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchen Remodel</h3>
            <p className="text-charcoal/70 mb-4">
              Bespoke kitchen remodel solutions designed specifically for your La Selva Beach home's unique requirements and aesthetic vision.
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
            <h3 className="text-xl font-semibold text-charcoal mb-4">Modern Kitchen Remodel</h3>
            <p className="text-charcoal/70 mb-4">
              Contemporary kitchen remodel designs that bring your La Selva Beach home up to current standards while maintaining its unique character.
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
            <h3 className="text-xl font-semibold text-charcoal mb-4">Traditional Kitchen Remodel</h3>
            <p className="text-charcoal/70 mb-4">
              Classic kitchen remodel designs that honor traditional craftsmanship while providing modern functionality for your La Selva Beach home.
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
            <h3 className="text-xl font-semibold text-charcoal mb-4">Eco-Friendly Kitchen Remodel</h3>
            <p className="text-charcoal/70 mb-4">
              Sustainable kitchen remodel solutions that combine environmental responsibility with luxury living in your La Selva Beach home.
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

      {/* Kitchen Remodel Process */}
      <ContentSection background="white" padding="xl">
        <SectionHeader
          title="Our Kitchen Remodel Process"
          description="Our proven kitchen remodel process ensures your La Selva Beach project exceeds expectations and perfectly reflects your vision."
          centered
          className="mb-16"
        />

        <Grid columns={4} gap="lg">
          <Feature
            icon={<span className="text-2xl font-bold text-brass">1</span>}
            title="Initial Consultation"
            description="Comprehensive consultation to understand your vision, needs, and budget for your La Selva Beach kitchen remodel project."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">2</span>}
            title="Design Development"
            description="Creation of detailed design plans and 3D renderings for your La Selva Beach kitchen remodel project."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">3</span>}
            title="Construction"
            description="Professional construction and installation of your approved La Selva Beach kitchen remodel design."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">4</span>}
            title="Final Walkthrough"
            description="Comprehensive final walkthrough and project completion for your La Selva Beach kitchen remodel project."
          />
        </Grid>
      </ContentSection>

      {/* Monterey Bay Kitchen Remodel Philosophy */}
      <ContentSection background="charcoal" padding="xl" className="text-ivory">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Designed for La Selva Beach Living"
              description="La Selva Beach's unique Monterey Bay environment creates distinct requirements for kitchen remodel projects. Our approach honors the community's character while delivering the functionality and elegance modern residents demand."
              className="text-ivory"
            />
            <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
              From morning coffee with exclusive beach community to evening entertaining that showcases the home's refined character, every kitchen remodel decision reflects an understanding of how La Selva Beach residents truly live and enjoy their private beach access lifestyle.
            </p>
          </div>
          <div className="space-y-6">
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Monterey Bay Integration</h3>
              <p className="text-ivory/80">Kitchen Remodel designs that maximize Monterey Bay views and coastal beauty while maintaining functionality and aesthetic appeal.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">La Selva Beach Adaptation</h3>
              <p className="text-ivory/80">Custom solutions that work with the natural exclusive beach community environment and private beach access challenges.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Luxury Functionality</h3>
              <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste of La Selva Beach residents.</p>
            </Card>
          </div>
        </div>
      </ContentSection>

      {/* Featured Kitchen Remodel Projects */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Featured La Selva Beach Kitchen Remodel Projects"
          description="Explore our portfolio of kitchen remodel projects throughout La Selva Beach's most prestigious Monterey Bay neighborhoods."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/la-selva-beach-kitchen-remodel-1.webp"
              alt="Custom kitchen remodel in La Selva Beach with Monterey Bay views and luxury finishes"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Monterey Bay Views</h3>
              <p className="text-charcoal/70 mb-4">Kitchen Remodel that maximizes Monterey Bay and coastal views while maintaining functionality and luxury.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">View Integration</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Custom Design</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/la-selva-beach-kitchen-remodel-2.webp"
              alt="Traditional kitchen remodel in La Selva Beach with classic design and sophisticated finishes"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Traditional Sophistication</h3>
              <p className="text-charcoal/70 mb-4">Classic kitchen remodel with traditional details and sophisticated finishes throughout.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Traditional Design</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Sophisticated Finishes</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/la-selva-beach-kitchen-remodel-3.webp"
              alt="Contemporary kitchen remodel in La Selva Beach with modern design and clean lines"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Contemporary Luxury</h3>
              <p className="text-charcoal/70 mb-4">Modern kitchen remodel with clean lines and premium materials for sophisticated living.</p>
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
          title="La Selva Beach Kitchen Remodel FAQ"
          description="Common questions about kitchen remodel services in La Selva Beach"
          centered
          className="mb-16"
        />

        <div className="space-y-8">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">How long does a kitchen remodel project take?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              A complete kitchen remodel project in La Selva Beach typically takes 6-10 weeks from start to finish. This includes 2-3 weeks for design and planning, 1-2 weeks for preparation, 3-5 weeks for construction and installation, and 1-2 weeks for finishing and cleanup. The timeline may vary depending on the scope of work and any unexpected issues that arise.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Do I need permits for my kitchen remodel project?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Most kitchen remodel projects in La Selva Beach require permits, especially if you're making structural changes, moving electrical or plumbing, or making modifications that affect the home's systems. We handle all permit applications and inspections as part of our comprehensive kitchen remodel service. This ensures your project meets all local building codes and regulations.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Can I live in my home during the kitchen remodel project?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Yes, most of our La Selva Beach kitchen remodel clients choose to stay in their homes during the project. We work to minimize disruption by setting up temporary facilities, protecting other areas of your home, and maintaining a clean, organized work environment. We'll discuss your specific needs and preferences during the planning phase.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">What's included in your kitchen remodel service?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Our complete kitchen remodel service includes design consultation, 3D renderings, permit coordination, custom planning, material selection, professional installation, quality control, and final cleanup. We also provide project management and ongoing support throughout the entire process to ensure your La Selva Beach project exceeds expectations.
            </p>
          </Card>
        </div>
      </ContentSection>
    </ServiceAreaPageLayout>
  )
}