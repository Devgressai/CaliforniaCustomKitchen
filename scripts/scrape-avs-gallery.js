#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

// Configuration
const BASE_URL = 'https://avscabinets.com';
const OUTPUT_DIR = path.join(__dirname, '../public/images');
const QUALITY = 85; // WebP quality
const OVERWRITE = true; // Overwrite existing files

// Target pages to scrape
const TARGET_PAGES = [
  'https://avscabinets.com/gallery/',
  'https://avscabinets.com/project/contemporary/',
  'https://avscabinets.com/project/vintage/',
  'https://avscabinets.com/project/kitchens/',
  'https://avscabinets.com/project/vanities/',
  'https://avscabinets.com/project/entertainment/',
  'https://avscabinets.com/project/bars/',
  'https://avscabinets.com/project/doors/',
  'https://avscabinets.com/project/wood/',
  'https://avscabinets.com/project/ceilings/'
];

// Create output directories
const directories = [
  'portfolio', 'services', 'process', 'materials', 
  'about', 'contact', 'journal', 'team', 
  'service-areas', 'hero', 'gallery'
];

directories.forEach(dir => {
  const dirPath = path.join(OUTPUT_DIR, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

// Function to download a file
function downloadFile(url, filePath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https:') ? https : http;
    
    const file = fs.createWriteStream(filePath);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        file.close();
        fs.unlink(filePath, () => {});
        const redirectUrl = response.headers.location;
        if (redirectUrl) {
          const absoluteUrl = new URL(redirectUrl, url).href;
          downloadFile(absoluteUrl, filePath).then(resolve).catch(reject);
        } else {
          reject(new Error(`HTTP ${response.statusCode} - No redirect location`));
        }
      } else {
        file.close();
        fs.unlink(filePath, () => {});
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

// Function to scrape a page for images
async function scrapePage(pageUrl) {
  return new Promise((resolve, reject) => {
    const protocol = pageUrl.startsWith('https:') ? https : http;
    
    protocol.get(pageUrl, (response) => {
      let data = '';
      
      response.on('data', (chunk) => {
        data += chunk;
      });
      
      response.on('end', () => {
        const images = [];
        
        // Extract image URLs from various patterns
        const imagePatterns = [
          /<img[^>]+src=["']([^"']+)["'][^>]*>/gi,
          /<img[^>]+data-src=["']([^"']+)["'][^>]*>/gi,
          /<img[^>]+data-lazy=["']([^"']+)["'][^>]*>/gi,
          /<img[^>]+data-original=["']([^"']+)["'][^>]*>/gi,
          /background-image:\s*url\(["']?([^"')]+)["']?\)/gi,
          /<source[^>]+srcset=["']([^"']+)["'][^>]*>/gi,
          /<source[^>]+src=["']([^"']+)["'][^>]*>/gi,
          /data-bg=["']([^"']+)["']/gi,
          /data-background=["']([^"']+)["']/gi,
          /<div[^>]+style=["'][^"']*background-image:\s*url\(["']?([^"')]+)["']?\)[^"']*["'][^>]*>/gi
        ];
        
        imagePatterns.forEach(pattern => {
          let match;
          while ((match = pattern.exec(data)) !== null) {
            let imageUrl = match[1];
            
            // Convert relative URLs to absolute
            if (imageUrl.startsWith('/')) {
              imageUrl = BASE_URL + imageUrl;
            } else if (imageUrl.startsWith('./')) {
              imageUrl = pageUrl.replace(/\/[^\/]*$/, '/') + imageUrl.substring(2);
            } else if (!imageUrl.startsWith('http')) {
              try {
                imageUrl = new URL(imageUrl, pageUrl).href;
              } catch (e) {
                continue;
              }
            }
            
            // Filter for image files and same domain
            if (imageUrl.match(/\.(jpg|jpeg|png|gif|webp|svg|bmp|tiff)(\?.*)?$/i) && 
                imageUrl.includes('avscabinets.com')) {
              images.push(imageUrl);
            }
          }
        });
        
        resolve([...new Set(images)]);
      });
    }).on('error', reject);
  });
}

// Function to generate SEO-friendly filename based on page and image
function generateFilename(imageUrl, pageUrl, index) {
  const url = new URL(imageUrl);
  const pathname = url.pathname;
  const filename = path.basename(pathname);
  
  // Remove query parameters
  const cleanFilename = filename.split('?')[0];
  
  // Determine category and SEO-friendly naming based on page URL
  let category = 'portfolio';
  let seoName = '';
  
  if (pageUrl.includes('/gallery/')) {
    category = 'portfolio';
    seoName = `gallery-luxury-custom-kitchen-${index + 1}.jpg`;
  } else if (pageUrl.includes('/contemporary/')) {
    category = 'portfolio';
    seoName = `contemporary-modern-kitchen-cabinetry-${index + 1}.jpg`;
  } else if (pageUrl.includes('/vintage/')) {
    category = 'portfolio';
    seoName = `vintage-traditional-kitchen-design-${index + 1}.jpg`;
  } else if (pageUrl.includes('/kitchens/')) {
    category = 'portfolio';
    seoName = `custom-kitchen-cabinetry-luxury-${index + 1}.jpg`;
  } else if (pageUrl.includes('/vanities/')) {
    category = 'services';
    seoName = `custom-bathroom-vanity-cabinetry-${index + 1}.jpg`;
  } else if (pageUrl.includes('/entertainment/')) {
    category = 'services';
    seoName = `custom-entertainment-center-cabinetry-${index + 1}.jpg`;
  } else if (pageUrl.includes('/bars/')) {
    category = 'services';
    seoName = `custom-bar-cabinetry-luxury-${index + 1}.jpg`;
  } else if (pageUrl.includes('/doors/')) {
    category = 'services';
    seoName = `custom-door-design-cabinetry-${index + 1}.jpg`;
  } else if (pageUrl.includes('/wood/')) {
    category = 'materials';
    seoName = `premium-wood-species-grain-${index + 1}.jpg`;
  } else if (pageUrl.includes('/ceilings/')) {
    category = 'services';
    seoName = `custom-ceiling-millwork-design-${index + 1}.jpg`;
  } else {
    // Default portfolio naming
    category = 'portfolio';
    seoName = `luxury-custom-cabinetry-${index + 1}.jpg`;
  }
  
  // Add location-based SEO if we can detect it from the image URL
  if (imageUrl.includes('sacramento') || imageUrl.includes('california')) {
    seoName = seoName.replace('.jpg', '-sacramento-california.jpg');
  }
  
  // Add material keywords if detected in URL
  if (imageUrl.includes('walnut') || cleanFilename.toLowerCase().includes('walnut')) {
    seoName = seoName.replace('.jpg', '-walnut-wood.jpg');
  } else if (imageUrl.includes('oak') || cleanFilename.toLowerCase().includes('oak')) {
    seoName = seoName.replace('.jpg', '-oak-wood.jpg');
  } else if (imageUrl.includes('cherry') || cleanFilename.toLowerCase().includes('cherry')) {
    seoName = seoName.replace('.jpg', '-cherry-wood.jpg');
  } else if (imageUrl.includes('maple') || cleanFilename.toLowerCase().includes('maple')) {
    seoName = seoName.replace('.jpg', '-maple-wood.jpg');
  }
  
  // Add style keywords if detected
  if (imageUrl.includes('modern') || cleanFilename.toLowerCase().includes('modern')) {
    seoName = seoName.replace('.jpg', '-modern-design.jpg');
  } else if (imageUrl.includes('traditional') || cleanFilename.toLowerCase().includes('traditional')) {
    seoName = seoName.replace('.jpg', '-traditional-design.jpg');
  } else if (imageUrl.includes('contemporary') || cleanFilename.toLowerCase().includes('contemporary')) {
    seoName = seoName.replace('.jpg', '-contemporary-design.jpg');
  }
  
  // Ensure .jpg extension for WebP conversion
  if (!seoName.match(/\.(jpg|jpeg|png|gif|webp|bmp|tiff)$/i)) {
    seoName += '.jpg';
  }
  
  return { filename: seoName, category };
}

// Main scraping function
async function scrapeAVSGallery() {
  console.log('🚀 Starting AV\'s Cabinets gallery scraping...\n');
  
  const allImages = new Set();
  let totalImages = 0;
  let downloadedCount = 0;
  let failedCount = 0;
  
  try {
    // Scrape each target page
    for (const pageUrl of TARGET_PAGES) {
      try {
        console.log(`🔍 Scraping: ${pageUrl}`);
        const images = await scrapePage(pageUrl);
        
        if (images.length > 0) {
          console.log(`   📸 Found ${images.length} images`);
          images.forEach(img => allImages.add(img));
          totalImages += images.length;
        } else {
          console.log(`   No images found`);
        }
        
        // Small delay between requests
        await new Promise(resolve => setTimeout(resolve, 500));
        
      } catch (error) {
        console.error(`❌ Failed to scrape ${pageUrl}: ${error.message}`);
      }
    }
    
    console.log(`\n📊 Found ${totalImages} total images across all pages\n`);
    
    // Download all images
    if (allImages.size > 0) {
      console.log('📥 Starting image downloads...\n');
      
      const imageArray = Array.from(allImages);
      
      for (let i = 0; i < imageArray.length; i++) {
        const imageUrl = imageArray[i];
        
        try {
          // Determine category and filename
          const pageUrl = TARGET_PAGES.find(page => imageUrl.includes('avscabinets.com'));
          const { filename, category } = generateFilename(imageUrl, pageUrl, i);
          const filePath = path.join(OUTPUT_DIR, category, filename);
          
          // Skip if file exists and not overwriting
          if (!OVERWRITE && fs.existsSync(filePath)) {
            console.log(`   ⏭️  Skipping existing: ${filename}`);
            continue;
          }
          
          console.log(`   📥 Downloading: ${filename}`);
          await downloadFile(imageUrl, filePath);
          
          downloadedCount++;
          console.log(`   ✅ Downloaded: ${filename}`);
          
          // Small delay to be respectful to the server
          await new Promise(resolve => setTimeout(resolve, 200));
          
        } catch (error) {
          console.error(`   ❌ Failed to download ${imageUrl}: ${error.message}`);
          failedCount++;
        }
      }
    }
    
    // Summary
    console.log('\n✨ Scraping complete!\n');
    console.log(`📊 Summary:`);
    console.log(`   Pages scraped: ${TARGET_PAGES.length}`);
    console.log(`   Total images found: ${totalImages}`);
    console.log(`   Successfully downloaded: ${downloadedCount}`);
    console.log(`   Failed downloads: ${failedCount}`);
    console.log(`   Images saved to: ${OUTPUT_DIR}\n`);
    
    // Convert to WebP
    if (downloadedCount > 0) {
      console.log('🔄 Converting downloaded images to WebP...');
      const { execSync } = require('child_process');
      
      try {
        execSync('npm run convert-webp', { stdio: 'inherit' });
        console.log('✅ WebP conversion complete!');
      } catch (error) {
        console.error('❌ WebP conversion failed:', error.message);
      }
    }
    
  } catch (error) {
    console.error('❌ Scraping failed:', error.message);
    process.exit(1);
  }
}

// Run the scraper
if (require.main === module) {
  scrapeAVSGallery();
}

module.exports = { scrapeAVSGallery, downloadFile, generateFilename };
