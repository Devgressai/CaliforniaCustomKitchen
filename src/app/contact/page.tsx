import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact AV\'s Cabinets | Request Consultation | Luxury Kitchen Design California',
  description: 'Contact AV\'s Cabinets for your custom kitchen and cabinetry needs. Request a private consultation with our master craftsmen serving California\'s wealthiest communities.',
  keywords: 'contact AV\'s Cabinets, kitchen consultation, custom cabinetry quote, luxury kitchen design California, cabinet makers contact',
  openGraph: {
    title: 'Contact AV\'s Cabinets | Request Consultation | Luxury Kitchen Design',
    description: 'Contact AV\'s Cabinets for your custom kitchen and cabinetry needs. Request a private consultation with our master craftsmen.',
    type: 'website',
  },
}

const contactMethods = [
  {
    title: 'Phone Consultation',
    description: 'Speak directly with our design team to discuss your project requirements and timeline.',
    contact: '(555) 123-4567',
    hours: 'Mon-Fri: 9AM-6PM PST',
    icon: '📞'
  },
  {
    title: 'Email Inquiry',
    description: 'Send us detailed information about your project and we\'ll respond within 24 hours.',
    contact: 'info@avscabinets.com',
    hours: 'Response within 24 hours',
    icon: '✉️'
  },
  {
    title: 'Private Consultation',
    description: 'Schedule an in-person consultation at our workshop or your home location.',
    contact: 'Schedule Online',
    hours: 'By appointment only',
    icon: '🏠'
  },
  {
    title: 'Design Studio Visit',
    description: 'Visit our design studio to see materials, finishes, and discuss your vision in person.',
    contact: 'Book Appointment',
    hours: 'Mon-Fri: 10AM-5PM PST',
    icon: '🎨'
  }
]

const serviceAreas = [
  {
    region: 'Silicon Valley',
    cities: ['Atherton', 'Palo Alto', 'Los Altos Hills', 'Woodside', 'Portola Valley', 'Saratoga', 'Los Gatos', 'Cupertino']
  },
  {
    region: 'Los Angeles Area',
    cities: ['Bel Air', 'Beverly Hills', 'Malibu', 'Manhattan Beach', 'Newport Beach', 'Laguna Beach', 'Pasadena', 'San Marino']
  },
  {
    region: 'San Francisco Bay Area',
    cities: ['Pacific Heights', 'Presidio Heights', 'Sea Cliff', 'Marin County', 'Napa Valley']
  },
  {
    region: 'Central Coast',
    cities: ['Montecito', 'Pebble Beach', 'Carmel-by-the-Sea', 'Santa Barbara']
  }
]

