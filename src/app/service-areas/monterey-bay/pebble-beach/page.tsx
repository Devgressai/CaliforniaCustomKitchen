import { Metadata } from 'next'
import { ServiceAreaPageLayout } from '@/components/PageLayout'
import { ServiceAreaHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card, Feature } from '@/components/ContentSection'
import { generateServiceSchema } from '@/components/StructuredData'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Kitchens Pebble Beach | Kitchen Design & Cabinetry | PineWood Cabinets',
  description: 'Luxury custom kitchens and bespoke cabinetry for Pebble Beach homes. Expert kitchen design and construction serving this exclusive coastal community with museum-grade craftsmanship.',
  keywords: [
    'custom kitchens pebble beach',
    'kitchen design pebble beach',
    'cabinetry pebble beach',
    'pebble beach kitchens',
    'monterey bay kitchen design',
    'luxury kitchens pebble beach',
    'custom cabinetry pebble beach',
    'kitchen remodeling pebble beach',
    'bespoke kitchens pebble beach'
  ],
  openGraph: {
    title: 'Custom Kitchens Pebble Beach | Kitchen Design & Cabinetry | PineWood Cabinets',
    description: 'Luxury custom kitchens and bespoke cabinetry for Pebble Beach homes in Monterey Bay.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchens Pebble Beach",
  "Luxury custom kitchens and bespoke cabinetry for Pebble Beach homes in Monterey Bay",
  "Kitchen Design & Cabinetry",
  ["Pebble Beach, CA", "Monterey Bay, CA", "Carmel, CA"]
)

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Service Areas', href: '/service-areas' },
  { name: 'Monterey Bay', href: '/service-areas/monterey-bay' },
  { name: 'Pebble Beach', href: '/service-areas/monterey-bay/pebble-beach' }
]

