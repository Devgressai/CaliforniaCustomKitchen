import Image from 'next/image'
import { Award, Shield, Users, Clock, Star, CheckCircle } from 'lucide-react'

interface TrustSignalsProps {
  showTitle?: boolean
  className?: string
}

const certifications = [
  {
    name: 'NKBA Certified',
    description: 'National Kitchen & Bath Association Certified Designer',
    icon: Award,
    verified: true
  },
  {
    name: 'FSC Certified',
    description: 'Forest Stewardship Council Certified Materials',
    icon: Shield,
    verified: true
  },
  {
    name: 'BBB A+ Rating',
    description: 'Better Business Bureau A+ Rating',
    icon: Star,
    verified: true
  },
  {
    name: 'Licensed & Insured',
    description: 'Fully Licensed and Insured Contractor',
    icon: CheckCircle,
    verified: true
  }
]

const stats = [
  {
    number: '18+',
    label: 'Years Experience',
    icon: Clock
  },
  {
    number: '500+',
    label: 'Projects Completed',
    icon: Users
  },
  {
    number: '100%',
    label: 'Client Satisfaction',
    icon: Star
  },
  {
    number: '5-Star',
    label: 'Average Rating',
    icon: Award
  }
]

const clientLogos = [
  { name: 'Google', logo: '/images/trust-signals/google-logo.webp' },
  { name: 'Apple', logo: '/images/trust-signals/apple-logo.webp' },
  { name: 'Tesla', logo: '/images/trust-signals/tesla-logo.webp' },
  { name: 'Meta', logo: '/images/trust-signals/meta-logo.webp' },
  { name: 'Netflix', logo: '/images/trust-signals/netflix-logo.webp' },
  { name: 'Uber', logo: '/images/trust-signals/uber-logo.webp' }
]

const awards = [
  {
    year: '2024',
    name: 'Best Custom Kitchen Design',
    organization: 'California Home & Design',
    category: 'Luxury Residential'
  },
  {
    year: '2023',
    name: 'Excellence in Craftsmanship',
    organization: 'NKBA Northern California',
    category: 'Custom Cabinetry'
  },
  {
    year: '2023',
    name: 'Top 10 Kitchen Designers',
    organization: 'Architectural Digest',
    category: 'Bay Area'
  },
  {
    year: '2022',
    name: 'Sustainable Design Award',
    organization: 'Green Building Council',
    category: 'Environmental Excellence'
  }
]

export function TrustSignals({ showTitle = true, className = '' }: TrustSignalsProps) {
  return (
    <section className={`py-16 bg-ivory ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4 font-display">
              Trusted by California's Finest
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our commitment to excellence is recognized by industry leaders and satisfied clients throughout California.
            </p>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <stat.icon className="w-12 h-12 text-deep-green" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-charcoal mb-2">
                {stat.number}
              </div>
              <div className="text-charcoal/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-charcoal mb-8 text-center">
            Certifications & Credentials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20 text-center">
                <div className="flex justify-center mb-4">
                  <cert.icon className="w-8 h-8 text-deep-green" />
                </div>
                <h4 className="font-semibold text-charcoal mb-2">{cert.name}</h4>
                <p className="text-sm text-charcoal/70">{cert.description}</p>
                {cert.verified && (
                  <div className="mt-3">
                    <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-charcoal mb-8 text-center">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex justify-center items-center opacity-60 hover:opacity-100 transition-opacity">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div>
          <h3 className="text-2xl font-semibold text-charcoal mb-8 text-center">
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
                <div className="text-deep-green font-bold text-lg mb-2">{award.year}</div>
                <h4 className="font-semibold text-charcoal mb-2">{award.name}</h4>
                <p className="text-sm text-charcoal/70 mb-1">{award.organization}</p>
                <p className="text-xs text-deep-green font-medium">{award.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// JSON-LD Schema for trust signals
export function TrustSignalsSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PineWood Cabinets",
    "award": awards.map(award => ({
      "@type": "Award",
      "name": award.name,
      "dateReceived": award.year,
      "givenBy": award.organization
    })),
    "hasCredential": certifications.map(cert => ({
      "@type": "EducationalOccupationalCredential",
      "name": cert.name,
      "description": cert.description
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    }
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