const faqs = [
  {
    question: 'What is the typical timeline for a custom kitchen project?',
    answer: 'Most custom kitchen projects take 6-8 months from initial consultation to final installation. This includes 2-3 months for design and planning, 3-4 months for fabrication, and 2-3 weeks for installation and finishing.'
  },
  {
    question: 'Do you work with architects and interior designers?',
    answer: 'Absolutely. We regularly collaborate with architects and interior designers, providing detailed shop drawings and working closely with the design team to ensure seamless integration with the overall project vision.'
  },
  {
    question: 'What is your minimum project size?',
    answer: 'We work on projects of all sizes, from single pieces of furniture to complete home millwork packages. Our minimum project value is typically $25,000, though we occasionally take on smaller projects that align with our design philosophy.'
  },
  {
    question: 'Do you provide design services?',
    answer: 'Yes, our in-house design team works closely with clients to develop comprehensive design solutions. We also collaborate with external architects and designers when preferred by the client.'
  },
  {
    question: 'What materials do you work with?',
    answer: 'We work with premium hardwoods including walnut, oak, cherry, mahogany, and teak, as well as exotic species. We also offer custom veneers, metal accents, and specialty finishes. All materials are sourced from sustainable suppliers.'
  },
  {
    question: 'Do you offer warranties?',
    answer: 'We provide a comprehensive warranty on all our work, including 5 years on hardware and 10 years on structural components. Our finishing work carries a 3-year warranty against defects in materials and workmanship.'
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-french-gray leading-relaxed mb-8">
              Ready to begin your custom cabinetry project? We're here to help bring your vision to life with the finest materials and craftsmanship.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Free Consultation</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Custom Quotes</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Design Services</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">White-Glove Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Get In Touch
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Choose the method that works best for you. We're here to answer your questions and help you plan your perfect project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={method.title} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20 hover:shadow-lg transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold text-charcoal mb-4 font-display">
                  {method.title}
                </h3>
                <p className="text-charcoal/80 leading-relaxed mb-4">
                  {method.description}
                </p>
                <div className="space-y-2">
                  <p className="text-deep-green font-medium">{method.contact}</p>
                  <p className="text-sm text-charcoal/60">{method.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Request a Consultation
              </h2>
              <p className="text-xl text-charcoal/80">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-french-gray/30 rounded-lg focus:ring-2 focus:ring-deep-green focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-french-gray/30 rounded-lg focus:ring-2 focus:ring-deep-green focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-french-gray/30 rounded-lg focus:ring-2 focus:ring-deep-green focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-french-gray/30 rounded-lg focus:ring-2 focus:ring-deep-green focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-charcoal mb-2">
                    Project Location *
                  </label>
                  <select
                    id="location"
                    name="location"
                    required
                    className="w-full px-4 py-3 border border-french-gray/30 rounded-lg focus:ring-2 focus:ring-deep-green focus:border-transparent"
                  >
                    <option value="">Select your city or region</option>
                    <optgroup label="Silicon Valley">
                      <option value="atherton">Atherton</option>
                      <option value="palo-alto">Palo Alto</option>
                      <option value="los-altos-hills">Los Altos Hills</option>
                      <option value="woodside">Woodside</option>
                      <option value="portola-valley">Portola Valley</option>
                      <option value="saratoga">Saratoga</option>
                      <option value="los-gatos">Los Gatos</option>
                      <option value="cupertino">Cupertino</option>
                    </optgroup>
                    <optgroup label="Los Angeles Area">
                      <option value="bel-air">Bel Air</option>
                      <option value="beverly-hills">Beverly Hills</option>
                      <option value="malibu">Malibu</option>
                      <option value="manhattan-beach">Manhattan Beach</option>
                      <option value="newport-beach">Newport Beach</option>
                      <option value="laguna-beach">Laguna Beach</option>
                      <option value="pasadena">Pasadena</option>
                      <option value="san-marino">San Marino</option>
                    </optgroup>
                    <optgroup label="San Francisco Bay Area">
                      <option value="pacific-heights">Pacific Heights</option>
                      <option value="presidio-heights">Presidio Heights</option>
                      <option value="sea-cliff">Sea Cliff</option>
                      <option value="marin-county">Marin County</option>
                      <option value="napa-valley">Napa Valley</option>
                    </optgroup>
                    <optgroup label="Central Coast">
                      <option value="montecito">Montecito</option>
                      <option value="pebble-beach">Pebble Beach</option>
                      <option value="carmel">Carmel-by-the-Sea</option>
                      <option value="santa-barbara">Santa Barbara</option>
                    </optgroup>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-charcoal mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    className="w-full px-4 py-3 border border-french-gray/30 rounded-lg focus:ring-2 focus:ring-deep-green focus:border-transparent"
                  >
                    <option value="">Select project type</option>
                    <option value="custom-kitchen">Custom Kitchen</option>
                    <option value="bespoke-cabinetry">Bespoke Cabinetry</option>
                    <option value="architectural-millwork">Architectural Millwork</option>
                    <option value="wine-cellar">Wine Cellar & Storage</option>
                    <option value="pantry-design">Pantry Design</option>
                    <option value="laundry-room">Laundry Room Cabinetry</option>
                    <option value="home-office">Home Office Cabinetry</option>
                    <option value="media-room">Media Room Cabinetry</option>
                    <option value="outdoor-kitchen">Outdoor Kitchen Cabinetry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-charcoal mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 border border-french-gray/30 rounded-lg focus:ring-2 focus:ring-deep-green focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-250k">$100,000 - $250,000</option>
                    <option value="250k-500k">$250,000 - $500,000</option>
                    <option value="500k-plus">$500,000+</option>
                    <option value="discuss">Prefer to discuss</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-charcoal mb-2">
                    Desired Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="w-full px-4 py-3 border border-french-gray/30 rounded-lg focus:ring-2 focus:ring-deep-green focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="12-plus-months">12+ months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-french-gray/30 rounded-lg focus:ring-2 focus:ring-deep-green focus:border-transparent"
                    placeholder="Please describe your project, including any specific requirements, design preferences, or questions you have..."
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    className="mt-1 h-4 w-4 text-deep-green focus:ring-deep-green border-french-gray/30 rounded"
                  />
                  <label htmlFor="newsletter" className="ml-2 text-sm text-charcoal/80">
                    I would like to receive updates about new projects, design trends, and company news.
                  </label>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn-primary w-full md:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Service Areas
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We proudly serve California's most prestigious communities, bringing our expertise in luxury cabinetry to discerning clients throughout the state.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceAreas.map((area, index) => (
              <div key={area.region} className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
                <h3 className="text-xl font-semibold text-charcoal mb-4 font-display">
                  {area.region}
                </h3>
                <ul className="space-y-2">
                  {area.cities.map((city, cityIndex) => (
                    <li key={cityIndex} className="text-charcoal/70 text-sm">
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Common questions about our services, process, and what to expect when working with AV's Cabinets.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-french-gray/20">
                <h3 className="text-lg font-semibold text-charcoal mb-3 font-display">
                  {faq.question}
                </h3>
                <p className="text-charcoal/80 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-french-gray mb-12 max-w-3xl mx-auto">
            Don't wait to begin your dream project. Contact us today to schedule your free consultation and take the first step toward your perfect kitchen or cabinetry solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+15551234567" className="bg-ivory text-deep-green px-8 py-4 rounded font-medium hover:bg-ivory/90 transition-colors">
              Call (555) 123-4567
            </a>
            <a href="mailto:info@avscabinets.com" className="border border-ivory text-ivory px-8 py-4 rounded font-medium hover:bg-ivory hover:text-deep-green transition-colors">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
