import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static files from dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// API proxy endpoint
app.get('/api/news', async (req, res) => {
  try {
    const { category, search, page = 1 } = req.query;
    const API_KEY = process.env.VITE_NEWS_API_KEY;
    
    let url;
    if (search) {
      url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(search)}&lang=en&max=10&page=${page}&apikey=${API_KEY}`;
    } else {
      const gnewsCategory = category || 'general';
      url = `https://gnews.io/api/v4/top-headlines?category=${gnewsCategory}&lang=en&max=10&page=${page}&apikey=${API_KEY}`;
    }
    
    const response = await fetch(url);
    const data = await response.json();
    
    res.json(data);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
