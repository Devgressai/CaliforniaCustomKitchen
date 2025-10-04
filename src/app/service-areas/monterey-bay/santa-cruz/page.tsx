import { Metadata } from 'next'
import { ServiceAreaPageLayout } from '@/components/PageLayout'
import { ServiceAreaHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature } from '@/components/ContentSection'
import { generateServiceSchema } from '@/components/StructuredData'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Kitchens Santa Cruz | Kitchen Design & Cabinetry | PineWood Cabinets',
  description: 'Luxury custom kitchens and bespoke cabinetry for Santa Cruz homes. Expert kitchen design and construction serving this vibrant coastal community with museum-grade craftsmanship.',
  keywords: [
    'custom kitchens santa cruz',
    'kitchen design santa cruz',
    'cabinetry santa cruz',
    'santa cruz kitchens',
    'monterey bay kitchen design',
    'luxury kitchens santa cruz',
    'custom cabinetry santa cruz',
    'kitchen remodeling santa cruz',
    'bespoke kitchens santa cruz'
  ],
  openGraph: {
    title: 'Custom Kitchens Santa Cruz | Kitchen Design & Cabinetry | PineWood Cabinets',
    description: 'Luxury custom kitchens and bespoke cabinetry for Santa Cruz homes in Monterey Bay.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchens Santa Cruz",
  "Luxury custom kitchens and bespoke cabinetry for Santa Cruz homes in Monterey Bay",
  "Kitchen Design & Cabinetry",
  ["Santa Cruz, CA", "Monterey Bay, CA", "Capitola, CA"]
)

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Monterey Bay', href: '/service-areas/monterey-bay' },
  { name: 'Santa Cruz', href: '/service-areas/monterey-bay/santa-cruz' }
]

