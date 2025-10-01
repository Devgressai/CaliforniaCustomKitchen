'use client'

import Image from 'next/image'
import { useState } from 'react'

interface WebPImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  fill?: boolean
  sizes?: string
  style?: React.CSSProperties
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  onLoad?: () => void
  onError?: () => void
}

export function WebPImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 90,
  fill = false,
  sizes,
  style,
  placeholder = 'empty',
  blurDataURL,
  onLoad,
  onError,
  ...props
}: WebPImageProps) {
  const [imageError, setImageError] = useState(false)
  const [webpSupported, setWebpSupported] = useState(true)

  // Convert WebP path to fallback formats
  const getFallbackSrc = (webpSrc: string) => {
    if (webpSrc.endsWith('.webp')) {
      return webpSrc.replace('.webp', '.jpg')
    }
    return webpSrc
  }

  const handleError = () => {
    if (webpSupported) {
      // Try fallback format
      setWebpSupported(false)
      setImageError(false)
    } else {
      // Both WebP and fallback failed
      setImageError(true)
    }
    onError?.()
  }

  const handleLoad = () => {
    setImageError(false)
    onLoad?.()
  }

  // If both WebP and fallback failed, show placeholder
  if (imageError) {
    return (
      <div 
        className={`bg-french-gray/10 flex items-center justify-center ${className}`}
        style={{ width, height, ...style }}
      >
        <div className="text-center text-charcoal/50">
          <div className="text-2xl mb-2">🖼️</div>
          <div className="text-sm">Image unavailable</div>
        </div>
      </div>
    )
  }

  const imageSrc = webpSupported ? src : getFallbackSrc(src)

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      quality={quality}
      fill={fill}
      sizes={sizes}
      style={style}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  )
}

// Hook to detect WebP support
export function useWebPSupport() {
  const [isSupported, setIsSupported] = useState<boolean | null>(null)

  useState(() => {
    if (typeof window !== 'undefined') {
      const canvas = document.createElement('canvas')
      canvas.width = 1
      canvas.height = 1
      
      const webpDataURL = canvas.toDataURL('image/webp')
      const isWebPSupported = webpDataURL.includes('data:image/webp')
      
      setIsSupported(isWebPSupported)
    }
  })

  return isSupported
}
