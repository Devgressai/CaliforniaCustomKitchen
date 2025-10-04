const fs = require('fs');
const path = require('path');

// Read the current sitemap
const sitemapPath = path.join(__dirname, '..', 'src', 'app', 'sitemap.ts');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// Generate blog post URLs
const blogSlugs = [
  'kitchen-design-trends-2025-what-california-elite-are-choosing',
  'minimalist-kitchen-design-less-is-more-in-luxury-homes',
  'biophilic-kitchen-design-bringing-nature-indoors',
  'smart-kitchen-technology-integration-trends',
  'color-psychology-in-luxury-kitchen-design',
  'open-concept-vs-traditional-kitchen-layouts',
  'kitchen-islands-design-evolution-and-functionality',
  'transitional-kitchen-design-bridging-classic-and-modern',
  'maximalist-kitchen-design-bold-statements-in-luxury-homes',
  'sustainable-luxury-eco-friendly-kitchen-design-trends',
  'premium-hardwood-species-for-custom-cabinetry',
  'quartz-vs-granite-countertop-material-comparison',
  'exotic-wood-species-in-luxury-kitchen-design',
  'metal-finishes-brass-copper-and-bronze-in-kitchens',
  'natural-stone-applications-in-custom-kitchens',
  'glass-and-mirror-applications-in-cabinetry',
  'sustainable-materials-in-high-end-kitchen-design',
  'wood-grain-matching-techniques-for-seamless-design',
  'finishing-techniques-stains-paints-and-natural-oils',
  'reclaimed-wood-sustainability-meets-luxury',
  'hidden-storage-solutions-for-modern-kitchens',
  'pantry-organization-systems-for-large-homes',
  'appliance-garage-design-and-functionality',
  'pull-out-storage-systems-maximizing-space',
  'kitchen-workflow-optimization-design',
  'universal-design-principles-in-luxury-kitchens',
  'wine-storage-solutions-for-wine-enthusiasts',
  'kitchen-lighting-design-for-functionality',
  'ergonomic-kitchen-design-for-comfort',
  'multi-purpose-kitchen-spaces-cooking-and-entertaining',
  'the-art-of-hand-crafted-cabinetry',
  'joinery-techniques-in-premium-cabinetry',
  'custom-hardware-selection-and-installation',
  'quality-control-in-custom-kitchen-manufacturing',
  'timeline-expectations-for-custom-kitchen-projects',
  'working-with-master-craftsmen-what-to-expect',
  'custom-cabinetry-vs-stock-cabinets-the-difference',
  'finishing-techniques-from-raw-wood-to-masterpiece',
  'installation-process-precision-and-care',
  'maintenance-and-care-for-custom-cabinetry',
  'silicon-valley-kitchen-design-tech-forward-luxury',
  'marin-county-kitchens-wine-country-elegance',
  'lake-tahoe-mountain-home-kitchen-design',
  'beverly-hills-kitchen-design-hollywood-glamour',
  'napa-valley-kitchen-design-wine-country-sophistication',
  'coastal-california-kitchen-design-elements',
  'mountain-home-kitchen-design-considerations',
  'urban-luxury-kitchen-design-in-san-francisco',
  'suburban-estate-kitchen-design-principles',
  'vacation-home-kitchen-design-function-meets-luxury',
  'kitchen-design-consultation-what-to-expect',
  'working-with-interior-designers-on-kitchen-projects',
  'architectural-integration-in-kitchen-design',
  'budget-planning-for-custom-kitchen-projects',
  'timeline-planning-for-kitchen-renovations',
  'design-approval-process-from-concept-to-reality',
  'material-selection-process-quality-and-aesthetics',
  'project-management-in-custom-kitchen-design',
  'communication-strategies-with-design-teams',
  'decision-making-process-in-kitchen-design',
  'daily-maintenance-tips-for-custom-cabinetry',
  'seasonal-care-for-wood-cabinetry',
  'cleaning-products-safe-for-premium-finishes',
  'preventing-damage-in-high-traffic-kitchens',
  'hardware-maintenance-and-replacement',
  'countertop-care-and-maintenance',
  'appliance-maintenance-in-custom-kitchens',
  'long-term-care-for-investment-cabinetry',
  'troubleshooting-common-cabinet-issues',
  'professional-maintenance-services',
  'smart-kitchen-appliances-integration',
  'led-lighting-systems-in-custom-kitchens',
  'touchless-technology-in-kitchen-design',
  'energy-efficient-kitchen-design-solutions',
  'home-automation-integration-in-kitchens',
  'voice-activated-kitchen-features',
  'smart-storage-solutions-and-organization',
  'digital-design-tools-in-kitchen-planning',
  'virtual-reality-in-kitchen-design-visualization',
  'iot-integration-in-modern-kitchens',
  'sustainable-kitchen-design-principles',
  'eco-friendly-materials-in-custom-cabinetry',
  'energy-efficient-kitchen-appliances',
  'water-conservation-in-kitchen-design',
  'recycled-and-reclaimed-materials',
  'carbon-footprint-reduction-in-kitchen-design',
  'green-building-standards-for-kitchens',
  'sustainable-manufacturing-processes',
  'environmental-impact-of-kitchen-materials',
  'future-proofing-sustainable-kitchen-design',
  'before-and-after-silicon-valley-tech-executive-kitchen',
  'case-study-napa-valley-wine-country-kitchen',
  'client-success-story-marin-county-family-kitchen',
  'project-spotlight-lake-tahoe-mountain-retreat',
  'design-challenge-small-space-big-impact',
  'client-journey-from-concept-to-completion',
  'budget-conscious-luxury-maximizing-value',
  'timeline-success-on-time-project-delivery',
  'client-satisfaction-exceeding-expectations',
  'portfolio-highlight-award-winning-kitchen-design'
];

// Generate blog post URLs
const blogUrls = blogSlugs.map(slug => `/journal/${slug}`);

// Insert blog URLs into the sitemap
const blogUrlsString = blogUrls.map(url => `    '${url}'`).join(',\n');

// Find the insertion point (after service area pages)
const insertionPoint = '  // Service area sub-pages - high-value neighborhoods';
const beforeInsertion = sitemapContent.indexOf(insertionPoint);

if (beforeInsertion !== -1) {
  const newContent = sitemapContent.slice(0, beforeInsertion) + 
    `  // Blog posts\n` +
    `  const blogPages = [\n${blogUrlsString}\n  ]\n\n` +
    sitemapContent.slice(beforeInsertion);
  
  // Update the sitemap generation to include blog pages
  const updatedContent = newContent.replace(
    'return staticPages.map(page => ({',
    'return [...staticPages, ...servicePages, ...serviceAreaPages, ...blogPages].map(page => ({'
  );
  
  fs.writeFileSync(sitemapPath, updatedContent);
  console.log('Sitemap updated successfully with all blog posts!');
} else {
  console.log('Could not find insertion point in sitemap');
}
