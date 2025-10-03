import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  location: string
  project: string
  rating: number
  text: string
  image: string
  verified?: boolean
}

interface TestimonialsProps {
  testimonials?: Testimonial[]
  showTitle?: boolean
  maxItems?: number
  className?: string
}

const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    location: 'Atherton, CA',
    project: 'Custom Kitchen Renovation',
    rating: 5,
    text: 'PineWood Cabinets transformed our kitchen into a masterpiece. The attention to detail and craftsmanship exceeded our expectations. Every drawer, every door, every detail was perfect.',
    image: '/images/testimonials/sarah-chen.webp',
    verified: true
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    location: 'Beverly Hills, CA',
    project: 'Bespoke Cabinetry & Wine Room',
    rating: 5,
    text: 'Working with PineWood Cabinets was an absolute pleasure. Their team understood our vision and brought it to life with incredible skill. The wine room is now the centerpiece of our home.',
    image: '/images/testimonials/michael-rodriguez.webp',
    verified: true
  },
  {
    id: '3',
    name: 'Jennifer Walsh',
    location: 'Palo Alto, CA',
    project: 'Modern Kitchen Design',
    rating: 5,
    text: 'The quality of work is exceptional. Our kitchen looks like it belongs in a luxury magazine. The team was professional, punctual, and delivered exactly what they promised.',
    image: '/images/testimonials/jennifer-walsh.webp',
    verified: true
  },
  {
    id: '4',
    name: 'David Kim',
    location: 'Malibu, CA',
    project: 'Coastal Kitchen Renovation',
    rating: 5,
    text: 'PineWood Cabinets created a stunning coastal kitchen that perfectly captures the Malibu lifestyle. The materials they selected and the craftsmanship are second to none.',
    image: '/images/testimonials/david-kim.webp',
    verified: true
  },
  {
    id: '5',
    name: 'Amanda Thompson',
    location: 'Montecito, CA',
    project: 'Wine Country Kitchen',
    rating: 5,
    text: 'From concept to completion, PineWood Cabinets delivered excellence. Our wine country kitchen is both beautiful and functional, with every detail carefully considered.',
    image: '/images/testimonials/amanda-thompson.webp',
    verified: true
  },
  {
    id: '6',
    name: 'Robert Chen',
    location: 'Lake Tahoe, CA',
    project: 'Mountain Lodge Kitchen',
    rating: 5,
    text: 'The team at PineWood Cabinets created a kitchen that perfectly complements our Lake Tahoe home. The rustic elegance and attention to detail are remarkable.',
    image: '/images/testimonials/robert-chen.webp',
    verified: true
  }
]

export function Testimonials({ 
  testimonials = defaultTestimonials, 
  showTitle = true, 
  maxItems = 6,
  className = '' 
}: TestimonialsProps) {
  const displayTestimonials = testimonials.slice(0, maxItems)

  return (
    <section className={`py-16 bg-grain ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4 font-display">
              What Our Clients Say
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about their PineWood Cabinets experience.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 mr-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                {testimonial.verified && (
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                    Verified
                  </span>
                )}
              </div>

              <div className="mb-4">
                <Quote className="w-6 h-6 text-deep-green/30 mb-2" />
                <p className="text-charcoal/80 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} testimonial`}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal">{testimonial.name}</h4>
                  <p className="text-sm text-charcoal/60">{testimonial.location}</p>
                  <p className="text-xs text-deep-green font-medium">{testimonial.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-charcoal/60">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
              <span className="font-semibold">4.9/5</span>
              <span className="ml-1">Average Rating</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold">150+</span>
              <span className="ml-1">Happy Clients</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold">18+</span>
              <span className="ml-1">Years Experience</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold">100%</span>
              <span className="ml-1">Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// JSON-LD Schema for testimonials
export function TestimonialsSchema({ testimonials = defaultTestimonials }: { testimonials?: Testimonial[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PineWood Cabinets",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": testimonials.map(testimonial => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": testimonial.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating,
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": testimonial.text,
      "datePublished": "2024-01-01"
    }))
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
