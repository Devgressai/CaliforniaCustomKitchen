import HomepageSlideshow from '@/components/HomepageSlideshow';
import { ProjectGrid } from '@/components/ProjectGrid';
import { ServiceCard } from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AV\'s Cabinets | Custom Kitchens & Bespoke Cabinetry | Sacramento, California',
  description: 'Luxury custom kitchens and bespoke cabinetry for California\'s most discerning clients. Handcrafted excellence in Sacramento, Atherton, Palo Alto, and beyond.',
  keywords: 'custom kitchens, bespoke cabinetry, luxury kitchens, Sacramento, Atherton, Palo Alto, custom cabinets, kitchen design',
  openGraph: {
    title: 'AV\'s Cabinets | Custom Kitchens & Bespoke Cabinetry',
    description: 'Luxury custom kitchens and bespoke cabinetry for California\'s most discerning clients.',
    type: 'website',
    url: 'https://avscabinets.com',
    images: [
      {
        url: '/images/portfolio/gallery-luxury-custom-kitchen-1-sacramento-california.webp',
        width: 1200,
        height: 630,
        alt: 'Luxury custom kitchen in Sacramento, California'
      }
    ]
  }
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Slideshow */}
      <HomepageSlideshow />

      {/* Philosophy Section */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-8">
              Craftsmanship as Stewardship
            </h2>
            <p className="text-xl leading-relaxed text-charcoal/80 mb-8">
              Since 2006, AV's Cabinets has served as guardians of an ancient craft, creating bespoke cabinetry and architectural millwork that honors both tradition and innovation. Our workshop in California's heartland combines time-tested joinery techniques with contemporary design sensibilities, producing pieces that will grace homes for generations.
            </p>
            <p className="text-lg leading-relaxed text-charcoal/70">
              Every project begins with understanding—of your lifestyle, your home's architecture, and the materials that will become part of your daily experience. We believe in quiet luxury: craftsmanship so refined it speaks in whispers, not shouts.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              A selection of our most recent work, showcasing the range and depth of our craftsmanship.
            </p>
          </div>
          
          <ProjectGrid 
            projects={[
              {
                id: 1,
                title: "Atherton Estate Kitchen",
                description: "Contemporary luxury meets traditional craftsmanship in this Silicon Valley masterpiece.",
                imageSrc: "/images/portfolio/gallery-luxury-custom-kitchen-1-sacramento-california.webp",
                alt: "Luxury contemporary kitchen with custom cabinetry",
                location: "Atherton, CA"
              },
              {
                id: 2,
                title: "Montecito Wine Library",
                description: "Handcrafted wine storage and entertainment center for a coastal estate.",
                imageSrc: "/images/portfolio/gallery-luxury-custom-kitchen-2-sacramento-california.webp",
                alt: "Custom wine library with premium wood finishes",
                location: "Montecito, CA"
              },
              {
                id: 3,
                title: "Palo Alto Modern Kitchen",
                description: "Sleek lines and premium materials create the perfect culinary workspace.",
                imageSrc: "/images/portfolio/gallery-luxury-custom-kitchen-3-sacramento-california.webp",
                alt: "Modern kitchen with sleek cabinetry design",
                location: "Palo Alto, CA"
              },
              {
                id: 4,
                title: "Beverly Hills Master Suite",
                description: "Luxurious bedroom cabinetry and built-in storage solutions.",
                imageSrc: "/images/portfolio/gallery-luxury-custom-kitchen-4-sacramento-california.webp",
                alt: "Master suite with custom built-in cabinetry",
                location: "Beverly Hills, CA"
              },
              {
                id: 5,
                title: "Malibu Coastal Kitchen",
                description: "Ocean-inspired design with sustainable materials and timeless appeal.",
                imageSrc: "/images/portfolio/gallery-luxury-custom-kitchen-5-sacramento-california.webp",
                alt: "Coastal kitchen with natural wood finishes",
                location: "Malibu, CA"
              },
              {
                id: 6,
                title: "Pacific Heights Library",
                description: "Floor-to-ceiling bookcases and custom millwork for a San Francisco home.",
                imageSrc: "/images/portfolio/gallery-luxury-custom-kitchen-6-sacramento-california.webp",
                alt: "Custom library with built-in bookcases",
                location: "San Francisco, CA"
              }
            ]}
          />
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Eight principles that guide every project, from initial consultation to white-glove installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Museum-Grade Finishing</h3>
              <p className="text-charcoal/70 text-sm">Our finishing booth maintains pharmaceutical-grade air quality, ensuring flawless surfaces that rival gallery pieces.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Precision Tolerances</h3>
              <p className="text-charcoal/70 text-sm">CNC precision meets hand-crafted perfection. Every measurement verified to 1/64" accuracy before installation.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Grain-Matched Veneers</h3>
              <p className="text-charcoal/70 text-sm">Sequential veneer matching creates seamless wood grain flow across doors, drawers, and fixed panels.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-charcoal mb-3">Hidden Hardware</h3>
              <p className="text-charcoal/70 text-sm">Invisible hinges and push-to-open mechanisms create clean lines and uninterrupted wood grain patterns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Our Services
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              From concept to completion, we offer comprehensive cabinetry and millwork services tailored to the most discerning clientele.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Custom Kitchens"
              description="The heart of the home deserves nothing less than perfection. Our custom kitchens blend functionality with artistry, creating spaces that serve both daily rituals and grand entertaining."
              imageSrc="/images/portfolio/gallery-luxury-custom-kitchen-7-sacramento-california.webp"
              alt="Custom luxury kitchen with premium finishes"
              features={[
                "Inset door construction",
                "Soft-close hardware", 
                "Grain-matched veneers",
                "Museum-grade finishing"
              ]}
              href="/services/custom-kitchens"
            />

            <ServiceCard
              title="Bespoke Cabinetry"
              description="Beyond kitchens, we craft storage solutions that disappear into architecture while maximizing both beauty and utility throughout your home."
              imageSrc="/images/portfolio/gallery-luxury-custom-kitchen-8-sacramento-california.webp"
              alt="Custom built-in cabinetry and storage solutions"
              features={[
                "Invisible hinges",
                "Push-to-open mechanisms",
                "LED integration",
                "Custom sizing"
              ]}
              href="/services/bespoke-cabinetry"
            />

            <ServiceCard
              title="Architectural Millwork"
              description="From coffered ceilings to intricate moldings, our millwork transforms spaces into architectural statements worthy of the finest estates."
              imageSrc="/images/portfolio/gallery-luxury-custom-kitchen-9-sacramento-california.webp"
              alt="Custom architectural millwork and moldings"
              features={[
                "Hand-carved details",
                "Period-accurate profiles",
                "Seamless installation",
                "Restoration expertise"
              ]}
              href="/services/architectural-millwork"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Begin Your Project?"
        description="Every masterpiece begins with a conversation. Let's discuss how we can bring your vision to life with the finest materials and time-honored craftsmanship."
        primaryCTA={{
          text: "Request a Private Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Our Portfolio", 
          href: "/portfolio"
        }}
        background="dark"
      />
    </div>
  )
}