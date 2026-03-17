# Cloudflare Pages Deployment Guide

## Prerequisites
1. Cloudflare account (free: https://dash.cloudflare.com)
2. Remove.bg API key (free: https://www.remove.bg/api)

## Deployment Steps

### 1. Connect to Cloudflare Pages
1. Go to Cloudflare Dashboard → Pages → Create a project
2. Connect your GitHub repository
3. Select "bg-remover-tool" repository

### 2. Configure Build Settings
- **Build command**: `npm run build`
- **Build output directory**: `.next`
- **Node.js version**: 20

### 3. Set Environment Variables
Add these environment variables in Cloudflare Pages:
- `REMOVEBG_API_KEY`: Your Remove.bg API key
- `NODE_VERSION`: 20

### 4. Deploy
1. Click "Save and Deploy"
2. Wait for deployment to complete
3. Your site will be available at: `https://bg-remover-tool.pages.dev`

## Manual Deployment (Alternative)
If you prefer manual deployment:

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy to Cloudflare Pages
wrangler pages deploy .next --project-name=bg-remover-tool
```

## Environment Variables
Create `.env.production` for local testing:
```env
REMOVEBG_API_KEY=your_api_key_here
```

## Troubleshooting
- **Build fails**: Check Node.js version (should be 20)
- **API errors**: Verify Remove.bg API key is valid
- **Image upload fails**: Check file size (max 10MB) and format (JPG/PNG/WebP)