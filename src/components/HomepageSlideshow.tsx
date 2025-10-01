'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Slide {
  id: number;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    src: '/images/portfolio/gallery-luxury-custom-kitchen-1-sacramento-california.webp',
    alt: 'Luxury custom kitchen with contemporary design and premium materials',
    title: 'Contemporary Luxury',
    subtitle: 'Modern Kitchen Design',
    description: 'Where form meets function in the most elegant way possible'
  },
  {
    id: 2,
    src: '/images/portfolio/gallery-luxury-custom-kitchen-2-sacramento-california.webp',
    alt: 'Traditional kitchen with classic cabinetry and timeless appeal',
    title: 'Timeless Tradition',
    subtitle: 'Classic Craftsmanship',
    description: 'Heritage techniques meet modern luxury in every detail'
  },
  {
    id: 3,
    src: '/images/portfolio/gallery-luxury-custom-kitchen-3-sacramento-california.webp',
    alt: 'Modern kitchen with sleek lines and premium finishes',
    title: 'Modern Sophistication',
    subtitle: 'Sleek Design Excellence',
    description: 'Clean lines and premium materials create the perfect space'
  },
  {
    id: 4,
    src: '/images/portfolio/gallery-luxury-custom-kitchen-4-sacramento-california.webp',
    alt: 'Luxury kitchen with custom island and high-end appliances',
    title: 'Custom Excellence',
    subtitle: 'Bespoke Solutions',
    description: 'Every element crafted specifically for your vision'
  },
  {
    id: 5,
    src: '/images/portfolio/gallery-luxury-custom-kitchen-5-sacramento-california.webp',
    alt: 'Elegant kitchen with warm wood tones and sophisticated design',
    title: 'Warm Elegance',
    subtitle: 'Sophisticated Comfort',
    description: 'Rich materials and thoughtful design create lasting beauty'
  }
];

export default function HomepageSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false); // Stop auto-play when user manually navigates
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden group">
      {/* Main Slide Display */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-6">
                <h1 className="text-5xl md:text-7xl font-serif font-light mb-4 tracking-wide">
                  {slide.title}
                </h1>
                <h2 className="text-2xl md:text-3xl font-light mb-6 text-ivory/90">
                  {slide.subtitle}
                </h2>
                <p className="text-lg md:text-xl text-ivory/80 max-w-2xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
                
                {/* CTA Buttons */}
                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-deep-green hover:bg-deep-green/90 text-ivory px-8 py-4 rounded-none font-medium tracking-wide transition-all duration-300 hover:scale-105">
                    View Our Portfolio
                  </button>
                  <button className="border-2 border-ivory text-ivory hover:bg-ivory hover:text-charcoal px-8 py-4 rounded-none font-medium tracking-wide transition-all duration-300">
                    Request Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-ivory scale-125'
                : 'bg-ivory/50 hover:bg-ivory/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-6 right-6 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all duration-300"
        aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
      >
        {isAutoPlaying ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
        <div 
          className="h-full bg-ivory transition-all duration-100 ease-linear"
          style={{ 
            width: isAutoPlaying ? '100%' : '0%',
            animation: isAutoPlaying ? 'progress 5s linear infinite' : 'none'
          }}
        />
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
