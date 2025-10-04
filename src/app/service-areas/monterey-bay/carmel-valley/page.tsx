import { Metadata } from 'next'
import { ServiceAreaPageLayout } from '@/components/PageLayout'
import { ServiceAreaHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature } from '@/components/ContentSection'
import { generateServiceSchema } from '@/components/StructuredData'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Kitchens Carmel Valley | Kitchen Design & Cabinetry | PineWood Cabinets',
  description: 'Luxury custom kitchens and bespoke cabinetry for Carmel Valley homes. Expert kitchen design and construction serving this prestigious wine country community with museum-grade craftsmanship.',
  keywords: [
    'custom kitchens carmel valley',
    'kitchen design carmel valley',
    'cabinetry carmel valley',
    'carmel valley kitchens',
    'monterey bay kitchen design',
    'luxury kitchens carmel valley',
    'custom cabinetry carmel valley',
    'kitchen remodeling carmel valley',
    'bespoke kitchens carmel valley',
    'wine country kitchens carmel valley'
  ],
  openGraph: {
    title: 'Custom Kitchens Carmel Valley | Kitchen Design & Cabinetry | PineWood Cabinets',
    description: 'Luxury custom kitchens and bespoke cabinetry for Carmel Valley homes in Monterey Bay wine country.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchens Carmel Valley",
  "Luxury custom kitchens and bespoke cabinetry for Carmel Valley homes in Monterey Bay wine country",
  "Kitchen Design & Cabinetry",
  ["Carmel Valley, CA", "Monterey Bay, CA", "Carmel, CA"]
)

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Monterey Bay', href: '/service-areas/monterey-bay' },
  { name: 'Carmel Valley', href: '/service-areas/monterey-bay/carmel-valley' }
]

