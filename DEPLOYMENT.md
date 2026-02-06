# Deployment Guide

## Good News! 🎉

**CurrentsAPI has no CORS restrictions!** This means:
- ✅ No backend proxy needed
- ✅ Direct API calls from the browser work perfectly
- ✅ Simpler deployment process
- ✅ Works on any hosting platform

## Deploying to Vercel (Recommended)

### Step 1: Push to GitHub
```bash
cd news-aggregator
git init
git add .
git commit -m "Initial commit: Global News Aggregator"
git remote add origin https://github.com/yourusername/repo-name.git
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add Environment Variable:
   - **Name**: `VITE_NEWS_API_KEY`
   - **Value**: Your CurrentsAPI key
6. Click "Deploy"

✅ Your app will be live in 2-3 minutes!

## Deploying to Netlify

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Add Environment Variable:
   - **Key**: `VITE_NEWS_API_KEY`
   - **Value**: Your CurrentsAPI key
6. Click "Deploy site"

✅ Your app will be live in 2-3 minutes!

## Deploying to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update `vite.config.js` to add base path:
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',
     plugins: [react()],
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

**Note:** For GitHub Pages, you'll need to hardcode the API key in the build (not recommended) or use GitHub Actions with secrets.

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

## Testing Production Build Locally

```bash
# Build the app
npm run build

# Preview the build
npm run preview
```

Then open http://localhost:4173

## Environment Variables

All platforms need this environment variable:
- **Name/Key**: `VITE_NEWS_API_KEY`
- **Value**: Your CurrentsAPI key from [currentsapi.services](https://currentsapi.services/en)

## Troubleshooting

### API not working in production?
- Verify `VITE_NEWS_API_KEY` is set in hosting platform
- Check if you exceeded the 600 requests/day limit
- Make sure the environment variable name is exactly `VITE_NEWS_API_KEY`

### Build fails?
- Make sure all dependencies are installed
- Check Node.js version (use Node 18+)
- Verify `package.json` scripts are correct

### Articles not loading?
- Check browser console for errors
- Verify your API key is valid
- Test the API key locally first

## Architecture

```
Browser → CurrentsAPI (direct, no CORS issues!)
```

Simple and straightforward! Your API key is bundled in the build, which is fine for CurrentsAPI's free tier. For production apps with sensitive keys, consider using a backend proxy. 🔒
