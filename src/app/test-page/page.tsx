import { ServiceAreaPageLayout } from '../../components/TestPageLayout'

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
