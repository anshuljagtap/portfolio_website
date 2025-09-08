# Portfolio Website Deployment Guide

## 🚀 **Option 1: GitHub Pages (Recommended)**

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `anshuljagtap.github.io` (for custom domain) or `portfolio-website`
3. Make it **Public**

### Step 2: Push Your Code
```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/anshuljagtap/REPOSITORY_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose **main** branch and **/(root)** folder
5. Click **Save**

### Step 4: Custom Domain Setup
1. In **Settings** → **Pages**, enter your domain in **Custom domain**
2. Check **Enforce HTTPS**
3. Add a `CNAME` file to your repository with your domain name

## 🌐 **Option 2: Netlify (Alternative)**

### Step 1: Deploy to Netlify
1. Go to [Netlify](https://netlify.com)
2. Drag and drop your entire portfolio folder
3. Wait for deployment (usually 1-2 minutes)

### Step 2: Custom Domain
1. Go to **Domain settings**
2. Click **Add custom domain**
3. Follow the DNS configuration instructions

## 🔧 **Domain Configuration**

### For GitHub Pages:
Create a `CNAME` file in your repository root:
```
yourdomain.com
```

### DNS Settings (with your domain provider):
```
Type: CNAME
Name: @
Value: anshuljagtap.github.io
```

## 📁 **Files to Include**
- ✅ `index.html` - Main portfolio page
- ✅ `style.css` - Styling
- ✅ `script.js` - JavaScript functionality
- ✅ `Jagtap_Anshul_Resume.pdf` - Resume
- ✅ `code.gs` - Google Apps Script (for reference)

## 🎯 **Quick Commands**
```bash
# Push updates
git add .
git commit -m "Update portfolio"
git push

# Check status
git status
```

## 🔗 **Your Live Portfolio Will Be At:**
- **GitHub Pages**: `https://anshuljagtap.github.io` (or your custom domain)
- **Netlify**: `https://your-site-name.netlify.app` (or your custom domain)

## ✅ **What's Ready:**
- ✅ All 5 projects with working links
- ✅ Contact form with Google Sheets integration
- ✅ Responsive design
- ✅ Terminal aesthetics
- ✅ Professional animations

Your portfolio is ready to go live! 🚀 