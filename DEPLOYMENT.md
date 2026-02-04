# Deployment Guide

## Deploying to GitHub Pages / Vercel / Netlify

### Important: Environment Variables

Your API key is stored in `.env` which is NOT pushed to GitHub (it's in `.gitignore`). When deploying, you need to set environment variables in your hosting platform.

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your GitHub repository
4. In "Environment Variables" section, add:
   - Name: `VITE_NEWS_API_KEY`
   - Value: Your NewsAPI key
5. Click "Deploy"

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. In "Environment variables", add:
   - Key: `VITE_NEWS_API_KEY`
   - Value: Your NewsAPI key
7. Click "Deploy"

### Option 3: GitHub Pages

**Note:** GitHub Pages doesn't support environment variables securely. For production, use Vercel or Netlify instead.

If you still want to use GitHub Pages:
1. Update `vite.config.js` to set the base path
2. Build: `npm run build`
3. Deploy the `dist` folder

### Git Commands to Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Global News Aggregator"

# Add your GitHub repository
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Verify Security

Before pushing, verify your API key is NOT in the code:
```bash
# This should NOT show your API key
git grep -i "633e3a1293544baa839761eaadeea53a"

# This should show .env is ignored
git status
```

Your `.env` file should appear as "untracked" or not appear at all (because it's in `.gitignore`).
