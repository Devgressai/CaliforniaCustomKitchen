import { Metadata } from 'next'
import { ServiceAreaPageLayout } from '@/components/PageLayout'
import { ServiceAreaHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature } from '@/components/ContentSection'
import { generateServiceSchema } from '@/components/StructuredData'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Kitchens Monterey | Kitchen Design & Cabinetry | PineWood Cabinets',
  description: 'Luxury custom kitchens and bespoke cabinetry for Monterey homes. Expert kitchen design and construction serving this historic coastal community with museum-grade craftsmanship.',
  keywords: [
    'custom kitchens monterey',
    'kitchen design monterey',
    'cabinetry monterey',
    'monterey kitchens',
    'monterey bay kitchen design',
    'luxury kitchens monterey',
    'custom cabinetry monterey',
    'kitchen remodeling monterey',
    'bespoke kitchens monterey'
  ],
  openGraph: {
    title: 'Custom Kitchens Monterey | Kitchen Design & Cabinetry | PineWood Cabinets',
    description: 'Luxury custom kitchens and bespoke cabinetry for Monterey homes in Monterey Bay.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchens Monterey",
  "Luxury custom kitchens and bespoke cabinetry for Monterey homes in Monterey Bay",
  "Kitchen Design & Cabinetry",
  ["Monterey, CA", "Monterey Bay, CA", "Pacific Grove, CA"]
)

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Monterey Bay', href: '/service-areas/monterey-bay' },
  { name: 'Monterey', href: '/service-areas/monterey-bay/monterey' }
]

