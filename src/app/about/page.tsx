import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About AV\'s Cabinets | Master Craftsmen | Luxury Kitchen Design California',
  description: 'Learn about AV\'s Cabinets, master craftsmen creating custom kitchens and bespoke cabinetry for California\'s most discerning clientele since 2006.',
  keywords: 'about AV\'s Cabinets, master craftsmen, custom kitchen designers, luxury cabinetry California, kitchen design team, cabinet makers',
  openGraph: {
    title: 'About AV\'s Cabinets | Master Craftsmen | Luxury Kitchen Design',
    description: 'Master craftsmen creating custom kitchens and bespoke cabinetry for California\'s most discerning clientele since 2006.',
    type: 'website',
  },
}

const teamMembers = [
  {
    name: 'Alexander Voss',
    title: 'Founder & Master Craftsman',
    imageSrc: 'team/alexander-voss.webp',
    imageAlt: 'Alexander Voss, founder and master craftsman of AV\'s Cabinets',
    bio: 'With over 25 years of experience in fine woodworking, Alexander founded AV\'s Cabinets in 2006 to bring European craftsmanship traditions to California\'s luxury market.',
    specialties: ['Traditional Joinery', 'Design Consultation', 'Project Management']
  },
  {
    name: 'Maria Rodriguez',
    title: 'Lead Designer',
    imageSrc: 'team/maria-rodriguez.webp',
    imageAlt: 'Maria Rodriguez, lead designer at AV\'s Cabinets',
    bio: 'Maria brings 15 years of interior design experience, specializing in creating spaces that seamlessly blend functionality with aesthetic excellence.',
    specialties: ['Space Planning', 'Material Selection', 'Client Relations']
  },
  {
    name: 'James Chen',
    title: 'Master Woodworker',
    imageSrc: 'team/james-chen.webp',
    imageAlt: 'James Chen, master woodworker at AV\'s Cabinets',
    bio: 'A third-generation woodworker, James specializes in complex joinery and hand-carved details that define our most intricate projects.',
    specialties: ['Hand Carving', 'Complex Joinery', 'Restoration Work']
  },
  {
    name: 'Sarah Thompson',
    title: 'Project Manager',
    imageSrc: 'team/sarah-thompson.webp',
    imageAlt: 'Sarah Thompson, project manager at AV\'s Cabinets',
    bio: 'Sarah ensures every project runs smoothly from conception to completion, maintaining our commitment to quality and client satisfaction.',
    specialties: ['Project Coordination', 'Timeline Management', 'Quality Control']
  }
]

const values = [
  {
    title: 'Craftsmanship as Stewardship',
    description: 'We view our work as guardians of an ancient craft, preserving traditional techniques while embracing innovation. Every piece we create honors the legacy of master woodworkers who came before us.',
    icon: '🔨'
  },
  {
    title: 'Proportion & Balance',
    description: 'Our designs are guided by classical principles of proportion and harmony. We believe that true beauty lies in the relationship between elements, creating spaces that feel both grand and intimate.',
    icon: '⚖️'
  },
  {
    title: 'Material Intelligence',
    description: 'We work exclusively with the finest materials, understanding that each piece of wood has its own character and story. Our selection process ensures that every material serves both aesthetic and functional purposes.',
    icon: '🌳'
  },
  {
    title: 'Client Partnership',
    description: 'Every project is a collaboration between our expertise and your vision. We listen carefully to understand your needs, preferences, and lifestyle to create spaces that truly serve you.',
    icon: '🤝'
  },
  {
    title: 'Environmental Responsibility',
    description: 'We are committed to sustainable practices, sourcing materials responsibly and minimizing waste. Our workshop uses eco-friendly finishes and energy-efficient processes.',
    icon: '🌱'
  },
  {
    title: 'Continuous Learning',
    description: 'The craft of woodworking is ever-evolving. We invest in ongoing education, attend international trade shows, and study both traditional and contemporary techniques to stay at the forefront of our field.',
    icon: '📚'
  }
]

