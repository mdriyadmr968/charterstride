# CharterStride Deployment Guide

This document outlines how to deploy your **CharterStride** portfolio to production platforms like Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

---

## 1. Deploying to Vercel (Recommended)

Vercel is the creator of Next.js and provides zero-configuration deployments with global edge CDN routing.

### Option A: Via GitHub / GitLab / Bitbucket
1. Initialize a git repository and push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of CharterStride portfolio"
   git remote add origin https://github.com/your-username/charter-stride.git
   git push -u origin main
   ```
2. Visit [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and import `charter-stride`.
4. Vercel automatically detects Next.js:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. Click **Deploy**. Your site will be live on an SSL-secured `*.vercel.app` URL within 60 seconds.

### Option B: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 2. Deploying to Netlify

1. In your local repository, run:
   ```bash
   npm run build
   ```
2. Log in to [netlify.com](https://www.netlify.com).
3. Connect your Git repository.
4. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. Click **Deploy Site**.

---

## 3. Static Export (GitHub Pages / Cloudflare Pages / AWS S3)

To export CharterStride as 100% pure static HTML/CSS/JS without any Node.js server dependencies:

1. Open `next.config.ts` and add `output: "export"`:
   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     output: "export",
     images: {
       unoptimized: true,
     },
   };

   export default nextConfig;
   ```
2. Run the build command:
   ```bash
   npm run build
   ```
3. An `out/` directory will be created containing all HTML, CSS, and JS assets.
4. Upload the contents of the `out/` folder to GitHub Pages, Cloudflare Pages, or an AWS S3 bucket configured for static site hosting.

---

## 4. Custom Domain Configuration (e.g., `ayaanrahman.com`)

To link your personal domain on Vercel or Netlify:
1. Go to your project **Settings $\rightarrow$ Domains**.
2. Enter your custom domain (e.g., `ayaanrahman.com` and `www.ayaanrahman.com`).
3. In your domain registrar (GoDaddy, Namecheap, Cloudflare, Google Domains):
   - **Type A Record**: Point `@` to `76.76.21.21` (for Vercel)
   - **CNAME Record**: Point `www` to `cname.vercel-dns.com`
4. SSL certificates are provisioned automatically.

---

## 5. Pre-Deployment Verification Checklist

Before publishing:
- [ ] Updated personal name, email, and phone in `src/data/portfolioData.ts`.
- [ ] Verified that client names in engagement case studies follow confidentiality rules.
- [ ] Confirmed exam milestones and articleship firm name.
- [ ] Tested responsive design on mobile and desktop viewports.
- [ ] Ran `npm run build` locally to confirm zero build errors.
