interface OrganizationData {
  name: string
  description: string
  url: string
  logo?: string
  address?: {
    streetAddress?: string
    addressLocality: string
    addressRegion: string
    postalCode?: string
    addressCountry: string
  }
  contactPoint?: {
    telephone?: string
    contactType: string
    availableLanguage: string
  }
  sameAs?: string[]
}

interface LocalBusinessData extends OrganizationData {
  geo?: {
    latitude: string
    longitude: string
  }
  areaServed?: {
    name: string
    sameAs?: string
  }
  serviceType?: string[]
  priceRange?: string
  openingHours?: string[]
}

interface BreadcrumbData {
  items: Array<{
    name: string
    url: string
  }>
}

interface ProductData {
  name: string
  description: string
  brand: string
  category: string
  offers?: {
    priceCurrency: string
    availability: string
  }
  aggregateRating?: {
    ratingValue: string
    reviewCount: string
  }
}

interface ServiceData {
  name: string
  description: string
  provider: OrganizationData
  areaServed?: string[]
  serviceType: string
  category: string
}

interface ArticleData {
  headline: string
  description: string
  author: {
    name: string
    type: 'Organization' | 'Person'
  }
  publisher: OrganizationData
  datePublished: string
  dateModified?: string
  image?: string[]
  articleSection?: string
  wordCount?: number
}

interface StructuredDataProps {
  organization?: OrganizationData
  localBusiness?: LocalBusinessData
  breadcrumb?: BreadcrumbData
  product?: ProductData
  service?: ServiceData
  article?: ArticleData
}

export function StructuredData({
  organization,
  localBusiness,
  breadcrumb,
  product,
  service,
  article
}: StructuredDataProps) {
  const generateSchema = () => {
    const schemas = []

    if (organization) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Organization",
        ...organization
      })
    }

    if (localBusiness) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        ...localBusiness
      })
    }

    if (breadcrumb) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumb.items.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url
        }))
      })
    }

    if (product) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Product",
        ...product
      })
    }

    if (service) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        ...service
      })
    }

    if (article) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Article",
        ...article
      })
    }

    return schemas.length === 1 ? schemas[0] : schemas
  }

  const schema = generateSchema()

  if (!schema || (Array.isArray(schema) && schema.length === 0)) {
    return null
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2)
      }}
    />
  )
}

// Predefined schemas for common use cases
export const organizationSchema: OrganizationData = {
  name: "AV's Cabinets",
  description: "Custom kitchens, bespoke cabinetry, and architectural millwork for California's finest homes",
  url: "https://california-custom-kitchen.vercel.app",
  logo: "https://california-custom-kitchen.vercel.app/images/logo.svg",
  address: {
    addressLocality: "California",
    addressRegion: "CA",
    addressCountry: "US"
  },
  contactPoint: {
    contactType: "customer service",
    availableLanguage: "English"
  },
  sameAs: []
}

export function generateLocalBusinessSchema(location: string, coordinates?: { lat: string; lng: string }): LocalBusinessData {
  return {
    ...organizationSchema,
    geo: coordinates ? {
      latitude: coordinates.lat,
      longitude: coordinates.lng
    } : undefined,
    areaServed: {
      name: location
    },
    serviceType: [
      "Custom Kitchen Cabinets",
      "Luxury Cabinetry",
      "Architectural Millwork",
      "Bespoke Furniture"
    ],
    priceRange: "$$$",
    openingHours: [
      "Mo-Fr 09:00-17:00"
    ]
  }
}

export function generateServiceSchema(serviceName: string, description: string, category: string): ServiceData {
  return {
    name: serviceName,
    description: description,
    provider: organizationSchema,
    areaServed: [
      "Atherton, CA",
      "Montecito, CA",
      "Palo Alto, CA",
      "Beverly Hills, CA",
      "Marin County, CA",
      "Lake Tahoe, CA"
    ],
    serviceType: serviceName,
    category: category
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>): BreadcrumbData {
  return { items }
}
