import { Metadata } from 'next'
import { ServiceAreaPageLayout } from '@/components/PageLayout'
import { ServiceAreaHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature } from '@/components/ContentSection'
import { generateServiceSchema } from '@/components/StructuredData'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Kitchens Pacific Grove | Kitchen Design & Cabinetry | PineWood Cabinets',
  description: 'Luxury custom kitchens and bespoke cabinetry for Pacific Grove homes. Expert kitchen design and construction serving this charming coastal community with museum-grade craftsmanship.',
  keywords: [
    'custom kitchens pacific grove',
    'kitchen design pacific grove',
    'cabinetry pacific grove',
    'pacific grove kitchens',
    'monterey bay kitchen design',
    'luxury kitchens pacific grove',
    'custom cabinetry pacific grove',
    'kitchen remodeling pacific grove',
    'bespoke kitchens pacific grove'
  ],
  openGraph: {
    title: 'Custom Kitchens Pacific Grove | Kitchen Design & Cabinetry | PineWood Cabinets',
    description: 'Luxury custom kitchens and bespoke cabinetry for Pacific Grove homes in Monterey Bay.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchens Pacific Grove",
  "Luxury custom kitchens and bespoke cabinetry for Pacific Grove homes in Monterey Bay",
  "Kitchen Design & Cabinetry",
  ["Pacific Grove, CA", "Monterey Bay, CA", "Monterey, CA"]
)

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Monterey Bay', href: '/service-areas/monterey-bay' },
  { name: 'Pacific Grove', href: '/service-areas/monterey-bay/pacific-grove' }
]

