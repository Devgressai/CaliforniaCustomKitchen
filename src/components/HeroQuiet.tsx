import Link from 'next/link'
import Image from 'next/image'

interface HeroQuietProps {
  title: string
  subtitle?: string
  description: string
  imageSrc: string
  imageAlt?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  overlay?: boolean
}

export function HeroQuiet({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  primaryCTA,
  secondaryCTA,
  overlay = true
}: HeroQuietProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={`/images/${imageSrc}`}
          alt={imageAlt || 'AV\'s Cabinets luxury cabinetry'}
          fill
          priority={true}
          quality={95}
          className="object-cover"
          sizes="100vw"
        />
        {overlay && (
          <div className="absolute inset-0 bg-charcoal/30" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="fade-in">
          {subtitle && (
            <p className="text-sm tracking-[0.2em] uppercase text-ivory/90 mb-4 font-medium">
              {subtitle}
            </p>
          )}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-ivory mb-6 text-balance">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-ivory/90 leading-relaxed mb-12 max-w-3xl mx-auto text-balance">
            {description}
          </p>
          
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className="btn-primary bg-ivory text-deep-green hover:bg-ivory/90"
                >
                  {primaryCTA.text}
                </Link>
              )}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="btn-ghost border-ivory text-ivory hover:bg-ivory hover:text-deep-green"
                >
                  {secondaryCTA.text}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-ivory/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-ivory/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
