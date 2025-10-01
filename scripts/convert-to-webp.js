#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const IMAGES_DIR = path.join(__dirname, '../public/images');
const QUALITY = 85; // WebP quality (0-100)
const OVERWRITE = false; // Set to true to overwrite existing WebP files

// Supported input formats
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.tiff', '.bmp'];

// Function to convert image to WebP
function convertToWebP(inputPath, outputPath) {
  try {
    const command = `cwebp -q ${QUALITY} "${inputPath}" -o "${outputPath}"`;
    execSync(command, { stdio: 'pipe' });
    return true;
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error.message);
    return false;
  }
}

// Function to recursively find and convert images
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const itemPath = path.join(dirPath, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      // Recursively process subdirectories
      processDirectory(itemPath);
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      
      if (SUPPORTED_FORMATS.includes(ext)) {
        const webpPath = itemPath.replace(ext, '.webp');
        
        // Skip if WebP already exists and not overwriting
        if (!OVERWRITE && fs.existsSync(webpPath)) {
          console.log(`Skipping ${itemPath} (WebP already exists)`);
          continue;
        }
        
        console.log(`Converting ${itemPath} to WebP...`);
        const success = convertToWebP(itemPath, webpPath);
        
        if (success) {
          console.log(`✅ Converted: ${path.basename(itemPath)} → ${path.basename(webpPath)}`);
          
          // Get file sizes for comparison
          const originalSize = fs.statSync(itemPath).size;
          const webpSize = fs.statSync(webpPath).size;
          const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
          
          console.log(`   Size: ${(originalSize / 1024).toFixed(1)}KB → ${(webpSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
        } else {
          console.error(`❌ Failed to convert: ${itemPath}`);
        }
      }
    }
  }
}

// Function to update image references in code
function updateImageReferences() {
  console.log('\n🔄 Updating image references in code...');
  
  const filesToUpdate = [
    'src/app/page.tsx',
    'src/app/portfolio/page.tsx',
    'src/app/services/page.tsx',
    'src/app/about/page.tsx',
    'src/app/contact/page.tsx',
    'src/app/journal/page.tsx',
    'src/app/materials/page.tsx',
    'src/app/process/page.tsx',
    'src/components/HeroQuiet.tsx',
    'src/components/ProjectGrid.tsx',
    'src/components/ServiceCard.tsx',
    'src/lib/images.ts'
  ];
  
  // Add all service area pages
  const serviceAreaPages = [
    'src/app/service-areas/silicon-valley/page.tsx',
    'src/app/service-areas/silicon-valley/atherton/page.tsx',
    'src/app/service-areas/silicon-valley/palo-alto/page.tsx',
    'src/app/service-areas/los-angeles/beverly-hills/page.tsx',
    'src/app/service-areas/los-angeles/malibu/page.tsx',
    'src/app/service-areas/los-angeles/manhattan-beach/page.tsx',
    'src/app/service-areas/los-angeles/newport-beach/page.tsx',
    'src/app/service-areas/san-francisco/pacific-heights/page.tsx',
    'src/app/service-areas/central-coast/pebble-beach/page.tsx',
    'src/app/service-areas/santa-barbara/montecito/page.tsx',
    'src/app/service-areas/lake-tahoe/page.tsx',
    'src/app/service-areas/truckee/page.tsx',
    'src/app/service-areas/napa-valley/page.tsx',
    'src/app/service-areas/sonoma-county/page.tsx',
    'src/app/service-areas/marin-county/page.tsx',
    'src/app/service-areas/orange-county/page.tsx',
    'src/app/service-areas/san-diego-county/page.tsx',
    'src/app/service-areas/palm-springs/page.tsx',
    'src/app/service-areas/la-jolla/page.tsx'
  ];
  
  // Add all service pages
  const servicePages = [
    'src/app/services/custom-kitchens/page.tsx',
    'src/app/services/bespoke-cabinetry/page.tsx',
    'src/app/services/architectural-millwork/page.tsx',
    'src/app/services/paneling/page.tsx',
    'src/app/services/wine-rooms/page.tsx',
    'src/app/services/vanities/page.tsx',
    'src/app/services/libraries-closets-offices/page.tsx'
  ];
  
  filesToUpdate.push(...serviceAreaPages, ...servicePages);
  
  let totalUpdated = 0;
  
  for (const filePath of filesToUpdate) {
    const fullPath = path.join(__dirname, '..', filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      continue;
    }
    
    let content = fs.readFileSync(fullPath, 'utf8');
    let updated = false;
    
    // Replace image extensions in various patterns
    const patterns = [
      // .jpg to .webp
      { from: /\.jpg/g, to: '.webp' },
      { from: /\.jpeg/g, to: '.webp' },
      { from: /\.png/g, to: '.webp' },
      { from: /\.tiff/g, to: '.webp' },
      { from: /\.bmp/g, to: '.webp' }
    ];
    
    for (const pattern of patterns) {
      if (pattern.from.test(content)) {
        content = content.replace(pattern.from, pattern.to);
        updated = true;
      }
    }
    
    if (updated) {
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`✅ Updated: ${filePath}`);
      totalUpdated++;
    }
  }
  
  console.log(`\n🎉 Updated ${totalUpdated} files with WebP references`);
}

// Main execution
function main() {
  console.log('🚀 Starting WebP conversion process...\n');
  
  // Check if cwebp is installed
  try {
    execSync('cwebp -version', { stdio: 'pipe' });
  } catch (error) {
    console.error('❌ cwebp is not installed. Please install it first:');
    console.error('   macOS: brew install webp');
    console.error('   Ubuntu: sudo apt-get install webp');
    console.error('   Windows: Download from https://developers.google.com/speed/webp/download');
    process.exit(1);
  }
  
  // Check if images directory exists
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`❌ Images directory not found: ${IMAGES_DIR}`);
    process.exit(1);
  }
  
  console.log(`📁 Processing directory: ${IMAGES_DIR}`);
  console.log(`🎨 Quality setting: ${QUALITY}`);
  console.log(`🔄 Overwrite existing: ${OVERWRITE}\n`);
  
  // Convert images
  processDirectory(IMAGES_DIR);
  
  // Update code references
  updateImageReferences();
  
  console.log('\n✨ WebP conversion complete!');
  console.log('\n📊 Benefits of WebP:');
  console.log('   • 25-35% smaller file sizes');
  console.log('   • Faster page loading');
  console.log('   • Better SEO performance');
  console.log('   • Modern browser support');
  console.log('\n💡 Next steps:');
  console.log('   1. Test the website to ensure all images load correctly');
  console.log('   2. Consider adding fallback images for older browsers');
  console.log('   3. Update any hardcoded image paths in content');
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { convertToWebP, processDirectory, updateImageReferences };
