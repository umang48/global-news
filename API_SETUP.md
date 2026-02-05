# GNews API Setup Guide

## Why GNews API?

We switched from NewsAPI to GNews because:
- ✅ **Works on live sites** - NewsAPI free tier only works on localhost
- ✅ **100 requests/day** - Sufficient for personal projects
- ✅ **No credit card required** - Completely free tier
- ✅ **Production ready** - Deploy anywhere without issues

## Getting Your API Key

### Step 1: Sign Up
1. Go to [https://gnews.io/](https://gnews.io/)
2. Click "Get API Key" button
3. Fill in your details (name, email, password)
4. Verify your email address

### Step 2: Get Your Key
1. Log in to your GNews dashboard
2. Your API key will be displayed on the dashboard
3. Copy the API key

### Step 3: Add to Your Project
1. Open the `.env` file in your project root
2. Replace the placeholder with your actual key:
   ```
   VITE_NEWS_API_KEY=your_actual_gnews_api_key_here
   ```
3. Save the file
4. Restart your dev server: `npm run dev`

## API Limits (Free Tier)

- **100 requests per day**
- **10 articles per request**
- **60,000+ news sources**
- **Multiple languages supported**

## Testing Your Setup

After adding your API key:

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:5173

3. You should see news articles loading

4. Try different categories and search

## Troubleshooting

### No articles showing?
- Check if your API key is correct in `.env`
- Make sure the `.env` file is in the project root
- Restart the dev server after changing `.env`
- Check browser console for error messages

### 403 Error?
- Your API key might be invalid
- Check if you've exceeded the daily limit (100 requests)
- Wait 24 hours for the limit to reset

### Still not working?
- Verify the `.env` file format (no quotes around the key)
- Check if `VITE_` prefix is present
- Clear browser cache and reload

## For Production Deployment

When deploying to Vercel/Netlify:
1. Add environment variable in hosting dashboard
2. Variable name: `VITE_NEWS_API_KEY`
3. Variable value: Your GNews API key
4. Redeploy your app

Your app will now work perfectly on live sites! 🎉
