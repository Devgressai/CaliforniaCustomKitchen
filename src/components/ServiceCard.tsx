import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface ServiceCardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  href: string
  features?: string[]
  isLarge?: boolean
}

export function ServiceCard({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  features = [],
  isLarge = false
}: ServiceCardProps) {
  return (
    <article className={`group ${isLarge ? 'md:col-span-2' : ''}`}>
      <Link href={href} className="block h-full">
        <div className="relative h-full bg-ivory border border-french-gray/20 hover:border-deep-green/30 transition-all duration-300 hover:shadow-lg">
          {/* Image */}
          <div className={`relative overflow-hidden ${isLarge ? 'aspect-[2/1]' : 'aspect-[4/3]'}`}>
            <Image
              src={`/images/${imageSrc}`}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes={isLarge ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="p-8">
            <h3 className="font-display text-2xl font-semibold text-charcoal mb-4 group-hover:text-deep-green transition-colors duration-200">
              {title}
            </h3>
            
            <p className="text-charcoal/80 leading-relaxed mb-6">
              {description}
            </p>

            {features.length > 0 && (
              <ul className="space-y-2 mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="text-sm text-charcoal/70 flex items-start">
                    <span className="w-1 h-1 bg-brass rounded-full mt-2 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex items-center text-deep-green font-medium text-sm tracking-wide">
              Learn More
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
