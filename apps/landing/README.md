# Vorantir Landing Portal (`vorantir.com`)

The corporate landing portal for the Vorantir AI-Native Strategy & Intelligence Group. Contains primary identity blocks, strategy, careers, contact portals, and company worldview.

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server (port 3001):
   ```bash
   npm run dev
   ```

3. Build production target:
   ```bash
   npm run build
   ```

## Architecture Integration
Uses the root `/shared` folder for global design styling tokens, day/night layouts, and subdomain URL bridging resolver.

## 🚀 Vercel Production Deployment

To deploy this sub-application independently on Vercel:

1. **Root Directory**: `.` (Set to the repository root, **NOT** `apps/landing`)
2. **Build Command**: `npm run build --prefix apps/landing`
3. **Output Directory**: `apps/landing/dist`
4. **Install Command**: `npm install --prefix apps/landing`

Setting the root context gives Vercel full access to resolve sibling `@shared` directories.
