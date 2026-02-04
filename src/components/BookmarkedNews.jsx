import NewsCard from './NewsCard';

const BookmarkedNews = ({ bookmarks, onBookmark }) => {
  if (bookmarks.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mb-6">
          <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">No bookmarks yet</h2>
        <p className="text-gray-600 text-lg">Start saving articles to read them later</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          Your Bookmarks
        </h2>
        <p className="text-gray-600 text-lg">
          {bookmarks.length} {bookmarks.length === 1 ? 'article' : 'articles'} saved for later
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bookmarks.map((article, index) => (
          <NewsCard
            key={`${article.url}-${index}`}
            article={article}
            onBookmark={onBookmark}
            isBookmarked={true}
          />
        ))}
      </div>
    </div>
  );
};

export default BookmarkedNews;
