# CurrentsAPI Setup Guide

## Why CurrentsAPI?

We use CurrentsAPI because:
- ✅ **No CORS issues** - Works perfectly on live sites
- ✅ **600 requests/day** - More generous than most free tiers
- ✅ **No credit card required** - Completely free tier
- ✅ **Production ready** - Deploy anywhere without issues
- ✅ **Worldwide sources** - News from multiple countries and languages

## Getting Your API Key

### Step 1: Sign Up
1. Go to [https://currentsapi.services/en](https://currentsapi.services/en)
2. Click "Get Your Free API Key" button
3. Fill in your details (name, email, password)
4. Verify your email address

### Step 2: Get Your Key
1. Log in to your CurrentsAPI dashboard
2. Your API key will be displayed on the dashboard
3. Copy the API key

### Step 3: Add to Your Project
1. Open the `.env` file in your project root
2. Replace the placeholder with your actual key:
   ```
   VITE_NEWS_API_KEY=your_actual_currentsapi_key_here
   ```
3. Save the file
4. Restart your dev server: `npm run dev`

## API Limits (Free Tier)

- **600 requests per day** (much better than competitors!)
- **Unlimited articles per request**
- **Worldwide news sources**
- **Multiple languages supported**
- **Multiple categories**

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

### 401 Unauthorized Error?
- Your API key might be invalid
- Make sure you copied the entire key
- Check if there are extra spaces in the `.env` file

### 429 Too Many Requests?
- You've exceeded the daily limit (600 requests)
- Wait 24 hours for the limit to reset
- Consider caching results to reduce API calls

### Still not working?
- Verify the `.env` file format (no quotes around the key)
- Check if `VITE_` prefix is present
- Clear browser cache and reload

## For Production Deployment

When deploying to Vercel/Netlify:
1. Add environment variable in hosting dashboard
2. Variable name: `VITE_NEWS_API_KEY`
3. Variable value: Your CurrentsAPI key
4. Redeploy your app

**No proxy needed!** CurrentsAPI works directly from the browser without CORS issues! 🎉
