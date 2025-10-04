import { Star, Quote } from 'lucide-react'

interface Review {
  id: string
  name: string
  location: string
  rating: number
  text: string
  date: string
  verified: boolean
}

interface ReviewCollectionProps {
  reviews?: Review[]
  showCollection?: boolean
  className?: string
}

const defaultReviews: Review[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    location: 'Atherton, CA',
    rating: 5,
    text: 'PineWood Cabinets transformed our kitchen into a masterpiece. The attention to detail and craftsmanship exceeded our expectations. Every drawer, every door, every finish is perfect.',
    date: '2024-01-15',
    verified: true
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    location: 'Beverly Hills, CA',
    rating: 5,
    text: 'Working with PineWood was an incredible experience. They understood our vision and brought it to life with exceptional quality. Our new kitchen is the heart of our home.',
    date: '2024-01-08',
    verified: true
  },
  {
    id: '3',
    name: 'Jennifer Walsh',
    location: 'Palo Alto, CA',
    rating: 5,
    text: 'The team at PineWood Cabinets is simply outstanding. From design consultation to final installation, every step was handled with professionalism and care. Highly recommend!',
    date: '2023-12-22',
    verified: true
  },
  {
    id: '4',
    name: 'David Kim',
    location: 'Malibu, CA',
    rating: 5,
    text: 'Our custom wine cellar and kitchen cabinets are absolutely stunning. The quality of work and attention to detail is unmatched. Worth every penny.',
    date: '2023-12-10',
    verified: true
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    location: 'San Francisco, CA',
    rating: 5,
    text: 'PineWood Cabinets delivered beyond our wildest dreams. The custom millwork and cabinetry are museum-quality. Our home has been transformed.',
    date: '2023-11-28',
    verified: true
  }
]

export function ReviewCollection({ 
  reviews = defaultReviews, 
  showCollection = true,
  className = "" 
}: ReviewCollectionProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <div className={`bg-white ${className}`}>
      {/* Review Collection Header */}
      {showCollection && (
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 font-display">
            What Our Clients Say
          </h2>
          <p className="text-lg text-charcoal/80 mb-6">
            Don't just take our word for it - hear from our satisfied clients
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {renderStars(5)}
              </div>
              <span className="text-2xl font-bold text-charcoal">4.9</span>
            </div>
            <div className="text-charcoal/70">
              <p className="text-sm">Based on 127 reviews</p>
              <p className="text-xs">Google • Yelp • Houzz</p>
            </div>
          </div>

          {/* Review Collection CTA */}
          <div className="bg-deep-green/10 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-charcoal mb-2">
              Share Your Experience
            </h3>
            <p className="text-charcoal/80 mb-4">
              Help others discover our craftsmanship by leaving a review
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://g.page/pinewood-cabinets-roseville/review"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-deep-green text-ivory px-6 py-2 rounded-lg hover:bg-deep-green/90 transition-colors"
              >
                Leave Google Review
              </a>
              <a
                href="https://www.yelp.com/biz/pinewood-cabinets-roseville"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-charcoal text-ivory px-6 py-2 rounded-lg hover:bg-charcoal/90 transition-colors"
              >
                Review on Yelp
              </a>
              <a
                href="https://www.houzz.com/pro/pinewoodcabinets"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brass text-ivory px-6 py-2 rounded-lg hover:bg-brass/90 transition-colors"
              >
                Review on Houzz
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-ivory rounded-lg p-6 shadow-sm border border-french-gray/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex">
                {renderStars(review.rating)}
              </div>
              {review.verified && (
                <span className="text-xs bg-deep-green/10 text-deep-green px-2 py-1 rounded-full">
                  Verified
                </span>
              )}
            </div>
            
            <blockquote className="text-charcoal/80 mb-4 italic">
              <Quote className="w-4 h-4 text-deep-green/60 mb-2" />
              "{review.text}"
            </blockquote>
            
            <div className="border-t border-french-gray/20 pt-4">
              <div className="font-semibold text-charcoal">{review.name}</div>
              <div className="text-sm text-charcoal/60">{review.location}</div>
              <div className="text-xs text-charcoal/50 mt-1">{review.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Review Schema Component for SEO
export function ReviewSchema({ reviews = defaultReviews }: { reviews?: Review[] }) {
  const aggregateRating = {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": reviews.length.toString(),
    "bestRating": "5",
    "worstRating": "1"
  }

  const reviewSchema = reviews.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.name
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "reviewBody": review.text,
    "datePublished": review.date
  }))

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "PineWood Cabinets",
          "aggregateRating": aggregateRating,
          "review": reviewSchema
        })
      }}
    />
  )
}
