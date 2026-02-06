# Global News Aggregator

A modern, responsive news dashboard built with React and Tailwind CSS. Browse headlines by category, search articles, bookmark favorites, and load more content with pagination.

## Features

- **Category Tabs**: Browse news by General, Tech, Sports, Business, Health, Entertainment, and Science
- **Search Functionality**: Filter articles by keyword
- **Pagination**: Load more articles with a single click
- **Bookmarks**: Save articles to read later (stored in localStorage)
- **Responsive Design**: Beautiful UI that works on all devices
- **Modern UI**: Built with Tailwind CSS for a clean, professional look
- **No CORS Issues**: CurrentsAPI works directly from the browser

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd news-aggregator
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Then edit `.env` and add your NewsAPI key:

```
VITE_NEWS_API_KEY=your_actual_api_key_here
```

**Get Your API Key:**
- Visit [CurrentsAPI.services](https://currentsapi.services/en)
- Click "Get Your Free API Key" and sign up
- Copy your API key and paste it in the `.env` file

**Why CurrentsAPI?**
- ✅ Works on live/production sites (no CORS issues)
- ✅ Free tier: 600 requests per day
- ✅ No credit card required
- ✅ Real-time news from worldwide sources

### 4. Run the Development Server

```bash
npm run dev
```

The app will open at `http://localhost:5173`

## Security Notes

- The `.env` file is included in `.gitignore` and will NOT be pushed to GitHub
- Never commit your API key directly in the code
- Use `.env.example` as a template for other developers
- For production deployment, set environment variables in your hosting platform

## Technologies Used

- **React** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **CurrentsAPI** - News data source (works on production sites, no CORS issues)
- **localStorage** - Bookmark persistence

## Project Structure

```
src/
├── components/
│   ├── Header.jsx           # App header with bookmark toggle
│   ├── CategoryTabs.jsx     # Category navigation
│   ├── SearchBar.jsx        # Search input
│   ├── NewsGrid.jsx         # Grid layout for articles
│   ├── NewsCard.jsx         # Individual article card
│   └── BookmarkedNews.jsx   # Bookmarked articles view
├── App.jsx                  # Main app component
└── index.css                # Tailwind imports
```

## API Information

This app uses **CurrentsAPI** which provides:
- ✅ Works on production/live sites (no CORS issues!)
- ✅ 600 free requests per day
- ✅ Real-time news from worldwide sources
- ✅ Multiple languages and categories
- ✅ No credit card required

Get your free API key at [currentsapi.services](https://currentsapi.services/en)

Enjoy your news aggregator!
