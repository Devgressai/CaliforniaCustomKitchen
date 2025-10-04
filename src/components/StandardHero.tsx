import { ReactNode } from 'react'

interface StandardHeroProps {
  title: string
  subtitle?: string
  description: string
  imageSrc: string
  imageAlt: string
  children?: ReactNode
  className?: string
  variant?: 'default' | 'quiet' | 'full'
}

export function StandardHero({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  children,
  className = "",
  variant = 'default'
}: StandardHeroProps) {
  const baseClasses = "relative min-h-[60vh] flex items-center justify-center overflow-hidden"
  
  const variantClasses = {
    default: "bg-gradient-to-br from-deep-green/90 to-charcoal/80",
    quiet: "bg-gradient-to-br from-ivory/95 to-french-gray/90",
    full: "bg-gradient-to-br from-deep-green to-charcoal"
  }

  return (
    <section className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={`/images/${imageSrc}`}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-deep-green/60 to-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {subtitle && (
            <p className="text-lg font-medium text-ivory/90 mb-4 tracking-wide">
              {subtitle}
            </p>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-ivory mb-6 leading-tight">
            {title}
          </h1>
          
          <p className="text-xl text-ivory/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>

          {children}
        </div>
      </div>
    </section>
  )
}

// Specialized hero components for different page types
export function ServiceAreaHero({
  location,
  service,
  description,
  imageSrc,
  imageAlt,
  children,
  className = ""
}: {
  location: string
  service: string
  description: string
  imageSrc: string
  imageAlt: string
  children?: ReactNode
  className?: string
}) {
  return (
    <StandardHero
      title={`${service} ${location}`}
      subtitle={`${service} Services`}
      description={description}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      className={className}
    >
      {children}
    </StandardHero>
  )
}

export function ServiceHero({
  service,
  description,
  imageSrc,
  imageAlt,
  children,
  className = ""
}: {
  service: string
  description: string
  imageSrc: string
  imageAlt: string
  children?: ReactNode
  className?: string
}) {
  return (
    <StandardHero
      title={service}
      subtitle="Our Services"
      description={description}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      className={className}
    >
      {children}
    </StandardHero>
  )
}

export function MaterialsHero({
  material,
  description,
  imageSrc,
  imageAlt,
  children,
  className = ""
}: {
  material: string
  description: string
  imageSrc: string
  imageAlt: string
  children?: ReactNode
  className?: string
}) {
  return (
    <StandardHero
      title={material}
      subtitle="Premium Materials"
      description={description}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      className={className}
    >
      {children}
    </StandardHero>
  )
}

export function PortfolioHero({
  project,
  description,
  imageSrc,
  imageAlt,
  children,
  className = ""
}: {
  project: string
  description: string
  imageSrc: string
  imageAlt: string
  children?: ReactNode
  className?: string
}) {
  return (
    <StandardHero
      title={project}
      subtitle="Featured Project"
      description={description}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      className={className}
    >
      {children}
    </StandardHero>
  )
}

export function JournalHero({
  article,
  description,
  imageSrc,
  imageAlt,
  children,
  className = ""
}: {
  article: string
  description: string
  imageSrc: string
  imageAlt: string
  children?: ReactNode
  className?: string
}) {
  return (
    <StandardHero
      title={article}
      subtitle="Design Insights"
      description={description}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      className={className}
    >
      {children}
    </StandardHero>
  )
}

export function ProcessHero({
  process,
  description,
  imageSrc,
  imageAlt,
  children,
  className = ""
}: {
  process: string
  description: string
  imageSrc: string
  imageAlt: string
  children?: ReactNode
  className?: string
}) {
  return (
    <StandardHero
      title={process}
      subtitle="Our Process"
      description={description}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      className={className}
    >
      {children}
    </StandardHero>
  )
}
