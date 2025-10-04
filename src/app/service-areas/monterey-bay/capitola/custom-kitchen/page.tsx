import { Metadata } from 'next'
import { ServiceAreaPageLayout } from '@/components/PageLayout'
import { ServiceAreaHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature } from '@/components/ContentSection'
import { generateServiceSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Custom Kitchen Capitola | Custom Kitchen Services | PineWood Cabinets',
  description: 'Professional bespoke kitchen design and construction for Capitola luxury homes. Expert kitchen services serving Monterey Bay with museum-grade craftsmanship.',
  keywords: [
    'custom kitchen capitola',
    'custom kitchen capitola CA',
    'custom kitchen capitola',
    'luxury cabinetry capitola',
    'kitchen design capitola',
    'beach town charm, colorful architecture, artistic community',
    'Monterey Bay kitchen services',
    'Santa Cruz, Aptos kitchen design'
  ],
  openGraph: {
    title: 'Custom Kitchen Capitola | Custom Kitchen Services | PineWood Cabinets',
    description: 'Professional bespoke kitchen design and construction for Capitola luxury homes in Monterey Bay.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchen Capitola",
  "Professional bespoke kitchen design and construction for Capitola luxury homes in Monterey Bay",
  "Custom Kitchen",
  ["Capitola, CA", "Monterey Bay, CA", "Santa Cruz, Aptos, Soquel"]
)

export default function CustomKitchenCapitolaPage() {
  return (
    <ServiceAreaPageLayout
      location="Capitola"
      service="Custom Kitchen"
      structuredData={{ service: serviceSchema }}
    >
      <ServiceAreaHero
        location="Capitola"
        service="Custom Kitchen"
        description="Serving Capitola's discerning homeowners with bespoke kitchen design and construction that transform Monterey Bay homes into luxury culinary spaces."
        imageSrc="service-areas/capitola-custom-kitchen-hero.webp"
        imageAlt="Custom custom kitchen in Capitola home with Monterey Bay views and luxury finishes"
      />

      {/* Capitola Custom Kitchen Overview */}
      <ContentSection background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Capitola Custom Kitchen Excellence"
              description="This charming beach town along the Santa Cruz coastline offers a unique blend of coastal sophistication and artistic flair. Capitola's colorful architecture and vibrant community create the perfect backdrop for custom homes that celebrate both ocean views and creative expression. Our Capitola custom kitchen clients understand that true elegance lies in creating spaces that honor both the community's unique character and their own sophisticated lifestyle."
            />
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              From beach town charm and colorful architecture, Capitola's diverse residential landscape demands custom kitchen solutions that seamlessly blend artistic community and coastal views with luxury functionality and uncompromising quality.
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
              src="/images/service-areas/capitola-custom-kitchen-overview.webp"
              alt="Custom custom kitchen in Capitola home with Monterey Bay views and luxury finishes"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </ContentSection>

      {/* Custom Kitchen Services */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Custom Kitchen Services for Capitola"
          description="Our comprehensive bespoke kitchen design and construction are tailored to meet the unique needs of Capitola's diverse architectural styles and Monterey Bay lifestyle."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Complete Custom Kitchen</h3>
            <p className="text-charcoal/70 mb-4">
              Full custom kitchen transformation from design to completion, tailored to your Capitola home's unique character and your lifestyle needs.
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
              Premium custom kitchen services that elevate your Capitola home with museum-grade materials and craftsmanship.
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
              Bespoke custom kitchen solutions designed specifically for your Capitola home's unique requirements and aesthetic vision.
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
              Contemporary custom kitchen designs that bring your Capitola home up to current standards while maintaining its unique character.
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
              Classic custom kitchen designs that honor traditional craftsmanship while providing modern functionality for your Capitola home.
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
              Sustainable custom kitchen solutions that combine environmental responsibility with luxury living in your Capitola home.
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
          description="Our proven custom kitchen process ensures your Capitola project exceeds expectations and perfectly reflects your vision."
          centered
          className="mb-16"
        />

        <Grid columns={4} gap="lg">
          <Feature
            icon={<span className="text-2xl font-bold text-brass">1</span>}
            title="Initial Consultation"
            description="Comprehensive consultation to understand your vision, needs, and budget for your Capitola custom kitchen project."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">2</span>}
            title="Design Development"
            description="Creation of detailed design plans and 3D renderings for your Capitola custom kitchen project."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">3</span>}
            title="Construction"
            description="Professional construction and installation of your approved Capitola custom kitchen design."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">4</span>}
            title="Final Walkthrough"
            description="Comprehensive final walkthrough and project completion for your Capitola custom kitchen project."
          />
        </Grid>
      </ContentSection>

      {/* Monterey Bay Custom Kitchen Philosophy */}
      <ContentSection background="charcoal" padding="xl" className="text-ivory">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Designed for Capitola Living"
              description="Capitola's unique Monterey Bay environment creates distinct requirements for custom kitchen projects. Our approach honors the community's character while delivering the functionality and elegance modern residents demand."
              className="text-ivory"
            />
            <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
              From morning coffee with beach town charm to evening entertaining that showcases the home's refined character, every custom kitchen decision reflects an understanding of how Capitola residents truly live and enjoy their colorful architecture lifestyle.
            </p>
          </div>
          <div className="space-y-6">
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Monterey Bay Integration</h3>
              <p className="text-ivory/80">Custom Kitchen designs that maximize Monterey Bay views and coastal beauty while maintaining functionality and aesthetic appeal.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Capitola Adaptation</h3>
              <p className="text-ivory/80">Custom solutions that work with the natural beach town charm environment and colorful architecture challenges.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Luxury Functionality</h3>
              <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste of Capitola residents.</p>
            </Card>
          </div>
        </div>
      </ContentSection>

      {/* Featured Custom Kitchen Projects */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Featured Capitola Custom Kitchen Projects"
          description="Explore our portfolio of custom kitchen projects throughout Capitola's most prestigious Monterey Bay neighborhoods."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/capitola-custom-kitchen-1.webp"
              alt="Custom custom kitchen in Capitola with Monterey Bay views and luxury finishes"
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
              src="/images/portfolio/capitola-custom-kitchen-2.webp"
              alt="Traditional custom kitchen in Capitola with classic design and sophisticated finishes"
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
              src="/images/portfolio/capitola-custom-kitchen-3.webp"
              alt="Contemporary custom kitchen in Capitola with modern design and clean lines"
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
          title="Capitola Custom Kitchen FAQ"
          description="Common questions about custom kitchen services in Capitola"
          centered
          className="mb-16"
        />

        <div className="space-y-8">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">How long does a custom kitchen project take?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              A complete custom kitchen project in Capitola typically takes 6-10 weeks from start to finish. This includes 2-3 weeks for design and planning, 1-2 weeks for preparation, 3-5 weeks for construction and installation, and 1-2 weeks for finishing and cleanup. The timeline may vary depending on the scope of work and any unexpected issues that arise.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Do I need permits for my custom kitchen project?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Most custom kitchen projects in Capitola require permits, especially if you're making structural changes, moving electrical or plumbing, or making modifications that affect the home's systems. We handle all permit applications and inspections as part of our comprehensive custom kitchen service. This ensures your project meets all local building codes and regulations.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Can I live in my home during the custom kitchen project?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Yes, most of our Capitola custom kitchen clients choose to stay in their homes during the project. We work to minimize disruption by setting up temporary facilities, protecting other areas of your home, and maintaining a clean, organized work environment. We'll discuss your specific needs and preferences during the planning phase.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">What's included in your custom kitchen service?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Our complete custom kitchen service includes design consultation, 3D renderings, permit coordination, custom planning, material selection, professional installation, quality control, and final cleanup. We also provide project management and ongoing support throughout the entire process to ensure your Capitola project exceeds expectations.
            </p>
          </Card>
        </div>
      </ContentSection>
    </ServiceAreaPageLayout>
  )
}