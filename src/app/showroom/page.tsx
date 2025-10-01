'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

// Generate all 138 gallery images
const generateGalleryImages = () => {
  const images = []
  
  // Portfolio images (1-138)
  for (let i = 1; i <= 138; i++) {
    // Check if the file exists with -sacramento-california suffix
    const hasSacramentoSuffix = i <= 19 || (i >= 53 && i <= 79) || (i >= 99 && i <= 104)
    images.push({
      id: i,
      src: `/images/portfolio/gallery-luxury-custom-kitchen-${i}${hasSacramentoSuffix ? '-sacramento-california' : ''}.webp`,
      alt: `Luxury custom kitchen design ${i} - Premium cabinetry and millwork`,
      category: i <= 30 ? 'Contemporary' : i <= 60 ? 'Traditional' : i <= 90 ? 'Transitional' : 'Modern',
      location: i <= 40 ? 'Silicon Valley' : i <= 80 ? 'Los Angeles' : i <= 120 ? 'Central Coast' : 'Northern California'
    })
  }
  
  return images
}

const galleryImages = generateGalleryImages()

const categories = ['All', 'Contemporary', 'Traditional', 'Transitional', 'Modern']
const locations = ['All', 'Silicon Valley', 'Los Angeles', 'Central Coast', 'Northern California']

export default function ShowroomPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedLocation, setSelectedLocation] = useState('All')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = galleryImages.filter(image => {
    const categoryMatch = selectedCategory === 'All' || image.category === selectedCategory
    const locationMatch = selectedLocation === 'All' || image.location === selectedLocation
    return categoryMatch && locationMatch
  })

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedImage) return

      if (event.key === 'ArrowLeft') {
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage)
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
        setSelectedImage(filteredImages[prevIndex].id)
      } else if (event.key === 'ArrowRight') {
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage)
        const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
        setSelectedImage(filteredImages[nextIndex].id)
      } else if (event.key === 'Escape') {
        setSelectedImage(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, filteredImages])

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Visual Showroom
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-french-gray">
              Explore our comprehensive collection of luxury custom kitchens, bespoke cabinetry, and architectural millwork projects across California's most prestigious communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                138+ Projects
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                WebP Optimized
              </span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">
                High Resolution
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Controls */}
      <section className="py-12 bg-grain border-b border-french-gray/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Style</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-french-gray/30 rounded-lg focus:ring-2 focus:ring-deep-green focus:border-transparent bg-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">Location</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-2 border border-french-gray/30 rounded-lg focus:ring-2 focus:ring-deep-green focus:border-transparent bg-white"
                >
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="text-sm text-charcoal/70">
              Showing {filteredImages.length} of {galleryImages.length} projects
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-french-gray/10 rounded-lg mb-4">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
                  <div className="absolute top-4 left-4 bg-white/90 text-charcoal px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.category}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-charcoal/70">{image.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Screen Image Modal with Navigation */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left Arrow */}
          <button
            onClick={() => {
              const currentIndex = filteredImages.findIndex(img => img.id === selectedImage)
              const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
              setSelectedImage(filteredImages[prevIndex].id)
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => {
              const currentIndex = filteredImages.findIndex(img => img.id === selectedImage)
              const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
              setSelectedImage(filteredImages[nextIndex].id)
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Main Image Container */}
          <div className="relative w-full h-full flex items-center justify-center p-8">
            <div className="relative max-w-7xl max-h-full w-full h-full">
              <Image
                src={galleryImages[selectedImage - 1]?.src || ''}
                alt={galleryImages[selectedImage - 1]?.alt || ''}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>

          {/* Image Info */}
          <div className="absolute bottom-6 left-6 right-6 bg-black/70 text-white p-6 rounded-lg backdrop-blur-sm">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  {galleryImages[selectedImage - 1]?.category} Kitchen
                </h3>
                <p className="text-french-gray text-lg">
                  {galleryImages[selectedImage - 1]?.location} • {galleryImages[selectedImage - 1]?.alt}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-french-gray">
                  {filteredImages.findIndex(img => img.id === selectedImage) + 1} of {filteredImages.length}
                </p>
              </div>
            </div>
          </div>

          {/* Keyboard Navigation Hints */}
          <div className="absolute top-6 left-6 text-white/60 text-sm">
            <p>Use ← → arrow keys or click arrows to navigate</p>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Inspired by What You See?
          </h2>
          <p className="text-xl text-french-gray mb-12 max-w-3xl mx-auto">
            Every project in our showroom represents a unique collaboration with California's most discerning homeowners. Let's discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-ivory text-deep-green px-8 py-4 rounded font-medium hover:bg-ivory/90 transition-colors"
            >
              Schedule a Consultation
            </a>
            <a 
              href="/portfolio" 
              className="border border-ivory text-ivory px-8 py-4 rounded font-medium hover:bg-ivory hover:text-deep-green transition-colors"
            >
              View Detailed Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
