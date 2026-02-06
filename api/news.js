export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const { category, search, page = 1 } = req.query;
    const API_KEY = process.env.VITE_NEWS_API_KEY;
    
    if (!API_KEY) {
      return res.status(500).json({ error: 'API key not configured' });
    }
    
    let url;
    if (search) {
      url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(search)}&lang=en&max=10&page=${page}&apikey=${API_KEY}`;
    } else {
      const gnewsCategory = category || 'general';
      url = `https://gnews.io/api/v4/top-headlines?category=${gnewsCategory}&lang=en&max=10&page=${page}&apikey=${API_KEY}`;
    }
    
    const response = await fetch(url);
    const data = await response.json();
    
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
}
