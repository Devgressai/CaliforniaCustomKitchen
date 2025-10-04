import { ReactNode } from 'react'
import { Breadcrumbs } from './Breadcrumbs'
import { CTASection } from './CTASection'
import { StructuredData } from './StructuredData'

interface BreadcrumbItem {
  name: string
  href: string
  current?: boolean
}

interface PageLayoutProps {
  children: ReactNode
  breadcrumbs?: BreadcrumbItem[]
  showCTA?: boolean
  ctaTitle?: string
  ctaDescription?: string
  ctaButtonText?: string
  ctaButtonHref?: string
  structuredData?: any
  className?: string
}

export function PageLayout({
  children,
  breadcrumbs,
  showCTA = true,
  ctaTitle = "Ready to Transform Your Kitchen?",
  ctaDescription = "Let's discuss your vision and create something extraordinary together.",
  ctaButtonText = "Request Consultation",
  ctaButtonHref = "/contact",
  structuredData,
  className = ""
}: PageLayoutProps) {
  return (
    <>
      {structuredData && <StructuredData {...structuredData} />}
      
      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <section className="bg-ivory py-6">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        </section>
      )}
      
      {/* Main Content */}
      <main className={`min-h-screen ${className}`}>
        {children}
      </main>
      
      {/* CTA Section */}
      {showCTA && (
        <CTASection
          title={ctaTitle}
          description={ctaDescription}
          primaryCTA={{
            text: ctaButtonText,
            href: ctaButtonHref
          }}
        />
      )}
    </>
  )
}

// Pre-configured layouts for different page types
export function ServiceAreaPageLayout({
  children,
  location,
  service,
  structuredData,
  className = ""
}: {
  children: ReactNode
  location: string
  service: string
  structuredData?: any
  className?: string
}) {
  const breadcrumbs = [
    { name: 'Service Areas', href: '/service-areas' },
    { name: location, href: `/service-areas/${location.toLowerCase().replace(/\s+/g, '-')}` },
    { name: service, href: `/service-areas/${location.toLowerCase().replace(/\s+/g, '-')}/${service.toLowerCase().replace(/\s+/g, '-')}`, current: true }
  ]

  return (
    <>
      {structuredData && <StructuredData {...structuredData} />}

      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </section>

      {/* Main Content */}
      <main className={`min-h-screen ${className}`}>
        {children}
      </main>

      {/* CTA Section */}
      <CTASection
        title={`Ready to Create Your Dream ${service?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} in ${location?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}?`}
        description={`Contact PineWood Cabinets Today`}
        primaryCTA={{
          text: `Schedule Consultation`,
          href: `/contact`
        }}
      />
    </>
  )
}

export function ServicePageLayout({
  children,
  service,
  structuredData,
  className = ""
}: {
  children: ReactNode
  service: string
  structuredData?: any
  className?: string
}) {
  const breadcrumbs = [
    { name: 'Services', href: '/services' },
    { name: service, href: `/services/${service.toLowerCase().replace(/\s+/g, '-')}`, current: true }
  ]

  return (
    <>
      {structuredData && <StructuredData {...structuredData} />}

      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </section>

      {/* Main Content */}
      <main className={`min-h-screen ${className}`}>
        {children}
      </main>

      {/* CTA Section */}
      <CTASection
        title={`Ready to Create Your Dream ${service?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}?`}
        description={`Contact PineWood Cabinets Today`}
        primaryCTA={{
          text: `Schedule Consultation`,
          href: `/contact`
        }}
      />
    </>
  )
}

export function MaterialsPageLayout({
  children,
  material,
  structuredData,
  className = ""
}: {
  children: ReactNode
  material?: string
  structuredData?: any
  className?: string
}) {
  const breadcrumbs = [
    { name: 'Materials', href: '/materials' },
    ...(material ? [{ name: material, href: `/materials/${material.toLowerCase().replace(/\s+/g, '-')}`, current: true }] : [])
  ]

  return (
    <>
      {structuredData && <StructuredData {...structuredData} />}

      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </section>

      {/* Main Content */}
      <main className={`min-h-screen ${className}`}>
        {children}
      </main>

      {/* CTA Section */}
      <CTASection
        title={`Ready to Create Your Dream Kitchen with Premium Materials?`}
        description={`Contact PineWood Cabinets Today`}
        primaryCTA={{
          text: `Schedule Consultation`,
          href: `/contact`
        }}
      />
    </>
  )
}

export function PortfolioPageLayout({
  children,
  project,
  structuredData,
  className = ""
}: {
  children: ReactNode
  project?: string
  structuredData?: any
  className?: string
}) {
  const breadcrumbs = [
    { name: 'Portfolio', href: '/portfolio' },
    ...(project ? [{ name: project, href: `/portfolio/${project.toLowerCase().replace(/\s+/g, '-')}`, current: true }] : [])
  ]

  return (
    <>
      {structuredData && <StructuredData {...structuredData} />}

      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </section>

      {/* Main Content */}
      <main className={`min-h-screen ${className}`}>
        {children}
      </main>

      {/* CTA Section */}
      <CTASection
        title={`Ready to Create Your Dream Kitchen?`}
        description={`Contact PineWood Cabinets Today`}
        primaryCTA={{
          text: `Schedule Consultation`,
          href: `/contact`
        }}
      />
    </>
  )
}

export function JournalPageLayout({
  children,
  article,
  structuredData,
  className = ""
}: {
  children: ReactNode
  article?: string
  structuredData?: any
  className?: string
}) {
  const breadcrumbs = [
    { name: 'Journal', href: '/journal' },
    ...(article ? [{ name: article, href: `/journal/${article.toLowerCase().replace(/\s+/g, '-')}`, current: true }] : [])
  ]

  return (
    <>
      {structuredData && <StructuredData {...structuredData} />}

      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </section>

      {/* Main Content */}
      <main className={`min-h-screen ${className}`}>
        {children}
      </main>

      {/* CTA Section */}
      <CTASection
        title={`Ready to Create Your Dream Kitchen?`}
        description={`Contact PineWood Cabinets Today`}
        primaryCTA={{
          text: `Schedule Consultation`,
          href: `/contact`
        }}
      />
    </>
  )
}

export function ProcessPageLayout({
  children,
  process,
  structuredData,
  className = ""
}: {
  children: ReactNode
  process?: string
  structuredData?: any
  className?: string
}) {
  const breadcrumbs = [
    { name: 'Process', href: '/process' },
    ...(process ? [{ name: process, href: `/process/${process.toLowerCase().replace(/\s+/g, '-')}`, current: true }] : [])
  ]

  return (
    <>
      {structuredData && <StructuredData {...structuredData} />}

      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </section>

      {/* Main Content */}
      <main className={`min-h-screen ${className}`}>
        {children}
      </main>

      {/* CTA Section */}
      <CTASection
        title={`Ready to Create Your Dream Kitchen?`}
        description={`Contact PineWood Cabinets Today`}
        primaryCTA={{
          text: `Schedule Consultation`,
          href: `/contact`
        }}
      />
    </>
  )
}
