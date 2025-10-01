import Link from 'next/link'

export default function SimpleHomepage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Simple Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-deep-green">
        <div className="text-center text-ivory">
          <h1 className="text-5xl font-bold mb-6">Quiet Luxury in Every Detail</h1>
          <p className="text-xl mb-8">Custom cabinetry and architectural millwork for California's most discerning clientele.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/portfolio" className="bg-ivory text-deep-green px-6 py-3 rounded">
              View Portfolio
            </Link>
            <Link href="/contact" className="border border-ivory text-ivory px-6 py-3 rounded">
              Request Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Simple Content */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-charcoal mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-4">Custom Kitchens</h3>
              <p className="text-charcoal/80">Luxury kitchen cabinetry designed for your lifestyle.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-4">Bespoke Cabinetry</h3>
              <p className="text-charcoal/80">Built-in storage solutions throughout your home.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-4">Architectural Millwork</h3>
              <p className="text-charcoal/80">Coffered ceilings, moldings, and custom details.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