export default function SantaCruzPage() {
  return (
    <ServiceAreaPageLayout
      location="Santa Cruz"
      service="Kitchen Design & Cabinetry"
      structuredData={{ service: serviceSchema }}
    >
      <Breadcrumbs items={breadcrumbs} />
      
      <ServiceAreaHero
        location="Santa Cruz"
        service="Kitchen Design & Cabinetry"
        description="Serving Santa Cruz's vibrant community with luxury custom kitchens and bespoke cabinetry that celebrate the surf culture, artistic spirit, and coastal beauty of this iconic Monterey Bay city."
        imageSrc="service-areas/santa-cruz-kitchen-hero.webp"
        imageAlt="Luxury custom kitchen in Santa Cruz home with surf culture design elements"
      />

      {/* Santa Cruz Kitchen Services Overview */}
      <ContentSection background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Santa Cruz Kitchen Excellence"
              description="Santa Cruz represents the perfect fusion of surf culture, artistic creativity, and coastal living. This vibrant Monterey Bay city attracts surfers, artists, families, and professionals who appreciate both the laid-back lifestyle and access to world-class amenities. Our Santa Cruz kitchen clients understand that true luxury lies in creating spaces that reflect their unique personality while maximizing the natural beauty and energy of this special place."
            />
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              From historic Victorian homes to modern beach houses, Santa Cruz's diverse residential landscape demands custom kitchen solutions that seamlessly blend surf culture with sophisticated functionality and uncompromising quality. The city's proximity to the beach, redwood forests, and vibrant downtown creates unique opportunities for kitchen designs that celebrate both indoor and outdoor living while embracing the community's creative spirit.
            </p>
            <Grid columns={2} gap="md">
              <Card>
                <h3 className="font-semibold text-charcoal mb-2">Kitchen Projects</h3>
                <p className="text-2xl font-bold text-brass">220+</p>
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
              src="/images/service-areas/santa-cruz-kitchen-overview.webp"
              alt="Luxury custom kitchen in Santa Cruz home with surf culture design elements"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </ContentSection>

      {/* Kitchen Services */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Kitchen Services for Santa Cruz"
          description="Our comprehensive kitchen design and construction services are tailored to meet the unique needs of Santa Cruz's diverse architectural styles and creative community."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchens</h3>
            <p className="text-charcoal/70 mb-4">
              Complete custom kitchen transformation from design to completion, tailored to your Santa Cruz home's unique character and your creative lifestyle.
            </p>
            <Link href="/service-areas/monterey-bay/santa-cruz/custom-kitchen" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Cabinets</h3>
            <p className="text-charcoal/70 mb-4">
              Bespoke cabinetry solutions that combine artistic creativity with luxury functionality for your Santa Cruz home.
            </p>
            <Link href="/service-areas/monterey-bay/santa-cruz/kitchen-cabinets" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Design</h3>
            <p className="text-charcoal/70 mb-4">
              Professional kitchen design consultation and planning services for your Santa Cruz home renovation.
            </p>
            <Link href="/service-areas/monterey-bay/santa-cruz/kitchen-design" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Remodel</h3>
            <p className="text-charcoal/70 mb-4">
              Complete kitchen remodeling services that transform your Santa Cruz home while preserving its creative character.
            </p>
            <Link href="/service-areas/monterey-bay/santa-cruz/kitchen-remodel" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>
        </Grid>
      </ContentSection>

      {/* Santa Cruz Kitchen Process */}
      <ContentSection background="white" padding="xl">
        <SectionHeader
          title="Our Kitchen Design Process"
          description="Our proven kitchen design process ensures your Santa Cruz project exceeds expectations and perfectly reflects your creative vision while respecting your budget and timeline."
          centered
          className="mb-16"
        />

        <Grid columns={4} gap="lg">
          <Feature
            icon={<span className="text-2xl font-bold text-brass">1</span>}
            title="Creative Consultation"
            description="Comprehensive consultation to understand your creative vision, lifestyle needs, and budget for your Santa Cruz kitchen project. We'll explore your artistic preferences and functional requirements."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">2</span>}
            title="Design Development"
            description="Creation of detailed design plans and 3D renderings for your Santa Cruz kitchen project, incorporating your creative vision and the unique characteristics of your home."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">3</span>}
            title="Construction"
            description="Professional construction and installation of your approved Santa Cruz kitchen design, with minimal disruption to your creative lifestyle."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">4</span>}
            title="Final Walkthrough"
            description="Comprehensive final walkthrough and project completion for your Santa Cruz kitchen project, ensuring everything meets our high standards and your creative vision."
          />
        </Grid>
      </ContentSection>

      {/* Santa Cruz Kitchen Philosophy */}
      <ContentSection background="charcoal" padding="xl" className="text-ivory">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Designed for Santa Cruz Living"
              description="Santa Cruz's unique surf culture and creative community creates distinct requirements for kitchen projects. Our approach honors the city's artistic spirit while delivering the functionality and elegance modern residents demand."
              className="text-ivory"
            />
            <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
              From morning coffee with ocean views to evening gatherings that celebrate the community's creative energy, every kitchen decision reflects an understanding of how Santa Cruz residents truly live and enjoy their coastal lifestyle. The city's proximity to the beach, redwood forests, and vibrant downtown creates unique opportunities for kitchen designs that celebrate both indoor and outdoor living while embracing the community's artistic spirit.
            </p>
          </div>
          <div className="space-y-6">
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Creative Integration</h3>
              <p className="text-ivory/80">Kitchen designs that celebrate Santa Cruz's artistic spirit and surf culture while providing modern functionality and luxury.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Coastal Adaptation</h3>
              <p className="text-ivory/80">Custom solutions that work with Santa Cruz's unique coastal environment and diverse architectural styles.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Community Spirit</h3>
              <p className="text-ivory/80">Sophisticated materials and finishes that reflect the creative taste and community values of Santa Cruz residents.</p>
            </Card>
          </div>
        </div>
      </ContentSection>

      {/* Featured Kitchen Projects */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Featured Santa Cruz Kitchen Projects"
          description="Explore our portfolio of kitchen projects throughout Santa Cruz's most creative neighborhoods, showcasing our ability to work with various architectural styles and artistic visions."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/santa-cruz-kitchen-1.webp"
              alt="Modern custom kitchen in Santa Cruz home with surf culture design elements"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Surf Culture Design</h3>
              <p className="text-charcoal/70 mb-4">Contemporary kitchen that celebrates Santa Cruz's surf culture with ocean-inspired design elements and natural materials.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Surf Culture</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Ocean Inspired</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/santa-cruz-kitchen-2.webp"
              alt="Artistic kitchen in Santa Cruz home with creative design and unique finishes"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Artistic Expression</h3>
              <p className="text-charcoal/70 mb-4">Creative kitchen design with unique artistic elements and custom finishes that reflect the homeowner's creative personality.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Artistic Design</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Custom Finishes</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/santa-cruz-kitchen-3.webp"
              alt="Open concept kitchen in Santa Cruz home with beach house design"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Beach House Living</h3>
              <p className="text-charcoal/70 mb-4">Spacious open kitchen that flows seamlessly into living areas, perfect for entertaining and beach house living.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Beach House</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Open Concept</span>
              </div>
            </div>
          </Card>
        </Grid>
      </ContentSection>

      {/* Santa Cruz Kitchen Materials */}
      <ContentSection background="white" padding="xl">
        <SectionHeader
          title="Premium Materials for Santa Cruz Kitchens"
          description="We use only the finest materials and finishes to ensure your Santa Cruz kitchen stands the test of time while maintaining its beauty and functionality in the coastal environment."
          centered
          className="mb-16"
        />

        <Grid columns={2} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Coastal Hardwood Cabinetry</h3>
            <p className="text-charcoal/70 mb-4">
              Custom hardwood cabinetry crafted from premium woods that are specifically chosen for their durability in coastal environments. Each piece is hand-finished to perfection and built to withstand the unique challenges of Santa Cruz living.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Teak, Ipe, Mahogany for coastal durability</li>
              <li>• Hand-finished surfaces with marine-grade protection</li>
              <li>• Custom hardware options</li>
              <li>• Soft-close mechanisms</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Natural Stone Countertops</h3>
            <p className="text-charcoal/70 mb-4">
              Beautiful natural stone countertops including granite, marble, and quartz that add elegance and durability to your Santa Cruz kitchen while being resistant to coastal humidity.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Granite, Marble, Quartz with coastal protection</li>
              <li>• Custom edge profiles</li>
              <li>• Seamless installation</li>
              <li>• Easy maintenance for coastal living</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Premium Appliances</h3>
            <p className="text-charcoal/70 mb-4">
              High-end appliances from leading manufacturers that combine performance with style, perfectly integrated into your custom kitchen design and built to handle the coastal environment.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Wolf, Sub-Zero, Viking with coastal protection</li>
              <li>• Custom panel integration</li>
              <li>• Smart home compatibility</li>
              <li>• Energy efficient options</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Hardware</h3>
            <p className="text-charcoal/70 mb-4">
              Hand-selected hardware and fixtures that add the perfect finishing touches to your Santa Cruz kitchen, from cabinet pulls to faucets and lighting, all designed to complement the coastal aesthetic.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Designer cabinet hardware with coastal finishes</li>
              <li>• Premium faucets with ocean-inspired design</li>
              <li>• Custom lighting that celebrates natural light</li>
              <li>• Finishing touches that reflect surf culture</li>
            </ul>
          </Card>
        </Grid>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection background="ivory" padding="xl" maxWidth="2xl">
        <SectionHeader
          title="Santa Cruz Kitchen FAQ"
          description="Common questions about kitchen services in Santa Cruz"
          centered
          className="mb-16"
        />

        <div className="space-y-8">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">How long does a kitchen project take in Santa Cruz?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              A complete kitchen project in Santa Cruz typically takes 6-12 weeks from start to finish, depending on the scope of work and any unique coastal considerations. This includes 2-3 weeks for design and planning, 1-2 weeks for permits and preparation, 4-6 weeks for construction and installation, and 1-2 weeks for finishing and cleanup. We work efficiently to minimize disruption to your creative lifestyle while ensuring the highest quality results.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Do I need permits for my Santa Cruz kitchen project?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Most kitchen projects in Santa Cruz require permits, especially if you're making structural changes, moving electrical or plumbing, or making modifications that affect the home's systems. We handle all permit applications and inspections as part of our comprehensive service, ensuring your project meets all local building codes and regulations. This is particularly important in Santa Cruz due to the coastal environment and seismic considerations.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle the coastal environment in Santa Cruz?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              We take special care to select materials and finishes that are specifically suited for Santa Cruz's coastal environment. This includes using marine-grade hardware, selecting woods that resist humidity, and choosing finishes that can withstand the salt air. We also consider the unique architectural styles of Santa Cruz homes and work to preserve their character while modernizing functionality.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Can you work with my creative vision for the kitchen?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Absolutely! We love working with Santa Cruz's creative community and are experienced in bringing unique artistic visions to life. Whether you want to incorporate surf culture elements, artistic finishes, or unconventional layouts, we work closely with you to create a kitchen that reflects your personality and creative spirit while maintaining functionality and quality.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">What makes your Santa Cruz kitchen projects special?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Our Santa Cruz kitchen projects are special because we understand the unique character of this creative coastal community. We work with a wide range of architectural styles, from historic Victorians to modern beach houses, and we're experienced in incorporating artistic elements and surf culture into our designs. Our attention to detail, commitment to quality, and understanding of coastal living create kitchens that are both beautiful and functional, perfectly suited to the Santa Cruz lifestyle.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Do you offer eco-friendly options for Santa Cruz kitchens?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Yes, we offer a wide range of eco-friendly options that are perfect for Santa Cruz's environmentally conscious community. This includes sustainable materials, energy-efficient appliances, low-VOC finishes, and water-saving fixtures. We can help you create a kitchen that not only looks beautiful but also aligns with your environmental values and contributes to a more sustainable future.
            </p>
          </Card>
        </div>
      </ContentSection>
    </ServiceAreaPageLayout>
  )
}
