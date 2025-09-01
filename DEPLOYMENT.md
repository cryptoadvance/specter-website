# 🚀 Deployment Guide for Specter Website

## Overview
This guide shows how to deploy your Specter website to **Netlify** (free) with **Netlify Forms** for contact form handling and your external newsletter service.

## 📋 Prerequisites
- GitHub account
- Netlify account (free)
- Your external newsletter service configured

## 🔧 Deployment Steps

### 1. Prepare Your Repository
```bash
# Ensure your code is committed and pushed to GitHub
git add .
git commit -m "Prepare for Netlify deployment"
git push origin main
```

### 2. Configure Build Settings

Create `netlify.toml` in your project root:
```toml
[build]
  publish = "dist/public"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[functions]
  node_bundler = "esbuild"
```

### 3. Update Package.json Scripts
Your current scripts are already configured correctly:
```json
{
  "scripts": {
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
    "start": "cross-env NODE_ENV=production node dist/index.js"
  }
}
```

### 4. Deploy to Netlify

#### Option A: Netlify Dashboard
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/public`
5. Click "Deploy site"

#### Option B: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist/public
```

### 5. Configure Contact Forms

Your contact forms are already configured with Netlify Forms:
- ✅ Hidden form for detection
- ✅ `data-netlify="true"` attribute
- ✅ Honeypot spam protection
- ✅ Form submission handling

#### Form Notifications
1. Go to your Netlify site dashboard
2. Navigate to **Forms** tab
3. Click on your contact form
4. Set up **Email notifications** or **Webhook integrations**

### 6. Configure Newsletter Integration

Replace the placeholder in `Footer.tsx` with your external service:

```typescript
const handleNewsletterSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  const email = formData.get('email');
  
  // Replace with your newsletter service API
  try {
    await fetch('YOUR_NEWSLETTER_SERVICE_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    // Show success message
  } catch (error) {
    // Show error message
  }
};
```

## 🔒 Environment Variables

If you need environment variables, set them in Netlify:
1. Site dashboard → **Environment variables**
2. Add variables like:
   - `NEWSLETTER_API_KEY`
   - `CONTACT_WEBHOOK_URL`

## 📧 Contact Form Data

### Viewing Submissions
- **Netlify Dashboard**: Site → Forms → View submissions
- **Email Notifications**: Configure in Forms settings
- **Webhooks**: Send to external services (Zapier, etc.)

### Export Data
```bash
# Using Netlify CLI
netlify api listFormSubmissions --site-id=YOUR_SITE_ID
```

## 🌐 Custom Domain (Optional)

1. **Netlify Dashboard**: Site settings → Domain management
2. Add your custom domain
3. Configure DNS records as instructed
4. SSL certificate is automatically provided

## 🚀 Continuous Deployment

Your site will automatically redeploy when you push to GitHub:
```bash
git add .
git commit -m "Update content"
git push origin main
# Netlify automatically rebuilds and deploys
```

## 📊 Monitoring

### Netlify Analytics (Free)
- Page views
- Unique visitors
- Top pages
- Referrers

### Form Analytics
- Submission count
- Spam detection stats
- Conversion rates

## 🔧 Troubleshooting

### Build Fails
```bash
# Check build logs in Netlify dashboard
# Common issues:
# 1. Node version mismatch
# 2. Missing dependencies
# 3. Build command errors
```

### Forms Not Working
1. Ensure hidden form exists for detection
2. Check form name matches in both forms
3. Verify `data-netlify="true"` attribute
4. Check Netlify Forms dashboard for submissions

### Newsletter Integration
1. Test your external service endpoint
2. Check CORS settings
3. Verify API keys in environment variables

## 💰 Cost Breakdown

### Netlify Free Tier
- ✅ 100GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ 100 form submissions/month
- ✅ Custom domain support
- ✅ SSL certificates
- ✅ Deploy previews

### Upgrade Triggers
- More than 100 form submissions/month ($19/month)
- More than 300 build minutes/month
- Advanced features (A/B testing, etc.)

## 🎯 Next Steps

1. **Deploy to Netlify** using the steps above
2. **Test contact form** submissions
3. **Integrate newsletter service** with your provider
4. **Set up monitoring** and notifications
5. **Configure custom domain** (optional)

Your Specter website is now ready for production deployment! 🚀
