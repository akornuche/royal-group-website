# Royal Group Website - Deployment to Vercel

Your code is committed locally and ready to deploy. Follow these steps:

## Step 1: Create a GitHub Repository

1. Go to **github.com** and log in
2. Click **+** (top right) → **New repository**
3. Repository name: `royal-group-website`
4. Description: `Royal Group - Nigerian agro-allied enterprise website`
5. **Do NOT** initialize with README (we have files already)
6. Click **Create repository**

## Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you instructions. Run these commands in PowerShell:

```powershell
cd c:\Git\royal-group-website

# Add the remote (replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/royal-group-website.git

# Rename branch to main (if needed)
git branch -M main

# Push the code
git push -u origin main
```

**If you get an authentication error:**
- Generate a Personal Access Token: github.com/settings/tokens
- When prompted for password, paste the token instead
- OR use SSH keys if configured

## Step 3: Deploy to Vercel

1. Go to **vercel.com** and log in (or sign up with GitHub)
2. Click **Add New...** → **Project**
3. Click **Import Git Repository**
4. Find and select `royal-group-website`
5. Click **Import**
6. **Project Settings** (should auto-detect):
   - Framework: `Next.js`
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
7. Click **Deploy**

Vercel will build and deploy your site. You'll get a live URL like:
```
https://royal-group-website.vercel.app
```

## Step 4: Set Custom Domain (Optional)

After deployment:
1. In Vercel dashboard, go to your project
2. Click **Settings** → **Domains**
3. Add your custom domain (e.g., `royalgroup.com.ng`)
4. Follow DNS instructions from your domain registrar

## Auto-Deployment

After initial setup:
- **Every time you push to GitHub**, Vercel auto-builds and deploys
- No manual steps needed
- Deployments take ~2-3 minutes

## Environment Variables (if needed later)

To add secrets (API keys, etc.):
1. In Vercel project → **Settings** → **Environment Variables**
2. Add key-value pairs
3. Redeploy to apply

---

## Current Site Status

✓ Production build tested and working
✓ All pages functional
✓ WhatsApp integration active
✓ ChatBot widget functional
✓ Contact form ready (email placeholder)
✓ Fully responsive design

Your site is ready to go live! 🚀
