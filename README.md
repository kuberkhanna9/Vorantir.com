# Vorantir Ecosystem Monorepo

Welcome to the institutional, production-grade monorepo for the **Vorantir** group. This repository contains the standalone applications for each of the group's divisions, bridged together using a robust, case-sensitive shared visual and component architectural layer.

---

## 🏗️ Repository Architecture

- **`apps/landing`**: Main corporate landing site (`vorantir.com`) - Port `3001`
- **`apps/intelligence`**: Vorantir Intelligence Platform (`intelligence.vorantir.com`) - Port `3002`
- **`apps/signal`**: Vorantir Signal division (`signal.vorantir.com`) - Port `3003`
- **`shared/`**: Unified global styles (`shared.css`), Floating corporate Header & atmospheric Footer, Page Wrappers, and domain resolvers.

---

## 🛠️ Local Development Setup

To run the apps locally:

1. Install dependencies inside the target app:
   ```bash
   npm install --prefix apps/landing
   npm install --prefix apps/intelligence
   npm install --prefix apps/signal
   ```

2. Spin up the local development servers:
   ```bash
   npm run dev --prefix apps/landing       # Port 3001
   npm run dev --prefix apps/intelligence  # Port 3002
   npm run dev --prefix apps/signal        # Port 3003
   ```

3. Compile production builds locally:
   ```bash
   npm run build --prefix apps/landing
   npm run build --prefix apps/intelligence
   npm run build --prefix apps/signal
   ```

---

## 🚀 Vercel Production Deployments

For high-performance, case-sensitive deployments on Vercel without path or asset resolution issues, follow the standard **monorepo-safe configuration**:

### 1. Main Corporate Site (`vorantir.com`)
- **Root Directory**: `.` (Set to the repository root, **NOT** `apps/landing`)
- **Build Command**: `npm run build --prefix apps/landing`
- **Output Directory**: `apps/landing/dist`
- **Install Command**: `npm install --prefix apps/landing`

### 2. Vorantir Intelligence (`intelligence.vorantir.com`)
- **Root Directory**: `.` (Set to the repository root, **NOT** `apps/intelligence`)
- **Build Command**: `npm run build --prefix apps/intelligence`
- **Output Directory**: `apps/intelligence/dist`
- **Install Command**: `npm install --prefix apps/intelligence`

### 3. Vorantir Signal (`signal.vorantir.com`)
- **Root Directory**: `.` (Set to the repository root, **NOT** `apps/signal`)
- **Build Command**: `npm run build --prefix apps/signal`
- **Output Directory**: `apps/signal/dist`
- **Install Command**: `npm install --prefix apps/signal`

> [!IMPORTANT]
> Setting the **Root Directory** to `.` gives Vercel's build sandbox full access to the sibling `/shared` directory at compile time, completely resolving all CSS and alias `@shared` paths in Unix/Linux environments.
