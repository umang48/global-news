import { useState, useEffect } from 'react';
import Header from './components/Header';
import CategoryTabs from './components/CategoryTabs';
import SearchBar from './components/SearchBar';
import NewsGrid from './components/NewsGrid';
import BookmarkedNews from './components/BookmarkedNews';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [bookmarks, setBookmarks] = useState([]);
  const [showBookmarks, setShowBookmarks] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('bookmarks');
    if (saved) setBookmarks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    fetchNews(true);
  }, [category, searchQuery]);

  const fetchNews = async (reset = false) => {
    setLoading(true);
    const currentPage = reset ? 1 : page;
    
    try {
      const endpoint = searchQuery 
        ? `${BASE_URL}/everything?q=${searchQuery}&page=${currentPage}&pageSize=12`
        : `${BASE_URL}/top-headlines?category=${category}&country=us&page=${currentPage}&pageSize=12`;
      
      const response = await fetch(`${endpoint}&apiKey=${API_KEY}`);
      const data = await response.json();
      
      if (data.status === 'ok') {
        setArticles(reset ? data.articles : [...articles, ...data.articles]);
        setHasMore(data.articles.length === 12);
        setPage(reset ? 2 : page + 1);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    }
    setLoading(false);
  };

  const handleLoadMore = () => {
    fetchNews(false);
  };

  const toggleBookmark = (article) => {
    const isBookmarked = bookmarks.some(b => b.url === article.url);
    const updated = isBookmarked
      ? bookmarks.filter(b => b.url !== article.url)
      : [...bookmarks, article];
    
    setBookmarks(updated);
    localStorage.setItem('bookmarks', JSON.stringify(updated));
  };

  const isBookmarked = (article) => {
    return bookmarks.some(b => b.url === article.url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header 
        bookmarkCount={bookmarks.length}
        onToggleBookmarks={() => setShowBookmarks(!showBookmarks)}
        showBookmarks={showBookmarks}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!showBookmarks ? (
          <>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Discover News
              </h2>
              <p className="text-gray-600 text-lg">
                Stay updated with the latest headlines from around the world
              </p>
            </div>
            
            <CategoryTabs 
              activeCategory={category}
              onCategoryChange={(cat) => {
                setCategory(cat);
                setSearchQuery('');
                setPage(1);
              }}
            />
            
            <SearchBar 
              value={searchQuery}
              onChange={(query) => {
                setSearchQuery(query);
                setPage(1);
              }}
            />
            
            <NewsGrid 
              articles={articles}
              loading={loading}
              onBookmark={toggleBookmark}
              isBookmarked={isBookmarked}
            />
            
            {hasMore && !loading && articles.length > 0 && (
              <div className="text-center mt-12">
                <button
                  onClick={handleLoadMore}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Load More Articles
                </button>
              </div>
            )}
          </>
        ) : (
          <BookmarkedNews 
            bookmarks={bookmarks}
            onBookmark={toggleBookmark}
          />
        )}
      </main>
      
      <footer className="bg-white border-t mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>Powered by NewsAPI • Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
