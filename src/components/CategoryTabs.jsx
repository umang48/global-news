const categories = [
  { id: 'general', label: 'General', icon: '🌍' },
  { id: 'technology', label: 'Tech', icon: '💻' },
  { id: 'sports', label: 'Sports', icon: '⚽' },
  { id: 'business', label: 'Business', icon: '💼' },
  { id: 'health', label: 'Health', icon: '🏥' },
  { id: 'entertainment', label: 'Entertainment', icon: '🎬' },
  { id: 'science', label: 'Science', icon: '🔬' },
];

const CategoryTabs = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="mb-8">
      <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap transform hover:scale-105 ${
              activeCategory === cat.id
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/50'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
            }`}
          >
            <span className="text-xl">{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
