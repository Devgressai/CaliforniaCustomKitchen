import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Visual Showroom | Custom Kitchens & Cabinetry Gallery | AV\'s Cabinets',
  description: 'Explore our comprehensive visual showroom featuring 138+ luxury custom kitchens, bespoke cabinetry, and architectural millwork projects across California\'s most prestigious communities.',
  keywords: 'custom kitchen showroom, luxury cabinetry gallery, kitchen design inspiration, bespoke cabinetry showcase, California custom kitchens',
  openGraph: {
    title: 'Visual Showroom | AV\'s Cabinets - Custom Kitchens & Cabinetry Gallery',
    description: 'Explore our comprehensive visual showroom featuring luxury custom kitchens and bespoke cabinetry projects.',
    type: 'website',
  },
}

export default function ShowroomLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
