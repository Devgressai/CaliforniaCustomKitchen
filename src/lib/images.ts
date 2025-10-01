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
  'hero-atherton-kitchen.jpg': {
    filename: 'hero-atherton-kitchen.jpg',
    alt: 'Luxury custom kitchen with walnut cabinetry and marble island in Atherton estate',
    category: 'hero',
    location: 'Atherton',
    material: 'walnut',
    room: 'kitchen'
  },
  'materials-hero.jpg': {
    filename: 'materials-hero.jpg',
    alt: 'Premium hardwood lumber selection showing grain patterns and natural beauty',
    category: 'materials'
  },
  'process-hero.jpg': {
    filename: 'process-hero.jpg',
    alt: 'Master craftsman working on custom cabinetry in AV\'s Cabinets workshop showing attention to detail',
    category: 'process'
  },

  // Portfolio Images - Atherton
  'atherton-walnut-inset-kitchen.jpg': {
    filename: 'portfolio/atherton-walnut-inset-kitchen.jpg',
    alt: 'Custom walnut inset kitchen cabinetry in Atherton estate with brass hardware',
    category: 'portfolio',
    location: 'Atherton',
    material: 'walnut',
    style: 'inset',
    room: 'kitchen'
  },
  'atherton-tech-executive-hero.jpg': {
    filename: 'portfolio/atherton-tech-executive-hero.jpg',
    alt: 'Luxury custom kitchen in Atherton tech executive estate featuring quarter-sawn walnut cabinetry and smart home integration',
    category: 'portfolio',
    location: 'Atherton',
    material: 'walnut',
    room: 'kitchen'
  },
  'atherton-white-oak-modern.jpg': {
    filename: 'portfolio/atherton-white-oak-modern.jpg',
    alt: 'Minimalist white oak kitchen with integrated appliances in Atherton contemporary home',
    category: 'portfolio',
    location: 'Atherton',
    material: 'white oak',
    style: 'modern',
    room: 'kitchen'
  },
  'atherton-cherry-traditional.jpg': {
    filename: 'portfolio/atherton-cherry-traditional.jpg',
    alt: 'Traditional cherry cabinetry with raised panels in historic Atherton estate',
    category: 'portfolio',
    location: 'Atherton',
    material: 'cherry',
    style: 'traditional',
    room: 'kitchen'
  },

  // Portfolio Images - Montecito
  'montecito-estate-kitchen-hero.jpg': {
    filename: 'portfolio/montecito-estate-kitchen-hero.jpg',
    alt: 'Luxury custom kitchen overlooking Pacific Ocean in Montecito estate with hand-carved cabinetry',
    category: 'portfolio',
    location: 'Montecito',
    room: 'kitchen'
  },
  'montecito-spanish-mediterranean-kitchen.jpg': {
    filename: 'portfolio/montecito-spanish-mediterranean-kitchen.jpg',
    alt: 'Mediterranean-inspired cabinetry in Montecito kitchen with stone archways',
    category: 'portfolio',
    location: 'Montecito',
    style: 'mediterranean',
    room: 'kitchen'
  },
  'montecito-coastal-modern.jpg': {
    filename: 'portfolio/montecito-coastal-modern.jpg',
    alt: 'Contemporary kitchen with ocean views and integrated wine storage in Montecito',
    category: 'portfolio',
    location: 'Montecito',
    style: 'coastal modern',
    room: 'kitchen'
  },
  'montecito-spanish-colonial.jpg': {
    filename: 'portfolio/montecito-spanish-colonial.jpg',
    alt: 'Restored Spanish Colonial kitchen with period-appropriate cabinetry in historic Montecito home',
    category: 'portfolio',
    location: 'Montecito',
    style: 'spanish colonial',
    room: 'kitchen'
  },
  'montecito-wine-library.jpg': {
    filename: 'portfolio/montecito-wine-library.jpg',
    alt: 'Floor-to-ceiling wine storage with integrated library in Montecito estate',
    category: 'portfolio',
    location: 'Montecito',
    room: 'wine library'
  },

  // Portfolio Images - Other Locations
  'martis-camp-mountain-modern-kitchen.jpg': {
    filename: 'portfolio/martis-camp-mountain-modern-kitchen.jpg',
    alt: 'Mountain modern rift oak kitchen in Martis Camp home with panoramic windows',
    category: 'portfolio',
    location: 'Martis Camp',
    material: 'rift oak',
    style: 'mountain modern',
    room: 'kitchen'
  },
  'martis-camp-study-paneling.jpg': {
    filename: 'portfolio/martis-camp-study-paneling.jpg',
    alt: 'Reclaimed chestnut wall paneling in Lake Tahoe mountain home study',
    category: 'portfolio',
    location: 'Martis Camp',
    material: 'reclaimed chestnut',
    room: 'study'
  },
  'pebble-beach-modern-luxury-kitchen.jpg': {
    filename: 'portfolio/pebble-beach-modern-luxury-kitchen.jpg',
    alt: 'Modern luxury kitchen cabinetry in Pebble Beach estate with large glass windows',
    category: 'portfolio',
    location: 'Pebble Beach',
    style: 'modern luxury',
    room: 'kitchen'
  },
  'bel-air-high-gloss-modern-kitchen.jpg': {
    filename: 'portfolio/bel-air-high-gloss-modern-kitchen.jpg',
    alt: 'High-gloss lacquer cabinetry in Bel Air modern kitchen with oversized island',
    category: 'portfolio',
    location: 'Bel Air',
    style: 'high-gloss modern',
    room: 'kitchen'
  },
  'malibu-coastal-modern-kitchen.jpg': {
    filename: 'portfolio/malibu-coastal-modern-kitchen.jpg',
    alt: 'Coastal modern kitchen cabinetry in Malibu beach estate with ocean views',
    category: 'portfolio',
    location: 'Malibu',
    style: 'coastal modern',
    room: 'kitchen'
  },
  'rancho-santa-fe-spanish-rustic-kitchen.jpg': {
    filename: 'portfolio/rancho-santa-fe-spanish-rustic-kitchen.jpg',
    alt: 'Spanish rustic cabinetry in Rancho Santa Fe kitchen with exposed beams',
    category: 'portfolio',
    location: 'Rancho Santa Fe',
    style: 'spanish rustic',
    room: 'kitchen'
  },
  'la-jolla-modern-floating-vanity.jpg': {
    filename: 'portfolio/la-jolla-modern-floating-vanity.jpg',
    alt: 'Modern floating vanity cabinetry in La Jolla master bathroom with LED lights',
    category: 'portfolio',
    location: 'La Jolla',
    style: 'modern floating',
    room: 'vanity'
  },
  'newport-coast-ultra-modern-kitchen.jpg': {
    filename: 'portfolio/newport-coast-ultra-modern-kitchen.jpg',
    alt: 'Ultra-modern kitchen cabinetry in Newport Coast estate with glass backsplash',
    category: 'portfolio',
    location: 'Newport Coast',
    style: 'ultra-modern',
    room: 'kitchen'
  },
  'laguna-beach-coastal-closet.jpg': {
    filename: 'portfolio/laguna-beach-coastal-closet.jpg',
    alt: 'Custom walk-in closet cabinetry in Laguna Beach oceanfront home with white oak finish',
    category: 'portfolio',
    location: 'Laguna Beach',
    material: 'white oak',
    style: 'coastal',
    room: 'closet'
  },

  // Service Images
  'custom-kitchens-hero.jpg': {
    filename: 'services/custom-kitchens-hero.jpg',
    alt: 'Luxury custom kitchen with marble countertops and walnut cabinetry',
    category: 'services',
    material: 'walnut',
    room: 'kitchen'
  },
  'bespoke-cabinetry-hero.jpg': {
    filename: 'services/bespoke-cabinetry-hero.jpg',
    alt: 'Built-in entertainment center with hidden storage in living room',
    category: 'services',
    room: 'entertainment center'
  },
  'architectural-millwork-hero.jpg': {
    filename: 'services/architectural-millwork-hero.jpg',
    alt: 'Coffered ceiling and crown molding in formal dining room',
    category: 'services',
    room: 'dining room'
  },

  // Process Images
  'phase-1-consultation.jpg': {
    filename: 'process/phase-1-consultation.jpg',
    alt: 'Initial consultation process showing design discussion and space analysis',
    category: 'process'
  },
  'phase-2-conceptual-design.jpg': {
    filename: 'process/phase-2-conceptual-design.jpg',
    alt: 'Conceptual design phase showing sketches, layouts, and initial design development',
    category: 'process'
  },
  'phase-3-design-development.jpg': {
    filename: 'process/phase-3-design-development.jpg',
    alt: 'Design development showing detailed drawings, 3D renderings, and material specifications',
    category: 'process'
  },
  'phase-4-specifications.jpg': {
    filename: 'process/phase-4-specifications.jpg',
    alt: 'Final specifications phase showing shop drawings, material samples, and approval process',
    category: 'process'
  },
  'phase-5-fabrication.jpg': {
    filename: 'process/phase-5-fabrication.jpg',
    alt: 'Fabrication process showing master craftsmen working on custom cabinetry in workshop',
    category: 'process'
  },
  'phase-6-installation.jpg': {
    filename: 'process/phase-6-installation.jpg',
    alt: 'White-glove installation process showing precision fitting and protection protocols',
    category: 'process'
  },
  'workshop-craftsmanship.jpg': {
    filename: 'process/workshop-craftsmanship.jpg',
    alt: 'Master craftsman working on custom cabinetry in AV\'s Cabinets workshop',
    category: 'process'
  },
  'workshop-grain-matching.jpg': {
    filename: 'process/workshop-grain-matching.jpg',
    alt: 'Craftsmen grain-matching walnut veneer panels during workshop production process',
    category: 'process'
  },

  // Materials Images
  'sustainable-forest-management.jpg': {
    filename: 'materials/sustainable-forest-management.jpg',
    alt: 'Sustainable forest management showing responsible harvesting practices for premium hardwood lumber',
    category: 'materials'
  },
  'quarter-sawn-white-oak.jpg': {
    filename: 'materials/quarter-sawn-white-oak.jpg',
    alt: 'Quarter-sawn white oak lumber showing distinctive ray fleck patterns and grain structure',
    category: 'materials',
    material: 'quarter-sawn white oak'
  },
  'black-walnut-lumber.jpg': {
    filename: 'materials/black-walnut-lumber.jpg',
    alt: 'Premium black walnut lumber displaying rich chocolate tones and figured grain patterns',
    category: 'materials',
    material: 'black walnut'
  },
  'hard-maple-lumber.jpg': {
    filename: 'materials/hard-maple-lumber.jpg',
    alt: 'Hard maple lumber showing fine even grain structure ideal for painted finishes',
    category: 'materials',
    material: 'hard maple'
  },
  'american-cherry-lumber.jpg': {
    filename: 'materials/american-cherry-lumber.jpg',
    alt: 'American cherry lumber displaying warm reddish-brown heartwood and smooth grain',
    category: 'materials',
    material: 'american cherry'
  },
  'brazilian-rosewood.jpg': {
    filename: 'materials/brazilian-rosewood.jpg',
    alt: 'Brazilian rosewood veneer showing deep purple-brown color with dramatic black streaks',
    category: 'materials',
    material: 'brazilian rosewood'
  },
  'zebrawood-veneer.jpg': {
    filename: 'materials/zebrawood-veneer.jpg',
    alt: 'Zebrawood veneer displaying distinctive alternating light and dark stripe patterns',
    category: 'materials',
    material: 'zebrawood'
  },
  'wenge-lumber.jpg': {
    filename: 'materials/wenge-lumber.jpg',
    alt: 'Wenge lumber showing deep chocolate brown color with fine black veining',
    category: 'materials',
    material: 'wenge'
  },
  'european-beech.jpg': {
    filename: 'materials/european-beech.jpg',
    alt: 'European beech lumber with fine even grain and warm honey tones from steaming process',
    category: 'materials',
    material: 'european beech'
  },
  'plantation-teak.jpg': {
    filename: 'materials/plantation-teak.jpg',
    alt: 'Plantation teak lumber showing marine-grade durability and natural oil content',
    category: 'materials',
    material: 'plantation teak'
  },
  'bubinga-veneer.jpg': {
    filename: 'materials/bubinga-veneer.jpg',
    alt: 'Bubinga veneer displaying rich reddish-brown color with purple undertones and figure patterns',
    category: 'materials',
    material: 'bubinga'
  },
  'reclaimed-chestnut-beams.jpg': {
    filename: 'materials/reclaimed-chestnut-beams.jpg',
    alt: 'Reclaimed American chestnut beams being restored for custom cabinetry applications',
    category: 'materials',
    material: 'reclaimed chestnut'
  },
  'finishing-booth-process.jpg': {
    filename: 'materials/finishing-booth-process.jpg',
    alt: 'Museum-grade finishing booth showing precision spray application and environmental controls',
    category: 'materials'
  },
  'sample-library-consultation.jpg': {
    filename: 'materials/sample-library-consultation.jpg',
    alt: 'Material sample library consultation showing wood species, finishes, and hardware options',
    category: 'materials'
  },

  // Service Area Specific Images
  'atherton-estate-kitchen-hero.jpg': {
    filename: 'service-areas/atherton-estate-kitchen-hero.jpg',
    alt: 'Luxury custom kitchen in Atherton estate with marble countertops and walnut cabinetry',
    category: 'service-areas',
    location: 'Atherton',
    material: 'walnut',
    room: 'kitchen'
  },
  'atherton-design-process.jpg': {
    filename: 'service-areas/atherton-design-process.jpg',
    alt: 'Custom kitchen design process for Atherton estate showing architectural drawings and wood samples',
    category: 'service-areas',
    location: 'Atherton'
  },
  'atherton-engineering-precision.jpg': {
    filename: 'service-areas/atherton-engineering-precision.jpg',
    alt: 'Precision engineering and tolerances in custom cabinetry manufacturing for Atherton homes',
    category: 'service-areas',
    location: 'Atherton'
  },
  'atherton-executive-kitchen-case-study.jpg': {
    filename: 'service-areas/atherton-executive-kitchen-case-study.jpg',
    alt: 'Custom kitchen designed for Silicon Valley tech executive featuring smart technology integration',
    category: 'service-areas',
    location: 'Atherton'
  },
  'atherton-historic-restoration.jpg': {
    filename: 'service-areas/atherton-historic-restoration.jpg',
    alt: 'Historic Atherton estate kitchen restoration with period-appropriate cabinetry',
    category: 'service-areas',
    location: 'Atherton'
  },
  'atherton-contemporary-design.jpg': {
    filename: 'service-areas/atherton-contemporary-design.jpg',
    alt: 'Contemporary Atherton home with minimalist custom cabinetry design',
    category: 'service-areas',
    location: 'Atherton'
  },

  // Portfolio Detail Images
  'atherton-tech-executive-design-process.jpg': {
    filename: 'portfolio/atherton-tech-executive-design-process.jpg',
    alt: 'Design development process for Atherton tech executive kitchen showing 3D renderings and material samples',
    category: 'portfolio',
    location: 'Atherton'
  },
  'atherton-walnut-grain-matching.jpg': {
    filename: 'portfolio/atherton-walnut-grain-matching.jpg',
    alt: 'Quarter-sawn walnut grain matching process showing sequential veneer sheets for continuous grain flow',
    category: 'portfolio',
    location: 'Atherton',
    material: 'walnut'
  },
  'atherton-structural-engineering.jpg': {
    filename: 'portfolio/atherton-structural-engineering.jpg',
    alt: 'Structural engineering details showing hidden steel reinforcement in custom kitchen island',
    category: 'portfolio',
    location: 'Atherton'
  },
  'atherton-smart-home-integration.jpg': {
    filename: 'portfolio/atherton-smart-home-integration.jpg',
    alt: 'Smart home technology integration in custom kitchen cabinetry including hidden charging stations and automated systems',
    category: 'portfolio',
    location: 'Atherton'
  },
  'atherton-installation-process.jpg': {
    filename: 'portfolio/atherton-installation-process.jpg',
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
      "name": "AV's Cabinets"
    }
  };
}
