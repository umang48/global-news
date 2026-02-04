import NewsCard from './NewsCard';

const NewsGrid = ({ articles, loading, onBookmark, isBookmarked }) => {
  if (loading && articles.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
            <div className="w-full h-56 bg-gradient-to-br from-gray-200 to-gray-300"></div>
            <div className="p-6 space-y-4">
              <div className="h-4 bg-gray-200 rounded-full w-1/3"></div>
              <div className="h-5 bg-gray-300 rounded-full w-full"></div>
              <div className="h-5 bg-gray-300 rounded-full w-5/6"></div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-200 rounded-full"></div>
                <div className="h-3 bg-gray-200 rounded-full w-4/5"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mb-6">
          <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
        <p className="text-gray-600">Try adjusting your search or category</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article, index) => (
        <NewsCard
          key={`${article.url}-${index}`}
          article={article}
          onBookmark={onBookmark}
          isBookmarked={isBookmarked(article)}
        />
      ))}
    </div>
  );
};

export default NewsGrid;
