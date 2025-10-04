const fs = require('fs');
const path = require('path');

// SEO-optimized heading structure patterns
const headingOptimizations = {
  // Service pages
  'services': {
    h1: 'Custom Kitchens California | Luxury Kitchen Design',
    h2: [
      'Premium Kitchen Design Services',
      'Luxury Kitchen Styles & Materials',
      'Custom Kitchen Features & Benefits',
      'Why Choose Our Custom Kitchens',
      'Kitchen Design Process',
      'Frequently Asked Questions'
    ],
    h3: [
      'Modern Contemporary Kitchens',
      'Traditional Inset Kitchens',
      'Transitional Kitchen Design',
      'Mediterranean Kitchen Style',
      'Premium Materials Selection',
      'Custom Features & Hardware'
    ]
  },
  
  // Service area pages
  'service-areas': {
    h1: 'Custom Kitchens in {location} | Luxury Cabinetry',
    h2: [
      'Luxury Kitchen Design in {location}',
      'Premium Materials & Craftsmanship',
      'Local Kitchen Design Expertise',
      'Custom Kitchen Services',
      'Why Choose Us for {location} Kitchens',
      'Frequently Asked Questions'
    ],
    h3: [
      'Custom Kitchen Design',
      'Bespoke Cabinetry Services',
      'Kitchen Remodeling',
      'Cabinet Hardware Selection',
      'Kitchen Lighting Design',
      'Appliance Integration'
    ]
  },
  
  // Blog posts
  'journal': {
    h1: '{title} | Kitchen Design Blog',
    h2: [
      'Introduction',
      'Key Considerations',
      'Implementation Strategies',
      'Best Practices',
      'Conclusion',
      'Related Resources'
    ],
    h3: [
      'Design Principles',
      'Material Selection',
      'Technical Specifications',
      'Maintenance Requirements',
      'Cost Considerations',
      'Expert Tips'
    ]
  },
  
  // Materials pages
  'materials': {
    h1: 'Premium Kitchen Materials | Custom Cabinetry',
    h2: [
      'Premium Wood Species',
      'Hardware & Finishes',
      'Material Selection Guide',
      'Quality Standards',
      'Care & Maintenance',
      'Frequently Asked Questions'
    ],
    h3: [
      'Hardwood Species',
      'Exotic Woods',
      'Cabinet Hardware',
      'Finishing Options',
      'Durability Ratings',
      'Maintenance Tips'
    ]
  },
  
  // Process pages
  'process': {
    h1: 'Custom Kitchen Design Process | Professional Service',
    h2: [
      'Our Design Process',
      'Project Timeline',
      'Quality Assurance',
      'Installation Process',
      'Client Collaboration',
      'Frequently Asked Questions'
    ],
    h3: [
      'Initial Consultation',
      'Design Development',
      'Material Selection',
      'Manufacturing',
      'Installation',
      'Final Inspection'
    ]
  }
};

