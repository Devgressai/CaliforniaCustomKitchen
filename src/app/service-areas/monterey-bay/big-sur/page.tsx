import { Metadata } from 'next'
import { ServiceAreaPageLayout } from '@/components/PageLayout'
import { ServiceAreaHero } from '@/components/StandardHero'
import { ContentSection, SectionHeader, Grid, Card } from '@/components/ContentSection'
import { generateServiceSchema } from '@/components/StructuredData'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Kitchens Big Sur | Kitchen Design & Cabinetry | PineWood Cabinets',
  description: 'Luxury custom kitchens and bespoke cabinetry for Big Sur homes. Expert kitchen design and construction serving this iconic coastal community.',
  keywords: [
    'custom kitchens big sur',
    'kitchen design big sur',
    'cabinetry big sur',
    'big sur kitchens',
    'monterey bay kitchen design',
    'luxury kitchens big sur'
  ],
  openGraph: {
    title: 'Custom Kitchens Big Sur | Kitchen Design & Cabinetry | PineWood Cabinets',
    description: 'Luxury custom kitchens and bespoke cabinetry for Big Sur homes in Monterey Bay.',
    type: 'website',
  },
}

const serviceSchema = generateServiceSchema(
  "Custom Kitchens Big Sur",
  "Luxury custom kitchens and bespoke cabinetry for Big Sur homes in Monterey Bay",
  "Kitchen Design & Cabinetry",
  ["Big Sur, CA", "Monterey Bay, CA", "Carmel, CA"]
)

export default function BigSurPage() {
  return (
    <ServiceAreaPageLayout
      location="Big Sur"
      service="Kitchen Design & Cabinetry"
      structuredData={{ service: serviceSchema }}
    >
      <ServiceAreaHero
        location="Big Sur"
        service="Kitchen Design & Cabinetry"
        description="Serving Big Sur's distinguished homeowners with luxury custom kitchens and bespoke cabinetry that celebrate the dramatic coastal beauty and artistic spirit of this iconic community."
        imageSrc="service-areas/big-sur-kitchen-hero.webp"
        imageAlt="Luxury custom kitchen in Big Sur home with dramatic coastal views"
      />

      <ContentSection background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Big Sur Kitchen Excellence"
              description="Big Sur represents the ultimate in dramatic coastal living and artistic inspiration. This iconic community attracts discerning homeowners who appreciate both natural beauty and refined craftsmanship."
            />
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              From cliffside retreats to forested hideaways, Big Sur's diverse residential landscape demands custom kitchen solutions that seamlessly blend dramatic coastal beauty with luxury functionality.
            </p>
          </div>
          <div className="relative">
            <img
              src="/images/service-areas/big-sur-kitchen-overview.webp"
              alt="Luxury custom kitchen in Big Sur home with dramatic coastal views"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </ContentSection>

      <ContentSection background="ivory" padding="xl">
        <SectionHeader
          title="Kitchen Services for Big Sur"
          description="Our comprehensive kitchen design and construction services are tailored to meet the unique needs of Big Sur's diverse architectural styles."
          centered
          className="mb-16"
        />

        <Grid columns={2} gap="lg">
          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Custom Kitchens</h3>
            <p className="text-charcoal/70 mb-4">
              Complete custom kitchen transformation tailored to your Big Sur home's unique character.
            </p>
            <Link href="/service-areas/monterey-bay/big-sur/custom-kitchen" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Cabinets</h3>
            <p className="text-charcoal/70 mb-4">
              Bespoke cabinetry solutions that celebrate Big Sur's dramatic coastal beauty.
            </p>
            <Link href="/service-areas/monterey-bay/big-sur/kitchen-cabinets" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Design</h3>
            <p className="text-charcoal/70 mb-4">
              Professional kitchen design consultation and planning services.
            </p>
            <Link href="/service-areas/monterey-bay/big-sur/kitchen-design" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-charcoal mb-4">Kitchen Remodel</h3>
            <p className="text-charcoal/70 mb-4">
              Complete kitchen remodeling services that honor your home's coastal character.
            </p>
            <Link href="/service-areas/monterey-bay/big-sur/kitchen-remodel" className="text-brass hover:text-brass/80 font-medium">
              Learn More →
            </Link>
          </Card>
        </Grid>
      </ContentSection>
    </ServiceAreaPageLayout>
  )
}
