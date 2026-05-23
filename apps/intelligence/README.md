# Vorantir Intelligence Platform (`intelligence.vorantir.com`)

The Generative Engine Optimization (GEO) platform audit and diagnostics suite. Includes continuous model visibility audits, citation source tracing, competitor search share metrics, and corporate reference telemetry.

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server (port 3002):
   ```bash
   npm run dev
   ```

3. Build production target:
   ```bash
   npm run build
   ```

## Architecture Integration
Surgically imports core layouts (`LightLayout`) and custom subdomain URL handlers from the root `/shared` folder.

## 🚀 Vercel Production Deployment

To deploy this sub-application independently on Vercel:

1. **Root Directory**: `.` (Set to the repository root, **NOT** `apps/intelligence`)
2. **Build Command**: `npm run build --prefix apps/intelligence`
3. **Output Directory**: `apps/intelligence/dist`
4. **Install Command**: `npm install --prefix apps/intelligence`

Setting the root context gives Vercel full access to resolve sibling `@shared` directories.