export default function CarmelValleyPage() {
  return (
    <ServiceAreaPageLayout
      location="Carmel Valley"
      service="Kitchen Design & Cabinetry"
      structuredData={{ service: serviceSchema }}
    >
      <Breadcrumbs items={breadcrumbs} />
      
      <ServiceAreaHero
        location="Carmel Valley"
        service="Kitchen Design & Cabinetry"
        description="Serving Carmel Valley's prestigious wine country community with luxury custom kitchens and bespoke cabinetry that celebrate the rolling hills, vineyard views, and sophisticated lifestyle of this exclusive Monterey Bay destination."
        imageSrc="service-areas/carmel-valley-kitchen-hero.webp"
        imageAlt="Luxury custom kitchen in Carmel Valley home with vineyard views and wine country design"
      />

      {/* Carmel Valley Kitchen Services Overview */}
      <ContentSection background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Carmel Valley Kitchen Excellence"
              description="Carmel Valley represents the perfect blend of wine country sophistication and rural elegance. This prestigious Monterey Bay community attracts discerning homeowners who appreciate both the natural beauty of rolling hills and vineyards and the sophisticated lifestyle that comes with wine country living. Our Carmel Valley kitchen clients understand that true elegance lies in creating spaces that reflect the community's agricultural heritage while providing the functionality and comfort that luxury living demands."
            />
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              From stunning vineyard estates to elegant ranch-style homes, Carmel Valley's exclusive residential landscape demands custom kitchen solutions that seamlessly blend wine country charm with contemporary functionality and uncompromising quality. The community's proximity to world-class wineries, the rolling hills, and the peaceful rural setting creates unique opportunities for kitchen designs that celebrate both indoor and outdoor living while maintaining the highest standards of luxury and sophistication.
            </p>
            <Grid columns={2} gap="md">
              <Card>
                <h3 className="font-semibold text-charcoal mb-2">Kitchen Projects</h3>
                <p className="text-2xl font-bold text-brass">140+</p>
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
              src="/images/service-areas/carmel-valley-kitchen-overview.webp"
              alt="Luxury custom kitchen in Carmel Valley home with vineyard views and wine country design"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </ContentSection>

      {/* Kitchen Services */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Kitchen Services for Carmel Valley"
          description="Our comprehensive kitchen design and construction services are tailored to meet the unique needs of Carmel Valley's diverse architectural styles and wine country lifestyle."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchens</h3>
            <p className="text-charcoal/70 mb-4">
              Complete custom kitchen transformation from design to completion, tailored to your Carmel Valley home's unique character and wine country lifestyle.
            </p>
            <Link href="/service-areas/monterey-bay/carmel-valley/custom-kitchen" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Cabinets</h3>
            <p className="text-charcoal/70 mb-4">
              Bespoke cabinetry solutions that combine wine country elegance with luxury functionality for your Carmel Valley home.
            </p>
            <Link href="/service-areas/monterey-bay/carmel-valley/kitchen-cabinets" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Design</h3>
            <p className="text-charcoal/70 mb-4">
              Professional kitchen design consultation and planning services for your Carmel Valley home renovation.
            </p>
            <Link href="/service-areas/monterey-bay/carmel-valley/kitchen-design" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Remodel</h3>
            <p className="text-charcoal/70 mb-4">
              Complete kitchen remodeling services that transform your Carmel Valley home while preserving its wine country character.
            </p>
            <Link href="/service-areas/monterey-bay/carmel-valley/kitchen-remodel" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>
        </Grid>
      </ContentSection>

      {/* Carmel Valley Kitchen Process */}
      <ContentSection background="white" padding="xl">
        <SectionHeader
          title="Our Kitchen Design Process"
          description="Our proven kitchen design process ensures your Carmel Valley project exceeds expectations and perfectly reflects your vision while respecting the wine country character of your home."
          centered
          className="mb-16"
        />

        <Grid columns={4} gap="lg">
          <Feature
            icon={<span className="text-2xl font-bold text-brass">1</span>}
            title="Wine Country Consultation"
            description="Comprehensive consultation to understand your vision, needs, and budget for your Carmel Valley kitchen project, with special attention to wine country lifestyle requirements."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">2</span>}
            title="Design Development"
            description="Creation of detailed design plans and 3D renderings for your Carmel Valley kitchen project, incorporating your preferences while respecting the home's wine country character."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">3</span>}
            title="Construction"
            description="Professional construction and installation of your approved Carmel Valley kitchen design, with careful attention to wine country preservation and quality craftsmanship."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">4</span>}
            title="Final Walkthrough"
            description="Comprehensive final walkthrough and project completion for your Carmel Valley kitchen project, ensuring everything meets our high standards and wine country requirements."
          />
        </Grid>
      </ContentSection>

      {/* Carmel Valley Kitchen Philosophy */}
      <ContentSection background="charcoal" padding="xl" className="text-ivory">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Designed for Carmel Valley Living"
              description="Carmel Valley's unique wine country character and rural environment creates distinct requirements for kitchen projects. Our approach honors the community's agricultural heritage while delivering the functionality and elegance that luxury living demands."
              className="text-ivory"
            />
            <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
              From morning coffee overlooking the vineyards to evening entertaining that celebrates the community's wine country heritage, every kitchen decision reflects an understanding of how Carmel Valley residents truly live and enjoy their rural luxury lifestyle. The community's proximity to world-class wineries, the rolling hills, and the peaceful rural setting creates unique opportunities for kitchen designs that celebrate both indoor and outdoor living while maintaining the highest standards of luxury and sophistication.
            </p>
          </div>
          <div className="space-y-6">
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Wine Country Integration</h3>
              <p className="text-ivory/80">Kitchen designs that celebrate Carmel Valley's wine country heritage while providing luxury functionality and sophistication.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Rural Elegance</h3>
              <p className="text-ivory/80">Custom solutions that work with Carmel Valley's unique rural environment and wine country architectural styles.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Agricultural Heritage</h3>
              <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste and wine country lifestyle of Carmel Valley residents.</p>
            </Card>
          </div>
        </div>
      </ContentSection>

      {/* Featured Kitchen Projects */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Featured Carmel Valley Kitchen Projects"
          description="Explore our portfolio of kitchen projects throughout Carmel Valley's most prestigious wine country estates, showcasing our ability to work with various architectural styles while preserving wine country character."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/carmel-valley-kitchen-1.webp"
              alt="Luxury custom kitchen in Carmel Valley home with vineyard views"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Vineyard Views</h3>
              <p className="text-charcoal/70 mb-4">Luxury kitchen with stunning vineyard views that celebrates Carmel Valley's wine country heritage and rural beauty.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Vineyard Views</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Wine Country</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/carmel-valley-kitchen-2.webp"
              alt="Ranch-style kitchen in Carmel Valley home with wine country design"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Ranch-Style Luxury</h3>
              <p className="text-charcoal/70 mb-4">Elegant ranch-style kitchen that showcases Carmel Valley's rural charm and wine country sophistication.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Ranch Style</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Rural Charm</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/carmel-valley-kitchen-3.webp"
              alt="Modern luxury kitchen in Carmel Valley home with contemporary wine country design"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Modern Wine Country</h3>
              <p className="text-charcoal/70 mb-4">Contemporary luxury kitchen that seamlessly blends modern functionality with Carmel Valley's wine country aesthetic.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Modern Design</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Wine Country</span>
              </div>
            </div>
          </Card>
        </Grid>
      </ContentSection>

      {/* Carmel Valley Kitchen Materials */}
      <ContentSection background="white" padding="xl">
        <SectionHeader
          title="Premium Materials for Carmel Valley Kitchens"
          description="We use only the finest materials and finishes to ensure your Carmel Valley kitchen stands the test of time while maintaining its beauty and functionality in the wine country environment."
          centered
          className="mb-16"
        />

        <Grid columns={2} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Wine Country Hardwood Cabinetry</h3>
            <p className="text-charcoal/70 mb-4">
              Custom hardwood cabinetry crafted from premium woods that complement Carmel Valley's wine country character. Each piece is hand-finished to perfection and built to last for generations while respecting the home's agricultural heritage.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Cherry, Maple, Oak, Walnut with wine country finishes</li>
              <li>• Hand-finished surfaces with traditional techniques</li>
              <li>• Custom hardware options</li>
              <li>• Soft-close mechanisms</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Natural Stone Countertops</h3>
            <p className="text-charcoal/70 mb-4">
              Beautiful natural stone countertops including granite, marble, and quartz that add elegance and durability to your Carmel Valley kitchen while complementing the wine country character.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Granite, Marble, Quartz with wine country appeal</li>
              <li>• Custom edge profiles</li>
              <li>• Seamless installation</li>
              <li>• Easy maintenance for wine country homes</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Premium Appliances</h3>
            <p className="text-charcoal/70 mb-4">
              High-end appliances from leading manufacturers that combine performance with style, perfectly integrated into your custom kitchen design while respecting the wine country character of your Carmel Valley home.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Wolf, Sub-Zero, Viking with wine country integration</li>
              <li>• Custom panel integration</li>
              <li>• Smart home compatibility</li>
              <li>• Energy efficient options</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Hardware</h3>
            <p className="text-charcoal/70 mb-4">
              Hand-selected hardware and fixtures that add the perfect finishing touches to your Carmel Valley kitchen, from cabinet pulls to faucets and lighting, all designed to complement the wine country aesthetic.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Designer cabinet hardware with wine country appeal</li>
              <li>• Premium faucets with rural inspiration</li>
              <li>• Custom lighting that celebrates wine country character</li>
              <li>• Finishing touches that reflect agricultural heritage</li>
            </ul>
          </Card>
        </Grid>
      </ContentSection>

      {/* Wine Country Kitchen Features */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Wine Country Kitchen Features"
          description="Special features and design elements that make Carmel Valley kitchens unique and perfectly suited to the wine country lifestyle."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Wine Storage Solutions</h3>
            <p className="text-charcoal/70 mb-4">
              Custom wine storage solutions including temperature-controlled wine cellars, wine racks, and storage systems designed specifically for Carmel Valley's wine country lifestyle.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Temperature-controlled wine cellars</li>
              <li>• Custom wine racks and storage</li>
              <li>• Wine tasting areas</li>
              <li>• Wine display cabinets</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Entertaining Spaces</h3>
            <p className="text-charcoal/70 mb-4">
              Spacious entertaining areas designed for hosting wine tastings, dinner parties, and social gatherings that are central to Carmel Valley's wine country culture.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Large island seating areas</li>
              <li>• Open concept layouts</li>
              <li>• Outdoor kitchen integration</li>
              <li>• Bar and beverage centers</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Natural Materials</h3>
            <p className="text-charcoal/70 mb-4">
              Emphasis on natural materials and finishes that reflect Carmel Valley's rural character and connection to the land, including reclaimed wood and natural stone.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Reclaimed wood elements</li>
              <li>• Natural stone finishes</li>
              <li>• Earth-tone color palettes</li>
              <li>• Sustainable materials</li>
            </ul>
          </Card>
        </Grid>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection background="white" padding="xl" maxWidth="2xl">
        <SectionHeader
          title="Carmel Valley Kitchen FAQ"
          description="Common questions about kitchen services in Carmel Valley"
          centered
          className="mb-16"
        />

        <div className="space-y-8">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">How long does a kitchen project take in Carmel Valley?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              A complete kitchen project in Carmel Valley typically takes 8-16 weeks from start to finish, depending on the scope of work and wine country requirements. This includes 3-4 weeks for design and planning, 2-3 weeks for permits and preparation, 6-8 weeks for construction and installation, and 2-3 weeks for finishing and cleanup. We work efficiently to minimize disruption to your wine country lifestyle while ensuring the highest quality results and luxury standards.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Do I need permits for my Carmel Valley kitchen project?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Most kitchen projects in Carmel Valley require permits, especially if you're making structural changes, moving electrical or plumbing, or making modifications that affect the home's systems. We handle all permit applications and inspections as part of our comprehensive service, ensuring your project meets all local building codes and regulations. This is particularly important in Carmel Valley due to the rural character of many homes and the wine country environment.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle wine country requirements in Carmel Valley?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              We take special care to meet the wine country requirements of Carmel Valley homes while maintaining functionality. This includes working with wine storage solutions, selecting materials that complement the home's architectural style, and ensuring the highest standards of craftsmanship. We're experienced in working with various wine country styles and can help you create a kitchen that honors the home's agricultural heritage while meeting modern luxury needs.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Can you work with my home's wine country character?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Absolutely! We love working with Carmel Valley's wine country homes and are experienced in preserving their character while modernizing functionality. Whether you have a vineyard estate, ranch-style home, or any other wine country style, we work closely with you to create a kitchen that respects the home's agricultural heritage while providing the modern luxury amenities you need. We can help you navigate any wine country requirements and ensure your project enhances rather than detracts from the home's wine country value.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">What makes your Carmel Valley kitchen projects special?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Our Carmel Valley kitchen projects are special because we understand the unique character of this wine country community. We work with a wide range of architectural styles, from vineyard estates to ranch-style homes, and we're experienced in incorporating wine country elements and rural sophistication into our designs. Our attention to detail, commitment to quality, and understanding of wine country living create kitchens that are both beautiful and functional, perfectly suited to the Carmel Valley lifestyle.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Do you offer eco-friendly options for Carmel Valley kitchens?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Yes, we offer a wide range of eco-friendly options that are perfect for Carmel Valley's environmentally conscious community. This includes sustainable materials, energy-efficient appliances, low-VOC finishes, and water-saving fixtures. We can help you create a kitchen that not only looks beautiful but also aligns with your environmental values and contributes to a more sustainable future, all while maintaining the wine country character of your home.
            </p>
          </Card>
        </div>
      </ContentSection>
    </ServiceAreaPageLayout>
  )
}
