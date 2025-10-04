import Link from 'next/link'
import { ExternalLink, MapPin, Phone, Globe } from 'lucide-react'

interface Citation {
  name: string
  url: string
  description: string
  icon: React.ReactNode
  category: 'directory' | 'review' | 'social' | 'industry'
}

const citations: Citation[] = [
  {
    name: 'Google My Business',
    url: 'https://g.page/pinewood-cabinets-roseville',
    description: 'Find us on Google Maps and leave a review',
    icon: <MapPin className="w-5 h-5" />,
    category: 'directory'
  },
  {
    name: 'Yelp',
    url: 'https://www.yelp.com/biz/pinewood-cabinets-roseville',
    description: 'Read reviews and see our business profile',
    icon: <ExternalLink className="w-5 h-5" />,
    category: 'review'
  },
  {
    name: 'Houzz',
    url: 'https://www.houzz.com/pro/pinewoodcabinets',
    description: 'Browse our portfolio and design ideas',
    icon: <Globe className="w-5 h-5" />,
    category: 'industry'
  },
  {
    name: 'Better Business Bureau',
    url: 'https://www.bbb.org/us/ca/roseville/profile/cabinet-maker/pinewood-cabinets-llc',
    description: 'Check our BBB rating and business profile',
    icon: <ExternalLink className="w-5 h-5" />,
    category: 'directory'
  },
  {
    name: 'Angie\'s List',
    url: 'https://www.angi.com/companylist/us/ca/roseville/pinewood-cabinets-llc',
    description: 'Read verified customer reviews',
    icon: <ExternalLink className="w-5 h-5" />,
    category: 'review'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/pinewoodcabinets',
    description: 'Follow us for project updates and inspiration',
    icon: <Globe className="w-5 h-5" />,
    category: 'social'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/pinewoodcabinets',
    description: 'See our latest projects and behind-the-scenes',
    icon: <Globe className="w-5 h-5" />,
    category: 'social'
  },
  {
    name: 'HomeAdvisor',
    url: 'https://www.homeadvisor.com/rated.pinewoodcabinets.123456789.html',
    description: 'View our verified contractor profile',
    icon: <ExternalLink className="w-5 h-5" />,
    category: 'industry'
  }
]

interface LocalCitationsProps {
  title?: string
  description?: string
  showCategories?: boolean
  className?: string
}

export function LocalCitations({ 
  title = "Find Us Online",
  description = "Connect with us across multiple platforms and directories",
  showCategories = true,
  className = ""
}: LocalCitationsProps) {
  const groupedCitations = citations.reduce((acc, citation) => {
    if (!acc[citation.category]) {
      acc[citation.category] = []
    }
    acc[citation.category].push(citation)
    return acc
  }, {} as Record<string, Citation[]>)

  const categoryLabels = {
    directory: 'Business Directories',
    review: 'Review Platforms',
    social: 'Social Media',
    industry: 'Industry Platforms'
  }

  return (
    <div className={`bg-white ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 font-display">
          {title}
        </h2>
        <p className="text-lg text-charcoal/80 max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      {showCategories ? (
        <div className="space-y-12">
          {Object.entries(groupedCitations).map(([category, categoryCitations]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-charcoal mb-6 text-center">
                {categoryLabels[category as keyof typeof categoryLabels]}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {categoryCitations.map((citation) => (
                  <Link
                    key={citation.name}
                    href={citation.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-ivory rounded-lg p-4 border border-french-gray/20 hover:border-deep-green/50 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="text-deep-green group-hover:text-charcoal transition-colors">
                        {citation.icon}
                      </div>
                      <span className="font-semibold text-charcoal group-hover:text-deep-green transition-colors">
                        {citation.name}
                      </span>
                    </div>
                    <p className="text-sm text-charcoal/70 group-hover:text-charcoal/90 transition-colors">
                      {citation.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {citations.map((citation) => (
            <Link
              key={citation.name}
              href={citation.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-ivory rounded-lg p-4 border border-french-gray/20 hover:border-deep-green/50 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="text-deep-green group-hover:text-charcoal transition-colors">
                  {citation.icon}
                </div>
                <span className="font-semibold text-charcoal group-hover:text-deep-green transition-colors">
                  {citation.name}
                </span>
              </div>
              <p className="text-sm text-charcoal/70 group-hover:text-charcoal/90 transition-colors">
                {citation.description}
              </p>
            </Link>
          ))}
        </div>
      )}

      {/* Business Information for Citations */}
      <div className="mt-12 bg-deep-green/5 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-charcoal mb-4 text-center">
          Business Information for Citations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-charcoal mb-2">Business Details</h4>
            <div className="space-y-1 text-charcoal/80">
              <p><strong>Name:</strong> PineWood Cabinets</p>
              <p><strong>Address:</strong> 2281 Lava Ridge Ct Ste. 200, Roseville, CA 95661</p>
              <p><strong>Phone:</strong> (916) 742-0030</p>
              <p><strong>Website:</strong> https://california-custom-kitchen.vercel.app</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-charcoal mb-2">Business Hours</h4>
            <div className="space-y-1 text-charcoal/80">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
              <p><strong>Categories:</strong> Cabinet Maker, Kitchen Designer, Custom Furniture</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Schema markup for local business citations
export function LocalCitationsSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "PineWood Cabinets",
          "description": "Museum-grade custom kitchens, bespoke cabinetry, and architectural millwork for California's finest homes",
          "url": "https://california-custom-kitchen.vercel.app",
          "telephone": "+1-916-742-0030",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2281 Lava Ridge Ct Ste. 200",
            "addressLocality": "Roseville",
            "addressRegion": "CA",
            "postalCode": "95661",
            "addressCountry": "US"
          },
          "openingHours": "Mo-Fr 09:00-18:00,Sa 10:00-16:00",
          "priceRange": "$$$",
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "38.7521",
              "longitude": "-121.2880"
            },
            "geoRadius": "200000"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Kitchen Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Custom Kitchen Design",
                  "description": "Bespoke kitchen design and consultation services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Cabinet Manufacturing",
                  "description": "Custom cabinet construction and installation"
                }
              }
            ]
          }
        })
      }}
    />
  )
}
