#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');
const { URL } = require('url');

// Configuration
const GALLERY_URL = 'https://avscabinets.com/gallery/';
const OUTPUT_DIR = path.join(__dirname, '../public/images');

// Create output directories
const directories = ['portfolio', 'services', 'materials', 'process', 'about', 'contact', 'journal', 'team', 'service-areas', 'hero'];
directories.forEach(dir => {
  const dirPath = path.join(OUTPUT_DIR, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

// Function to download a file
function downloadFile(url, filePath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
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

// Function to scrape gallery page
async function scrapeGallery() {
  return new Promise((resolve, reject) => {
    https.get(GALLERY_URL, (response) => {
      let data = '';
      
      response.on('data', (chunk) => {
        data += chunk;
      });
      
      response.on('end', () => {
        const images = [];
        
        // Extract image URLs from various patterns
        const imagePatterns = [
          /<img[^>]+src=["']([^"']+)["'][^>]*>/gi,
          /background-image:\s*url\(["']?([^"')]+)["']?\)/gi,
          /<source[^>]+srcset=["']([^"']+)["'][^>]*>/gi,
          /data-src=["']([^"']+)["']/gi,
          /data-lazy=["']([^"']+)["']/gi,
          /data-original=["']([^"']+)["']/gi
        ];
        
        imagePatterns.forEach(pattern => {
          let match;
          while ((match = pattern.exec(data)) !== null) {
            let imageUrl = match[1];
            
            // Convert relative URLs to absolute
            if (imageUrl.startsWith('/')) {
              imageUrl = 'https://avscabinets.com' + imageUrl;
            } else if (imageUrl.startsWith('./')) {
              imageUrl = GALLERY_URL.replace(/\/[^\/]*$/, '/') + imageUrl.substring(2);
            } else if (!imageUrl.startsWith('http')) {
              imageUrl = new URL(imageUrl, GALLERY_URL).href;
            }
            
            // Filter for image files
            if (imageUrl.match(/\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/i)) {
              images.push(imageUrl);
            }
          }
        });
        
        resolve([...new Set(images)]);
      });
    }).on('error', reject);
  });
}

// Function to generate filename based on URL
function generateFilename(imageUrl, index) {
  const url = new URL(imageUrl);
  const pathname = url.pathname;
  const filename = path.basename(pathname);
  
  // Remove query parameters
  const cleanFilename = filename.split('?')[0];
  
  // Generate SEO-friendly name
  let seoName = cleanFilename;
  
  if (pathname.includes('/gallery/') || pathname.includes('/portfolio/')) {
    seoName = `gallery-${index + 1}-${cleanFilename}`;
  } else if (pathname.includes('/kitchens/')) {
    seoName = `kitchen-${index + 1}-${cleanFilename}`;
  } else if (pathname.includes('/vanities/')) {
    seoName = `vanity-${index + 1}-${cleanFilename}`;
  } else if (pathname.includes('/entertainment/')) {
    seoName = `entertainment-${index + 1}-${cleanFilename}`;
  } else if (pathname.includes('/bars/')) {
    seoName = `bar-${index + 1}-${cleanFilename}`;
  } else if (pathname.includes('/doors/')) {
    seoName = `door-${index + 1}-${cleanFilename}`;
  } else if (pathname.includes('/wood/')) {
    seoName = `wood-${index + 1}-${cleanFilename}`;
  } else if (pathname.includes('/ceilings/')) {
    seoName = `ceiling-${index + 1}-${cleanFilename}`;
  } else if (pathname.includes('/contemporary/')) {
    seoName = `contemporary-${index + 1}-${cleanFilename}`;
  }
  
  // Ensure .jpg extension
  if (!seoName.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
    seoName += '.jpg';
  }
  
  return seoName;
}

// Function to determine category based on URL
function getCategory(imageUrl) {
  const url = new URL(imageUrl);
  const pathname = url.pathname;
  
  if (pathname.includes('/kitchens/') || pathname.includes('/contemporary/')) {
    return 'portfolio';
  } else if (pathname.includes('/vanities/') || pathname.includes('/entertainment/') || 
             pathname.includes('/bars/') || pathname.includes('/doors/') || 
             pathname.includes('/ceilings/')) {
    return 'services';
  } else if (pathname.includes('/wood/')) {
    return 'materials';
  }
  
  return 'portfolio'; // Default category
}

// Main scraping function
async function scrapeGalleryImages() {
  console.log('🚀 Starting gallery image scraping from avscabinets.com...\n');
  
  try {
    console.log(`🔍 Scraping gallery: ${GALLERY_URL}`);
    const images = await scrapeGallery();
    
    if (images.length === 0) {
      console.log('❌ No images found in gallery');
      console.log('💡 Try the manual download guide: MANUAL_IMAGE_DOWNLOAD_GUIDE.md');
      return;
    }
    
    console.log(`📸 Found ${images.length} images in gallery\n`);
    
    let downloadedCount = 0;
    let failedCount = 0;
    
    // Download each image
    for (let i = 0; i < images.length; i++) {
      const imageUrl = images[i];
      
      try {
        const category = getCategory(imageUrl);
        const filename = generateFilename(imageUrl, i);
        const filePath = path.join(OUTPUT_DIR, category, filename);
        
        // Skip if file exists
        if (fs.existsSync(filePath)) {
          console.log(`   ⏭️  Skipping existing: ${filename}`);
          continue;
        }
        
        console.log(`   📥 Downloading: ${filename}`);
        await downloadFile(imageUrl, filePath);
        
        downloadedCount++;
        
        // Small delay to be respectful to the server
        await new Promise(resolve => setTimeout(resolve, 200));
        
      } catch (error) {
        console.error(`   ❌ Failed to download ${imageUrl}: ${error.message}`);
        failedCount++;
      }
    }
    
    // Summary
    console.log('\n✨ Gallery scraping complete!\n');
    console.log(`📊 Summary:`);
    console.log(`   Total images found: ${images.length}`);
    console.log(`   Successfully downloaded: ${downloadedCount}`);
    console.log(`   Failed downloads: ${failedCount}`);
    console.log(`   Images saved to: ${OUTPUT_DIR}\n`);
    
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
    console.error('❌ Gallery scraping failed:', error.message);
    console.log('\n💡 Try the manual download guide: MANUAL_IMAGE_DOWNLOAD_GUIDE.md');
  }
}

// Run the scraper
if (require.main === module) {
  scrapeGalleryImages();
}

module.exports = { scrapeGalleryImages, downloadFile, generateFilename, getCategory };
