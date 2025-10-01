export default function HomePage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-deep-green">
        <div className="text-center text-ivory max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Quiet Luxury in Every Detail
          </h1>
          <p className="text-xl md:text-2xl mb-12 leading-relaxed">
            Custom cabinetry and architectural millwork for California's most discerning clientele.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/portfolio" 
              className="bg-ivory text-deep-green px-8 py-4 rounded font-medium hover:bg-ivory/90 transition-colors"
            >
              View Portfolio
            </a>
            <a 
              href="/contact" 
              className="border border-ivory text-ivory px-8 py-4 rounded font-medium hover:bg-ivory hover:text-deep-green transition-colors"
            >
              Request Consultation
            </a>
          </div>
        </div>
      </section>

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

      {/* Values Grid */}
      <section className="py-24 bg-grain">
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
      <section className="py-24 bg-ivory">
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
            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-charcoal mb-4">Custom Kitchens</h3>
              <p className="text-charcoal/80 mb-6">The heart of the home deserves nothing less than perfection. Our custom kitchens blend functionality with artistry, creating spaces that serve both daily rituals and grand entertaining.</p>
              <ul className="text-sm text-charcoal/70 space-y-2 mb-6">
                <li>• Inset door construction</li>
                <li>• Soft-close hardware</li>
                <li>• Grain-matched veneers</li>
                <li>• Museum-grade finishing</li>
              </ul>
              <a href="/services/custom-kitchens" className="text-deep-green font-medium hover:underline">
                Learn More →
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-charcoal mb-4">Bespoke Cabinetry</h3>
              <p className="text-charcoal/80 mb-6">Beyond kitchens, we craft storage solutions that disappear into architecture while maximizing both beauty and utility throughout your home.</p>
              <ul className="text-sm text-charcoal/70 space-y-2 mb-6">
                <li>• Invisible hinges</li>
                <li>• Push-to-open mechanisms</li>
                <li>• LED integration</li>
                <li>• Custom sizing</li>
              </ul>
              <a href="/services/bespoke-cabinetry" className="text-deep-green font-medium hover:underline">
                Learn More →
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-charcoal mb-4">Architectural Millwork</h3>
              <p className="text-charcoal/80 mb-6">From coffered ceilings to intricate moldings, our millwork transforms spaces into architectural statements worthy of the finest estates.</p>
              <ul className="text-sm text-charcoal/70 space-y-2 mb-6">
                <li>• Hand-carved details</li>
                <li>• Period-accurate profiles</li>
                <li>• Seamless installation</li>
                <li>• Restoration expertise</li>
              </ul>
              <a href="/services/architectural-millwork" className="text-deep-green font-medium hover:underline">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Begin Your Project?
          </h2>
          <p className="text-xl text-french-gray mb-12 max-w-3xl mx-auto">
            Every masterpiece begins with a conversation. Let's discuss how we can bring your vision to life with the finest materials and time-honored craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-ivory text-deep-green px-8 py-4 rounded font-medium hover:bg-ivory/90 transition-colors"
            >
              Request a Private Consultation
            </a>
            <a 
              href="/portfolio" 
              className="border border-ivory text-ivory px-8 py-4 rounded font-medium hover:bg-ivory hover:text-deep-green transition-colors"
            >
              View Our Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}