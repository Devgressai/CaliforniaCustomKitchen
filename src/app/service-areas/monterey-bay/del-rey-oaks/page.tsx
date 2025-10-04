import { Metadata } from 'next'
import { ServiceAreaPageLayout } from '@/components/PageLayout'
import { ServiceAreaHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature } from '@/components/ContentSection'
import { generateServiceSchema } from '@/components/StructuredData'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Kitchens Del Rey Oaks | Kitchen Design & Cabinetry | PineWood Cabinets',
  description: 'Luxury custom kitchens and bespoke cabinetry for Del Rey Oaks homes. Expert kitchen design and construction serving this charming coastal community with museum-grade craftsmanship.',
  keywords: [
    'custom kitchens del rey oaks',
    'kitchen design del rey oaks',
    'cabinetry del rey oaks',
    'del rey oaks kitchens',
    'monterey bay kitchen design',
    'luxury kitchens del rey oaks',
    'custom cabinetry del rey oaks',
    'kitchen remodeling del rey oaks',
    'bespoke kitchens del rey oaks',
    'coastal kitchens del rey oaks'
  ],
  openGraph: {
    title: 'Custom Kitchens Del Rey Oaks | Kitchen Design & Cabinetry | PineWood Cabinets',
    description: 'Luxury custom kitchens and bespoke cabinetry for Del Rey Oaks homes in Monterey Bay.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchens Del Rey Oaks",
  "Luxury custom kitchens and bespoke cabinetry for Del Rey Oaks homes in Monterey Bay",
  "Kitchen Design & Cabinetry",
  ["Del Rey Oaks, CA", "Monterey Bay, CA", "Monterey, CA"]
)

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Monterey Bay', href: '/service-areas/monterey-bay' },
  { name: 'Del Rey Oaks', href: '/service-areas/monterey-bay/del-rey-oaks' }
]

