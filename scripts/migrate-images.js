#!/usr/bin/env node

/**
 * Image Migration Script for AV's Cabinets
 * 
 * This script helps migrate images from https://avscabinets.com/ to local storage
 * with proper SEO-friendly naming conventions.
 * 
 * Usage: node scripts/migrate-images.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Image mapping with original URLs and new filenames
const imageMap = {
  // Hero Images
  'hero-atherton-kitchen.jpg': {
    originalUrl: 'https://avscabinets.com/wp-content/uploads/2023/kitchen-hero.jpg',
    alt: 'Luxury custom kitchen with walnut cabinetry and marble island in Atherton estate',
    category: 'hero'
  },
  
  // Portfolio Images - Atherton
  'atherton-walnut-inset-kitchen.jpg': {
    originalUrl: 'https://avscabinets.com/wp-content/uploads/2023/walnut-kitchen-1.jpg',
    alt: 'Custom walnut inset kitchen cabinetry in Atherton estate with brass hardware',
    category: 'portfolio'
  },
  'atherton-white-oak-modern.jpg': {
    originalUrl: 'https://avscabinets.com/wp-content/uploads/2023/modern-kitchen-2.jpg',
    alt: 'Minimalist white oak kitchen with integrated appliances in Atherton contemporary home',
    category: 'portfolio'
  },
  'atherton-cherry-traditional.jpg': {
    originalUrl: 'https://avscabinets.com/wp-content/uploads/2023/traditional-kitchen-1.jpg',
    alt: 'Traditional cherry cabinetry with raised panels in historic Atherton estate',
    category: 'portfolio'
  },
  
  // Portfolio Images - Montecito
  'montecito-spanish-mediterranean-kitchen.jpg': {
    originalUrl: 'https://avscabinets.com/wp-content/uploads/2023/mediterranean-kitchen.jpg',
    alt: 'Mediterranean-inspired cabinetry in Montecito kitchen with stone archways',
    category: 'portfolio'
  },
  'montecito-coastal-modern.jpg': {
    originalUrl: 'https://avscabinets.com/wp-content/uploads/2023/coastal-kitchen.jpg',
    alt: 'Contemporary kitchen with ocean views and integrated wine storage in Montecito',
    category: 'portfolio'
  },
  'montecito-wine-library.jpg': {
    originalUrl: 'https://avscabinets.com/wp-content/uploads/2023/wine-library.jpg',
    alt: 'Floor-to-ceiling wine storage with integrated library in Montecito estate',
    category: 'portfolio'
  },
  
  // Service Images
  'custom-kitchens-hero.jpg': {
    originalUrl: 'https://avscabinets.com/wp-content/uploads/2023/services-kitchen.jpg',
    alt: 'Luxury custom kitchen with marble countertops and walnut cabinetry',
    category: 'services'
  },
  'bespoke-cabinetry-hero.jpg': {
    originalUrl: 'https://avscabinets.com/wp-content/uploads/2023/entertainment-center.jpg',
    alt: 'Built-in entertainment center with hidden storage in living room',
    category: 'services'
  },
  'architectural-millwork-hero.jpg': {
    originalUrl: 'https://avscabinets.com/wp-content/uploads/2023/millwork-dining.jpg',
    alt: 'Coffered ceiling and crown molding in formal dining room',
    category: 'services'
  },
  
  // Materials Images
  'quarter-sawn-white-oak.jpg': {
    originalUrl: 'https://avscabinets.com/wp-content/uploads/2023/white-oak-lumber.jpg',
    alt: 'Quarter-sawn white oak lumber showing distinctive ray fleck patterns and grain structure',
    category: 'materials'
  },
  'black-walnut-lumber.jpg': {
    originalUrl: 'https://avscabinets.com/wp-content/uploads/2023/walnut-lumber.jpg',
    alt: 'Premium black walnut lumber displaying rich chocolate tones and figured grain patterns',
    category: 'materials'
  },
  
  // Process Images
  'workshop-craftsmanship.jpg': {
    originalUrl: 'https://avscabinets.com/wp-content/uploads/2023/workshop-1.jpg',
    alt: 'Master craftsman working on custom cabinetry in AV\'s Cabinets workshop',
    category: 'process'
  },
  'workshop-grain-matching.jpg': {
    originalUrl: 'https://avscabinets.com/wp-content/uploads/2023/grain-matching.jpg',
    alt: 'Craftsmen grain-matching walnut veneer panels during workshop production process',
    category: 'process'
  }
};

// Create directories
const createDirectories = () => {
  const dirs = [
    'public/images',
    'public/images/portfolio',
    'public/images/services', 
    'public/images/materials',
    'public/images/process',
    'public/images/service-areas'
  ];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  });
};

// Download image from URL
const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}: ${url}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve(filepath);
      });
      
      file.on('error', (err) => {
        fs.unlink(filepath, () => {}); // Delete incomplete file
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
};

// Get file path based on category
const getFilePath = (filename, category) => {
  const basePath = 'public/images';
  
  switch (category) {
    case 'portfolio':
      return path.join(basePath, 'portfolio', filename);
    case 'services':
      return path.join(basePath, 'services', filename);
    case 'materials':
      return path.join(basePath, 'materials', filename);
    case 'process':
      return path.join(basePath, 'process', filename);
    case 'service-areas':
      return path.join(basePath, 'service-areas', filename);
    default:
      return path.join(basePath, filename);
  }
};

// Main migration function
const migrateImages = async () => {
  console.log('🖼️  Starting image migration...\n');
  
  // Create directories first
  createDirectories();
  
  const results = {
    success: [],
    failed: [],
    skipped: []
  };
  
  for (const [filename, config] of Object.entries(imageMap)) {
    const filepath = getFilePath(filename, config.category);
    
    // Skip if file already exists
    if (fs.existsSync(filepath)) {
      console.log(`⏭️  Skipping ${filename} (already exists)`);
      results.skipped.push(filename);
      continue;
    }
    
    try {
      console.log(`⬇️  Downloading ${filename}...`);
      await downloadImage(config.originalUrl, filepath);
      console.log(`✅ Successfully downloaded ${filename}`);
      results.success.push(filename);
    } catch (error) {
      console.error(`❌ Failed to download ${filename}:`, error.message);
      results.failed.push({ filename, error: error.message });
    }
  }
  
  // Summary
  console.log('\n📊 Migration Summary:');
  console.log(`✅ Successful: ${results.success.length}`);
  console.log(`⏭️  Skipped: ${results.skipped.length}`);
  console.log(`❌ Failed: ${results.failed.length}`);
  
  if (results.failed.length > 0) {
    console.log('\n❌ Failed downloads:');
    results.failed.forEach(({ filename, error }) => {
      console.log(`   ${filename}: ${error}`);
    });
  }
  
  console.log('\n🎉 Image migration completed!');
};

// Validate image naming function
const validateImageNaming = () => {
  console.log('🔍 Validating image naming conventions...\n');
  
  const issues = [];
  
  Object.entries(imageMap).forEach(([filename, config]) => {
    // Check filename pattern
    const pattern = /^[a-z0-9-]+\.(jpg|jpeg|png|webp)$/;
    if (!pattern.test(filename)) {
      issues.push(`❌ ${filename}: Invalid naming pattern`);
    }
    
    // Check for location in filename (for portfolio/service-area images)
    if (config.category === 'portfolio' || config.category === 'service-areas') {
      const locations = ['atherton', 'montecito', 'pebble-beach', 'martis-camp', 'bel-air', 'malibu', 'rancho-santa-fe', 'la-jolla', 'newport-coast', 'laguna-beach'];
      const hasLocation = locations.some(location => filename.includes(location));
      if (!hasLocation) {
        issues.push(`⚠️  ${filename}: Missing location identifier`);
      }
    }
    
    // Check alt text quality
    if (!config.alt || config.alt.length < 50) {
      issues.push(`⚠️  ${filename}: Alt text too short (${config.alt?.length || 0} chars)`);
    }
  });
  
  if (issues.length === 0) {
    console.log('✅ All images follow proper naming conventions!');
  } else {
    console.log('Issues found:');
    issues.forEach(issue => console.log(`   ${issue}`));
  }
  
  return issues.length === 0;
};

// Generate image manifest
const generateManifest = () => {
  const manifest = {
    generated: new Date().toISOString(),
    totalImages: Object.keys(imageMap).length,
    categories: {},
    images: {}
  };
  
  // Group by category
  Object.entries(imageMap).forEach(([filename, config]) => {
    if (!manifest.categories[config.category]) {
      manifest.categories[config.category] = [];
    }
    manifest.categories[config.category].push(filename);
    manifest.images[filename] = config;
  });
  
  // Write manifest file
  fs.writeFileSync(
    'public/images/manifest.json',
    JSON.stringify(manifest, null, 2)
  );
  
  console.log('📄 Generated image manifest: public/images/manifest.json');
};

// CLI interface
const command = process.argv[2];

switch (command) {
  case 'migrate':
    migrateImages();
    break;
  case 'validate':
    validateImageNaming();
    break;
  case 'manifest':
    generateManifest();
    break;
  default:
    console.log(`
🖼️  AV's Cabinets Image Migration Tool

Usage:
  node scripts/migrate-images.js migrate   - Download and migrate images
  node scripts/migrate-images.js validate  - Validate naming conventions
  node scripts/migrate-images.js manifest  - Generate image manifest

Examples:
  node scripts/migrate-images.js migrate
  node scripts/migrate-images.js validate
`);
}

module.exports = {
  imageMap,
  migrateImages,
  validateImageNaming,
  generateManifest
};
