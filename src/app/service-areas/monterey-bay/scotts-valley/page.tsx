import { Metadata } from 'next'
import { ServiceAreaPageLayout } from '@/components/PageLayout'
import { ServiceAreaHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature } from '@/components/ContentSection'
import { generateServiceSchema } from '@/components/StructuredData'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Kitchens Scotts Valley | Kitchen Design & Cabinetry | PineWood Cabinets',
  description: 'Luxury custom kitchens and bespoke cabinetry for Scotts Valley homes. Expert kitchen design and construction serving this mountain community with museum-grade craftsmanship.',
  keywords: [
    'custom kitchens scotts valley',
    'kitchen design scotts valley',
    'cabinetry scotts valley',
    'scotts valley kitchens',
    'monterey bay kitchen design',
    'luxury kitchens scotts valley',
    'custom cabinetry scotts valley',
    'kitchen remodeling scotts valley',
    'bespoke kitchens scotts valley',
    'mountain kitchens scotts valley'
  ],
  openGraph: {
    title: 'Custom Kitchens Scotts Valley | Kitchen Design & Cabinetry | PineWood Cabinets',
    description: 'Luxury custom kitchens and bespoke cabinetry for Scotts Valley homes in Monterey Bay.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchens Scotts Valley",
  "Luxury custom kitchens and bespoke cabinetry for Scotts Valley homes in Monterey Bay",
  "Kitchen Design & Cabinetry",
  ["Scotts Valley, CA", "Monterey Bay, CA", "Santa Cruz, CA"]
)

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Monterey Bay', href: '/service-areas/monterey-bay' },
  { name: 'Scotts Valley', href: '/service-areas/monterey-bay/scotts-valley' }
]