export default function DelReyOaksPage() {
  return (
    <ServiceAreaPageLayout
      location="Del Rey Oaks"
      service="Kitchen Design & Cabinetry"
      structuredData={{ service: serviceSchema }}
    >
      <Breadcrumbs items={breadcrumbs} />
      
      <ServiceAreaHero
        location="Del Rey Oaks"
        service="Kitchen Design & Cabinetry"
        description="Serving Del Rey Oaks's charming coastal community with luxury custom kitchens and bespoke cabinetry that celebrate the oak-studded hills, coastal beauty, and peaceful lifestyle of this serene Monterey Bay destination."
        imageSrc="service-areas/del-rey-oaks-kitchen-hero.webp"
        imageAlt="Luxury custom kitchen in Del Rey Oaks home with oak-studded hills and coastal design"
      />

      {/* Del Rey Oaks Kitchen Services Overview */}
      <ContentSection background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Del Rey Oaks Kitchen Excellence"
              description="Del Rey Oaks represents the perfect blend of coastal living and oak-studded tranquility. This serene Monterey Bay community attracts discerning homeowners who appreciate both the natural beauty of oak forests and the peaceful lifestyle that comes with living among the trees. Our Del Rey Oaks kitchen clients understand that true elegance lies in creating spaces that reflect the community's natural heritage while providing the functionality and comfort that modern living demands."
            />
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              From charming oak-studded homes to elegant coastal properties, Del Rey Oaks's diverse residential landscape demands custom kitchen solutions that seamlessly blend natural beauty with contemporary functionality and uncompromising quality. The community's proximity to the ocean, the oak forests, and the peaceful residential setting creates unique opportunities for kitchen designs that celebrate both indoor and outdoor living while maintaining the highest standards of luxury and sophistication.
            </p>
            <Grid columns={2} gap="md">
              <Card>
                <h3 className="font-semibold text-charcoal mb-2">Kitchen Projects</h3>
                <p className="text-2xl font-bold text-brass">110+</p>
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
              src="/images/service-areas/del-rey-oaks-kitchen-overview.webp"
              alt="Luxury custom kitchen in Del Rey Oaks home with oak-studded hills and coastal design"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </ContentSection>

      {/* Kitchen Services */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Kitchen Services for Del Rey Oaks"
          description="Our comprehensive kitchen design and construction services are tailored to meet the unique needs of Del Rey Oaks's diverse architectural styles and natural environment."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchens</h3>
            <p className="text-charcoal/70 mb-4">
              Complete custom kitchen transformation from design to completion, tailored to your Del Rey Oaks home's unique character and natural setting.
            </p>
            <Link href="/service-areas/monterey-bay/del-rey-oaks/custom-kitchen" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Cabinets</h3>
            <p className="text-charcoal/70 mb-4">
              Bespoke cabinetry solutions that combine natural beauty with luxury functionality for your Del Rey Oaks home.
            </p>
            <Link href="/service-areas/monterey-bay/del-rey-oaks/kitchen-cabinets" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Design</h3>
            <p className="text-charcoal/70 mb-4">
              Professional kitchen design consultation and planning services for your Del Rey Oaks home renovation.
            </p>
            <Link href="/service-areas/monterey-bay/del-rey-oaks/kitchen-design" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Remodel</h3>
            <p className="text-charcoal/70 mb-4">
              Complete kitchen remodeling services that transform your Del Rey Oaks home while preserving its natural character.
            </p>
            <Link href="/service-areas/monterey-bay/del-rey-oaks/kitchen-remodel" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>
        </Grid>
      </ContentSection>

      {/* Del Rey Oaks Kitchen Process */}
      <ContentSection background="white" padding="xl">
        <SectionHeader
          title="Our Kitchen Design Process"
          description="Our proven kitchen design process ensures your Del Rey Oaks project exceeds expectations and perfectly reflects your vision while respecting the natural character of your home."
          centered
          className="mb-16"
        />

        <Grid columns={4} gap="lg">
          <Feature
            icon={<span className="text-2xl font-bold text-brass">1</span>}
            title="Natural Consultation"
            description="Comprehensive consultation to understand your vision, needs, and budget for your Del Rey Oaks kitchen project, with special attention to natural environment requirements."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">2</span>}
            title="Design Development"
            description="Creation of detailed design plans and 3D renderings for your Del Rey Oaks kitchen project, incorporating your preferences while respecting the home's natural character."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">3</span>}
            title="Construction"
            description="Professional construction and installation of your approved Del Rey Oaks kitchen design, with careful attention to natural preservation and quality craftsmanship."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">4</span>}
            title="Final Walkthrough"
            description="Comprehensive final walkthrough and project completion for your Del Rey Oaks kitchen project, ensuring everything meets our high standards and natural requirements."
          />
        </Grid>
      </ContentSection>

      {/* Del Rey Oaks Kitchen Philosophy */}
      <ContentSection background="charcoal" padding="xl" className="text-ivory">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Designed for Del Rey Oaks Living"
              description="Del Rey Oaks's unique natural character and coastal environment creates distinct requirements for kitchen projects. Our approach honors the community's environmental heritage while delivering the functionality and elegance that modern living demands."
              className="text-ivory"
            />
            <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
              From morning coffee among the oak trees to evening entertaining that celebrates the community's natural beauty, every kitchen decision reflects an understanding of how Del Rey Oaks residents truly live and enjoy their forested coastal lifestyle. The community's proximity to the ocean, the oak forests, and the peaceful residential setting creates unique opportunities for kitchen designs that celebrate both indoor and outdoor living while maintaining the highest standards of luxury and sophistication.
            </p>
          </div>
          <div className="space-y-6">
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Natural Integration</h3>
              <p className="text-ivory/80">Kitchen designs that celebrate Del Rey Oaks's natural heritage while providing modern functionality and coastal sophistication.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Oak Forest Adaptation</h3>
              <p className="text-ivory/80">Custom solutions that work with Del Rey Oaks's unique oak forest environment and natural architectural styles.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Environmental Harmony</h3>
              <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste and natural lifestyle of Del Rey Oaks residents.</p>
            </Card>
          </div>
        </div>
      </ContentSection>

      {/* Featured Kitchen Projects */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Featured Del Rey Oaks Kitchen Projects"
          description="Explore our portfolio of kitchen projects throughout Del Rey Oaks's most beautiful natural settings, showcasing our ability to work with various architectural styles while preserving natural character."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/del-rey-oaks-kitchen-1.webp"
              alt="Luxury custom kitchen in Del Rey Oaks home with oak forest views"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Oak Forest Views</h3>
              <p className="text-charcoal/70 mb-4">Luxury kitchen with stunning oak forest views that celebrates Del Rey Oaks's natural heritage and forested beauty.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Oak Forest Views</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Natural Heritage</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/del-rey-oaks-kitchen-2.webp"
              alt="Coastal kitchen in Del Rey Oaks home with ocean views and natural design"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Coastal Natural</h3>
              <p className="text-charcoal/70 mb-4">Kitchen design that showcases Del Rey Oaks's coastal beauty with ocean views and natural design elements.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Ocean Views</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Natural Design</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/del-rey-oaks-kitchen-3.webp"
              alt="Modern kitchen in Del Rey Oaks home with contemporary natural design"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Modern Natural</h3>
              <p className="text-charcoal/70 mb-4">Contemporary kitchen that seamlessly blends modern functionality with Del Rey Oaks's natural aesthetic and oak forest charm.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Modern Design</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Natural Aesthetic</span>
              </div>
            </div>
          </Card>
        </Grid>
      </ContentSection>

      {/* Del Rey Oaks Kitchen Materials */}
      <ContentSection background="white" padding="xl">
        <SectionHeader
          title="Premium Materials for Del Rey Oaks Kitchens"
          description="We use only the finest materials and finishes to ensure your Del Rey Oaks kitchen stands the test of time while maintaining its beauty and functionality in the natural environment."
          centered
          className="mb-16"
        />

        <Grid columns={2} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Natural Hardwood Cabinetry</h3>
            <p className="text-charcoal/70 mb-4">
              Custom hardwood cabinetry crafted from premium woods that complement Del Rey Oaks's natural character. Each piece is hand-finished to perfection and built to last for generations while respecting the home's environmental heritage.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Cherry, Maple, Oak, Walnut with natural finishes</li>
              <li>• Hand-finished surfaces with traditional techniques</li>
              <li>• Custom hardware options</li>
              <li>• Soft-close mechanisms</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Natural Stone Countertops</h3>
            <p className="text-charcoal/70 mb-4">
              Beautiful natural stone countertops including granite, marble, and quartz that add elegance and durability to your Del Rey Oaks kitchen while complementing the natural character.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Granite, Marble, Quartz with natural appeal</li>
              <li>• Custom edge profiles</li>
              <li>• Seamless installation</li>
              <li>• Easy maintenance for natural homes</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Premium Appliances</h3>
            <p className="text-charcoal/70 mb-4">
              High-end appliances from leading manufacturers that combine performance with style, perfectly integrated into your custom kitchen design while respecting the natural character of your Del Rey Oaks home.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Wolf, Sub-Zero, Viking with natural integration</li>
              <li>• Custom panel integration</li>
              <li>• Smart home compatibility</li>
              <li>• Energy efficient options</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Hardware</h3>
            <p className="text-charcoal/70 mb-4">
              Hand-selected hardware and fixtures that add the perfect finishing touches to your Del Rey Oaks kitchen, from cabinet pulls to faucets and lighting, all designed to complement the natural aesthetic.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Designer cabinet hardware with natural appeal</li>
              <li>• Premium faucets with forest inspiration</li>
              <li>• Custom lighting that celebrates natural character</li>
              <li>• Finishing touches that reflect environmental heritage</li>
            </ul>
          </Card>
        </Grid>
      </ContentSection>

      {/* Natural Kitchen Features */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Natural Kitchen Features"
          description="Special features and design elements that make Del Rey Oaks kitchens unique and perfectly suited to the natural environment."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Natural Light Integration</h3>
            <p className="text-charcoal/70 mb-4">
              Maximizing natural light through strategic window placement, skylights, and glass doors that bring the beauty of the oak forest and ocean views into your Del Rey Oaks kitchen.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Strategic window placement</li>
              <li>• Skylights and glass doors</li>
              <li>• Forest and ocean views</li>
              <li>• Natural light optimization</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Sustainable Materials</h3>
            <p className="text-charcoal/70 mb-4">
              Emphasis on sustainable and eco-friendly materials that reflect Del Rey Oaks's environmental consciousness and natural beauty, including reclaimed wood and recycled materials.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Reclaimed wood elements</li>
              <li>• Recycled materials</li>
              <li>• Sustainable finishes</li>
              <li>• Eco-friendly options</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Outdoor Living Connection</h3>
            <p className="text-charcoal/70 mb-4">
              Seamless connection to outdoor living spaces including decks, patios, and gardens that take advantage of Del Rey Oaks's mild climate and natural setting.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Outdoor kitchen integration</li>
              <li>• Seamless indoor-outdoor flow</li>
              <li>• Deck and patio connections</li>
              <li>• Garden integration</li>
            </ul>
          </Card>
        </Grid>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection background="white" padding="xl" maxWidth="2xl">
        <SectionHeader
          title="Del Rey Oaks Kitchen FAQ"
          description="Common questions about kitchen services in Del Rey Oaks"
          centered
          className="mb-16"
        />

        <div className="space-y-8">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">How long does a kitchen project take in Del Rey Oaks?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              A complete kitchen project in Del Rey Oaks typically takes 6-12 weeks from start to finish, depending on the scope of work and natural environment requirements. This includes 2-3 weeks for design and planning, 1-2 weeks for permits and preparation, 4-6 weeks for construction and installation, and 1-2 weeks for finishing and cleanup. We work efficiently to minimize disruption to your natural lifestyle while ensuring the highest quality results and environmental standards.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Do I need permits for my Del Rey Oaks kitchen project?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Most kitchen projects in Del Rey Oaks require permits, especially if you're making structural changes, moving electrical or plumbing, or making modifications that affect the home's systems. We handle all permit applications and inspections as part of our comprehensive service, ensuring your project meets all local building codes and regulations. This is particularly important in Del Rey Oaks due to the natural character of many homes and the oak forest environment.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle natural environment requirements in Del Rey Oaks?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              We take special care to meet the natural environment requirements of Del Rey Oaks homes while maintaining functionality. This includes working with sustainable materials, selecting finishes that complement the home's architectural style, and ensuring the highest standards of craftsmanship. We're experienced in working with various natural styles and can help you create a kitchen that honors the home's environmental heritage while meeting modern luxury needs.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Can you work with my home's natural character?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Absolutely! We love working with Del Rey Oaks's natural homes and are experienced in preserving their character while modernizing functionality. Whether you have an oak forest home, coastal property, or any other natural style, we work closely with you to create a kitchen that respects the home's environmental heritage while providing the modern luxury amenities you need. We can help you navigate any natural requirements and ensure your project enhances rather than detracts from the home's natural value.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">What makes your Del Rey Oaks kitchen projects special?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Our Del Rey Oaks kitchen projects are special because we understand the unique character of this natural community. We work with a wide range of architectural styles, from oak forest homes to coastal properties, and we're experienced in incorporating natural elements and environmental sophistication into our designs. Our attention to detail, commitment to quality, and understanding of natural living create kitchens that are both beautiful and functional, perfectly suited to the Del Rey Oaks lifestyle.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Do you offer eco-friendly options for Del Rey Oaks kitchens?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Yes, we offer a wide range of eco-friendly options that are perfect for Del Rey Oaks's environmentally conscious community. This includes sustainable materials, energy-efficient appliances, low-VOC finishes, and water-saving fixtures. We can help you create a kitchen that not only looks beautiful but also aligns with your environmental values and contributes to a more sustainable future, all while maintaining the natural character of your home.
            </p>
          </Card>
        </div>
      </ContentSection>
    </ServiceAreaPageLayout>
  )
}
