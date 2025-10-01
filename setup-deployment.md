# 🚀 Deployment Setup Guide

## GitHub Repository Setup

### Option 1: Using GitHub Web Interface (Recommended)

1. **Go to GitHub.com** and sign in to your account
2. **Click "New Repository"** (green button)
3. **Repository name**: `avs-cabinets`
4. **Description**: `Luxury custom kitchens and bespoke cabinetry website for California's wealthiest neighborhoods`
5. **Set to Private** (recommended for client work)
6. **Don't initialize** with README (we already have one)
7. **Click "Create Repository"**

### Option 2: Using GitHub CLI (if authenticated)

```bash
cd "/Users/george/AVS Cabinets"
gh repo create avs-cabinets --private --description "Luxury custom kitchens and bespoke cabinetry website for California's wealthiest neighborhoods"
git remote add origin https://github.com/YOUR_USERNAME/avs-cabinets.git
git push -u origin main
```

## Push to GitHub

After creating the repository, run these commands:

```bash
cd "/Users/george/AVS Cabinets"

# Add the remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/avs-cabinets.git

# Push to GitHub
git push -u origin main
```

## Vercel Deployment

### Step 1: Connect to Vercel

1. **Go to [vercel.com](https://vercel.com)** and sign in
2. **Click "New Project"**
3. **Import Git Repository** and select your `avs-cabinets` repository
4. **Configure Project**:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)

### Step 2: Deploy

1. **Click "Deploy"**
2. **Wait for deployment** (usually 2-3 minutes)
3. **Get your live URL** (e.g., `https://avs-cabinets-abc123.vercel.app`)

### Step 3: Custom Domain (Optional)

1. **Go to Project Settings** → **Domains**
2. **Add your custom domain** (e.g., `avscabinets.com`)
3. **Follow DNS instructions** to point your domain to Vercel

## Environment Variables (if needed)

If you need to add environment variables later:

1. **Go to Vercel Dashboard** → **Your Project** → **Settings** → **Environment Variables**
2. **Add variables** like:
   - `NEXT_PUBLIC_SITE_URL=https://your-domain.com`
   - `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` (for Google Analytics)

## Automatic Deployments

Once connected, Vercel will automatically deploy:
- **Every push to `main` branch** → Production deployment
- **Every pull request** → Preview deployment
- **Every push to other branches** → Preview deployment

## Testing Your Deployment

1. **Visit your Vercel URL**
2. **Test all major pages**:
   - Homepage: `/`
   - Services: `/services`
   - Portfolio: `/portfolio`
   - Service Areas: `/service-areas/atherton`
   - Contact: `/contact`

3. **Check mobile responsiveness**
4. **Test navigation and forms**

## Performance Optimization

Your site is already optimized with:
- ✅ **Next.js Image Optimization**
- ✅ **Automatic Code Splitting**
- ✅ **Static Generation** where possible
- ✅ **SEO Optimization**
- ✅ **Responsive Design**

## Monitoring

- **Vercel Analytics**: Built-in performance monitoring
- **Google Analytics**: Add GA4 for detailed tracking
- **Google Search Console**: Monitor SEO performance

## Quick Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Deploy to Vercel (if using Vercel CLI)
vercel

# Deploy production
vercel --prod
```

## Troubleshooting

### Common Issues:

1. **Build Errors**: Check the Vercel build logs for specific errors
2. **Image Issues**: Ensure all images are in the `public/images/` directory
3. **TypeScript Errors**: Run `npm run build` locally to catch errors
4. **Environment Variables**: Make sure they're set in Vercel dashboard

### Getting Help:

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **GitHub Issues**: Create an issue in your repository

---

**Your luxury website is ready to serve California's most discerning clientele! 🏆**