export default function PebbleBeachPage() {
  return (
    <ServiceAreaPageLayout
      location="Pebble Beach"
      service="Kitchen Design & Cabinetry"
      structuredData={{ service: serviceSchema }}
    >
      <Breadcrumbs items={breadcrumbs} />
      
      <ServiceAreaHero
        location="Pebble Beach"
        service="Kitchen Design & Cabinetry"
        description="Serving Pebble Beach's exclusive community with luxury custom kitchens and bespoke cabinetry that celebrate the world-class golf, coastal beauty, and sophisticated lifestyle of this prestigious Monterey Bay destination."
        imageSrc="service-areas/pebble-beach-kitchen-hero.webp"
        imageAlt="Luxury custom kitchen in Pebble Beach home with golf course and ocean views"
      />

      {/* Pebble Beach Kitchen Services Overview */}
      <ContentSection background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Pebble Beach Kitchen Excellence"
              description="Pebble Beach represents the pinnacle of luxury coastal living and world-class amenities. This exclusive Monterey Bay community attracts discerning homeowners who appreciate both the natural beauty and sophisticated lifestyle. Our Pebble Beach kitchen clients understand that true elegance lies in creating spaces that reflect the community's prestigious character while providing the functionality and comfort that luxury living demands."
            />
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              From stunning oceanfront estates to elegant golf course homes, Pebble Beach's exclusive residential landscape demands custom kitchen solutions that seamlessly blend luxury with functionality and uncompromising quality. The community's proximity to world-class golf courses, the Pacific Ocean, and the prestigious Pebble Beach Resorts creates unique opportunities for kitchen designs that celebrate both indoor and outdoor living while maintaining the highest standards of luxury and sophistication.
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
              src="/images/service-areas/pebble-beach-kitchen-overview.webp"
              alt="Luxury custom kitchen in Pebble Beach home with golf course and ocean views"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </ContentSection>

      {/* Kitchen Services */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Kitchen Services for Pebble Beach"
          description="Our comprehensive kitchen design and construction services are tailored to meet the unique needs of Pebble Beach's exclusive architectural styles and luxury lifestyle."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchens</h3>
            <p className="text-charcoal/70 mb-4">
              Complete custom kitchen transformation from design to completion, tailored to your Pebble Beach home's unique character and luxury lifestyle.
            </p>
            <Link href="/service-areas/monterey-bay/pebble-beach/custom-kitchen" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Cabinets</h3>
            <p className="text-charcoal/70 mb-4">
              Bespoke cabinetry solutions that combine luxury elegance with world-class functionality for your Pebble Beach home.
            </p>
            <Link href="/service-areas/monterey-bay/pebble-beach/kitchen-cabinets" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Design</h3>
            <p className="text-charcoal/70 mb-4">
              Professional kitchen design consultation and planning services for your Pebble Beach home renovation.
            </p>
            <Link href="/service-areas/monterey-bay/pebble-beach/kitchen-design" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Remodel</h3>
            <p className="text-charcoal/70 mb-4">
              Complete kitchen remodeling services that transform your Pebble Beach home while maintaining its luxury character.
            </p>
            <Link href="/service-areas/monterey-bay/pebble-beach/kitchen-remodel" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>
        </Grid>
      </ContentSection>

      {/* Pebble Beach Kitchen Process */}
      <ContentSection background="white" padding="xl">
        <SectionHeader
          title="Our Kitchen Design Process"
          description="Our proven kitchen design process ensures your Pebble Beach project exceeds expectations and perfectly reflects your vision while maintaining the highest standards of luxury and sophistication."
          centered
          className="mb-16"
        />

        <Grid columns={4} gap="lg">
          <Feature
            icon={<span className="text-2xl font-bold text-brass">1</span>}
            title="Luxury Consultation"
            description="Comprehensive consultation to understand your vision, needs, and budget for your Pebble Beach kitchen project, with special attention to luxury requirements and lifestyle needs."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">2</span>}
            title="Design Development"
            description="Creation of detailed design plans and 3D renderings for your Pebble Beach kitchen project, incorporating your preferences while maintaining luxury standards."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">3</span>}
            title="Construction"
            description="Professional construction and installation of your approved Pebble Beach kitchen design, with careful attention to luxury craftsmanship and quality."
          />

          <Feature
            icon={<span className="text-2xl font-bold text-brass">4</span>}
            title="Final Walkthrough"
            description="Comprehensive final walkthrough and project completion for your Pebble Beach kitchen project, ensuring everything meets our highest luxury standards."
          />
        </Grid>
      </ContentSection>

      {/* Pebble Beach Kitchen Philosophy */}
      <ContentSection background="charcoal" padding="xl" className="text-ivory">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Designed for Pebble Beach Living"
              description="Pebble Beach's unique luxury character and coastal environment creates distinct requirements for kitchen projects. Our approach honors the community's prestigious heritage while delivering the functionality and elegance that luxury living demands."
              className="text-ivory"
            />
            <p className="text-lg text-ivory/80 mb-8 leading-relaxed">
              From morning coffee overlooking the golf course to evening entertaining that celebrates the community's sophisticated lifestyle, every kitchen decision reflects an understanding of how Pebble Beach residents truly live and enjoy their luxury coastal lifestyle. The community's proximity to world-class golf courses, the Pacific Ocean, and the prestigious Pebble Beach Resorts creates unique opportunities for kitchen designs that celebrate both indoor and outdoor living while maintaining the highest standards of luxury and sophistication.
            </p>
          </div>
          <div className="space-y-6">
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Luxury Integration</h3>
              <p className="text-ivory/80">Kitchen designs that celebrate Pebble Beach's prestigious character while providing world-class functionality and luxury.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">Coastal Sophistication</h3>
              <p className="text-ivory/80">Custom solutions that work with Pebble Beach's unique coastal environment and luxury architectural styles.</p>
            </Card>
            <Card className="bg-ivory/10 border-ivory/20">
              <h3 className="text-xl font-semibold mb-3 text-ivory">World-Class Quality</h3>
              <p className="text-ivory/80">Sophisticated materials and finishes that reflect the refined taste and luxury lifestyle of Pebble Beach residents.</p>
            </Card>
          </div>
        </div>
      </ContentSection>

      {/* Featured Kitchen Projects */}
      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Featured Pebble Beach Kitchen Projects"
          description="Explore our portfolio of kitchen projects throughout Pebble Beach's most prestigious neighborhoods, showcasing our ability to work with various luxury architectural styles while maintaining the highest standards."
          centered
          className="mb-16"
        />

        <Grid columns={3} gap="lg">
          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/pebble-beach-kitchen-1.webp"
              alt="Luxury custom kitchen in Pebble Beach home with golf course views"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Golf Course Views</h3>
              <p className="text-charcoal/70 mb-4">Luxury kitchen with stunning golf course views that celebrates Pebble Beach's world-class golf heritage and coastal beauty.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Golf Course Views</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Luxury Design</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/pebble-beach-kitchen-2.webp"
              alt="Oceanfront kitchen in Pebble Beach home with panoramic ocean views"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Oceanfront Luxury</h3>
              <p className="text-charcoal/70 mb-4">Stunning oceanfront kitchen with panoramic ocean views that showcases Pebble Beach's coastal beauty and luxury living.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Ocean Views</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Luxury Living</span>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <img
              src="/images/portfolio/pebble-beach-kitchen-3.webp"
              alt="Modern luxury kitchen in Pebble Beach home with contemporary design"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Modern Luxury</h3>
              <p className="text-charcoal/70 mb-4">Contemporary luxury kitchen that seamlessly blends modern functionality with Pebble Beach's sophisticated coastal aesthetic.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Modern Luxury</span>
                <span className="px-3 py-1 bg-brass/10 text-brass text-sm rounded-full">Coastal Sophistication</span>
              </div>
            </div>
          </Card>
        </Grid>
      </ContentSection>

      {/* Pebble Beach Kitchen Materials */}
      <ContentSection background="white" padding="xl">
        <SectionHeader
          title="Premium Materials for Pebble Beach Kitchens"
          description="We use only the finest materials and finishes to ensure your Pebble Beach kitchen stands the test of time while maintaining its beauty and functionality in the luxury coastal environment."
          centered
          className="mb-16"
        />

        <Grid columns={2} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Luxury Hardwood Cabinetry</h3>
            <p className="text-charcoal/70 mb-4">
              Custom hardwood cabinetry crafted from the finest woods that complement Pebble Beach's luxury character. Each piece is hand-finished to perfection and built to last for generations while maintaining the highest standards of luxury and sophistication.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Premium Cherry, Maple, Oak, Walnut with luxury finishes</li>
              <li>• Hand-finished surfaces with traditional techniques</li>
              <li>• Custom hardware options</li>
              <li>• Soft-close mechanisms</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Natural Stone Countertops</h3>
            <p className="text-charcoal/70 mb-4">
              Beautiful natural stone countertops including granite, marble, and quartz that add elegance and durability to your Pebble Beach kitchen while complementing the luxury character.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Granite, Marble, Quartz with luxury appeal</li>
              <li>• Custom edge profiles</li>
              <li>• Seamless installation</li>
              <li>• Easy maintenance for luxury homes</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Premium Appliances</h3>
            <p className="text-charcoal/70 mb-4">
              High-end appliances from leading manufacturers that combine performance with style, perfectly integrated into your custom kitchen design while maintaining the luxury character of your Pebble Beach home.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Wolf, Sub-Zero, Viking with luxury integration</li>
              <li>• Custom panel integration</li>
              <li>• Smart home compatibility</li>
              <li>• Energy efficient options</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Hardware</h3>
            <p className="text-charcoal/70 mb-4">
              Hand-selected hardware and fixtures that add the perfect finishing touches to your Pebble Beach kitchen, from cabinet pulls to faucets and lighting, all designed to complement the luxury coastal aesthetic.
            </p>
            <ul className="text-sm text-charcoal/60 space-y-1">
              <li>• Designer cabinet hardware with luxury appeal</li>
              <li>• Premium faucets with coastal inspiration</li>
              <li>• Custom lighting that celebrates luxury character</li>
              <li>• Finishing touches that reflect coastal heritage</li>
            </ul>
          </Card>
        </Grid>
      </ContentSection>

      {/* FAQ Section */}
      <ContentSection background="ivory" padding="xl" maxWidth="2xl">
        <SectionHeader
          title="Pebble Beach Kitchen FAQ"
          description="Common questions about kitchen services in Pebble Beach"
          centered
          className="mb-16"
        />

        <div className="space-y-8">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">How long does a kitchen project take in Pebble Beach?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              A complete kitchen project in Pebble Beach typically takes 8-16 weeks from start to finish, depending on the scope of work and luxury requirements. This includes 3-4 weeks for design and planning, 2-3 weeks for permits and preparation, 6-8 weeks for construction and installation, and 2-3 weeks for finishing and cleanup. We work efficiently to minimize disruption to your luxury lifestyle while ensuring the highest quality results and luxury standards.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Do I need permits for my Pebble Beach kitchen project?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Most kitchen projects in Pebble Beach require permits, especially if you're making structural changes, moving electrical or plumbing, or making modifications that affect the home's systems. We handle all permit applications and inspections as part of our comprehensive service, ensuring your project meets all local building codes and regulations. This is particularly important in Pebble Beach due to the luxury character of many homes and the coastal environment.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">How do you handle luxury requirements in Pebble Beach?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              We take special care to meet the luxury requirements of Pebble Beach homes while maintaining functionality. This includes working with luxury materials, selecting finishes that complement the home's architectural style, and ensuring the highest standards of craftsmanship. We're experienced in working with various luxury styles and can help you create a kitchen that honors the home's character while meeting modern luxury needs.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Can you work with my home's luxury character?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Absolutely! We love working with Pebble Beach's luxury homes and are experienced in preserving their character while modernizing functionality. Whether you have a luxury estate, golf course home, or any other luxury style, we work closely with you to create a kitchen that respects the home's heritage while providing the modern luxury amenities you need. We can help you navigate any luxury requirements and ensure your project enhances rather than detracts from the home's luxury value.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">What makes your Pebble Beach kitchen projects special?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Our Pebble Beach kitchen projects are special because we understand the unique character of this luxury coastal community. We work with a wide range of architectural styles, from luxury estates to golf course homes, and we're experienced in incorporating luxury elements and coastal sophistication into our designs. Our attention to detail, commitment to quality, and understanding of luxury living create kitchens that are both beautiful and functional, perfectly suited to the Pebble Beach lifestyle.
            </p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Do you offer eco-friendly options for Pebble Beach kitchens?</h3>
            <p className="text-charcoal/70 leading-relaxed">
              Yes, we offer a wide range of eco-friendly options that are perfect for Pebble Beach's environmentally conscious community. This includes sustainable materials, energy-efficient appliances, low-VOC finishes, and water-saving fixtures. We can help you create a kitchen that not only looks beautiful but also aligns with your environmental values and contributes to a more sustainable future, all while maintaining the luxury character of your home.
            </p>
          </Card>
        </div>
      </ContentSection>
    </ServiceAreaPageLayout>
  )
}
