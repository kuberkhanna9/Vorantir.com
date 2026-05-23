# Vorantir Signal Division (`signal.vorantir.com`)

The premium growth advisory and conversion marketing suite, operating ad campaigns, high-end design executions, and paid performance budgets with mathematical precision.

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server (port 3003):
   ```bash
   npm run dev
   ```

3. Build production target:
   ```bash
   npm run build
   ```

## Architecture Integration
Surgically imports core layouts (`DarkLayout`) and custom subdomain URL handlers from the root `/shared` folder.

## 🚀 Vercel Production Deployment

To deploy this sub-application independently on Vercel:

1. **Root Directory**: `.` (Set to the repository root, **NOT** `apps/signal`)
2. **Build Command**: `npm run build --prefix apps/signal`
3. **Output Directory**: `apps/signal/dist`
4. **Install Command**: `npm install --prefix apps/signal`

Setting the root context gives Vercel full access to resolve sibling `@shared` directories.