const milestones = [
  {
    year: '2006',
    title: 'Foundation',
    description: 'AV\'s Cabinets founded by Alexander Voss with a vision to bring European craftsmanship to California\'s luxury market.'
  },
  {
    year: '2010',
    title: 'First Major Project',
    description: 'Completed our first seven-figure kitchen project for a Silicon Valley tech executive, establishing our reputation for excellence.'
  },
  {
    year: '2015',
    title: 'Workshop Expansion',
    description: 'Expanded our workshop to 15,000 square feet, adding state-of-the-art equipment while maintaining traditional hand-crafting techniques.'
  },
  {
    year: '2018',
    title: 'Design Team Growth',
    description: 'Added Maria Rodriguez as Lead Designer, expanding our capabilities in space planning and material selection.'
  },
  {
    year: '2020',
    title: 'Sustainability Initiative',
    description: 'Launched our sustainability program, committing to eco-friendly materials and processes while maintaining our quality standards.'
  },
  {
    year: '2023',
    title: 'Award Recognition',
    description: 'Received the California Design Award for Excellence in Custom Cabinetry, recognizing our commitment to craftsmanship and innovation.'
  },
  {
    year: '2024',
    title: 'Digital Innovation',
    description: 'Integrated advanced 3D modeling and CNC precision with traditional hand-crafting, creating new possibilities in design and execution.'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              About PineWood Cabinets
            </h1>
            <p className="text-xl md:text-2xl text-french-gray leading-relaxed mb-8">
              Since 2006, we have been guardians of an ancient craft, creating bespoke cabinetry and architectural millwork that defines California's most luxurious homes.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Est. 2006</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Master Craftsmen</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">California Based</span>
              <span className="bg-deep-green/20 text-ivory px-4 py-2 rounded-full">Award Winning</span>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Our Story
              </h2>
              <div className="prose-luxury text-charcoal/80 mb-8">
                <p>
                  PineWood Cabinets was born from a simple belief: that the spaces where we live and work deserve the same attention to detail and craftsmanship as the finest furniture and art. Founded in 2006 by Alexander Voss, our company began as a small workshop dedicated to preserving traditional woodworking techniques while serving California's most discerning clientele.
                </p>
                <p>
                  Alexander's journey began in Germany, where he apprenticed under master cabinetmakers who taught him that true craftsmanship is not just about technical skill, but about understanding the soul of the materials and the needs of those who will use the finished pieces. This philosophy became the foundation of PineWood Cabinets.
                </p>
                <p>
                  Today, we remain committed to these principles while embracing innovation. Our workshop combines time-honored techniques with modern precision, creating cabinetry that is both timeless and contemporary. Every project is an opportunity to push the boundaries of what's possible while honoring the traditions that define our craft.
                </p>
              </div>
              <Link href="/contact" className="btn-primary">
                Start Your Project
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-french-gray/10 rounded-lg flex items-center justify-center">
                <div className="text-center text-charcoal/60">
                  <div className="w-24 h-24 bg-deep-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🔨</span>
                  </div>
                  <p className="text-sm">Founder Alexander Voss in our workshop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Our Values
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              These principles guide every decision we make, from material selection to final installation, ensuring that our work reflects our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-charcoal mb-4 font-display">
                  {value.title}
                </h3>
                <p className="text-charcoal/80 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Our Team
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our success is built on the expertise and dedication of our team members, each bringing unique skills and perspectives to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="text-center group">
                <div className="relative aspect-square mb-6 overflow-hidden rounded-lg bg-french-gray/10 group-hover:shadow-lg transition-shadow duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-charcoal/60">
                      <div className="w-16 h-16 bg-deep-green/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl">👤</span>
                      </div>
                      <p className="text-xs">{member.name}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2 font-display">
                  {member.name}
                </h3>
                <p className="text-deep-green font-medium mb-3">
                  {member.title}
                </p>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                <div className="space-y-1">
                  {member.specialties.map((specialty, i) => (
                    <span key={i} className="inline-block bg-french-gray/20 text-charcoal/70 text-xs px-2 py-1 rounded-full mr-1 mb-1">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Our Journey
            </h2>
            <p className="text-xl text-french-gray max-w-3xl mx-auto">
              From a small workshop to a recognized leader in luxury cabinetry, our journey has been marked by growth, innovation, and unwavering commitment to quality.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-deep-green/30"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-deep-green rounded-full border-4 border-charcoal"></div>
                  <div className="ml-16">
                    <div className="flex items-center mb-2">
                      <span className="text-deep-green font-bold text-lg mr-4">{milestone.year}</span>
                      <h3 className="text-xl font-semibold text-ivory font-display">{milestone.title}</h3>
                    </div>
                    <p className="text-french-gray leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workshop & Capabilities */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
                Our Workshop
              </h2>
              <div className="prose-luxury text-charcoal/80 mb-8">
                <p>
                  Our 15,000-square-foot workshop in California's Central Valley represents the perfect marriage of traditional craftsmanship and modern technology. Here, master woodworkers use both time-honored hand tools and precision CNC equipment to create cabinetry that meets the highest standards of quality and beauty.
                </p>
                <p>
                  The workshop is organized into specialized areas: a design studio for client consultations, a material storage facility with climate-controlled environments, a traditional hand-crafting area, and a modern finishing booth with pharmaceutical-grade air quality. This setup allows us to maintain the highest standards while working efficiently on multiple projects.
                </p>
                <p>
                  Every piece that leaves our workshop carries with it the dedication and expertise of our entire team. We believe that the quality of our work is a reflection of the care we put into every detail, from the initial design to the final installation.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-deep-green mb-2">15,000</div>
                  <div className="text-sm text-charcoal/70">Square Feet</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-deep-green mb-2">25+</div>
                  <div className="text-sm text-charcoal/70">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-deep-green mb-2">500+</div>
                  <div className="text-sm text-charcoal/70">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-deep-green mb-2">100%</div>
                  <div className="text-sm text-charcoal/70">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Design Studio</h4>
                  <p className="text-sm text-charcoal/70">Client consultation and design development space</p>
                </div>
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Material Storage</h4>
                  <p className="text-sm text-charcoal/70">Climate-controlled environment for premium woods</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Hand Crafting</h4>
                  <p className="text-sm text-charcoal/70">Traditional woodworking techniques and tools</p>
                </div>
                <div className="bg-french-gray/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Finishing Booth</h4>
                  <p className="text-sm text-charcoal/70">Pharmaceutical-grade air quality for perfect finishes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-french-gray mb-12 max-w-3xl mx-auto">
            Every great project begins with a conversation. Let's discuss how our team can bring your vision to life with the finest materials and time-honored craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-ivory text-deep-green px-8 py-4 rounded font-medium hover:bg-ivory/90 transition-colors">
              Request a Consultation
            </Link>
            <Link href="/portfolio" className="border border-ivory text-ivory px-8 py-4 rounded font-medium hover:bg-ivory hover:text-deep-green transition-colors">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