export default function MontereyPage() {
  return (
    <ServiceAreaPageLayout
      location="Monterey"
      service="Kitchen Design & Cabinetry"
      structuredData={{ service: serviceSchema }}
    >
      <Breadcrumbs items={breadcrumbs} />
      
      <ServiceAreaHero
        location="Monterey"
        service="Kitchen Design & Cabinetry"
        description="Serving Monterey's historic community with luxury custom kitchens and bespoke cabinetry that celebrate the rich heritage, coastal beauty, and sophisticated lifestyle of this iconic Monterey Bay city."
        imageSrc="service-areas/monterey-kitchen-hero.webp"
        imageAlt="Luxury custom kitchen in Monterey home with historic coastal design"
      />

      {/* Monterey Kitchen Services Overview */}
      <ContentSection background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Monterey Kitchen Excellence"
              description="Monterey represents the perfect blend of historic charm and coastal sophistication. This iconic Monterey Bay city attracts discerning homeowners who appreciate both the rich heritage and modern luxury amenities. Our Monterey kitchen clients understand that true elegance lies in creating spaces that honor the city's historic character while providing the functionality and comfort that modern living demands."
            />
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              From historic adobe homes to modern waterfront properties, Monterey's diverse residential landscape demands custom kitchen solutions that seamlessly blend historic charm with contemporary functionality and uncompromising quality. The city's proximity to Cannery Row, Fisherman's Wharf, and the stunning coastline creates unique opportunities for kitchen designs that celebrate both indoor and outdoor living while respecting the area's architectural heritage.
            </p>
            <Grid columns={2} gap="md">
              <Card>
                <h3 className="font-semibold text-charcoal mb-2">Kitchen Projects</h3>
                <p className="text-2xl font-bold text-brass">250+</p>
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
              src="/images/service-areas/monterey-kitchen-overview.webp"
              alt="Luxury custom kitchen in Monterey home with historic coastal design"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </ContentSection>

      {/* Kitchen Services */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Kitchen Services for Monterey"
          description="Our comprehensive kitchen design and construction services are tailored to meet the unique needs of Monterey's diverse architectural styles and historic character."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchens</h3>
            <p className="text-charcoal/70 mb-4">
              Complete custom kitchen transformation from design to completion, tailored to your Monterey home's unique character and historic charm.
            </p>
            <Link href="/service-areas/monterey-bay/monterey/custom-kitchen" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Cabinets</h3>
            <p className="text-charcoal/70 mb-4">
              Bespoke cabinetry solutions that combine historic charm with luxury functionality for your Monterey home.
            </p>
            <Link href="/service-areas/monterey-bay/monterey/kitchen-cabinets" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Design</h3>
            <p className="text-charcoal/70 mb-4">
              Professional kitchen design consultation and planning services for your Monterey home renovation.
            </p>
            <Link href="/service-areas/monterey-bay/monterey/kitchen-design" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Remodel</h3>
            <p className="text-charcoal/70 mb-4">
              Complete kitchen remodeling services that transform your Monterey home while preserving its historic character.
            </p>
            <Link href="/service-areas/monterey-bay/monterey/kitchen-remodel" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>
        </Grid>
      </ContentSection>

      {/* Monterey Kitchen Process */}
      <ContentSection background="white" padding="xl">
        <SectionHeader
          title="Our Kitchen Design Process"
          description="Our proven kitchen design process ensures your Monterey project exceeds expectations and perfectly reflects your vision while respecting the historic character of your home."
          centered
          className="mb-16"
        />

        <Grid columns={4} gap="lg">
          <Feature
            icon={<span className="text-2xl font-bold text-brass">1</span>}
            title="Historic Consultation"
            description="Comprehensive consultation to understand your vision, needs, and budget for your Monterey kitchen project, with special attention to historic preservation requirements."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">2</span>}
            title="Design Development"
            description="Creation of detailed design plans and 3D renderings for your Monterey kitchen project, incorporating your preferences while respecting the home's historic character."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">3</span>}
            title="Construction"
            description="Professional construction and installation of your approved Monterey kitchen design, with careful attention to historic preservation and quality craftsmanship."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">4</span>}
            title="Final Walkthrough"
            description="Comprehensive final walkthrough and project completion for your Monterey kitchen project, ensuring everything meets our high standards and historic requirements."
          />
        </Grid>
      </ContentSection>

      {/* Monterey Kitchen Philosophy */}
      <ContentSection background="charcoal" padding="xl" className="text-ivory">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Designed for Monterey Living"
              description="Monterey's unique historic character and coastal environment creates distinct requirements for kitchen projects. Our approach honors the city's rich heritage while delivering the functionality and elegance modern residents demand."
              className="text-ivory"
            />
            <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
              From morning coffee overlooking the bay to evening entertaining that celebrates the city's maritime heritage, every kitchen decision reflects an understanding of how Monterey residents truly live and enjoy their historic coastal lifestyle. The city's proximity to Cannery Row, Fisherman's Wharf, and the stunning coastline creates unique opportunities for kitchen designs that celebrate both indoor and outdoor living while respecting the area's architectural heritage.
            </p>
          </div>
          <div className="space-y-6">
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Historic Preservation</h3>
              <p className="text-ivory/80">Kitchen designs that celebrate Monterey's rich heritage while providing modern functionality and luxury, respecting historic character.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Coastal Adaptation</h3>
              <p className="text-ivory/80">Custom solutions that work with Monterey's unique coastal environment and diverse architectural styles, from adobe to modern.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Maritime Heritage</h3>
              <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste and maritime heritage of Monterey residents.</p>
            </Card>
          </div>
        </div>
      </ContentSection>

      {/* Featured Kitchen Projects */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Featured Monterey Kitchen Projects"
          description="Explore our portfolio of kitchen projects throughout Monterey's most historic neighborhoods, showcasing our ability to work with various architectural styles while preserving historic character."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/monterey-kitchen-1.webp"
              alt="Historic custom kitchen in Monterey adobe home with traditional design"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Historic Adobe Design</h3>
              <p className="text-charcoal/70 mb-4">Traditional kitchen in historic adobe home that preserves the original character while adding modern functionality and luxury.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Historic Preservation</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Adobe Style</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/monterey-kitchen-2.webp"
              alt="Coastal kitchen in Monterey home with ocean views and maritime design"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Coastal Maritime</h3>
              <p className="text-charcoal/70 mb-4">Kitchen design that celebrates Monterey's maritime heritage with ocean views and nautical design elements.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Maritime Heritage</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Ocean Views</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/monterey-kitchen-3.webp"
              alt="Modern kitchen in Monterey home with historic elements and contemporary design"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Modern Historic</h3>
              <p className="text-charcoal/70 mb-4">Contemporary kitchen that seamlessly blends modern functionality with historic architectural elements and coastal charm.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Modern Historic</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Coastal Charm</span>
              </div>
            </div>
          </Card>
        </Grid>
      </ContentSection>

      {/* Monterey Kitchen Materials */}
      <ContentSection background="white" padding="xl">
        <SectionHeader
          title="Premium Materials for Monterey Kitchens"
          description="We use only the finest materials and finishes to ensure your Monterey kitchen stands the test of time while maintaining its beauty and functionality in the historic coastal environment."
          centered
          className="mb-16"
        />

        <Grid columns={2} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Historic Hardwood Cabinetry</h3>
            <p className="text-charcoal/70 mb-4">
              Custom hardwood cabinetry crafted from premium woods that complement Monterey's historic character. Each piece is hand-finished to perfection and built to last for generations while respecting the home's architectural heritage.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Cherry, Maple, Oak, Walnut with historic finishes</li>
              <li>• Hand-finished surfaces with traditional techniques</li>
              <li>• Custom hardware options</li>
              <li>• Soft-close mechanisms</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Natural Stone Countertops</h3>
            <p className="text-charcoal/70 mb-4">
              Beautiful natural stone countertops including granite, marble, and quartz that add elegance and durability to your Monterey kitchen while complementing the historic character.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Granite, Marble, Quartz with historic appeal</li>
              <li>• Custom edge profiles</li>
              <li>• Seamless installation</li>
              <li>• Easy maintenance for historic homes</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Premium Appliances</h3>
            <p className="text-charcoal/70 mb-4">
              High-end appliances from leading manufacturers that combine performance with style, perfectly integrated into your custom kitchen design while respecting the historic character of your Monterey home.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Wolf, Sub-Zero, Viking with historic integration</li>
              <li>• Custom panel integration</li>
              <li>• Smart home compatibility</li>
              <li>• Energy efficient options</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Hardware</h3>
            <p className="text-charcoal/70 mb-4">
              Hand-selected hardware and fixtures that add the perfect finishing touches to your Monterey kitchen, from cabinet pulls to faucets and lighting, all designed to complement the historic coastal aesthetic.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Designer cabinet hardware with historic appeal</li>
              <li>• Premium faucets with maritime inspiration</li>
              <li>• Custom lighting that celebrates historic character</li>
              <li>• Finishing touches that reflect coastal heritage</li>
            </ul>
          </Card>
        </Grid>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection background="ivory" padding="xl" maxWidth="2xl">
        <SectionHeader
          title="Monterey Kitchen FAQ"
          description="Common questions about kitchen services in Monterey"
          centered
          className="mb-16"
        />

        <div className="space-y-8">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">How long does a kitchen project take in Monterey?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              A complete kitchen project in Monterey typically takes 6-12 weeks from start to finish, depending on the scope of work and any historic preservation requirements. This includes 2-3 weeks for design and planning, 1-2 weeks for permits and preparation, 4-6 weeks for construction and installation, and 1-2 weeks for finishing and cleanup. We work efficiently to minimize disruption to your daily life while ensuring the highest quality results and historic compliance.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Do I need permits for my Monterey kitchen project?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Most kitchen projects in Monterey require permits, especially if you're making structural changes, moving electrical or plumbing, or making modifications that affect the home's systems. We handle all permit applications and inspections as part of our comprehensive service, ensuring your project meets all local building codes and regulations. This is particularly important in Monterey due to the historic character of many homes and the coastal environment.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle historic preservation in Monterey?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              We take special care to respect the historic character of Monterey homes while modernizing functionality. This includes working with historic preservation guidelines, selecting materials that complement the home's architectural style, and preserving original features whenever possible. We're experienced in working with various historic styles, from adobe to Victorian, and can help you create a kitchen that honors the past while meeting modern needs.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Can you work with my home's historic character?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Absolutely! We love working with Monterey's historic homes and are experienced in preserving their character while modernizing functionality. Whether you have an adobe home, Victorian, or any other historic style, we work closely with you to create a kitchen that respects the home's heritage while providing the modern amenities you need. We can help you navigate any historic preservation requirements and ensure your project enhances rather than detracts from the home's historic value.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">What makes your Monterey kitchen projects special?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Our Monterey kitchen projects are special because we understand the unique character of this historic coastal community. We work with a wide range of architectural styles, from historic adobe homes to modern waterfront properties, and we're experienced in incorporating historic elements and coastal charm into our designs. Our attention to detail, commitment to quality, and understanding of historic preservation create kitchens that are both beautiful and functional, perfectly suited to the Monterey lifestyle.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Do you offer eco-friendly options for Monterey kitchens?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Yes, we offer a wide range of eco-friendly options that are perfect for Monterey's environmentally conscious community. This includes sustainable materials, energy-efficient appliances, low-VOC finishes, and water-saving fixtures. We can help you create a kitchen that not only looks beautiful but also aligns with your environmental values and contributes to a more sustainable future, all while respecting the historic character of your home.
            </p>
          </Card>
        </div>
      </ContentSection>
    </ServiceAreaPageLayout>
  )
}
