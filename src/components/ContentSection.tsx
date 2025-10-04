import { ReactNode } from 'react'

interface ContentSectionProps {
  children: ReactNode
  className?: string
  background?: 'white' | 'gray' | 'ivory' | 'charcoal'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl'
}

export function ContentSection({
  children,
  className = "",
  background = 'white',
  padding = 'lg',
  maxWidth = '7xl'
}: ContentSectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-french-gray/10',
    ivory: 'bg-ivory',
    charcoal: 'bg-charcoal text-ivory'
  }

  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20'
  }

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '7xl': 'max-w-7xl'
  }

  return (
    <section className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}>
      <div className={`${maxWidthClasses[maxWidth]} mx-auto px-6 lg:px-8`}>
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = false,
  className = ""
}: SectionHeaderProps) {
  const alignmentClasses = centered ? 'text-center' : 'text-left'
  
  return (
    <div className={`${alignmentClasses} ${className}`}>
      {subtitle && (
        <p className="text-sm font-semibold text-deep-green uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      
      <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4">
        {title}
      </h2>
      
      {description && (
        <p className="text-lg text-charcoal/80 leading-relaxed max-w-3xl">
          {description}
        </p>
      )}
    </div>
  )
}

interface GridProps {
  children: ReactNode
  columns?: 1 | 2 | 3 | 4
  gap?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function Grid({
  children,
  columns = 3,
  gap = 'lg',
  className = ""
}: GridProps) {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12'
  }

  return (
    <div className={`grid ${gridClasses[columns]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  )
}

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

export function Card({
  children,
  className = "",
  hover = false,
  padding = 'md'
}: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  const hoverClasses = hover ? 'hover:shadow-lg transition-shadow duration-300' : ''

  return (
    <div className={`bg-white rounded-lg shadow-md ${paddingClasses[padding]} ${hoverClasses} ${className}`}>
      {children}
    </div>
  )
}

interface FeatureProps {
  icon?: ReactNode
  title: string
  description: string
  className?: string
}

export function Feature({
  icon,
  title,
  description,
  className = ""
}: FeatureProps) {
  return (
    <div className={`text-center ${className}`}>
      {icon && (
        <div className="mb-4 flex justify-center">
          <div className="w-12 h-12 bg-deep-green/10 rounded-full flex items-center justify-center">
            {icon}
          </div>
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-charcoal mb-3">
        {title}
      </h3>
      
      <p className="text-charcoal/80 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

interface ProcessStepProps {
  step: number
  title: string
  description: string
  className?: string
}

export function ProcessStep({
  step,
  title,
  description,
  className = ""
}: ProcessStepProps) {
  return (
    <div className={`flex items-start space-x-4 ${className}`}>
      <div className="flex-shrink-0 w-8 h-8 bg-deep-green text-ivory rounded-full flex items-center justify-center font-bold text-sm">
        {step}
      </div>
      
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-charcoal mb-2">
          {title}
        </h3>
        
        <p className="text-charcoal/80 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