export default function PacificGrovePage() {
  return (
    <ServiceAreaPageLayout
      location="Pacific Grove"
      service="Kitchen Design & Cabinetry"
      structuredData={{ service: serviceSchema }}
    >
      <Breadcrumbs items={breadcrumbs} />
      
      <ServiceAreaHero
        location="Pacific Grove"
        service="Kitchen Design & Cabinetry"
        description="Serving Pacific Grove's charming community with luxury custom kitchens and bespoke cabinetry that celebrate the Victorian heritage, coastal beauty, and peaceful lifestyle of this beloved Monterey Bay city."
        imageSrc="service-areas/pacific-grove-kitchen-hero.webp"
        imageAlt="Luxury custom kitchen in Pacific Grove home with Victorian coastal design"
      />

      {/* Pacific Grove Kitchen Services Overview */}
      <ContentSection background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Pacific Grove Kitchen Excellence"
              description="Pacific Grove represents the perfect blend of Victorian charm and coastal serenity. This beloved Monterey Bay city attracts discerning homeowners who appreciate both the historic character and peaceful lifestyle. Our Pacific Grove kitchen clients understand that true elegance lies in creating spaces that honor the city's Victorian heritage while providing the functionality and comfort that modern living demands."
            />
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              From charming Victorian cottages to modern coastal homes, Pacific Grove's diverse residential landscape demands custom kitchen solutions that seamlessly blend historic charm with contemporary functionality and uncompromising quality. The city's proximity to the ocean, Asilomar State Beach, and the peaceful residential streets creates unique opportunities for kitchen designs that celebrate both indoor and outdoor living while respecting the area's architectural heritage.
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
              src="/images/service-areas/pacific-grove-kitchen-overview.webp"
              alt="Luxury custom kitchen in Pacific Grove home with Victorian coastal design"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </ContentSection>

      {/* Kitchen Services */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Kitchen Services for Pacific Grove"
          description="Our comprehensive kitchen design and construction services are tailored to meet the unique needs of Pacific Grove's diverse architectural styles and Victorian character."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchens</h3>
            <p className="text-charcoal/70 mb-4">
              Complete custom kitchen transformation from design to completion, tailored to your Pacific Grove home's unique character and Victorian charm.
            </p>
            <Link href="/service-areas/monterey-bay/pacific-grove/custom-kitchen" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Cabinets</h3>
            <p className="text-charcoal/70 mb-4">
              Bespoke cabinetry solutions that combine Victorian elegance with luxury functionality for your Pacific Grove home.
            </p>
            <Link href="/service-areas/monterey-bay/pacific-grove/kitchen-cabinets" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Design</h3>
            <p className="text-charcoal/70 mb-4">
              Professional kitchen design consultation and planning services for your Pacific Grove home renovation.
            </p>
            <Link href="/service-areas/monterey-bay/pacific-grove/kitchen-design" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Remodel</h3>
            <p className="text-charcoal/70 mb-4">
              Complete kitchen remodeling services that transform your Pacific Grove home while preserving its Victorian character.
            </p>
            <Link href="/service-areas/monterey-bay/pacific-grove/kitchen-remodel" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>
        </Grid>
      </ContentSection>

      {/* Pacific Grove Kitchen Process */}
      <ContentSection background="white" padding="xl">
        <SectionHeader
          title="Our Kitchen Design Process"
          description="Our proven kitchen design process ensures your Pacific Grove project exceeds expectations and perfectly reflects your vision while respecting the Victorian character of your home."
          centered
          className="mb-16"
        />

        <Grid columns={4} gap="lg">
          <Feature
            icon={<span className="text-2xl font-bold text-brass">1</span>}
            title="Victorian Consultation"
            description="Comprehensive consultation to understand your vision, needs, and budget for your Pacific Grove kitchen project, with special attention to Victorian preservation requirements."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">2</span>}
            title="Design Development"
            description="Creation of detailed design plans and 3D renderings for your Pacific Grove kitchen project, incorporating your preferences while respecting the home's Victorian character."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">3</span>}
            title="Construction"
            description="Professional construction and installation of your approved Pacific Grove kitchen design, with careful attention to Victorian preservation and quality craftsmanship."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">4</span>}
            title="Final Walkthrough"
            description="Comprehensive final walkthrough and project completion for your Pacific Grove kitchen project, ensuring everything meets our high standards and Victorian requirements."
          />
        </Grid>
      </ContentSection>

      {/* Pacific Grove Kitchen Philosophy */}
      <ContentSection background="charcoal" padding="xl" className="text-ivory">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Designed for Pacific Grove Living"
              description="Pacific Grove's unique Victorian character and coastal environment creates distinct requirements for kitchen projects. Our approach honors the city's charming heritage while delivering the functionality and elegance modern residents demand."
              className="text-ivory"
            />
            <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
              From morning coffee overlooking the ocean to evening gatherings that celebrate the community's peaceful spirit, every kitchen decision reflects an understanding of how Pacific Grove residents truly live and enjoy their Victorian coastal lifestyle. The city's proximity to Asilomar State Beach, the ocean, and the peaceful residential streets creates unique opportunities for kitchen designs that celebrate both indoor and outdoor living while respecting the area's architectural heritage.
            </p>
          </div>
          <div className="space-y-6">
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Victorian Preservation</h3>
              <p className="text-ivory/80">Kitchen designs that celebrate Pacific Grove's Victorian heritage while providing modern functionality and luxury, respecting historic character.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Coastal Serenity</h3>
              <p className="text-ivory/80">Custom solutions that work with Pacific Grove's unique coastal environment and peaceful residential character.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Charming Elegance</h3>
              <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste and Victorian charm of Pacific Grove residents.</p>
            </Card>
          </div>
        </div>
      </ContentSection>

      {/* Featured Kitchen Projects */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Featured Pacific Grove Kitchen Projects"
          description="Explore our portfolio of kitchen projects throughout Pacific Grove's most charming neighborhoods, showcasing our ability to work with various architectural styles while preserving Victorian character."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/pacific-grove-kitchen-1.webp"
              alt="Victorian custom kitchen in Pacific Grove home with traditional design"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Victorian Elegance</h3>
              <p className="text-charcoal/70 mb-4">Traditional kitchen in Victorian home that preserves the original character while adding modern functionality and luxury.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Victorian Style</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Historic Preservation</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/pacific-grove-kitchen-2.webp"
              alt="Coastal kitchen in Pacific Grove home with ocean views and Victorian elements"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Coastal Victorian</h3>
              <p className="text-charcoal/70 mb-4">Kitchen design that celebrates Pacific Grove's coastal charm with ocean views and Victorian design elements.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Coastal Charm</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Ocean Views</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/pacific-grove-kitchen-3.webp"
              alt="Modern kitchen in Pacific Grove home with Victorian elements and contemporary design"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Modern Victorian</h3>
              <p className="text-charcoal/70 mb-4">Contemporary kitchen that seamlessly blends modern functionality with Victorian architectural elements and coastal charm.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Modern Victorian</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Coastal Charm</span>
              </div>
            </div>
          </Card>
        </Grid>
      </ContentSection>

      {/* Pacific Grove Kitchen Materials */}
      <ContentSection background="white" padding="xl">
        <SectionHeader
          title="Premium Materials for Pacific Grove Kitchens"
          description="We use only the finest materials and finishes to ensure your Pacific Grove kitchen stands the test of time while maintaining its beauty and functionality in the Victorian coastal environment."
          centered
          className="mb-16"
        />

        <Grid columns={2} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Victorian Hardwood Cabinetry</h3>
            <p className="text-charcoal/70 mb-4">
              Custom hardwood cabinetry crafted from premium woods that complement Pacific Grove's Victorian character. Each piece is hand-finished to perfection and built to last for generations while respecting the home's architectural heritage.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Cherry, Maple, Oak, Walnut with Victorian finishes</li>
              <li>• Hand-finished surfaces with traditional techniques</li>
              <li>• Custom hardware options</li>
              <li>• Soft-close mechanisms</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Natural Stone Countertops</h3>
            <p className="text-charcoal/70 mb-4">
              Beautiful natural stone countertops including granite, marble, and quartz that add elegance and durability to your Pacific Grove kitchen while complementing the Victorian character.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Granite, Marble, Quartz with Victorian appeal</li>
              <li>• Custom edge profiles</li>
              <li>• Seamless installation</li>
              <li>• Easy maintenance for Victorian homes</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Premium Appliances</h3>
            <p className="text-charcoal/70 mb-4">
              High-end appliances from leading manufacturers that combine performance with style, perfectly integrated into your custom kitchen design while respecting the Victorian character of your Pacific Grove home.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Wolf, Sub-Zero, Viking with Victorian integration</li>
              <li>• Custom panel integration</li>
              <li>• Smart home compatibility</li>
              <li>• Energy efficient options</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Hardware</h3>
            <p className="text-charcoal/70 mb-4">
              Hand-selected hardware and fixtures that add the perfect finishing touches to your Pacific Grove kitchen, from cabinet pulls to faucets and lighting, all designed to complement the Victorian coastal aesthetic.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Designer cabinet hardware with Victorian appeal</li>
              <li>• Premium faucets with coastal inspiration</li>
              <li>• Custom lighting that celebrates Victorian character</li>
              <li>• Finishing touches that reflect coastal heritage</li>
            </ul>
          </Card>
        </Grid>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection background="ivory" padding="xl" maxWidth="2xl">
        <SectionHeader
          title="Pacific Grove Kitchen FAQ"
          description="Common questions about kitchen services in Pacific Grove"
          centered
          className="mb-16"
        />

        <div className="space-y-8">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">How long does a kitchen project take in Pacific Grove?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              A complete kitchen project in Pacific Grove typically takes 6-12 weeks from start to finish, depending on the scope of work and any Victorian preservation requirements. This includes 2-3 weeks for design and planning, 1-2 weeks for permits and preparation, 4-6 weeks for construction and installation, and 1-2 weeks for finishing and cleanup. We work efficiently to minimize disruption to your peaceful lifestyle while ensuring the highest quality results and Victorian compliance.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Do I need permits for my Pacific Grove kitchen project?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Most kitchen projects in Pacific Grove require permits, especially if you're making structural changes, moving electrical or plumbing, or making modifications that affect the home's systems. We handle all permit applications and inspections as part of our comprehensive service, ensuring your project meets all local building codes and regulations. This is particularly important in Pacific Grove due to the Victorian character of many homes and the coastal environment.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle Victorian preservation in Pacific Grove?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              We take special care to respect the Victorian character of Pacific Grove homes while modernizing functionality. This includes working with historic preservation guidelines, selecting materials that complement the home's architectural style, and preserving original features whenever possible. We're experienced in working with various Victorian styles and can help you create a kitchen that honors the past while meeting modern needs.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Can you work with my home's Victorian character?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Absolutely! We love working with Pacific Grove's Victorian homes and are experienced in preserving their character while modernizing functionality. Whether you have a Victorian cottage, Queen Anne, or any other Victorian style, we work closely with you to create a kitchen that respects the home's heritage while providing the modern amenities you need. We can help you navigate any historic preservation requirements and ensure your project enhances rather than detracts from the home's Victorian value.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">What makes your Pacific Grove kitchen projects special?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Our Pacific Grove kitchen projects are special because we understand the unique character of this charming Victorian community. We work with a wide range of architectural styles, from Victorian cottages to modern coastal homes, and we're experienced in incorporating Victorian elements and coastal charm into our designs. Our attention to detail, commitment to quality, and understanding of Victorian preservation create kitchens that are both beautiful and functional, perfectly suited to the Pacific Grove lifestyle.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Do you offer eco-friendly options for Pacific Grove kitchens?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Yes, we offer a wide range of eco-friendly options that are perfect for Pacific Grove's environmentally conscious community. This includes sustainable materials, energy-efficient appliances, low-VOC finishes, and water-saving fixtures. We can help you create a kitchen that not only looks beautiful but also aligns with your environmental values and contributes to a more sustainable future, all while respecting the Victorian character of your home.
            </p>
          </Card>
        </div>
      </ContentSection>
    </ServiceAreaPageLayout>
  )
}