export default function ScottsValleyPage() {
  return (
    <ServiceAreaPageLayout
      location="Scotts Valley"
      service="Kitchen Design & Cabinetry"
      structuredData={{ service: serviceSchema }}
    >
      <Breadcrumbs items={breadcrumbs} />
      
      <ServiceAreaHero
        location="Scotts Valley"
        service="Kitchen Design & Cabinetry"
        description="Serving Scotts Valley's mountain community with luxury custom kitchens and bespoke cabinetry that celebrate the redwood forests, mountain views, and peaceful lifestyle of this serene Monterey Bay destination."
        imageSrc="service-areas/scotts-valley-kitchen-hero.webp"
        imageAlt="Luxury custom kitchen in Scotts Valley home with redwood forests and mountain views"
      />

      {/* Scotts Valley Kitchen Services Overview */}
      <ContentSection background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Scotts Valley Kitchen Excellence"
              description="Scotts Valley represents the perfect blend of mountain living and redwood tranquility. This serene Monterey Bay community attracts discerning homeowners who appreciate both the natural beauty of redwood forests and the peaceful lifestyle that comes with living among the trees. Our Scotts Valley kitchen clients understand that true elegance lies in creating spaces that reflect the community's natural heritage while providing the functionality and comfort that modern living demands."
            />
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              From charming redwood forest homes to elegant mountain properties, Scotts Valley's diverse residential landscape demands custom kitchen solutions that seamlessly blend natural beauty with contemporary functionality and uncompromising quality. The community's proximity to the redwood forests, the mountain views, and the peaceful residential setting creates unique opportunities for kitchen designs that celebrate both indoor and outdoor living while maintaining the highest standards of luxury and sophistication.
            </p>
            <Grid columns={2} gap="md">
              <Card>
                <h3 className="font-semibold text-charcoal mb-2">Kitchen Projects</h3>
                <p className="text-2xl font-bold text-brass">120+</p>
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
              src="/images/service-areas/scotts-valley-kitchen-overview.webp"
              alt="Luxury custom kitchen in Scotts Valley home with redwood forests and mountain views"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </ContentSection>

      {/* Kitchen Services */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Kitchen Services for Scotts Valley"
          description="Our comprehensive kitchen design and construction services are tailored to meet the unique needs of Scotts Valley's diverse architectural styles and mountain environment."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchens</h3>
            <p className="text-charcoal/70 mb-4">
              Complete custom kitchen transformation from design to completion, tailored to your Scotts Valley home's unique character and mountain setting.
            </p>
            <Link href="/service-areas/monterey-bay/scotts-valley/custom-kitchen" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Cabinets</h3>
            <p className="text-charcoal/70 mb-4">
              Bespoke cabinetry solutions that combine mountain beauty with luxury functionality for your Scotts Valley home.
            </p>
            <Link href="/service-areas/monterey-bay/scotts-valley/kitchen-cabinets" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Design</h3>
            <p className="text-charcoal/70 mb-4">
              Professional kitchen design consultation and planning services for your Scotts Valley home renovation.
            </p>
            <Link href="/service-areas/monterey-bay/scotts-valley/kitchen-design" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Remodel</h3>
            <p className="text-charcoal/70 mb-4">
              Complete kitchen remodeling services that transform your Scotts Valley home while preserving its mountain character.
            </p>
            <Link href="/service-areas/monterey-bay/scotts-valley/kitchen-remodel" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>
        </Grid>
      </ContentSection>

      {/* Scotts Valley Kitchen Process */}
      <ContentSection background="white" padding="xl">
        <SectionHeader
          title="Our Kitchen Design Process"
          description="Our proven kitchen design process ensures your Scotts Valley project exceeds expectations and perfectly reflects your vision while respecting the mountain character of your home."
          centered
          className="mb-16"
        />

        <Grid columns={4} gap="lg">
          <Feature
            icon={<span className="text-2xl font-bold text-brass">1</span>}
            title="Mountain Consultation"
            description="Comprehensive consultation to understand your vision, needs, and budget for your Scotts Valley kitchen project, with special attention to mountain environment requirements."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">2</span>}
            title="Design Development"
            description="Creation of detailed design plans and 3D renderings for your Scotts Valley kitchen project, incorporating your preferences while respecting the home's mountain character."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">3</span>}
            title="Construction"
            description="Professional construction and installation of your approved Scotts Valley kitchen design, with careful attention to mountain preservation and quality craftsmanship."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">4</span>}
            title="Final Walkthrough"
            description="Comprehensive final walkthrough and project completion for your Scotts Valley kitchen project, ensuring everything meets our high standards and mountain requirements."
          />
        </Grid>
      </ContentSection>

      {/* Scotts Valley Kitchen Philosophy */}
      <ContentSection background="charcoal" padding="xl" className="text-ivory">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Designed for Scotts Valley Living"
              description="Scotts Valley's unique mountain character and redwood environment creates distinct requirements for kitchen projects. Our approach honors the community's natural heritage while delivering the functionality and elegance that modern living demands."
              className="text-ivory"
            />
            <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
              From morning coffee among the redwoods to evening entertaining that celebrates the community's natural beauty, every kitchen decision reflects an understanding of how Scotts Valley residents truly live and enjoy their forested mountain lifestyle. The community's proximity to the redwood forests, the mountain views, and the peaceful residential setting creates unique opportunities for kitchen designs that celebrate both indoor and outdoor living while maintaining the highest standards of luxury and sophistication.
            </p>
          </div>
          <div className="space-y-6">
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Mountain Integration</h3>
              <p className="text-ivory/80">Kitchen designs that celebrate Scotts Valley's mountain heritage while providing modern functionality and redwood sophistication.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Redwood Forest Adaptation</h3>
              <p className="text-ivory/80">Custom solutions that work with Scotts Valley's unique redwood forest environment and mountain architectural styles.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Environmental Harmony</h3>
              <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste and mountain lifestyle of Scotts Valley residents.</p>
            </Card>
          </div>
        </div>
      </ContentSection>

      {/* Featured Kitchen Projects */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Featured Scotts Valley Kitchen Projects"
          description="Explore our portfolio of kitchen projects throughout Scotts Valley's most beautiful mountain settings, showcasing our ability to work with various architectural styles while preserving mountain character."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/scotts-valley-kitchen-1.webp"
              alt="Luxury custom kitchen in Scotts Valley home with redwood forest views"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Redwood Forest Views</h3>
              <p className="text-charcoal/70 mb-4">Luxury kitchen with stunning redwood forest views that celebrates Scotts Valley's mountain heritage and forested beauty.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Redwood Forest Views</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Mountain Heritage</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/scotts-valley-kitchen-2.webp"
              alt="Mountain kitchen in Scotts Valley home with mountain views and natural design"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Mountain Views</h3>
              <p className="text-charcoal/70 mb-4">Kitchen design that showcases Scotts Valley's mountain beauty with forest views and natural design elements.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Mountain Views</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Natural Design</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/scotts-valley-kitchen-3.webp"
              alt="Modern kitchen in Scotts Valley home with contemporary mountain design"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Modern Mountain</h3>
              <p className="text-charcoal/70 mb-4">Contemporary kitchen that seamlessly blends modern functionality with Scotts Valley's mountain aesthetic and redwood forest charm.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Modern Design</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Mountain Aesthetic</span>
              </div>
            </div>
          </Card>
        </Grid>
      </ContentSection>

      {/* Scotts Valley Kitchen Materials */}
      <ContentSection background="white" padding="xl">
        <SectionHeader
          title="Premium Materials for Scotts Valley Kitchens"
          description="We use only the finest materials and finishes to ensure your Scotts Valley kitchen stands the test of time while maintaining its beauty and functionality in the mountain environment."
          centered
          className="mb-16"
        />

        <Grid columns={2} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Mountain Hardwood Cabinetry</h3>
            <p className="text-charcoal/70 mb-4">
              Custom hardwood cabinetry crafted from premium woods that complement Scotts Valley's mountain character. Each piece is hand-finished to perfection and built to last for generations while respecting the home's natural heritage.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Cherry, Maple, Oak, Walnut with mountain finishes</li>
              <li>• Hand-finished surfaces with traditional techniques</li>
              <li>• Custom hardware options</li>
              <li>• Soft-close mechanisms</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Natural Stone Countertops</h3>
            <p className="text-charcoal/70 mb-4">
              Beautiful natural stone countertops including granite, marble, and quartz that add elegance and durability to your Scotts Valley kitchen while complementing the mountain character.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Granite, Marble, Quartz with mountain appeal</li>
              <li>• Custom edge profiles</li>
              <li>• Seamless installation</li>
              <li>• Easy maintenance for mountain homes</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Premium Appliances</h3>
            <p className="text-charcoal/70 mb-4">
              High-end appliances from leading manufacturers that combine performance with style, perfectly integrated into your custom kitchen design while respecting the mountain character of your Scotts Valley home.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Wolf, Sub-Zero, Viking with mountain integration</li>
              <li>• Custom panel integration</li>
              <li>• Smart home compatibility</li>
              <li>• Energy efficient options</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Hardware</h3>
            <p className="text-charcoal/70 mb-4">
              Hand-selected hardware and fixtures that add the perfect finishing touches to your Scotts Valley kitchen, from cabinet pulls to faucets and lighting, all designed to complement the mountain aesthetic.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Designer cabinet hardware with mountain appeal</li>
              <li>• Premium faucets with forest inspiration</li>
              <li>• Custom lighting that celebrates mountain character</li>
              <li>• Finishing touches that reflect natural heritage</li>
            </ul>
          </Card>
        </Grid>
      </ContentSection>

      {/* Mountain Kitchen Features */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Mountain Kitchen Features"
          description="Special features and design elements that make Scotts Valley kitchens unique and perfectly suited to the mountain environment."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Natural Light Integration</h3>
            <p className="text-charcoal/70 mb-4">
              Maximizing natural light through strategic window placement, skylights, and glass doors that bring the beauty of the redwood forest and mountain views into your Scotts Valley kitchen.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Strategic window placement</li>
              <li>• Skylights and glass doors</li>
              <li>• Forest and mountain views</li>
              <li>• Natural light optimization</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Sustainable Materials</h3>
            <p className="text-charcoal/70 mb-4">
              Emphasis on sustainable and eco-friendly materials that reflect Scotts Valley's environmental consciousness and natural beauty, including reclaimed wood and recycled materials.
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
              Seamless connection to outdoor living spaces including decks, patios, and gardens that take advantage of Scotts Valley's mild climate and mountain setting.
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
          title="Scotts Valley Kitchen FAQ"
          description="Common questions about kitchen services in Scotts Valley"
          centered
          className="mb-16"
        />

        <div className="space-y-8">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">How long does a kitchen project take in Scotts Valley?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              A complete kitchen project in Scotts Valley typically takes 6-12 weeks from start to finish, depending on the scope of work and mountain environment requirements. This includes 2-3 weeks for design and planning, 1-2 weeks for permits and preparation, 4-6 weeks for construction and installation, and 1-2 weeks for finishing and cleanup. We work efficiently to minimize disruption to your mountain lifestyle while ensuring the highest quality results and environmental standards.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Do I need permits for my Scotts Valley kitchen project?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Most kitchen projects in Scotts Valley require permits, especially if you're making structural changes, moving electrical or plumbing, or making modifications that affect the home's systems. We handle all permit applications and inspections as part of our comprehensive service, ensuring your project meets all local building codes and regulations. This is particularly important in Scotts Valley due to the mountain character of many homes and the redwood forest environment.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle mountain environment requirements in Scotts Valley?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              We take special care to meet the mountain environment requirements of Scotts Valley homes while maintaining functionality. This includes working with sustainable materials, selecting finishes that complement the home's architectural style, and ensuring the highest standards of craftsmanship. We're experienced in working with various mountain styles and can help you create a kitchen that honors the home's natural heritage while meeting modern luxury needs.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Can you work with my home's mountain character?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Absolutely! We love working with Scotts Valley's mountain homes and are experienced in preserving their character while modernizing functionality. Whether you have a redwood forest home, mountain property, or any other natural style, we work closely with you to create a kitchen that respects the home's natural heritage while providing the modern luxury amenities you need. We can help you navigate any mountain requirements and ensure your project enhances rather than detracts from the home's mountain value.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">What makes your Scotts Valley kitchen projects special?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Our Scotts Valley kitchen projects are special because we understand the unique character of this mountain community. We work with a wide range of architectural styles, from redwood forest homes to mountain properties, and we're experienced in incorporating mountain elements and natural sophistication into our designs. Our attention to detail, commitment to quality, and understanding of mountain living create kitchens that are both beautiful and functional, perfectly suited to the Scotts Valley lifestyle.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Do you offer eco-friendly options for Scotts Valley kitchens?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Yes, we offer a wide range of eco-friendly options that are perfect for Scotts Valley's environmentally conscious community. This includes sustainable materials, energy-efficient appliances, low-VOC finishes, and water-saving fixtures. We can help you create a kitchen that not only looks beautiful but also aligns with your environmental values and contributes to a more sustainable future, all while maintaining the mountain character of your home.
            </p>
          </Card>
        </div>
      </ContentSection>
    </ServiceAreaPageLayout>
  )
}
