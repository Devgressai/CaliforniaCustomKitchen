# AV's Cabinets - Image Scraping Guide

## 🎯 **Overview**
This guide will help you download all images from your current AV's Cabinets website (avscabinets.com) and organize them for your new luxury website.

---

## 🚀 **Quick Start**

### **1. Run the Image Scraper**
```bash
# Download all images from avscabinets.com
npm run scrape-images

# Or run directly
npm run download-all
```

### **2. What It Does**
- ✅ Scrapes all pages on avscabinets.com
- ✅ Downloads images from gallery, portfolio, services, etc.
- ✅ Organizes images into proper directories
- ✅ Generates SEO-friendly filenames
- ✅ Converts all images to WebP format
- ✅ Updates code references automatically

---

## 📊 **Pages Scraped**

### **Main Pages**
- Homepage (`/`)
- Gallery (`/gallery/`)
- About (`/about/`)
- Contact (`/contact/`)
- Services (`/services/`)
- Portfolio (`/portfolio/`)
- Materials (`/materials/`)
- Process (`/process/`)
- Journal (`/journal/`)
- Showroom (`/showroom/`)

### **Service Area Pages**
- Silicon Valley (`/service-areas/silicon-valley/`)
- Los Angeles (`/service-areas/los-angeles/`)
- San Francisco (`/service-areas/san-francisco/`)
- Central Coast (`/service-areas/central-coast/`)
- Santa Barbara (`/service-areas/santa-barbara/`)
- Lake Tahoe (`/service-areas/lake-tahoe/`)
- Truckee (`/service-areas/truckee/`)
- Napa Valley (`/service-areas/napa-valley/`)
- Sonoma County (`/service-areas/sonoma-county/`)
- Marin County (`/service-areas/marin-county/`)
- Orange County (`/service-areas/orange-county/`)
- San Diego County (`/service-areas/san-diego-county/`)
- Palm Springs (`/service-areas/palm-springs/`)
- La Jolla (`/service-areas/la-jolla/`)

### **Service Pages**
- Custom Kitchens (`/services/custom-kitchens/`)
- Bespoke Cabinetry (`/services/bespoke-cabinetry/`)
- Architectural Millwork (`/services/architectural-millwork/`)
- Paneling (`/services/paneling/`)
- Wine Rooms (`/services/wine-rooms/`)
- Vanities (`/services/vanities/`)
- Libraries, Closets & Offices (`/services/libraries-closets-offices/`)

---

## 📁 **Image Organization**

### **Directory Structure**
```
public/images/
├── portfolio/          # Gallery and portfolio images
├── services/           # Service page images
├── process/            # Process documentation images
├── materials/          # Materials and wood samples
├── about/              # About page and team images
├── contact/            # Contact page images
├── journal/            # Blog/journal images
├── team/               # Team member photos
├── service-areas/      # Location-specific images
└── hero/               # Homepage hero images
```

### **Naming Convention**
- **Gallery images**: `gallery-[original-name].jpg`
- **Portfolio images**: `portfolio-[original-name].jpg`
- **Service images**: `services-[original-name].jpg`
- **Materials images**: `materials-[original-name].jpg`
- **Process images**: `process-[original-name].jpg`
- **About images**: `about-[original-name].jpg`
- **Contact images**: `contact-[original-name].jpg`
- **Journal images**: `journal-[original-name].jpg`
- **Team images**: `team-[original-name].jpg`
- **Service area images**: `[location]-[original-name].jpg`

---

## 🔍 **Image Detection**

### **Supported Patterns**
The scraper detects images from:
- `<img src="...">` tags
- `background-image: url(...)` CSS
- `<source srcset="...">` tags
- `data-src="..."` lazy loading
- `data-lazy="..."` lazy loading

### **Supported Formats**
- ✅ `.jpg` / `.jpeg`
- ✅ `.png`
- ✅ `.gif`
- ✅ `.webp`
- ✅ `.svg`

### **Filtering**
- Only downloads images from `avscabinets.com`
- Skips external images
- Removes duplicate images
- Filters out non-image files

---

## ⚙️ **Configuration Options**

### **Script Settings**
Edit `scripts/scrape-images.js`:
```javascript
const BASE_URL = 'https://avscabinets.com';
const OUTPUT_DIR = path.join(__dirname, '../public/images');
const QUALITY = 85; // WebP quality
const OVERWRITE = false; // Overwrite existing files
```

### **Customization**
- **Change base URL** for different domains
- **Adjust quality** for WebP compression
- **Enable overwrite** to replace existing files
- **Add more pages** to the scraping list

---

## 🚀 **Automated Process**

### **1. Image Discovery**
- Scans all specified pages
- Extracts image URLs from HTML/CSS
- Filters and validates image links

### **2. Image Download**
- Downloads images to appropriate directories
- Generates SEO-friendly filenames
- Handles errors gracefully

### **3. WebP Conversion**
- Automatically converts all images to WebP
- Maintains original quality settings
- Updates code references

### **4. Code Updates**
- Updates all component files
- Replaces image references with WebP
- Maintains fallback support

---

## 📊 **Expected Results**

### **Image Counts**
- **Portfolio images**: 50-100+ images
- **Gallery images**: 100-200+ images
- **Service images**: 20-50+ images
- **Process images**: 10-30+ images
- **Materials images**: 20-50+ images
- **Total expected**: 200-400+ images

### **File Size Reductions**
- **Original images**: Various sizes
- **WebP conversion**: 50-70% smaller
- **Overall savings**: Significant bandwidth reduction

---

## 🔧 **Troubleshooting**

### **Common Issues**

#### **1. Permission Errors**
```bash
# Make script executable
chmod +x scripts/scrape-images.js
```

#### **2. Network Errors**
- Check internet connection
- Verify avscabinets.com is accessible
- Try running script again

#### **3. Download Failures**
- Some images may fail due to server restrictions
- Check console output for specific errors
- Failed images are logged for review

#### **4. WebP Conversion Issues**
- Ensure WebP tools are installed
- Check file permissions
- Verify image file integrity

---

## 💡 **Best Practices**

### **1. Before Running**
- Ensure you have sufficient disk space
- Check that avscabinets.com is accessible
- Verify WebP tools are installed

### **2. During Scraping**
- Monitor console output for errors
- Don't interrupt the process
- Check network connectivity

### **3. After Scraping**
- Verify images downloaded correctly
- Test website with new images
- Check WebP conversion results

---

## 🎯 **Next Steps**

1. **Run the scraper**: `npm run scrape-images`
2. **Review downloaded images** in `public/images/`
3. **Test the website** to ensure images load
4. **Customize filenames** if needed
5. **Deploy to production** with optimized images

---

## 🆘 **Support**

### **If Issues Occur**
1. Check the troubleshooting section
2. Review console output for errors
3. Verify file permissions
4. Test with a single page first

### **Manual Download**
If automated scraping fails:
1. Visit each page manually
2. Right-click and save images
3. Organize into proper directories
4. Run WebP conversion separately

---

**Ready to download all your images? Run `npm run scrape-images` to get started!** 🚀
