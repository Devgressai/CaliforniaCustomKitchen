import { Metadata } from 'next'
import { ServiceAreaPageLayout } from '@/components/PageLayout'
import { ServiceAreaHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature } from '@/components/ContentSection'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Kitchen Cabinets Marina | Custom Kitchen Services | PineWood Cabinets',
  description: 'Professional custom cabinet manufacturing and installation for Marina luxury homes. Expert kitchen services serving Monterey Bay with museum-grade craftsmanship.',
  keywords: [
    'kitchen cabinets marina',
    'kitchen cabinets marina CA',
    'custom kitchen marina',
    'luxury cabinetry marina',
    'kitchen design marina',
    'growing luxury market, golf course proximity, beach access',
    'Monterey Bay kitchen services',
    'Monterey, Seaside kitchen design'
  ],
  openGraph: {
    title: 'Custom Kitchen Services | PineWood Cabinets',
    description: 'Professional bespoke kitchen design and construction for Monterey Bay luxury homes.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Kitchen Cabinets Marina",
  "Professional custom cabinet manufacturing and installation for Marina luxury homes in Monterey Bay",
  "Kitchen Cabinets",
  ["Marina, CA", "Monterey Bay, CA", "Monterey, Seaside, Pacific Grove"]
)

export default function KitchenCabinetsMarinaPage() {
  return (
    <ServiceAreaPageLayout
      location="Marina"
      service="Kitchen Cabinets"
      structuredData={{ service: serviceSchema }}
    >
      <ServiceAreaHero
        location="Marina"
        service="Kitchen Cabinets"
        description="Serving Marina's discerning homeowners with custom cabinet manufacturing and installation that transform Monterey Bay homes into luxury culinary spaces."
        imageSrc="service-areas/marina-kitchen-cabinets-hero.webp"
        imageAlt="Custom kitchen cabinets in Marina home with Monterey Bay views and luxury finishes"
      />

      {/* Marina Kitchen Cabinets Overview */}
      <ContentSection background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Marina Kitchen Cabinets Excellence"
              description="Marina is experiencing a renaissance as one of Monterey Bay's most promising luxury development areas. With its proximity to world-class golf courses, pristine beaches, and the Monterey Peninsula, Marina offers exceptional opportunities for custom home development and luxury living. Our Marina kitchen cabinets clients understand that true elegance lies in creating spaces that honor both the community's unique character and their own sophisticated lifestyle."
            />
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              From growing luxury market and golf course proximity, Marina's diverse residential landscape demands kitchen cabinets solutions that seamlessly blend beach access and development opportunities with luxury functionality and uncompromising quality.
            </p>
            <Grid columns={2} gap="md">
              <Card>
                <h3 className="font-semibold text-charcoal mb-2">Kitchen Cabinets Projects</h3>
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
              src="/images/service-areas/marina-kitchen-cabinets-overview.webp"
              alt="Custom kitchen cabinets in Marina home with Monterey Bay views and luxury finishes"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </ContentSection>

      {/* Kitchen Cabinets Services */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Kitchen Cabinets Services for Marina"
          description="Our comprehensive custom cabinet manufacturing and installation are tailored to meet the unique needs of Marina's diverse architectural styles and Monterey Bay lifestyle."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Complete Kitchen Cabinets</h3>
            <p className="text-charcoal/70 mb-4">
              Full kitchen cabinets transformation from design to completion, tailored to your Marina home's unique character and your lifestyle needs.
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
            <h3 className="text-xl font-semibold text-charcoal mb-4">Luxury Kitchen Cabinets</h3>
            <p className="text-charcoal/70 mb-4">
              Premium kitchen cabinets services that elevate your Marina home with museum-grade materials and craftsmanship.
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
            <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchen Cabinets</h3>
            <p className="text-charcoal/70 mb-4">
              Bespoke kitchen cabinets solutions designed specifically for your Marina home's unique requirements and aesthetic vision.
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
            <h3 className="text-xl font-semibold text-charcoal mb-4">Modern Kitchen Cabinets</h3>
            <p className="text-charcoal/70 mb-4">
              Contemporary kitchen cabinets designs that bring your Marina home up to current standards while maintaining its unique character.
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
            <h3 className="text-xl font-semibold text-charcoal mb-4">Traditional Kitchen Cabinets</h3>
            <p className="text-charcoal/70 mb-4">
              Classic kitchen cabinets designs that honor traditional craftsmanship while providing modern functionality for your Marina home.
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
            <h3 className="text-xl font-semibold text-charcoal mb-4">Eco-Friendly Kitchen Cabinets</h3>
            <p className="text-charcoal/70 mb-4">
              Sustainable kitchen cabinets solutions that combine environmental responsibility with luxury living in your Marina home.
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

      {/* Kitchen Cabinets Process */}
      <ContentSection background="white" padding="xl">
        <SectionHeader
          title="Our Kitchen Cabinets Process"
          description="Our proven kitchen cabinets process ensures your Marina project exceeds expectations and perfectly reflects your vision."
          centered
          className="mb-16"
        />

        <Grid columns={4} gap="lg">
          <Feature
            icon={<span className="text-2xl font-bold text-brass">1</span>}
            title="Initial Consultation"
            description="Comprehensive consultation to understand your vision, needs, and budget for your Marina kitchen cabinets project."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">2</span>}
            title="Design Development"
            description="Creation of detailed design plans and 3D renderings for your Marina kitchen cabinets project."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">3</span>}
            title="Construction"
            description="Professional construction and installation of your approved Marina kitchen cabinets design."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">4</span>}
            title="Final Walkthrough"
            description="Comprehensive final walkthrough and project completion for your Marina kitchen cabinets project."
          />
        </Grid>
      </ContentSection>

      {/* Monterey Bay Kitchen Cabinets Philosophy */}
      <ContentSection background="charcoal" padding="xl" className="text-ivory">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Designed for Marina Living"
              description="Marina's unique Monterey Bay environment creates distinct requirements for kitchen cabinets projects. Our approach honors the community's character while delivering the functionality and elegance modern residents demand."
              className="text-ivory"
            />
            <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
              From morning coffee with growing luxury market to evening entertaining that showcases the home's refined character, every kitchen cabinets decision reflects an understanding of how Marina residents truly live and enjoy their golf course proximity lifestyle.
            </p>
          </div>
          <div className="space-y-6">
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Monterey Bay Integration</h3>
              <p className="text-ivory/80">Kitchen Cabinets designs that maximize Monterey Bay views and coastal beauty while maintaining functionality and aesthetic appeal.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Marina Adaptation</h3>
              <p className="text-ivory/80">Custom solutions that work with the natural growing luxury market environment and golf course proximity challenges.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Luxury Functionality</h3>
              <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste of Marina residents.</p>
            </Card>
          </div>
        </div>
      </ContentSection>

      {/* Featured Kitchen Cabinets Projects */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Featured Marina Kitchen Cabinets Projects"
          description="Explore our portfolio of kitchen cabinets projects throughout Marina's most prestigious Monterey Bay neighborhoods."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/marina-kitchen-cabinets-1.webp"
              alt="Custom kitchen cabinets in Marina with Monterey Bay views and luxury finishes"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Monterey Bay Views</h3>
              <p className="text-charcoal/70 mb-4">Kitchen Cabinets that maximizes Monterey Bay and coastal views while maintaining functionality and luxury.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">View Integration</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Custom Design</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/marina-kitchen-cabinets-2.webp"
              alt="Traditional kitchen cabinets in Marina with classic design and sophisticated finishes"
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
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/marina-kitchen-cabinets-3.webp"
              alt="Contemporary kitchen cabinets in Marina with modern design and clean lines"
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
          </Card>
        </Grid>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection background="white" padding="xl" maxWidth="2xl">
        <SectionHeader
          title="Marina Kitchen Cabinets FAQ"
          description="Common questions about kitchen cabinets services in Marina"
          centered
          className="mb-16"
        />

        <div className="space-y-8">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">How long does a kitchen cabinets project take?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              A complete kitchen cabinets project in Marina typically takes 6-10 weeks from start to finish. This includes 2-3 weeks for design and planning, 1-2 weeks for preparation, 3-5 weeks for construction and installation, and 1-2 weeks for finishing and cleanup. The timeline may vary depending on the scope of work and any unexpected issues that arise.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Do I need permits for my kitchen cabinets project?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Most kitchen cabinets projects in Marina require permits, especially if you're making structural changes, moving electrical or plumbing, or making modifications that affect the home's systems. We handle all permit applications and inspections as part of our comprehensive kitchen cabinets service. This ensures your project meets all local building codes and regulations.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Can I live in my home during the kitchen cabinets project?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Yes, most of our Marina kitchen cabinets clients choose to stay in their homes during the project. We work to minimize disruption by setting up temporary facilities, protecting other areas of your home, and maintaining a clean, organized work environment. We'll discuss your specific needs and preferences during the planning phase.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">What's included in your kitchen cabinets service?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Our complete kitchen cabinets service includes design consultation, 3D renderings, permit coordination, custom planning, material selection, professional installation, quality control, and final cleanup. We also provide project management and ongoing support throughout the entire process to ensure your Marina project exceeds expectations.
            </p>
          </Card>
        </div>
      </ContentSection>
    </ServiceAreaPageLayout>
  )
}