exports.handler = async function(event, context) {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  try {
    const { category, search, page = 1 } = event.queryStringParameters || {};
    const API_KEY = process.env.VITE_NEWS_API_KEY;
    
    if (!API_KEY) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'API key not configured' }),
      };
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
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error('Error fetching news:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to fetch news' }),
    };
  }
};