// Function to optimize headings in a file
function optimizeHeadings(filePath, pageType, location = '') {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Get optimization patterns for this page type
    const patterns = headingOptimizations[pageType];
    if (!patterns) return;
    
    // Replace generic headings with SEO-optimized ones
    let updatedContent = content;
    
    // Replace h1 tags
    if (patterns.h1) {
      const h1Pattern = /<h1[^>]*>([^<]*)<\/h1>/g;
      updatedContent = updatedContent.replace(h1Pattern, (match, currentText) => {
        const newH1 = patterns.h1.replace('{location}', location).replace('{title}', currentText);
        return match.replace(currentText, newH1);
      });
    }
    
    // Replace h2 tags with structured content
    if (patterns.h2) {
      patterns.h2.forEach((h2Text, index) => {
        const h2Pattern = new RegExp(`<h2[^>]*>([^<]*)</h2>`, 'g');
        updatedContent = updatedContent.replace(h2Pattern, (match, currentText) => {
          if (index === 0) {
            const newH2 = h2Text.replace('{location}', location);
            return match.replace(currentText, newH2);
          }
          return match;
        });
      });
    }
    
    // Add structured heading hierarchy
    const headingStructure = `
      <!-- SEO-Optimized Heading Structure -->
      <div className="heading-structure" style="display: none;">
        <h1>${patterns.h1.replace('{location}', location)}</h1>
        ${patterns.h2.map(h2 => `<h2>${h2.replace('{location}', location)}</h2>`).join('')}
        ${patterns.h3.map(h3 => `<h3>${h3}</h3>`).join('')}
      </div>
    `;
    
    // Insert heading structure before the main content
    updatedContent = updatedContent.replace(
      /<div className="min-h-screen bg-ivory">/,
      `${headingStructure}<div className="min-h-screen bg-ivory">`
    );
    
    fs.writeFileSync(filePath, updatedContent);
    console.log(`Optimized headings in: ${filePath}`);
    
  } catch (error) {
    console.log(`Error processing ${filePath}:`, error.message);
  }
}

// Function to process all pages
function processAllPages() {
  const baseDir = path.join(__dirname, '..', 'src', 'app');
  
  // Process service pages
  const servicesDir = path.join(baseDir, 'services');
  if (fs.existsSync(servicesDir)) {
    const serviceFiles = fs.readdirSync(servicesDir);
    serviceFiles.forEach(file => {
      if (file === 'page.tsx') {
        optimizeHeadings(path.join(servicesDir, file), 'services');
      } else if (fs.statSync(path.join(servicesDir, file)).isDirectory()) {
        const pageFile = path.join(servicesDir, file, 'page.tsx');
        if (fs.existsSync(pageFile)) {
          optimizeHeadings(pageFile, 'services');
        }
      }
    });
  }
  
  // Process service area pages
  const serviceAreasDir = path.join(baseDir, 'service-areas');
  if (fs.existsSync(serviceAreasDir)) {
    const regionDirs = fs.readdirSync(serviceAreasDir);
    regionDirs.forEach(region => {
      const regionPath = path.join(serviceAreasDir, region);
      if (fs.statSync(regionPath).isDirectory()) {
        const pageFile = path.join(regionPath, 'page.tsx');
        if (fs.existsSync(pageFile)) {
          optimizeHeadings(pageFile, 'service-areas', region);
        }
        
        // Process city pages within regions
        const cityDirs = fs.readdirSync(regionPath);
        cityDirs.forEach(city => {
          const cityPath = path.join(regionPath, city);
          if (fs.statSync(cityPath).isDirectory()) {
            const cityPageFile = path.join(cityPath, 'page.tsx');
            if (fs.existsSync(cityPageFile)) {
              optimizeHeadings(cityPageFile, 'service-areas', city);
            }
          }
        });
      }
    });
  }
  
  // Process blog posts
  const journalDir = path.join(baseDir, 'journal');
  if (fs.existsSync(journalDir)) {
    const blogDirs = fs.readdirSync(journalDir);
    blogDirs.forEach(blog => {
      const blogPath = path.join(journalDir, blog);
      if (fs.statSync(blogPath).isDirectory()) {
        const pageFile = path.join(blogPath, 'page.tsx');
        if (fs.existsSync(pageFile)) {
          optimizeHeadings(pageFile, 'journal', blog);
        }
      }
    });
  }
  
  // Process other main pages
  const mainPages = [
    { file: path.join(baseDir, 'materials', 'page.tsx'), type: 'materials' },
    { file: path.join(baseDir, 'process', 'page.tsx'), type: 'process' }
  ];
  
  mainPages.forEach(({ file, type }) => {
    if (fs.existsSync(file)) {
      optimizeHeadings(file, type);
    }
  });
  
  console.log('Heading structure optimization completed!');
}

// Run the script
processAllPages();
