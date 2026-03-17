# Image Background Remover

Free online tool to remove backgrounds from images using AI. Built with Next.js, deployed on Cloudflare Pages.

## Features
- 🚀 **Fast processing**: Remove backgrounds in seconds
- 💰 **Free tier**: 50 free images per month via Remove.bg API
- ☁️ **No storage**: Images processed in memory, not stored
- 🌍 **Global CDN**: Deployed on Cloudflare Pages
- 📱 **Responsive**: Works on all devices

## Tech Stack
- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- **Backend**: Next.js API Routes
- **API**: Remove.bg
- **Deployment**: Cloudflare Pages
- **Storage**: None (in-memory processing only)

## Getting Started

### Prerequisites
1. Remove.bg API key (free: https://www.remove.bg/api)
2. Cloudflare account (free: https://dash.cloudflare.com)

### Development
```bash
npm install
npm run dev
```

### Environment Variables
Create `.env.local`:
```env
REMOVEBG_API_KEY=your_removebg_api_key
```

### Deployment
1. Connect GitHub repo to Cloudflare Pages
2. Set environment variable `REMOVEBG_API_KEY`
3. Deploy automatically on push

## API Usage
The tool uses Remove.bg API with these parameters:
- Free tier: 50 images/month
- Max file size: 12MB
- Supported formats: JPG, PNG, WebP
- Output format: PNG with transparency

## Documentation
- [MVP Requirements](./MVP_REQUIREMENTS.md) - Complete project requirements
- [Cloudflare Deployment](./cloudflare-pages.md) - Deployment guide
- [Original PRD](./docs/image_background_remover_mvp_prd.md) - Original product requirements

## License
MIT