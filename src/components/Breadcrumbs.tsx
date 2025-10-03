import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { StructuredData, generateBreadcrumbSchema } from './StructuredData'

interface BreadcrumbItem {
  name: string
  href: string
  current?: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  // Always include home as the first item
  const allItems = [
    { name: 'Home', href: '/' },
    ...items
  ]

  // Generate structured data
  const breadcrumbSchema = generateBreadcrumbSchema(
    allItems.map(item => ({
      name: item.name,
      url: `https://california-custom-kitchen.vercel.app${item.href}`
    }))
  )

  return (
    <>
      <StructuredData breadcrumb={breadcrumbSchema} />
      <nav className={`flex items-center space-x-2 text-sm ${className}`} aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          {allItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-charcoal/40 mx-2" />
              )}
              {index === 0 ? (
                <Link
                  href={item.href}
                  className="text-charcoal/60 hover:text-deep-green transition-colors duration-200 flex items-center"
                >
                  <Home className="w-4 h-4 mr-1" />
                  <span className="sr-only">{item.name}</span>
                </Link>
              ) : item.current ? (
                <span className="text-charcoal font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-charcoal/60 hover:text-deep-green transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

// Helper function to generate breadcrumbs from pathname
export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean)
  const breadcrumbs: BreadcrumbItem[] = []

  let currentPath = ''
  
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i]
    currentPath += `/${segment}`
    
    // Convert kebab-case to title case and handle special cases
    let name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    
    // Handle special cases
    const specialCases: Record<string, string> = {
      'service-areas': 'Service Areas',
      'silicon-valley': 'Silicon Valley',
      'santa-barbara': 'Santa Barbara',
      'lake-tahoe-truckee': 'Lake Tahoe & Truckee',
      'los-angeles': 'Los Angeles',
      'orange-county': 'Orange County',
      'san-diego': 'San Diego',
      'east-bay': 'East Bay',
      'sacramento-foothills': 'Sacramento Foothills',
      'central-coast': 'Central Coast',
      'custom-kitchens': 'Custom Kitchens',
      'bespoke-cabinetry': 'Bespoke Cabinetry',
      'architectural-millwork': 'Architectural Millwork',
      'wine-rooms': 'Wine Rooms',
      'libraries-closets-offices': 'Libraries, Closets & Offices',
      'los-altos-hills': 'Los Altos Hills',
      'portola-valley': 'Portola Valley',
      'berkeley-claremont-elmwood': 'Berkeley (Claremont & Elmwood)',
      'granite-bay': 'Granite Bay',
      'carmel-valley': 'Carmel Valley',
      'pebble-beach': 'Pebble Beach',
      'big-sur': 'Big Sur',
      'santa-cruz': 'Santa Cruz',
      'bel-air': 'Bel Air',
      'holmby-hills': 'Holmby Hills',
      'beverly-hills': 'Beverly Hills',
      'beverly-park': 'Beverly Park',
      'pacific-palisades': 'Pacific Palisades',
      'hollywood-hills': 'Hollywood Hills',
      'hope-ranch': 'Hope Ranch',
      'rancho-santa-fe': 'Rancho Santa Fe',
      'la-jolla': 'La Jolla',
      'newport-coast': 'Newport Coast',
      'laguna-beach': 'Laguna Beach',
      'corona-del-mar': 'Corona del Mar',
      'martis-camp': 'Martis Camp',
      'schaffers-mill': 'Schaffer\'s Mill'
    }
    
    if (specialCases[segment]) {
      name = specialCases[segment]
    }
    
    breadcrumbs.push({
      name,
      href: currentPath,
      current: i === segments.length - 1
    })
  }
  
  return breadcrumbs
}

// Location-aware breadcrumb component
interface LocationBreadcrumbsProps {
  pathname: string
  customItems?: BreadcrumbItem[]
  className?: string
}

export function LocationBreadcrumbs({ 
  pathname, 
  customItems, 
  className 
}: LocationBreadcrumbsProps) {
  const items = customItems || generateBreadcrumbs(pathname)
  
  return <Breadcrumbs items={items} className={className} />
}
