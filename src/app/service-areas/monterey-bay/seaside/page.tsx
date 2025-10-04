import { Metadata } from 'next'
import { ServiceAreaPageLayout } from '@/components/PageLayout'
import { ServiceAreaHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature } from '@/components/ContentSection'
import { generateServiceSchema } from '@/components/StructuredData'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Kitchens Seaside | Kitchen Design & Cabinetry | PineWood Cabinets',
  description: 'Luxury custom kitchens and bespoke cabinetry for Seaside homes. Expert kitchen design and construction serving this vibrant Monterey Bay community with museum-grade craftsmanship.',
  keywords: [
    'custom kitchens seaside',
    'kitchen design seaside',
    'cabinetry seaside',
    'seaside kitchens',
    'monterey bay kitchen design',
    'luxury kitchens seaside',
    'custom cabinetry seaside',
    'kitchen remodeling seaside',
    'bespoke kitchens seaside'
  ],
  openGraph: {
    title: 'Custom Kitchens Seaside | Kitchen Design & Cabinetry | PineWood Cabinets',
    description: 'Luxury custom kitchens and bespoke cabinetry for Seaside homes in Monterey Bay.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchens Seaside",
  "Luxury custom kitchens and bespoke cabinetry for Seaside homes in Monterey Bay",
  "Kitchen Design & Cabinetry",
  ["Seaside, CA", "Monterey Bay, CA", "Monterey, CA"]
)

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Monterey Bay', href: '/service-areas/monterey-bay' },
  { name: 'Seaside', href: '/service-areas/monterey-bay/seaside' }
]

