import Link from 'next/link'

interface CTASectionProps {
  title: string
  description: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  background?: 'light' | 'dark' | 'grain'
  centered?: boolean
}

export function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  background = 'grain',
  centered = true
}: CTASectionProps) {
  const bgClasses = {
    light: 'bg-ivory',
    dark: 'bg-charcoal text-ivory',
    grain: 'bg-ivory bg-grain'
  }

  const textClasses = {
    light: 'text-charcoal',
    dark: 'text-ivory',
    grain: 'text-charcoal'
  }

  return (
    <section className={`py-24 ${bgClasses[background]}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`max-w-4xl ${centered ? 'mx-auto text-center' : ''}`}>
          <h2 className={`font-display text-4xl md:text-5xl font-bold mb-6 ${textClasses[background]} text-balance`}>
            {title}
          </h2>
          <p className={`text-xl leading-relaxed mb-12 ${
            background === 'dark' ? 'text-french-gray' : 'text-charcoal/80'
          } text-balance`}>
            {description}
          </p>
          
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className={
                    background === 'dark' 
                      ? 'btn-primary bg-ivory text-deep-green hover:bg-ivory/90'
                      : 'btn-primary'
                  }
                >
                  {primaryCTA.text}
                </Link>
              )}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className={
                    background === 'dark'
                      ? 'btn-ghost border-ivory text-ivory hover:bg-ivory hover:text-deep-green'
                      : 'btn-ghost'
                  }
                >
                  {secondaryCTA.text}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
