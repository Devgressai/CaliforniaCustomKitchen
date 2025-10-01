import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import { CTASection } from '@/components/CTASection'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Our Process | Custom Kitchen Design & Cabinetry Manufacturing",
  description: "Discover our meticulous 6-phase process for creating custom kitchens and cabinetry. From initial consultation to white-glove installation, experience uncompromising craftsmanship.",
  keywords: [
    'custom kitchen design process',
    'cabinetry manufacturing process',
    'luxury kitchen consultation',
    'custom millwork process',
    'white-glove installation',
    'design development process'
  ],
  openGraph: {
    title: "Our Process | AV's Cabinets",
    description: "Meticulous 6-phase process for creating custom kitchens and cabinetry with uncompromising craftsmanship.",
    images: ['/images/process-hero.webp'],
  },
}

export default function ProcessPage() {
  return (
    <>
      <HeroQuiet
        title="Craftsmanship as a Journey"
        subtitle="Our Six-Phase Process"
        description="From the first conversation to the final installation detail, every step in our process is designed to exceed expectations while honoring the traditions of fine craftsmanship."
        imageSrc="/images/process-hero.webp"
        imageAlt="Master craftsman working on custom cabinetry in AV's Cabinets workshop showing attention to detail"
        primaryCTA={{
          text: "Begin Your Journey",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Our Work",
          href: "/portfolio"
        }}
      />

      {/* Process Overview */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-8 text-balance">
              The Art of Collaborative Creation
            </h1>
            <div className="prose-luxury">
              <p className="text-xl leading-relaxed text-charcoal/80 mb-8">
                Creating exceptional custom cabinetry is not merely a manufacturing process—it is a collaborative journey that begins with understanding your vision and culminates in the installation of pieces that will serve your family for generations. Our six-phase methodology, refined over hundreds of projects, ensures that every detail receives the attention it deserves while maintaining clear communication and project momentum throughout the entire experience.
              </p>
              <p className="text-lg leading-relaxed text-charcoal/70 mb-6">
                This systematic approach allows us to navigate the complex intersection of aesthetic vision, functional requirements, and technical constraints while providing multiple opportunities for refinement and approval. Each phase builds upon the previous, creating a foundation of understanding and agreement that supports the exceptional craftsmanship for which we are known.
              </p>
              <p className="text-base leading-relaxed text-charcoal/70">
                Whether you are renovating a historic estate in Montecito or creating a contemporary masterpiece in Atherton, our process adapts to your unique requirements while maintaining the standards of excellence that define every AV's Cabinets project. The result is not just beautiful cabinetry, but a collaborative experience that honors both your vision and our commitment to craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Six Phases of Excellence
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our proven methodology ensures exceptional results while providing clear milestones and expectations throughout your project journey.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-brass/30 hidden lg:block"></div>
            
            {/* Phase 1 */}
            <div className="relative mb-16">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div className="lg:text-right lg:pr-8">
                  <div className="bg-ivory p-8 rounded-lg border border-french-gray/20 shadow-lg">
                    <div className="flex items-center lg:justify-end mb-4">
                      <span className="bg-deep-green text-ivory w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4 lg:mr-0 lg:ml-4 lg:order-2">01</span>
                      <h3 className="font-display text-2xl font-bold text-charcoal lg:order-1">Discovery & Consultation</h3>
                    </div>
                    <p className="text-charcoal/80 mb-4">
                      Our journey begins with deep listening. We explore your lifestyle, aesthetic preferences, functional needs, and long-term vision through comprehensive consultation and site analysis.
                    </p>
                    <div className="space-y-2 text-sm text-charcoal/70">
                      <div className="flex items-center lg:justify-end">
                        <span className="w-2 h-2 bg-brass rounded-full mr-2"></span>
                        <span>In-home consultation and space analysis</span>
                      </div>
                      <div className="flex items-center lg:justify-end">
                        <span className="w-2 h-2 bg-brass rounded-full mr-2"></span>
                        <span>Lifestyle and functional requirements assessment</span>
                      </div>
                      <div className="flex items-center lg:justify-end">
                        <span className="w-2 h-2 bg-brass rounded-full mr-2"></span>
                        <span>Architectural context and integration planning</span>
                      </div>
                      <div className="flex items-center lg:justify-end">
                        <span className="w-2 h-2 bg-brass rounded-full mr-2"></span>
                        <span>Budget framework and timeline establishment</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 lg:mt-0 lg:pl-8">
                  <Image
                    src="/images/process/phase-1-consultation.webp"
                    alt="Initial consultation process showing design discussion and space analysis"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brass rounded-full border-4 border-ivory hidden lg:block"></div>
            </div>

            {/* Phase 2 */}
            <div className="relative mb-16">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div className="lg:order-2 lg:pl-8">
                  <div className="bg-ivory p-8 rounded-lg border border-french-gray/20 shadow-lg">
                    <div className="flex items-center mb-4">
                      <span className="bg-deep-green text-ivory w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">02</span>
                      <h3 className="font-display text-2xl font-bold text-charcoal">Conceptual Design</h3>
                    </div>
                    <p className="text-charcoal/80 mb-4">
                      We translate your vision into preliminary design concepts, exploring multiple layout options and aesthetic approaches to establish the fundamental design direction.
                    </p>
                    <div className="space-y-2 text-sm text-charcoal/70">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-brass rounded-full mr-2"></span>
                        <span>Multiple layout explorations and space planning</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-brass rounded-full mr-2"></span>
                        <span>Aesthetic direction and style development</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-brass rounded-full mr-2"></span>
                        <span>Preliminary material and finish exploration</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-brass rounded-full mr-2"></span>
                        <span>Functional zone organization and workflow optimization</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 lg:mt-0 lg:order-1 lg:pr-8">
                  <Image
                    src="/images/process/phase-2-conceptual-design.webp"
                    alt="Conceptual design phase showing sketches, layouts, and initial design development"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brass rounded-full border-4 border-ivory hidden lg:block"></div>
            </div>

            {/* Phase 3 */}
            <div className="relative mb-16">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div className="lg:text-right lg:pr-8">
                  <div className="bg-ivory p-8 rounded-lg border border-french-gray/20 shadow-lg">
                    <div className="flex items-center lg:justify-end mb-4">
                      <span className="bg-deep-green text-ivory w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4 lg:mr-0 lg:ml-4 lg:order-2">03</span>
                      <h3 className="font-display text-2xl font-bold text-charcoal lg:order-1">Design Development</h3>
                    </div>
                    <p className="text-charcoal/80 mb-4">
                      The selected concept evolves into detailed design solutions with precise dimensions, comprehensive specifications, and photorealistic 3D visualizations.
                    </p>
                    <div className="space-y-2 text-sm text-charcoal/70">
                      <div className="flex items-center lg:justify-end">
                        <span className="w-2 h-2 bg-brass rounded-full mr-2"></span>
                        <span>Detailed technical drawings and specifications</span>
                      </div>
                      <div className="flex items-center lg:justify-end">
                        <span className="w-2 h-2 bg-brass rounded-full mr-2"></span>
                        <span>3D renderings and virtual walkthroughs</span>
                      </div>
                      <div className="flex items-center lg:justify-end">
                        <span className="w-2 h-2 bg-brass rounded-full mr-2"></span>
                        <span>Material selection and finish specification</span>
                      </div>
                      <div className="flex items-center lg:justify-end">
                        <span className="w-2 h-2 bg-brass rounded-full mr-2"></span>
                        <span>Hardware selection and operational planning</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 lg:mt-0 lg:pl-8">
                  <Image
                    src="/images/process/phase-3-design-development.webp"
                    alt="Design development showing detailed drawings, 3D renderings, and material specifications"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brass rounded-full border-4 border-ivory hidden lg:block"></div>
            </div>

            {/* Phase 4 */}
            <div className="relative mb-16">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div className="lg:order-2 lg:pl-8">
                  <div className="bg-ivory p-8 rounded-lg border border-french-gray/20 shadow-lg">
                    <div className="flex items-center mb-4">
                      <span className="bg-deep-green text-ivory w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">04</span>
                      <h3 className="font-display text-2xl font-bold text-charcoal">Final Specifications</h3>
                    </div>
                    <p className="text-charcoal/80 mb-4">
                      Every detail is finalized through comprehensive shop drawings, material samples, and final approvals that serve as the blueprint for fabrication.
                    </p>
                    <div className="space-y-2 text-sm text-charcoal/70">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-brass rounded-full mr-2"></span>
                        <span>Comprehensive shop drawings with construction details</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-brass rounded-full mr-2"></span>
                        <span>Final material samples and finish approvals</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-brass rounded-full mr-2"></span>
                        <span>Hardware specifications and operational verification</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-brass rounded-full mr-2"></span>
                        <span>Project timeline and milestone scheduling</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 lg:mt-0 lg:order-1 lg:pr-8">
                  <Image
                    src="/images/process/phase-4-specifications.webp"
                    alt="Final specifications phase showing shop drawings, material samples, and approval process"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brass rounded-full border-4 border-ivory hidden lg:block"></div>
            </div>

            {/* Phase 5 */}
            <div className="relative mb-16">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div className="lg:text-right lg:pr-8">
                  <div className="bg-ivory p-8 rounded-lg border border-french-gray/20 shadow-lg">
                    <div className="flex items-center lg:justify-end mb-4">
                      <span className="bg-deep-green text-ivory w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4 lg:mr-0 lg:ml-4 lg:order-2">05</span>
                      <h3 className="font-display text-2xl font-bold text-charcoal lg:order-1">Fabrication Excellence</h3>
                    </div>
                    <p className="text-charcoal/80 mb-4">
                      Master craftsmen bring your vision to life in our workshop, combining traditional techniques with modern precision to create heirloom-quality pieces.
                    </p>
                    <div className="space-y-2 text-sm text-charcoal/70">
                      <div className="flex items-center lg:justify-end">
                        <span className="w-2 h-2 bg-brass rounded-full mr-2"></span>
                        <span>Precision machining and traditional joinery techniques</span>
                      </div>
                      <div className="flex items-center lg:justify-end">
                        <span className="w-2 h-2 bg-brass rounded-full mr-2"></span>
                        <span>Multi-stage quality control and inspection</span>
                      </div>
                      <div className="flex items-center lg:justify-end">
                        <span className="w-2 h-2 bg-brass rounded-full mr-2"></span>
                        <span>Museum-grade finishing in controlled environment</span>
                      </div>
                      <div className="flex items-center lg:justify-end">
                        <span className="w-2 h-2 bg-brass rounded-full mr-2"></span>
                        <span>Pre-installation assembly and final inspection</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 lg:mt-0 lg:pl-8">
                  <Image
                    src="/images/process/phase-5-fabrication.webp"
                    alt="Fabrication process showing master craftsmen working on custom cabinetry in workshop"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brass rounded-full border-4 border-ivory hidden lg:block"></div>
            </div>

            {/* Phase 6 */}
            <div className="relative">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div className="lg:order-2 lg:pl-8">
                  <div className="bg-ivory p-8 rounded-lg border border-french-gray/20 shadow-lg">
                    <div className="flex items-center mb-4">
                      <span className="bg-deep-green text-ivory w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">06</span>
                      <h3 className="font-display text-2xl font-bold text-charcoal">White-Glove Installation</h3>
                    </div>
                    <p className="text-charcoal/80 mb-4">
                      Our master installers complete your project with precision and care, protecting your home while ensuring every detail meets our exacting standards.
                    </p>
                    <div className="space-y-2 text-sm text-charcoal/70">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-brass rounded-full mr-2"></span>
                        <span>Complete home protection and job site preparation</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-brass rounded-full mr-2"></span>
                        <span>Precision installation with laser-level accuracy</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-brass rounded-full mr-2"></span>
                        <span>Hardware adjustment and operational verification</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-brass rounded-full mr-2"></span>
                        <span>Final inspection and client walkthrough</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 lg:mt-0 lg:order-1 lg:pr-8">
                  <Image
                    src="/images/process/phase-6-installation.webp"
                    alt="White-glove installation process showing precision fitting and protection protocols"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brass rounded-full border-4 border-ivory hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 1 Deep Dive */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Phase 1: Discovery & Consultation
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              The foundation of exceptional cabinetry begins with deep understanding. Our comprehensive discovery process ensures that every aspect of your lifestyle and vision informs our design decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="font-display text-2xl font-bold text-charcoal mb-6">
                The Art of Listening
              </h3>
              <div className="prose-luxury">
                <p className="text-lg leading-relaxed text-charcoal/80 mb-6">
                  Our initial consultation is far more than a simple needs assessment—it's an exploration of how you live, entertain, and interact with your space. We spend considerable time understanding your daily routines, cooking habits, entertaining patterns, and long-term lifestyle goals. This deep dive into your personal and family dynamics informs every subsequent design decision.
                </p>
                <p className="text-base leading-relaxed text-charcoal/70 mb-6">
                  We examine not just what you want, but why you want it. Do you prefer to cook alone or with family members? How often do you entertain, and what style of entertaining do you prefer? Are there specific cuisines or cooking techniques that require specialized storage or equipment? These conversations reveal the functional requirements that will drive our design approach.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Comprehensive lifestyle assessment and family dynamics analysis</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Cooking habits and entertaining patterns evaluation</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Long-term vision and adaptability planning</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Aesthetic preferences and inspiration exploration</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/process/consultation-lifestyle-assessment.webp"
                alt="Lifestyle assessment consultation showing detailed discussion of family needs and cooking habits"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-grain p-8 rounded-lg border border-french-gray/20">
              <h4 className="font-display text-xl font-bold text-charcoal mb-6">
                Architectural Analysis
              </h4>
              <div className="space-y-4 text-charcoal/70">
                <p>
                  <strong>Structural Assessment:</strong> Evaluation of existing conditions, load-bearing elements, and modification possibilities to optimize space utilization.
                </p>
                <p>
                  <strong>Natural Light Study:</strong> Analysis of daylight patterns, seasonal variations, and artificial lighting integration opportunities.
                </p>
                <p>
                  <strong>Traffic Flow Analysis:</strong> Understanding movement patterns and sight lines to create intuitive, efficient layouts.
                </p>
                <p>
                  <strong>Integration Planning:</strong> Coordination with adjacent spaces and existing architectural elements for seamless visual continuity.
                </p>
              </div>
            </div>

            <div className="bg-charcoal text-ivory p-8 rounded-lg">
              <h4 className="font-display text-xl font-bold mb-6">
                Technical Documentation
              </h4>
              <div className="space-y-4 text-french-gray">
                <p>
                  <strong className="text-brass">Precision Measurements:</strong> Laser measurement and 3D scanning for perfect dimensional accuracy and field verification.
                </p>
                <p>
                  <strong className="text-brass">Photographic Record:</strong> Comprehensive documentation of existing conditions, architectural details, and surrounding context.
                </p>
                <p>
                  <strong className="text-brass">Utility Mapping:</strong> Location and assessment of electrical, plumbing, and HVAC systems affecting design options.
                </p>
                <p>
                  <strong className="text-brass">Code Analysis:</strong> Review of applicable building codes, accessibility requirements, and permit considerations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fabrication Excellence Deep Dive */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Phase 5: Fabrication Excellence
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Where vision becomes reality through the marriage of traditional craftsmanship and modern precision. Our workshop transforms premium materials into heirloom-quality cabinetry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative">
              <Image
                src="/images/process/workshop-traditional-joinery.webp"
                alt="Traditional joinery techniques being performed by master craftsman in workshop"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-charcoal mb-6">
                Traditional Techniques, Modern Precision
              </h3>
              <div className="prose-luxury">
                <p className="text-lg leading-relaxed text-charcoal/80 mb-6">
                  Our fabrication process combines time-honored joinery techniques with contemporary manufacturing precision. Master craftsmen trained in traditional methods work alongside computer-controlled machinery to achieve tolerances and quality levels that neither approach could accomplish alone.
                </p>
                <p className="text-base leading-relaxed text-charcoal/70 mb-6">
                  Each piece begins with careful material selection and grain matching, ensuring visual continuity across the entire project. Our craftsmen understand wood as a living material, accounting for its natural characteristics and behavior throughout the construction process.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Mortise and tenon joinery for maximum strength and longevity</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Hand-fitted joints ensuring perfect alignment and smooth operation</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Sequential grain matching across all visible surfaces</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Individual component inspection and approval before assembly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-ivory p-12 rounded-lg mb-16">
            <h3 className="font-display text-2xl font-bold text-charcoal mb-8 text-center">
              Quality Control Checkpoints
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  checkpoint: 'Material Inspection',
                  description: 'Verification of species, grade, moisture content, and defect assessment before machining begins',
                  standards: ['Moisture content 6-8%', 'Grade verification', 'Grain matching approval', 'Defect assessment']
                },
                {
                  checkpoint: 'Machining Verification',
                  description: 'Dimensional accuracy and surface quality inspection after each machining operation',
                  standards: ['±1/64" tolerance', 'Surface smoothness', 'Joint fit verification', 'Profile accuracy']
                },
                {
                  checkpoint: 'Assembly Inspection',
                  description: 'Complete inspection of assembled components before finishing processes begin',
                  standards: ['Joint integrity', 'Alignment verification', 'Hardware operation', 'Surface preparation']
                },
                {
                  checkpoint: 'Finish Quality Control',
                  description: 'Multi-stage finish inspection ensuring color consistency and surface perfection',
                  standards: ['Color matching', 'Surface smoothness', 'Sheen consistency', 'Durability testing']
                }
              ].map((checkpoint, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-deep-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-deep-green font-bold text-xl">{index + 1}</span>
                  </div>
                  <h4 className="font-display text-lg font-semibold text-charcoal mb-3">
                    {checkpoint.checkpoint}
                  </h4>
                  <p className="text-sm text-charcoal/70 mb-4 leading-relaxed">
                    {checkpoint.description}
                  </p>
                  <ul className="text-xs text-charcoal/60 space-y-1">
                    {checkpoint.standards.map((standard, standardIndex) => (
                      <li key={standardIndex}>• {standard}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-charcoal text-ivory p-8 rounded-lg">
              <h4 className="font-display text-xl font-bold mb-6">
                Workshop Environment
              </h4>
              <div className="space-y-4 text-french-gray">
                <p>
                  <strong className="text-brass">Climate Control:</strong> Maintained temperature and humidity levels ensuring optimal working conditions and material stability.
                </p>
                <p>
                  <strong className="text-brass">Dust Collection:</strong> Industrial-grade dust collection systems protecting both craftsmen and work quality.
                </p>
                <p>
                  <strong className="text-brass">Tool Maintenance:</strong> Daily tool calibration and maintenance ensuring consistent precision and surface quality.
                </p>
                <p>
                  <strong className="text-brass">Safety Protocols:</strong> Comprehensive safety systems protecting our craftsmen while maintaining productivity.
                </p>
              </div>
            </div>

            <div className="bg-grain p-8 rounded-lg border border-french-gray/20">
              <h4 className="font-display text-xl font-bold text-charcoal mb-6">
                Finishing Excellence
              </h4>
              <div className="space-y-4 text-charcoal/70">
                <p>
                  <strong>Controlled Environment:</strong> Pharmaceutical-grade air filtration and climate control in our 2,000 sq ft finishing facility.
                </p>
                <p>
                  <strong>Surface Preparation:</strong> Meticulous sanding progression through 320 grit for perfect smoothness and stain acceptance.
                </p>
                <p>
                  <strong>Color Consistency:</strong> Spectrophotometer verification ensuring perfect color matching across all components.
                </p>
                <p>
                  <strong>Protective Coatings:</strong> Multiple coat systems providing superior durability and long-term protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Architects & Designers */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              For Architects & Interior Designers
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We understand the collaborative nature of luxury residential projects. Our process is designed to integrate seamlessly with your design vision and project management requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="font-display text-2xl font-bold text-charcoal mb-6">
                Collaborative Design Integration
              </h3>
              <div className="prose-luxury">
                <p className="text-lg leading-relaxed text-charcoal/80 mb-6">
                  Our team works as an extension of your design practice, providing technical expertise and fabrication insights that enhance your creative vision. We participate in design development meetings, provide constructability input, and ensure that our work seamlessly integrates with your overall project narrative.
                </p>
                <p className="text-base leading-relaxed text-charcoal/70 mb-6">
                  We understand the importance of maintaining design intent while navigating the practical realities of custom fabrication. Our early involvement in the design process helps identify opportunities and constraints that can inform design decisions before they become costly change orders.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Early design phase consultation and constructability review</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Technical drawing coordination and specification development</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Material and finish selection support with sample coordination</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm text-charcoal/70">Project schedule integration and milestone coordination</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/process/architect-designer-collaboration.webp"
                alt="Collaborative meeting between AV's Cabinets team and architects reviewing project drawings"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Design Development Support',
                description: 'Technical expertise during conceptual and design development phases',
                services: ['Constructability analysis', 'Material recommendations', 'Hardware selection guidance', 'Cost estimation support']
              },
              {
                title: 'Documentation Coordination',
                description: 'Comprehensive technical documentation integrated with your project drawings',
                services: ['Shop drawing development', 'Specification writing', 'Detail coordination', 'As-built documentation']
              },
              {
                title: 'Project Management',
                description: 'Seamless integration with your project schedule and quality standards',
                services: ['Schedule coordination', 'Progress reporting', 'Quality control protocols', 'Installation coordination']
              }
            ].map((service, index) => (
              <div key={index} className="bg-grain p-6 rounded-lg border border-french-gray/20">
                <h4 className="font-display text-lg font-bold text-charcoal mb-3">
                  {service.title}
                </h4>
                <p className="text-sm text-charcoal/80 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.services.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-xs text-charcoal/60 flex items-start">
                      <span className="w-1 h-1 bg-brass rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-charcoal text-ivory p-12 rounded-lg">
            <h3 className="font-display text-2xl font-bold mb-8 text-center">
              Professional Resources & Support
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-display text-lg font-semibold mb-6 text-brass">
                  Technical Resources
                </h4>
                <div className="space-y-4 text-french-gray">
                  <p>
                    <strong>CAD Library:</strong> Comprehensive library of standard details, hardware specifications, and construction assemblies.
                  </p>
                  <p>
                    <strong>Material Specifications:</strong> Detailed technical specifications for all wood species, finishes, and hardware systems.
                  </p>
                  <p>
                    <strong>Installation Guidelines:</strong> Comprehensive installation details and protection protocols for luxury residential projects.
                  </p>
                  <p>
                    <strong>Maintenance Documentation:</strong> Care and maintenance guidelines for client handover and long-term stewardship.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold mb-6 text-brass">
                  Professional Services
                </h4>
                <div className="space-y-4 text-french-gray">
                  <p>
                    <strong>CEU Presentations:</strong> Continuing education programs covering luxury cabinetry design and specification.
                  </p>
                  <p>
                    <strong>Showroom Access:</strong> Private showroom tours and material consultations for you and your clients.
                  </p>
                  <p>
                    <strong>Project Photography:</strong> Professional photography services for marketing and portfolio development.
                  </p>
                  <p>
                    <strong>Reference Network:</strong> Access to our network of preferred contractors, suppliers, and specialty trades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Timeline & Investment */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Timeline & Investment Planning
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Understanding project timelines and investment levels helps ensure realistic expectations and successful project outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-ivory p-8 rounded-lg border border-french-gray/20">
              <h3 className="font-display text-xl font-bold text-charcoal mb-6">
                Typical Project Timeline
              </h3>
              <div className="space-y-4">
                {[
                  { phase: 'Discovery & Consultation', duration: '2-3 weeks', description: 'Initial meetings, site analysis, and program development' },
                  { phase: 'Conceptual Design', duration: '2-4 weeks', description: 'Layout exploration and aesthetic direction establishment' },
                  { phase: 'Design Development', duration: '3-5 weeks', description: 'Detailed design and 3D visualization development' },
                  { phase: 'Final Specifications', duration: '2-3 weeks', description: 'Shop drawings, approvals, and fabrication preparation' },
                  { phase: 'Fabrication', duration: '8-12 weeks', description: 'Material procurement, fabrication, and quality control' },
                  { phase: 'Installation', duration: '1-2 weeks', description: 'Site preparation, installation, and final adjustments' }
                ].map((phase, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-20 text-sm font-medium text-brass mr-4 flex-shrink-0">
                      {phase.duration}
                    </div>
                    <div>
                      <h4 className="font-medium text-charcoal mb-1">{phase.phase}</h4>
                      <p className="text-sm text-charcoal/70">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-french-gray/20">
                <p className="text-sm text-charcoal/70">
                  <strong>Total Project Duration:</strong> 4-7 months from initial consultation to completion, depending on project complexity and scope.
                </p>
              </div>
            </div>

            <div className="bg-charcoal text-ivory p-8 rounded-lg">
              <h3 className="font-display text-xl font-bold mb-6">
                Investment Considerations
              </h3>
              <div className="space-y-4 text-french-gray">
                <p>
                  <strong className="text-brass">Design Complexity:</strong> Simple, rectilinear designs are more cost-effective than complex curved elements or specialized joinery details.
                </p>
                <p>
                  <strong className="text-brass">Material Selection:</strong> Wood species, grain matching requirements, and finish specifications significantly impact project investment.
                </p>
                <p>
                  <strong className="text-brass">Hardware & Accessories:</strong> Premium hardware systems and specialized organizational features add functionality and value.
                </p>
                <p>
                  <strong className="text-brass">Project Scope:</strong> Kitchen-only projects versus whole-house millwork programs require different planning approaches.
                </p>
                <p>
                  <strong className="text-brass">Site Conditions:</strong> Challenging access, protection requirements, and coordination complexity affect installation costs.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-french-gray/20">
                <p className="text-sm text-french-gray">
                  <strong className="text-brass">Investment Range:</strong> $150,000 - $800,000+ depending on scope, materials, and complexity. We provide detailed cost estimates during the design development phase.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-ivory p-12 rounded-lg">
            <h3 className="font-display text-2xl font-bold text-charcoal mb-8 text-center">
              Factors Affecting Timeline & Investment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  category: 'Design Variables',
                  factors: ['Layout complexity', 'Custom details', 'Hardware selection', 'Finish specifications', 'Grain matching requirements']
                },
                {
                  category: 'Material Factors',
                  factors: ['Wood species selection', 'Availability and sourcing', 'Sustainable certification', 'Exotic species permits', 'Reclaimed material processing']
                },
                {
                  category: 'Project Conditions',
                  factors: ['Site accessibility', 'Protection requirements', 'Coordination complexity', 'Permit requirements', 'Seasonal scheduling']
                }
              ].map((category, index) => (
                <div key={index}>
                  <h4 className="font-display text-lg font-semibold text-charcoal mb-4">
                    {category.category}
                  </h4>
                  <ul className="space-y-2">
                    {category.factors.map((factor, factorIndex) => (
                      <li key={factorIndex} className="text-sm text-charcoal/70 flex items-start">
                        <span className="w-1 h-1 bg-brass rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {factor}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-charcoal mb-6">
              Quality Assurance & Warranty
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Our commitment to excellence extends far beyond project completion. Comprehensive quality assurance and warranty programs protect your investment for years to come.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-grain p-8 rounded-lg border border-french-gray/20">
              <h3 className="font-display text-xl font-bold text-charcoal mb-6">
                Multi-Stage Quality Control
              </h3>
              <div className="space-y-4 text-charcoal/70">
                <p>
                  <strong>Material Inspection:</strong> Every piece of lumber and hardware component undergoes inspection before entering our fabrication process.
                </p>
                <p>
                  <strong>In-Process Verification:</strong> Quality checkpoints throughout fabrication ensure consistent standards and immediate correction of any issues.
                </p>
                <p>
                  <strong>Pre-Delivery Inspection:</strong> Complete assembly and inspection in our workshop before any components leave for installation.
                </p>
                <p>
                  <strong>Installation Quality Control:</strong> Final inspection and adjustment during installation to ensure perfect operation and appearance.
                </p>
                <p>
                  <strong>Client Walkthrough:</strong> Comprehensive review with you to ensure complete satisfaction before project completion.
                </p>
              </div>
            </div>

            <div className="bg-charcoal text-ivory p-8 rounded-lg">
              <h3 className="font-display text-xl font-bold mb-6">
                Comprehensive Warranty Program
              </h3>
              <div className="space-y-4 text-french-gray">
                <p>
                  <strong className="text-brass">Construction Warranty:</strong> 5-year warranty on all joinery, construction methods, and structural integrity.
                </p>
                <p>
                  <strong className="text-brass">Finish Warranty:</strong> 3-year warranty on all finishing work including stains, topcoats, and color consistency.
                </p>
                <p>
                  <strong className="text-brass">Hardware Warranty:</strong> Full manufacturer warranties plus our installation and adjustment guarantee.
                </p>
                <p>
                  <strong className="text-brass">Installation Warranty:</strong> 2-year warranty on all installation work and operational adjustments.
                </p>
                <p>
                  <strong className="text-brass">Lifetime Support:</strong> Ongoing support, maintenance guidance, and repair services for the life of your cabinetry.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-grain p-12 rounded-lg">
            <h3 className="font-display text-2xl font-bold text-charcoal mb-8 text-center">
              Ongoing Relationship & Support
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  service: 'Annual Maintenance',
                  description: 'Optional annual inspection and maintenance service to ensure optimal performance',
                  includes: ['Hardware adjustment', 'Finish conditioning', 'Operational verification', 'Preventive care guidance']
                },
                {
                  service: 'Repair Services',
                  description: 'Professional repair services for any damage or wear that occurs over time',
                  includes: ['Finish touch-up', 'Hardware replacement', 'Structural repair', 'Modification services']
                },
                {
                  service: 'Expansion Services',
                  description: 'Additional cabinetry and millwork as your needs evolve and expand',
                  includes: ['Matching existing work', 'Coordinated additions', 'Style evolution', 'Technology integration']
                }
              ].map((service, index) => (
                <div key={index} className="text-center">
                  <h4 className="font-display text-lg font-semibold text-charcoal mb-4">
                    {service.service}
                  </h4>
                  <p className="text-sm text-charcoal/80 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-xs text-charcoal/60 flex items-start justify-center">
                        <span className="w-1 h-1 bg-brass rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Begin Your Journey?"
        description="Experience the difference that meticulous process and uncompromising craftsmanship can make. Schedule your private consultation to begin creating cabinetry that will serve your family for generations."
        primaryCTA={{
          text: "Schedule Private Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Our Portfolio",
          href: "/portfolio"
        }}
        background="dark"
      />
    </>
  )
}
