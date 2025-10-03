// Image metadata and alt text mapping for SEO optimization
export interface ImageMetadata {
  filename: string;
  alt: string;
  category: 'portfolio' | 'services' | 'materials' | 'process' | 'showroom' | 'service-areas' | 'hero';
  location?: string;
  material?: string;
  style?: string;
  room?: string;
}

export const imageMetadata: Record<string, ImageMetadata> = {
  // Hero Images
  'hero-atherton-kitchen.webp': {
    filename: 'hero-atherton-kitchen.webp',
    alt: 'Luxury custom kitchen with walnut cabinetry and marble island in Atherton estate',
    category: 'hero',
    location: 'Atherton',
    material: 'walnut',
    room: 'kitchen'
  },
  'materials-hero.webp': {
    filename: 'materials-hero.webp',
    alt: 'Premium hardwood lumber selection showing grain patterns and natural beauty',
    category: 'materials'
  },
  'process-hero.webp': {
    filename: 'process-hero.webp',
    alt: 'Master craftsman working on custom cabinetry in AV\'s Cabinets workshop showing attention to detail',
    category: 'process'
  },

  // Portfolio Images - Atherton
  'atherton-walnut-inset-kitchen.webp': {
    filename: 'portfolio/atherton-walnut-inset-kitchen.webp',
    alt: 'Custom walnut inset kitchen cabinetry in Atherton estate with brass hardware',
    category: 'portfolio',
    location: 'Atherton',
    material: 'walnut',
    style: 'inset',
    room: 'kitchen'
  },
  'atherton-tech-executive-hero.webp': {
    filename: 'portfolio/atherton-tech-executive-hero.webp',
    alt: 'Luxury custom kitchen in Atherton tech executive estate featuring quarter-sawn walnut cabinetry and smart home integration',
    category: 'portfolio',
    location: 'Atherton',
    material: 'walnut',
    room: 'kitchen'
  },
  'atherton-white-oak-modern.webp': {
    filename: 'portfolio/atherton-white-oak-modern.webp',
    alt: 'Minimalist white oak kitchen with integrated appliances in Atherton contemporary home',
    category: 'portfolio',
    location: 'Atherton',
    material: 'white oak',
    style: 'modern',
    room: 'kitchen'
  },
  'atherton-cherry-traditional.webp': {
    filename: 'portfolio/atherton-cherry-traditional.webp',
    alt: 'Traditional cherry cabinetry with raised panels in historic Atherton estate',
    category: 'portfolio',
    location: 'Atherton',
    material: 'cherry',
    style: 'traditional',
    room: 'kitchen'
  },

  // Portfolio Images - Montecito
  'montecito-estate-kitchen-hero.webp': {
    filename: 'portfolio/montecito-estate-kitchen-hero.webp',
    alt: 'Luxury custom kitchen overlooking Pacific Ocean in Montecito estate with hand-carved cabinetry',
    category: 'portfolio',
    location: 'Montecito',
    room: 'kitchen'
  },
  'montecito-spanish-mediterranean-kitchen.webp': {
    filename: 'portfolio/montecito-spanish-mediterranean-kitchen.webp',
    alt: 'Mediterranean-inspired cabinetry in Montecito kitchen with stone archways',
    category: 'portfolio',
    location: 'Montecito',
    style: 'mediterranean',
    room: 'kitchen'
  },
  'montecito-coastal-modern.webp': {
    filename: 'portfolio/montecito-coastal-modern.webp',
    alt: 'Contemporary kitchen with ocean views and integrated wine storage in Montecito',
    category: 'portfolio',
    location: 'Montecito',
    style: 'coastal modern',
    room: 'kitchen'
  },
  'montecito-spanish-colonial.webp': {
    filename: 'portfolio/montecito-spanish-colonial.webp',
    alt: 'Restored Spanish Colonial kitchen with period-appropriate cabinetry in historic Montecito home',
    category: 'portfolio',
    location: 'Montecito',
    style: 'spanish colonial',
    room: 'kitchen'
  },
  'montecito-wine-library.webp': {
    filename: 'portfolio/montecito-wine-library.webp',
    alt: 'Floor-to-ceiling wine storage with integrated library in Montecito estate',
    category: 'portfolio',
    location: 'Montecito',
    room: 'wine library'
  },

  // Portfolio Images - Other Locations
  'martis-camp-mountain-modern-kitchen.webp': {
    filename: 'portfolio/martis-camp-mountain-modern-kitchen.webp',
    alt: 'Mountain modern rift oak kitchen in Martis Camp home with panoramic windows',
    category: 'portfolio',
    location: 'Martis Camp',
    material: 'rift oak',
    style: 'mountain modern',
    room: 'kitchen'
  },
  'martis-camp-study-paneling.webp': {
    filename: 'portfolio/martis-camp-study-paneling.webp',
    alt: 'Reclaimed chestnut wall paneling in Lake Tahoe mountain home study',
    category: 'portfolio',
    location: 'Martis Camp',
    material: 'reclaimed chestnut',
    room: 'study'
  },
  'pebble-beach-modern-luxury-kitchen.webp': {
    filename: 'portfolio/pebble-beach-modern-luxury-kitchen.webp',
    alt: 'Modern luxury kitchen cabinetry in Pebble Beach estate with large glass windows',
    category: 'portfolio',
    location: 'Pebble Beach',
    style: 'modern luxury',
    room: 'kitchen'
  },
  'bel-air-high-gloss-modern-kitchen.webp': {
    filename: 'portfolio/bel-air-high-gloss-modern-kitchen.webp',
    alt: 'High-gloss lacquer cabinetry in Bel Air modern kitchen with oversized island',
    category: 'portfolio',
    location: 'Bel Air',
    style: 'high-gloss modern',
    room: 'kitchen'
  },
  'malibu-coastal-modern-kitchen.webp': {
    filename: 'portfolio/malibu-coastal-modern-kitchen.webp',
    alt: 'Coastal modern kitchen cabinetry in Malibu beach estate with ocean views',
    category: 'portfolio',
    location: 'Malibu',
    style: 'coastal modern',
    room: 'kitchen'
  },
  'rancho-santa-fe-spanish-rustic-kitchen.webp': {
    filename: 'portfolio/rancho-santa-fe-spanish-rustic-kitchen.webp',
    alt: 'Spanish rustic cabinetry in Rancho Santa Fe kitchen with exposed beams',
    category: 'portfolio',
    location: 'Rancho Santa Fe',
    style: 'spanish rustic',
    room: 'kitchen'
  },
  'la-jolla-modern-floating-vanity.webp': {
    filename: 'portfolio/la-jolla-modern-floating-vanity.webp',
    alt: 'Modern floating vanity cabinetry in La Jolla master bathroom with LED lights',
    category: 'portfolio',
    location: 'La Jolla',
    style: 'modern floating',
    room: 'vanity'
  },
  'newport-coast-ultra-modern-kitchen.webp': {
    filename: 'portfolio/newport-coast-ultra-modern-kitchen.webp',
    alt: 'Ultra-modern kitchen cabinetry in Newport Coast estate with glass backsplash',
    category: 'portfolio',
    location: 'Newport Coast',
    style: 'ultra-modern',
    room: 'kitchen'
  },
  'laguna-beach-coastal-closet.webp': {
    filename: 'portfolio/laguna-beach-coastal-closet.webp',
    alt: 'Custom walk-in closet cabinetry in Laguna Beach oceanfront home with white oak finish',
    category: 'portfolio',
    location: 'Laguna Beach',
    material: 'white oak',
    style: 'coastal',
    room: 'closet'
  },

  // Service Images
  'custom-kitchens-hero.webp': {
    filename: 'services/custom-kitchens-hero.webp',
    alt: 'Luxury custom kitchen with marble countertops and walnut cabinetry',
    category: 'services',
    material: 'walnut',
    room: 'kitchen'
  },
  'bespoke-cabinetry-hero.webp': {
    filename: 'services/bespoke-cabinetry-hero.webp',
    alt: 'Built-in entertainment center with hidden storage in living room',
    category: 'services',
    room: 'entertainment center'
  },
  'architectural-millwork-hero.webp': {
    filename: 'services/architectural-millwork-hero.webp',
    alt: 'Coffered ceiling and crown molding in formal dining room',
    category: 'services',
    room: 'dining room'
  },

  // Process Images
  'phase-1-consultation.webp': {
    filename: 'process/phase-1-consultation.webp',
    alt: 'Initial consultation process showing design discussion and space analysis',
    category: 'process'
  },
  'phase-2-conceptual-design.webp': {
    filename: 'process/phase-2-conceptual-design.webp',
    alt: 'Conceptual design phase showing sketches, layouts, and initial design development',
    category: 'process'
  },
  'phase-3-design-development.webp': {
    filename: 'process/phase-3-design-development.webp',
    alt: 'Design development showing detailed drawings, 3D renderings, and material specifications',
    category: 'process'
  },
  'phase-4-specifications.webp': {
    filename: 'process/phase-4-specifications.webp',
    alt: 'Final specifications phase showing shop drawings, material samples, and approval process',
    category: 'process'
  },
  'phase-5-fabrication.webp': {
    filename: 'process/phase-5-fabrication.webp',
    alt: 'Fabrication process showing master craftsmen working on custom cabinetry in workshop',
    category: 'process'
  },
  'phase-6-installation.webp': {
    filename: 'process/phase-6-installation.webp',
    alt: 'White-glove installation process showing precision fitting and protection protocols',
    category: 'process'
  },
  'workshop-craftsmanship.webp': {
    filename: 'process/workshop-craftsmanship.webp',
    alt: 'Master craftsman working on custom cabinetry in AV\'s Cabinets workshop',
    category: 'process'
  },
  'workshop-grain-matching.webp': {
    filename: 'process/workshop-grain-matching.webp',
    alt: 'Craftsmen grain-matching walnut veneer panels during workshop production process',
    category: 'process'
  },

  // Materials Images
  'sustainable-forest-management.webp': {
    filename: 'materials/sustainable-forest-management.webp',
    alt: 'Sustainable forest management showing responsible harvesting practices for premium hardwood lumber',
    category: 'materials'
  },
  'quarter-sawn-white-oak.webp': {
    filename: 'materials/quarter-sawn-white-oak.webp',
    alt: 'Quarter-sawn white oak lumber showing distinctive ray fleck patterns and grain structure',
    category: 'materials',
    material: 'quarter-sawn white oak'
  },
  'black-walnut-lumber.webp': {
    filename: 'materials/black-walnut-lumber.webp',
    alt: 'Premium black walnut lumber displaying rich chocolate tones and figured grain patterns',
    category: 'materials',
    material: 'black walnut'
  },
  'hard-maple-lumber.webp': {
    filename: 'materials/hard-maple-lumber.webp',
    alt: 'Hard maple lumber showing fine even grain structure ideal for painted finishes',
    category: 'materials',
    material: 'hard maple'
  },
  'american-cherry-lumber.webp': {
    filename: 'materials/american-cherry-lumber.webp',
    alt: 'American cherry lumber displaying warm reddish-brown heartwood and smooth grain',
    category: 'materials',
    material: 'american cherry'
  },
  'brazilian-rosewood.webp': {
    filename: 'materials/brazilian-rosewood.webp',
    alt: 'Brazilian rosewood veneer showing deep purple-brown color with dramatic black streaks',
    category: 'materials',
    material: 'brazilian rosewood'
  },
  'zebrawood-veneer.webp': {
    filename: 'materials/zebrawood-veneer.webp',
    alt: 'Zebrawood veneer displaying distinctive alternating light and dark stripe patterns',
    category: 'materials',
    material: 'zebrawood'
  },
  'wenge-lumber.webp': {
    filename: 'materials/wenge-lumber.webp',
    alt: 'Wenge lumber showing deep chocolate brown color with fine black veining',
    category: 'materials',
    material: 'wenge'
  },
  'european-beech.webp': {
    filename: 'materials/european-beech.webp',
    alt: 'European beech lumber with fine even grain and warm honey tones from steaming process',
    category: 'materials',
    material: 'european beech'
  },
  'plantation-teak.webp': {
    filename: 'materials/plantation-teak.webp',
    alt: 'Plantation teak lumber showing marine-grade durability and natural oil content',
    category: 'materials',
    material: 'plantation teak'
  },
  'bubinga-veneer.webp': {
    filename: 'materials/bubinga-veneer.webp',
    alt: 'Bubinga veneer displaying rich reddish-brown color with purple undertones and figure patterns',
    category: 'materials',
    material: 'bubinga'
  },
  'reclaimed-chestnut-beams.webp': {
    filename: 'materials/reclaimed-chestnut-beams.webp',
    alt: 'Reclaimed American chestnut beams being restored for custom cabinetry applications',
    category: 'materials',
    material: 'reclaimed chestnut'
  },
  'finishing-booth-process.webp': {
    filename: 'materials/finishing-booth-process.webp',
    alt: 'Museum-grade finishing booth showing precision spray application and environmental controls',
    category: 'materials'
  },
  'sample-library-consultation.webp': {
    filename: 'materials/sample-library-consultation.webp',
    alt: 'Material sample library consultation showing wood species, finishes, and hardware options',
    category: 'materials'
  },

  // Service Area Specific Images
  'atherton-estate-kitchen-hero.webp': {
    filename: 'service-areas/atherton-estate-kitchen-hero.webp',
    alt: 'Luxury custom kitchen in Atherton estate with marble countertops and walnut cabinetry',
    category: 'service-areas',
    location: 'Atherton',
    material: 'walnut',
    room: 'kitchen'
  },
  'atherton-design-process.webp': {
    filename: 'service-areas/atherton-design-process.webp',
    alt: 'Custom kitchen design process for Atherton estate showing architectural drawings and wood samples',
    category: 'service-areas',
    location: 'Atherton'
  },
  'atherton-engineering-precision.webp': {
    filename: 'service-areas/atherton-engineering-precision.webp',
    alt: 'Precision engineering and tolerances in custom cabinetry manufacturing for Atherton homes',
    category: 'service-areas',
    location: 'Atherton'
  },
  'atherton-executive-kitchen-case-study.webp': {
    filename: 'service-areas/atherton-executive-kitchen-case-study.webp',
    alt: 'Custom kitchen designed for Silicon Valley tech executive featuring smart technology integration',
    category: 'service-areas',
    location: 'Atherton'
  },
  'atherton-historic-restoration.webp': {
    filename: 'service-areas/atherton-historic-restoration.webp',
    alt: 'Historic Atherton estate kitchen restoration with period-appropriate cabinetry',
    category: 'service-areas',
    location: 'Atherton'
  },
  'atherton-contemporary-design.webp': {
    filename: 'service-areas/atherton-contemporary-design.webp',
    alt: 'Contemporary Atherton home with minimalist custom cabinetry design',
    category: 'service-areas',
    location: 'Atherton'
  },

  // Portfolio Detail Images
  'atherton-tech-executive-design-process.webp': {
    filename: 'portfolio/atherton-tech-executive-design-process.webp',
    alt: 'Design development process for Atherton tech executive kitchen showing 3D renderings and material samples',
    category: 'portfolio',
    location: 'Atherton'
  },
  'atherton-walnut-grain-matching.webp': {
    filename: 'portfolio/atherton-walnut-grain-matching.webp',
    alt: 'Quarter-sawn walnut grain matching process showing sequential veneer sheets for continuous grain flow',
    category: 'portfolio',
    location: 'Atherton',
    material: 'walnut'
  },
  'atherton-structural-engineering.webp': {
    filename: 'portfolio/atherton-structural-engineering.webp',
    alt: 'Structural engineering details showing hidden steel reinforcement in custom kitchen island',
    category: 'portfolio',
    location: 'Atherton'
  },
  'atherton-smart-home-integration.webp': {
    filename: 'portfolio/atherton-smart-home-integration.webp',
    alt: 'Smart home technology integration in custom kitchen cabinetry including hidden charging stations and automated systems',
    category: 'portfolio',
    location: 'Atherton'
  },
  'atherton-installation-process.webp': {
    filename: 'portfolio/atherton-installation-process.webp',
    alt: 'White-glove installation process showing precision fitting and protection protocols in Atherton estate',
    category: 'portfolio',
    location: 'Atherton'
  }
};

// Helper function to get image metadata
export function getImageMetadata(filename: string): ImageMetadata | undefined {
  return imageMetadata[filename];
}

// Helper function to get full image path
export function getImagePath(filename: string): string {
  const metadata = getImageMetadata(filename);
  if (metadata) {
    return `/images/${metadata.filename}`;
  }
  return `/images/${filename}`;
}

// Helper function to get alt text
export function getImageAlt(filename: string): string {
  const metadata = getImageMetadata(filename);
  return metadata?.alt || 'AV\'s Cabinets custom cabinetry';
}

// Function to generate structured data for images
export function generateImageStructuredData(filename: string, url: string) {
  const metadata = getImageMetadata(filename);
  if (!metadata) return null;

  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "url": url,
    "name": metadata.alt,
    "description": metadata.alt,
    "contentLocation": metadata.location || "California",
    "creator": {
      "@type": "Organization",
      "name": "PineWood Cabinets"
    }
  };
}
