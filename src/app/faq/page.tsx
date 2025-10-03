import { Metadata } from 'next'
import { HeroQuiet } from '@/components/HeroQuiet'
import CTASection from '@/components/CTASection'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: "Kitchen Design FAQ | Common Questions | PineWood Cabinets",
  description: "Kitchen design FAQ: Get answers to common questions about custom cabinetry, renovation process, and our luxury kitchen services.",
  keywords: [
    'kitchen design FAQ',
    'kitchen renovation questions',
    'custom cabinetry FAQ',
    'kitchen design help',
    'kitchen renovation advice',
    'kitchen design questions',
    'kitchen renovation FAQ',
    'custom kitchen FAQ'
  ],
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: "Kitchen Design FAQ | PineWood Cabinets",
    description: "Frequently asked questions about kitchen design, renovation, and custom cabinetry.",
    url: 'https://california-custom-kitchen.vercel.app/faq',
    images: [
      {
        url: '/images/faq-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Kitchen Design FAQ - Common Questions',
      },
    ],
  },
}

const faqCategories = [
  {
    category: 'Design & Planning',
    questions: [
      {
        question: 'How long does the design process take?',
        answer: 'The design process typically takes 2-4 weeks, depending on the complexity of your project. This includes initial consultation, space planning, material selection, and 3D renderings.'
      },
      {
        question: 'Do you provide 3D renderings?',
        answer: 'Yes, we provide detailed 3D renderings for all our projects. This helps you visualize your new kitchen before construction begins and ensures we\'re aligned on the design.'
      },
      {
        question: 'Can you work with my existing kitchen layout?',
        answer: 'Absolutely! We can work with your existing layout or suggest improvements. We\'ll assess your current space and recommend changes that will improve functionality and aesthetics.'
      }
    ]
  },
  {
    category: 'Materials & Quality',
    questions: [
      {
        question: 'What types of wood do you use?',
        answer: 'We work with a wide variety of wood species including oak, maple, cherry, walnut, and exotic woods. We can help you choose the right wood based on your style, budget, and maintenance preferences.'
      },
      {
        question: 'Are your cabinets custom-made?',
        answer: 'Yes, all our cabinets are custom-made to your specifications. We don\'t use stock cabinets - every piece is designed and built specifically for your kitchen.'
      },
      {
        question: 'What finishes do you offer?',
        answer: 'We offer a wide range of finishes including stains, paints, and specialty finishes. We can match existing finishes or create custom colors to match your design vision.'
      }
    ]
  },
  {
    category: 'Installation & Timeline',
    questions: [
      {
        question: 'How long does installation take?',
        answer: 'Installation typically takes 1-2 weeks, depending on the size and complexity of your project. We\'ll provide a detailed timeline during the planning phase.'
      },
      {
        question: 'Do you handle permits and inspections?',
        answer: 'Yes, we handle all necessary permits and coordinate with inspectors. We\'re familiar with local building codes and requirements in all the areas we serve.'
      },
      {
        question: 'Will my kitchen be usable during construction?',
        answer: 'We work to minimize disruption, but your kitchen will be partially or completely unusable during construction. We\'ll discuss this with you during planning and help you prepare accordingly.'
      }
    ]
  },
  {
    category: 'Pricing & Payment',
    questions: [
      {
        question: 'How do you determine pricing?',
        answer: 'Pricing is based on several factors including kitchen size, materials selected, complexity of design, and scope of work. We provide detailed estimates after the initial consultation.'
      },
      {
        question: 'Do you offer financing options?',
        answer: 'Yes, we work with several financing partners to offer flexible payment options. We can discuss financing options during your consultation.'
      },
      {
        question: 'What\'s included in your pricing?',
        answer: 'Our pricing includes design, materials, labor, installation, and project management. We provide detailed breakdowns so you know exactly what\'s included.'
      }
    ]
  }
]

export default function FAQPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-ivory py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Breadcrumbs 
            items={[
              { name: 'FAQ', href: '/faq', current: true }
            ]} 
          />
        </div>
      </section>

      <HeroQuiet
        title="Frequently Asked Questions"
        subtitle="Get Answers to Common Questions"
        description="Find answers to common questions about kitchen design, renovation, and custom cabinetry. If you don't see your question here, please contact us."
        imageSrc="faq-hero.webp"
        imageAlt="Beautiful kitchen design showcasing our work"
        primaryCTA={{
          text: "Contact Us",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Our Process",
          href: "/process"
        }}
      />

      {/* FAQ Categories */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">
              Common Questions
            </h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Browse our frequently asked questions organized by category to find the information you need.
            </p>
          </div>

          <div className="space-y-16">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white p-8 rounded-lg shadow-sm border border-french-gray/20">
                <h3 className="text-3xl font-semibold text-charcoal mb-8">{category.category}</h3>
                
                <div className="space-y-8">
                  {category.questions.map((faq, questionIndex) => (
                    <div key={questionIndex} className="border-b border-french-gray/20 pb-6 last:border-b-0 last:pb-0">
                      <h4 className="text-xl font-semibold text-charcoal mb-3">{faq.question}</h4>
                      <p className="text-charcoal/70">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-charcoal text-ivory">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Still Have Questions?
          </h2>
          <p className="text-xl text-french-gray mb-8">
            If you don't see your question answered here, we're here to help. Contact us for personalized answers to your specific questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-deep-green text-ivory rounded-lg font-semibold hover:bg-deep-green/90 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/process"
              className="px-8 py-3 border border-ivory text-ivory rounded-lg font-semibold hover:bg-ivory/10 transition-colors"
            >
              View Our Process
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Your Project?"
        description="Let's discuss your vision and answer any questions you have about your kitchen renovation."
        primaryCTA={{
          text: "Contact Us",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Our Process",
          href: "/process"
        }}
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqCategories.flatMap(category => 
              category.questions.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            )
          })
        }}
      />
    </>
  )
}
