import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: "Kitchen Renovation Costs | Kitchen Remodeling Prices | PineWood Cabinets",
  description: "Complete guide to kitchen renovation costs including budgeting, pricing factors, and cost breakdowns. Learn how to plan your kitchen renovation budget.",
  keywords: [
    'kitchen renovation costs',
    'kitchen remodeling prices',
    'kitchen renovation budget',
    'kitchen renovation cost guide',
    'kitchen renovation pricing',
    'kitchen renovation factors',
    'kitchen renovation planning',
    'kitchen renovation costs 2025'
  ],
  openGraph: {
    title: "Kitchen Renovation Costs | PineWood Cabinets",
    description: "Complete guide to kitchen renovation costs including budgeting, pricing factors, and cost breakdowns.",
    images: ['/images/process/kitchen-renovation-costs-hero.webp'],
  },
}

const costFactors = [
  {
    factor: 'Kitchen Size',
    description: 'The size of your kitchen directly impacts the cost of renovation. Larger kitchens require more materials, labor, and time.',
    impact: 'High',
    tips: ['Measure accurately', 'Consider layout changes', 'Plan for waste materials']
  },
  {
    factor: 'Material Quality',
    description: 'The quality of materials you choose significantly affects the overall cost. Premium materials cost more but offer better durability and aesthetics.',
    impact: 'High',
    tips: ['Set material budget', 'Compare quality vs. cost', 'Consider long-term value']
  },
  {
    factor: 'Layout Changes',
    description: 'Moving plumbing, electrical, or structural elements increases costs due to additional labor and materials required.',
    impact: 'High',
    tips: ['Minimize layout changes', 'Plan early', 'Get multiple quotes']
  },
  {
    factor: 'Appliances',
    description: 'Appliance costs vary widely based on brand, features, and quality. High-end appliances can significantly increase your budget.',
    impact: 'Medium',
    tips: ['Research appliance options', 'Consider energy efficiency', 'Plan for installation']
  }
]

const costRanges = [
  {
    level: 'Budget Renovation',
    range: '$15,000 - $30,000',
    description: 'Basic renovation with standard materials and minimal layout changes.',
    includes: ['Standard cabinets', 'Laminate countertops', 'Basic appliances', 'Paint and hardware']
  },
  {
    level: 'Mid-Range Renovation',
    range: '$30,000 - $75,000',
    description: 'Quality renovation with good materials and some layout improvements.',
    includes: ['Semi-custom cabinets', 'Quartz countertops', 'Mid-range appliances', 'Updated lighting']
  },
  {
    level: 'Luxury Renovation',
    range: '$75,000 - $150,000+',
    description: 'High-end renovation with premium materials and custom features.',
    includes: ['Custom cabinets', 'Natural stone countertops', 'High-end appliances', 'Custom lighting']
  }
]

export default function KitchenRenovationCostsPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'Process', href: '/process' },
              { name: 'Kitchen Renovation Costs', href: '/process/kitchen-renovation-costs', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Kitchen Renovation Costs"
        subtitle="Complete Guide to Kitchen Renovation Pricing"
        description="Learn about kitchen renovation costs, budgeting factors, and cost breakdowns. Discover how to plan your kitchen renovation budget effectively."
        imageSrc="process/kitchen-renovation-costs-hero.webp"
        imageAlt="Beautiful renovated kitchen showcasing quality materials and design"
        primaryCTA={{
          text: "Get Your Quote",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Our Process",
          href: "/process"
        }}
      />

      {/* Introduction */}
      <section className="py-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Understanding Kitchen Renovation Costs
            </h2>
            <p className="text-xl text-charcoal/80">
              Kitchen renovation costs can vary significantly based on many factors. Understanding these factors and planning your budget carefully can help you achieve your dream kitchen within your financial means.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Ranges */}
      <section className="py-24 bg-grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Kitchen Renovation Cost Ranges
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Here are typical cost ranges for different levels of kitchen renovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {costRanges.map((range, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <h3 className="text-2xl font-semibold text-charcoal mb-4">{range.level}</h3>
                <div className="text-3xl font-bold text-deep-green mb-4">{range.range}</div>
                <p className="text-charcoal/70 mb-6">{range.description}</p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-charcoal">Includes:</h4>
                  <ul className="space-y-2">
                    {range.includes.map((item, i) => (
                      <li key={i} className="flex items-center text-charcoal/70">
                        <span className="w-1.5 h-1.5 bg-deep-green rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Factors That Affect Kitchen Renovation Costs
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Understanding these factors can help you plan your budget and make informed decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {costFactors.map((factor, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-charcoal">{factor.factor}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    factor.impact === 'High' ? 'bg-red-100 text-red-800' : 
                    factor.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-green-100 text-green-800'
                  }`}>
                    {factor.impact} Impact
                  </span>
                </div>
                <p className="text-charcoal/70 mb-6">{factor.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-charcoal">Tips:</h4>
                  <ul className="space-y-2">
                    {factor.tips.map((tip, i) => (
                      <li key={i} className="flex items-center text-charcoal/70">
                        <span className="w-1.5 h-1.5 bg-deep-green rounded-full mr-3"></span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Plan Your Kitchen Renovation?"
        description="Let's discuss your vision and create a detailed cost estimate for your kitchen renovation project."
        primaryCTA={{
          text: "Get Your Quote",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Our Process",
          href: "/process"
        }}
      />
    </>
  )
}