export default function SeasidePage() {
  return (
    <ServiceAreaPageLayout
      location="Seaside"
      service="Kitchen Design & Cabinetry"
      structuredData={{ service: serviceSchema }}
    >
      <Breadcrumbs items={breadcrumbs} />
      
      <ServiceAreaHero
        location="Seaside"
        service="Kitchen Design & Cabinetry"
        description="Serving Seaside's diverse community with luxury custom kitchens and bespoke cabinetry that celebrate the vibrant culture and coastal charm of this dynamic Monterey Bay city."
        imageSrc="service-areas/seaside-kitchen-hero.webp"
        imageAlt="Luxury custom kitchen in Seaside home with vibrant coastal design"
      />

      {/* Seaside Kitchen Services Overview */}
      <ContentSection background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Seaside Kitchen Excellence"
              description="Seaside represents the perfect blend of vibrant community spirit and coastal living. This diverse Monterey Bay city attracts families, professionals, and artists who appreciate both affordability and access to world-class amenities. Our Seaside kitchen clients understand that true luxury lies in creating spaces that reflect their unique lifestyle while maximizing the value and functionality of their homes."
            />
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              From charming mid-century homes to modern developments, Seaside's diverse residential landscape demands custom kitchen solutions that seamlessly blend coastal charm with practical functionality and uncompromising quality. The city's proximity to Monterey's historic downtown and the stunning coastline creates unique opportunities for kitchen designs that celebrate both indoor and outdoor living.
            </p>
            <Grid columns={2} gap="md">
              <Card>
                <h3 className="font-semibold text-charcoal mb-2">Kitchen Projects</h3>
                <p className="text-2xl font-bold text-brass">180+</p>
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
              src="/images/service-areas/seaside-kitchen-overview.webp"
              alt="Luxury custom kitchen in Seaside home with vibrant coastal design"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </ContentSection>

      {/* Kitchen Services */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Kitchen Services for Seaside"
          description="Our comprehensive kitchen design and construction services are tailored to meet the unique needs of Seaside's diverse architectural styles and community values."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchens</h3>
            <p className="text-charcoal/70 mb-4">
              Complete custom kitchen transformation from design to completion, tailored to your Seaside home's unique character and your family's needs.
            </p>
            <Link href="/service-areas/monterey-bay/seaside/custom-kitchen" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Cabinets</h3>
            <p className="text-charcoal/70 mb-4">
              Bespoke cabinetry solutions that combine coastal charm with luxury functionality for your Seaside home.
            </p>
            <Link href="/service-areas/monterey-bay/seaside/kitchen-cabinets" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Design</h3>
            <p className="text-charcoal/70 mb-4">
              Professional kitchen design consultation and planning services for your Seaside home renovation.
            </p>
            <Link href="/service-areas/monterey-bay/seaside/kitchen-design" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Remodel</h3>
            <p className="text-charcoal/70 mb-4">
              Complete kitchen remodeling services that transform your Seaside home while preserving its character.
            </p>
            <Link href="/service-areas/monterey-bay/seaside/kitchen-remodel" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>
        </Grid>
      </ContentSection>

      {/* Seaside Kitchen Process */}
      <ContentSection background="white" padding="xl">
        <SectionHeader
          title="Our Kitchen Design Process"
          description="Our proven kitchen design process ensures your Seaside project exceeds expectations and perfectly reflects your vision while respecting your budget and timeline."
          centered
          className="mb-16"
        />

        <Grid columns={4} gap="lg">
          <Feature
            icon={<span className="text-2xl font-bold text-brass">1</span>}
            title="Initial Consultation"
            description="Comprehensive consultation to understand your vision, needs, and budget for your Seaside kitchen project. We'll assess your space and discuss your lifestyle requirements."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">2</span>}
            title="Design Development"
            description="Creation of detailed design plans and 3D renderings for your Seaside kitchen project, incorporating your preferences and the unique characteristics of your home."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">3</span>}
            title="Construction"
            description="Professional construction and installation of your approved Seaside kitchen design, with minimal disruption to your daily life."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">4</span>}
            title="Final Walkthrough"
            description="Comprehensive final walkthrough and project completion for your Seaside kitchen project, ensuring everything meets our high standards."
          />
        </Grid>
      </ContentSection>

      {/* Seaside Kitchen Philosophy */}
      <ContentSection background="charcoal" padding="xl" className="text-ivory">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Designed for Seaside Living"
              description="Seaside's unique community character and coastal environment creates distinct requirements for kitchen projects. Our approach honors the city's diversity while delivering the functionality and elegance modern residents demand."
              className="text-ivory"
            />
            <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
              From morning coffee with ocean views to evening gatherings that bring the community together, every kitchen decision reflects an understanding of how Seaside residents truly live and enjoy their coastal lifestyle. The city's proximity to Monterey's cultural attractions and the stunning coastline creates unique opportunities for kitchen designs that celebrate both indoor and outdoor living.
            </p>
          </div>
          <div className="space-y-6">
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Community Integration</h3>
              <p className="text-ivory/80">Kitchen designs that celebrate Seaside's diverse community spirit while providing modern functionality and luxury.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Coastal Adaptation</h3>
              <p className="text-ivory/80">Custom solutions that work with Seaside's unique coastal environment and diverse architectural styles.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Value Enhancement</h3>
              <p className="text-ivory/80">Sophisticated materials and finishes that maximize your home's value and appeal to future buyers.</p>
            </Card>
          </div>
        </div>
      </ContentSection>

      {/* Featured Kitchen Projects */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Featured Seaside Kitchen Projects"
          description="Explore our portfolio of kitchen projects throughout Seaside's most diverse neighborhoods, showcasing our ability to work with various architectural styles and budgets."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/seaside-kitchen-1.webp"
              alt="Modern custom kitchen in Seaside home with coastal design elements"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Modern Coastal Design</h3>
              <p className="text-charcoal/70 mb-4">Contemporary kitchen that maximizes natural light and ocean views while maintaining functionality and style.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Modern Design</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Coastal Elements</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/seaside-kitchen-2.webp"
              alt="Traditional kitchen in Seaside home with classic design and warm finishes"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Traditional Warmth</h3>
              <p className="text-charcoal/70 mb-4">Classic kitchen design with warm finishes and traditional details that create a welcoming family space.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Traditional Design</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Family Friendly</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/seaside-kitchen-3.webp"
              alt="Open concept kitchen in Seaside home with island and dining area"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Open Concept Living</h3>
              <p className="text-charcoal/70 mb-4">Spacious open kitchen that flows seamlessly into living and dining areas, perfect for entertaining.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Open Concept</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Entertaining</span>
              </div>
            </div>
          </Card>
        </Grid>
      </ContentSection>

      {/* Seaside Kitchen Materials */}
      <ContentSection background="white" padding="xl">
        <SectionHeader
          title="Premium Materials for Seaside Kitchens"
          description="We use only the finest materials and finishes to ensure your Seaside kitchen stands the test of time while maintaining its beauty and functionality."
          centered
          className="mb-16"
        />

        <Grid columns={2} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Hardwood Cabinetry</h3>
            <p className="text-charcoal/70 mb-4">
              Custom hardwood cabinetry crafted from premium woods including cherry, maple, oak, and walnut. Each piece is hand-finished to perfection and built to last for generations.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Cherry, Maple, Oak, Walnut</li>
              <li>• Hand-finished surfaces</li>
              <li>• Custom hardware options</li>
              <li>• Soft-close mechanisms</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Natural Stone Countertops</h3>
            <p className="text-charcoal/70 mb-4">
              Beautiful natural stone countertops including granite, marble, and quartz that add elegance and durability to your Seaside kitchen.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Granite, Marble, Quartz</li>
              <li>• Custom edge profiles</li>
              <li>• Seamless installation</li>
              <li>• Easy maintenance</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Premium Appliances</h3>
            <p className="text-charcoal/70 mb-4">
              High-end appliances from leading manufacturers that combine performance with style, perfectly integrated into your custom kitchen design.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Wolf, Sub-Zero, Viking</li>
              <li>• Custom panel integration</li>
              <li>• Smart home compatibility</li>
              <li>• Energy efficient options</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Hardware</h3>
            <p className="text-charcoal/70 mb-4">
              Hand-selected hardware and fixtures that add the perfect finishing touches to your Seaside kitchen, from cabinet pulls to faucets and lighting.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Designer cabinet hardware</li>
              <li>• Premium faucets</li>
              <li>• Custom lighting</li>
              <li>• Finishing touches</li>
            </ul>
          </Card>
        </Grid>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection background="ivory" padding="xl" maxWidth="2xl">
        <SectionHeader
          title="Seaside Kitchen FAQ"
          description="Common questions about kitchen services in Seaside"
          centered
          className="mb-16"
        />

        <div className="space-y-8">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">How long does a kitchen project take in Seaside?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              A complete kitchen project in Seaside typically takes 6-12 weeks from start to finish, depending on the scope of work. This includes 2-3 weeks for design and planning, 1-2 weeks for permits and preparation, 4-6 weeks for construction and installation, and 1-2 weeks for finishing and cleanup. We work efficiently to minimize disruption to your daily life while ensuring the highest quality results.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Do I need permits for my Seaside kitchen project?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Most kitchen projects in Seaside require permits, especially if you're making structural changes, moving electrical or plumbing, or making modifications that affect the home's systems. We handle all permit applications and inspections as part of our comprehensive service, ensuring your project meets all local building codes and regulations. This protects your investment and ensures your home remains safe and compliant.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Can I stay in my home during the kitchen project?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Yes, most of our Seaside clients choose to stay in their homes during the project. We work to minimize disruption by setting up temporary facilities, protecting other areas of your home, and maintaining a clean, organized work environment. We'll discuss your specific needs and preferences during the planning phase and can make arrangements to accommodate your lifestyle during construction.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">What's included in your kitchen service?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Our complete kitchen service includes design consultation, 3D renderings, permit coordination, custom planning, material selection, professional installation, quality control, and final cleanup. We also provide project management and ongoing support throughout the entire process, ensuring your Seaside project exceeds expectations and stays on schedule and budget.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle the design process?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Our design process begins with a comprehensive consultation to understand your vision, lifestyle, and budget. We then create detailed 3D renderings so you can see exactly how your new kitchen will look and function. We work closely with you throughout the design phase, making adjustments and refinements until you're completely satisfied with the plan before construction begins.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">What makes your Seaside kitchen projects special?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Our Seaside kitchen projects are special because we understand the unique character of this diverse community. We work with a wide range of architectural styles and budgets, from charming mid-century homes to modern developments. Our attention to detail, commitment to quality, and understanding of coastal living create kitchens that are both beautiful and functional, perfectly suited to the Seaside lifestyle.
            </p>
          </Card>
        </div>
      </ContentSection>
    </ServiceAreaPageLayout>
  )
}
