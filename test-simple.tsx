import { ServiceAreaPageLayout } from '@/components/PageLayout'

export default function TestPage() {
  return (
    <ServiceAreaPageLayout
      location="test"
      service="test"
      structuredData={{ service: {} }}
    >
      <div>Test content</div>
    </ServiceAreaPageLayout>
  )
}
