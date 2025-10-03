import Image, { ImageProps } from 'next/image'

interface OptimizedImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  filename: string
  alt?: string
  priority?: boolean
  quality?: number
}

export function OptimizedImage({ 
  filename, 
  alt, 
  priority = false,
  quality = 90,
  className = '',
  ...props 
}: OptimizedImageProps) {
  const imagePath = `/images/${filename}`
  const imageAlt = alt || `PineWood Cabinets custom cabinetry`
  
  return (
    <Image
      src={imagePath}
      alt={imageAlt}
      priority={priority}
      quality={quality}
      className={className}
      {...props}
    />
  )
}

export function HeroImage({ 
  filename, 
  alt, 
  overlay = true, 
  className = '' 
}: {
  filename: string
  alt?: string
  overlay?: boolean
  className?: string
}) {
  return (
    <div className={`relative ${className}`}>
      <OptimizedImage
        filename={filename}
        alt={alt}
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
  )
}
